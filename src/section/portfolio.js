"use client";
import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Ministry & Discipleship Leadership",
    desc: "12+ years with YWAM, leading DTS, DBS, and mentoring young leaders—equipping churches across the nation.",
    image: "/images/leadership.jpg",
    highlights: ["12+ Years", "DTS & DBS Leader", "Mentorship"],
  },
  {
    title: "Himalayan Outreach & Evangelism",
    desc: "Sharing the Gospel in remote Himalayan regions by combining trekking and mission—reaching the unreached.",
    image: "/images/himalaya.jpg",
    highlights: ["Remote Missions", "Trekking Guide", "Evangelism"],
  },
  {
    title: "Mercy Ministries & Community Care",
    desc: "Supporting orphan homes and vulnerable communities through practical care, resources, and long-term relationships.",
    image: "/images/child.jpg",
    highlights: ["Orphan Support", "Community Care", "Relational Ministry"],
  },
  {
    title: "Agriculture & Sustainability",
    desc: "Empowering communities with seeds, training, and resources for sustainable living and self-reliance.",
    image: "/images/agriculture.jpg",
    highlights: ["Farming Training", "Sustainability", "Resources"],
  },
  {
    title: "Sports Ministry & Youth Development",
    desc: "Certified ANFA coach mentoring youth through sports—building character, faith, and providing support.",
    image: "/images/sports.jpg",
    highlights: ["Football Coaching", "Youth Mentorship", "Character Building"],
  },
];

function MissionInAction() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mission in Action
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Serving through faith, leadership, and community transformation
          </p>
        </div>

        {/* Content */}
        <div className="space-y-24">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-10 items-center"
            >

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl ${index % 2 !== 0 ? "md:order-2" : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`${index % 2 !== 0 ? "md:order-1" : ""}`}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {item.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-sm border border-gray-600 px-3 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionInAction;
