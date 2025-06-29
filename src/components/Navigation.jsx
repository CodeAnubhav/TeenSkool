import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Users, Home, Send } from 'lucide-react';

// 📌 If your logo is in /public/logo.png or /assets/logo.png
import logo from '/public/assets/logo.png'; // ← adjust path as per your folder

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Users },
    { path: '/contact', label: 'Contact', icon: Send },
  ];

  return (
    <nav className="glass-effect fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.img
            src={logo}
            alt="TeenSkool Logo"
            whileHover={{ scale: 1.05 }}
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* 🔹 Nav Items */}
        <div className="flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:block text-sm font-medium">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
