"use client";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { i18n } from "@/lib/i18n";

export default function ContactForm() {
  const { lang } = useLanguage();
  const t = i18n.footer;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const res = await fetch("https://formspree.io/f/xeevbzqr", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setLoading(false);
    if (res.ok) setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-sm text-zinc-500">{t.thanks[lang]}</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-zinc-400 uppercase tracking-widest">{t.name[lang]}</label>
          <input
            name="name"
            type="text"
            required
            placeholder={t.namePlaceholder[lang]}
            className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-black dark:text-white placeholder-zinc-300 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-zinc-400 uppercase tracking-widest">{t.email[lang]}</label>
          <input
            name="email"
            type="email"
            required
            placeholder={t.emailPlaceholder[lang]}
            className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-black dark:text-white placeholder-zinc-300 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition-colors"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-zinc-400 uppercase tracking-widest">{t.message[lang]}</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder={t.msgPlaceholder[lang]}
          className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-black dark:text-white placeholder-zinc-300 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="text-sm font-medium bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-lg hover:opacity-70 transition-opacity disabled:opacity-40"
      >
        {loading ? t.sending[lang] : t.send[lang]}
      </button>
    </form>
  );
}
