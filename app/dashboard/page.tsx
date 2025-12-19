"use client";

import { useState } from "react";
import PromptInput from "@/components/PromptInput";
import PromptOutput from "@/components/PromptOutput";
import RefineButton from "@/components/RefineButton";
import RefineMore from "@/components/RefineMore";

export default function DashboardPage() {
  const [rawInput, setRawInput] = useState("");
  const [refinedOutput, setRefinedOutput] = useState("");

  const handleRefine = () => {
    setRefinedOutput(`Refined version of: ${rawInput}`);
  };
  const handleRefineMore = () => {
    setRefinedOutput((prev) => prev + " + further refinement");
  };

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
          onChange={setRawInput}
        />

        <div className="flex justify-end">
          {
            !refinedOutput.trim() ? (
         <RefineButton
            disabled={!rawInput.trim()}
            onClick={handleRefine}
          />
            ) : (
          <RefineMore
            disabled={!refinedOutput.trim()}
            onClick={handleRefineMore}
          />
            )
          }
        </div>

        <PromptOutput output={refinedOutput} />
      </div>
    </main>
  );
}
