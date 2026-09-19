/**
 * Maurya Vastralay - Product Catalog Data
 * 
 * Each product contains detailed metadata:
 * id, name, category, price, originalPrice, discount,
 * image, images, rating, reviewsCount, sizes, colors,
 * description, specifications, isFeatured, isSale, popularity, inStock
 */

export const PRODUCTS = [
  {
    id: "prod-1",
    name: "Men's Casual Linen Shirt",
    category: "Men",
    subCategory: "Shirts",
    price: 899,
    originalPrice: 1499,
    discount: "40% OFF",
    rating: 4.6,
    reviewsCount: 128,
    isFeatured: true,
    isSale: true,
    popularity: 95,
    inStock: true,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441ec157?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Sky Blue", hex: "#7ba7c2" },
      { name: "Pure White", hex: "#f8f9fa" },
      { name: "Beige Cream", hex: "#e5d9c5" }
    ],
    description: "Crafted from 100% breathable organic linen-cotton blend, this casual shirt features a modern spread collar, chest pocket, and lightweight texture ideal for warm Indian weather and smart casual gatherings.",
    specifications: {
      "Fabric": "Linen Cotton Blend",
      "Fit": "Regular Fit",
      "Collar": "Spread Collar",
      "Sleeve": "Full Sleeves with button cuffs",
      "Wash Care": "Machine wash cold with similar colors",
      "Origin": "Gorakhpur, India"
    }
  },
  {
    id: "prod-2",
    name: "Men's Slim Fit Denim Jeans",
    category: "Men",
    subCategory: "Jeans",
    price: 1299,
    originalPrice: 2199,
    discount: "41% OFF",
    rating: 4.8,
    reviewsCount: 214,
    isFeatured: true,
    isSale: false,
    popularity: 98,
    inStock: true,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1542272604-780c96856592?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1542272604-780c96856592?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["30", "32", "34", "36", "38"],
    colors: [
      { name: "Midnight Navy", hex: "#1c2b42" },
      { name: "Classic Indigo", hex: "#2b406b" },
      { name: "Washed Black", hex: "#262626" }
    ],
    description: "Engineered with flexible comfort-stretch denim, these slim-fit jeans provide all-day mobility without losing their sharp silhouette. Finished with sturdy rivet reinforcements and premium wash details.",
    specifications: {
      "Fabric": "98% Cotton, 2% Elastane",
      "Fit": "Slim Fit",
      "Rise": "Mid Rise",
      "Closure": "Button with heavy-duty zipper",
      "Pockets": "5 Pockets",
      "Wash Care": "Turn inside out before wash"
    }
  },
  {
    id: "prod-3",
    name: "Women's Embroidered Anarkali Kurti",
    category: "Women",
    subCategory: "Kurtis",
    price: 1499,
    originalPrice: 2799,
    discount: "46% OFF",
    rating: 4.9,
    reviewsCount: 342,
    isFeatured: true,
    isSale: true,
    popularity: 99,
    inStock: true,
    badge: "Festive Pick",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Wine Maroon", hex: "#581825" },
      { name: "Emerald Green", hex: "#114734" },
      { name: "Mustard Gold", hex: "#c99a2c" }
    ],
    description: "Intricately hand-embroidered neckline with delicate zari and mirror accents on flowy rayon-georgette fabric. Designed with an elegant flared hem that brings royal poise to celebrations and festivals.",
    specifications: {
      "Fabric": "Rayon with Zari Embroidery",
      "Length": "Calf Length (48 inches)",
      "Neck": "Round Neck with slit",
      "Sleeve": "3/4th Sleeves with border work",
      "Occasion": "Festive & Wedding Ceremonies",
      "Wash Care": "Gentle Hand Wash or Dry Clean"
    }
  },
  {
    id: "prod-4",
    name: "Women's Traditional Banarasi Silk Saree",
    category: "Women",
    subCategory: "Sarees",
    price: 2499,
    originalPrice: 4999,
    discount: "50% OFF",
    rating: 4.9,
    reviewsCount: 187,
    isFeatured: true,
    isSale: true,
    popularity: 97,
    inStock: true,
    badge: "Pure Elegance",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["Free Size (5.5m + 0.8m Blouse)"],
    colors: [
      { name: "Royal Magenta", hex: "#8b1842" },
      { name: "Peacock Blue", hex: "#0b4e6b" },
      { name: "Classic Crimson", hex: "#a81616" }
    ],
    description: "An opulent woven Banarasi art silk saree adorned with rich golden zari borders and intricate floral motifs. Includes matching unstitched blouse piece. A timeless heirloom piece from Uttar Pradesh weavers.",
    specifications: {
      "Fabric": "Art Silk with Metallic Zari",
      "Saree Length": "5.5 Metres",
      "Blouse Piece": "0.8 Metres (Unstitched)",
      "Border": "Broad Floral Zari Pallu",
      "Wash Care": "Dry Clean Recommended"
    }
  },
  {
    id: "prod-5",
    name: "Women's Floral Summer Maxi Dress",
    category: "Women",
    subCategory: "Dresses",
    price: 1199,
    originalPrice: 1999,
    discount: "40% OFF",
    rating: 4.7,
    reviewsCount: 165,
    isFeatured: true,
    isSale: false,
    popularity: 91,
    inStock: true,
    badge: "Summer Special",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Pastel Blossom", hex: "#e8c5c8" },
      { name: "Sage Garden", hex: "#8ea89d" },
      { name: "Ivory Daisy", hex: "#f4f1ea" }
    ],
    description: "Breezy and graceful tiered maxi dress featuring romantic botanical prints, adjustable tie shoulder straps, and a smocked elastic bodice for a flattering comfortable fit throughout sunny days.",
    specifications: {
      "Fabric": "100% Breathable Chiffon-Crepe",
      "Length": "Full Ankle Length",
      "Silhouette": "Tiered Fit & Flare",
      "Neckline": "Sweetheart Neck",
      "Wash Care": "Hand wash or gentle machine wash"
    }
  },
  {
    id: "prod-6",
    name: "Kids Cotton Printed T-Shirt",
    category: "Kids",
    subCategory: "T-Shirts",
    price: 399,
    originalPrice: 699,
    discount: "43% OFF",
    rating: 4.7,
    reviewsCount: 89,
    isFeatured: true,
    isSale: true,
    popularity: 88,
    inStock: true,
    badge: "Super Comfy",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["2-3 Y", "4-5 Y", "6-7 Y", "8-9 Y", "10-12 Y"],
    colors: [
      { name: "Sunshine Yellow", hex: "#ffca28" },
      { name: "Ocean Blue", hex: "#29b6f6" },
      { name: "Bright Coral", hex: "#ff7043" }
    ],
    description: "Made with 100% super-combed bio-washed cotton, ensuring non-irritating softness on delicate kids' skin. Features durable non-toxic chest graphics designed to withstand energetic playtime.",
    specifications: {
      "Fabric": "100% Bio-Washed Combed Cotton",
      "Neck": "Round Crew Ribbed Neck",
      "Sleeve": "Short Sleeves",
      "Safety": "Skin-friendly, Azo-free dyes",
      "Wash Care": "Machine wash warm"
    }
  },
  {
    id: "prod-7",
    name: "Kids Stretch Denim Jeans",
    category: "Kids",
    subCategory: "Jeans",
    price: 699,
    originalPrice: 1199,
    discount: "42% OFF",
    rating: 4.8,
    reviewsCount: 94,
    isFeatured: true,
    isSale: false,
    popularity: 86,
    inStock: true,
    badge: "Play-Proof",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["3-4 Y", "5-6 Y", "7-8 Y", "9-10 Y", "11-12 Y"],
    colors: [
      { name: "Medium Stone Wash", hex: "#466b95" },
      { name: "Dark Indigo", hex: "#1a2c4e" }
    ],
    description: "Tough yet ultra-soft stretch denim created specifically for active kids. Features an internal adjustable button waistband to accommodate growing sizes effortlessly.",
    specifications: {
      "Fabric": "97% Cotton, 3% Spandex Stretch Denim",
      "Waistband": "Internal Elastic Adjustable Tabs",
      "Reinforcement": "Bar-tacked stress points",
      "Wash Care": "Machine wash cold"
    }
  },
  {
    id: "prod-8",
    name: "Men's Premium Polo T-Shirt",
    category: "Men",
    subCategory: "T-Shirts",
    price: 649,
    originalPrice: 1099,
    discount: "41% OFF",
    rating: 4.6,
    reviewsCount: 156,
    isFeatured: true,
    isSale: true,
    popularity: 93,
    inStock: true,
    badge: "Classic Essential",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Jet Black", hex: "#111111" },
      { name: "Forest Olive", hex: "#3e4d3a" },
      { name: "Burgundy Red", hex: "#631d27" }
    ],
    description: "Knitted from double-piqué combed cotton with ribbed collar and anti-roll cuff detailing. Keeps its structure wash after wash, giving you a sharp look for Friday office or weekend outings.",
    specifications: {
      "Fabric": "100% Piqué Cotton (220 GSM)",
      "Collar": "Ribbed Polo Collar with 2 Pearl Buttons",
      "Fit": "Tailored Regular Fit",
      "Wash Care": "Machine wash cold, dry flat"
    }
  },
  {
    id: "prod-9",
    name: "Men's Festive Embroidered Kurta Pajama",
    category: "Men",
    subCategory: "Ethnic Wear",
    price: 1799,
    originalPrice: 3299,
    discount: "45% OFF",
    rating: 4.9,
    reviewsCount: 140,
    isFeatured: false,
    isSale: true,
    popularity: 96,
    inStock: true,
    badge: "Festival Special",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["38", "40", "42", "44", "46"],
    colors: [
      { name: "Royal Cream", hex: "#f3eedd" },
      { name: "Teal Green", hex: "#134e4a" },
      { name: "Deep Gold", hex: "#b48c36" }
    ],
    description: "Classic Jacquard silk blend kurta embellished with fine threadwork on mandarin collar and placket. Paired with comfortable cotton-silk drawstring churidar pajama.",
    specifications: {
      "Fabric": "Jacquard Silk Blend",
      "Set Includes": "1 Kurta + 1 Churidar Pajama",
      "Collar": "Mandarin Bandhgala",
      "Pocket": "2 Side Inseam Pockets",
      "Wash Care": "Dry Clean Only"
    }
  },
  {
    id: "prod-10",
    name: "Women's Lucknowi Chikankari Cotton Kurti",
    category: "Women",
    subCategory: "Kurtis",
    price: 999,
    originalPrice: 1799,
    discount: "44% OFF",
    rating: 4.8,
    reviewsCount: 230,
    isFeatured: false,
    isSale: true,
    popularity: 94,
    inStock: true,
    badge: "Handcrafted",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Blush Pink", hex: "#f4c2c2" },
      { name: "Mint Green", hex: "#c8e6c9" },
      { name: "Pristine White", hex: "#ffffff" }
    ],
    description: "Authentic shadow-work and bakhiya stitching done by traditional artisans. Light, breathable mulmul cotton provides soothing comfort all summer long.",
    specifications: {
      "Fabric": "100% Pure Mulmul Cotton",
      "Work": "Hand Embroidered Chikankari",
      "Neck": "V-Neck with floral placket",
      "Sleeve": "Full Sleeves",
      "Wash Care": "Gentle Hand Wash"
    }
  },
  {
    id: "prod-11",
    name: "Kids Floral Party Wear Frock",
    category: "Kids",
    subCategory: "Dresses",
    price: 849,
    originalPrice: 1499,
    discount: "43% OFF",
    rating: 4.9,
    reviewsCount: 78,
    isFeatured: false,
    isSale: false,
    popularity: 90,
    inStock: true,
    badge: "Party Wear",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["2-3 Y", "4-5 Y", "6-7 Y", "8-9 Y"],
    colors: [
      { name: "Rosy Peach", hex: "#f8b195" },
      { name: "Lavender Violet", hex: "#d1c4e9" }
    ],
    description: "Delightful flare dress featuring satin bow belt, soft netting layers, and 100% skin-safe cotton lining inside to prevent itchiness during long birthday celebrations.",
    specifications: {
      "Outer Material": "Tulle Net & Satin",
      "Inner Lining": "100% Soft Cotton",
      "Closure": "Concealed back zipper with tie sash",
      "Wash Care": "Dry clean or delicate hand wash"
    }
  },
  {
    id: "prod-12",
    name: "Kids Ethnic Kurta Pajama with Jacket",
    category: "Kids",
    subCategory: "Ethnic Wear",
    price: 1099,
    originalPrice: 1999,
    discount: "45% OFF",
    rating: 4.8,
    reviewsCount: 65,
    isFeatured: false,
    isSale: true,
    popularity: 87,
    inStock: true,
    badge: "Festive Ready",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["2-3 Y", "4-5 Y", "6-7 Y", "8-9 Y", "10-11 Y"],
    colors: [
      { name: "Golden Yellow & Blue", hex: "#eab308" },
      { name: "Maroon & Gold", hex: "#881337" }
    ],
    description: "A 3-piece celebratory ethnic ensemble consisting of a crisp cotton-silk kurta, elasticated churidar, and an embellished Nehru jacket for Diwali, weddings and school functions.",
    specifications: {
      "Set Contents": "Kurta, Pajama & Nehru Jacket (3 Pcs)",
      "Fabric": "Cotton Silk Blend",
      "Closure": "Front button jacket, elasticated waist pajama",
      "Wash Care": "Dry Clean Recommended"
    }
  }
];

// Realistic Customer Reviews
export const REVIEWS = [
  {
    id: "rev-1",
    author: "Pooja Sharma",
    city: "Gorakhpur",
    rating: 5,
    date: "12 days ago",
    verified: true,
    comment: "The Banarasi saree I bought for my sister's wedding exceeded all expectations. The zari work is so refined and the fabric feels genuinely luxurious. Thank you Maurya Vastralay!"
  },
  {
    id: "rev-2",
    author: "Rajesh Maurya",
    city: "Deoria",
    rating: 5,
    date: "3 weeks ago",
    verified: true,
    comment: "I purchased 3 linen shirts and slim jeans. The fitting is spot-on and comfort is top notch. Finding this level of quality at such fair local prices is truly rare."
  },
  {
    id: "rev-3",
    author: "Anjali Verma",
    city: "Basti",
    rating: 5,
    date: "1 month ago",
    verified: true,
    comment: "Bought kids festive outfits for my 5-year old. Pure cotton lining inside meant my son wore it happily the entire evening without any complaints. Great customer service!"
  }
];

// Why Choose Us Feature Cards
export const STORE_FEATURES = [
  {
    id: "feat-1",
    title: "Premium Quality",
    description: "Curated fabrics, handpicked artisan weaves, and durable stitching made to last.",
    icon: "ShieldCheck"
  },
  {
    id: "feat-2",
    title: "Affordable Prices",
    description: "Direct-to-customer pricing bringing you high-street looks without inflated price tags.",
    icon: "Tag"
  },
  {
    id: "feat-3",
    title: "Easy Shopping",
    description: "Simple sizing, intuitive filters, fast checkout, and 7-day hassle-free exchange.",
    icon: "ShoppingBag"
  },
  {
    id: "feat-4",
    title: "Fast Delivery",
    description: "Quick dispatch across Uttar Pradesh and all-India express doorstep shipping.",
    icon: "Truck"
  }
];

// Category metadata for cards & navigation
export const CATEGORIES_DATA = [
  {
    id: "men",
    title: "Men's Collection",
    category: "Men",
    tagline: "Sharp, timeless & effortless",
    itemCount: "45+ Styles",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&auto=format&fit=crop&q=80",
    popularKeywords: ["Shirts", "Jeans", "Polo T-Shirts", "Kurta Sets"]
  },
  {
    id: "women",
    title: "Women's Collection",
    category: "Women",
    tagline: "Graceful silks, kurtis & modern dresses",
    itemCount: "60+ Styles",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    popularKeywords: ["Sarees", "Kurtis", "Maxi Dresses", "Ethnic Sets"]
  },
  {
    id: "kids",
    title: "Kids' Collection",
    category: "Kids",
    tagline: "Playful, comfortable & durable",
    itemCount: "35+ Styles",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&auto=format&fit=crop&q=80",
    popularKeywords: ["T-Shirts", "Jeans", "Frocks", "Festive Sets"]
  }
];
