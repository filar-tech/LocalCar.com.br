import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a LocalCar. Solicite seu orçamento de rastreamento veicular e proteja seu veículo hoje mesmo.",
};

export default function ContatoPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 20 }}>
        <div className="container">
          <span className="sec-tag">Contato</span>
          <h1>Vamos <span className="grad">proteger seu veículo</span></h1>
          <p>Preencha o formulário ou fale direto no WhatsApp. Respondemos rápido.</p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
