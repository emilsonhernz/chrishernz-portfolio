import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";

export function ContactFormShell() {
  return (
    <Suspense fallback={<div className="rounded-lg border border-white/10 bg-white/[0.035] p-5 text-zinc-400">Loading contact form...</div>}>
      <ContactForm />
    </Suspense>
  );
}
