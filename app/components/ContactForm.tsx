"use client";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

const fieldClasses =
  "bg-white dark:bg-zinc-800 border border-[#85858e] dark:border-[#707079] rounded-lg px-4 py-2.5 text-sm text-black dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:border-zinc-600 dark:focus:border-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-500 dark:focus-visible:ring-zinc-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900 transition-colors";

export default function ContactForm({ t }: { t: Dictionary["footer"] }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://formspree.io/f/xeevbzqr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <p role="status" aria-live="polite" className="text-sm text-zinc-600 dark:text-zinc-400">
        {t.thanks}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
            {t.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t.namePlaceholder}
            className={fieldClasses}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
            {t.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            className={fieldClasses}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
          {t.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder={t.messagePlaceholder}
          className={`${fieldClasses} resize-none`}
        />
      </div>
      {error && (
        <p role="alert" className="text-sm text-red-700 dark:text-red-400">
          {t.error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="text-sm font-medium bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-lg hover:opacity-70 transition-opacity disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:focus-visible:ring-zinc-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900"
      >
        {loading ? t.sending : t.send}
      </button>
    </form>
  );
}
