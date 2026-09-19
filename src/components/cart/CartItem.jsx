import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartItem = ({ item, onSelectProduct }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, selectedSize, selectedColor, quantity, cartItemId } = item;

  return (
    <div className="cart-item-row">
      <img
        src={product.image}
        alt={product.name}
        className="cart-item-thumb"
        onClick={() => onSelectProduct(product)}
        style={{ cursor: 'pointer' }}
      />

      <div className="cart-item-meta">
        <span
          className="product-cat-tag"
          style={{ cursor: 'pointer' }}
          onClick={() => onSelectProduct(product)}
        >
          {product.category}
        </span>

        <h4
          className="cart-item-name"
          onClick={() => onSelectProduct(product)}
          style={{ cursor: 'pointer' }}
        >
          {product.name}
        </h4>

        <div className="cart-item-variant">
          <span>Size: <strong>{selectedSize}</strong></span> • <span>Color: <strong>{selectedColor}</strong></span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px', flexWrap: 'wrap' }}>
          {/* Stepper */}
          <div className="quantity-stepper">
            <button
              onClick={() => updateQuantity(cartItemId, -1)}
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => updateQuantity(cartItemId, 1)}
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Remove */}
          <button
            onClick={() => removeFromCart(cartItemId)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              color: '#dc2626',
              fontSize: '0.82rem',
              fontWeight: '500'
            }}
          >
            <Trash2 size={14} />
            <span>Remove</span>
          </button>
        </div>
      </div>

      {/* Item Price */}
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#121212' }}>
          ₹{(product.price * quantity).toLocaleString()}
        </div>
        {quantity > 1 && (
          <div style={{ fontSize: '0.78rem', color: '#88847f' }}>
            (₹{product.price.toLocaleString()} each)
          </div>
        )}
      </div>
    </div>
  );
};
