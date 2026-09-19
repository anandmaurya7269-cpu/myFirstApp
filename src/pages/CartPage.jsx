import { ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/cart/CartItem';
import { OrderSummary } from '../components/cart/OrderSummary';

export const CartPage = ({ onNavigate, onSelectProduct }) => {
  const { cart, totalItemsCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="section-padding" style={{ backgroundColor: 'var(--bg-main)', minHeight: '60vh' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '540px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--bg-cream)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            color: 'var(--accent-gold)'
          }}>
            <ShoppingBag size={36} />
          </div>

          <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Your Bag is Empty</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.6' }}>
            Looks like you haven't added any fashion items to your shopping bag yet. Explore our latest arrivals for Men, Women & Kids!
          </p>

          <button
            className="btn btn-primary btn-lg"
            onClick={() => onNavigate('shop')}
          >
            <span>Start Shopping</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Header and Back Link */}
        <div style={{ marginBottom: '28px' }}>
          <button
            onClick={() => onNavigate('shop')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.88rem',
              color: 'var(--text-secondary)',
              marginBottom: '14px',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} />
            <span>Continue Shopping</span>
          </button>

          <h1 style={{ fontSize: '2.4rem' }}>
            Shopping Bag ({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'})
          </h1>
        </div>

        {/* Cart Layout: Items List & Order Summary */}
        <div className="cart-layout">
          {/* Left Column: Items */}
          <div className="cart-items-card">
            {cart.map((item) => (
              <CartItem
                key={item.cartItemId}
                item={item}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>

          {/* Right Column: Order Summary & Checkout Trigger */}
          <OrderSummary onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
};
