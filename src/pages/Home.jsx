import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Trophy, Users, Target, Rocket, Star, Book } from 'lucide-react';
import ProgramCard from '@/components/ui/ProgramCard';
import programs from '@/data/programs';


const Home = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Submit Ideas',
      description: 'Share your innovative business concepts with our community of young entrepreneurs.'
    },
    {
      icon: Trophy,
      title: 'Win Recognition',
      description: 'Get recognized for your creativity and potentially win amazing prizes and mentorship.'
    },
    {
      icon: Users,
      title: 'Join Community',
      description: 'Connect with like-minded students and build lasting entrepreneurial relationships.'
    },
    {
      icon: Target,
      title: 'Get Feedback',
      description: 'Receive valuable insights from industry experts and fellow innovators.'
    }
  ];

  const stats = [
    { number: '2,500+', label: 'Ideas Submitted' },
    { number: '150+', label: 'Schools Participating' },
    { number: '50+', label: 'Winners Recognized' },
    { number: '25+', label: 'States Represented' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block"
              >
                <Rocket className="h-16 w-16 text-yellow-400 mx-auto floating-animation" />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold gradient-text text-shadow">
                TeenSKool
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Where brilliant young minds share groundbreaking business ideas that could change the world
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/submit">
                <Button size="lg" className="pulse-glow bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  Submit Your Idea
                </Button>
              </Link>
              <Link to="/winners">
                <Button variant="outline" size="lg" className="glass-effect border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                  View Winners
                </Button>
              </Link>
            </div>
          </motion.div>
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
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
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
              Why Join Our Platform?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the amazing opportunities waiting for young entrepreneurs like you
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
                      <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
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

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-12 space-y-8"
          >
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
            
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Ready to Share Your Big Idea?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join thousands of young innovators who are already making their mark. Your idea could be the next big thing!
            </p>
            
            <Link to="/submit">
              <Button size="lg" className="pulse-glow bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-12 py-6 text-xl animate-bounce-slow">
                Start Your Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Programs Section */}
<section className="py-20 px-6 bg-[#002349]">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Explore Our Programs</h2>
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