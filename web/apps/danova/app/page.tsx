import { Hero } from "@/components/home/Hero";
import { FAQSchema } from "@/components/shared/StructuredData";
import { HOME_FAQ } from "@/lib/content/faq";
import { Stats } from "@/components/home/Stats";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { ServiceArea } from "@/components/home/ServiceArea";
import { FaqSection } from "@/components/home/FaqSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FooterCta } from "@/components/home/FooterCta";

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={HOME_FAQ} />
      <Hero />
      <Stats />
      <ServicesGrid />
      <Process />
      <Testimonials />
      <ServiceArea />
      <FaqSection />
      <BlogPreview />
      <FooterCta />
    </>
  );
}
