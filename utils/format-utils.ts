export function formatFileNameTitle(fileName: string): string {
  // Remove file extension
  const withoutExtension = fileName.replace(/\.[^/.]+$/, "");

  // Replace dashes and underscores with spaces
  const withSpaces = withoutExtension
    .replace(/[-_]+/g, " ") // Convert "-" and "_" to spaces
    .replace(/([a-z])([A-Z])/g, "$1 $2"); // Add space between camelCase words

  // Convert to title case (capitalize first letter of each word)
  return withSpaces
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
    .trim();
}
