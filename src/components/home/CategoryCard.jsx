import { ArrowRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../../data/products';

export const CategorySection = ({ onNavigate }) => {
  return (
    <section id="categories-section" className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Curated For Everyone</span>
          <h2 className="section-title">Explore Our Collections</h2>
          <p className="section-desc">
            Discover tailored formalwear, exquisite celebratory weaves, and everyday comfortable essentials for the whole household.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px'
        }}>
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigate(cat.id)}
              style={{
                position: 'relative',
                height: '420px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
              }}
              className="category-card-wrap"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease'
                }}
              />

              {/* Gradient Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(18, 18, 18, 0.88) 0%, rgba(18, 18, 18, 0.3) 50%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '32px'
              }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  marginBottom: '6px'
                }}>
                  {cat.itemCount}
                </span>

                <h3 style={{
                  color: '#ffffff',
                  fontSize: '1.75rem',
                  marginBottom: '8px',
                  fontWeight: 600
                }}>
                  {cat.title}
                </h3>

                <p style={{
                  color: '#dedede',
                  fontSize: '0.88rem',
                  marginBottom: '20px',
                  lineHeight: '1.4'
                }}>
                  {cat.tagline}
                </p>

                <div>
                  <button
                    className="btn btn-gold btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(cat.id);
                    }}
                  >
                    <span>Shop Now</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
