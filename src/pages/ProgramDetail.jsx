import { useParams } from 'react-router-dom';
import programs from '../data/programs';

export default function ProgramDetail() {
  const { id } = useParams();
  const program = programs.find((p) => p.id === id);

  const loadRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      const options = {
        key: "YOUR_RAZORPAY_KEY",
        amount: program.price * 100,
        currency: "INR",
        name: "Teenskool",
        description: program.title,
        image: "/logo.png", // optional
        handler: function (response) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "",
          email: "",
        },
        theme: {
          color: "#0745ff",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
    document.body.appendChild(script);
  };

  if (!program) return <p className="text-white">Program not found.</p>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold">{program.title}</h1>
      <img src={program.image} alt={program.title} className="rounded mt-4 mb-4 w-full max-w-xl" />
      <p>{program.description}</p>
      <p className="mt-2 font-semibold text-accent">Price: ₹{program.price}</p>
      <button
        onClick={loadRazorpay}
        className="mt-4 bg-accent text-black px-6 py-2 rounded hover:bg-yellow-400"
      >
        Enroll Now
      </button>
    </div>
  );
}
