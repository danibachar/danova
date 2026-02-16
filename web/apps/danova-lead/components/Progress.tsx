const TOTAL_STEPS = 4;

interface ProgressProps {
  current: number;
}

export function Progress({ current }: ProgressProps) {
  return (
    <div className="flex items-center justify-center gap-2" aria-label="Progress">
      {Array.from({ length: TOTAL_STEPS }, (_, i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-current transition-colors"
          style={{
            opacity: i + 1 <= current ? 1 : 0.3,
          }}
          aria-hidden
        />
      ))}
      <span className="ml-2 text-sm text-muted-foreground">
        Step {current} of {TOTAL_STEPS}
      </span>
    </div>
  );
}
