import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Send, Mail, User } from 'lucide-react';
import emailjs from 'emailjs-com';

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
        description: 'Please fill in all fields.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_2jjxucr',     // e.g. 'service_abcd123'
        'template_m2r5r2u',    // e.g. 'template_xyz789'
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        '7xoeSvZbQQn0PvV4W'      // e.g. 'qz6A7BcD123abc'
      )
      .then(
        () => {
          setLoading(false);
          toast({
            title: 'Message Sent ✅',
            description: 'Thank you! We’ll get back to you shortly.',
          });
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          toast({
            title: 'Error Sending',
            description: 'Something went wrong. Please try again.',
            variant: 'destructive',
          });
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Mail className="h-16 w-16 text-yellow-400 floating-animation mx-auto mb-4" />
          <h1 className="text-4xl font-bold gradient-text">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto mt-2">
            We’d love to hear from you — whether it's questions, ideas, or collaboration opportunities!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="glass-effect border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center gap-2">
                <User className="h-6 w-6" />
                Send a Message
              </CardTitle>
              <CardDescription className="text-white/70">
                We’ll reply within 1-2 business days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/60"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/60"
                  required
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/60 resize-none"
                  required
                />
                <motion.div whileTap={{ scale: 0.97 }}>
                  <Button
                    type="submit"
                    className="w-full pulse-glow bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 text-lg"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
