"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ProjectComponent as ProjectComponentType } from "@/types";

interface ProjectComponentProps {
  component: ProjectComponentType;
  index: number;
}

export default function ProjectComponent({
  component,
  index,
}: ProjectComponentProps) {
  const renderVisualization = () => {
    if (index === 0) {
      return (
        <div className="w-full h-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="h-8 bg-gray-100 border-b flex items-center px-3 gap-1">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="p-4 space-y-3">
            <div className="h-4 bg-[#008ED1]/20 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="h-8 bg-green-100 rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="h-8 bg-blue-100 rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-[#008ED1] rounded-full"></div>
              </div>
              <div className="h-8 bg-purple-100 rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (index === 1) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4">
            <motion.div
              className="w-12 h-16 bg-white rounded shadow-lg border-2 border-green-200"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-12 h-16 bg-white rounded shadow-lg border-2 border-green-200"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="w-12 h-16 bg-white rounded shadow-lg border-2 border-green-200"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
          <div className="w-20 h-12 bg-white rounded shadow-lg border-2 border-green-300 flex items-center justify-center">
            <div className="text-xs text-green-600 font-mono">DB</div>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden">
        <div className="h-8 bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center px-3">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white/70 rounded-full"></div>
            <div className="w-2 h-2 bg-white/70 rounded-full"></div>
            <div className="w-2 h-2 bg-white/70 rounded-full"></div>
          </div>
        </div>
        <div className="p-3 space-y-2">
          <div className="flex space-x-2">
            <div className="flex-1 h-6 bg-purple-100 rounded"></div>
            <div className="w-12 h-6 bg-purple-200 rounded"></div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-12 bg-gray-100 rounded border"></div>
            <div className="h-12 bg-gray-100 rounded border"></div>
            <div className="h-12 bg-gray-100 rounded border"></div>
            <div className="h-12 bg-gray-100 rounded border"></div>
          </div>
          <div className="h-12 bg-gray-100 rounded border"></div>
          <div className="h-12 bg-gray-100 rounded border"></div>
          <div className="h-12 bg-gray-100 rounded border"></div>
          <div className="h-12 bg-gray-100 rounded border"></div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className={`flex flex-col lg:flex-row items-center gap-12 ${
        index % 2 === 1 ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 lg:pr-8">
        <div className="mb-6">
          <Badge className="mb-4 px-4 py-1 bg-[#008ED1]/10 text-[#008ED1] border-0 text-sm">
            {component.subtitle}
          </Badge>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {component.title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {component.description}
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {component.features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="flex items-center gap-3 text-gray-700"
            >
              <div className="w-2 h-2 bg-[#008ED1] rounded-full flex-shrink-0"></div>
              <span className="text-base">{feature}</span>
            </div>
          ))}
        </div>

        <div className="inline-block px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 font-mono">
          {component.tech}
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative">
          <div
            className={`w-80 h-80 rounded-3xl bg-gradient-to-br ${
              index === 0
                ? "from-[#008ED1]/10 to-blue-100/50"
                : index === 1
                ? "from-green-100/50 to-emerald-100/50"
                : "from-purple-100/50 to-indigo-100/50"
            } shadow-2xl`}
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              {renderVisualization()}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
