"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Shield,
  Zap,
  Wifi,
  Palette,
  Volume2,
  ArrowRight,
  ChevronRight,
  Truck,
  Check,
  X,
  ShoppingBag,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
  badge?: string;
  blurDataURL?: string;
  price?: number;
  rating?: number;
  variations?: string[];
}

const BRAND = {
  blue: "#0081D5",
  blueLight: "#E6F3FF",
  blueDark: "#0066A8",
  white: "#FFFFFF",
  gray: "#6B7280",
  grayLight: "#F8FAFC",
};

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Daikin Inverter Split AC",
    description:
      "Ultra-efficient cooling with whisper-quiet operation, perfect for Dubai bedrooms and living spaces.",
    features: [
      "Inverter Technology",
      "40% Energy Saving",
      "Wi-Fi Smart Control",
      "10-Year Compressor Warranty",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1709432767122-d3cb5326911a?ixlib=rb-4.1.0&auto=format&fit=crop&w=1171&q=80",
    badge: "Most Efficient",
    price: 2499,
    rating: 4.8,
    variations: ["1 Ton", "1.5 Ton", "2 Ton"],
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R",
  },
  {
    id: "2",
    name: "Mitsubishi Electric Diamond",
    description:
      "Premium air purification with advanced filtration for Dubai's desert environment.",
    features: [
      "3D i-See Sensor",
      "PM2.5 Filter",
      "Self-Clean Function",
      "Ultra-Quiet 19dB",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1730299789533-ce8f6966c0da?ixlib=rb-4.1.0&auto=format&fit=crop&w=764&q=80",
    badge: "Best Premium",
    price: 3199,
    rating: 4.9,
    variations: ["2 Ton", "2.5 Ton", "3 Ton"],
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R",
  },
  {
    id: "3",
    name: "LG ArtCool Gallery",
    description:
      "Transform your AC into custom artwork while enjoying powerful, efficient cooling.",
    features: [
      "Customizable Display",
      "Dual Inverter",
      "Voice Control",
      "Anti-Corrosion Blue Fin",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1730299788623-12cded84cf40?ixlib=rb-4.1.0&auto=format&fit=crop&w=764&q=80",
    badge: "Smart Design",
    price: 2799,
    rating: 4.7,
    variations: ["1.5 Ton", "2 Ton", "Custom Art Panel"],
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pV2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R",
  },
];

const FeatureIcon = ({ feature }: { feature: string }) => {
  const iconProps = { size: 16, className: "text-white" };

  if (feature.includes("Inverter")) return <Zap {...iconProps} />;
  if (feature.includes("Wi-Fi") || feature.includes("Smart"))
    return <Wifi {...iconProps} />;
  if (feature.includes("Warranty")) return <Shield {...iconProps} />;
  if (feature.includes("Quiet")) return <Volume2 {...iconProps} />;
  if (feature.includes("Customizable")) return <Palette {...iconProps} />;
  return <Star {...iconProps} />;
};

// Product Modal Component
function ProductModal({
  product,
  isOpen,
  onClose,
}: {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedVariation, setSelectedVariation] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in-90 zoom-in-95"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-80 lg:h-full min-h-[400px] bg-gradient-to-br from-blue-50 to-gray-100">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
              priority
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <X size={20} className="text-gray-700" />
            </button>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#0081D5] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {product.badge}
              </span>
              <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-700">
                  {product.rating}
                </span>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {product.name}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-6 p-4 bg-blue-50 rounded-2xl">
              <div className="text-3xl font-bold text-[#0081D5] mb-2">
                AED {product.price}
              </div>
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <Truck size={18} />
                <span>Free Installation & Delivery Across Dubai</span>
              </div>
            </div>

            {/* Variations */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                Available Capacities
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.variations?.map((variation, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariation(index)}
                    className={`px-5 py-3 rounded-xl border-2 transition-all duration-200 font-semibold text-sm ${
                      selectedVariation === index
                        ? "border-[#0081D5] bg-[#0081D5] text-white shadow-lg"
                        : "border-gray-300 text-gray-700 hover:border-[#0081D5] hover:bg-blue-50"
                    }`}
                  >
                    {variation}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                Premium Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-[#0081D5] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FeatureIcon feature={feature} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-[#0081D5] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#0066A8] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                <Zap size={20} />
                Get Free Consultation
              </button>
              <Link
                href="/ecommerce"
                className="flex-1 border-2 border-[#0081D5] text-[#0081D5] py-4 px-6 rounded-xl font-semibold hover:bg-[#E6F3FF] transition-all duration-200 flex items-center justify-center gap-2 text-center"
              >
                <ShoppingBag size={18} />
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.fromTo(
        productRefs.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      productRefs.current.forEach((card) => {
        if (!card) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    productRefs.current[index] = el;
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 section-header">
            <div
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg"
              style={{ backgroundColor: BRAND.blue }}
            >
              <Zap size={18} />
              Premium AC Systems
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Engineered for{" "}
              <span style={{ color: BRAND.blue }}>
                Dubai&apos;s Extreme Climate
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-8">
              Cutting-edge technology designed specifically for desert
              conditions. Energy-efficient<sup>1</sup>, reliable, and built to
              outperform.
            </p>

            {/* Ecommerce Button - Top */}
            <Link
              href="/ecommerce"
              className="group inline-flex items-center gap-3 bg-white border-2 border-[#0081D5] text-[#0081D5] hover:bg-[#0081D5] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
            >
              <ShoppingBag size={20} />
              <span>Explore Full Product Catalog</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                ref={(el) => addToRefs(el, index)}
                onClick={() => handleProductClick(product)}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className="text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                      style={{ backgroundColor: BRAND.blue }}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    placeholder="blur"
                    blurDataURL={product.blurDataURL}
                    quality={90}
                    priority={index === 0}
                  />

                  {/* Quick View Indicator */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold text-gray-900 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Click to View Details
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating and Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                      <Star
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span className="text-sm font-semibold text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: BRAND.blue }}
                    >
                      AED {product.price}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {product.features
                      .slice(0, 2)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <div
                            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                            style={{ backgroundColor: BRAND.blue }}
                          >
                            <FeatureIcon feature={feature} />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                  </div>

                  {/* Variations Preview */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.variations?.slice(0, 2).map((variation, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-medium border"
                          style={{
                            borderColor: BRAND.blueLight,
                            backgroundColor: BRAND.blueLight,
                            color: BRAND.blue,
                          }}
                        >
                          {variation}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div
                    className="w-full text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/button"
                    style={{ backgroundColor: BRAND.blue }}
                  >
                    <span>View Details</span>
                    <ChevronRight
                      size={16}
                      className="group-hover/button:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "2-Year Warranty",
                text: "Comprehensive installation protection",
                color: "text-blue-600",
              },
              {
                icon: Zap,
                title: "40% Energy Saving",
                text: "Guaranteed efficiency on your bills",
                color: "text-green-600",
              },
              {
                icon: Truck,
                title: "Free Installation",
                text: "Professional setup across Dubai",
                color: "text-orange-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 bg-blue-50">
                  <item.icon size={28} className={item.color} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-3xl p-12 border border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Find Your Perfect AC?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Explore our complete range of premium air conditioning systems
                with detailed specifications, customer reviews, and exclusive
                offers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/ecommerce"
                  className="group bg-[#0081D5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0066A8] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
                >
                  <ShoppingBag size={20} />
                  <span>Browse Full Catalog</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>

                <button className="group border-2 border-[#0081D5] text-[#0081D5] px-8 py-4 rounded-xl font-semibold hover:bg-[#E6F3FF] transition-all duration-300 flex items-center gap-3">
                  <Zap size={20} />
                  <span>Get Free Consultation</span>
                </button>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {[
                  { number: "50+", label: "AC Models" },
                  { number: "5,000+", label: "Happy Customers" },
                  { number: "24/7", label: "Support" },
                  { number: "4.9/5", label: "Rating" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-[#0081D5]">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
