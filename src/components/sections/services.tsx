"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Layers,
  Smartphone,
  Server,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

const icons: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Layers,
  Smartphone,
  Server,
};

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="What I can help with"
          description="End-to-end product engineering for web and mobile teams."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Code2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-card group p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
