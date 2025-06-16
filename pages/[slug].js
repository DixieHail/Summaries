import Link from "next/link";
import { useRouter } from "next/router";

const summaries = [
  {
    id: "1",
    slug: "housing-market-outlook-2025",
    title: "The Housing Market Outlook for 2025",
    date: "June 3, 2025",
    guest: "Logan Mohtashami",
    host: "Sarah Wheeler",
    source: "https://www.youtube.com/watch?v=ZKS1i9DAjJw",
    summary: `Logan Mohtashami breaks down the tension between the Fed and the White House over mortgage rates, how inflation data is trending, and what purchase application growth means for housing health in mid-2025.

Key Themes:
• Fed vs. White House policy dynamics
• Disinflation trend and credibility risks
• Purchase applications gaining traction
• Political fallout heading into late 2025`
  },
  {
    id: "2",
    slug: "why-housing-is-healthier-2025",
    title: "Why Housing is Healthier in 2025",
    date: "April 28, 2025",
    guest: "Logan Mohtashami",
    host: "Sarah Wheeler",
    source: "https://www.youtube.com/watch?v=rYfbiPRTe-c",
    summary: `Despite recession fears, Logan outlines how rising inventory and stable mortgage rates are returning the market to a more balanced and sustainable footing.

Key Themes:
• Rate normalization and adjusted buyer behavior
• Inventory trends indicating health
• Media narratives vs. macro fundamentals`
  }
];

export default function SummaryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const summary = summaries.find((s) => s.slug === slug);

  if (!summary) return <div className="p-8 text-center text-gray-500">Loading...</div>;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-4 py-16">
      <main className="max-w-2xl mx-auto">
        <Link href="/" className="text-sm text-red-600 hover:underline mb-4 inline-block">
          ← Back to Executive Briefs
        </Link>

        <h1 className="text-4xl font-bold text-red-700 mb-3 tracking-tight">
          {summary.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {summary.date} • Guest: {summary.guest} • Host: {summary.host}
        </p>

        <article className="text-[16px] leading-7 text-gray-800 whitespace-pre-wrap">
          {summary.summary}
        </article>

        <a
          href={summary.source}
          className="inline-block mt-8 text-sm text-red-600 font-medium hover:underline"
          target="_blank"
        >
          Listen to Episode ↗
        </a>

        <footer className="mt-20 pt-12 text-sm text-gray-400 border-t">
          © 2025 Keller Williams Research
        </footer>
      </main>
    </div>
  );
}
