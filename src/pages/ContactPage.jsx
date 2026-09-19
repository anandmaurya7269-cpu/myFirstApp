import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const ContactPage = ({ onToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onToast) {
      onToast(`Thank you, ${formData.name}! Your message has been sent to our team.`);
    }
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ maxWidth: '720px' }}>
          <span className="section-subtitle">Get In Touch</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '14px' }}>
            Visit Our Store Or Reach Out Online
          </h1>
          <p className="section-desc">
            Whether you need assistance with custom bridal orders, sizing recommendations, or delivery queries, our team is always ready to assist you.
          </p>
        </div>

        {/* Contact Layout Grid: Information Cards + Form */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          marginBottom: '56px'
        }}>
          {/* Left Column: Contact Cards & Direct WhatsApp */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Direct WhatsApp Callout Banner */}
            <div style={{
              background: 'linear-gradient(135deg, #128c7e 0%, #075e54 100%)',
              color: '#ffffff',
              padding: '24px 28px',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#25d366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}>
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 style={{ color: '#ffffff', fontSize: '1.2rem', margin: 0 }}>Instant WhatsApp Assistance</h3>
                  <p style={{ color: '#d1fae5', fontSize: '0.85rem', margin: 0 }}>Average response time: under 10 minutes</p>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#e6fffa', lineHeight: '1.5' }}>
                Chat with our in-store stylist for video shopping, fabric closeups, and instant order tracking.
              </p>
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white"
                style={{
                  alignSelf: 'flex-start',
                  fontWeight: '700',
                  color: '#075e54',
                  backgroundColor: '#ffffff'
                }}
              >
                <MessageCircle size={18} color="#25d366" />
                <span>Chat on WhatsApp: {SITE_CONFIG.whatsapp}</span>
              </a>
            </div>

            {/* Store Information Card */}
            <div style={{
              background: '#ffffff',
              padding: '32px 28px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <h3 style={{ fontSize: '1.25rem', paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                Store Information
              </h3>

              {/* Address */}
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'var(--accent-gold-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  flexShrink: 0
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
                    Shop Address
                  </div>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginTop: '2px', lineHeight: '1.4' }}>
                    {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.line2}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} - {SITE_CONFIG.address.pincode}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'var(--accent-gold-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  flexShrink: 0
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
                    Phone Number
                  </div>
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`} style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'var(--accent-gold-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  flexShrink: 0
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
                    Customer Care Email
                  </div>
                  <a href={`mailto:${SITE_CONFIG.email}`} style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'var(--accent-gold-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  flexShrink: 0
                }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
                    Store Hours
                  </div>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginTop: '2px' }}>
                    Monday - Sunday: {SITE_CONFIG.hours.weekdays}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Open all 7 days with dedicated customer parking
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div style={{
            background: '#ffffff',
            padding: '36px 32px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Send Us A Message</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Have a question about sizes, fabrics, bulk orders or store timing? Write to us below:
            </p>

            {isSubmitted ? (
              <div style={{
                padding: '30px 20px',
                textAlign: 'center',
                background: 'var(--success-bg)',
                borderRadius: '8px',
                border: '1px solid #bbf7d0'
              }}>
                <CheckCircle2 size={40} color="#15803d" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ color: '#15803d', fontSize: '1.2rem', marginBottom: '8px' }}>
                  Thank you for contacting Maurya Vastralay!
                </h4>
                <p style={{ color: '#166534', fontSize: '0.9rem', marginBottom: '20px' }}>
                  Our store manager will reach out to you via phone or email shortly.
                </p>
                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell us about the clothing styles or assistance you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ marginTop: '8px' }}
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Location Showcase */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-light)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{
            padding: '24px 28px',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Store Location Map</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                {SITE_CONFIG.address.fullAddress}
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <MapPin size={14} />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Interactive Styled Google Map View */}
          <div style={{ position: 'relative', height: '360px', width: '100%', background: '#e5e3df' }}>
            <iframe
              title="Maurya Vastralay Store Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113998.41113010776!2d83.33230623233827!3d26.763844626154316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97f166dbb73!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
