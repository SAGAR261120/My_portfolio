"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { AnimatedCursor } from "@/components/effects/animated-cursor";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { CommandPalette } from "@/components/shared/command-palette";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <LoadingScreen />
      <AnimatedCursor />
      <Navbar onOpenCommand={() => setCommandOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </>
  );
}
