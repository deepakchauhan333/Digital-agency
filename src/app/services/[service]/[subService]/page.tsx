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
  return {
    title: `${data.name} — ${data.parentName} Services | Growthpedia Agency`,
    description: data.heroSubtext.slice(0, 155),
    alternates: { canonical: `/services/${service}/${subService}` },
    keywords: [data.name, data.parentName, `${data.name} services`, `${data.name} agency India`, `${data.parentName} services`],
    openGraph: {
      title: `${data.name} — ${data.parentName} | Growthpedia Agency`,
      description: data.heroSubtext.slice(0, 155),
      url: `https://growthpedia.in/services/${service}/${subService}`,
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
