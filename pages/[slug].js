import Link from "next/link";
import { summaries } from "./index";
import { useRouter } from "next/router";

export default function SummaryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const summary = summaries.find((s) => s.slug === slug);

  if (!summary) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-6 py-12 max-w-3xl mx-auto">
      <Link href="/" className="text-blue-600 text-sm mb-6 inline-block hover:underline">← Back to all summaries</Link>

      <h1 className="text-3xl font-bold mb-2">{summary.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        {summary.date} • Guest: {summary.guest} • Host: {summary.host}
      </div>

      <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed text-[15px] mb-4">
        {summary.summary}
      </pre>

      <a
        href={summary.source}
        className="text-blue-600 text-sm font-medium hover:underline"
        target="_blank"
      >
        Listen to Episode ↗
      </a>
    </div>
  );
}
