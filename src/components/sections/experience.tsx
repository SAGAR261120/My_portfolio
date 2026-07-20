"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Career timeline"
          description="Roles and impact across AI products, healthcare, and billing platforms."
        />

        <div className="relative mt-14 space-y-8 before:absolute before:left-[11px] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-cyan-400/60 before:via-white/10 before:to-transparent md:before:left-1/2 md:before:-translate-x-1/2">
          {experience.map((job, i) => {
            const left = i % 2 === 0;
            return (
              <motion.article
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.05 }}
                className={`relative grid gap-4 md:grid-cols-2 ${left ? "" : ""}`}
              >
                <div
                  className={`absolute left-0 top-3 h-6 w-6 rounded-full border-2 border-cyan-400 bg-slate-950 md:left-1/2 md:-translate-x-1/2 ${job.current ? "shadow-[0_0_16px_rgba(34,211,238,0.7)]" : ""}`}
                />
                <div
                  className={`ml-12 md:ml-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}
                >
                  <div className="glass-card p-6 text-left transition hover:border-cyan-400/30">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-300">
                        {job.period}
                      </span>
                      {job.current ? (
                        <span className="rounded-lg bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                          Current
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm text-cyan-300/90">{job.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {job.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.achievements.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-slate-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
