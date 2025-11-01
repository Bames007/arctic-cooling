"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Filter,
  X,
  Star,
  Zap,
  Shield,
  Truck,
  Check,
  Heart,
  Search,
  Grid3X3,
  List,
  ChevronDown,
  Clock,
  Volume2,
  Snowflake,
  Eye,
  CreditCard,
  Smartphone,
  Building,
  ArrowLeft,
  Home,
  Circle,
  CheckCircle2,
} from "lucide-react";
import { Gantari, Poppins } from "next/font/google";

// Font classes
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const gantari = Gantari({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Custom blue color - using #0081D5
const customBlue = {
  500: "#0081D5",
  600: "#006BB3",
  700: "#005591",
};

// Types
interface ProductSpecifications {
  cooling: string;
  noise: string;
  energy: string;
  warranty: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  brand: string;
  capacity: string;
  rating: number;
  reviews: number;
  features: string[];
  specifications: ProductSpecifications;
  inStock: boolean;
  delivery: string;
  badge: string;
  images?: string[];
}

interface CartItem extends Product {
  quantity: number;
}

interface Filters {
  brands: string[];
  capacities: string[];
  categories: string[];
  priceRange: { min: number; max: number } | null;
}

interface PriceRange {
  label: string;
  min: number;
  max: number;
}

const products: Product[] = [
  {
    id: "1",
    name: "Daikin FTKM Series Inverter Split AC",
    description:
      "Ultra-quiet, energy-efficient split AC with advanced air purification and Wi-Fi control. Perfect for Dubai's climate with 5-star energy rating.",
    price: 2499,
    originalPrice: 2899,
    image:
      "https://images.unsplash.com/photo-1730299788623-12cded84cf40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
    category: "split",
    brand: "daikin",
    capacity: "1.5-ton",
    rating: 4.8,
    reviews: 124,
    features: [
      "Wi-Fi Control",
      "Inverter Technology",
      "PM2.5 Filter",
      "Self-Clean",
      "Quiet Operation",
      "5-Star Rating",
    ],
    specifications: {
      cooling: "5100 BTU",
      noise: "19 dB",
      energy: "5 Star",
      warranty: "10 Years",
    },
    inStock: true,
    delivery: "Tomorrow",
    badge: "BESTSELLER",
    images: [
      "https://images.unsplash.com/photo-1621203067900-9310c0ff3cb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "2",
    name: "Mitsubishi Electric MSZ-HR Premium Inverter",
    description:
      "Premium split AC with 3D i-See sensor and advanced climate control. Features anti-allergy filter and ultra-quiet operation.",
    price: 3199,
    originalPrice: 3599,
    image:
      "https://images.unsplash.com/photo-1611583621951-e7e1547f6801?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    category: "split",
    brand: "mitsubishi",
    capacity: "2-ton",
    rating: 4.9,
    reviews: 89,
    features: [
      "3D i-See Sensor",
      "Anti-Allergy Filter",
      "Ultra Quiet 19dB",
      "Wi-Fi Ready",
      "Auto Clean",
      "Eco Mode",
    ],
    specifications: {
      cooling: "6800 BTU",
      noise: "19 dB",
      energy: "5 Star",
      warranty: "12 Years",
    },
    inStock: true,
    delivery: "Tomorrow",
    badge: "PREMIUM",
  },
  {
    id: "3",
    name: "LG ArtCool Gallery Premium Inverter",
    description:
      "Transform your AC into artwork with customizable display panels. Features dual inverter technology and voice control.",
    price: 2799,
    originalPrice: 3299,
    image:
      "https://images.unsplash.com/photo-1650179752373-10dfcf7f8395?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=522",
    category: "split",
    brand: "lg",
    capacity: "2-ton",
    rating: 4.7,
    reviews: 156,
    features: [
      "Customizable Display",
      "Dual Inverter",
      "Voice Control",
      "Anti-Corrosion",
      "Smart Diagnosis",
      "Auto Swing",
    ],
    specifications: {
      cooling: "6800 BTU",
      noise: "21 dB",
      energy: "4 Star",
      warranty: "10 Years",
    },
    inStock: true,
    delivery: "2 Days",
    badge: "SMART",
  },
  {
    id: "4",
    name: "Carrier Flexicool Inverter Split AC",
    description:
      "Reliable performance with eco-friendly refrigerant and smart features. Low noise operation with quick cooling.",
    price: 2299,
    originalPrice: 2699,
    image:
      "https://images.unsplash.com/photo-1667312939978-64cf31718a6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    category: "split",
    brand: "carrier",
    capacity: "1-ton",
    rating: 4.6,
    reviews: 203,
    features: [
      "Eco-Friendly R32",
      "Low Noise",
      "Quick Cool",
      "Auto Clean",
      "Sleep Mode",
      "Timer",
    ],
    specifications: {
      cooling: "3400 BTU",
      noise: "22 dB",
      energy: "4 Star",
      warranty: "8 Years",
    },
    inStock: false,
    delivery: "1 Week",
    badge: "ECO",
  },
  {
    id: "5",
    name: "Samsung Wind-Free Comfort AC",
    description:
      "Experience gentle cooling without direct air draft for ultimate comfort. Digital inverter with 8-step filtration system.",
    price: 2699,
    originalPrice: 2999,
    image:
      "https://images.unsplash.com/photo-1707135874025-067a353c0c48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=928",
    category: "split",
    brand: "samsung",
    capacity: "1.5-ton",
    rating: 4.5,
    reviews: 178,
    features: [
      "Wind-Free Technology",
      "Digital Inverter",
      "SmartThings",
      "8-Step Filtration",
      "Auto Clean",
      "Eco Mode",
    ],
    specifications: {
      cooling: "5100 BTU",
      noise: "23 dB",
      energy: "4 Star",
      warranty: "10 Years",
    },
    inStock: true,
    delivery: "Tomorrow",
    badge: "COMFORT",
  },
  {
    id: "6",
    name: "TCL FreshIN Smart Split AC",
    description:
      "Advanced air purification with 4-in-1 filter system and smart control. Perfect for modern homes.",
    price: 1999,
    originalPrice: 2399,
    image:
      "https://images.unsplash.com/photo-1616497633466-6c3f7a0cfa93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=992",
    category: "split",
    brand: "tcl",
    capacity: "1-ton",
    rating: 4.4,
    reviews: 92,
    features: [
      "4-in-1 Filter",
      "Smart Control",
      "Auto Swing",
      "Sleep Mode",
      "Quick Cool",
      "Timer",
    ],
    specifications: {
      cooling: "3400 BTU",
      noise: "24 dB",
      energy: "3 Star",
      warranty: "5 Years",
    },
    inStock: true,
    delivery: "3 Days",
    badge: "VALUE",
  },
  {
    id: "7",
    name: "Panasonic X-Premium Inverter",
    description:
      "Premium AC with nanoe-G air purification and ECONAVI energy saving technology. Ultra-quiet operation.",
    price: 2899,
    originalPrice: 3299,
    image:
      "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1035",
    category: "split",
    brand: "panasonic",
    capacity: "2-ton",
    rating: 4.7,
    reviews: 145,
    features: [
      "nanoe-G Purification",
      "ECONAVI",
      "Ultra Quiet",
      "Wi-Fi Control",
      "Auto Clean",
      "7-Speed Fan",
    ],
    specifications: {
      cooling: "6800 BTU",
      noise: "18 dB",
      energy: "5 Star",
      warranty: "10 Years",
    },
    inStock: true,
    delivery: "Tomorrow",
    badge: "PREMIUM",
  },
  {
    id: "8",
    name: "Hitachi Zen Pro Inverter",
    description:
      "Professional grade AC with advanced humidity control and 3D airflow. Perfect for large spaces.",
    price: 3399,
    originalPrice: 3799,
    image:
      "https://plus.unsplash.com/premium_photo-1669324450657-1dbd23d8c6d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    category: "split",
    brand: "hitachi",
    capacity: "2.5-ton",
    rating: 4.8,
    reviews: 98,
    features: [
      "3D Airflow",
      "Humidity Control",
      "Turbo Cooling",
      "Wi-Fi Ready",
      "Self Clean",
      "Ionizer",
    ],
    specifications: {
      cooling: "8500 BTU",
      noise: "20 dB",
      energy: "4 Star",
      warranty: "12 Years",
    },
    inStock: true,
    delivery: "2 Days",
    badge: "PROFESSIONAL",
  },
  {
    id: "9",
    name: "General Arctic Pro Window AC",
    description:
      "Powerful window AC with energy saving mode and remote control. Easy installation and maintenance.",
    price: 1499,
    originalPrice: 1899,
    image:
      "https://images.unsplash.com/photo-1714872245785-674ae3038d21?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    category: "window",
    brand: "general",
    capacity: "1.5-ton",
    rating: 4.3,
    reviews: 167,
    features: [
      "Energy Saving",
      "Remote Control",
      "Easy Install",
      "Timer",
      "Sleep Mode",
      "Auto Restart",
    ],
    specifications: {
      cooling: "5100 BTU",
      noise: "28 dB",
      energy: "3 Star",
      warranty: "5 Years",
    },
    inStock: true,
    delivery: "Tomorrow",
    badge: "BUDGET",
  },
  {
    id: "10",
    name: "York Diamond System Central AC",
    description:
      "Complete central air conditioning system for large villas and commercial spaces. High efficiency and reliability.",
    price: 8999,
    originalPrice: 10999,
    image:
      "https://images.unsplash.com/photo-1695457264650-c0bd2202fb5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    category: "central",
    brand: "york",
    capacity: "5-ton",
    rating: 4.6,
    reviews: 76,
    features: [
      "Central System",
      "High Efficiency",
      "Commercial Grade",
      "Smart Control",
      "Zone Control",
      "Humidity Management",
    ],
    specifications: {
      cooling: "60000 BTU",
      noise: "35 dB",
      energy: "4 Star",
      warranty: "15 Years",
    },
    inStock: true,
    delivery: "1 Week",
    badge: "COMMERCIAL",
  },
];

// Enhanced Product Card Component
function ProductCard({
  product,
  onAddToCart,
  onQuickView,
}: {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getBadgeColor = (badge: string) => {
    const colors: Record<string, string> = {
      BESTSELLER: "bg-orange-500",
      PREMIUM: "bg-purple-600",
      SMART: "bg-blue-600",
      ECO: "bg-green-600",
      COMFORT: "bg-pink-600",
      VALUE: "bg-gray-600",
      PROFESSIONAL: "bg-indigo-600",
      BUDGET: "bg-yellow-600",
      COMMERCIAL: "bg-red-600",
    };
    return colors[badge] || "bg-gray-600";
  };

  return (
    <div
      className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 hover:border-blue-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span
              className={`${getBadgeColor(
                product.badge
              )} text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-white/95 px-4 py-2 rounded-full text-sm font-semibold text-gray-900 backdrop-blur-sm">
              Out of Stock
            </span>
          </div>
        )}

        {/* Quick Actions */}
        <div
          className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isLiked
                ? "bg-red-500 text-white shadow-lg"
                : "bg-white/90 text-gray-600 hover:bg-white hover:text-red-500 shadow-md"
            }`}
          >
            <Heart size={16} className={isLiked ? "fill-current" : ""} />
          </button>
          <button
            onClick={() => onQuickView(product)}
            className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-blue-600 shadow-md transition-all duration-300"
          >
            <Eye size={16} />
          </button>
        </div>

        {/* Specifications Overlay */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1 text-slate-700">
                <Snowflake size={12} className="text-blue-500" />
                <span>{product.specifications.cooling}</span>
              </div>
              <div className="flex items-center gap-1 text-slate-700">
                <Volume2 size={12} className="text-green-500" />
                <span>{product.specifications.noise}</span>
              </div>
              <div className="flex items-center gap-1 text-slate-700">
                <Zap size={12} className="text-yellow-500" />
                <span>{product.specifications.energy}</span>
              </div>
              <div className="flex items-center gap-1 text-slate-700">
                <Shield size={12} className="text-purple-500" />
                <span>{product.specifications.warranty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Brand & Rating */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-sm font-semibold text-blue-600 capitalize ${poppins.className}`}
          >
            {product.brand}
          </span>
          <div className="flex items-center gap-1 bg-slate-100 rounded-full px-2 py-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span
              className={`text-xs font-semibold text-slate-700 ${poppins.className}`}
            >
              {product.rating}
            </span>
            <span className={`text-xs text-slate-500 ${poppins.className}`}>
              ({product.reviews})
            </span>
          </div>
        </div>

        {/* Product Name */}
        <h3
          className={`font-bold text-slate-900 mb-2 line-clamp-2 leading-tight ${gantari.className}`}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          className={`text-slate-700 text-sm mb-4 line-clamp-2 leading-relaxed ${poppins.className}`}
        >
          {product.description}
        </p>

        {/* Capacity & Delivery */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold ${poppins.className}`}
          >
            {product.capacity}
          </span>
          <div className="flex items-center gap-1 text-green-600">
            <Truck size={14} />
            <span className={`text-xs font-medium ${poppins.className}`}>
              {product.delivery}
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.features
            .slice(0, 3)
            .map((feature: string, index: number) => (
              <span
                key={index}
                className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-medium"
              >
                {feature}
              </span>
            ))}
          {product.features.length > 3 && (
            <span className="bg-slate-200 text-slate-600 px-2.5 py-1 rounded-lg text-xs">
              +{product.features.length - 3}
            </span>
          )}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`text-2xl font-bold text-slate-900 ${gantari.className}`}
              >
                AED {product.price}
              </span>
              {product.originalPrice > product.price && (
                <span
                  className={`text-sm text-slate-500 line-through ${poppins.className}`}
                >
                  AED {product.originalPrice}
                </span>
              )}
            </div>
            {product.originalPrice > product.price && (
              <div className="flex items-center gap-1">
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">
                  Save AED {product.originalPrice - product.price}
                </span>
              </div>
            )}
          </div>

          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
              product.inStock
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                : "bg-slate-200 text-slate-500 cursor-not-allowed"
            } ${poppins.className}`}
            style={{
              backgroundColor: product.inStock ? customBlue[500] : undefined,
            }}
          >
            <ShoppingCart size={16} />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Enhanced Navbar Component
function Navbar({
  cartCount,
  onCartClick,
  onHomeClick,
}: {
  cartCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
}) {
  const router = useRouter();

  return (
    <header className="bg-white shadow-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 group cursor-pointer"
            onClick={onHomeClick}
          >
            {/* Animated Snowflake Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="p-2 rounded-xl bg-blue-100 text-blue-600"
            >
              <Snowflake className="w-6 h-6" />
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-blue-900"
            >
              Arctic Peak<span className="text-blue-600"> Cooling</span>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AC units..."
                className={`pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 w-64 ${poppins.className} text-slate-900`}
                style={{ color: "rgb(15 23 42)" }}
              />
            </div>

            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-3 text-slate-700 hover:text-blue-600 transition-all duration-300 group"
            >
              <div className="relative">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-2 -right-2 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold"
                    style={{ backgroundColor: customBlue[500] }}
                  >
                    {cartCount}
                  </span>
                )}
              </div>
            </button>

            {/* Home Button */}
            <button
              onClick={() => router.push("/home")}
              className="hidden md:flex items-center gap-2 text-white px-4 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: customBlue[500] }}
            >
              <Home size={18} />
              <span>Home</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Enhanced Filters Sidebar
function FiltersSidebar({
  filters,
  onFilterChange,
  onClearFilters,
}: {
  filters: Filters;
  onFilterChange: (filterType: string, value: any) => void;
  onClearFilters: () => void;
}) {
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    brands: true,
    capacity: true,
    category: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }));
  };

  const priceRanges: PriceRange[] = [
    { label: "Under 2000", min: 0, max: 2000 },
    { label: "2000-3000", min: 2000, max: 3000 },
    { label: "3000-5000", min: 3000, max: 5000 },
    { label: "5000+", min: 5000, max: 10000 },
  ];

  const capacities = ["1-ton", "1.5-ton", "2-ton", "2.5-ton", "3-ton", "4-ton"];
  const brands = [
    "daikin",
    "mitsubishi",
    "lg",
    "carrier",
    "samsung",
    "tcl",
    "panasonic",
    "hitachi",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-xl font-bold text-slate-900 ${gantari.className}`}>
          Filters
        </h3>
        <button
          onClick={onClearFilters}
          className={`text-blue-600 hover:text-blue-700 text-sm font-semibold ${poppins.className}`}
          style={{ color: customBlue[500] }}
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        {/* Price Range */}
        <div className="border-b border-slate-200 pb-4">
          <button
            onClick={() => toggleSection("price")}
            className="flex items-center justify-between w-full group"
          >
            <h4 className={`font-semibold text-slate-900 ${gantari.className}`}>
              Price Range
            </h4>
            <ChevronDown
              size={16}
              className={`text-slate-600 transition-transform duration-300 ${
                expandedSections.price ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.price && (
            <div className="mt-4 space-y-3">
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="500"
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-slate-700">
                  <span>AED 0</span>
                  <span>AED 10,000</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {priceRanges.map((range, index) => (
                  <button
                    key={index}
                    onClick={() => onFilterChange("priceRange", range)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                      filters.priceRange?.min === range.min
                        ? "text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    } ${poppins.className}`}
                    style={{
                      backgroundColor:
                        filters.priceRange?.min === range.min
                          ? customBlue[500]
                          : undefined,
                    }}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Brands */}
        <div className="border-b border-slate-200 pb-4">
          <button
            onClick={() => toggleSection("brands")}
            className="flex items-center justify-between w-full group"
          >
            <h4 className={`font-semibold text-slate-900 ${gantari.className}`}>
              Brands
            </h4>
            <ChevronDown
              size={16}
              className={`text-slate-600 transition-transform duration-300 ${
                expandedSections.brands ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.brands && (
            <div className="mt-4 space-y-2 max-h-48 overflow-y-auto">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                >
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onFilterChange("brands", [...filters.brands, brand]);
                      } else {
                        onFilterChange(
                          "brands",
                          filters.brands.filter((b: string) => b !== brand)
                        );
                      }
                    }}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    style={{ color: customBlue[500] }}
                  />
                  <span
                    className={`text-slate-700 text-sm capitalize ${poppins.className}`}
                  >
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Capacity */}
        <div className="border-b border-slate-200 pb-4">
          <button
            onClick={() => toggleSection("capacity")}
            className="flex items-center justify-between w-full group"
          >
            <h4 className={`font-semibold text-slate-900 ${gantari.className}`}>
              Capacity
            </h4>
            <ChevronDown
              size={16}
              className={`text-slate-600 transition-transform duration-300 ${
                expandedSections.capacity ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.capacity && (
            <div className="mt-4 grid grid-cols-2 gap-2">
              {capacities.map((capacity) => (
                <button
                  key={capacity}
                  onClick={() => {
                    if (filters.capacities.includes(capacity)) {
                      onFilterChange(
                        "capacities",
                        filters.capacities.filter((c: string) => c !== capacity)
                      );
                    } else {
                      onFilterChange("capacities", [
                        ...filters.capacities,
                        capacity,
                      ]);
                    }
                  }}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                    filters.capacities.includes(capacity)
                      ? "text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  } ${poppins.className}`}
                  style={{
                    backgroundColor: filters.capacities.includes(capacity)
                      ? customBlue[500]
                      : undefined,
                  }}
                >
                  {capacity}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Features */}
        <div>
          <button
            onClick={() => toggleSection("category")}
            className="flex items-center justify-between w-full group"
          >
            <h4 className={`font-semibold text-slate-900 ${gantari.className}`}>
              Features
            </h4>
            <ChevronDown
              size={16}
              className={`text-slate-600 transition-transform duration-300 ${
                expandedSections.category ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.category && (
            <div className="mt-4 space-y-2">
              {[
                "Wi-Fi Control",
                "Inverter",
                "Energy Saving",
                "Quiet Operation",
                "Smart Control",
              ].map((feature) => (
                <label
                  key={feature}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                >
                  <input
                    type="checkbox"
                    className="rounded border-slate-300 focus:ring-blue-500"
                    style={{ color: customBlue[500] }}
                  />
                  <span
                    className={`text-slate-700 text-sm ${poppins.className}`}
                  >
                    {feature}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Checkout Component
interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  color: string;
}

interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  emirate: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  nameOnCard: string;
}

function CheckoutModal({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  total,
}: {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  total: number;
}) {
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    emirate: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const paymentMethods: PaymentMethod[] = [
    {
      id: "mobile-pay",
      name: "Mobile Pay",
      icon: Smartphone,
      description: "Pay securely with mobile payment",
      color: "bg-black",
    },
    {
      id: "google-pay",
      name: "Google Pay",
      icon: Smartphone,
      description: "Pay with your Google account",
      color: "bg-blue-500",
    },
    {
      id: "credit-card",
      name: "Credit Card",
      icon: CreditCard,
      description: "Pay with Visa, Mastercard, or Amex",
      color: "bg-purple-500",
    },
    {
      id: "bank-transfer",
      name: "Bank Transfer",
      icon: Building,
      description: "Direct bank transfer",
      color: "bg-green-500",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h2
                  className={`text-2xl font-bold text-slate-900 ${gantari.className}`}
                >
                  Checkout
                </h2>
                <p className={`text-slate-700 ${poppins.className}`}>
                  Complete your purchase
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  checkoutStep >= 1
                    ? "text-white"
                    : "bg-slate-200 text-slate-600"
                } ${poppins.className}`}
                style={{
                  backgroundColor:
                    checkoutStep >= 1 ? customBlue[500] : undefined,
                }}
              >
                1
              </div>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  checkoutStep >= 2
                    ? "text-white"
                    : "bg-slate-200 text-slate-600"
                } ${poppins.className}`}
                style={{
                  backgroundColor:
                    checkoutStep >= 2 ? customBlue[500] : undefined,
                }}
              >
                2
              </div>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  checkoutStep >= 3
                    ? "text-white"
                    : "bg-slate-200 text-slate-600"
                } ${poppins.className}`}
                style={{
                  backgroundColor:
                    checkoutStep >= 3 ? customBlue[500] : undefined,
                }}
              >
                3
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {checkoutStep === 1 && (
                <div className="space-y-6">
                  <h3
                    className={`text-xl font-bold text-slate-900 ${gantari.className}`}
                  >
                    Shipping Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900"
                      placeholder="Your complete address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900"
                        placeholder="Dubai"
                      />
                    </div>
                    <div>
                      <label
                        className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                      >
                        Emirate
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900">
                        <option>Dubai</option>
                        <option>Abu Dhabi</option>
                        <option>Sharjah</option>
                        <option>Ajman</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {checkoutStep === 2 && (
                <div className="space-y-6">
                  <h3
                    className={`text-xl font-bold text-slate-900 ${gantari.className}`}
                  >
                    Payment Method
                  </h3>
                  <div className="space-y-4">
                    {paymentMethods.map((method) => {
                      const IconComponent = method.icon;
                      return (
                        <div
                          key={method.id}
                          onClick={() => setSelectedPayment(method.id)}
                          className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                            selectedPayment === method.id
                              ? "border-blue-500 bg-blue-50"
                              : "border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`${method.color} rounded-lg p-3`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4
                                className={`font-semibold text-slate-900 ${gantari.className}`}
                              >
                                {method.name}
                              </h4>
                              <p
                                className={`text-slate-700 text-sm ${poppins.className}`}
                              >
                                {method.description}
                              </p>
                            </div>
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedPayment === method.id
                                  ? "bg-blue-500 border-blue-500"
                                  : "border-slate-300"
                              }`}
                            >
                              {selectedPayment === method.id && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {selectedPayment === "credit-card" && (
                    <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                      <h4
                        className={`font-semibold text-slate-900 ${gantari.className}`}
                      >
                        Card Details
                      </h4>
                      <div>
                        <label
                          className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                        >
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                          >
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label
                            className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                          >
                            CVV
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900"
                            placeholder="123"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                        >
                          Name on Card
                        </label>
                        <input
                          type="text"
                          name="nameOnCard"
                          value={formData.nameOnCard}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {checkoutStep === 3 && (
                <div className="text-center space-y-6">
                  <div className="bg-green-50 rounded-2xl p-8">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className={`text-2xl font-bold text-slate-900 mb-2 ${gantari.className}`}
                    >
                      Order Confirmed!
                    </h3>
                    <p className={`text-slate-700 mb-4 ${poppins.className}`}>
                      Thank you for your purchase. Your order has been
                      confirmed.
                    </p>
                    <div className="bg-white rounded-xl p-4 inline-block">
                      <p
                        className={`text-slate-900 font-semibold ${poppins.className}`}
                      >
                        Order #CB-
                        {Math.random().toString(36).substr(2, 9).toUpperCase()}
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4
                      className={`font-semibold text-slate-900 mb-4 ${gantari.className}`}
                    >
                      What's Next?
                    </h4>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 rounded-lg p-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p
                            className={`font-medium text-slate-900 ${gantari.className}`}
                          >
                            Installation Scheduling
                          </p>
                          <p
                            className={`text-slate-700 text-sm ${poppins.className}`}
                          >
                            Our team will contact you within 2 hours
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 rounded-lg p-2">
                          <Truck className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p
                            className={`font-medium text-slate-900 ${gantari.className}`}
                          >
                            Delivery & Installation
                          </p>
                          <p
                            className={`text-slate-700 text-sm ${poppins.className}`}
                          >
                            Scheduled for tomorrow, 9 AM - 1 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-6">
                {checkoutStep > 1 && (
                  <button
                    onClick={() => setCheckoutStep((step) => step - 1)}
                    className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={() => {
                    if (checkoutStep < 3) {
                      setCheckoutStep((step) => step + 1);
                    } else {
                      onClose();
                    }
                  }}
                  className="flex-1 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: customBlue[500] }}
                >
                  {checkoutStep === 3 ? "Complete Order" : "Continue"}
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-slate-50 rounded-2xl p-6 h-fit sticky top-0">
              <h3
                className={`text-lg font-bold text-slate-900 mb-4 ${gantari.className}`}
              >
                Order Summary
              </h3>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 bg-white rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`font-medium text-slate-900 text-sm line-clamp-2 ${gantari.className}`}
                      >
                        {item.name}
                      </h4>
                      <p className="text-blue-600 font-semibold">
                        AED {item.price}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span>Qty: {item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-slate-200 pt-4">
                <div className="flex justify-between text-slate-700">
                  <span className={poppins.className}>Subtotal</span>
                  <span className={`font-semibold ${gantari.className}`}>
                    AED {total}
                  </span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span className={poppins.className}>Installation</span>
                  <span className={`font-semibold ${gantari.className}`}>
                    AED 299
                  </span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span className={poppins.className}>VAT (5%)</span>
                  <span className={`font-semibold ${gantari.className}`}>
                    AED {Math.round((total + 299) * 0.05)}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold text-slate-900 border-t border-slate-200 pt-3">
                  <span className={gantari.className}>Total</span>
                  <span className={gantari.className}>
                    AED {total + 299 + Math.round((total + 299) * 0.05)}
                  </span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="flex items-center gap-2 mt-6 p-3 bg-white rounded-xl border border-slate-200">
                <Shield className="w-5 h-5 text-green-500" />
                <span className={`text-sm text-slate-700 ${poppins.className}`}>
                  Secure SSL Encryption
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Quick View Modal
function QuickViewModal({
  product,
  isOpen,
  onClose,
}: {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2
              className={`text-2xl font-bold text-slate-900 ${gantari.className}`}
            >
              Quick View
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 bg-slate-100 rounded-2xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <span
                  className={`text-sm font-semibold text-blue-600 ${poppins.className}`}
                >
                  {product.brand}
                </span>
                <h3
                  className={`text-xl font-bold text-slate-900 mt-1 ${gantari.className}`}
                >
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className={`text-slate-700 ${poppins.className}`}>
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <p
                className={`text-slate-700 leading-relaxed ${poppins.className}`}
              >
                {product.description}
              </p>

              <div className="space-y-4">
                <h4
                  className={`font-semibold text-slate-900 ${gantari.className}`}
                >
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      <span
                        className={`text-sm text-slate-700 ${poppins.className}`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t">
                <div>
                  <div className="text-3xl font-bold text-slate-900">
                    AED {product.price}
                  </div>
                  {product.originalPrice > product.price && (
                    <div className="text-slate-500 line-through">
                      AED {product.originalPrice}
                    </div>
                  )}
                </div>
                <button
                  className="text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-colors"
                  style={{ backgroundColor: customBlue[500] }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Ecommerce Component
export default function EcommercePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    brands: [],
    capacities: [],
    categories: [],
    priceRange: null,
  });
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null
  );
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item: CartItem) => item.id === product.id);
      if (existing) {
        return prev.map((item: CartItem) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item: CartItem) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item: CartItem) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const cartTotal = cart.reduce(
    (total: number, item: CartItem) => total + item.price * item.quantity,
    0
  );

  const handleFilterChange = (filterType: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      brands: [],
      capacities: [],
      categories: [],
      priceRange: null,
    });
  };

  // Filter products based on active filters and search
  const filteredProducts = products.filter((product) => {
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }

    if (
      filters.capacities.length > 0 &&
      !filters.capacities.includes(product.capacity)
    ) {
      return false;
    }

    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    ) {
      return false;
    }

    if (
      filters.priceRange &&
      (product.price < filters.priceRange.min ||
        product.price > filters.priceRange.max)
    ) {
      return false;
    }

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Navbar */}
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setIsCartOpen(true)}
        onHomeClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Enhanced Filters Sidebar */}
          <div className="w-80 flex-shrink-0 hidden lg:block">
            <FiltersSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setMobileFiltersOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors duration-300"
                  >
                    <Filter size={18} />
                    <span className={poppins.className}>Filters</span>
                  </button>

                  <div
                    className={`text-slate-700 font-medium ${poppins.className}`}
                  >
                    Showing {sortedProducts.length} of {products.length}{" "}
                    products
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-1 bg-slate-100 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === "grid"
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-slate-600 hover:text-slate-700"
                      }`}
                    >
                      <Grid3X3 size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === "list"
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-slate-600 hover:text-slate-700"
                      }`}
                    >
                      <List size={18} />
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={`border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-slate-900 ${poppins.className}`}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                  <Search size={48} className="text-slate-400 mx-auto mb-4" />
                  <h3
                    className={`text-xl font-semibold text-slate-900 mb-2 ${gantari.className}`}
                  >
                    No products found
                  </h3>
                  <p className={`text-slate-700 mb-6 ${poppins.className}`}>
                    Try adjusting your filters or search terms
                  </p>
                  <button
                    onClick={clearFilters}
                    className="text-white px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-colors duration-300"
                    style={{ backgroundColor: customBlue[500] }}
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            ) : (
              <div
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ${
          mobileFiltersOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-xl font-bold text-slate-900 ${gantari.className}`}
              >
                Filters
              </h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>
            <FiltersSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsCartOpen(false)}
        />
        <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <h3
                className={`text-xl font-bold text-slate-900 ${gantari.className}`}
              >
                Your Cart
              </h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center text-slate-700 mt-16">
                <ShoppingCart
                  size={64}
                  className="mx-auto mb-4 text-slate-300"
                />
                <p
                  className={`text-lg font-semibold mb-2 ${gantari.className}`}
                >
                  Your cart is empty
                </p>
                <p className={`text-slate-600 ${poppins.className}`}>
                  Add some AC units to get started
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`font-semibold text-slate-900 text-sm line-clamp-2 mb-1 ${gantari.className}`}
                      >
                        {item.name}
                      </h4>
                      <p className="text-blue-600 font-semibold text-lg">
                        AED {item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
                        >
                          -
                        </button>
                        <span
                          className={`text-sm font-semibold w-8 text-center ${poppins.className}`}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-400 hover:text-red-500 self-start transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-slate-200 p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold text-gray-900">
                <span className={gantari.className}>Total:</span>
                <span className={gantari.className}>AED {cartTotal}</span>
              </div>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full text-white py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: customBlue[500] }}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        total={cartTotal}
      />
    </div>
  );
}
