"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Code2 } from "lucide-react";
import type { GitHubRepo } from "@/lib/github";
import { siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/shared/social-icons";

type GitHubSectionProps = {
  repos: GitHubRepo[];
  languages: string[];
  stars: number;
  publicRepos: number;
};

export function GitHubSection({
  repos,
  languages,
  stars,
  publicRepos,
}: GitHubSectionProps) {
  return (
    <section id="github" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="GitHub"
          title="Open source activity"
          description={`Live data from github.com/${siteConfig.githubUsername}`}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Public Repos", value: publicRepos, icon: GitHubIcon },
            { label: "Total Stars", value: stars, icon: Star },
            { label: "Languages", value: languages.length, icon: Code2 },
          ].map((item) => (
            <div key={item.label} className="glass-card flex items-center gap-4 p-5">
              <div className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-300">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  {item.value}
                </p>
                <p className="text-sm text-slate-400">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {languages.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {lang}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {repos.slice(0, 6).map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card block p-5 transition hover:border-cyan-400/30"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-medium text-white">{repo.name}</h3>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Star className="h-3.5 w-3.5" />
                  {repo.stargazers_count}
                </span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                {repo.description || "No description provided."}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>{repo.language || "N/A"}</span>
                <span>
                  Updated{" "}
                  {new Date(repo.updated_at).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline">
            <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="h-4 w-4" />
              View full profile
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
