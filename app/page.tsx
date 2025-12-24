import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refine AI Prompts from Raw Ideas",
  description:
    "Turn rough thoughts into clean, effective AI prompts. Use Prefyne to refine prompts for ChatGPT, Gemini, and more.",
};


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        Welcome to Prefyne
      </h1>
      <Link
        href="/dashboard"
        className="rounded-md border px-6 py-2 transition hover:bg-foreground hover:text-background"
      >
        Get Started
      </Link>
    </main>
  );
}
