type UpdatePromptProps = {
    prompt: string;
    onClick: () => void;
    disabled?: boolean;
    isLoading?: boolean;
    status?: "updated" | "unupdated";
};

export default function UpdatePrompt({
    prompt,
    onClick,
    isLoading,
    status,
}: UpdatePromptProps) {
    return (
        <button
            disabled={isLoading || !prompt}
            onClick={onClick}   
            className={`rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 ${status === "updated" ? "cursor-not-allowed" : "cursor-pointer"}`}>
            {
                isLoading ? "Updating..." : status === "updated" ? "Prompt Updated" : "Update Prompt"
            } 

        </button>
    );
}
