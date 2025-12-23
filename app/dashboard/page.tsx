"use client";

import { useEffect, useState } from "react";
import PromptInput from "@/components/PromptInput";
import PromptOutput from "@/components/PromptOutput";
import RefineButton from "@/components/RefineButton";
import RefineMore from "@/components/RefineMore";
import { refinePrompt } from "@/app/actions/refinePrompt";
import { useSession } from "next-auth/react";
import SavePrompt from "@/components/SavePrompt";
import AuthModal from "@/components/AuthModal";
import { savePrompt } from "../actions/savePrompt";
import { useSearchParams } from "next/navigation";
import { getPromptById } from "../actions/getPromptById";


export default function DashboardPage() {
  const [rawInput, setRawInput] = useState("");
  const [refinedOutput, setRefinedOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const searchParams = useSearchParams();
  const promptId = searchParams.get("promptId")

  useEffect(() => {
    if (!promptId) return;
    (async () => {
      const prompt = await getPromptById(promptId);
      if (!prompt) return;

      setRawInput(prompt.rawInput);
      setRefinedOutput(prompt.refinedOutput);
      setIsSaved(true)
    })();
  }, [promptId])


  const { data: session } = useSession();
  const isLoggedIn = !!session;
  // console.log("User logged in:", isLoggedIn);


  const handleRawInputChange = (value: string) => {
    setRawInput(value);
    setRefinedOutput("");
    setIsSaved(false);
    setError(null);
  };


  const handleRefine = async () => {
    if (isLoading) return; // it will prevent multiple clicks but i have disabled the button during loading anyway

    setError(null);
    setIsLoading(true);

    try {
      const result = await refinePrompt(rawInput);
      setRefinedOutput(result);
    } catch (err) {
      setError("Failed to refine. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefineMore = async () => {
    if (isLoading) return; // it will prevent multiple clicks but i have disabled the button during loading anyway

    setError(null);
    setIsLoading(true);

    try {
      const result = await refinePrompt(rawInput, refinedOutput);
      setRefinedOutput(result);
      setIsSaved(false);
    } catch (err) {
      console.error(err);
      setError("Could not refine further. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSavePrompt = async () => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
      return;
    }

    try {
      await savePrompt(rawInput, refinedOutput, promptId ?? undefined);
      setIsSaved(true)
    } catch (err) {
      console.log(err)
      setError("Failed to Save Prompt!")
    }
  };


  // this effect will close the auth modal if user logs in
  useEffect(() => {
    if (isLoggedIn && showAuthModal) {
      setShowAuthModal(false);
    }
  }, [isLoggedIn, showAuthModal]);

  return (
    <main className="min-h-screen flex justify-center px-4 py-16">
      <div className="w-full max-w-2xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold">
            Refine your rough idea
          </h1>
          <p className="text-muted-foreground">
            Turn raw thoughts into clear prompts
          </p>
        </header>

        <PromptInput
          value={rawInput}
          onChange={handleRawInputChange}
          disabled={isLoading}
        />

        <div className="flex justify-end">
          {
            !refinedOutput.trim() ? (
              <RefineButton
                disabled={isLoading || !rawInput.trim()}
                isLoading={isLoading}
                onClick={handleRefine}
              />
            ) : (
              <RefineMore
                disabled={isLoading || !refinedOutput.trim()}
                isLoading={isLoading}
                onClick={handleRefineMore}
              />
            )
          }
        </div>

        {isLoading && <PromptOutput output="Refining your idea…" />}
        {error && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
            {error}
          </div>
        )}
        {!isLoading && !error && refinedOutput && (
          <>
            <PromptOutput output={refinedOutput} />
            <div className="flex justify-end">
              <SavePrompt
                status={isSaved ? "saved" : "unsaved"}
                prompt={refinedOutput}
                disabled={isSaved}
                onClick={handleSavePrompt} />
            </div>
          </>
        )}
      </div>
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}

    </main>
  );
}

