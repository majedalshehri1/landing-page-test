"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { projectComponents } from "@/data/projectComponents";
import ProjectComponent from "@/components/ui/ProjectComponent";

export default function ProjectComponentsSection() {
  const componentsRef = useRef(null);
  const componentsInView = useInView(componentsRef, {
    once: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={componentsRef}
      initial="initial"
      animate={componentsInView ? "animate" : "initial"}
      variants={staggerContainer}
      className="py-20 px-4 bg-gradient-to-b from-slate-50/30 to-white relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            مكونات المشروع
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نظام متكامل يضم ثلاث منصات متخصصة لتوفير تجربة شاملة
          </p>
        </motion.div>

        <div className="space-y-16">
          {projectComponents.map((component, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ProjectComponent component={component} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
