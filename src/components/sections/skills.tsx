"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I ship with"
          description="Categorized stack with proficiency indicators from real project work."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card group p-6 transition hover:border-cyan-400/30"
            >
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                {category.title}
              </h3>
              <div className="mt-5 space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-cyan-300/90">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
