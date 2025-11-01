"use client";

import { useEffect, useState } from "react";
import { Gantari, Poppins } from "next/font/google";
import { Snowflake, Shield, Zap, Clock, Star } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const gantari = Gantari({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function VideoParallax() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const features = [
    { icon: Clock, text: "24/7 Emergency Service" },
    { icon: Shield, text: "90-Day Service Warranty" },
    { icon: Zap, text: "Certified DEWA Technicians" },
    { icon: Snowflake, text: "Same-Day Installation" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Fixed Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/TpboCq1W4Bc?autoplay=1&mute=1&loop=1&playlist=TpboCq1W4Bc&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1"
          className={`absolute inset-0 w-full h-full object-cover scale-105 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleVideoLoad}
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/80 to-slate-900/95"></div>
      </div>

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-4">
            <Snowflake className="text-blue-500 animate-spin" size={32} />
            <span className={`text-blue-200 text-sm ${poppins.className}`}>
              Loading...
            </span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        } transition-all duration-700 delay-300`}
      >
        <div className="text-center">
          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-12">
            <div className="h-px bg-blue-500/50 flex-1 max-w-12 sm:max-w-20"></div>
            <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
              <Snowflake className="text-blue-400" size={16} />
              <span
                className={`text-blue-300 text-xs font-semibold tracking-wider uppercase ${poppins.className}`}
              >
                Dubai's Premium AC Experts
              </span>
              <Snowflake className="text-blue-400" size={16} />
            </div>
            <div className="h-px bg-blue-500/50 flex-1 max-w-12 sm:max-w-20"></div>
          </div>

          {/* Main Title */}
          <div className="mb-6 sm:mb-8">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight ${gantari.className}`}
            >
              Beat the Dubai Heat
            </h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
            </div>
            <h2
              className={`text-xl sm:text-2xl lg:text-3xl text-blue-200 font-light ${gantari.className}`}
            >
              Premium AC Solutions for Your Comfort
            </h2>
          </div>

          {/* Description */}
          <p
            className={`text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed ${poppins.className}`}
          >
            Experience unmatched cooling performance with expert AC
            installation, maintenance, and repair services. Our certified
            technicians deliver guaranteed quality service across Dubai.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-10 sm:mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 bg-blue-500/20 rounded-lg mb-3 group-hover:bg-blue-500/30 transition-colors">
                  <feature.icon className="text-blue-400" size={24} />
                </div>
                <span
                  className={`text-white text-sm sm:text-base font-medium ${poppins.className}`}
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-2 border-slate-800"
                  ></div>
                ))}
              </div>
              <span className={`text-sm ${poppins.className}`}>
                Trusted by 5,000+ Clients
              </span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-slate-600"></div>

            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" size={16} />
              <span className={`text-sm ${poppins.className}`}>
                4.9/5 Rating on Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
