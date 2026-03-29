import { notFound } from "next/navigation";

/**
 * This route exists only to prevent the [service] dynamic segment
 * from shadowing the static service folders (seo, paid-ads, etc.)
 * in Next.js App Router + Turbopack. All main service pages are
 * handled by their own static page.tsx files.
 */
export default function ServiceCatchAll() {
  notFound();
}
