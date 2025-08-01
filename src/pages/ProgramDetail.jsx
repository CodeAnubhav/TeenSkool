import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import {
  Wallet,
  CalendarDays,
  Clock,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';

// ==================================================================
// FIX: This now correctly imports the single source of truth for program data.
// The old, hardcoded dummy data has been removed.
// ==================================================================
import programs from '@/data/programs';

// Consistent background pattern for the light theme
const GridPattern = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
);

const ProgramDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // This now correctly uses the imported programs data to find the program.
  const program = programs.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleEnroll = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    
    script.onerror = () => {
        toast({
            title: "Payment Error",
            description: "Could not load the payment gateway. Please check your connection and try again.",
            variant: "destructive",
        });
    };

    script.onload = () => {
      const options = {
        key: 'YOUR_RAZORPAY_KEY_HERE', // IMPORTANT: Replace with your actual Razorpay key
        amount: program.price * 100, // Amount in paise
        currency: 'INR',
        name: 'Teenskool',
        description: `Enrollment for ${program.title}`,
        image: '/assets/TSlogo.png', // Optional: Path to your logo in the public folder
        handler: function (response) {
          toast({
              title: "Payment Successful!",
              description: `Thank you for enrolling. Payment ID: ${response.razorpay_payment_id}`,
              action: <div className="p-2 bg-green-500 text-white rounded-full"><CheckCircle /></div>
          });
        },
        prefill: {
            name: "Student Name", // Optional
            email: "student@example.com", // Optional
            contact: "9999999999" // Optional
        },
        theme: {
          color: '#f59e0b' // Updated to our yellow accent color
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
    document.body.appendChild(script);
  };

  // This handles the case where the ID from the URL doesn't match any program.
  if (!program) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center p-6">
        <GridPattern />
        <AlertTriangle className="h-16 w-16 text-yellow-500 mb-4" />
        <h1 className="text-3xl font-bold text-slate-800">Program Not Found</h1>
        <p className="text-slate-600 mt-2">We couldn't find the program you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative">
      <GridPattern />
      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Left Content Column */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{program.title}</h1>
              <p className="text-lg text-slate-600">{program.shortDescription}</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img src={program.image} alt={program.title} className="w-full object-cover aspect-video" />
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">About This Program</h2>
                    <p className="text-slate-600 text-base leading-relaxed">{program.description}</p>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">What’s Included</h2>
                    <ul className="space-y-3">
                        {program.includes?.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-600">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-1">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7, delay: 0.4 }} 
                className="sticky top-28 bg-white p-8 rounded-2xl shadow-2xl border border-slate-200 space-y-6"
            >
              <div className="grid grid-cols-2 gap-6 text-sm">
                  <div className="space-y-1">
                      <CalendarDays className="h-5 w-5 text-yellow-600" />
                      <p className="font-semibold text-slate-800">Next Batch</p>
                      <p className="text-slate-500">{program.nextBatch}</p>
                  </div>
                  <div className="space-y-1">
                      <Clock className="h-5 w-5 text-yellow-600" />
                      <p className="font-semibold text-slate-800">Duration</p>
                      <p className="text-slate-500">{program.duration}</p>
                  </div>
                  <div className="space-y-1 col-span-2">
                      <ShieldCheck className="h-5 w-5 text-yellow-600" />
                      <p className="font-semibold text-slate-800">Curriculum</p>
                      <p className="text-slate-500">{program.curriculum}</p>
                  </div>
              </div>
              
              <div className="border-t border-slate-200 pt-6">
                <p className="text-slate-500 mb-1">Program Fee</p>
                <p className="text-4xl font-bold text-slate-900 mb-4">
                  ₹{program.price}
                </p>
                <button
                  onClick={handleEnroll}
                  className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-lg shadow-lg shadow-yellow-400/20 transition-all duration-300 transform hover:scale-105"
                >
                  <Wallet className="w-5 h-5" />
                  Enroll Now
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
