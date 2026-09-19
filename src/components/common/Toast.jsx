import { CheckCircle2 } from 'lucide-react';

export const Toast = ({ toasts }) => {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast-msg">
          <CheckCircle2 size={18} color="#c5a059" />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
