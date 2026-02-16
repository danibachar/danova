interface StepPersonalProps {
  name: string;
  phone: string;
  email: string;
  onNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  errors?: { name?: string; phone?: string };
}

export function StepPersonal({
  name,
  phone,
  email,
  onNameChange,
  onPhoneChange,
  onEmailChange,
  onNext,
  onBack,
  errors = {},
}: StepPersonalProps) {
  const nameValid = name.trim().length > 0;
  const phoneValid = phone.trim().length >= 10;

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        How can we reach you? We&apos;ll call or email within 24 hours.
      </p>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name <span className="text-muted-foreground">(required)</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Your name"
            required
            className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone <span className="text-muted-foreground">(required)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            placeholder="(555) 555-5555"
            required
            className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="your@email.com"
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
          disabled={!nameValid || !phoneValid}
          className="flex-1 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}
