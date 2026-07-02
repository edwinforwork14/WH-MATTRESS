import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import JsonLd from "@/components/JsonLd";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://whmattress.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "WH Mattress | Colchones de Tecnología Avanzada en Panamá",
    template: "%s | WH Mattress",
  },
  description:
    "Descubre los colchones WH Mattress: tecnología viscoelástica, muelles ensacados y soporte lumbar diferenciado. Más de 10 años fabricando colchones premium en Panamá. ¡Solicita tu cotización hoy!",
  keywords: [
    "colchones Panamá",
    "colchones viscoelásticos",
    "colchones de muelles ensacados",
    "colchones ortopédicos",
    "colchones premium",
    "WH Mattress",
    "colchones con soporte lumbar",
    "colchones para dormir mejor",
    "fabricantes de colchones Panamá",
    "colchones híbridos",
    "colchones memory foam",
  ],
  authors: [{ name: "WH Mattress", url: BASE_URL }],
  creator: "WH Mattress",
  publisher: "WH Mattress",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: BASE_URL,
    siteName: "WH Mattress",
    title: "WH Mattress | Colchones de Tecnología Avanzada en Panamá",
    description:
      "Colchones viscoelásticos, muelles ensacados y soporte lumbar diferenciado. Más de 10 años mejorando el descanso de miles de familias en Panamá.",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: "WH Mattress – Colchones de tecnología avanzada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WH Mattress | Colchones de Tecnología Avanzada en Panamá",
    description:
      "Colchones viscoelásticos, muelles ensacados y soporte lumbar diferenciado. Más de 10 años mejorando el descanso de miles de familias en Panamá.",
    images: ["/Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
        <script dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add("loading")`,
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
