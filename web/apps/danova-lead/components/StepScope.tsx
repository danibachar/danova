interface StepScopeProps {
  scope: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
  error?: string;
}

export function StepScope({
  scope,
  onChange,
  onSubmit,
  onBack,
  isSubmitting,
  error,
}: StepScopeProps) {
  const valid = scope.trim().length > 0;

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Tell us about your project so we can prepare an accurate quote.
      </p>
      <div>
        <label htmlFor="scope" className="block text-sm font-medium">
          Project details <span className="text-muted-foreground"></span>
        </label>
        <textarea
          id="scope"
          value={scope}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. 3 bedrooms, living room, hallway. Timeline or special requests."
          rows={4}
          // required
          className="mt-1 w-full resize-y rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
          aria-invalid={!!error}
          aria-describedby={error ? "scope-error" : undefined}
        />
        {error && (
          <p id="scope-error" className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="rounded-lg border border-border bg-background px-4 py-3 font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={!valid || isSubmitting}
          className="flex-1 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {isSubmitting ? "Submitting..." : "Get my quote"}
        </button>
      </div>
    </div>
  );
}
