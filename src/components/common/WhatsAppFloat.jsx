import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const WhatsAppFloat = () => {
  return (
    <a
      href={SITE_CONFIG.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat with us on WhatsApp"
      title="Chat with Maurya Vastralay"
    >
      <MessageCircle size={22} />
      <span>Chat on WhatsApp</span>
    </a>
  );
};
