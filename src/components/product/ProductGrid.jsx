import { ProductCard } from './ProductCard';

export const ProductGrid = ({ products, onSelectProduct }) => {
  if (!products || products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px', background: '#ffffff', borderRadius: '8px' }}>
        <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#121212', marginBottom: '8px' }}>
          No products found matching your criteria.
        </p>
        <p style={{ color: '#88847f', fontSize: '0.9rem' }}>
          Try clearing some filters or searching for another clothing item.
        </p>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </div>
  );
};
