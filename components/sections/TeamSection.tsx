"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { teamMembers } from "@/data/teamMembers";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

export default function TeamSection() {
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, threshold: 0.2 });

  return (
    <motion.section
      ref={teamRef}
      initial="initial"
      animate={teamInView ? "animate" : "initial"}
      variants={staggerContainer}
      className="py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#008ED1]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#008ED1]/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            فريقنا
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            مجموعة متنوعة من الخبرات والشغف نحو تحقيق رؤية مشتركة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="w-full max-w-xs"
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ width: 0 }}
          whileInView={{ width: "200px" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="h-1 bg-gradient-to-r from-transparent via-[#008ED1] to-transparent rounded-full"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}
