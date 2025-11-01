"use client";

import {
  Award,
  Clock,
  Shield,
  DollarSign,
  Users,
  ThumbsUp,
  MapPin,
  PhoneCall,
  Star,
  CheckCircle,
} from "lucide-react";

const poppins = {
  className: "font-poppins",
};

const gantari = {
  className: "font-gantari",
};

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  stats?: string;
  delay: number;
}

export default function WhyChooseUs() {
  const features: Feature[] = [
    {
      id: "1",
      title: "DEWA-Certified Experts",
      description:
        "Our technicians undergo rigorous training and hold Dubai-specific certifications for all installations and repairs.",
      icon: <Award className="w-5 h-5" />,
      stats: "100% Certified",
      delay: 0,
    },
    {
      id: "2",
      title: "90-Minute Emergency Response",
      description:
        "When Dubai heat strikes, we're there fast. Guaranteed rapid response across all Emirates, 24/7.",
      icon: <Clock className="w-5 h-5" />,
      stats: "24/7 Service",
      delay: 100,
    },
    {
      id: "3",
      title: "90-Day Service Warranty",
      description:
        "All repairs include our comprehensive warranty. No hidden costs, no surprises. Your satisfaction guaranteed.",
      icon: <Shield className="w-5 h-5" />,
      stats: "Zero Risk",
      delay: 200,
    },
    {
      id: "4",
      title: "Transparent Pricing",
      description:
        "Upfront quotes with no hidden fees. What we quote is what you pay, guaranteed.",
      icon: <DollarSign className="w-5 h-5" />,
      stats: "No Surprises",
      delay: 300,
    },
    {
      id: "5",
      title: "5,000+ Happy Customers",
      description:
        "Join thousands of Dubai residents and businesses who trust us for their cooling solutions.",
      icon: <Users className="w-5 h-5" />,
      stats: "98% Satisfaction",
      delay: 400,
    },
    {
      id: "6",
      title: "Genuine Parts Guarantee",
      description:
        "We use only OEM/OE parts with proper warranties. No compromises on quality or safety.",
      icon: <ThumbsUp className="w-5 h-5" />,
      stats: "Quality Assured",
      delay: 500,
    },
  ];

  const stats = [
    { value: "5,000+", label: "Happy Customers", icon: Users },
    { value: "15,000+", label: "Services Completed", icon: CheckCircle },
    { value: "24/7", label: "Emergency Support", icon: Clock },
    { value: "4.9/5", label: "Customer Rating", icon: Star },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-400/15 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-400/15 rounded-full blur-2xl animate-pulse-medium"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-300/8 rounded-full blur-2xl"></div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Refined Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div
            className={`inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-medium mb-4 sm:mb-5 border border-blue-100 ${poppins.className}`}
          >
            <Shield size={14} className="mr-1.5" />
            Trust & Excellence
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-5 leading-tight ${gantari.className}`}
          >
            Why We&apos;re Dubai&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Preferred Choice
            </span>
          </h2>
          <p
            className={`text-sm sm:text-base text-slate-600 leading-relaxed px-2 sm:px-0 max-w-2xl mx-auto ${poppins.className}`}
          >
            Trusted by residents and businesses across Dubai for reliable,
            professional AC services you can count on,{" "}
            <span className="font-medium text-blue-600">day or night</span>.
          </p>
        </div>

        {/* Refined Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:border-blue-200 shadow-sm hover:shadow-md cursor-pointer"
            >
              {/* Icon with Refined Design */}
              <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl mb-4 group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-105">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className={`text-lg font-semibold text-slate-900 pr-3 leading-tight ${gantari.className}`}
                  >
                    {feature.title}
                  </h3>
                  {feature.stats && (
                    <span className="inline-flex items-center bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0">
                      {feature.stats}
                    </span>
                  )}
                </div>

                <p
                  className={`text-slate-600 leading-relaxed text-sm ${poppins.className}`}
                >
                  {feature.description}
                </p>
              </div>

              {/* Subtle Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/3 via-transparent to-cyan-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-200 shadow-sm mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-4 sm:p-5 rounded-xl bg-gradient-to-br from-white to-slate-50/50 hover:from-blue-50/30 hover:to-cyan-50/30 transition-all duration-300 border border-slate-100 hover:border-blue-200/50"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg sm:rounded-xl mb-3 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div
                    className={`text-xl sm:text-2xl font-bold text-slate-900 mb-1 leading-none ${gantari.className}`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs font-medium text-slate-500 uppercase tracking-wide ${poppins.className}`}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Refined CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50/50 rounded-2xl p-6 sm:p-8 border border-blue-100/50 backdrop-blur-sm mb-6">
            <h3
              className={`text-xl sm:text-2xl font-bold text-slate-900 mb-3 ${gantari.className}`}
            >
              Ready for Exceptional Service?
            </h3>
            <p
              className={`text-sm sm:text-base text-slate-600 mb-6 max-w-xl mx-auto ${poppins.className}`}
            >
              Experience the difference with Dubai&apos;s most trusted AC
              service provider
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button className="group relative bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <PhoneCall size={18} />
                <span className="text-sm sm:text-base">
                  Call Now: +971 50 XXX XXXX
                </span>
              </button>

              <button className="group relative border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center">
                <MapPin size={18} />
                <span className="text-sm sm:text-base">Service Areas</span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 text-slate-500 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-green-500" />
              <span className={poppins.className}>Free Consultation</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-green-500" />
              <span className={poppins.className}>24/7 Emergency Service</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-green-500" />
              <span className={poppins.className}>Serving All Dubai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
