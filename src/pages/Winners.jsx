import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Medal, Award, Star, MapPin, School, Calendar } from 'lucide-react';

const Winners = () => {
  const winners = [
    {
      year: 2024,
      rank: 1,
      name: 'Sarah Chen',
      age: 17,
      school: 'Tech Valley High School',
      city: 'San Francisco, CA',
      idea: 'EcoTrack - Smart Waste Management',
      category: 'Environmental Solutions',
      description: 'An AI-powered app that helps communities track and reduce waste through gamification and real-time analytics.',
      prize: '$10,000 + Mentorship Program',
      image: 'Young female student with a bright smile holding a trophy'
    },
    {
      year: 2024,
      rank: 2,
      name: 'Marcus Johnson',
      age: 16,
      school: 'Innovation Academy',
      city: 'Austin, TX',
      idea: 'StudyBuddy AI',
      category: 'Education & Learning',
      description: 'A personalized AI tutor that adapts to each student\'s learning style and provides customized study plans.',
      prize: '$7,500 + Summer Internship',
      image: 'Young male student presenting his project with confidence'
    },
    {
      year: 2024,
      rank: 3,
      name: 'Priya Patel',
      age: 15,
      school: 'Metro Science High',
      city: 'Chicago, IL',
      idea: 'HealthConnect',
      category: 'Healthcare & Wellness',
      description: 'A platform connecting rural communities with healthcare professionals through telemedicine and health tracking.',
      prize: '$5,000 + Startup Accelerator',
      image: 'Young female student working on a laptop with medical charts'
    },
    {
      year: 2023,
      rank: 1,
      name: 'David Kim',
      age: 18,
      school: 'Riverside Prep',
      city: 'Seattle, WA',
      idea: 'FoodShare Network',
      category: 'Social Impact',
      description: 'A mobile app that connects restaurants with excess food to local food banks and shelters.',
      prize: '$10,000 + Mentorship Program',
      image: 'Young male student at a food distribution center'
    },
    {
      year: 2023,
      rank: 2,
      name: 'Emma Rodriguez',
      age: 16,
      school: 'Creative Arts Academy',
      city: 'Miami, FL',
      idea: 'ArtTherapy VR',
      category: 'Healthcare & Wellness',
      description: 'Virtual reality platform that uses art therapy to help students manage stress and anxiety.',
      prize: '$7,500 + Summer Internship',
      image: 'Young female student wearing VR headset while painting'
    },
    {
      year: 2023,
      rank: 3,
      name: 'Alex Thompson',
      age: 17,
      school: 'Green Valley High',
      city: 'Portland, OR',
      idea: 'Solar Schools Initiative',
      category: 'Environmental Solutions',
      description: 'A program to install solar panels in schools while teaching students about renewable energy.',
      prize: '$5,000 + Startup Accelerator',
      image: 'Young student standing next to solar panels on school roof'
    }
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-8 w-8 text-yellow-400" />;
      case 2:
        return <Medal className="h-8 w-8 text-gray-300" />;
      case 3:
        return <Award className="h-8 w-8 text-amber-600" />;
      default:
        return <Star className="h-8 w-8 text-blue-400" />;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return 'from-yellow-400 to-yellow-600';
      case 2:
        return 'from-gray-300 to-gray-500';
      case 3:
        return 'from-amber-500 to-amber-700';
      default:
        return 'from-blue-400 to-blue-600';
    }
  };

  const groupedWinners = winners.reduce((acc, winner) => {
    if (!acc[winner.year]) {
      acc[winner.year] = [];
    }
    acc[winner.year].push(winner);
    return acc;
  }, {});

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-6"
          >
            <Trophy className="h-16 w-16 text-yellow-400 floating-animation" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Previous Winners
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Celebrating the brilliant young minds who have shared their innovative ideas and made a lasting impact
          </p>
        </motion.div>

        {Object.entries(groupedWinners)
          .sort(([a], [b]) => parseInt(b) - parseInt(a))
          .map(([year, yearWinners]) => (
            <div key={year} className="mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-8"
              >
                <Calendar className="h-8 w-8 text-blue-400" />
                <h2 className="text-3xl font-bold gradient-text">{year} Winners</h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {yearWinners
                  .sort((a, b) => a.rank - b.rank)
                  .map((winner, index) => (
                    <motion.div
                      key={`${year}-${winner.rank}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="glass-effect border-white/20 card-hover h-full relative overflow-hidden">
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getRankColor(winner.rank)}`} />
                        
                        <CardHeader className="text-center pb-4">
                          <div className="flex justify-center mb-4">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className={`p-3 bg-gradient-to-r ${getRankColor(winner.rank)} rounded-full`}
                            >
                              {getRankIcon(winner.rank)}
                            </motion.div>
                          </div>
                          
                          <div className="space-y-2 mb-4">
                            <img  
                              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white/20"
                              alt={`${winner.name} - ${winner.idea} winner`}
                             src="https://images.unsplash.com/photo-1658504140972-7af3e80d35f1" />
                          </div>

                          <CardTitle className="text-white text-xl mb-2">
                            {winner.name}
                          </CardTitle>
                          <div className="text-white/60 text-sm space-y-1">
                            <div className="flex items-center justify-center gap-1">
                              <School className="h-4 w-4" />
                              <span>{winner.school}</span>
                            </div>
                            <div className="flex items-center justify-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{winner.city}</span>
                            </div>
                            <div className="text-white/80 font-medium">
                              Age: {winner.age}
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <div className="text-center">
                            <h3 className="text-lg font-bold text-white mb-1">
                              {winner.idea}
                            </h3>
                            <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm">
                              {winner.category}
                            </div>
                          </div>

                          <CardDescription className="text-white/70 text-center leading-relaxed">
                            {winner.description}
                          </CardDescription>

                          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 text-center">
                            <div className="text-green-300 font-semibold text-sm mb-1">
                              Prize Won
                            </div>
                            <div className="text-white font-bold">
                              {winner.prize}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <Card className="glass-effect border-white/20 p-12">
            <div className="space-y-6">
              <div className="flex justify-center space-x-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Star className="h-8 w-8 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Could You Be Next?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                These amazing students started with just an idea. Your innovative concept could be the next big winner!
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/submit"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold rounded-full text-lg transition-all duration-300 pulse-glow"
                >
                  Submit Your Idea Today
                </a>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Winners;