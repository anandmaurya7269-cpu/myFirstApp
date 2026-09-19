import { MapPin, Phone, Mail, Clock, ShieldCheck, RefreshCw, Truck } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Store Information */}
            <div>
              <div className="brand-logo-text" style={{ color: '#ffffff', marginBottom: '6px' }}>
                MAURYA <span style={{ color: 'var(--accent-gold)' }}>VASTRALAY</span>
              </div>
              <div className="brand-logo-sub" style={{ color: '#888888', marginBottom: '16px' }}>
                ESTABLISHED {SITE_CONFIG.establishedYear}
              </div>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.6' }}>
                {SITE_CONFIG.name} is your trusted family fashion destination in {SITE_CONFIG.address.city}, bringing high-quality traditional sarees, designer kurtis, comfortable casuals, and durable kids wear at honest prices.
              </p>
              <div style={{ display: 'flex', gap: '16px', color: 'var(--accent-gold)', fontSize: '0.85rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} /> 100% Authentic
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <RefreshCw size={16} /> 7-Day Exchange
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Truck size={16} /> Express Delivery
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-col-title">Collections</h4>
              <ul className="footer-links">
                <li>
                  <a href="#men" onClick={(e) => { e.preventDefault(); onNavigate('men'); }}>
                    Men's Collection
                  </a>
                </li>
                <li>
                  <a href="#women" onClick={(e) => { e.preventDefault(); onNavigate('women'); }}>
                    Women's Collection
                  </a>
                </li>
                <li>
                  <a href="#kids" onClick={(e) => { e.preventDefault(); onNavigate('kids'); }}>
                    Kids' Collection
                  </a>
                </li>
                <li>
                  <a href="#shop" onClick={(e) => { e.preventDefault(); onNavigate('shop'); }}>
                    Summer Sale (Up to 50% Off)
                  </a>
                </li>
                <li>
                  <a href="#shop" onClick={(e) => { e.preventDefault(); onNavigate('shop'); }}>
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>

            {/* Store Pages */}
            <div>
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-links">
                <li>
                  <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#shop" onClick={(e) => { e.preventDefault(); onNavigate('shop'); }}>
                    Browse All Catalog
                  </a>
                </li>
                <li>
                  <a href="#cart" onClick={(e) => { e.preventDefault(); onNavigate('cart'); }}>
                    Shopping Bag
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>
                    Our Heritage & Story
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                    Store Locator & Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Physical Store Contact */}
            <div>
              <h4 className="footer-col-title">Visit Our Store</h4>
              <h2 style={{ color: "var(--accent-gold)", fontSize: "1rem", marginBottom: "20px" }}>Anand Kumar Maurya</h2>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>{SITE_CONFIG.address.fullAddress}</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} />
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} style={{ color: '#dedede' }}>
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} />
                <a href={`mailto:${SITE_CONFIG.email}`} style={{ color: '#dedede' }}>
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="footer-contact-item">
                <Clock size={18} />
                <div>
                  <div>{SITE_CONFIG.hours.weekdays}</div>
                  <div style={{ fontSize: '0.78rem', color: '#777777' }}>Open 7 Days a week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. Crafted with care for modern families.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Shipping & Exchange Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
