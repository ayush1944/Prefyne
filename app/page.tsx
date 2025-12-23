import Link from "next/link";

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
