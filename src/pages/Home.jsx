import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Lightbulb,
  Trophy,
  Users,
  Target,
  Rocket,
  Star,
  Book,
  GraduationCap,
  Bot,
  Clock,
  MapPin,
  Award,
  Zap,
  Sparkles,
  School,
  FileText,
  PhoneCall,
  SmilePlus
} from "lucide-react";

import ProgramCard from "@/components/ui/ProgramCard";
import programs from "@/data/programs";

const Home = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "AI Brainstorming",
      description:
        "Use AI to generate and refine business ideas that solve real problems.",
    },
    {
      icon: Trophy,
      title: "Create with AI Tools",
      description:
        "Design logos, ads, and pitch slides using DALL·E, Canva, and more.",
    },
    {
      icon: Users,
      title: "Real Startup Examples",
      description:
        "See how successful startups use AI in their daily operations.",
    },
    {
      icon: Target,
      title: "Shark Tank Pitch",
      description:
        "Practice presenting your AI-powered startup idea to judges.",
    },
  ];

  const stats = [
    { number: "150+", label: "Student Trained" },
    { number: "50+", label: "Schools Participating" },
    { number: "50+", label: "Winners Recognized" },
    { number: "25+", label: "States Represented" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your First<span class="text-[#ffc516]"> Startup Idea</span>{" "}
              with AI — In Just<span class="text-[#ffc516]"> One Day</span>
            </h1>

            <h2 className="text-lg md:text-xl text-white font-semibold">
              Join the AI-Powered Teenpreneur Workshop by Teenskool
            </h2>

            <p className="text-white/80 max-w-md">
              No coding. No prior experience. Just ideas, AI, and action. Watch
              students transform from curious learners to confident innovators
              in just one workshop.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/submit">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 text-lg shadow-md">
                  Apply Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-semibold text-lg shadow-md">
                  Book for Your School
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Video + Feature List */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg space-y-6">
            <div className="rounded-lg overflow-hidden aspect-video">
              <Link
                to="https://youtu.be/o4QXiKLv9yo?si=q4YuPSi1GJIvZYYW"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-lg overflow-hidden"
              >
                <img
                  src="https://img.youtube.com/vi/EeRpwBOPOxg/hqdefault.jpg"
                  alt="Watch video"
                  className="w-full object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <svg
                    className="w-14 h-14 text-white opacity-90"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 8l6 4-6 4V8z" />
                  </svg>
                </div>
              </Link>
            </div>

            <p className="text-white font-semibold text-sm">
              Watch: Students pitch their startups at Demo Day
            </p>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-yellow-400" />
                Live mentorship from IIT/IIM alumni
              </li>
              <li className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-yellow-400" />
                AI-powered startup coach included
              </li>
              <li className="flex items-center gap-2">
                <Book className="h-5 w-5 text-yellow-400" />
                NEP 2020 aligned curriculum
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="glass-effect rounded-2xl p-6 card-hover">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              What the Workshop Covers
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A fast-paced, high-energy intro to show students how AI can turn
              their ideas into real startup concepts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-effect border-white/20 card-hover h-full">
                    <CardHeader className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit"
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <CardTitle className="text-white text-xl">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-white/70 text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Who It's For Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-12">
            Who It's For
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Students */}
            <div className="bg-green-300/10 p-8 rounded-2xl shadow-lg border border-white/10 hover:scale-[1.02] transition">
              <div className="bg-blue-600 w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4">
                <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Students (Grades 8–12)
              </h3>
              <p className="text-white/70 text-sm">
                Curious minds ready to explore entrepreneurship and AI tools. No
                technical background needed!
              </p>
            </div>

            {/* Creative Thinkers */}
            <div className="bg-yellow-200/10 p-8 rounded-2xl shadow-lg border border-white/10 hover:scale-[1.02] transition">
              <div className="bg-yellow-400 w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4">
                <Lightbulb className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Creative Thinkers
              </h3>
              <p className="text-white/70 text-sm">
                Students who love solving problems, thinking outside the box,
                and want to see their ideas come to life.
              </p>
            </div>

            {/* Schools */}
            <div className="bg-green-300/10 p-8 rounded-2xl shadow-lg border border-white/10 hover:scale-[1.02] transition">
              <div className="bg-green-500 w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4">
                <Target className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Forward-Thinking Schools
              </h3>
              <p className="text-white/70 text-sm">
                Institutions bringing 21st-century skills and NEP-aligned
                workshops to their students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Format & Details Section */}
      <section className="py-20 px-6 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-12">
            Workshop Format & Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Format Details (Left Column) */}
            <div className="space-y-6">
              <div className="bg-white/10 border border-white/20 p-6 rounded-xl shadow-lg flex gap-4 items-start hover:scale-[1.02] transition">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Clock className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Duration</h4>
                  <p className="text-white/80 text-sm">
                    1-Day Workshop | 2 to 3 Hours
                  </p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 p-6 rounded-xl shadow-lg flex gap-4 items-start hover:scale-[1.02] transition">
                <div className="bg-blue-600 p-3 rounded-full">
                  <MapPin className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Format</h4>
                  <p className="text-white/80 text-sm">
                    Available Online or On-Campus
                  </p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 p-6 rounded-xl shadow-lg flex gap-4 items-start hover:scale-[1.02] transition">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Award className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Certificate
                  </h4>
                  <p className="text-white/80 text-sm">
                    Certificate of Participation for all attendees
                  </p>
                </div>
              </div>
            </div>

            {/* What's Included (Right Column) */}
            <div className="bg-white/10 border border-white/20 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
              <h4 className="text-white font-semibold text-xl mb-4">
                What's Included
              </h4>
              <ul className="space-y-4 text-white/80 text-sm list-disc list-inside">
                <li>Mentor Session with startup founders & AI innovators</li>
                <li>Live AI Tool Demos (ChatGPT, DALL·E, Notion AI, Canva)</li>
                <li>Interactive Group Activities & Brainstorming</li>
                <li>Shark Tank-style Pitch Practice</li>
                <li>All AI tools are beginner-friendly & freely accessible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Students Say Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          What Students Say
        </h2>
        <p className="text-white/70 mb-12">
          Real feedback from young innovators who joined the bootcamp
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Priya Sharma",
              age: 15,
              school: "Kendriya Vidyalaya, Delhi",
              feedback:
                "This was the most fun I've had in a class all year. I loved creating with AI and pitching my startup idea!",
              extra: "Designed sustainable fashion brand with AI",
            },
            {
              name: "Aarav Mehta",
              age: 16,
              school: "Delhi Public School",
              feedback:
                "I had no idea AI could be this exciting. I feel more confident and creative now.",
              extra: "Built a mental wellness chatbot prototype",
            },
            {
              name: "Saanvi Kapoor",
              age: 14,
              school: "Bal Bharti Public School",
              feedback:
                "Our team learned teamwork, pitching, and design in just a few hours. We even made our logo using AI!",
              extra: "Created eco-friendly delivery idea with DALL·E design",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect p-6 rounded-2xl text-left text-white shadow-lg relative"
            >
              <div className="flex items-center mb-4">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400 mr-1 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.75l-6 5.849L19.335 24 12 19.897 4.665 24 6 15.599 0 9.75l8.332-1.595z" />
                    </svg>
                  ))}
              </div>
              <p className="text-lg font-medium mb-4">"{testimonial.feedback}"</p>
              <p className="font-bold">{testimonial.name}, {testimonial.age}</p>
              <p className="text-sm text-white/70">{testimonial.school}</p>
              <p className="text-xs text-yellow-300 mt-1 italic">{testimonial.extra}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why This Workshop Stands Out Section */}
      <section className="py-20 px-6  text-center">
        <h2 className="text-4xl  gradient-text md:text-5xl font-bold  mb-12">
          Why This Workshop Stands Out
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {/* 1 - Expert Mentors */}
          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Users className="text-white w-6 h-6" />
            </div>
            <h4 className="font-semibold text-white mb-1">Expert Mentors</h4>
            <p className="text-sm text-white">
              Taught by startup founders & AI innovators
            </p>
          </div>

          {/* 2 - Cutting-Edge Tools */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Zap className="text-white w-6 h-6" />
            </div>
            <h4 className="font-semibold text-white mb-1">
              Cutting-Edge Tools
            </h4>
            <p className="text-sm text-white">
              Hands-on with ChatGPT, DALL·E, Notion AI, Canva
            </p>
          </div>

          {/* 3 - Real-World Focus */}
          <div className="flex flex-col items-center">
            <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Target className="text-white w-6 h-6" />
            </div>
            <h4 className="font-semibold text-white mb-1">
              Real-World Focus
            </h4>
            <p className="text-sm text-white">
              Aligned with actual startup practices
            </p>
          </div>

          {/* 4 - Inspiring Experience */}
          <div className="flex flex-col items-center">
            <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <h4 className="font-semibold text-white mb-1">
              Inspiring Experience
            </h4>
            <p className="text-sm text-white">
              Gets students excited about innovation & problem-solving
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
<section className="py-24 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 text-white">
    {/* For Principals & Educators */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl transition hover:scale-[1.01] space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="bg-blue-500 p-2 rounded-full">
          <School className="text-white w-5 h-5" />
        </div>
        <h3 className="text-2xl font-bold">For Principals & Educators</h3>
      </div>

      <p className="text-white/90 text-sm">
        Want this transformative experience for your school? Give your students the entrepreneurial edge they need with our AI-powered workshop that aligns with NEP 2020 guidelines.
      </p>

      <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
        <li>Interactive, engaging format that students love</li>
        <li>Flexible scheduling – online or on-campus</li>
        <li>Professional certificates for all participants</li>
        <li>Affordable group pricing available</li>
      </ul>

      <Link to="/contact">
        <button className="bg-yellow-400 mt-6 hover:bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-lg w-full shadow-md transition text-sm flex items-center justify-center gap-2">
          <PhoneCall className="w-4 h-4" /> Book a Free Demo
        </button>
      </Link>
    </motion.div>

    {/* For Parents */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl transition hover:scale-[1.01] space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="bg-pink-500 p-2 rounded-full">
          <SmilePlus className="text-white w-5 h-5" />
        </div>
        <h3 className="text-2xl font-bold">For Parents</h3>
      </div>

      <p className="text-white/90 text-sm">
        Want your child to explore startup skills early? Give them the confidence and creativity to succeed through our AI-powered workshop that builds problem-solving and future-ready thinking.
      </p>

      <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
        <li>Safe, supervised learning environment</li>
        <li>Builds critical thinking & creativity</li>
        <li>Prepares them for future career opportunities</li>
        <li>Certificate to showcase their achievement</li>
      </ul>

      <a href="/parent-pack.pdf" target="_blank" rel="noopener noreferrer">
        <button className="bg-white mt-6 text-blue-900 font-semibold py-3 px-6 rounded-lg w-full shadow-md transition text-sm flex items-center justify-center gap-2">
          <FileText className="w-4 h-4" /> Download Parent Pack
        </button>
      </a>
    </motion.div>
  </div>
</section>





      {/* Programs Section */}
      <section className="py-20 px-6 ">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl  gradient-text md:text-5xl font-bold  mb-4">
              Explore Our Programs
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Learn real-world skills with our expertly designed bootcamps.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {programs.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

