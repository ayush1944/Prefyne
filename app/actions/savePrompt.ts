"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { prisma } from "@/lib/prisma";

export async function savePrompt(
  rawInput: string,
  refinedOutput: string,
  promptId?: string
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const prompt = await prisma.prompt.create({
    data: {
      rawInput,
      refinedOutput,
      userId: user.id,
    },
  });

  // if (promptId) {
  //   return prisma.prompt.updateMany({
  //     where: {
  //       id: promptId,
  //       userId: user.id,
  //     },
  //     data: {
  //       rawInput,
  //       refinedOutput,
  //     },
  //   });
  // }

  return prompt;
}
