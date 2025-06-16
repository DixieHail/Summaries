import Link from "next/link";

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

export { summaries };

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="py-12 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">Housing Market Executive Briefs</h1>
        <p className="text-md text-gray-500">Curated weekly summaries featuring Logan Mohtashami</p>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-16">
          {summaries.map((summary) => (
            <article key={summary.id} className="group border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-1 text-blue-900">
                <Link href={`/${summary.slug}`} className="hover:underline">
                  {summary.title}
                </Link>
              </h2>
              <div className="text-sm text-gray-500 mb-2">
                {summary.date} • Guest: {summary.guest} • Host: {summary.host}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {summary.summary.split("\n\n")[0]}...
              </p>
              <Link
                href={`/${summary.slug}`}
                className="inline-block mt-3 text-blue-600 text-sm font-medium hover:underline"
              >
                Read full summary ↗
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="text-center text-sm text-gray-400 py-8">
        Built by Isaiah Tabach • Powered by HousingWire insights
      </footer>
    </div>
  );
}
