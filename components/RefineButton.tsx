type RefineButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export default function RefineButton({
  onClick,
  disabled,
}: RefineButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50">
      Refine
    </button>
  );
}
