export function formatDate(isoString: string) {
  const date = new Date(isoString);

  // Adjusting the time to reflect UTC+6 (Bangladesh Time)
  const bangladeshTime = new Date(date.getTime() - 6 * 60 * 60 * 1000); // substracting 6 hours

  // Formatting the date and time to a better ui representation
  return bangladeshTime.toLocaleString("en-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
