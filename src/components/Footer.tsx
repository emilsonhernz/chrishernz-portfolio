import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:px-6">
        <p>Copyright {new Date().getFullYear()} {profile.name}. Built for engineering roles and automation clients.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/resume" className="hover:text-zinc-200">Resume</Link>
          <Link href="/services" className="hover:text-zinc-200">Services</Link>
          <Link href="/projects" className="hover:text-zinc-200">Projects</Link>
          <Link href="/contact" className="hover:text-zinc-200">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
