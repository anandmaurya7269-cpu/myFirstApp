import { useState } from 'react';
import { X, Mail, Lock, User, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AuthModal = ({ isOpen, onClose, onToast }) => {
  const [mode, setMode] = useState('login'); // 'login' | 'signup' | 'forgot'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, signup, loginWithGoogle, resetPassword } = useAuth();

  if (!isOpen) return null;

  const getFriendlyError = (err) => {
    const code = err?.code || '';
    if (code.includes('user-not-found') || code.includes('invalid-credential') || code.includes('wrong-password')) {
      return 'Email ya Password galat hai. Kripya dobara check karein.';
    }
    if (code.includes('email-already-in-use')) {
      return 'Yeh Email pehle se registered hai. Kripya Login karein.';
    }
    if (code.includes('weak-password')) {
      return 'Password kam se kam 6 characters ka hona chahiye.';
    }
    if (code.includes('invalid-email')) {
      return 'Sahi Email address enter karein.';
    }
    if (code.includes('popup-closed-by-user')) {
      return 'Google sign-in popup band kar diya gaya.';
    }
    return err?.message || 'Kuchh gadbad hui. Kripya dobara koshish karein.';
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setInfo('');
    setLoading(true);

    try {
      if (mode === 'signup') {
        if (!name.trim()) {
          setError('Kripya apna poora naam likhein.');
          setLoading(false);
          return;
        }
        await signup(email, password, name.trim());
        if (onToast) onToast(`Swagat hai, ${name}! Account safaltapoorvak ban gaya.`);
        onClose();
      } else if (mode === 'login') {
        await login(email, password);
        if (onToast) onToast('Aap safaltapoorvak Login ho gaye hain!');
        onClose();
      } else if (mode === 'forgot') {
        await resetPassword(email);
        setInfo('Password reset link aapke email par bhej diya gaya hai!');
      }
    } catch (err) {
      setError(getFriendlyError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      const result = await loginWithGoogle();
      const userName = result.user?.displayName || 'Customer';
      if (onToast) onToast(`Swagat hai, ${userName}! Google se Login safal raha.`);
      onClose();
    } catch (err) {
      setError(getFriendlyError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '440px', padding: '32px 28px' }}
      >
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close"
          style={{ top: '16px', right: '16px' }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div className="brand-logo-text" style={{ fontSize: '1.4rem', marginBottom: '4px' }}>
            MAURYA <span>VASTRALAY</span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            {mode === 'login' && 'Sign in to access your orders & wishlist'}
            {mode === 'signup' && 'Create an account for quick orders & offers'}
            {mode === 'forgot' && 'Reset your account password'}
          </p>
        </div>

        {/* Tabs for Login / Signup */}
        {mode !== 'forgot' && (
          <div
            style={{
              display: 'flex',
              background: 'var(--bg-cream)',
              padding: '4px',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '20px'
            }}
          >
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError('');
                setInfo('');
              }}
              style={{
                flex: 1,
                padding: '8px 12px',
                border: 'none',
                background: mode === 'login' ? '#ffffff' : 'transparent',
                fontWeight: mode === 'login' ? '600' : '500',
                color: mode === 'login' ? 'var(--text-primary)' : 'var(--text-muted)',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                boxShadow: mode === 'login' ? 'var(--shadow-sm)' : 'none',
                transition: 'var(--transition-fast)'
              }}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setError('');
                setInfo('');
              }}
              style={{
                flex: 1,
                padding: '8px 12px',
                border: 'none',
                background: mode === 'signup' ? '#ffffff' : 'transparent',
                fontWeight: mode === 'signup' ? '600' : '500',
                color: mode === 'signup' ? 'var(--text-primary)' : 'var(--text-muted)',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                boxShadow: mode === 'signup' ? 'var(--shadow-sm)' : 'none',
                transition: 'var(--transition-fast)'
              }}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div
            style={{
              background: '#fef2f2',
              border: '1px solid #fecaca',
              color: 'var(--danger)',
              padding: '10px 12px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}
          >
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        {/* Info Alert */}
        {info && (
          <div
            style={{
              background: 'var(--success-bg)',
              border: '1px solid #bbf7d0',
              color: 'var(--success)',
              padding: '10px 12px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}
          >
            <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
            <span>{info}</span>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleAuthSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {mode === 'signup' && (
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: '600', display: 'block', marginBottom: '6px' }}>
                Full Name
              </label>
              <div style={{ position: 'relative' }}>
                <User size={18} color="#88847f" style={{ position: 'absolute', left: '12px', top: '11px' }} />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Maurya"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 38px',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: '0.82rem', fontWeight: '600', display: 'block', marginBottom: '6px' }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color="#88847f" style={{ position: 'absolute', left: '12px', top: '11px' }} />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px 10px 38px',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
            </div>
          </div>

          {mode !== 'forgot' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: '600' }}>Password</label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => {
                      setMode('forgot');
                      setError('');
                      setInfo('');
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-gold-hover)',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={18} color="#88847f" style={{ position: 'absolute', left: '12px', top: '11px' }} />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 38px',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary btn-block btn-lg"
            disabled={loading}
            style={{ marginTop: '6px' }}
          >
            <span>
              {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : mode === 'signup' ? 'Create Account' : 'Send Reset Link'}
            </span>
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        {mode === 'forgot' && (
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError('');
                setInfo('');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Back to Sign In
            </button>
          </div>
        )}

        {/* Divider */}
        {mode !== 'forgot' && (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '20px 0 16px',
                color: 'var(--text-muted)',
                fontSize: '0.8rem'
              }}
            >
              <div style={{ flex: 1, height: '1px', background: 'var(--border-light)' }} />
              <span style={{ padding: '0 12px' }}>OR</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--border-light)' }} />
            </div>

            {/* Google Sign In Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              style={{
                width: '100%',
                padding: '10px 16px',
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#c0b8ad')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path
                  fill="#4285F4"
                  d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.616z"
                />
                <path
                  fill="#34A853"
                  d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
                />
                <path
                  fill="#FBBC05"
                  d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.59.102-1.167.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"
                />
                <path
                  fill="#EA4335"
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
