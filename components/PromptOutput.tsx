type PromptOutputProps = {
  output: string;
};

export default function PromptOutput({
  output,
}: PromptOutputProps) {
  if (!output) return null;

  return (
    <div className="rounded-lg border bg-muted/40 p-4">
      <p className="text-sm leading-relaxed">
        {output}
      </p>
    </div>
  );
}
