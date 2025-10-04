import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  format,
} from "date-fns";

type Input = string | number | Date;

/**
 * Relative time with simple rules:
 * - < 1 min        → "just now"
 * - < 5 min        → "few minutes ago"
 * - < 60 min       → "N minutes ago"
 * - < 24 hours     → "N hour(s) ago"
 * - < 7 days       → "N day(s) ago"
 * - ≥ 7 days       → absolute date (customizable)
 */
export function relativeTime(
  input: Input,
  opts: { absoluteAfterDays?: number; now?: Date } = {}
): string {
  const { absoluteAfterDays = 7, now = new Date() } = opts;

  const d = new Date(input); // in the browser, this uses the user's local timezone
  const mins = differenceInMinutes(now, d);

  if (mins < 1) return "just now";
  if (mins < 5) return "few minutes ago";
  if (mins < 60) return `${mins} minute${mins === 1 ? "" : "s"} ago`;

  const hours = differenceInHours(now, d);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;

  const days = differenceInDays(now, d);
  if (days < absoluteAfterDays)
    return `${days} day${days === 1 ? "" : "s"} ago`;

  // Fallback to an absolute date after the threshold
  return format(d, "PP"); // e.g., "Oct 4, 2025"
}
