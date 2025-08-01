import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// This component is used on the Home page to display a summary of each program.
export default function ProgramCard({ program }) {
  // Fallback for image in case the provided one fails
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = `https://placehold.co/600x400/e2e8f0/475569?text=Image+Not+Found`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative group" // Group for hover effects on child elements
    >
      <Link to={`/program/${program.id}`} className="block h-full">
        <div className="block h-full rounded-2xl overflow-hidden bg-white shadow-lg border border-slate-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          {/* Program Image */}
          <div className="relative overflow-hidden aspect-video">
            <img
              src={program.image}
              alt={program.title}
              onError={handleImageError}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col h-full">
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
              {program.title}
            </h3>
            <p className="text-slate-600 text-sm mb-4 flex-grow">
              {program.shortDescription}
            </p>

            {/* Feature Tags */}
            {program.features?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {program.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-yellow-400/20 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* Footer of the card */}
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-200">
              <span className="text-xl font-bold text-yellow-500">
                ₹{program.price}
              </span>
              <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-yellow-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
