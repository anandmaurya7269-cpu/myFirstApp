import { ShieldCheck, Tag, ShoppingBag, Truck } from 'lucide-react';
import { STORE_FEATURES } from '../../data/products';

export const WhyChooseUs = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck size={28} color="var(--accent-gold)" />;
      case 'Tag':
        return <Tag size={28} color="var(--accent-gold)" />;
      case 'ShoppingBag':
        return <ShoppingBag size={28} color="var(--accent-gold)" />;
      case 'Truck':
        return <Truck size={28} color="var(--accent-gold)" />;
      default:
        return <ShieldCheck size={28} color="var(--accent-gold)" />;
    }
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-cream)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Commitment</span>
          <h2 className="section-title">Why Choose Maurya Vastralay</h2>
          <p className="section-desc">
            For over a decade, we have been delivering uncompromised fabric quality, genuine artisan collections, and dependable family fashion.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {STORE_FEATURES.map((feat) => (
            <div
              key={feat.id}
              style={{
                background: '#ffffff',
                padding: '32px 24px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-normal)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '8px',
                background: 'var(--accent-gold-light)',
                border: '1px solid var(--accent-gold-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {getIcon(feat.icon)}
              </div>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
                {feat.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
