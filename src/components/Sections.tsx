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
    "Bloqueio remoto",
    "Cerca virtual",
    "Estatísticas do veículo",
    "Instalação rápida",
    "App iOS e Android",
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
          position: relative;
          z-index: 2;
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
              Tudo sob controle, <span className="grad">na palma da mão</span>
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
                    <Icon name={r.icone} className="feat-svg" />
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
          background: radial-gradient(circle, rgba(214,154,30,0.06), transparent 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        .feat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .feat-card {
          background: var(--paper);
          border: 1px solid var(--line-soft);
          border-radius: 20px;
          padding: 34px 30px;
          position: relative;
          overflow: hidden;
          height: 100%;
          transition: box-shadow 0.3s, transform 0.3s;
          transform-style: preserve-3d;
        }
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
          box-shadow: 0 24px 50px var(--shadow);
        }
        .feat-card:hover::after { transform: scaleX(1); }

        .feat-num {
          position: absolute;
          top: 24px; right: 28px;
          font-family: var(--font-fraunces), serif;
          font-size: 34px;
          font-weight: 700;
          color: rgba(196,90,40,0.10);
          line-height: 1;
        }

        .feat-icon {
          width: 58px; height: 58px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(232,185,46,0.18), rgba(214,154,30,0.14));
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          transition: transform 0.3s;
        }
        .feat-card:hover .feat-icon {
          transform: scale(1.08) rotate(-4deg);
        }
        .feat-svg {
          width: 28px;
          height: 28px;
          stroke: var(--terra-dark);
          fill: none;
          stroke-width: 2;
        }

        .feat-card h3 {
          font-family: var(--font-fraunces), serif;
          font-size: 21px;
          font-weight: 600;
          margin-bottom: 9px;
          color: var(--text);
        }
        .feat-card p { color: var(--mute); font-size: 14.5px; line-height: 1.7; }

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
              <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 12 }}>
                Do início <span className="grad">ao controle total</span>
              </h2>
              <p className="sec-sub" style={{ textAlign: "left", marginTop: 12 }}>
                Em poucos passos seu veículo está protegido e monitorado 24 horas.
              </p>

              <div className="how-list">
                {comoFunciona.map((p) => (
                  <div key={p.n} className="how-item">
                    <div className="how-num" aria-label={`Passo ${p.n}`}>{p.n}</div>
                    <div>
                      <h4>{p.titulo}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Ring card */}
          <Reveal delay={120}>
            <div className="how-visual">
              <TiltCard className="how-card" maxDeg={9} style={{ height: "auto" }}>
                <div className="hc-ring" aria-label="24 horas monitorado">
                  <div className="hc-ring-val">
                    24h
                    <small>monitorado</small>
                  </div>
                </div>
                <div className="hc-stats">
                  <div className="hc-stat">
                    <div className="v">47 km</div>
                    <div className="l">Percorrido hoje</div>
                  </div>
                  <div className="hc-stat">
                    <div className="v">62 km/h</div>
                    <div className="l">Velocidade atual</div>
                  </div>
                  <div className="hc-stat">
                    <div className="v">Ativa</div>
                    <div className="l">Cerca virtual</div>
                  </div>
                  <div className="hc-stat">
                    <div className="v">0</div>
                    <div className="l">Alertas hoje</div>
                  </div>
                </div>
              </TiltCard>
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
          gap: 64px;
          align-items: center;
        }

        .how-list { margin-top: 36px; }
        .how-item {
          display: flex;
          gap: 20px;
          margin-bottom: 14px;
          padding: 18px;
          border-radius: 16px;
          transition: background 0.3s, box-shadow 0.3s;
          position: relative;
        }
        .how-item:hover {
          background: var(--paper);
          box-shadow: 0 14px 34px var(--shadow);
        }

        .how-num {
          flex-shrink: 0;
          width: 46px; height: 46px;
          border-radius: 13px;
          background: linear-gradient(135deg, var(--terra), var(--mustard));
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-fraunces), serif;
          font-weight: 700;
          font-size: 19px;
          box-shadow: 0 8px 20px rgba(196,90,40,0.3);
        }

        .how-item h4 {
          font-family: var(--font-fraunces), serif;
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 3px;
          color: var(--text);
        }
        .how-item p { color: var(--mute); font-size: 14.5px; line-height: 1.7; }

        /* How visual */
        .how-visual {
          display: flex;
          justify-content: center;
          perspective: 1000px;
        }

        /* Ring card */
        .how-card {
          background: var(--paper);
          border: 1px solid var(--line-soft);
          border-radius: 24px;
          padding: 36px;
          box-shadow: 0 30px 60px var(--shadow);
          width: 100%;
          max-width: 420px;
          transform-style: preserve-3d;
        }

        .hc-ring {
          width: 140px; height: 140px;
          margin: 0 auto 24px;
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: conic-gradient(var(--terra) 0deg, var(--amber) 220deg, var(--line-soft) 220deg);
        }
        .hc-ring::before {
          content: '';
          position: absolute;
          inset: 14px;
          background: var(--paper);
          border-radius: 50%;
        }

        .hc-ring-val {
          position: relative;
          font-family: var(--font-fraunces), serif;
          font-size: 34px;
          font-weight: 700;
          color: var(--terra-dark);
          text-align: center;
          line-height: 1;
        }
        .hc-ring-val small {
          display: block;
          font-family: var(--font-outfit), sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: var(--mute);
          margin-top: 3px;
        }

        .hc-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .hc-stat {
          background: var(--bg);
          border-radius: 14px;
          padding: 16px;
          text-align: center;
        }
        .hc-stat .v {
          font-family: var(--font-fraunces), serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--terra-dark);
        }
        .hc-stat .l {
          font-size: 11px;
          color: var(--mute);
          margin-top: 3px;
        }

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
              Para carros, frotas, <span className="grad">motos e bikes</span>
            </h2>
          </div>
        </Reveal>

        <div className="aud-grid">
          {publicos.map((p, i) => (
            <TiltCard key={p.tipo}>
              <Reveal delay={i * 100}>
                <div className={`aud-card ${p.tipo}`} data-hover>
                  <div className="ic" aria-hidden="true">
                    <Icon
                      name={
                        p.tipo === "own" ? "car"
                        : p.tipo === "fleet" ? "truck"
                        : p.tipo === "moto" ? "moto"
                        : "bike"
                      }
                      className="ic-svg"
                    />
                  </div>
                  <h3>{p.titulo}</h3>
                  <p>{p.desc}</p>
                  <ul>
                    {p.itens.map((it) => (
                      <li key={it}>
                        <Icon name="check" aria-hidden="true" className="chk-ic" />
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
          background: radial-gradient(circle, rgba(232,185,46,0.06), transparent 70%);
          filter: blur(70px);
          pointer-events: none;
        }

        .aud-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .aud-card {
          background: var(--paper);
          border: 1px solid var(--line-soft);
          border-radius: 24px;
          padding: 44px 40px;
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
          overflow: hidden;
          height: 100%;
        }
        .aud-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 54px var(--shadow);
        }

        .aud-card .ic {
          width: 64px; height: 64px;
          border-radius: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .aud-card.own   .ic { background: linear-gradient(135deg, var(--terra), var(--terra-dark)); }
        .aud-card.fleet .ic { background: linear-gradient(135deg, var(--amber), var(--mustard));    }
        .aud-card.moto  .ic { background: linear-gradient(135deg, #B07D12, #7A550C);               }
        .aud-card.bike  .ic { background: linear-gradient(135deg, var(--mustard), var(--amber-soft)); }
        .ic-svg {
          width: 32px;
          height: 32px;
          stroke: #fff;
          fill: none;
          stroke-width: 2;
        }

        .aud-card h3 {
          font-family: var(--font-fraunces), serif;
          font-size: 27px;
          font-weight: 700;
          margin-bottom: 11px;
          color: var(--text);
        }
        .aud-card > p { color: var(--mute); font-size: 15px; margin-bottom: 22px; line-height: 1.7; }

        .aud-card li {
          color: var(--text);
          font-size: 14px;
          padding: 10px 0;
          display: flex;
          gap: 12px;
          align-items: center;
          border-bottom: 1px solid var(--line-soft);
        }
        .aud-card li:last-child { border: none; }

        /* Ícones de checklist — tamanho explícito via className, sem :global() */
        .chk-ic {
          width: 17px;
          height: 17px;
          flex-shrink: 0;
          stroke-width: 3;
          fill: none;
        }
        .aud-card.own   .chk-ic { stroke: var(--terra); }
        .aud-card.fleet .chk-ic { stroke: var(--mustard); }
        .aud-card.moto  .chk-ic { stroke: var(--terra-dark); }
        .aud-card.bike  .chk-ic { stroke: var(--amber); }

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
