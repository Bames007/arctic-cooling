// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowUp,
  Shield,
  Award,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Wrench,
  Snowflake,
  Users,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border-t border-blue-500/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#60a5fa 1px, transparent 1px),
                             linear-gradient(90deg, #60a5fa 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container mx-auto px-4 py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Arctic<span className="text-blue-400"> Cooling</span>
                </h3>
                <p className="text-blue-100/80 leading-relaxed max-w-md">
                  Dubai's most trusted air conditioning service provider.
                  Professional AC installation, repair, and maintenance services
                  for residential and commercial properties across Dubai.
                </p>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                {[
                  {
                    icon: Award,
                    text: "DEWA Certified",
                    color: "text-blue-400",
                  },
                  {
                    icon: Shield,
                    text: "Licensed & Insured",
                    color: "text-green-400",
                  },
                  {
                    icon: Clock,
                    text: "24/7 Emergency",
                    color: "text-amber-400",
                  },
                  {
                    icon: Snowflake,
                    text: "AC Specialists",
                    color: "text-cyan-400",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 border border-blue-500/20 backdrop-blur-sm"
                  >
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-blue-100 text-sm font-medium">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {[
                  "AC Installation",
                  "AC Repair",
                  "Maintenance",
                  "Deep Cleaning",
                  "Emergency Service",
                  "Corporate Contracts",
                ].map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href="#"
                      className="text-blue-100/80 hover:text-blue-300 transition-all duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">
                Contact Us
              </h4>
              <div className="space-y-4">
                {/* Phone */}
                <motion.a
                  href="tel:+97145548100"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 text-blue-100/80 hover:text-white transition-all duration-200 group p-3 rounded-lg hover:bg-white/5"
                >
                  <div className="bg-blue-500/20 rounded-lg p-2 group-hover:bg-blue-500/30 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      +971 4 554 8100
                    </div>
                    <div className="text-sm text-blue-200/70">
                      Call us anytime
                    </div>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/97145548100"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 text-blue-100/80 hover:text-white transition-all duration-200 group p-3 rounded-lg hover:bg-white/5"
                >
                  <div className="bg-green-500/20 rounded-lg p-2 group-hover:bg-green-500/30 transition-colors duration-200">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">WhatsApp</div>
                    <div className="text-sm text-blue-200/70">
                      Instant response
                    </div>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:info@arcticcooling.ae"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 text-blue-100/80 hover:text-white transition-all duration-200 group p-3 rounded-lg hover:bg-white/5"
                >
                  <div className="bg-cyan-500/20 rounded-lg p-2 group-hover:bg-cyan-500/30 transition-colors duration-200">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      info@arcticcooling.ae
                    </div>
                    <div className="text-sm text-blue-200/70">Email us</div>
                  </div>
                </motion.a>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3 text-blue-100/80 p-3 rounded-lg"
                >
                  <div className="bg-slate-500/20 rounded-lg p-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Dubai, UAE</div>
                    <div className="text-sm text-blue-200/70">
                      Service All Areas
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="border-t border-blue-500/20 pt-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Users, number: "5,000+", label: "Happy Customers" },
                  {
                    icon: Snowflake,
                    number: "24/7",
                    label: "Emergency Service",
                  },
                  { icon: Award, number: "15+", label: "Years Experience" },
                  { icon: Star, number: "4.9/5", label: "Service Rating" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="bg-blue-500/20 rounded-lg p-2">
                        <stat.icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-blue-200/70 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-col items-center lg:items-end gap-4">
                <span className="text-blue-200/80 text-sm font-medium">
                  Follow us for updates
                </span>
                <div className="flex gap-3">
                  {[
                    {
                      icon: Facebook,
                      href: "#",
                      color: "hover:bg-blue-600 hover:border-blue-500",
                      iconColor: "text-blue-400",
                    },
                    {
                      icon: Twitter,
                      href: "#",
                      color: "hover:bg-sky-600 hover:border-sky-500",
                      iconColor: "text-sky-400",
                    },
                    {
                      icon: Linkedin,
                      href: "#",
                      color: "hover:bg-blue-700 hover:border-blue-600",
                      iconColor: "text-blue-400",
                    },
                    {
                      icon: Instagram,
                      href: "#",
                      color: "hover:bg-pink-600 hover:border-pink-500",
                      iconColor: "text-pink-400",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 transition-all duration-200 ${social.color} ${social.iconColor}`}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="border-t border-blue-500/20 py-6 bg-blue-950/50 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="text-blue-200/70 text-sm">
                © {currentYear} Arctic Cooling. All rights reserved.
              </div>

              <div className="flex items-center gap-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (item, index) => (
                    <motion.a
                      key={item}
                      href="#"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="text-blue-200/70 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
        whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-lg shadow-2xl hover:bg-blue-700 transition-colors duration-200 z-50 border border-blue-400/30 backdrop-blur-sm"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
