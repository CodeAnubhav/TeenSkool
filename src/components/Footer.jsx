import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-effect mt-20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              >
                <Lightbulb className="h-5 w-5 text-white" />
              </motion.div>
              <span className="text-lg font-bold gradient-text">TeenSkool</span>
            </div>
            <p className="text-white/80 text-sm">
              Empowering young minds to shape the future through innovative business ideas.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-white font-semibold">Quick Links</span>
            <div className="space-y-2">
              <p className="text-white/80 text-sm hover:text-white cursor-pointer transition-colors">Submit Your Idea</p>
              <p className="text-white/80 text-sm hover:text-white cursor-pointer transition-colors">Previous Winners</p>
              <p className="text-white/80 text-sm hover:text-white cursor-pointer transition-colors">Guidelines</p>
              <p className="text-white/80 text-sm hover:text-white cursor-pointer transition-colors">FAQ</p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-white font-semibold">Categories</span>
            <div className="space-y-2">
              <p className="text-white/80 text-sm">Technology</p>
              <p className="text-white/80 text-sm">Environment</p>
              <p className="text-white/80 text-sm">Social Impact</p>
              <p className="text-white/80 text-sm">Healthcare</p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-white font-semibold">Contact</span>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white/60" />
                <span className="text-white/80 text-sm">info@younginnovators.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white/60" />
                <span className="text-white/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-white/60" />
                <span className="text-white/80 text-sm">Innovation Hub, Tech City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Young Innovators Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;