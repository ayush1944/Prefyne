"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { prisma } from "@/lib/prisma";

export async function getMyPrompts() {
    const session = await getServerSession(authOptions);

      if (!session?.user?.email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
        email : session.user.email
    },
  })

   if (!user) {
    return [];
  }

  const prompts = await prisma.prompt.findMany({
    where: {
        userId: user.id,
    },
    orderBy:{
        createdAt: "desc"
    }
  })

  return prompts;
}