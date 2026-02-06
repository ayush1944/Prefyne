"use server";

import { refineWithAI } from "@/lib/refine";

export async function refinePrompt(rawInput: string, prevRefined?: string) {
  try {
    if (!rawInput?.trim()) {
      throw new Error("Empty input");
    }

    const result = await refineWithAI(rawInput, prevRefined);

    return result;
  } catch (err) {
    console.error("AI Error:", err);
    throw new Error("AI refinement failed");
  }
}
