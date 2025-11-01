"use client";

import Image from "next/image";
import { Star, Shield, Zap, Wifi, Palette, Volume2 } from "lucide-react";
import { useEffect, useRef } from "react";
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
}

// Real Unsplash URLs for AC products - replace with your actual chosen images
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
      "https://images.unsplash.com/photo-1694675879520-ff32d348fb7f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    badge: "Most Efficient",
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
      "https://images.unsplash.com/photo-1576613939131-f51bdf638505?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    badge: "Best Premium",
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
      "https://images.unsplash.com/photo-1739573709776-5bbe22f1b708?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFpciUyMGNvbmRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    badge: "Smart Design",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R",
  },
];

const FeatureIcon = ({ feature }: { feature: string }) => {
  const iconProps = { size: 16, className: "text-blue-600" };

  if (feature.includes("Inverter")) return <Zap {...iconProps} />;
  if (feature.includes("Wi-Fi") || feature.includes("Smart"))
    return <Wifi {...iconProps} />;
  if (feature.includes("Warranty")) return <Shield {...iconProps} />;
  if (feature.includes("Quiet")) return <Volume2 {...iconProps} />;
  if (feature.includes("Customizable")) return <Palette {...iconProps} />;
  return <Star {...iconProps} />;
};

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.from(".section-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate product cards with stagger
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

      // Hover animations for product cards
      productRefs.current.forEach((card) => {
        if (!card) return;

        gsap.to(card, {
          y: -10,
          duration: 0.3,
          ease: "power2.out",
          paused: true,
        });

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
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

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 section-header">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-100">
            <Zap size={16} />
            Premium AC Systems
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Engineered for{" "}
            <span className="text-blue-600">Dubai&apos;s Extreme Climate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Cutting-edge technology designed specifically for desert conditions.
            Energy-efficient<sup>1</sup>, reliable, and built to outperform.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => addToRefs(el, index)}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border border-gray-200">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-gray-50">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  placeholder="blur"
                  blurDataURL={product.blurDataURL}
                  quality={90}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-7">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-light text-[15px]">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm text-gray-700 transition-colors hover:text-gray-900 group/feature"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                        <FeatureIcon feature={feature} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-[1.02] shadow-sm hover:shadow-md flex items-center justify-center gap-2 group/button">
                  <Zap
                    size={18}
                    className="group-hover/button:scale-110 transition-transform duration-300"
                  />
                  <span>Get Free Consultation</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center opacity-90">
          {[
            {
              icon: Shield,
              text: "2-Year Installation Warranty",
              color: "text-green-600",
            },
            {
              icon: Zap,
              text: "Energy Efficiency Guarantee",
              color: "text-yellow-600",
            },
            {
              icon: Star,
              text: "Premium Brand Authorized Partner",
              color: "text-blue-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200"
            >
              <item.icon className={item.color} size={18} />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
