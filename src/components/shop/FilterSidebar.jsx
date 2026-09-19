import { RotateCcw, X } from 'lucide-react';

export const FilterSidebar = ({
  selectedCategory,
  onSelectCategory,
  priceRange,
  onPriceChange,
  selectedSizes,
  onToggleSize,
  selectedColor,
  onSelectColor,
  onResetFilters,
  isMobileDrawer = false,
  onCloseMobile
}) => {
  const CATEGORIES = ['All', 'Men', 'Women', 'Kids'];
  const SIZES = ['S', 'M', 'L', 'XL', 'XXL', '30', '32', '34', '36', 'Free Size'];
  const COLORS = [
    { name: 'Pure White', hex: '#ffffff' },
    { name: 'Jet Black', hex: '#111111' },
    { name: 'Navy & Blue', hex: '#1c2b42' },
    { name: 'Wine & Crimson', hex: '#7f1d1d' },
    { name: 'Emerald & Green', hex: '#064e3b' },
    { name: 'Gold & Yellow', hex: '#ca8a04' },
    { name: 'Beige & Cream', hex: '#e5d9c5' }
  ];

  return (
    <aside className={isMobileDrawer ? 'mobile-filter-content' : 'filter-sidebar'}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        paddingBottom: '14px',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Filters
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onResetFilters}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.78rem',
              color: 'var(--accent-gold-hover)',
              fontWeight: '600'
            }}
            title="Reset all filters"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
          {isMobileDrawer && (
            <button onClick={onCloseMobile} className="icon-btn" style={{ width: '32px', height: '32px' }}>
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* 1. Category Filter */}
      <div className="filter-group">
        <div className="filter-title">Category</div>
        <div className="filter-options-list">
          {CATEGORIES.map((cat) => (
            <label key={cat} className="filter-checkbox-label">
              <input
                type="radio"
                name="categoryFilter"
                checked={selectedCategory.toLowerCase() === cat.toLowerCase()}
                onChange={() => onSelectCategory(cat)}
              />
              <span>{cat === 'All' ? 'All Collections' : `${cat}'s Wear`}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 2. Price Filter */}
      <div className="filter-group">
        <div className="filter-title">
          <span>Max Price</span>
          <span style={{ color: 'var(--accent-gold-hover)', fontWeight: '700' }}>
            ₹{priceRange.toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min="300"
          max="5000"
          step="100"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          style={{ width: '100%', accentColor: 'var(--accent-gold)', cursor: 'pointer' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#88847f', marginTop: '6px' }}>
          <span>₹300</span>
          <span>₹2,500</span>
          <span>₹5,000</span>
        </div>
      </div>

      {/* 3. Size Filter */}
      <div className="filter-group">
        <div className="filter-title">Size</div>
        <div className="swatch-group">
          {SIZES.map((size) => {
            const isSelected = selectedSizes.includes(size);
            return (
              <button
                key={size}
                type="button"
                className={`size-pill ${isSelected ? 'active' : ''}`}
                onClick={() => onToggleSize(size)}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Color Filter */}
      <div className="filter-group">
        <div className="filter-title">Color Shade</div>
        <div className="swatch-group">
          {COLORS.map((color) => {
            const isSelected = selectedColor === color.name;
            return (
              <button
                key={color.name}
                type="button"
                className={`color-dot ${isSelected ? 'active' : ''}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => onSelectColor(isSelected ? '' : color.name)}
                title={color.name}
              />
            );
          })}
        </div>
        {selectedColor && (
          <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', marginTop: '8px', fontWeight: '600' }}>
            Selected: {selectedColor}
          </div>
        )}
      </div>
    </aside>
  );
};
