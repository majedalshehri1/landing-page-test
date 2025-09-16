"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Technology } from "@/types";

interface TechCardProps {
  tech: Technology;
}

export default function TechCard({ tech }: TechCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      className="group"
    >
      <Card className="relative overflow-hidden border border-gray-200 bg-white hover:border-[#008ED1]/30 hover:shadow-xl transition-all duration-300 h-full">
        <CardContent className="p-6 text-center">
          <div className="mb-4 mx-auto p-4 bg-gray-50 group-hover:bg-[#008ED1]/5 rounded-2xl w-fit transition-colors duration-300 overflow-hidden">
            <img
              src={tech.image}
              alt={tech.name}
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = "/tech/placeholder.png";
              }}
            />
          </div>
          <h3 className="font-semibold text-gray-900 text-sm group-hover:text-[#008ED1] transition-colors duration-300">
            {tech.name}
          </h3>
        </CardContent>

        <div className="absolute inset-0 bg-gradient-to-t from-[#008ED1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </Card>
    </motion.div>
  );
}
