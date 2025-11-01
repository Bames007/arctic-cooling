// components/Services.tsx - Mobile Optimized Services Section
"use client";

import { useState } from "react";
import { Gantari, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const gantari = Gantari({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-gantari",
});

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  image: string;
  icon: React.ReactNode;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  message: string;
}

const Services = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    message: "",
  });

  const services: Service[] = [
    {
      id: 1,
      title: "Elite AC Installation",
      description:
        "Professional installation of premium split, window, and central AC systems with precision engineering.",
      features: [
        "Certified Technicians",
        "5-Year Warranty",
        "Clean Installation",
      ],
      price: "Starting from AED 499",
      duration: "2-4 hours",
      image:
        "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      icon: (
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Advanced Diagnostics & Repair",
      description:
        "Cutting-edge diagnostic tools and expert technicians for precise AC problem resolution.",
      features: ["24/7 Emergency", "Genuine Parts", "90-Day Warranty"],
      price: "Starting from AED 199",
      duration: "1-2 hours",
      image:
        "https://images.unsplash.com/photo-1698479603408-1a66a6d9e80f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFpciUyMGNvbmRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      icon: (
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Premium Maintenance Plans",
      description:
        "Extend your AC&apos;s lifespan and optimize performance with our comprehensive maintenance programs.",
      features: [
        "Performance Optimization",
        "Deep Cleaning",
        "Energy Efficiency",
      ],
      price: "Starting from AED 299",
      duration: "Annual Contracts",
      image:
        "https://images.unsplash.com/photo-1739573709776-5bbe22f1b708?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFpciUyMGNvbmRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      icon: (
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const handleServiceClick = (service: Service, index: number): void => {
    setActiveService(index);
    setSelectedService(service);
    setIsModalOpen(true);
    setFormData((prev) => ({
      ...prev,
      serviceType: service.title,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Handle form submission here
    console.log("Booking submitted:", formData);
    // You can add API call here
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      serviceType: "",
      message: "",
    });
  };

  return (
    <>
      <section
        id="services"
        className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
      >
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-medium"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Mobile Optimized */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-24">
            <div
              className={`inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 ${poppins.className}`}
            >
              <span>🌟 Elite Services</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight ${gantari.className}`}
            >
              Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Cooling Solutions
              </span>
            </h2>
            <p
              className={`text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed px-4 sm:px-0 ${poppins.className}`}
            >
              From luxury residential installations to corporate climate control
              systems, we deliver unmatched expertise and professional service
              standards.
            </p>
          </div>

          {/* Services Grid - Mobile First */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl border-2 transition-all duration-500 transform hover:scale-105 cursor-pointer active:scale-95 ${
                  activeService === index
                    ? "border-blue-500 shadow-2xl"
                    : "border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-xl"
                }`}
                onMouseEnter={() => setActiveService(index)}
                onClick={() => handleServiceClick(service, index)}
              >
                {/* Service Card */}
                <div className="relative p-4 sm:p-6 lg:p-8">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-2 sm:p-3 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 transition-all duration-300 ${
                      activeService === index
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg"
                        : "bg-blue-100 text-blue-600 group-hover:bg-blue-200 group-hover:scale-110"
                    }`}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3
                    className={`text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-blue-700 transition-colors leading-tight ${gantari.className}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base ${poppins.className}`}
                  >
                    {service.description}
                  </p>

                  {/* Price & Duration */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4 sm:mb-6">
                    <span
                      className={`text-base sm:text-lg font-bold text-blue-600 ${gantari.className}`}
                    >
                      {service.price}
                    </span>
                    <span
                      className={`text-xs sm:text-sm text-slate-500 ${poppins.className} bg-slate-100 px-2 py-1 rounded-full`}
                    >
                      {service.duration}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 sm:space-x-3 text-slate-700"
                      >
                        <div
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors flex-shrink-0 ${
                            activeService === index
                              ? "bg-blue-500"
                              : "bg-slate-400"
                          }`}
                        ></div>
                        <span
                          className={`text-xs sm:text-sm font-medium ${poppins.className}`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Action Button */}
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                  <button
                    className={`w-full py-3 px-4 sm:py-3 sm:px-6 rounded-xl font-semibold transition-all duration-300 active:scale-95 ${
                      activeService === index
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                        : "bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700"
                    } ${poppins.className} text-sm sm:text-base`}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA - Mobile Optimized */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6 items-center bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-w-4xl mx-auto w-full">
              <div className="text-center sm:text-left flex-1">
                <h3
                  className={`text-xl sm:text-2xl font-bold text-slate-900 mb-2 ${gantari.className}`}
                >
                  Ready for Premium Cooling Performance?
                </h3>
                <p
                  className={`text-slate-600 text-sm sm:text-base ${poppins.className}`}
                >
                  Schedule a complimentary consultation with our cooling
                  specialists.
                </p>
              </div>
              <button
                onClick={() => handleServiceClick(services[0], 0)}
                className={`bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap w-full sm:w-auto ${poppins.className} text-sm sm:text-base`}
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Booking Modal - Mobile Friendly */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3
                  className={`text-xl sm:text-2xl font-bold text-slate-900 ${gantari.className}`}
                >
                  Book {selectedService?.title}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Service Info */}
              {selectedService && (
                <div className="bg-blue-50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {selectedService.icon}
                    </div>
                    <div>
                      <h4
                        className={`font-semibold text-blue-900 text-sm sm:text-base ${gantari.className}`}
                      >
                        {selectedService.title}
                      </h4>
                      <p
                        className={`text-blue-700 text-xs sm:text-sm ${poppins.className}`}
                      >
                        {selectedService.price}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label
                      className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                  >
                    Service Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                  >
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base resize-none"
                    placeholder="Any specific requirements or issues..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className={`flex-1 px-4 sm:px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 active:scale-95 ${poppins.className} text-sm sm:text-base`}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
