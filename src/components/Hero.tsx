"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";

const Hero3D = dynamic(() => import("./Hero3D").then((mod) => mod.Hero3D), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.18),transparent_42%)]" />
});

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-74px)] overflow-hidden border-b border-white/10 bg-[#151528]">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#151528_0%,rgba(21,21,40,0.95)_42%,rgba(21,21,40,0.6)_72%,#151528_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <motion.div
        className="mx-auto grid min-h-[calc(100svh-74px)] max-w-6xl items-center gap-8 px-4 pb-16 pt-14 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl space-y-8">
          <motion.div variants={fadeUp} className="space-y-1 font-mono text-sm font-semibold text-cyan-300 md:text-base">
            <p>{profile.role}</p>
            <p className="text-zinc-50">emilhernaez.dev</p>
          </motion.div>
          <motion.h1 variants={fadeUp} className="max-w-3xl text-4xl font-semibold leading-[1.12] text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl">
            Reliable APIs.
            <span className="block">Workflow automation.</span>
            <span className="block text-zinc-400 italic">Systems that stay connected.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-zinc-300">
            I build back-end services, NetSuite customizations, n8n workflows, and system integrations that reduce manual work and keep business data moving cleanly.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Link href="/resume" className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#151528]">
              <FileText size={17} />
              View Resume
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#151528]">
              View Services
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={fadeUp}
          className="relative order-first h-[260px] w-full overflow-hidden sm:h-[320px] md:h-[380px] lg:order-none lg:h-[400px] xl:h-[500px]"
        >
          <Hero3D />
        </motion.div>
      </motion.div>
    </section>
  );
}
