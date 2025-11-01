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
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px),
                             linear-gradient(90deg, #fff 1px, transparent 1px)`,
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
                  EBCom<span className="text-blue-400"> Technologies</span>
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Leading provider of premium technology solutions in Dubai. We
                  specialize in cutting-edge IT services, professional
                  consultations, and enterprise-grade technology
                  implementations.
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
                  { icon: Award, text: "Certified Experts" },
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: Clock, text: "24/7 Support" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/10"
                  >
                    <item.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  "Services",
                  "Solutions",
                  "Case Studies",
                  "About Us",
                  "Careers",
                ].map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">
                Get In Touch
              </h4>
              <div className="space-y-4">
                {/* Phone */}
                <motion.a
                  href="tel:+97145548100"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
                >
                  <div className="bg-blue-600/20 rounded-lg p-2 group-hover:bg-blue-600/30 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      +971 4 554 8100
                    </div>
                    <div className="text-sm">Call us anytime</div>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/97145548100"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors duration-200 group"
                >
                  <div className="bg-green-600/20 rounded-lg p-2 group-hover:bg-green-600/30 transition-colors duration-200">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">WhatsApp</div>
                    <div className="text-sm">Instant response</div>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:info@ebcom-tech.com"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
                >
                  <div className="bg-blue-600/20 rounded-lg p-2 group-hover:bg-blue-600/30 transition-colors duration-200">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      info@ebcom-tech.com
                    </div>
                    <div className="text-sm">Email us</div>
                  </div>
                </motion.a>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <div className="bg-gray-600/20 rounded-lg p-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Dubai, UAE</div>
                    <div className="text-sm">Business Bay</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Social Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm font-medium">
                  Follow us:
                </span>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
                    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                    {
                      icon: Instagram,
                      href: "#",
                      color: "hover:text-pink-500",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 border border-white/10 transition-all duration-200 ${social.color}`}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex gap-3 max-w-md w-full"
              >
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="border-t border-white/10 py-6"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © {currentYear} EBCom Technologies. All rights reserved.
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
                      className="text-gray-400 hover:text-white transition-colors duration-200"
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-lg shadow-2xl hover:bg-blue-700 transition-colors duration-200 z-50 border border-blue-400/20"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
