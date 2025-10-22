"use client"

import { motion } from 'framer-motion';
import { Video, Users, Clock, Award, Headphones, Globe } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Video,
      title: 'Live Online Classes',
      description: 'Interactive sessions via Zoom with real-time Q&A and hands-on coding exercises.'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience.'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Choose from crash courses or extended programs that fit your timeline.'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Earn certificates upon successful completion of courses.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our dedicated support team.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with students worldwide and build your professional network.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl text-white sm:text-4xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">CodeIllustrated</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            We provide everything you need to succeed in your coding journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-card border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}