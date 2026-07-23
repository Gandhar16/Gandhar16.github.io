import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-zinc-200 py-12 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Get in touch</h2>
        <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
          Open to interesting conversations about distributed systems, search, and machine learning.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href={profile.email} className="text-teal-600 hover:underline dark:text-teal-400">
            Email
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-teal-600 hover:underline dark:text-teal-400">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-teal-600 hover:underline dark:text-teal-400">
            LinkedIn
          </a>
          <span className="text-zinc-500 dark:text-zinc-500">{profile.phone}</span>
        </div>
        <p className="mt-6 text-xs text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
