"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { navLinks, projects, siteConfig } from "@/lib/data";

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const items = useMemo(
    () => [
      ...navLinks.map((l) => ({
        id: l.href,
        label: `Go to ${l.label}`,
        action: () => {
          if (l.href.startsWith("/")) router.push(l.href);
          else window.location.hash = l.href;
        },
      })),
      ...projects.map((p) => ({
        id: p.title,
        label: `Project: ${p.title}`,
        action: () => {
          window.location.hash = "#projects";
        },
      })),
      {
        id: "resume",
        label: "Download Resume",
        action: () => window.open(siteConfig.resumeUrl, "_blank"),
      },
      {
        id: "github",
        label: "Open GitHub",
        action: () => window.open(siteConfig.github, "_blank"),
      },
    ],
    [router],
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm">
      <button
        className="absolute inset-0 cursor-default"
        aria-label="Close command palette"
        onClick={() => onOpenChange(false)}
      />
      <Command className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-2xl">
        <Command.Input
          value={query}
          onValueChange={setQuery}
          placeholder="Search sections, projects…"
          className="w-full border-b border-white/10 bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500"
        />
        <Command.List className="max-h-72 overflow-auto p-2">
          <Command.Empty className="px-3 py-6 text-center text-sm text-slate-500">
            No results found.
          </Command.Empty>
          {items.map((item) => (
            <Command.Item
              key={item.id}
              value={item.label}
              onSelect={() => {
                item.action();
                onOpenChange(false);
                setQuery("");
              }}
              className="cursor-pointer rounded-xl px-3 py-2.5 text-sm text-slate-200 aria-selected:bg-cyan-400/10 aria-selected:text-cyan-200"
            >
              {item.label}
            </Command.Item>
          ))}
        </Command.List>
        <div className="border-t border-white/10 px-4 py-2 text-xs text-slate-500">
          Press <kbd className="rounded bg-white/10 px-1.5 py-0.5">Ctrl</kbd> +{" "}
          <kbd className="rounded bg-white/10 px-1.5 py-0.5">K</kbd> to toggle
        </div>
      </Command>
    </div>
  );
}
