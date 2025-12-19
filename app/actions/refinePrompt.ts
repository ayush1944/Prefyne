"use server";

export async function refinePrompt(
  rawInput: string,
  prevRefined?: string
) {

  await new Promise((res) => setTimeout(res, 500));

  if (prevRefined) {
    return `${prevRefined} + further refinement (server)`;
  }

  return `Refined version of: ${rawInput} (server)`;
}
