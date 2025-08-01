import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Users, Send, Menu, X } from "lucide-react";

// The logo path should be relative to the public folder.
// In most React setups (like Vite or Create React App),
// anything in the `public` folder can be accessed from the root.
const logoUrl = "/assets/TSlogo.png";

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user scrolls down more than 10px
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Users },
    { path: "/contact", label: "Contact", icon: Send },
  ];

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Main Navigation Bar */}
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
              className="h-12 md:h-12 w-auto object-contain"
              // Add an error handler in case the logo fails to load
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x50/000000/FFFFFF?text=TeenSkool'; }}
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-300
                      ${
                        isActive
                          ? "bg-yellow-400/20 text-yellow-700 font-semibold"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isMobileMenuOpen ? "0%" : "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 mt-20 bg-white shadow-lg rounded-b-2xl p-4"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={`mobile-${item.path}`} to={item.path}>
                  <div
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base
                      ${
                        isActive
                          ? "bg-yellow-400/20 text-yellow-700 font-semibold"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navigation;
