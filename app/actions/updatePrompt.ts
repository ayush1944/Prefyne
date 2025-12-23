"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { prisma } from "@/lib/prisma";

export async function updatePrompt(
  promptId?: string,
  newRefinedOutput?: string
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (promptId) {
    await prisma.prompt.update({
      where: {
        id: promptId,
      },
      data: {
        refinedOutput: newRefinedOutput,
      },
    });
  }

  return prompt;
}
