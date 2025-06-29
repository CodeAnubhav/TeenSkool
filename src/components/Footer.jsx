import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="glass-effect mt-20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              >
                <Lightbulb className="h-5 w-5 text-white" />
              </motion.div>
              <span className="text-lg font-bold gradient-text">Teenskool</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              At Teenskool, we empower students to explore entrepreneurship
              and AI through hands-on workshops led by real startup founders.
              No prior experience needed—just ideas and curiosity!
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2 list-disc list-inside text-white/80 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="hover:text-white transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>


          {/* Column 3 - Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Contact</h4>
            <div className="space-y-2 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white/60" />
                info@teenskool.in
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white/60" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white/60" />
                Gurugram, Haryana
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-6 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Teenskool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
