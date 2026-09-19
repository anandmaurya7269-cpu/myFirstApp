import { Search, SlidersHorizontal } from 'lucide-react';

export const SortBar = ({
  resultsCount,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onOpenMobileFilters
}) => {
  return (
    <div className="catalog-sort-bar">
      {/* Search in Shop */}
      <div className="catalog-search-input">
        <Search size={18} color="#88847f" />
        <input
          type="text"
          placeholder="Filter by name, fabric, style..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Results Count */}
      <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
        Showing <strong style={{ color: '#121212' }}>{resultsCount}</strong> styles
      </div>

      {/* Sort Options & Mobile Filter Trigger */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Mobile Filter Toggle */}
        <button
          className="btn btn-outline btn-sm mobile-filter-btn"
          onClick={onOpenMobileFilters}
          style={{ display: 'none' }}
        >
          <SlidersHorizontal size={14} />
          <span>Filters</span>
        </button>

        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          aria-label="Sort products"
        >
          <option value="popularity">Sort by: Popularity</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Customer Rating</option>
          <option value="discount">Highest Discount</option>
        </select>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .mobile-filter-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </div>
  );
};
