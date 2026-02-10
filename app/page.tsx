"use client";

import { Metadata } from "next";
import Link from "next/link";
import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  // const router = useRouter();

  const isLoggedIn = !!session;

  // // ✅ Redirect when logged in
  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push("/dashboard");
  //   }
  // }, [status, router]);

  // Optional: loading state
  if (status === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center">
        Loading...
      </main>
    );
  }

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

          {/* Primary Button */}
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="
                rounded-md px-6 py-3 font-medium
                transition-all duration-200
                bg-black text-white hover:bg-slate-800
                dark:bg-white dark:text-black dark:hover:bg-slate-200
                shadow-sm hover:shadow-md
              "
            >
              Get Started Free
            </Link>
          ) : (
            <Link
              href="/dashboard"
              className="
                rounded-md px-6 py-3 font-medium
                transition-all duration-200
                bg-black text-white hover:bg-slate-800
                dark:bg-white dark:text-black dark:hover:bg-slate-200
                shadow-sm hover:shadow-md
              "
            >
              Go to Dashboard
            </Link>
          )}

          {/* Secondary */}
          <Link
            href="/dashboard"
            className="rounded-md border border-border px-6 py-3 font-medium text-foreground transition cursor-pointer hover:bg-white/20 hover:text-cyan-300 "
          >
            Try as Guest
          </Link>

        </div>
      </div>
    </main>
  );
}
