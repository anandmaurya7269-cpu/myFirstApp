import { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

export const QuickSearchModal = ({ isOpen, onClose, onSelectProduct, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setSearchTerm('');
    onClose();
  };

  const results = searchTerm.trim()
    ? PRODUCTS.filter((p) => {
        const query = searchTerm.toLowerCase();
        return (
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.subCategory?.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
        );
      })
    : [];

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') handleClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose} onKeyDown={handleKeyDown}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close search">
          <X size={20} />
        </button>

        <h3 style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Search size={22} color="#c5a059" />
          <span>Search Our Collection</span>
        </h3>

        <div className="catalog-search-input" style={{ width: '100%', maxWidth: '100%', marginBottom: '20px' }}>
          <Search size={18} color="#88847f" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search sarees, kurtis, shirts, jeans, kids..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} style={{ color: '#88847f' }}>
              <X size={16} />
            </button>
          )}
        </div>

        {searchTerm.trim() === '' ? (
          <div>
            <p style={{ fontSize: '0.85rem', marginBottom: '10px', color: '#88847f' }}>POPULAR SEARCHES</p>
            <div className="swatch-group">
              {['Banarasi Saree', 'Linen Shirt', 'Denim Jeans', 'Kids Frock', 'Anarkali Kurti', 'Summer Dress'].map((term) => (
                <button
                  key={term}
                  className="size-pill"
                  style={{ minWidth: 'auto', padding: '6px 12px' }}
                  onClick={() => setSearchTerm(term)}
                >
                  <Tag size={13} style={{ marginRight: '6px' }} />
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : results.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '360px', overflowY: 'auto' }}>
            <p style={{ fontSize: '0.82rem', color: '#88847f' }}>FOUND {results.length} STYLES</p>
            {results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  handleClose();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '10px',
                  borderRadius: '6px',
                  background: 'var(--bg-cream)',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease'
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '52px', height: '64px', objectFit: 'cover', borderRadius: '4px' }}
                />
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#c5a059', fontWeight: '700' }}>
                    {product.category}
                  </span>
                  <div style={{ fontWeight: '600', fontSize: '0.92rem', color: '#121212' }}>{product.name}</div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline', marginTop: '2px' }}>
                    <span style={{ fontWeight: '700', fontSize: '0.92rem' }}>₹{product.price}</span>
                    {product.originalPrice && (
                      <span style={{ fontSize: '0.78rem', color: '#88847f', textDecoration: 'line-through' }}>
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <ArrowRight size={16} color="#88847f" />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <p style={{ fontSize: '1rem', color: '#121212', marginBottom: '6px' }}>No products found for "{searchTerm}"</p>
            <p style={{ fontSize: '0.85rem' }}>Try searching with a different term or browse our complete shop.</p>
            <button
              className="btn btn-primary btn-sm"
              style={{ marginTop: '16px' }}
              onClick={() => {
                handleClose();
                onNavigate('shop');
              }}
            >
              Browse All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
