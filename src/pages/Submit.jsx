import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Send, Lightbulb, Loader2 } from 'lucide-react';

// Consistent background pattern (Unchanged)
const GridPattern = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
);

// --- Reusable InputField Component ---
// This encapsulates the input logic, making the main form cleaner and more declarative.
const InputField = ({ id, label, className = '', ...props }) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
      {label}
    </label>
    <input
      id={id}
      className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
      {...props}
    />
  </div>
);

// --- Form Fields Configuration ---
// Adding a `className` property allows us to control the grid layout from our data.
const formFields = [
    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'e.g., Ananya Verma', className: 'md:col-span-2' },
    { label: 'Age', name: 'age', type: 'number', placeholder: 'e.g., 14' },
    { label: 'Class/Grade', name: 'grade', type: 'text', placeholder: 'e.g., 9th' },
    { label: 'School Name', name: 'school', type: 'text', placeholder: 'e.g., DPS Gurgaon', className: 'md:col-span-2' },
    { label: 'City', name: 'city', type: 'text', placeholder: 'e.g., Delhi' },
    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'e.g., 9876543210' },
    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'e.g., ananya@example.com', className: 'md:col-span-2' },
    { label: 'Interested Program', name: 'program', type: 'text', placeholder: 'e.g., AI Bootcamp', className: 'md:col-span-2' },
];

const ApplicationForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '', age: '', school: '', grade: '', city: '', phone: '', email: '', program: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = formFields.map(f => f.name);
    const missingFields = requiredFields.filter((field) => !form[field]);

    if (missingFields.length > 0) {
      toast({
        title: 'Missing Information',
        description: `Please fill out the following fields: ${missingFields.join(', ')}`,
        variant: 'destructive',
      });
      return;
    }
    
    setLoading(true);

    // TODO: Replace this with a real API call to the NestJS backend
    try {
      console.log('Submitting form data:', form);
      // Simulating a network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: 'Submitted Successfully!',
        description: 'Your interest has been recorded. We will get in touch with you soon.',
      });
      
      setForm({ name: '', age: '', school: '', grade: '', city: '', phone: '', email: '', program: '' });

    } catch (error) {
       toast({
        title: 'Error',
        description: 'There was a problem submitting your form. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative">
      <GridPattern />

      <div className="relative z-10 max-w-4xl mx-auto pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-yellow-400/20 p-4 rounded-full mb-4">
            <Lightbulb className="h-12 w-12 text-yellow-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Apply for a Program</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            Fill out this short form and we’ll get in touch with the next steps!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              {/* --- Responsive Two-Column Grid --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {formFields.map(({ label, name, type, placeholder, className }) => (
                  <InputField
                    key={name}
                    id={name}
                    name={name}
                    label={label}
                    type={type}
                    placeholder={placeholder}
                    value={form[name]}
                    onChange={handleChange}
                    className={className}
                    required
                  />
                ))}

                <motion.div className="md:col-span-2 mt-4" whileTap={{ scale: 0.98 }}>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold py-3 px-6 rounded-lg shadow-lg shadow-yellow-400/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplicationForm;