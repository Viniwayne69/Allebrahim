import type { Metadata } from "next";
import Script from "next/script";
import { Barlow_Condensed, Caveat, Nunito_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const body = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const logo = Playfair_Display({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const script = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alleebrahim.com.br"),
  title: "Allê Ebrahim | Vender com verdade e constância",
  description:
    "Treinamentos, consultoria e implementação para equipes comerciais que querem vender de forma mais humana e previsível.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Allê Ebrahim | Vender com verdade e constância",
    description:
      "Treinamentos, consultoria e implementação para equipes comerciais que querem vender de forma mais humana e previsível.",
    url: "/",
    siteName: "Allê Ebrahim",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allê Ebrahim | Vender com verdade e constância",
    description:
      "Treinamentos, consultoria e implementação para equipes comerciais que querem vender de forma mais humana e previsível.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html
      lang="pt-BR"
      className={`${body.variable} ${display.variable} ${logo.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        {pixelId ? (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '${pixelId}'); fbq('track', 'PageView');`}
          </Script>
        ) : null}
        {children}
      </body>
    </html>
  );
}
