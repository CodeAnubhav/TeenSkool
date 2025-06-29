import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, IndianRupee } from 'lucide-react';

export default function ProgramCard({ program }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="glass-effect rounded-2xl overflow-hidden border border-white/20 shadow-lg text-white flex flex-col justify-between"
    >
      {/* Program Image */}
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-48 object-cover"
      />

      {/* Program Info */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Tag or Short Info */}
        <div className="flex items-center gap-2 text-sm text-yellow-300 mb-2 font-medium">
          <Calendar className="w-4 h-4" />
          4-Day Bootcamp
        </div>

        <h3 className="text-xl font-bold text-yellow-400 mb-2">{program.title}</h3>
        <p className="text-white/80 text-sm flex-grow">{program.description}</p>

        {/* Price */}
        <div className="flex items-center text-white font-semibold mt-4">
          <IndianRupee className="w-4 h-4 mr-1 text-green-300" />
          <span className="text-lg text-green-300">{program.price}</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="bg-white/10 p-4 text-center border-t border-white/10">
        <Link
          to={`/program/${program.id}`}
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}


// w-full pulse-glow bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 text-lg