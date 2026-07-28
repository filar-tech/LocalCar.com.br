import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { site } from "@/config";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "LocalCar — Rastreamento Automotivo em São José dos Campos | Você no Controle do Seu Carro",
    template: "%s | LocalCar",
  },
  description:
    "Rastreamento veicular 24h em São José dos Campos com tecnologia de ponta. Bloqueio remoto, localização em tempo real, cerca virtual e estatísticas pelo app. Para você e para sua frota.",
  keywords: [
    "rastreamento veicular",
    "rastreador de carro",
    "bloqueio remoto veículo",
    "rastreamento automotivo",
    "segurança veicular",
    "rastreador GPS carro",
    "gestão de frotas",
    "rastreamento veicular São José dos Campos",
    "LocalCar",
  ],
  authors: [{ name: "LocalCar" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: "LocalCar",
    title: "LocalCar — Rastreamento Automotivo em São José dos Campos",
    description:
      "Proteção veicular 24h em São José dos Campos. Rastreamento em tempo real, bloqueio remoto e controle total pelo app.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "LocalCar",
    description: "Rastreamento automotivo com tecnologia de ponta.",
    image: `${site.url}/logo-localcar.png`,
    "@id": site.url,
    url: site.url,
    telephone: site.telefoneExibicao,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.endereco.rua}, ${site.endereco.bairro}`,
      addressLocality: site.endereco.cidade,
      addressRegion: site.endereco.estado,
      postalCode: site.endereco.cep,
      addressCountry: "BR",
    },
    sameAs: [site.instagramUrl],
  };

  return (
    <html lang="pt-BR" className={`${barlow.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
