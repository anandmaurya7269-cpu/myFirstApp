import { useState } from 'react';
import {
  Star,
  Heart,
  ShoppingBag,
  Zap,
  Truck,
  ShieldCheck,
  RefreshCw,
  Minus,
  Plus,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import { PRODUCTS, REVIEWS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/product/ProductCard';

export const ProductDetailPage = ({ product, onSelectProduct, onNavigate }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Selected state initialized cleanly from current product
  const [selectedImg, setSelectedImg] = useState(product?.image || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' or 'reviews'

  if (!product) {
    return (
      <div className="section-padding" style={{ textAlign: 'center' }}>
        <h2>Product not found</h2>
        <button className="btn btn-primary" onClick={() => onNavigate('shop')} style={{ marginTop: '16px' }}>
          Back to Shop
        </button>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    onNavigate('cart');
  };

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Back Link & Breadcrumb */}
        <button
          onClick={() => onNavigate('shop')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            marginBottom: '24px',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Collection</span>
        </button>

        {/* Top Product View: Gallery & Main Controls */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          backgroundColor: '#ffffff',
          padding: '36px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-light)',
          marginBottom: '56px'
        }}>
          {/* Left Column: Image Gallery */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Main Large Image */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              backgroundColor: 'var(--bg-cream)',
              height: '480px',
              border: '1px solid var(--border-subtle)'
            }}>
              <img
                src={selectedImg || product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {product.badge && (
                <span className="badge badge-gold" style={{ position: 'absolute', top: '16px', left: '16px' }}>
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Strip */}
            {product.images && product.images.length > 1 && (
              <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '4px' }}>
                {product.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(imgUrl)}
                    style={{
                      width: '74px',
                      height: '92px',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      border: (selectedImg || product.image) === imgUrl ? '2px solid var(--accent-gold)' : '1px solid var(--border-light)',
                      padding: 0,
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  >
                    <img src={imgUrl} alt={`${product.name} thumbnail ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Purchase Actions */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Category */}
            <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: '700', marginBottom: '8px' }}>
              {product.category} • {product.subCategory}
            </div>

            {/* Title */}
            <h1 style={{ fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', lineHeight: '1.2', marginBottom: '12px' }}>
              {product.name}
            </h1>

            {/* Rating Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? '#eab308' : '#e5e7eb'}
                    color={i < Math.floor(product.rating) ? '#eab308' : '#d1d5db'}
                  />
                ))}
              </div>
              <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{product.rating}</span>
              <span style={{ color: '#88847f', fontSize: '0.85rem' }}>({product.reviewsCount} Customer Reviews)</span>
              <span style={{ color: '#15803d', fontSize: '0.85rem', fontWeight: '600', marginLeft: 'auto' }}>
                In Stock & Ready to Dispatch
              </span>
            </div>

            {/* Price Row */}
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
              padding: '16px 0',
              borderTop: '1px solid var(--border-subtle)',
              borderBottom: '1px solid var(--border-subtle)',
              marginBottom: '24px'
            }}>
              <span style={{ fontSize: '1.9rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: '1.1rem', color: '#88847f', textDecoration: 'line-through' }}>
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
              {product.discount && (
                <span className="badge badge-sale" style={{ fontSize: '0.82rem' }}>
                  {product.discount}
                </span>
              )}
              <span style={{ fontSize: '0.78rem', color: '#88847f', marginLeft: 'auto' }}>
                Inclusive of all taxes
              </span>
            </div>

            {/* Description Excerpt */}
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.6', marginBottom: '24px' }}>
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div style={{ marginBottom: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: '700' }}>Select Size</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold-hover)', textDecoration: 'underline', cursor: 'pointer' }}>
                    Standard Indian Sizing
                  </span>
                </div>
                <div className="swatch-group">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      className={`size-pill ${selectedSize === sz ? 'active' : ''}`}
                      onClick={() => setSelectedSize(sz)}
                      style={{ padding: '0 14px', height: '38px' }}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div style={{ marginBottom: '26px' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', marginBottom: '8px' }}>
                  Color: <span style={{ fontWeight: '500', color: 'var(--accent-gold)' }}>{selectedColor}</span>
                </div>
                <div className="swatch-group">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      className={`color-dot ${selectedColor === c.name ? 'active' : ''}`}
                      style={{ backgroundColor: c.hex, width: '32px', height: '32px' }}
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Actions */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '24px' }}>
              {/* Stepper */}
              <div className="quantity-stepper" style={{ height: '46px' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ width: '40px', height: '44px' }}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span style={{ width: '40px', fontSize: '1rem' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ width: '40px', height: '44px' }}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                className="btn btn-primary"
                style={{ flex: '1 1 180px', height: '46px' }}
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} />
                <span>Add to Bag</span>
              </button>

              {/* Buy Now Button */}
              <button
                className="btn btn-gold"
                style={{ flex: '1 1 180px', height: '46px' }}
                onClick={handleBuyNow}
              >
                <Zap size={18} />
                <span>Buy Now</span>
              </button>

              {/* Wishlist Toggle Button */}
              <button
                className={`icon-btn ${isFavorited ? 'active' : ''}`}
                style={{
                  border: '1px solid var(--border-light)',
                  width: '46px',
                  height: '46px',
                  borderRadius: '4px',
                  color: isFavorited ? '#dc2626' : 'inherit'
                }}
                onClick={() => toggleWishlist(product)}
                aria-label="Wishlist toggle"
              >
                <Heart size={20} fill={isFavorited ? '#dc2626' : 'none'} />
              </button>
            </div>

            {/* Trust Assurances */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '14px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-subtle)',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Truck size={18} color="var(--accent-gold)" />
                <span>2-4 Days Express Shipping</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <RefreshCw size={18} color="var(--accent-gold)" />
                <span>7-Day Easy Exchange</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} color="var(--accent-gold)" />
                <span>100% Genuine Weave</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications & Customer Reviews Tabs */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-light)',
          padding: '32px',
          marginBottom: '56px'
        }}>
          <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid var(--border-light)', marginBottom: '24px' }}>
            <button
              onClick={() => setActiveTab('specs')}
              style={{
                paddingBottom: '12px',
                fontSize: '1.05rem',
                fontWeight: '700',
                color: activeTab === 'specs' ? 'var(--dark-primary)' : 'var(--text-muted)',
                borderBottom: activeTab === 'specs' ? '2px solid var(--accent-gold)' : 'none'
              }}
            >
              Product Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              style={{
                paddingBottom: '12px',
                fontSize: '1.05rem',
                fontWeight: '700',
                color: activeTab === 'reviews' ? 'var(--dark-primary)' : 'var(--text-muted)',
                borderBottom: activeTab === 'reviews' ? '2px solid var(--accent-gold)' : 'none'
              }}
            >
              Customer Reviews ({product.reviewsCount})
            </button>
          </div>

          {activeTab === 'specs' ? (
            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
                {product.description}
              </p>
              {product.specifications ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} style={{ background: 'var(--bg-cream)', padding: '12px 16px', borderRadius: '4px' }}>
                      <div style={{ fontSize: '0.78rem', color: '#88847f', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {key}
                      </div>
                      <div style={{ fontWeight: '600', color: '#121212', fontSize: '0.92rem' }}>
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Standard quality specifications apply.</p>
              )}
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '2.8rem', fontWeight: '800', color: 'var(--text-primary)', lineHeight: 1 }}>
                  {product.rating}
                </div>
                <div>
                  <div className="stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#eab308" color="#eab308" />
                    ))}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#88847f', marginTop: '4px' }}>
                    Based on {product.reviewsCount} verified purchase ratings
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {REVIEWS.map((rev) => (
                  <div key={rev.id} style={{ padding: '16px', borderRadius: '6px', background: 'var(--bg-cream)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700' }}>
                        <span>{rev.author}</span>
                        <CheckCircle2 size={14} color="#15803d" />
                      </div>
                      <span style={{ fontSize: '0.78rem', color: '#88847f' }}>{rev.date}</span>
                    </div>
                    <div className="stars-row" style={{ marginBottom: '8px' }}>
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={13} fill="#eab308" color="#eab308" />
                      ))}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>"{rev.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="section-header" style={{ marginBottom: '32px' }}>
              <span className="section-subtitle">Complete The Look</span>
              <h2 className="section-title">Similar Styles in {product.category}</h2>
            </div>
            <div className="products-grid">
              {relatedProducts.map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
