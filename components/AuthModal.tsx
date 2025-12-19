"use client";

import { signIn } from "next-auth/react";

type AuthModalProps = {
  onClose: () => void;
};

export default function AuthModal({ onClose }: AuthModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 dark:bg-white/20 backdrop-blur-xl animate-fadeIn">
      <div className="w-full max-w-sm rounded-lg bg-primary p-6 shadow-lg space-y-4">
        <h2 className="text-lg font-semibold">
          Save your prompts
        </h2>

        <p className="text-sm text-muted-foreground">
          Create a free account to save and reuse your prompts later.
        </p>

        <div className="flex justify-between pt-2">
          <button
            onClick={onClose}
            className="rounded-md border px-4 py-2 text-sm cursor-pointer font-medium"
          >
            Cancel
          </button>

          <button
            onClick={() => signIn("google")}
            className="rounded-md bg-primary cursor-pointer px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
