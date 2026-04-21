"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setMessage("Thank you for subscribing! We'll keep you updated.");
      setEmail("");
      setIsSubmitting(false);
      setTimeout(() => setMessage(""), 5000);
    }, 1000);
  };

  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/IMG_2053.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive updates on our latest ministry work,
            upcoming events, and inspiring stories from the field.
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md focus:ring-2 focus:ring-white/50 focus:outline-none text-white placeholder-white/60"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {/* Success/Error Message */}
          {message && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {message}
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-sm text-indigo-300">
          <p>We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
}