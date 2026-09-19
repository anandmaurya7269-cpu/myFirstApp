import { Hero } from '../components/home/Hero';
import { CategorySection } from '../components/home/CategoryCard';
import { FeaturedSection } from '../components/home/FeaturedSection';
import { PromoBanner } from '../components/home/PromoBanner';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CustomerReviews } from '../components/home/CustomerReviews';
import { Newsletter } from '../components/home/Newsletter';

export const HomePage = ({ onNavigate, onSelectProduct, onToast }) => {
  return (
    <div className="home-page-container">
      {/* 1. Large Fashion Hero Banner */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Three Attractive Category Cards */}
      <CategorySection onNavigate={onNavigate} />

      {/* 3. Featured 8 Products Grid */}
      <FeaturedSection onSelectProduct={onSelectProduct} onNavigate={onNavigate} />

      {/* 4. Special Promotional Banner (Summer Fashion Sale) */}
      <PromoBanner onNavigate={onNavigate} />

      {/* 5. Why Choose Us (4 Feature Cards) */}
      <WhyChooseUs />

      {/* 6. Realistic Customer Reviews (3 Cards) */}
      <CustomerReviews />

      {/* 7. Newsletter Subscription */}
      <Newsletter onToast={onToast} />
    </div>
  );
};
