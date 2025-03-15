export default function SummaryViewer({ summary }: { summary: string }) {
  return <div>{summary && <p>{summary}</p>}</div>;
}
