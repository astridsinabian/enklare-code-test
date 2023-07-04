export function getShortenText(text?: string): string {
  return text?.split(/\s+/).slice(0, 3).join(" ") + "...";
}
