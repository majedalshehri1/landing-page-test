"use client";

import { motion } from "framer-motion";
import { scaleIn, staggerContainer, fadeInUp } from "@/lib/animations";
import { technologies } from "@/data/technologies";
import TechCard from "@/components/ui/TechCard";

export default function TechnologiesSection() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            التقنيات المستخدمة
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            مجموعة متطورة من أحدث التقنيات والأدوات لضمان الجودة والأداء العالي
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              transition={{ delay: index * 0.1 }}
            >
              <TechCard tech={tech} />
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
