"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { fadeInUp, floatingAnimation } from "@/lib/animations";
import AnimatedWaypoints from "@/components/ui/AnimatedWaypoints";

export default function HeroSection() {
  const heroRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, -200]);
  const smoothBackgroundY = useSpring(backgroundY, {
    stiffness: 100,
    damping: 30,
  });

  const heroInView = useInView(heroRef, { once: true, threshold: 0.3 });

  return (
    <>
      {mounted && (
        <motion.div
          className="fixed inset-0 z-0"
          style={{ y: smoothBackgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-slate-50/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#008ED1]/5 via-transparent to-transparent" />
        </motion.div>
      )}

      {!mounted && (
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-slate-50/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#008ED1]/5 via-transparent to-transparent" />
        </div>
      )}

      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {mounted && (
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 bg-[#008ED1]/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-32 right-16 w-32 h-32 bg-[#008ED1]/5 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
        )}

        <div className="container mx-auto max-w-6xl text-center relative z-10 my-30">
          <div className="mb-8">
            <Badge className="mb-6 px-6 py-2 text-sm bg-[#008ED1] hover:bg-[#007BC1] text-white border-0 shadow-lg">
              منصة تتيح التتبع بإستخدام خريطة تفاعلية
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              مرحباً بك في
              <span className="block text-5xl sm:text-6xl lg:text-8xl font-black text-[#008ED1]">
                يُسر
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
              اكتشف الأماكن المُهيأة لسهولة الوصول
              <br />
              <span className="text-[#008ED1] font-semibold">
                وشاركها مع الجميع
              </span>
            </p>
          </div>
          {/* i replace this animated waypoints with the image (:  */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <AnimatedWaypoints />
          </div>
        </div>

        {mounted ? (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-[#008ED1]" />
          </motion.div>
        ) : (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-[#008ED1]" />
          </div>
        )}

        {mounted && (
          <motion.div
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="absolute inset-0 pointer-events-none"
          />
        )}
      </section>
    </>
  );
}
