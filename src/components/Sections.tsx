import { recursos, comoFunciona, publicos, linkWhatsApp } from "@/config";
import Icon from "./Icon";
import TiltCard from "./TiltCard";
import Reveal from "./Reveal";

/* ------------------------------------------------------------------ */
/*  Marquee                                                             */
/* ------------------------------------------------------------------ */
export function Marquee() {
  const items = [
    "Localização em tempo real",
    "Bloqueio remoto do motor",
    "Cerca virtual inteligente",
    "Estatísticas do veículo",
    "Instalação rápida",
    "App iOS & Android",
  ];
  const all = [...items, ...items];

  return (
    <div className="marquee">
      <div className="mq-track">
        {all.map((t, i) => (
          <span className="mq-item" key={i}>
            <span className="mq-star" aria-hidden="true">✦</span>
            {t}
          </span>
        ))}
      </div>
      <style>{`
        .marquee {
          background: linear-gradient(135deg, var(--terra), var(--mustard));
          padding: 16px 0;
          overflow: hidden;
        }
        .mq-track {
          display: flex;
          gap: 48px;
          white-space: nowrap;
          animation: mqScroll 26s linear infinite;
          width: max-content;
        }
        .mq-item {
          font-family: var(--font-fraunces), serif;
          font-style: italic;
          font-weight: 600;
          font-size: 19px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 13px;
        }
        .mq-star {
          color: rgba(255,255,255,0.7);
          font-style: normal;
        }
        @keyframes mqScroll { to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Features                                                            */
/* ------------------------------------------------------------------ */
export function Features() {
  return (
    <section className="features" id="recursos">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <span className="sec-tag">Recursos</span>
            <h2 className="sec-title">
              Controle total <span className="grad">na palma da mão</span>
            </h2>
            <p className="sec-sub">
              Tecnologia de ponta para você acompanhar e proteger seu veículo de onde estiver.
            </p>
          </div>
        </Reveal>

        <div className="feat-grid">
          {recursos.map((r, i) => (
            <TiltCard key={r.id}>
              <Reveal delay={i * 60}>
                <div className="feat-card" data-hover>
                  <span className="feat-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="feat-icon" aria-hidden="true">
                    <Icon name={r.icone} />
                  </div>
                  <h3>{r.titulo}</h3>
                  <p>{r.desc}</p>
                </div>
              </Reveal>
            </TiltCard>
          ))}
        </div>
      </div>

      <style>{`
        .features { padding: 110px 0; position: relative; }
        .features::before {
          content: '';
          position: absolute;
          top: 0; right: -5%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(196,90,40,0.06), transparent 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        .feat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* TiltCard wrapper fills height — feat-card also fills */
        .feat-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 34px 28px;
          position: relative;
          overflow: hidden;
          height: 100%;
          transition: border-color 0.35s, box-shadow 0.35s;
        }
        /* Linha gradiente que aparece no topo ao hover */
        .feat-card::after {
          content: '';
          position: absolute;
          left: 0; top: 0;
          height: 4px; width: 100%;
          background: linear-gradient(90deg, var(--terra), var(--amber));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s;
        }
        .feat-card:hover {
          border-color: rgba(196,90,40,0.30);
          box-shadow: 0 10px 30px rgba(42,32,24,0.08);
        }
        .feat-card:hover::after { transform: scaleX(1); }

        .feat-num {
          position: absolute;
          top: 22px; right: 26px;
          font-family: var(--font-fraunces), serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--amber-soft);
          letter-spacing: 1px;
        }

        .feat-icon {
          width: 54px; height: 54px;
          border-radius: 14px;
          background: rgba(196,90,40,0.08);
          border: 1px solid rgba(196,90,40,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: background 0.3s, border-color 0.3s;
        }
        .feat-card:hover .feat-icon {
          background: rgba(196,90,40,0.14);
          border-color: rgba(196,90,40,0.30);
        }
        .feat-icon :global(svg) {
          width: 26px; height: 26px;
          stroke: var(--terra);
        }

        .feat-card h3 { font-family: var(--font-fraunces), serif; font-size: 19px; font-weight: 700; margin-bottom: 10px; color: var(--text); }
        .feat-card p  { color: var(--mute); font-size: 14px; line-height: 1.7; }

        @media (max-width: 980px) { .feat-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 680px) { .feat-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HowItWorks                                                          */
/* ------------------------------------------------------------------ */
export function HowItWorks() {
  return (
    <section className="how" id="como">
      <div className="container">
        <div className="how-grid">
          {/* Texto / steps */}
          <Reveal>
            <div>
              <span className="sec-tag">Como funciona</span>
              <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 14 }}>
                Do início ao <span className="grad">controle total</span>
              </h2>
              <p className="sec-sub" style={{ textAlign: "left" }}>
                Em poucos passos seu veículo está protegido e monitorado 24 horas.
              </p>

              <ul className="how-list">
                {comoFunciona.map((p, i) => (
                  <li key={p.n}>
                    <div className="how-num" aria-label={`Passo ${p.n}`}>{p.n}</div>
                    <div>
                      <h4>{p.titulo}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Dashboard mockup */}
          <Reveal delay={120}>
            <div className="dash" aria-hidden="true">
              <div className="dash-glow" />
              <div className="dash-top">
                <div className="dash-title">
                  <span className="dash-live" />
                  LocalCar · Painel ao vivo
                </div>
                <div className="dash-dots">
                  <span style={{ background: "#FF5F57" }} />
                  <span style={{ background: "#FFBB2C" }} />
                  <span style={{ background: "#27C93F" }} />
                </div>
              </div>

              <div className="dash-map">
                <svg viewBox="0 0 400 240" preserveAspectRatio="none">
                  <path d="M70 150 Q 160 60 220 120 T 330 60" />
                </svg>
                <span className="dmap-pin s" />
                <span className="dmap-pin e" />
              </div>

              <div className="dash-stats">
                <div className="dstat">
                  <div className="l">STATUS</div>
                  <div className="v on">● Ativo</div>
                </div>
                <div className="dstat">
                  <div className="l">VELOCIDADE</div>
                  <div className="v amber">62 <span style={{ fontSize: 11 }}>km/h</span></div>
                </div>
                <div className="dstat">
                  <div className="l">PERCORRIDO</div>
                  <div className="v terra">47 <span style={{ fontSize: 11 }}>km</span></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .how {
          padding: 110px 0;
          background: var(--bg2);
          position: relative;
          overflow: hidden;
        }

        .how-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .how-list { margin-top: 36px; }
        .how-list li {
          display: flex;
          gap: 18px;
          margin-bottom: 26px;
          align-items: flex-start;
          position: relative;
        }
        .how-list li:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 22px; top: 50px;
          width: 1px;
          height: calc(100% - 10px);
          background: linear-gradient(var(--line), transparent);
        }

        .how-num {
          flex-shrink: 0;
          width: 46px; height: 46px;
          border-radius: 12px;
          background: var(--terra);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-fraunces), serif;
          font-weight: 700;
          font-size: 18px;
        }

        .how-list h4 { font-family: var(--font-fraunces), serif; font-size: 18px; font-weight: 700; margin-bottom: 4px; color: var(--text); }
        .how-list p  { color: var(--mute); font-size: 14px; line-height: 1.7; }

        /* Dashboard */
        .dash {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(42,32,24,0.09);
        }
        .dash-glow {
          position: absolute;
          top: -70px; right: -70px;
          width: 240px; height: 240px;
          background: radial-gradient(circle, rgba(196,90,40,0.09), transparent 70%);
          filter: blur(40px);
        }

        .dash-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          position: relative;
        }
        .dash-title {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.4px;
          color: var(--mute);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dash-live {
          width: 7px; height: 7px;
          background: #27C93F;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(39,201,63,0.7);
          animation: pulse 2s infinite;
        }
        .dash-dots { display: flex; gap: 6px; }
        .dash-dots span { width: 9px; height: 9px; border-radius: 50%; }

        .dash-map {
          height: 220px;
          border-radius: 14px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #FDF5E6, #FAF0D6);
          border: 1px solid rgba(196,90,40,0.09);
          margin-bottom: 14px;
        }
        .dash-map::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(196,90,40,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,90,40,0.055) 1px, transparent 1px);
          background-size: 26px 26px;
        }
        .dash-map svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .dash-map svg path {
          fill: none;
          stroke: var(--amber);
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-dasharray: 7 9;
          animation: dashMove2 1.5s linear infinite;
        }
        @keyframes dashMove2 { to { stroke-dashoffset: -32; } }

        .dmap-pin {
          position: absolute;
          width: 20px; height: 20px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
        }
        .dmap-pin::after {
          content: ''; position: absolute;
          top: 6px; left: 6px;
          width: 8px; height: 8px;
          background: #fff; border-radius: 50%;
        }
        .dmap-pin.s { top: 62%; left: 18%; background: var(--amber-soft); }
        .dmap-pin.e { top: 26%; right: 18%; background: var(--terra); animation: bob2 1.8s ease-in-out infinite; }
        @keyframes bob2 {
          0%,100% { transform: rotate(-45deg) translateY(0);   }
          50%      { transform: rotate(-45deg) translateY(-7px); }
        }

        .dash-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .dstat {
          background: var(--bg2);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 13px;
        }
        .dstat .l  { font-size: 10px; color: var(--mute2); margin-bottom: 5px; letter-spacing: 0.5px; }
        .dstat .v  { font-family: var(--font-fraunces), serif; font-size: 18px; font-weight: 700; color: var(--text); }
        .dstat .v.on    { color: #2A8F4C; }
        .dstat .v.amber { color: var(--amber); }
        .dstat .v.terra { color: var(--terra); }

        @media (max-width: 980px) {
          .how-grid { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Audience                                                            */
/* ------------------------------------------------------------------ */
export function Audience() {
  return (
    <section className="audience" id="publico">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <span className="sec-tag">Para quem é</span>
            <h2 className="sec-title">
              Para o seu carro <span className="grad">e para sua frota</span>
            </h2>
          </div>
        </Reveal>

        <div className="aud-grid">
          {publicos.map((p, i) => (
            <TiltCard key={p.tipo}>
              <Reveal delay={i * 100}>
                <div className={`aud-card ${p.tipo}`} data-hover>
                  <div className="ic" aria-hidden="true">
                    <Icon name={p.tipo === "own" ? "car" : "truck"} />
                  </div>
                  <h3>{p.titulo}</h3>
                  <p>{p.desc}</p>
                  <ul>
                    {p.itens.map((it) => (
                      <li key={it}>
                        <Icon name="check" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </TiltCard>
          ))}
        </div>
      </div>

      <style>{`
        .audience {
          padding: 110px 0;
          position: relative;
          overflow: hidden;
        }
        .audience::before {
          content: '';
          position: absolute;
          bottom: 0; left: 5%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(224,160,48,0.06), transparent 70%);
          filter: blur(70px);
          pointer-events: none;
        }

        .aud-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .aud-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 44px 40px;
          transition: border-color 0.35s, box-shadow 0.35s;
          height: 100%;
        }
        .aud-card:hover {
          border-color: rgba(196,90,40,0.28);
          box-shadow: 0 12px 36px rgba(42,32,24,0.08);
        }

        .aud-card .ic {
          width: 60px; height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .aud-card.own .ic   { background: rgba(196,90,40,0.09); border: 1px solid rgba(196,90,40,0.22); }
        .aud-card.fleet .ic { background: rgba(224,160,48,0.09); border: 1px solid rgba(224,160,48,0.22); }
        .aud-card .ic :global(svg) { width: 30px; height: 30px; }
        .aud-card.own   .ic :global(svg) { stroke: var(--terra); }
        .aud-card.fleet .ic :global(svg) { stroke: var(--amber); }

        .aud-card h3 { font-family: var(--font-fraunces), serif; font-size: 25px; font-weight: 700; margin-bottom: 12px; color: var(--text); }
        .aud-card > p { color: var(--mute); font-size: 15px; margin-bottom: 24px; line-height: 1.7; }

        .aud-card li {
          color: var(--mute);
          font-size: 14px;
          padding: 9px 0;
          display: flex;
          gap: 11px;
          align-items: center;
          border-bottom: 1px solid var(--line);
        }
        .aud-card li:last-child { border: none; }
        .aud-card li :global(svg) { width: 15px; height: 15px; stroke-width: 3; flex-shrink: 0; }
        .aud-card.own   li :global(svg) { stroke: var(--terra); }
        .aud-card.fleet li :global(svg) { stroke: var(--amber); }

        @media (max-width: 820px) { .aud-grid { grid-template-columns: 1fr; } }
        @media (max-width: 680px) { .aud-card { padding: 30px 24px; } }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTABanner                                                           */
/* ------------------------------------------------------------------ */
export function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <Reveal>
          <div className="cta-inner">
            <h2>Pronto para ter o controle total?</h2>
            <p>Proteja seu patrimônio hoje mesmo com a tecnologia da LocalCar.</p>
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              Solicitar orçamento agora
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        .cta-banner { padding: 90px 0; }
        .cta-inner {
          background: linear-gradient(135deg, var(--terra), var(--mustard));
          border-radius: 30px;
          padding: 64px 56px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-inner::before {
          content: '';
          position: absolute;
          top: -50%; left: -10%;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%);
        }
        .cta-inner::after {
          content: '';
          position: absolute;
          bottom: -50%; right: -5%;
          width: 340px; height: 340px;
          background: radial-gradient(circle, rgba(168,69,28,0.3), transparent 70%);
        }
        .cta-inner h2 {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
          position: relative;
        }
        .cta-inner p {
          color: rgba(255,255,255,0.9);
          font-size: 17px;
          margin-bottom: 32px;
          position: relative;
        }
        .btn-light {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 28px;
          border-radius: 50px;
          font-family: var(--font-outfit), sans-serif;
          font-weight: 600;
          font-size: 16px;
          background: #fff;
          color: var(--terra-dark);
          box-shadow: 0 12px 30px rgba(0,0,0,0.18);
          position: relative;
          transition: transform 0.25s, box-shadow 0.25s;
          text-decoration: none;
        }
        .btn-light:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.26);
        }
        @media (max-width: 680px) { .cta-inner { padding: 44px 28px; } }
      `}</style>
    </section>
  );
}
