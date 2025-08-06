import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProgramCard({ program }) {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://placehold.co/600x400/e2e8f0/475569?text=Image+Not+Found';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative transition-all duration-300"
    >
      <Link to={`/program/${program.id.trim()}`} className="block h-full">
        <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          
          {/* Image */}
          <div className="relative h-52 md:h-56 w-full overflow-hidden">
            <img
              src={program.image}
              onError={handleImageError}
              alt={program.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
              {program.title}
            </h3>

            <p className="text-sm text-slate-600 mb-4 flex-grow">
              {program.shortDescription}
            </p>

            {/* Features */}
            {program.features?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {program.features.map((feature, i) => (
                  <span
                    key={i}
                    className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
              <span className="text-xl font-bold text-yellow-500">
                ₹{program.price}
              </span>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-yellow-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
