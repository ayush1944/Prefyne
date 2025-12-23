"use client";

import { useState } from "react";
import { deletePrompt } from "@/app/actions/deletePrompt";
import PromptOutput from "./PromptOutput";
import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

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
        setTimeout(() => {
            try {
                deletePrompt(id);
                router.refresh();
            } catch (err) {
                console.error("Delete failed", err);
            } finally {
                setIsDeleting(false);
            }
        }, 1000);
    };

    const handleRefineAgain = () => {
        router.push(
            `/dashboard?promptId=${id}`
        )
    }
    return (
        <div className="space-y-2 rounded-lg border bg-muted/40 p-4">
            <div className="flex justify-between items-start">
                <p className="text-xs text-muted-foreground opacity-70">
                    Raw input :
                </p>

                <div className="flex justify-content-center items-center gap-2">
                    <button className="text-xl disabled:opacity-50 cursor-pointer hover:opacity-50"
                        onClick={handleRefineAgain}
                    >
                        <BiEdit />
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="text-xl  disabled:opacity-50 cursor-pointer hover:opacity-50"
                    >
                        {isDeleting ? <span className="text-sm">Deleting…</span> : (
                            <MdDeleteForever />
                        )}
                    </button>
                </div>
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
