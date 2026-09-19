import { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const Newsletter = ({ onToast }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    if (onToast) {
      onToast(`Thank you for subscribing! Check ${email} for exclusive offers.`);
    }
  };

  return (
    <section className="section-padding" style={{
      backgroundColor: 'var(--bg-beige-light)',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container">
        <div style={{
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--accent-gold-light)',
            border: '1px solid var(--accent-gold-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <Mail size={22} color="var(--accent-gold)" />
          </div>

          <span className="section-subtitle">Insider Access</span>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>
            Stay Updated With Latest Fashion
          </h2>
          <p className="section-desc" style={{ marginBottom: '28px' }}>
            Subscribe to receive festive drop notifications, seasonal sale discount codes, and styling advice straight to your inbox.
          </p>

          {subscribed ? (
            <div style={{
              background: '#ffffff',
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: '#15803d',
              fontWeight: '600'
            }}>
              <CheckCircle2 size={20} />
              <span>You have successfully subscribed to Maurya Vastralay fashion updates!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              gap: '10px',
              maxWidth: '520px',
              margin: '0 auto',
              flexWrap: 'wrap'
            }}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: '1 1 240px',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  backgroundColor: '#ffffff',
                  fontSize: '0.92rem',
                  outline: 'none',
                  color: 'var(--text-primary)'
                }}
              />
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ flex: '0 0 auto' }}
              >
                <span>Subscribe</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}

          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '14px' }}>
            We respect your privacy. No spam, unsubscribe anytime with one click.
          </p>
        </div>
      </div>
    </section>
  );
};
