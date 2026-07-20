"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/shared/social-icons";
import { PortfolioImage } from "@/components/shared/portfolio-image";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Selected work across legal tech, healthcare, billing, and real-time tracking."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card group flex flex-col overflow-hidden transition hover:border-cyan-400/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <PortfolioImage
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs uppercase tracking-wider text-cyan-300/80">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.note ? (
                  <p className="mt-3 text-xs text-slate-500">{project.note}</p>
                ) : null}
                <div className="mt-5 flex gap-2">
                  {project.liveUrl ? (
                    <Button asChild size="sm" variant="outline">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </Link>
                    </Button>
                  ) : null}
                  <Button asChild size="sm" variant="secondary">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" />
                      Code
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
