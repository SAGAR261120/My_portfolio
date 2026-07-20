"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/data";

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const duration = 1000;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setValue(target);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);
  return value;
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const years = useCountUp(siteConfig.yearsExperience, inView);
  const projects = useCountUp(siteConfig.projectsCompleted, inView);
  const hosted = useCountUp(siteConfig.hostedProjects, inView);

  const stats = [
    { label: "Years Experience", value: years },
    { label: "Projects Completed", value: projects },
    { label: "Hosted Projects", value: hosted },
  ];

  return (
    <section className="py-16">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3 sm:px-6"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card px-6 py-8 text-center"
          >
            <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-cyan-300">
              {stat.value}
              <span className="text-cyan-400">+</span>
            </p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
