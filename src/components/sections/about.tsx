"use client";

import { motion } from "framer-motion";
import { about, siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { PortfolioImage } from "@/components/shared/portfolio-image";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Building products that scale"
          description="A quick look at who I am and what drives my work."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-card relative overflow-hidden p-6"
          >
            <div className="flex items-center gap-4">
              <PortfolioImage
                src="/images/profile.png"
                alt={siteConfig.name}
                width={88}
                height={88}
                className="rounded-2xl object-cover ring-2 ring-cyan-400/30"
              />
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                  {siteConfig.name}
                </h3>
                <p className="text-sm text-cyan-300">{siteConfig.shortTitle}</p>
                <p className="text-sm text-slate-400">
                  {siteConfig.yearsExperience}+ years · {siteConfig.location}
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {about.profile.map((item) => (
                <li
                  key={item.label}
                  className="flex justify-between gap-4 border-b border-white/5 pb-2 text-sm"
                >
                  <span className="text-slate-400">{item.label}</span>
                  <span className="text-right text-slate-200">{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              {about.summary}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {about.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
