import { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Toast } from './components/common/Toast';
import { QuickSearchModal } from './components/common/QuickSearchModal';
import { WhatsAppFloat } from './components/common/WhatsAppFloat';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { PRODUCTS } from './data/products';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Toast notification helper
  const showToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  // Synchronize hash with page state for back/forward browser support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash || hash === 'home') {
        setActivePage('home');
      } else if (hash === 'shop') {
        setActivePage('shop');
        setCategoryFilter('All');
      } else if (hash === 'men') {
        setActivePage('men');
        setCategoryFilter('Men');
      } else if (hash === 'women') {
        setActivePage('women');
        setCategoryFilter('Women');
      } else if (hash === 'kids') {
        setActivePage('kids');
        setCategoryFilter('Kids');
      } else if (hash === 'cart') {
        setActivePage('cart');
      } else if (hash === 'about') {
        setActivePage('about');
      } else if (hash === 'contact') {
        setActivePage('contact');
      } else if (hash.startsWith('product/')) {
        const prodId = hash.replace('product/', '');
        const found = PRODUCTS.find((p) => p.id === prodId);
        if (found) {
          setSelectedProduct(found);
          setActivePage('product');
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial load
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation handler
  const handleNavigate = (page, category = null) => {
    if (page === 'men') {
      window.location.hash = 'men';
      setActivePage('men');
      setCategoryFilter('Men');
    } else if (page === 'women') {
      window.location.hash = 'women';
      setActivePage('women');
      setCategoryFilter('Women');
    } else if (page === 'kids') {
      window.location.hash = 'kids';
      setActivePage('kids');
      setCategoryFilter('Kids');
    } else if (page === 'shop') {
      window.location.hash = 'shop';
      setActivePage('shop');
      setCategoryFilter(category || 'All');
    } else if (page === 'product') {
      setActivePage('product');
    } else {
      window.location.hash = page;
      setActivePage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Product selection handler
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    window.location.hash = `product/${product.id}`;
    setActivePage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider onToast={showToast}>
      <WishlistProvider onToast={showToast}>
        <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {/* Header Navigation */}
          <Navbar
            activePage={activePage}
            onNavigate={handleNavigate}
            onOpenSearch={() => setIsSearchOpen(true)}
          />

          {/* Main Content Area */}
          <main style={{ flex: 1 }}>
            {activePage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onSelectProduct={handleSelectProduct}
                onToast={showToast}
              />
            )}

            {activePage === 'shop' && (
              <ShopPage
                key={`shop-${categoryFilter}`}
                categoryInitial={categoryFilter}
                onSelectProduct={handleSelectProduct}
                onNavigate={handleNavigate}
              />
            )}

            {activePage === 'men' && (
              <ShopPage
                key="shop-men"
                categoryInitial="Men"
                onSelectProduct={handleSelectProduct}
                onNavigate={handleNavigate}
              />
            )}

            {activePage === 'women' && (
              <ShopPage
                key="shop-women"
                categoryInitial="Women"
                onSelectProduct={handleSelectProduct}
                onNavigate={handleNavigate}
              />
            )}

            {activePage === 'kids' && (
              <ShopPage
                key="shop-kids"
                categoryInitial="Kids"
                onSelectProduct={handleSelectProduct}
                onNavigate={handleNavigate}
              />
            )}

            {activePage === 'product' && (
              <ProductDetailPage
                key={`product-${selectedProduct.id}`}
                product={selectedProduct}
                onSelectProduct={handleSelectProduct}
                onNavigate={handleNavigate}
              />
            )}

            {activePage === 'cart' && (
              <CartPage
                onNavigate={handleNavigate}
                onSelectProduct={handleSelectProduct}
              />
            )}

            {activePage === 'about' && (
              <AboutPage onNavigate={handleNavigate} />
            )}

            {activePage === 'contact' && (
              <ContactPage onToast={showToast} />
            )}
          </main>

          {/* Footer */}
          <Footer onNavigate={handleNavigate} />

          {/* Floating WhatsApp Quick Action Button */}
          <WhatsAppFloat />

          {/* Instant Search Modal */}
          <QuickSearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onSelectProduct={handleSelectProduct}
            onNavigate={handleNavigate}
          />

          {/* Toast Notification Layer */}
          <Toast toasts={toasts} />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}