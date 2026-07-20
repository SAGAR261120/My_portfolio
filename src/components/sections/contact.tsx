"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Copy, Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Portfolio inquiry");
    const message = String(data.get("message") || "");

    setStatus("loading");
    setMessage("");

    try {
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`,
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
      setMessage(
        "Opening your email client. You can also copy my email below.",
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email me directly.");
    }
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something"
          description="Have a project or role in mind? Reach out — I usually reply within a day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                icon: MapPin,
                label: "Location",
                value: siteConfig.location,
                href: null,
              },
              {
                icon: Phone,
                label: "Phone",
                value: siteConfig.phone,
                href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
              },
              {
                icon: Mail,
                label: "Email",
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
            ].map((item) => (
              <div key={item.label} className="glass-card flex items-start gap-4 p-5">
                <div className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="mt-1 block text-sm text-slate-200 hover:text-cyan-300"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="mt-1 text-sm text-slate-200">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <Button variant="secondary" onClick={copyEmail} className="w-full">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Email copied" : "Copy email address"}
            </Button>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card space-y-4 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="name" placeholder="Your name" required />
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                required
              />
            </div>
            <Input name="subject" placeholder="Subject" required />
            <Textarea name="message" placeholder="Your message" required />
            <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
              <Send className="h-4 w-4" />
              {status === "loading" ? "Sending…" : "Send Message"}
            </Button>
            {message ? (
              <p
                className={`text-sm ${status === "error" ? "text-red-300" : "text-emerald-300"}`}
              >
                {message}
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
