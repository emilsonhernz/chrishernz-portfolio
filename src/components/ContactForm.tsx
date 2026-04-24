"use client";

import { Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { contactIntents, profile } from "@/data/profile";

type IntentId = (typeof contactIntents)[number]["id"];

function getIntent(intentId: string | null) {
  return contactIntents.find((intent) => intent.id === intentId) ?? contactIntents[0];
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialIntent = useMemo(() => getIntent(searchParams.get("intent")), [searchParams]);
  const [activeIntentId, setActiveIntentId] = useState<IntentId>(initialIntent.id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const activeIntent = getIntent(activeIntentId);
  const mailtoBody = [
    name ? `Name: ${name}` : "",
    email ? `Email: ${email}` : "",
    "",
    message || activeIntent.placeholder
  ]
    .filter(Boolean)
    .join("\n");

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(activeIntent.subject)}&body=${encodeURIComponent(mailtoBody)}`;

  return (
    <form className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <div className="grid gap-2">
        <label className="text-sm font-medium text-zinc-200">Inquiry type</label>
        <div className="flex flex-wrap gap-2">
          {contactIntents.map((intent) => (
            <button
              key={intent.id}
              type="button"
              onClick={() => setActiveIntentId(intent.id)}
              className={`rounded-md border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-950 ${
                activeIntentId === intent.id
                  ? "border-cyan-300 bg-cyan-300 text-zinc-950"
                  : "border-white/10 text-zinc-300 hover:border-cyan-300/40 hover:bg-white/5"
              }`}
            >
              {intent.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-zinc-200">
          Name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-12 w-full rounded-md border border-white/10 bg-zinc-950 px-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-300"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-200">
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-12 w-full rounded-md border border-white/10 bg-zinc-950 px-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-300"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-zinc-200">
        Message
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-40 w-full resize-y rounded-md border border-white/10 bg-zinc-950 px-3 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-300"
          placeholder={activeIntent.placeholder}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-zinc-500">
          This form still opens your email client for now, but it now includes the name, email, and message you entered.
        </p>
        <a
          href={mailtoHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
        >
          <Send size={16} />
          Email Emil
        </a>
      </div>
    </form>
  );
}
