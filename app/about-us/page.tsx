import React from 'react';
import { Code, Users, Award, Zap, BookOpen, Target, Heart, Star } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  const stats = [
    { number: '300+', label: 'Students Taught' },
    { number: '92%', label: 'Job Placement Rate' },
    { number: '10+', label: 'Expert Instructors' },
    { number: '4.6/5', label: 'Student Rating' }
  ];

  const courses = [
    { name: 'ReactJS', icon: '⚛️', color: 'bg-blue-500' },
    { name: 'Figma', icon: '🎨', color: 'bg-purple-500' },
    { name: 'UI/UX Design', icon: '✨', color: 'bg-pink-500' },
    { name: 'JavaScript', icon: '💛', color: 'bg-yellow-500' },
    { name: 'TypeScript', icon: '🔷', color: 'bg-blue-600' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-500' },
    { name: 'Python', icon: '🐍', color: 'bg-indigo-500' },
    { name: 'Web Design', icon: '🌐', color: 'bg-cyan-500' }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission-Driven',
      description: 'Empowering the next generation of developers with cutting-edge skills and real-world experience.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Student-Centered',
      description: 'Every decision we make prioritizes our students\' success and learning experience.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We stay ahead of industry trends to ensure our curriculum remains relevant and impactful.'
    }
  ];

  const team = [
    { name: 'Osaro Onaiwu', role: 'Founder & CEO', experience: '5+ years Software Engineer' },
    { name: 'Sylvia Agbor', role: 'Head of Communications', experience: '6+ years Writer & SM Manager' },
    { name: 'Favour Utulu', role: 'UI/UX Director', experience: '4+ years UI/UX Designer' },
    { name: 'David Kim', role: 'Career Success Manager', experience: '10+ years in tech recruitment' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Transforming Careers Since 2023</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              About CodeIllustrated Academy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize tech education and bridge the gap between 
              learning and landing your dream job in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded in 2023 by a team of industry veterans who witnessed firsthand 
                  the growing disconnect between traditional education and the rapidly 
                  evolving tech industry.
                </p>
                <p>
                  We started with a simple belief: everyone deserves access to world-class 
                  tech education, regardless of their background or location. What began 
                  as a small cohort of 20 students has grown into a thriving community of 
                  over 300 graduates worldwide.
                </p>
                <p>
                  Today, our alumni work at top companies and countless innovative startups, proving that with the right guidance and dedication, anyone can build a successful career in tech.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {courses.slice(0, 4).map((course, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                      <span className="text-2xl">{course.icon}</span>
                      <span className="text-white font-medium text-sm">{course.name}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold">And many more...</div>
                  <div className="text-gray-400 text-sm mt-1">Constantly updated curriculum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do and shape the learning experience we create.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105 h-full">
                  <div className="text-purple-400 mb-6 group-hover:text-purple-300 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What We Teach</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Industry-relevant courses designed by experts, updated continuously to match current market demands.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105 text-center">
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <div className="text-white font-semibold">{course.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Leadership</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Industry veterans with decades of combined experience in tech and education.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who transformed their careers with our expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href='/courses' className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Explore Courses
              </Link>
              <Link href='/contact-us' className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                Talk to Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}