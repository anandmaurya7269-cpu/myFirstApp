import { ArrowRight, Award, HeartHandshake, Sparkles, Users, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const AboutPage = ({ onNavigate }) => {
  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Editorial Header */}
        <div className="section-header" style={{ maxWidth: '800px', marginBottom: '60px' }}>
          <span className="section-subtitle">Our Heritage & Craft</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '16px' }}>
            Dressing Families With Pride & Affordability Since {SITE_CONFIG.establishedYear}
          </h1>
          <p className="section-desc" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            At <strong>{SITE_CONFIG.name}</strong>, we believe elegance shouldn't come with an unattainable price tag. For over a decade, we have been a beloved local fashion destination offering stylish, durable, and comfortable apparel for Men, Women, and Children.
          </p>
        </div>

        {/* Story Section with Visual Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
          marginBottom: '80px'
        }}>
          <div>
            <span className="section-subtitle">The Maurya Story</span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>
              Rooted in Tradition, Tailored for Today
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
              What began in {SITE_CONFIG.establishedYear} as a humble family-run retail counter in {SITE_CONFIG.address.city} has blossomed into a trusted local household name. We noticed that customers were forced to choose between exorbitant big-mall labels and low-quality street apparel.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
              {SITE_CONFIG.name} bridged that gap. By sourcing directly from skilled handloom clusters, textile hubs in Surat, Varanasi, and Delhi, we eliminate unnecessary distributor markups and deliver genuine fabrics directly into our customers' hands.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--accent-gold)" />
                <span style={{ fontWeight: '600' }}>Authentic Banarasi & Handloom Silk weaves</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--accent-gold)" />
                <span style={{ fontWeight: '600' }}>100% Breathable cottons & linens tailored for Indian climates</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--accent-gold)" />
                <span style={{ fontWeight: '600' }}>Child-safe, play-tested durable fabrics for kids</span>
              </div>
            </div>
          </div>

          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
              alt="Clothing Store Interior"
              style={{ width: '100%', height: '440px', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              background: 'rgba(18, 18, 18, 0.88)',
              backdropFilter: 'blur(8px)',
              padding: '16px 20px',
              borderRadius: '6px',
              color: '#ffffff'
            }}>
              <div style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--accent-gold)' }}>10+ Years of Trust</div>
              <div style={{ fontSize: '0.85rem', color: '#c7c2ba' }}>Serving over 5,000+ loyal local and online families</div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence: Mission, Quality Promise, Customer-First, Craft */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '80px'
        }}>
          {/* Pillar 1: Mission */}
          <div style={{
            background: '#ffffff',
            padding: '36px 28px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '8px',
              background: 'var(--accent-gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px',
              color: 'var(--accent-gold)'
            }}>
              <Sparkles size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.92rem' }}>
              To make high-grade contemporary fashion and traditional Indian elegance accessible, dignified, and affordable for every member of the family.
            </p>
          </div>

          {/* Pillar 2: Quality Promise */}
          <div style={{
            background: '#ffffff',
            padding: '36px 28px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '8px',
              background: 'var(--accent-gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px',
              color: 'var(--accent-gold)'
            }}>
              <Award size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Quality Promise</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.92rem' }}>
              Every garment undergoes stringent checks for colorfastness, fabric shrinkage, and seam integrity. If an item doesn't meet our standard, it doesn't make it to our shelves.
            </p>
          </div>

          {/* Pillar 3: Customer-First Approach */}
          <div style={{
            background: '#ffffff',
            padding: '36px 28px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '8px',
              background: 'var(--accent-gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px',
              color: 'var(--accent-gold)'
            }}>
              <HeartHandshake size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Customer-First</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.92rem' }}>
              From transparent pricing to personalized WhatsApp sizing consultations and quick 7-day exchanges, your happiness and peace of mind are our ultimate priority.
            </p>
          </div>

          {/* Pillar 4: Community & Inclusivity */}
          <div style={{
            background: '#ffffff',
            padding: '36px 28px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '8px',
              background: 'var(--accent-gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px',
              color: 'var(--accent-gold)'
            }}>
              <Users size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>For Every Generation</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.92rem' }}>
              Grandparents looking for authentic dhotis and sarees, parents seeking smart workwear, and youngsters wanting on-trend styles all find their match under one roof.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #181716 0%, #2b2723 100%)',
          borderRadius: 'var(--radius-md)',
          padding: '48px 36px',
          textAlign: 'center',
          color: '#ffffff'
        }}>
          <h2 style={{ color: '#ffffff', fontSize: '2.2rem', marginBottom: '12px' }}>
            Experience the Maurya Vastralay Difference
          </h2>
          <p style={{ color: '#d8d4cd', maxWidth: '560px', margin: '0 auto 28px', fontSize: '1rem' }}>
            Browse our handpicked seasonal collections online or drop by our retail store for a warm in-person shopping experience.
          </p>
          <button
            className="btn btn-gold btn-lg"
            onClick={() => onNavigate('shop')}
          >
            <span>Explore Our Catalog</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
