import { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { SITE_CONFIG } from '../../config/siteConfig';

export const OrderSummary = ({ onNavigate }) => {
  const { subtotal, totalDiscount, deliveryFee, finalTotal, clearCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cod'
  });

  const freeShippingThreshold = SITE_CONFIG.delivery.freeShippingThreshold;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <>
      <div className="order-summary-card">
        <h3 style={{ fontSize: '1.25rem', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
          Order Summary
        </h3>

        {/* Free Delivery Progress */}
        <div className="free-shipping-bar">
          {amountNeeded > 0 ? (
            <div>
              Add <strong style={{ color: 'var(--accent-gold-hover)' }}>₹{amountNeeded.toLocaleString()}</strong> more to get <strong>FREE Delivery</strong>!
            </div>
          ) : (
            <div style={{ color: '#15803d', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} />
              <span>You have unlocked FREE Doorstep Delivery!</span>
            </div>
          )}
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Pricing Rows */}
        <div className="summary-row">
          <span>Bag Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>

        {totalDiscount > 0 && (
          <div className="summary-row" style={{ color: '#15803d' }}>
            <span>Retail Discount</span>
            <span>- ₹{totalDiscount.toLocaleString()}</span>
          </div>
        )}

        <div className="summary-row">
          <span>Delivery Charge</span>
          <span>
            {deliveryFee === 0 ? (
              <span style={{ color: '#15803d', fontWeight: '600' }}>FREE</span>
            ) : (
              `₹${deliveryFee}`
            )}
          </span>
        </div>

        <div className="summary-row total">
          <span>Total Amount</span>
          <span>₹{finalTotal.toLocaleString()}</span>
        </div>

        <button
          className="btn btn-primary btn-block btn-lg"
          onClick={() => setIsCheckoutOpen(true)}
          disabled={subtotal === 0}
          style={{ marginBottom: '16px' }}
        >
          <span>Proceed to Checkout</span>
          <ArrowRight size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem', color: '#88847f' }}>
          <ShieldCheck size={16} color="var(--accent-gold)" />
          <span>Guaranteed Safe & Secure Checkout</span>
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="modal-backdrop" onClick={() => setIsCheckoutOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setIsCheckoutOpen(false)}
            >
              <X size={20} />
            </button>

            {orderPlaced ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--success-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <CheckCircle2 size={36} color="#15803d" />
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Order Placed Successfully!</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.5' }}>
                  Thank you, <strong>{formData.name || 'Valued Customer'}</strong>! We have received your order for ₹{finalTotal.toLocaleString()}. Our team at {SITE_CONFIG.name} will prepare your package for dispatch.
                </p>
                <div style={{ background: 'var(--bg-cream)', padding: '16px', borderRadius: '6px', marginBottom: '24px', fontSize: '0.88rem', textAlign: 'left' }}>
                  <div><strong>Payment Mode:</strong> {formData.paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'UPI on Delivery'}</div>
                  <div style={{ marginTop: '4px' }}><strong>Contact Phone:</strong> {formData.phone}</div>
                  <div style={{ marginTop: '4px' }}><strong>Estimated Delivery:</strong> {SITE_CONFIG.delivery.estimatedDays}</div>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    setOrderPlaced(false);
                    onNavigate('shop');
                  }}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>Complete Your Order</h3>
                <p style={{ fontSize: '0.85rem', color: '#88847f', marginBottom: '20px' }}>
                  Fill in your delivery address to confirm order of ₹{finalTotal.toLocaleString()}
                </p>

                <form onSubmit={handleCheckoutSubmit}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '6px' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '6px' }}>
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '6px' }}>
                        Delivery Address & Landmark *
                      </label>
                      <textarea
                        required
                        rows="3"
                        placeholder="House no, street, locality, landmark, city & pincode"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '6px' }}>
                        Payment Method
                      </label>
                      <div style={{ display: 'flex', gap: '16px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', cursor: 'pointer' }}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            checked={formData.paymentMethod === 'cod'}
                            onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                          />
                          <span>Cash on Delivery (COD)</span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', cursor: 'pointer' }}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            checked={formData.paymentMethod === 'upi'}
                            onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                          />
                          <span>UPI / QR on Delivery</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    Confirm Order (₹{finalTotal.toLocaleString()})
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
