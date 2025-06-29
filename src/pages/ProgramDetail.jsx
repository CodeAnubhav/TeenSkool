import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import programs from '@/data/programs';
import { Wallet, CalendarDays, Clock, Users, ShieldCheck, Lightbulb } from 'lucide-react';

const ProgramDetail = () => {
  const { id } = useParams();
  const program = programs.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnroll = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      const options = {
        key: 'YOUR_RAZORPAY_KEY',
        amount: program.price * 100,
        currency: 'INR',
        name: 'Teenskool',
        description: program.title,
        handler: function (response) {
          alert('Payment successful! ID: ' + response.razorpay_payment_id);
        },
        theme: { color: '#0745ff' }
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
    document.body.appendChild(script);
  };

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p className="text-lg">Program not found </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Left Content */}
        <div className="md:col-span-2 space-y-10">
          
          {/* Banner */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={program.image} alt={program.title} className="w-full object-cover max-h-[400px]" />
          </div>

          {/* Highlights */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-white space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Course Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-1">
                <CalendarDays className="h-5 w-5 text-yellow-300" />
                <p className="font-semibold">Next Batch</p>
                <p className="text-white/70">June 30, 2025</p>
              </div>
              <div className="space-y-1">
                <Clock className="h-5 w-5 text-yellow-300" />
                <p className="font-semibold">Duration</p>
                <p className="text-white/70">6 Days</p>
              </div>
              <div className="space-y-1">
                <ShieldCheck className="h-5 w-5 text-yellow-300" />
                <p className="font-semibold">Curriculum</p>
                <p className="text-white/70">CBSE, ICSE, State</p>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-white space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400">What’s Included</h2>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Live Interactive Classes</li>
              <li>Mentor Support & 1-on-1 doubt solving</li>
              <li>Personalized Progress Report</li>
              <li>Certificate of Completion</li>
              <li>Real-world Project Assignment</li>
            </ul>
          </div>

          {/* About the Program */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-white space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400"> About This Program</h2>
            <p className="text-white/80 text-base">{program.description}</p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-white">
          <h3 className="text-xl font-bold text-white">{program.title}</h3>
          <p className="text-white/70">{program.shortDescription || 'Join now to unlock your future potential with top mentors.'}</p>

          <div className="border-t border-white/20 pt-4">
            <p className="text-3xl font-bold text-yellow-300 mb-2">₹{program.price}</p>
            <button
              onClick={handleEnroll}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-3 rounded-md transition-all"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
