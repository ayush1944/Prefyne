"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { prisma } from "@/lib/prisma";

export async function deletePrompt(promptId: string) {
    // get session details
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

// find the user
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if(!user){
    throw new Error("User not Found!")
  }

  await prisma.prompt.deleteMany({
    where: {
        id: promptId,
        userId: user.id
    }
  })
}
