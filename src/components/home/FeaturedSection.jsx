import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';

export const FeaturedSection = ({ onSelectProduct, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('All');

  // Filter 8 products based on tab
  const filteredProducts = PRODUCTS.filter((item) => {
    if (activeTab === 'All') return item.isFeatured;
    return item.category.toLowerCase() === activeTab.toLowerCase();
  }).slice(0, 8);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Handpicked For You</span>
          <h2 className="section-title">Featured Products</h2>
          <p className="section-desc">
            Explore customer favorites, wedding season bestsellers, and timeless wardrobe staples.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '36px',
          flexWrap: 'wrap'
        }}>
          {['All', 'Men', 'Women', 'Kids'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn btn-sm ${activeTab === tab ? 'btn-primary' : 'btn-outline'}`}
              style={{
                borderRadius: 'var(--radius-full)',
                padding: '8px 20px',
                borderColor: activeTab === tab ? 'var(--dark-primary)' : 'var(--border-light)'
              }}
            >
              {tab === 'All' ? 'All Featured' : `${tab}'s Wear`}
            </button>
          ))}
        </div>

        {/* 8 Product Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => onNavigate('shop')}
          >
            <span>Explore Entire Collection</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
