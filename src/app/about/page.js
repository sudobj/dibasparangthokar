"use client";
import { useState } from "react";

const aboutData = {
  hero: {
    title: "About Me",
    subtitle: "Passionate about faith, community service, and making a difference"
  },
  description: "I'm Dibas Parang Thokar, a dedicated ministry leader and community servant with over 12 years of experience in spiritual leadership, discipleship training, and community development. My journey is driven by a deep commitment to transforming lives through faith, compassion, and practical service in Nepal and beyond.",
  stats: [
    { number: "12+", label: "Years of Ministry Experience" },
    { number: "5000+", label: "Lives Touched" },
    { number: "50+", label: "Communities Served" },
    { number: "∞", label: "Passion for Service" }
  ],
  values: [
    {
      icon: "🙏",
      title: "Faith-Driven",
      description: "My faith is the foundation of everything I do. It guides my decisions and empowers my service to others."
    },
    {
      icon: "❤️",
      title: "Compassionate",
      description: "I believe in meeting people where they are and serving with genuine empathy and care for their needs."
    },
    {
      icon: "🚀",
      title: "Action-Oriented",
      description: "I don't just talk about change—I actively work to create meaningful impact in communities."
    },
    {
      icon: "🌱",
      title: "Continuous Growth",
      description: "I'm committed to learning, developing, and improving myself to better serve others effectively."
    }
  ]
};

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {aboutData.hero.title}
          </h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            {aboutData.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything I do and shape my approach to ministry and service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            I&apos;d love to discuss opportunities for collaboration, ministry partnerships, or hear about how I can serve your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Get in Touch
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
              View My Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}