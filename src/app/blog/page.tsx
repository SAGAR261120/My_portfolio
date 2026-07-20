import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles and notes from Sagar Sengar — coming soon.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/90">Blog</p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white">
        Writing coming soon
      </h1>
      <p className="mt-4 max-w-lg text-slate-400">
        This space will host deep-dives on React, Next.js, React Native, and
        MERN architecture. Check back later for new posts.
      </p>
      <Button asChild className="mt-8" variant="secondary">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </Button>
    </section>
  );
}
