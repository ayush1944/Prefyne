type RefineMoreProps = {
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};

export default function RefineMore({
  onClick,
  disabled,
  isLoading,
}: RefineMoreProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer">
      {isLoading ? "Refining…" : "Refine More"}
    </button>
  );
}
