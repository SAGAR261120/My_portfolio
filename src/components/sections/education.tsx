"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { certifications, education } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { PortfolioImage } from "@/components/shared/portfolio-image";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="Formal education and professional certifications."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <GraduationCap className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-wider text-cyan-300/80">
                {item.period}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{item.school}</p>
              <p className="mt-3 text-sm text-slate-300">Score: {item.score}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="mb-6 flex items-center gap-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
            <Award className="h-5 w-5 text-cyan-300" />
            Certifications
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.title} className="glass-card overflow-hidden p-4">
                <div className="relative mx-auto aspect-[4/3] w-full max-w-[220px]">
                  <PortfolioImage
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-medium text-white">
                  {cert.title}
                </p>
                <p className="text-center text-xs text-slate-400">{cert.issuer}</p>
                <div className="mt-4 flex justify-center">
                  <Button asChild size="sm" variant="outline">
                    <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
