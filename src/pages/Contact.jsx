import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Send, Mail, User, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';

// Consistent background pattern for the light theme
const GridPattern = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
);

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast({
        title: 'Missing Fields',
        description: 'Please fill in all fields to send a message.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    // Replace with your actual EmailJS service, template, and user IDs
    const serviceID = 'service_2jjxucr';
    const templateID = 'template_m2r5r2u';
    const userID = '7xoeSvZbQQn0PvV4W';

    emailjs.send(serviceID, templateID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, userID)
      .then(() => {
        setLoading(false);
        toast({
          title: 'Message Sent Successfully!',
          description: 'Thank you for reaching out. We’ll get back to you shortly.',
        });
        setForm({ name: '', email: '', message: '' });
      }, (error) => {
        setLoading(false);
        toast({
          title: 'Error Sending Message',
          description: 'Something went wrong. Please try again later.',
          variant: 'destructive',
        });
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative">
      <GridPattern />

      <div className="relative z-10 max-w-3xl mx-auto pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-yellow-400/20 p-4 rounded-full mb-4">
             <Mail className="h-12 w-12 text-yellow-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Contact Us</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            We’d love to hear from you — whether it's questions, ideas, or collaboration opportunities!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <User className="h-6 w-6 text-yellow-500" />
              Send a Message
            </h2>
            <p className="text-slate-500 mb-8">We’ll reply within 1-2 business days.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Input: Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g., Ada Lovelace"
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  required
                />
              </div>

              {/* Form Input: Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g., ada.lovelace@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  required
                />
              </div>

              {/* Form Input: Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-200 text-slate-900 placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  required
                />
              </div>
              
              <motion.div whileTap={{ scale: 0.98 }}>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold py-3 px-6 rounded-lg shadow-lg shadow-yellow-400/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
