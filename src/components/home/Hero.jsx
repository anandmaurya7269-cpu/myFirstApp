import { ArrowRight, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const Hero = ({ onNavigate }) => {
  return (
    <section className="hero-section" style={{
      position: 'relative',
      minHeight: '82vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #181716 0%, #2a2723 60%, #1e1d1a 100%)',
      overflow: 'hidden',
      color: '#ffffff'
    }}>
      {/* Background Editorial Image with Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        opacity: 0.42,
        backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&auto=format&fit=crop&q=85')`,
        backgroundPosition: 'center 30%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} />

      {/* Luxury Subtle Gradient Accents */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197, 160, 89, 0.25) 0%, transparent 70%)',
        zIndex: 2,
        filter: 'blur(50px)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 3, padding: '60px 24px' }}>
        <div style={{ maxWidth: '680px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(197, 160, 89, 0.15)',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            color: '#e6cb95',
            borderRadius: '4px',
            padding: '6px 14px',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '20px'
          }}>
            <Sparkles size={14} />
            <span>New Season 2026 Collection</span>
          </div>

          {/* Heading */}
          <h1 style={{
            color: '#ffffff',
            fontSize: 'clamp(2.5rem, 5vw + 1rem, 4.4rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '20px',
            textShadow: '0 2px 10px rgba(0,0,0,0.4)'
          }}>
            {SITE_CONFIG.hero.title}
          </h1>

          {/* Subtitle */}
          <p style={{
            color: '#e2ded7',
            fontSize: 'clamp(1.05rem, 1.5vw + 0.5rem, 1.25rem)',
            lineHeight: 1.6,
            marginBottom: '36px',
            maxWidth: '560px'
          }}>
            {SITE_CONFIG.hero.subtitle}
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              className="btn btn-gold btn-lg"
              onClick={() => onNavigate('shop')}
            >
              <span>{SITE_CONFIG.hero.primaryCta}</span>
              <ArrowRight size={18} />
            </button>
            <button
              className="btn btn-white btn-lg"
              onClick={() => {
                const el = document.getElementById('categories-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onNavigate('shop');
              }}
            >
              <span>{SITE_CONFIG.hero.secondaryCta}</span>
            </button>
          </div>

          {/* Trust points banner under CTAs */}
          <div style={{
            display: 'flex',
            gap: '28px',
            marginTop: '48px',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-gold)' }}>5,000+</div>
              <div style={{ fontSize: '0.78rem', color: '#c7c2ba', letterSpacing: '0.04em' }}>Happy Families</div>
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-gold)' }}>100%</div>
              <div style={{ fontSize: '0.78rem', color: '#c7c2ba', letterSpacing: '0.04em' }}>Quality Handpicked</div>
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-gold)' }}>₹999+</div>
              <div style={{ fontSize: '0.78rem', color: '#c7c2ba', letterSpacing: '0.04em' }}>Free All-India Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
