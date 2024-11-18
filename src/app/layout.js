
import localFont from "next/font/local";
import "./globals.css";
import "flag-icons/css/flag-icons.min.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Learn Languages | OceanConnecting",
  description:
    "Explore OceanConnecting's classroom-based language courses! Learn English, French, Spanish, German, and Italian with our interactive lessons, vocabulary tools, and expert guidance. Start your language learning journey with OceanConnecting today and gain confidence in speaking, reading, and writing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      <link rel="manifest" href="/site.webmanifest" />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
