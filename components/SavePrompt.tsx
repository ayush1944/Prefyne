type SavePromptProps = {
    prompt: string;
    onClick: () => void;
    disabled?: boolean;
    isLoading?: boolean;
    status?: "saved" | "unsaved";
};

export default function SavePrompt({
    prompt,
    onClick,
    isLoading,
    status,
}: SavePromptProps) {
    return (
        <button
            disabled={isLoading || !prompt}
            onClick={onClick}   
            className={`rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 ${status === "saved" ? "cursor-not-allowed" : "cursor-pointer"}`}>
            {
                isLoading ? "Saving..." : status === "saved" ? "Prompt Saved" : "Save Prompt"
            } 

        </button>
    );
}
