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
  placeholder="Describe your rough idea..."
  disabled={disabled}
  className="
    w-full min-h-[150px] resize-none rounded-lg border
    bg-card text-foreground
    border-border
    p-4 text-sm outline-none
    focus:ring-2 focus:ring-cyan-500
    disabled:opacity-60
  "
/>

    );
}
