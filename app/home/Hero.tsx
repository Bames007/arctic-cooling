// components/Hero.jsx - Premium HVAC Hero
"use client";

import { Gantari, Poppins } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Award,
  Clock,
  ArrowRight,
  Shield,
  Zap,
  Star,
  Phone,
  Calendar,
  CheckCircle,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const gantari = Gantari({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Shield,
      text: "DEWA Certified Experts",
      desc: "Fully licensed & insured",
    },
    { icon: Award, text: "90-Day Warranty", desc: "Guaranteed workmanship" },
    { icon: Clock, text: "24/7 Emergency", desc: "1-hour response time" },
    { icon: Zap, text: "Energy Efficient", desc: "Save up to 40% on bills" },
  ];

  const stats = [
    { number: "15+", label: "Years Excellence" },
    { number: "5,000+", label: "Satisfied Clients" },
    { number: "24/7", label: "Emergency Support" },
  ];

  return (
    <section
      className={`relative min-h-screen bg-white overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-20 px-4 sm:px-6 lg:px-8 ${poppins.className}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Moving Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#0081D5]/5 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0081D5]/3 rounded-full animate-float-delayed"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,129,213,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,129,213,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transform transition-all duration-700 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-4 bg-white border border-[#0081D5]/20 rounded-2xl px-6 py-4 shadow-lg shadow-[#0081D5]/5 animate-fade-in">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-8 h-8 bg-gradient-to-br from-[#0081D5] to-[#0066AA] rounded-full border-2 border-white shadow-lg animate-bounce"
                    style={{ animationDelay: `${item * 0.1}s` }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-[#0081D5] text-[#0081D5] animate-pulse"
                      style={{ animationDelay: `${star * 0.2}s` }}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  4.9/5 (2,000+ Reviews)
                </span>
              </div>
            </div>

            {/* Headline Section */}
            <div className="space-y-6 animate-slide-up">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight ${gantari.className}`}
              >
                Premium{" "}
                <span className="text-[#0081D5] animate-color-shift">
                  AC Services
                </span>{" "}
                in Dubai & UAE
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Experience unparalleled cooling solutions with Dubai's leading
                HVAC specialists.{" "}
                <span className="font-semibold text-gray-900">
                  24/7 emergency services
                </span>{" "}
                with guaranteed{" "}
                <span className="font-semibold text-gray-900">
                  1-hour response time
                </span>
                .
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-stagger">
              {features.map((feature, index) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 group transform transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 bg-[#0081D5]/10 rounded-lg group-hover:bg-[#0081D5]/20 transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="w-4 h-4 text-[#0081D5]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {feature.text}
                    </h3>
                    <p className="text-xs text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="group bg-[#0081D5] hover:bg-[#0066AA] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 animate-pulse-slow">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Free Inspection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group bg-white border-2 border-[#0081D5] text-[#0081D5] hover:bg-[#0081D5] hover:text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-200 animate-stagger">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center transform transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div
                      className={`text-2xl font-bold text-[#0081D5] ${gantari.className}`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Visual Showcase */}
          <div
            className={`relative transform transition-all duration-700 ease-out delay-300 ${
              isLoaded
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            }`}
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Decorations */}
              <div className="absolute -inset-4 sm:-inset-6 bg-[#0081D5]/5 rounded-2xl transform rotate-2 animate-pulse-slow"></div>

              {/* Main Image Stack */}
              <div className="relative space-4">
                {/* Primary Image */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
                  <div className="relative h-[300px] sm:h-[400px] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1599707835168-c1090658bfa6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=613"
                      alt="Professional HVAC technician servicing modern air conditioning system"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 bg-[#0081D5] text-white px-3 py-1.5 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110">
                    <span className="text-xs font-semibold">
                      ⚡ Same-Day Service
                    </span>
                  </div>
                </div>

                {/* Service Guarantee Card */}
                <div className="bg-white border border-[#0081D5]/20 rounded-xl p-4 shadow-lg transform transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#0081D5]/10 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-[#0081D5]" />
                      </div>
                      <div>
                        <h4
                          className={`font-bold text-gray-900 text-sm ${gantari.className}`}
                        >
                          Quality Guaranteed
                        </h4>
                        <p className="text-xs text-gray-600">
                          90-day warranty on all services
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-xl font-bold text-[#0081D5] ${gantari.className}`}
                      >
                        1Hr
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        Avg. Response
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.05);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes color-shift {
          0%,
          100% {
            color: #0081d5;
          }
          50% {
            color: #0066aa;
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.3s both;
        }
        .animate-color-shift {
          animation: color-shift 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animate-stagger > * {
          opacity: 0;
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
