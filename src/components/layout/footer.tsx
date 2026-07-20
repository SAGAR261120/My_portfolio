import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/social-icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-cyan-300"
          >
            <GitHubIcon className="h-5 w-5" />
          </Link>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-cyan-300"
          >
            <LinkedInIcon className="h-5 w-5" />
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-cyan-300"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
