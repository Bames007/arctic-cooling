// components/Testimonials.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  Clock,
  ShieldCheck,
  MessageCircle,
  ThumbsUp,
} from "lucide-react";

const poppins = {
  className: "font-poppins",
};

const gantari = {
  className: "font-gantari",
};

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  service: string;
  date: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ahmed Al Rashid",
      location: "Dubai Marina",
      rating: 5,
      text: "The team at CoolBreeze Emirates completely transformed our villa's cooling system. Their 90-minute emergency response saved us during the summer peak. Professional, efficient, and worth every dirham!",
      image:
        "https://images.unsplash.com/photo-1739573709776-5bbe22f1b708?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFpciUyMGNvbmRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      service: "AC Installation",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "Business Bay",
      rating: 5,
      text: "Our corporate AC contract has been a game-changer. The proactive maintenance and 24/7 support ensure our office stays productive. Transparent pricing and exceptional service.",
      image:
        "https://images.unsplash.com/photo-1616497633466-6c3f7a0cfa93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=692",
      service: "Corporate Contract",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Mohammed Hassan",
      location: "Jumeirah Beach Residence",
      rating: 5,
      text: "After three other companies failed, CoolBreeze diagnosed and fixed our central AC issue in under two hours. Their technicians are true experts with genuine certification.",
      image:
        "https://images.unsplash.com/photo-1695457264650-c0bd2202fb5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      service: "AC Repair",
      date: "3 days ago",
    },
    {
      id: 4,
      name: "Elena Petrov",
      location: "Downtown Dubai",
      rating: 5,
      text: "The deep cleaning service made our AC units perform like new. Immediate improvement in air quality and 30% reduction in energy bills. Highly recommend their premium service!",
      image:
        "https://images.unsplash.com/photo-1687262304525-02287047d4d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=822",
      service: "Deep Cleaning",
      date: "2 months ago",
    },
  ];

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial, isAutoPlaying]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 50) {
      prevTestimonial();
    } else if (info.offset.x < -50) {
      nextTestimonial();
    }
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <Star
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-400/10 rounded-full blur-2xl animate-pulse-medium"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-300/5 rounded-full blur-2xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div
            className={`inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-medium mb-4 sm:mb-5 border border-blue-100 ${poppins.className}`}
          >
            <Star className="w-3 h-3 mr-1.5 fill-yellow-400 text-yellow-400" />
            Rated 4.9/5 by 5000+ Customers
          </div>

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-5 leading-tight ${gantari.className}`}
          >
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Dubai&apos;s Elite
            </span>
          </h2>
          <p
            className={`text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Join thousands of satisfied residents and businesses who trust
            CoolBreeze Emirates for premium cooling solutions
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-auto min-h-[400px] sm:min-h-[350px]">
            <AnimatePresence
              mode="popLayout"
              custom={direction}
              initial={false}
            >
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 h-full">
                  <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                    {/* Customer Info */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 sm:gap-6 lg:gap-4 flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden outline-2 outline-blue-200 outline-offset-2 shadow-md">
                          <Image
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            fill
                            className="object-cover rounded-xl"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-1 shadow-md">
                          <Quote className="w-3 h-3 text-white" />
                        </div>
                      </div>

                      <div className="text-center sm:text-left lg:text-center">
                        <h4
                          className={`font-semibold text-slate-900 text-sm sm:text-base ${gantari.className}`}
                        >
                          {testimonials[currentIndex].name}
                        </h4>
                        <div className="flex items-center justify-center sm:justify-start lg:justify-center gap-1 text-slate-500 mt-1">
                          <MapPin className="w-3 h-3" />
                          <span className={`text-xs ${poppins.className}`}>
                            {testimonials[currentIndex].location}
                          </span>
                        </div>
                        <div className="mt-2">
                          <StarRating
                            rating={testimonials[currentIndex].rating}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1">
                      {/* Service Badge */}
                      <div className="inline-flex bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-4 border border-blue-100">
                        {testimonials[currentIndex].service}
                      </div>

                      <blockquote
                        className={`text-slate-700 text-sm sm:text-base leading-relaxed mb-4 ${poppins.className}`}
                      >
                        &ldquo;{testimonials[currentIndex].text}&rdquo;
                      </blockquote>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                        <div className="flex items-center gap-1 text-slate-500">
                          <Calendar className="w-3 h-3" />
                          <span className={`text-xs ${poppins.className}`}>
                            {testimonials[currentIndex].date}
                          </span>
                        </div>

                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < testimonials[currentIndex].rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 sm:mt-12">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-slate-300 rounded-xl p-2 sm:p-3 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-slate-300 rounded-xl p-2 sm:p-3 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Trust Badges with Lucide Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20 max-w-4xl mx-auto"
        >
          {[
            {
              icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
              label: "5000+",
              sub: "Happy Customers",
            },
            {
              icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
              label: "90-Min",
              sub: "Response Time",
            },
            {
              icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
              label: "90-Day",
              sub: "Service Warranty",
            },
            {
              icon: (
                <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-yellow-400 text-yellow-400" />
              ),
              label: "4.9/5",
              sub: "Customer Rating",
            },
          ].map((badge, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 hover:border-blue-200 transition-all duration-300 group-hover:scale-105 shadow-sm hover:shadow-md">
                <div className="flex justify-center mb-2 text-blue-600 group-hover:text-cyan-600 transition-colors duration-300">
                  {badge.icon}
                </div>
                <div
                  className={`text-lg sm:text-xl font-bold text-slate-900 ${gantari.className}`}
                >
                  {badge.label}
                </div>
                <div
                  className={`text-xs sm:text-sm text-slate-600 mt-1 ${poppins.className}`}
                >
                  {badge.sub}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50/50 rounded-2xl p-6 sm:p-8 border border-blue-100/50 backdrop-blur-sm">
            <h3
              className={`text-xl sm:text-2xl font-bold text-slate-900 mb-3 ${gantari.className}`}
            >
              Ready to Experience Premium Service?
            </h3>
            <p
              className={`text-sm sm:text-base text-slate-600 mb-6 max-w-xl mx-auto ${poppins.className}`}
            >
              Join thousands of satisfied customers across Dubai
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 justify-center">
                <ThumbsUp className="w-4 h-4" />
                <span className="text-sm sm:text-base">Read More Reviews</span>
              </button>
              <button className="border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm sm:text-base">
                  Share Your Experience
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
