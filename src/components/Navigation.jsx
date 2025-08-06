import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Users, Send, ArrowUpRight } from "lucide-react";

const logoUrl = "/assets/TSlogo.png";

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Users },
    { path: "/contact", label: "Contact", icon: Send },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 py-3 
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md border-b border-slate-200/80"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.img
              src={logoUrl}
              alt="TeenSkool Logo"
              whileHover={{ scale: 1.05 }}
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/150x50/000000/FFFFFF?text=TeenSkool";
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-300
                    ${
                      isActive(item.path)
                        ? "bg-yellow-400/20 text-yellow-700 font-semibold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.label}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile CTA (right of logo) */}
          <div className="md:hidden">
            <Link to="/submit">
              <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold text-black rounded-full shadow transition">
                Apply
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Floating Bottom Navbar (Mobile Only) */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-lg border border-slate-200 rounded-full px-6 py-3 flex justify-between w-[90%] max-w-sm md:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link key={`bottom-${item.path}`} to={item.path}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isActive
                    ? "bg-yellow-400/20 text-yellow-700"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                <Icon className="h-6 w-6" />
              </motion.button>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navigation;
