export function extractTitleFromSummary(summary: string): string | null {
  // Look for the first heading (# Title)
  const titleMatch = summary.match(/^#\s+([^\n]+)/m);
  if (titleMatch && titleMatch[1]) {
    const title = titleMatch[1].trim();
    // Check if it's still a template placeholder
    if (!title.includes("[Create") && !title.includes("[Document")) {
      return title;
    }
  }
  return null;
}
