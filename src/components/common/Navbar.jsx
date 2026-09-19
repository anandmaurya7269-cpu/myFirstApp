import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, ChevronRight, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export const Navbar = ({ activePage, onNavigate, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { totalItemsCount } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page switch
  const handleNavClick = (pageId, categoryFilter = null) => {
    setIsMobileOpen(false);
    onNavigate(pageId, categoryFilter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-announcement-bar">
        <span>🎉 Summer Fashion Sale is Live! Enjoy up to 50% OFF | Free Shipping above ₹{SITE_CONFIG.delivery.freeShippingThreshold}</span>
        <span style={{ opacity: 0.5 }}>|</span>
        <span>Call: <a href={`tel:${SITE_CONFIG.phoneRaw}`}>{SITE_CONFIG.phone}</a></span>
      </div>

      {/* Main Sticky Header */}
      <header className={`header-sticky ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo / Shop Name */}
          <a
            href="#home"
            className="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            <div className="brand-logo-text">
              MAURYA <span>VASTRALAY</span>
            </div>
            <div className="brand-logo-sub">ESTD. {SITE_CONFIG.establishedYear} • FASHION STORE</div>
          </a>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="nav-menu">
              <li>
                <a
                  href="#home"
                  className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('home');
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  className={`nav-link ${activePage === 'shop' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('shop');
                  }}
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#men"
                  className={`nav-link ${activePage === 'men' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('men');
                  }}
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="#women"
                  className={`nav-link ${activePage === 'women' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('women');
                  }}
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="#kids"
                  className={`nav-link ${activePage === 'kids' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('kids');
                  }}
                >
                  Kids
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('about');
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Action Icons */}
          <div className="nav-actions">
            {/* Search Trigger */}
            <button
              className="icon-btn"
              onClick={onOpenSearch}
              aria-label="Search clothing"
              title="Search products"
            >
              <Search size={20} />
            </button>

            {/* Wishlist Icon */}
            <button
              className="icon-btn"
              onClick={() => handleNavClick('shop', 'wishlist')}
              aria-label="Wishlist items"
              title="Wishlist"
            >
              <Heart size={20} />
              {wishlistCount > 0 && <span className="icon-badge">{wishlistCount}</span>}
            </button>

            {/* Shopping Cart Icon */}
            <button
              className="icon-btn"
              onClick={() => handleNavClick('cart')}
              aria-label="Shopping Cart"
              title="View Cart"
            >
              <ShoppingBag size={20} />
              {totalItemsCount > 0 && <span className="icon-badge">{totalItemsCount}</span>}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="icon-btn mobile-menu-btn"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Menu */}
      <div
        className={`mobile-drawer-backdrop ${isMobileOpen ? 'open' : ''}`}
        onClick={() => setIsMobileOpen(false)}
      />
      <div className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="brand-logo-text" style={{ fontSize: '1.25rem' }}>
            MAURYA <span>VASTRALAY</span>
          </div>
          <button
            className="icon-btn"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close Mobile Menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-drawer-links">
          <a
            href="#home"
            className={`mobile-nav-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            <span>Home</span>
            <ChevronRight size={18} color="#88847f" />
          </a>
          <a
            href="#shop"
            className={`mobile-nav-link ${activePage === 'shop' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('shop');
            }}
          >
            <span>All Collection (Shop)</span>
            <ChevronRight size={18} color="#88847f" />
          </a>
          <a
            href="#men"
            className={`mobile-nav-link ${activePage === 'men' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('men');
            }}
          >
            <span>Men's Fashion</span>
            <ChevronRight size={18} color="#88847f" />
          </a>
          <a
            href="#women"
            className={`mobile-nav-link ${activePage === 'women' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('women');
            }}
          >
            <span>Women's Fashion</span>
            <ChevronRight size={18} color="#88847f" />
          </a>
          <a
            href="#kids"
            className={`mobile-nav-link ${activePage === 'kids' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('kids');
            }}
          >
            <span>Kids' Collection</span>
            <ChevronRight size={18} color="#88847f" />
          </a>
          <a
            href="#cart"
            className={`mobile-nav-link ${activePage === 'cart' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('cart');
            }}
          >
            <span>My Shopping Cart ({totalItemsCount})</span>
            <ChevronRight size={18} color="#88847f" />
          </a>
          <a
            href="#about"
            className={`mobile-nav-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
          >
            <span>About Us</span>
            <ChevronRight size={18} color="#88847f" />
          </a>
          <a
            href="#contact"
            className={`mobile-nav-link ${activePage === 'contact' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            <span>Contact & Store Location</span>
            <ChevronRight size={18} color="#88847f" />
          </a>
        </div>

        <div className="mobile-drawer-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#121212', fontWeight: '600' }}>
            <Phone size={16} color="#c5a059" />
            <span>{SITE_CONFIG.phone}</span>
          </div>
          <p style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>{SITE_CONFIG.address.fullAddress}</p>
        </div>
      </div>
    </>
  );
};
