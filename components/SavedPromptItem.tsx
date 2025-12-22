"use client";

import { useState } from "react";
import { deletePrompt } from "@/app/actions/deletePrompt";
import PromptOutput from "./PromptOutput";
import { useRouter } from "next/navigation";

type SavedPromptItemProps = {
    id: string;
    rawInput: string;
    refinedOutput: string;
};

export default function SavedPromptItem({
    id,
    rawInput,
    refinedOutput,
}: SavedPromptItemProps) {
    const [isDeleting, setIsDeleting] = useState(false);

    const router = useRouter();

    const handleDelete = async () => {
        if (isDeleting) return;

        setIsDeleting(true);
        try {
            await deletePrompt(id);
             router.refresh();
        } catch (err) {
            console.error("Delete failed", err);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="space-y-2 rounded-lg border bg-muted/40 p-4">
            <div className="flex justify-between items-start">
                <p className="text-xs text-muted-foreground opacity-70">
                    Raw input :
                </p>

                <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="text-xs disabled:opacity-50"
                >
                    {isDeleting ? "Deleting…" : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>)}
                </button>
            </div>

            <p className="text-sm">
                {rawInput}
            </p>

            <p className="text-xs text-muted-foreground pt-2 opacity-70">
                Refined prompt :
            </p>
            <PromptOutput output={refinedOutput} />
        </div>
    );
}
