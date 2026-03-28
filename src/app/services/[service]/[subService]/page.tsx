import { Metadata } from "next";
import { notFound } from "next/navigation";
import SubServicePageTemplate from "@/components/services/SubServicePageTemplate";
import { getSubServiceData, getAllSubServiceParams } from "@/data/sub-service-registry";

interface Props {
  params: Promise<{ service: string; subService: string }>;
}

export async function generateStaticParams() {
  return getAllSubServiceParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service, subService } = await params;
  const data = getSubServiceData(service, subService);
  if (!data) return { title: "Not Found" };

  const BASE = "https://www.allindiamarketingsolution.com";
  const canonicalUrl = `${BASE}/services/${service}/${subService}`;
  // Title: focus keyword first for maximum SEO weight
  const titleFocus = `${data.name} Services India`;
  const description = data.heroSubtext.length > 155
    ? data.heroSubtext.slice(0, 152) + "..."
    : data.heroSubtext;

  return {
    title: `${titleFocus} — ${data.parentName} Agency | All India Marketing Solution`,
    description,
    alternates: { canonical: canonicalUrl },
    keywords: [
      data.name,
      `${data.name} India`,
      `${data.name} services`,
      `${data.name} agency India`,
      data.parentName,
      `${data.parentName} services India`,
      `${data.parentName} company India`,
      "All India Marketing Solution",
    ],
    openGraph: {
      title: `${data.name} — ${data.parentName} | All India Marketing Solution`,
      description,
      url: canonicalUrl,
      type: "website",
    },
  };
}

export default async function SubServicePage({ params }: Props) {
  const { service, subService } = await params;
  const data = getSubServiceData(service, subService);
  if (!data) notFound();
  return <SubServicePageTemplate data={data} />;
}
