import { Link } from 'react-router-dom';

export default function ProgramCard({ program }) {
  return (
    <div className="bg-white rounded shadow p-4 text-black">
      <img src={program.image} alt={program.title} className="rounded w-full h-48 object-cover mb-3" />
      <h2 className="text-xl font-bold">{program.title}</h2>
      <p className="text-sm mt-1">{program.description}</p>
      <p className="mt-2 font-semibold text-primary">₹{program.price}</p>
      <Link
        to={`/program/${program.id}`}
        className="inline-block mt-3 bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}
