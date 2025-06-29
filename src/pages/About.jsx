import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Lightbulb, Award, Globe, Rocket, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We believe every young mind has the potential to create groundbreaking solutions that can change the world.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a supportive network where young entrepreneurs can connect, learn, and grow together.'
    },
    {
      icon: Heart,
      title: 'Passion for Impact',
      description: 'Encouraging ideas that not only succeed commercially but also make a positive difference in society.'
    },
    {
      icon: Globe,
      title: 'National Reach',
      description: 'Connecting students from all corners of the country to share diverse perspectives and solutions.'
    }
  ];

  const stats = [
    { icon: Users, number: '15,000+', label: 'Students Registered' },
    { icon: Lightbulb, number: '2,500+', label: 'Ideas Submitted' },
    { icon: Award, number: '150+', label: 'Winners Recognized' },
    { icon: Globe, number: '50+', label: 'States Participating' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Program Director',
      bio: 'Former startup founder with 15+ years in education and entrepreneurship.',
      image: 'Professional woman in business attire smiling confidently'
    },
    {
      name: 'James Rodriguez',
      role: 'Innovation Mentor',
      bio: 'Tech entrepreneur and investor passionate about nurturing young talent.',
      image: 'Professional man in casual business attire with a warm smile'
    },
    {
      name: 'Lisa Chen',
      role: 'Community Manager',
      bio: 'Expert in building communities and connecting young entrepreneurs nationwide.',
      image: 'Professional Asian woman with glasses in a modern office setting'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-6"
          >
            <Users className="h-16 w-16 text-blue-400 floating-animation" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Young Innovators
          </h1>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to empower the next generation of entrepreneurs by providing a platform where young minds can share their innovative business ideas, connect with mentors, and turn their dreams into reality.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <Card className="glass-effect border-white/20 p-8 md:p-12">
            <div className="text-center space-y-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
              >
                <Target className="h-12 w-12 text-white" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our Mission
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                To create a nationwide platform that celebrates and nurtures young entrepreneurial talent, providing students with the opportunity to showcase their innovative ideas, receive mentorship from industry experts, and build the skills necessary to become tomorrow's business leaders.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                      <CardTitle className="text-white text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-white/70 text-center">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Numbers that showcase our growing community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Card className="glass-effect border-white/20 card-hover p-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="mx-auto mb-4 p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit"
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              The passionate individuals behind Young Innovators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-effect border-white/20 card-hover">
                  <CardHeader className="text-center">
                    <div className="mb-4">
                      <img  
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white/20"
                        alt={`${member.name} - ${member.role}`}
                       src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                    </div>
                    <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                    <div className="text-blue-300 font-medium">{member.role}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 text-center">
                      {member.bio}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="glass-effect border-white/20 p-12">
            <div className="space-y-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                <Rocket className="h-16 w-16 text-yellow-400" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Whether you're a student with a brilliant idea or an educator supporting young entrepreneurs, we'd love to have you as part of our growing community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/submit"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold rounded-full text-lg transition-all duration-300 pulse-glow"
                  >
                    Submit Your Idea
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/winners"
                    className="inline-block px-8 py-4 glass-effect border border-white/30 text-white hover:bg-white/10 font-bold rounded-full text-lg transition-all duration-300"
                  >
                    View Success Stories
                  </a>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;