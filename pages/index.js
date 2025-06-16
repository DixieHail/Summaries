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
    summary: `Logan Mohtashami breaks down the tension between the Fed and the White House over mortgage rates, how inflation data is trending, and what purchase application growth means for housing health in mid-2025.`
  },
  {
    id: "2",
    slug: "why-housing-is-healthier-2025",
    title: "Why Housing is Healthier in 2025",
    date: "April 28, 2025",
    guest: "Logan Mohtashami",
    host: "Sarah Wheeler",
    source: "https://www.youtube.com/watch?v=rYfbiPRTe-c",
    summary: `Despite recession fears, Logan outlines how rising inventory and stable mortgage rates are returning the market to a more balanced and sustainable footing.`
  }
];

export { summaries };

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-4 py-16">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 tracking-tight text-red-700">
          Executive Briefs: HousingWire Daily
        </h1>
        <p className="text-gray-500 text-md mb-12">
          Weekly podcast recaps with Logan Mohtashami. Curated by Isaiah Tabach.
        </p>

        <ul className="space-y-12">
          {summaries.map((summary) => (
            <li key={summary.id}>
              <h2 className="text-2xl font-semibold text-red-700 mb-1">
                <Link href={`/${summary.slug}`} className="hover:underline">
                  {summary.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {summary.date} • Guest: {summary.guest} • Host: {summary.host}
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {summary.summary}
              </p>
              <Link
                href={`/${summary.slug}`}
                className="inline-block mt-3 text-sm text-red-600 font-medium hover:underline"
              >
                Read full summary ↗
              </Link>
            </li>
          ))}
        </ul>

        <footer className="mt-24 pt-12 text-sm text-gray-400 border-t">
          © 2025 Keller Williams Research. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
