import { Star, Heart, ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export const ProductCard = ({ product, onSelectProduct }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    // Quick adds default size & color
    addToCart(product, product.sizes?.[0] || 'Standard', product.colors?.[0]?.name || 'Default', 1);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="product-card" onClick={() => onSelectProduct(product)}>
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />

        {/* Badges */}
        <div className="product-badge-overlay">
          {product.badge && (
            <span className="badge badge-gold">{product.badge}</span>
          )}
          {product.discount && (
            <span className="badge badge-sale">{product.discount}</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          className={`wishlist-btn-overlay ${isFavorited ? 'active' : ''}`}
          onClick={handleWishlistToggle}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={18} fill={isFavorited ? '#dc2626' : 'none'} color={isFavorited ? '#dc2626' : 'currentColor'} />
        </button>

        {/* Hover Quick Action Buttons */}
        <div className="product-quick-actions">
          <button
            className="btn btn-primary btn-sm btn-block"
            onClick={handleQuickAdd}
            style={{ fontSize: '0.8rem', padding: '8px 10px' }}
          >
            <ShoppingBag size={14} /> Quick Add
          </button>
          <button
            className="btn btn-white btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            style={{ padding: '8px 10px' }}
            title="View Details"
          >
            <Eye size={14} />
          </button>
        </div>
      </div>

      <div className="product-info">
        <span className="product-cat-tag">
          {product.category} • {product.subCategory || 'Apparel'}
        </span>

        <h3 className="product-title" onClick={() => onSelectProduct(product)} title={product.name}>
          {product.name}
        </h3>

        {/* Star Rating */}
        <div className="product-rating">
          <div className="stars-row">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={13}
                fill={i < Math.floor(product.rating) ? '#eab308' : '#e5e7eb'}
                color={i < Math.floor(product.rating) ? '#eab308' : '#d1d5db'}
              />
            ))}
          </div>
          <span style={{ fontWeight: '600', color: '#121212' }}>{product.rating}</span>
          <span style={{ color: '#88847f', fontSize: '0.75rem' }}>({product.reviewsCount})</span>
        </div>

        {/* Price Row */}
        <div className="product-price-row">
          <span className="price-current">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
          )}
          {product.discount && (
            <span className="price-discount">{product.discount}</span>
          )}
        </div>

        {/* Card Bottom CTA Buttons */}
        <div className="product-card-buttons">
          <button
            className="btn btn-primary btn-sm"
            onClick={handleQuickAdd}
            aria-label={`Add ${product.name} to bag`}
          >
            <ShoppingBag size={14} /> Add
          </button>
          <button
            className="btn btn-outline btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            aria-label={`View details of ${product.name}`}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};
