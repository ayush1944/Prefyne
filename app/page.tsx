import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refine AI Prompts from Raw Ideas",
  description:
    "Turn rough thoughts into clean, effective AI prompts. Use Prefyne to refine prompts for ChatGPT, Gemini, and more.",
};

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 text-center bg-background">
      <div className="relative z-10 max-w-3xl">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
          Turn Rough Ideas Into <br />
          <span className="text-cyan-500">Powerful AI Prompts</span>
        </h1>

        <p className="mt-4 text-muted-foreground md:text-lg">
          Refine messy thoughts into clear, reusable prompts for ChatGPT,
          Gemini, and more
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            href="/login"
            className="
    rounded-md px-6 py-3 font-medium transition-all duration-200

    bg-black text-white hover:bg-gray-800
    dark:bg-white dark:text-black dark:hover:bg-gray-200

    shadow-sm hover:shadow-md
  "
          >
            Get Started Free
          </Link>


          {/* Secondary */}
          <Link
            href="/dashboard"
            className="rounded-md border border-border px-6 py-3 font-medium text-foreground transition hover:bg-accent"
          >
            Try as Guest
          </Link>
        </div>

        {/* Feature Cards */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

          {[
            {
              title: "Instant Refinement",
              desc: "Convert rough ideas into structured AI prompts.",
            },
            {
              title: "Iterative Improvement",
              desc: "Refine prompts multiple times with one click.",
            },
            {
              title: "Private & Secure",
              desc: "Your data stays private to your account.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-card border border-border shadow-sm"
            >
              <h3 className="text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}
