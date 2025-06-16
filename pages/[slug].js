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
    summary: `In this episode, Logan Mohtashami unpacks the current housing and economic landscape as the second half of 2025 approaches. He focuses on the Federal Reserve’s positioning, political tensions surrounding interest rates, inflation trends, and the performance of mortgage purchase application data.

Key Themes:
• Fed vs. White House tensions over rate direction and inflation narrative
• Labor market strength preventing Fed cuts despite cooling inflation
• Continued disinflation and tariff-driven politicization
• Mortgage purchase application data showing strength amid soft comps`
  },
  {
    id: "2",
    slug: "why-housing-is-healthier-2025",
    title: "Why Housing is Healthier in 2025",
    date: "April 28, 2025",
    guest: "Logan Mohtashami",
    host: "Sarah Wheeler",
    source: "https://www.youtube.com/watch?v=rYfbiPRTe-c",
    summary: `Logan Mohtashami presents a data-driven case for why the U.S. housing market is healthier in 2025 compared to prior years. He points to stabilized mortgage rates, improving inventory, and more rational buyer behavior.

Key Themes:
• Normalization of mortgage rates and reduction in rate shock
• Inventory recovery easing pressure on buyers
• Transition to a more stable and sustainable market dynamic
• Emphasis on reading beyond negative headlines`
  }
];

export default function SummaryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const summary = summaries.find((s) => s.slug === slug);

  if (!summary) return <div className="p-8 text-center text-gray-500">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-gray-900 font-sans px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-red-700 text-sm mb-6 inline-block hover:underline">← Back to All Summaries</Link>

        <div className="bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-5xl font-extrabold text-red-700 mb-4 leading-tight tracking-tight">
            {summary.title}
          </h1>
          <div className="text-base text-gray-500 mb-6">
            {summary.date} • Guest: {summary.guest} • Host: {summary.host}
          </div>

          <article className="prose prose-lg text-gray-800 max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-[17px] leading-8">
              {summary.summary}
            </pre>
          </article>

          <div className="mt-8">
            <a
              href={summary.source}
              className="inline-block bg-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition"
              target="_blank"
            >
              Listen to Episode ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
