"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  Target,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

interface GoalIconProps {
  iconType: string;
}
function GoalIcon({ iconType }: GoalIconProps) {
  if (iconType === "target")
    return <Target className="w-12 h-12 text-primary mx-auto mb-4" />;
  if (iconType === "lightbulb")
    return <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />;
  if (iconType === "users")
    return <Users className="w-12 h-12 text-primary mx-auto mb-4" />;
  return null;
}

const goalsData = [
  {
    iconType: "target",
    title: "الهدف الأول",
    description: "تطوير منصات رقمية تخدم المجتمع العربي بكفاءة عالية",
    badge: "تم تحقيقه بنسبة 85%",
  },
  {
    iconType: "lightbulb",
    title: "الهدف الثاني",
    description: "ابتكار حلول تقنية تواكب احتياجات العصر الحديث",
    badge: "قيد التطوير",
  },
  {
    iconType: "users",
    title: "الهدف الثالث",
    description: "بناء مجتمع تقني متفاعل ومتطور باستمرار",
    badge: "تم تحقيقه بنسبة 70%",
  },
];

export default function YusrLandingPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const goalsRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.02]);

  const backgroundY = useTransform(scrollY, [0, 600], [0, -100]);
  const smoothHeroY = useSpring(heroY, { stiffness: 100, damping: 30 });
  const smoothBackgroundY = useSpring(backgroundY, {
    stiffness: 100,
    damping: 30,
  });

  const heroInView = useInView(heroRef, { once: true });
  const problemInView = useInView(problemRef, { once: true });
  const goalsInView = useInView(goalsRef, { once: true });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background overflow-x-hidden"
    >
      {/* Background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: smoothBackgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      </motion.div>

      <motion.section
        ref={heroRef}
        initial="initial"
        animate={heroInView ? "animate" : "initial"}
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-[#f8f8f8]}"
        style={{ y: smoothHeroY, opacity: heroOpacity, scale: heroScale }}
      >
        <div className="container mx-auto max-w-4xl flex flex-col items-center gap-10">
          {/* النص */}
          <motion.h1
            className="text-primary sm:text-xl md:text-xl lg:text-3xl font-semibold text-foreground leading-relaxed"
            variants={fadeInUp}
          >
            يسر يساعدك على اكتشاف الأماكن المهيأة
            <br />
            لسهولة الوصول ومشاركتها مع الجميع
          </motion.h1>

          <motion.div
            variants={scaleIn}
            className="w-full flex justify-center items-center"
          >
            <img
              src="/bg-img.png"
              alt="خريطة يسر"
              className="w-full max-w-3xl h-auto object-contain"
            />
          </motion.div>
        </div>
        {/* ChevronDown at the bottom of hero section */}
        <div className="w-full flex justify-center items-center absolute bottom-6 left-0">
          <ChevronDown className="w-10 h-10 m-auto text-primary animate-bounce" />
        </div>
      </motion.section>

      {/* 🟣 Problem Section */}
      <motion.section
        ref={problemRef}
        initial="initial"
        animate={problemInView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 px-4 relative z-10 bg-background overflow-hidden"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              المشكلة والحل
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
              نحن نفهم التحديات التي تواجهها في العالم الرقمي
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-destructive">
                  التحديات الحالية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm sm:text-base">
                <div className="flex gap-2 items-start">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <p>صعوبة في الوصول للخدمات الرقمية</p>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <p>تعقيد في استخدام التقنيات الحديثة</p>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <p>نقص في الحلول المناسبة للمجتمع العربي</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-primary">
                  حلولنا المبتكرة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm sm:text-base">
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <p>واجهات سهلة الاستخدام باللغة العربية</p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <p>تقنيات حديثة مصممة للمستخدم العربي</p>
                </div>
                <div className="flex gap-2 items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <p>دعم فني متخصص ومتاح باستمرار</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* 🟣 Goals Section */}
      <motion.section
        ref={goalsRef}
        initial="initial"
        animate={goalsInView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 px-4 bg-muted relative overflow-hidden"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              أهدافنا وإنجازاتنا
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
              نسعى لتحقيق رؤية طموحة في عالم التكنولوجيا
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {goalsData.map((goal, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="text-center p-6 h-full hover:shadow-lg hover:scale-105 transition-all">
                  <CardHeader>
                    <GoalIcon iconType={goal.iconType} />
                    <CardTitle className="text-lg sm:text-xl">
                      {goal.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {goal.description}
                    </p>
                    <Badge variant="secondary" className="mt-4">
                      {goal.badge}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
