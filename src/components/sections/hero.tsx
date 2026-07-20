"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleField } from "@/components/effects/particle-field";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/social-icons";
import { PortfolioImage } from "@/components/shared/portfolio-image";
import { siteConfig, typingTexts } from "@/lib/data";

export function HeroSection() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, char + 1));
          setChar((c) => c + 1);
          if (char + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1200);
          }
        } else {
          setText(current.slice(0, char - 1));
          setChar((c) => c - 1);
          if (char <= 1) {
            setDeleting(false);
            setIndex((i) => (i + 1) % typingTexts.length);
          }
        }
      },
      deleting ? 40 : 90,
    );
    return () => clearTimeout(timeout);
  }, [char, deleting, index]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(56,189,248,0.08),_transparent_45%),linear-gradient(180deg,#05080f_0%,#0a1220_100%)]" />
      <ParticleField />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/90">
            Hello, I&apos;m
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 min-h-[2rem] text-xl font-medium text-cyan-300 sm:text-2xl">
            {text}
            <span className="ml-0.5 inline-block h-6 w-[2px] animate-pulse bg-cyan-300 align-middle" />
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {siteConfig.title}. Building scalable web &amp; mobile products with
            a focus on craft, performance, and clean architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="absolute -inset-4 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-full border border-cyan-400/30 bg-white/5 p-2 shadow-[0_0_60px_rgba(34,211,238,0.2)] backdrop-blur-xl">
            <PortfolioImage
              src="/images/profile.jpg"
              alt={siteConfig.name}
              width={420}
              height={420}
              priority
              className="aspect-square rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-slate-400 transition hover:text-cyan-300"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
