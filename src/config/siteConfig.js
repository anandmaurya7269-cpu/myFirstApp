/**
 * Maurya Vastralay - Global Store Configuration
 * 
 * Edit this file to easily update shop name, contact information,
 * operating hours, address, and social links across the entire website.
 */

export const SITE_CONFIG = {
  // Store Identity
  name: "Maurya Vastralay",
  shortName: "Maurya",
  tagline: "Style That Fits You",
  subtitle: "Discover the latest fashion for Men, Women & Kids at affordable prices.",
  establishedYear: "2026",

  // Contact Information
  phone: "+91 7269070750",
  phoneRaw: "+917269070750",
  whatsapp: "+91 7269070750",
  whatsappLink: "https://wa.me/917269070750?text=Hello%20Maurya%20Vastralay,%20I%20would%20like%20to%20inquire%20about%20your%20clothing%20collection.",
  email: "anandkumarmaurya642@gmail.com",
  inquiryEmail: "anandkumarmaurya642@gmail.com",

  // Physical Store Address
  address: {
    line1: "Chauri Chauraha Durga Mandir Road ",
    line2: "Near Durga Mandir",
    city: "Maharajganj",
    state: "Uttar Pradesh",
    pincode: "273310",
    country: "India",
    fullAddress: "Chauri Chauraha Durga Mandir Road, Near Durga Mandir, Maharajganj, Uttar Pradesh - 273310"
  },

  // Operating Hours
  hours: {
    weekdays: "09:00 AM - 9:30 PM",
    weekends: "09:00 AM - 9:30 PM",
    holidays: "Open All 7 Days"
  },

  // Order & Delivery Policies
  delivery: {
    freeShippingThreshold: 999, // Free shipping above ₹999
    standardDeliveryCharge: 79,
    estimatedDays: "2 - 4 Business Days",
    returnWindow: "7 Days Easy Exchange"
  },

  // Social Channels
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com"
  },

  // Hero & Offer Banners
  hero: {
    title: "Style That Fits You",
    subtitle: "Discover the latest fashion for Men, Women & Kids at affordable prices.",
    primaryCta: "Shop Now",
    secondaryCta: "Explore Collection"
  },

  salePromo: {
    badge: "Limited Time Offer",
    title: "Summer Fashion Sale",
    discount: "Up to 50% OFF",
    description: "Upgrade your wardrobe with trendy cottons, festive silks, and everyday essentials.",
    cta: "Shop Sale"
  }
};
