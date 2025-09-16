"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function OurIdeaSection() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      initial="initial"
      animate={sectionInView ? "animate" : "initial"}
      variants={staggerContainer}
      className="py-20 px-4 relative z-10 bg-gray-50"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            فكرتنا
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            حل مشكلة حقيقية بطريقة مبتكرة وبسيطة
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp} className="order-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  المشكلة
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  الأشخاص من ذوي الإعاقة لا يعرفون مدى ملاءمة الأماكن
                  لاحتياجاتهم قبل الوصول إليها
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    عدم وجود معلومات دقيقة عن إمكانية الوصول
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">تجارب سلبية ومواقف محرجة</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="order-2">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-[#008ED1] mb-4">
                    الحل
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    منصة يسر توفر خريطة تفاعلية مع معلومات دقيقة عن إمكانية
                    الوصول
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#008ED1] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      معلومات شاملة ومحدثة باستمرار
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#008ED1] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700">تقييمات من المجتمع الحقيقي</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#008ED1] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700">تجربة مستخدم سهلة ومريحة</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="mt-16 text-center">
          <div className="bg-[#008ED1] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">النتيجة</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              تمكين الأشخاص من الوصول إلى الأماكن المخصصة لهم بتجربة سلسة
              وتفاعلية
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
