"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-xl border p-6 shadow-sm">
        <h1 className="mb-2 text-center text-2xl font-semibold">
          Welcome to Prefyne
        </h1>
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Sign in to continue
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex w-full items-center justify-center gap-3 rounded-md border px-4 py-2 transition hover:bg-muted"
        >
          <FcGoogle size={20} />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
