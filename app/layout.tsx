import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpaceX Rocket Launches",
  description: "Rocket launches explorer",
};

// Script to set the initial theme based on localStorage
const themeScript = `
(function () {
  try {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen dark:bg-gray-900 bg-white ">
        {children}
      </body>
    </html>
  );
}
