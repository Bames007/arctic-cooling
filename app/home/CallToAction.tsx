// components/CallToAction.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  CheckCircle,
  Clock,
  Shield,
  Award,
  Star,
  ArrowRight,
  MapPin,
  Mail,
  User,
  Send,
  Building,
} from "lucide-react";

const poppins = {
  className: "font-poppins",
};

const gantari = {
  className: "font-gantari",
};

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const ContactInfo = ({
    icon: Icon,
    title,
    content,
    delay,
  }: {
    icon: React.ElementType;
    title: string;
    content: string;
    delay: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      <div className="flex-shrink-0">
        <div className="bg-blue-50 rounded-lg p-3 group-hover:bg-blue-100 transition-colors duration-300">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3
          className={`font-semibold text-slate-900 text-sm mb-1 ${gantari.className}`}
        >
          {title}
        </h3>
        <p className={`text-slate-600 text-sm ${poppins.className}`}>
          {content}
        </p>
      </div>
    </motion.div>
  );

  const ServiceFeature = ({
    icon: Icon,
    text,
    delay,
  }: {
    icon: React.ElementType;
    text: string;
    delay: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex items-center gap-3"
    >
      <div className="bg-blue-100 rounded-lg p-2">
        <Icon className="w-4 h-4 text-blue-600" />
      </div>
      <span className={`text-slate-700 text-sm ${poppins.className}`}>
        {text}
      </span>
    </motion.div>
  );

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-400/10 rounded-full blur-2xl animate-pulse-medium"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div
            className={`inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-medium mb-4 sm:mb-5 border border-blue-100 ${poppins.className}`}
          >
            <Award className="w-3 h-3 mr-1.5" />
            Dubai's Most Trusted AC Service
          </div>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-5 leading-tight ${gantari.className}`}
          >
            Get Your Free
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              {" "}
              Consultation{" "}
            </span>
            Today
          </h1>

          <p
            className={`text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Professional air conditioning services trusted by corporations,
            hotels, and residences across Dubai. DEWA-certified technicians with
            15+ years of expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8"
          >
            <div className="mb-6 sm:mb-8">
              <h2
                className={`text-xl sm:text-2xl font-bold text-slate-900 mb-2 ${gantari.className}`}
              >
                Send us a Message
              </h2>
              <p
                className={`text-slate-600 text-sm sm:text-base ${poppins.className}`}
              >
                Fill out the form below and our expert will contact you within
                30 minutes
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                >
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="installation">AC Installation</option>
                  <option value="repair">AC Repair</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="cleaning">Deep Cleaning</option>
                  <option value="corporate">Corporate Contract</option>
                </select>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium text-slate-700 mb-2 ${poppins.className}`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm resize-none"
                  placeholder="Tell us about your AC needs..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-semibold py-3 sm:py-4 rounded-xl transition-all duration-300 transform shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </motion.button>
            </form>

            {/* Service Features */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200">
              <h3
                className={`font-semibold text-slate-900 text-sm mb-4 ${gantari.className}`}
              >
                Why Choose Us:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <ServiceFeature
                  icon={Clock}
                  text="90-Minute Response"
                  delay={0.1}
                />
                <ServiceFeature
                  icon={Shield}
                  text="Certified Technicians"
                  delay={0.2}
                />
                <ServiceFeature
                  icon={CheckCircle}
                  text="90-Day Warranty"
                  delay={0.3}
                />
                <ServiceFeature icon={Star} text="4.9/5 Rating" delay={0.4} />
              </div>
            </div>
          </motion.div>

          {/* Map & Contact Info Section */}
          <div className="space-y-6 sm:space-y-8">
            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-64 sm:h-80 bg-gradient-to-br from-blue-50 to-cyan-50 relative">
                {/* Map Placeholder - Replace with actual map component */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3
                      className={`font-semibold text-slate-900 text-lg mb-2 ${gantari.className}`}
                    >
                      Dubai, UAE
                    </h3>
                    <p
                      className={`text-slate-600 text-sm ${poppins.className}`}
                    >
                      Service Area Map
                    </p>
                  </div>
                </div>

                {/* Map Overlay Info */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span
                      className={`text-xs font-medium text-slate-700 ${poppins.className}`}
                    >
                      Live Service Area
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3
                  className={`font-semibold text-slate-900 text-lg mb-4 ${gantari.className}`}
                >
                  Service Coverage
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Dubai Marina",
                    "Business Bay",
                    "JBR",
                    "Downtown",
                    "Jumeirah",
                    "Al Barsha",
                    "Deira",
                    "Bur Dubai",
                  ].map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-slate-600"
                    >
                      <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                      <span className={poppins.className}>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <ContactInfo
                icon={Phone}
                title="Call Us Now"
                content="+971 4 554 8100"
                delay={0.4}
              />
              <ContactInfo
                icon={MessageCircle}
                title="WhatsApp"
                content="+971 50 XXX XXXX"
                delay={0.5}
              />
              <ContactInfo
                icon={Mail}
                title="Email Us"
                content="info@coolbreeze.ae"
                delay={0.6}
              />
              <ContactInfo
                icon={Building}
                title="Service Areas"
                content="All Dubai Areas Covered"
                delay={0.7}
              />
            </motion.div>

            {/* Emergency CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white text-center"
            >
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <h3 className={`font-bold text-lg mb-2 ${gantari.className}`}>
                24/7 Emergency Service
              </h3>
              <p className={`text-blue-100 text-sm mb-4 ${poppins.className}`}>
                AC breakdown? We're here to help, day or night
              </p>
              <motion.a
                href="tel:+97145548100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Emergency Line</span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: "5,000+", label: "Happy Customers", icon: User },
            { number: "24/7", label: "Emergency Support", icon: Clock },
            { number: "15+", label: "Years Experience", icon: Award },
            { number: "4.9/5", label: "Service Rating", icon: Star },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 hover:border-blue-200 transition-all duration-300 group-hover:scale-105 shadow-sm hover:shadow-md">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div
                    className={`text-lg font-bold text-slate-900 ${gantari.className}`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`text-xs text-slate-600 ${poppins.className}`}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center mt-8 sm:mt-12 pt-8 border-t border-slate-200"
        >
          <p
            className={`text-slate-500 text-xs sm:text-sm ${poppins.className}`}
          >
            Serving Dubai since 2008 • DEWA Certified • Corporate accounts
            available • 24/7 emergency support
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
