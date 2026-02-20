import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/shared/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/lib/content/services";

const SLUGS = Object.keys(SERVICE_DETAILS);

export async function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];
  if (!service) notFound();
  return <ServiceDetailTemplate service={service} />;
}
