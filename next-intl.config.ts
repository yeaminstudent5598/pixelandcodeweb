import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale ?? "en"; // Default to English
  return {
    messages: (await import(`@/messages/${resolvedLocale}.json`)).default,
    defaultLocale: "en",
    locales: ["en", "bn"], // Add all your supported locales
    locale: resolvedLocale
  };
});