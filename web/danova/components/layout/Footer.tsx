import Link from "next/link";
import { SITE, CONTACT, ALL_SERVICES, CITIES } from "@/lib/constants";

const footerServiceLinks = ALL_SERVICES.slice(0, 6);
const footerCityLinks = CITIES.slice(0, 6);

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 font-serif text-lg font-bold">{SITE.name}</h3>
            <p className="text-sm text-muted-foreground">{SITE.description}</p>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="mt-2 block text-sm font-medium text-primary hover:underline"
            >
              {CONTACT.phone}
            </a>
            <p className="text-sm text-muted-foreground">{CONTACT.address.full}</p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Our Services</h4>
            <ul className="space-y-2">
              {footerServiceLinks.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Service Area</h4>
            <ul className="space-y-2">
              {footerCityLinks.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/service-area/${c.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/service-area"
              className="mt-2 block text-sm font-medium text-primary hover:underline"
            >
              View all areas
            </Link>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Learn More</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/service-area"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Service Area
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Site Map
            </Link>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-4">
          <a
            href={CONTACT.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
            aria-label="Instagram"
          >
            <span className="text-sm">Instagram</span>
          </a>
          <a
            href={CONTACT.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
            aria-label="Facebook"
          >
            <span className="text-sm">Facebook</span>
          </a>
          <a
            href={CONTACT.social.pinterest}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
            aria-label="Pinterest"
          >
            <span className="text-sm">Pinterest</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
