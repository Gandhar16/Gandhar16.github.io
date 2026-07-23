import Link from "next/link";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-6 py-24">
      <p className="mb-4 font-mono text-sm uppercase tracking-widest text-teal-600 dark:text-teal-400">
        {profile.location}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
        {profile.name}
      </h1>
      <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">{profile.title}</p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        {profile.tagline}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/resume"
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          View Resume
        </Link>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
        >
          LinkedIn
        </a>
        <a
          href={profile.email}
          className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
        >
          Email
        </a>
      </div>
    </section>
  );
}
