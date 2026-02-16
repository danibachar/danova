interface StepAddressProps {
  zip: string;
  addressOptional: string;
  onZipChange: (value: string) => void;
  onAddressOptionalChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  error?: string;
  hint?: string;
}

const ZIP_REGEX = /^\d{5}$/;

export function isValidZip(zip: string): boolean {
  return ZIP_REGEX.test(zip.trim());
}

export function StepAddress({
  zip,
  addressOptional,
  onZipChange,
  onAddressOptionalChange,
  onNext,
  onBack,
  error,
  hint,
}: StepAddressProps) {
  const valid = isValidZip(zip);

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Where is your project? We serve Fort Lauderdale, Miami, and surrounding
        areas.
      </p>
      <div className="space-y-4">
        <div>
          <label htmlFor="zip" className="block text-sm font-medium">
            Zip code <span className="text-muted-foreground">(required)</span>
          </label>
          <input
            id="zip"
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={zip}
            onChange={(e) => onZipChange(e.target.value.replace(/\D/g, "").slice(0, 5))}
            placeholder="33001"
            className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
            aria-invalid={!!error}
            aria-describedby={error ? "zip-error" : undefined}
          />
          {error && (
            <p id="zip-error" className="mt-1 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
          {hint && !error && (
            <p className="mt-1 text-sm text-muted-foreground">{hint}</p>
          )}
        </div>
        <div>
          <label htmlFor="addressOptional" className="block text-sm font-medium">
            Full address or city <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="addressOptional"
            type="text"
            value={addressOptional}
            onChange={(e) => onAddressOptionalChange(e.target.value)}
            placeholder="e.g. Fort Lauderdale, FL"
            className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-lg border border-border bg-background px-4 py-3 font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!valid}
          className="flex-1 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}
