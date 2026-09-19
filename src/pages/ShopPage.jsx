import { useState, useMemo } from 'react';
import { FilterSidebar } from '../components/shop/FilterSidebar';
import { SortBar } from '../components/shop/SortBar';
import { ProductGrid } from '../components/product/ProductGrid';
import { PRODUCTS } from '../data/products';
import { X } from 'lucide-react';

export const ShopPage = ({
  categoryInitial = 'All',
  onSelectProduct,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState(categoryInitial);
  const [priceRange, setPriceRange] = useState(5000);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleToggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setPriceRange(5000);
    setSelectedSizes([]);
    setSelectedColor('');
    setSearchQuery('');
    setSortBy('popularity');
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'All' && product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Price filter
      if (product.price > priceRange) {
        return false;
      }

      // Size filter
      if (selectedSizes.length > 0) {
        const hasSize = product.sizes && product.sizes.some((s) => selectedSizes.includes(s));
        if (!hasSize) return false;
      }

      // Color filter
      if (selectedColor) {
        const hasColor =
          product.colors &&
          product.colors.some((c) => c.name.toLowerCase().includes(selectedColor.toLowerCase().split('&')[0].trim()));
        if (!hasColor) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          product.name.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.subCategory?.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q);
        if (!matches) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'discount') {
        const discA = parseInt(a.discount) || 0;
        const discB = parseInt(b.discount) || 0;
        return discB - discA;
      }
      return b.popularity - a.popularity;
    });
  }, [selectedCategory, priceRange, selectedSizes, selectedColor, searchQuery, sortBy]);

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    priceRange < 5000 ||
    selectedSizes.length > 0 ||
    selectedColor !== '' ||
    searchQuery !== '';

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Breadcrumb & Title */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
            <span
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => onNavigate('home')}
            >
              Home
            </span>{' '}
            / <span>Shop Catalog</span>
            {selectedCategory !== 'All' && <span> / {selectedCategory}'s Collection</span>}
          </div>
          <h1 style={{ fontSize: '2.4rem' }}>
            {selectedCategory === 'All' ? 'All Fashion Collection' : `${selectedCategory}'s Collection`}
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Explore premium traditional and modern outfits crafted for unmatched comfort and style.
          </p>
        </div>

        {/* Active Filter Badges */}
        {hasActiveFilters && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-muted)' }}>ACTIVE FILTERS:</span>
            {selectedCategory !== 'All' && (
              <span className="badge badge-gold" style={{ cursor: 'pointer' }} onClick={() => setSelectedCategory('All')}>
                Category: {selectedCategory} <X size={12} style={{ marginLeft: '4px' }} />
              </span>
            )}
            {priceRange < 5000 && (
              <span className="badge badge-gold" style={{ cursor: 'pointer' }} onClick={() => setPriceRange(5000)}>
                Under ₹{priceRange.toLocaleString()} <X size={12} style={{ marginLeft: '4px' }} />
              </span>
            )}
            {selectedSizes.map((sz) => (
              <span key={sz} className="badge badge-gold" style={{ cursor: 'pointer' }} onClick={() => handleToggleSize(sz)}>
                Size: {sz} <X size={12} style={{ marginLeft: '4px' }} />
              </span>
            ))}
            {selectedColor && (
              <span className="badge badge-gold" style={{ cursor: 'pointer' }} onClick={() => setSelectedColor('')}>
                Color: {selectedColor} <X size={12} style={{ marginLeft: '4px' }} />
              </span>
            )}
            {searchQuery && (
              <span className="badge badge-gold" style={{ cursor: 'pointer' }} onClick={() => setSearchQuery('')}>
                Keyword: "{searchQuery}" <X size={12} style={{ marginLeft: '4px' }} />
              </span>
            )}
            <button
              onClick={handleResetFilters}
              style={{ fontSize: '0.82rem', color: 'var(--danger)', textDecoration: 'underline', fontWeight: '600' }}
            >
              Clear All
            </button>
          </div>
        )}

        {/* Catalog Main Layout */}
        <div className="catalog-layout">
          {/* Desktop Filter Sidebar */}
          <FilterSidebar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            selectedSizes={selectedSizes}
            onToggleSize={handleToggleSize}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
            onResetFilters={handleResetFilters}
          />

          {/* Right Column: Sort Bar & Product Grid */}
          <div>
            <SortBar
              resultsCount={filteredProducts.length}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onOpenMobileFilters={() => setIsMobileFilterOpen(true)}
            />

            <ProductGrid
              products={filteredProducts}
              onSelectProduct={onSelectProduct}
            />
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer Modal */}
      {isMobileFilterOpen && (
        <div className="mobile-drawer-backdrop open" onClick={() => setIsMobileFilterOpen(false)}>
          <div
            className="mobile-drawer open"
            style={{ width: '320px', padding: '20px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <FilterSidebar
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              selectedSizes={selectedSizes}
              onToggleSize={handleToggleSize}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
              onResetFilters={handleResetFilters}
              isMobileDrawer={true}
              onCloseMobile={() => setIsMobileFilterOpen(false)}
            />
            <button
              className="btn btn-primary btn-block"
              style={{ marginTop: '20px' }}
              onClick={() => setIsMobileFilterOpen(false)}
            >
              Apply Filters ({filteredProducts.length} items)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
