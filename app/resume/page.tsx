import { profile } from "@/data/profile";

export const metadata = {
  title: `Resume — ${profile.name}`,
};

export default function ResumePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Resume</h1>
        <a
          href="/resume.pdf"
          download
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Download PDF
        </a>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
        <embed
          src="/resume.pdf"
          type="application/pdf"
          className="h-[92vh] min-h-[900px] w-full"
        />
      </div>
    </main>
  );
}
