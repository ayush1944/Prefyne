"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { prisma } from "@/lib/prisma";

export async function savePrompt(
  rawInput: string,
  refinedOutput: string
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.upsert({
    where: { email: session.user.email },
    update: {},
    create: {
      email: session.user.email,
      name: session.user.name,
    },
  });

  const prompt = await prisma.prompt.create({
    data: {
      rawInput,
      refinedOutput,
      userId: user.id,
    },
  });

  return prompt;
}
