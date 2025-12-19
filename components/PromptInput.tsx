type PromptInputProps = {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
};

export default function PromptInput({ value, onChange, disabled }: PromptInputProps) {
    return (
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Describe your rough idea, thought, or instruction…"
            disabled={disabled}
            className="w-full min-h-[150px] border-muted-foreground/20 focus:border-ring rounded-lg border bg-background p-4 text-sm outline-none resize-none focus:ring-2 focus:ring-ring" />
    );  
}
