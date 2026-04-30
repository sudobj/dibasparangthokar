
'use client';

import { blogData } from '@/data/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  // Get featured blog
  const featuredBlog = blogData.find(blog => blog.featured);
  
  // Get latest 3 blogs (excluding featured)
  const latestBlogs = blogData
    .filter(blog => !blog.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
  
  // Get all blogs sorted by date (newest first)
  const allBlogs = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-6">
            <div>
              <p className="text-lg font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-3">Stories & Insights</p>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">Blog</h1>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-indigo-400 to-violet-500"></div>
            <p className="text-lg leading-relaxed text-slate-200 max-w-2xl">
              Thoughts, insights, and reflections on leadership, ministry, and community transformation
            </p>
          </div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Blog Section */}
        {featuredBlog && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Story</h2>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="relative h-64 md:h-full min-h-80">
                  <Image
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                      {featuredBlog.category}
                    </span>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredBlog.title}</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{featuredBlog.content}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>{featuredBlog.author}</span>
                    <span>{formatDate(featuredBlog.date)}</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-fit">
                    Read Full Story
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* Latest Blogs Cards */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariant}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={itemVariant}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {blog.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{blog.author}</span>
                    <span>{formatDate(blog.date)}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-2">
                    Read More
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Blogs List */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariant}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="space-y-4">
            {allBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                variants={itemVariant}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {blog.category}
                      </span>
                      <span className="text-sm text-gray-500">{formatDate(blog.date)}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{blog.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-3 md:ml-4">
                    <div className="relative h-20 w-20 flex-shrink-0">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">
                      →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
} 