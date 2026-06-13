import type { Metadata } from "next";
import { servicos } from "@/config";
import Icon from "@/components/Icon";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços da LocalCar: rastreamento veicular, bloqueio remoto, cerca virtual, gestão de frotas, instalação profissional e clube de vantagens.",
};

export default function ServicosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="sec-tag">Nossos serviços</span>
          <h1>Soluções completas em<br /><span className="grad">rastreamento veicular</span></h1>
          <p>Tudo o que você precisa para proteger e monitorar seu veículo ou sua frota, com tecnologia de ponta.</p>
        </div>
      </section>

      <section className="serv-list">
        <div className="container">
          <div className="serv-grid">
            {servicos.map((s, i) => (
              <div className="serv-card" key={s.titulo}>
                <span className="serv-num tech">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.titulo}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.itens.map((it) => (
                    <li key={it}><Icon name="check" /> {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <style>{`
        .serv-list { padding: 30px 0 110px; }
        .serv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .serv-card { background: linear-gradient(160deg, var(--panel), var(--black2)); border: 1px solid var(--line); border-radius: 20px; padding: 38px 32px; position: relative; overflow: hidden; transition: all 0.4s; }
        .serv-card:hover { transform: translateY(-8px); border-color: rgba(255,255,255,0.15); box-shadow: 0 20px 50px rgba(0,0,0,0.6); }
        .serv-num { position: absolute; top: 28px; right: 30px; font-family: 'Chakra Petch', sans-serif; font-size: 28px; font-weight: 700; color: rgba(255,255,255,0.06); }
        .serv-card h3 { font-size: 21px; font-weight: 700; margin-bottom: 12px; max-width: 80%; }
        .serv-card > p { color: var(--mute); font-size: 14.5px; margin-bottom: 22px; }
        .serv-card li { color: #cfd5e0; font-size: 13.5px; padding: 8px 0; display: flex; gap: 10px; align-items: center; border-bottom: 1px solid var(--line); }
        .serv-card li:last-child { border: none; }
        .serv-card li :global(svg) { width: 15px; height: 15px; stroke: var(--yellow); stroke-width: 3; flex-shrink: 0; }
        @media (max-width: 980px) { .serv-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 680px) { .serv-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
