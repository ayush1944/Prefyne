// import React from 'react'

// function Profile() {
//   return (
//     <div>
//       Profile
//       here will be user info and settings also list of prompts created by the user.
//       in setting user can update his profile info like name, email etc.  
//       but on click the logout button user will be logged out and redirected to home page.
//       also when user click on profile this page will be opened with list of prompts created by the user with user info as header of this page.
//       and then in bottom i will add a button to create new prompt which will redirect to prompt creation page. also setting icon to update profile info.

//     </div>
//   )
// }

// export default Profile

import { getMyPrompts } from "@/app/actions/getMyPrompts";
import SavedPromptItem from "@/components/SavedPromptItem";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

export default async function ProfilePage() {
  const prompts = await getMyPrompts();

  if (prompts === null) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <p className="text-muted-foreground text-3xl">
          Please sign in to view your saved prompts.
        </p>

      </main>
    );
  }


  if (prompts.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <p className="text-muted-foreground text-3xl">
          You haven’t saved any prompts yet.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex justify-center px-4 py-16">
      <div className="w-full max-w-2xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            Your saved prompts :
          </h1>

          {/* <Link href={"/dashboard"} className="flex items-center justify-center gap-2 hover:opacity-50 px-2">
            <h1 className="hidden lg:block">Generate Your New Prompt </h1>
            <FiPlus />
          </Link> */}
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 px-2 hover:opacity-50"
          >
            {/* Text only on large screens */}
            <h1 className="hidden lg:block font-medium">
              Generate Your New Prompt
            </h1>

            {/* Plus icon */}
            <FiPlus
              className="font-bold text-3xl md:text-4xl lg:text-xl"
            />
          </Link>
        </div>
        {prompts.map((prompt) => (
          <SavedPromptItem
            key={prompt.id}
            id={prompt.id}
            rawInput={prompt.rawInput}
            refinedOutput={prompt.refinedOutput}
          />
        ))}
      </div>
    </main>
  );
}
