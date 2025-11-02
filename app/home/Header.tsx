// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Snowflake,
  ShoppingCart,
  Menu,
  X,
  Phone,
  MessageCircle,
  Home,
  Wrench,
  Package,
  User,
  Mail,
} from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home", icon: Home },
    { name: "Services", id: "services", icon: Wrench },
    { name: "Products", id: "products", icon: Package },
    { name: "About", id: "about", icon: User },
    { name: "Contact", id: "contact", icon: Mail },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg border-b border-blue-200"
            : "bg-white border-b border-blue-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 group cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="p-1.5 rounded-lg bg-blue-100 text-blue-600"
              >
                <Snowflake className="w-5 h-5" />
              </motion.div>

              <div className="hidden sm:block text-lg font-bold text-blue-900">
                Arctic Peak<span className="text-blue-600"> Cooling</span>
              </div>
            </motion.div>

            {/* Desktop Navigation - Hidden on Mobile */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium text-blue-800 hover:text-blue-600 transition-all duration-200 relative"
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="tel:+97145548100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-blue-700 hover:text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all duration-200 border border-blue-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </motion.a>

              <motion.a
                href="https://wa.me/97145548100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-green-700 hover:text-green-600 bg-green-50 hover:bg-green-100 transition-all duration-200 border border-green-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/ecommerce")}
                className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Buy Now</span>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                    {cartItemsCount}
                  </span>
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 z-50 bg-black/60"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-blue-100 bg-blue-50">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="p-2 rounded-xl bg-blue-100 text-blue-600"
                    >
                      <Snowflake className="w-6 h-6" />
                    </motion.div>
                    <div className="font-bold text-blue-900">
                      Arctic Peak<span className="text-blue-600"> Cooling</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="p-4 space-y-1">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full flex items-center gap-4 p-4 rounded-xl text-blue-800 hover:bg-blue-50 font-medium transition-all duration-200"
                      >
                        <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-lg">{item.name}</span>
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Quick Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3 border-t border-blue-100 bg-white">
                  {/* Quick Contact Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <motion.a
                      href="tel:+97145548100"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </motion.a>

                    <motion.a
                      href="https://wa.me/97145548100"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </motion.a>
                  </div>

                  {/* Buy Now Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    onClick={() => {
                      router.push("/ecommerce");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-4 px-6 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg relative"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Buy Now</span>
                    {cartItemsCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center border-2 border-white font-bold">
                        {cartItemsCount}
                      </span>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;
