import type { ProjectType } from "@/app/types";

interface StepProjectTypeProps {
  value: ProjectType;
  onChange: (value: ProjectType) => void;
  onNext: () => void;
}

const OPTIONS: { value: ProjectType; label: string; sublabel: string }[] = [
  { value: "paint", label: "Paint", sublabel: "Interior, exterior, commercial" },
  { value: "floor", label: "Floor", sublabel: "Hardwood, tile, laminate" },
];

export function StepProjectType({ value, onChange, onNext }: StepProjectTypeProps) {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        What type of project do you have in mind?
      </p>
      <div className="space-y-3">
        {OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className="flex w-full flex-col items-start rounded-lg border border-border bg-background px-4 py-3 text-left transition-colors hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
            aria-pressed={value === opt.value}
          >
            <span className="font-medium">{opt.label}</span>
            <span className="text-sm text-muted-foreground">{opt.sublabel}</span>
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={onNext}
        disabled={!value}
        className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Next
      </button>
    </div>
  );
}
