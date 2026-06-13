import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/config";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "LocalCar — Rastreamento Automotivo | Você no Controle do Seu Carro",
    template: "%s | LocalCar",
  },
  description:
    "Rastreamento veicular 24h com tecnologia de ponta. Bloqueio remoto, localização em tempo real, cerca virtual e estatísticas pelo app. Para você e para sua frota.",
  keywords: [
    "rastreamento veicular",
    "rastreador de carro",
    "bloqueio remoto veículo",
    "rastreamento automotivo",
    "segurança veicular",
    "rastreador GPS carro",
    "gestão de frotas",
    "LocalCar",
  ],
  authors: [{ name: "LocalCar" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: "LocalCar",
    title: "LocalCar — Rastreamento Automotivo",
    description:
      "Proteção veicular 24h. Rastreamento em tempo real, bloqueio remoto e controle total pelo app.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Dados estruturados (Schema.org) — ajuda muito no SEO local do Google
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
      streetAddress: site.endereco.rua,
      addressLocality: site.endereco.bairro,
      addressCountry: "BR",
    },
    sameAs: [site.instagramUrl],
  };

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Sora:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
