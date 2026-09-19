import { ArrowRight, Flame } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const PromoBanner = ({ onNavigate }) => {
  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(135deg, #181715 0%, #2b261f 50%, #151412 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Subtle Fashion Graphic */}
      <div style={{
        position: 'absolute',
        right: '5%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '420px',
        height: '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197, 160, 89, 0.22) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          alignItems: 'center',
          gap: '40px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#f87171',
              padding: '6px 14px',
              borderRadius: '4px',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              <Flame size={15} />
              <span>{SITE_CONFIG.salePromo.badge}</span>
            </div>

            <h2 style={{
              color: '#ffffff',
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              lineHeight: 1.15,
              marginBottom: '14px'
            }}>
              {SITE_CONFIG.salePromo.title}
            </h2>

            <div style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 800,
              color: 'var(--accent-gold)',
              fontFamily: 'var(--font-serif)',
              lineHeight: 1,
              marginBottom: '16px'
            }}>
              {SITE_CONFIG.salePromo.discount}
            </div>

            <p style={{
              color: '#dedede',
              fontSize: '1.05rem',
              marginBottom: '28px',
              maxWidth: '500px',
              lineHeight: 1.6
            }}>
              {SITE_CONFIG.salePromo.description}
            </p>

            <button
              className="btn btn-gold btn-lg"
              onClick={() => onNavigate('shop')}
            >
              <span>{SITE_CONFIG.salePromo.cta}</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Visual Showcase Card */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(197, 160, 89, 0.3)'
          }}>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80"
              alt="Summer Fashion Sale"
              style={{ width: '100%', height: '380px', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              background: 'rgba(18, 18, 18, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '16px 20px',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#c5a059', fontWeight: '700', textTransform: 'uppercase' }}>
                  Deal of the Week
                </div>
                <div style={{ fontWeight: '600', color: '#ffffff', fontSize: '0.95rem' }}>
                  Ethnic Kurtis & Silk Sarees
                </div>
              </div>
              <span className="badge badge-sale">50% OFF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
