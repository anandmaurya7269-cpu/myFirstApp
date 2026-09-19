import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS } from '../../data/products';

export const CustomerReviews = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Real Experiences</span>
          <h2 className="section-title">Words From Our Customers</h2>
          <p className="section-desc">
            Trusted by thousands of families across Eastern Uttar Pradesh and nationwide for their everyday and special moments.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px'
        }}>
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              style={{
                background: '#ffffff',
                padding: '32px 28px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <Quote
                size={36}
                color="var(--accent-gold)"
                style={{ opacity: 0.25, position: 'absolute', top: '24px', right: '24px' }}
              />

              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#eab308" color="#eab308" />
                ))}
              </div>

              {/* Review Text */}
              <p style={{
                fontSize: '0.96rem',
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                marginBottom: '24px',
                lineHeight: '1.6',
                flex: 1
              }}>
                "{rev.comment}"
              </p>

              {/* Customer Author Row */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--bg-beige)',
                  color: 'var(--text-primary)',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.95rem'
                }}>
                  {rev.author.charAt(0)}
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {rev.author}
                    </span>
                    {rev.verified && (
                      <CheckCircle size={14} color="#15803d" title="Verified Customer" />
                    )}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {rev.city} • {rev.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
