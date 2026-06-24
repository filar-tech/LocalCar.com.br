import { site, linkWhatsApp } from "@/config";
import Icon from "./Icon";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="hero">
      <ParticlesBackground />

      {/* Blobs de luz quente */}
      <div className="blob b1" aria-hidden="true" />
      <div className="blob b2" aria-hidden="true" />

      <div className="hero-inner container">
        {/* Col esquerda — texto */}
        <div className="hero-col">
          <div className="hero-badge">
            <span className="dot" aria-hidden="true" />
            Tecnologia em rastreamento 24h
          </div>

          <h1>
            Proteja seu<br />
            veículo com<br />
            <em>inteligência</em>
          </h1>

          <p className="lead">
            {site.tagline} — rastreamento em tempo real, bloqueio remoto e
            controle total direto do seu celular, 24 horas por dia.
          </p>

          <div className="hero-cta">
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Proteger meu veículo pelo WhatsApp"
            >
              <Icon name="pin" style={{ width: 18, height: 18 }} aria-hidden="true" />
              Proteger meu veículo
            </a>
            <a href="#como" className="btn btn-ghost">Como funciona</a>
          </div>

          <div className="hero-stats" aria-label="Destaques da LocalCar">
            <div className="hero-stat">
              <div className="num">24/7</div>
              <div className="lbl">Monitoramento ativo</div>
            </div>
            <div className="hero-divider" aria-hidden="true" />
            <div className="hero-stat">
              <div className="num">100%</div>
              <div className="lbl">Controle pelo app</div>
            </div>
            <div className="hero-divider" aria-hidden="true" />
            <div className="hero-stat">
              <div className="num">iOS+And</div>
              <div className="lbl">Multiplataforma</div>
            </div>
          </div>
        </div>

        {/* Col direita — mockup do painel */}
        <div className="hero-visual" aria-hidden="true">
          <div className="vis-card">
            <div className="vis-header">
              <span className="vis-dot d1" />
              <span className="vis-dot d2" />
              <span className="vis-dot d3" />
              <span className="vis-title">LocalCar · Painel ao vivo</span>
              <span className="vis-live" />
            </div>

            <div className="vis-map">
              <svg viewBox="0 0 300 180" preserveAspectRatio="none">
                <path d="M40 130 Q 100 55 170 95 T 270 48" />
              </svg>
              <span className="vis-pin start" />
              <span className="vis-pin end"   />
            </div>

            <div className="vis-stats">
              <div className="vs-item">
                <div className="vs-l">STATUS</div>
                <div className="vs-v on">● Ativo</div>
              </div>
              <div className="vs-item">
                <div className="vs-l">VELOCIDADE</div>
                <div className="vs-v">62 km/h</div>
              </div>
              <div className="vs-item">
                <div className="vs-l">PERCURSO</div>
                <div className="vs-v">47 km</div>
              </div>
            </div>
          </div>

          {/* Chips flutuantes */}
          <div className="chip chip-a">
            <Icon name="lock"  style={{ width: 13, height: 13 }} />
            Bloqueio ativo
          </div>
          <div className="chip chip-b">
            <Icon name="globe" style={{ width: 13, height: 13 }} />
            Cerca virtual ON
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          padding-top: 72px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--bg);
        }

        /* blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
        }
        .blob.b1 {
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(196,90,40,0.10), transparent 70%);
          top: -160px; right: 5%;
        }
        .blob.b2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(224,160,48,0.09), transparent 70%);
          bottom: -60px; left: 0;
        }

        /* inner grid */
        .hero-inner {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          padding-top: 70px;
          padding-bottom: 80px;
        }

        /* badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(196,90,40,0.07);
          border: 1px solid rgba(196,90,40,0.20);
          color: var(--terra);
          font-weight: 600;
          font-size: 11.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 50px;
          margin-bottom: 26px;
          animation: fadeUp 0.8s ease both;
        }
        .dot {
          width: 6px; height: 6px;
          background: var(--terra);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        /* heading */
        .hero-col h1 {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(46px, 5.8vw, 84px);
          font-weight: 700;
          line-height: 1.0;
          color: var(--text);
          margin-bottom: 22px;
          animation: fadeUp 0.8s ease 0.1s both;
        }
        .hero-col h1 em {
          font-style: italic;
          color: var(--terra);
        }

        /* lead */
        .lead {
          color: var(--mute);
          font-size: 17.5px;
          max-width: 460px;
          margin-bottom: 34px;
          line-height: 1.78;
          animation: fadeUp 0.8s ease 0.2s both;
        }

        /* CTAs */
        .hero-cta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          animation: fadeUp 0.8s ease 0.3s both;
        }
        .hero-cta .btn :global(svg) { stroke: #fff; }

        /* stats */
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 26px;
          margin-top: 50px;
          animation: fadeUp 0.8s ease 0.4s both;
        }
        .hero-divider {
          width: 1px; height: 34px;
          background: var(--line);
        }
        .hero-stat .num {
          font-family: var(--font-fraunces), serif;
          font-size: 32px;
          font-weight: 700;
          color: var(--terra);
          line-height: 1;
        }
        .hero-stat .lbl {
          color: var(--mute2);
          font-size: 12px;
          margin-top: 4px;
        }

        /* ---- Visual / mockup ---- */
        .hero-visual {
          position: relative;
          animation: fadeUp 0.9s ease 0.2s both;
        }

        .vis-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 20px 60px rgba(42,32,24,0.10), 0 4px 18px rgba(196,90,40,0.07);
        }

        .vis-header {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
        }
        .vis-dot { width: 9px; height: 9px; border-radius: 50%; }
        .vis-dot.d1 { background: #FF5F57; }
        .vis-dot.d2 { background: #FFBB2C; }
        .vis-dot.d3 { background: #27C93F; }
        .vis-title {
          margin-left: 8px;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--mute);
          letter-spacing: 0.3px;
          flex: 1;
        }
        .vis-live {
          width: 7px; height: 7px;
          background: #27C93F;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(39,201,63,0.7);
          animation: pulse 2s infinite;
        }

        /* map */
        .vis-map {
          height: 175px;
          border-radius: 14px;
          background: linear-gradient(135deg, #FDF5E6, #FAF0D6);
          border: 1px solid rgba(196,90,40,0.10);
          margin-bottom: 14px;
          position: relative;
          overflow: hidden;
        }
        .vis-map::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(196,90,40,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,90,40,0.055) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .vis-map svg {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
        }
        .vis-map svg path {
          fill: none;
          stroke: var(--amber);
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-dasharray: 7 9;
          animation: dashMove 1.5s linear infinite;
        }
        @keyframes dashMove { to { stroke-dashoffset: -32; } }

        .vis-pin {
          position: absolute;
          width: 18px; height: 18px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
        }
        .vis-pin::after {
          content: '';
          position: absolute;
          top: 5px; left: 5px;
          width: 8px; height: 8px;
          background: #fff;
          border-radius: 50%;
        }
        .vis-pin.start { top: 65%; left: 13%; background: var(--amber-soft); }
        .vis-pin.end   { top: 26%; right: 16%; background: var(--terra); animation: bob 1.8s ease-in-out infinite; }
        @keyframes bob {
          0%,100% { transform: rotate(-45deg) translateY(0);   }
          50%      { transform: rotate(-45deg) translateY(-7px); }
        }

        .vis-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .vs-item {
          background: var(--bg2);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 12px 10px;
        }
        .vs-l { font-size: 10px; color: var(--mute2); margin-bottom: 4px; letter-spacing: 0.5px; font-weight: 500; }
        .vs-v {
          font-family: var(--font-fraunces), serif;
          font-size: 15.5px;
          font-weight: 700;
          color: var(--text);
        }
        .vs-v.on { color: #2A8F4C; }

        /* chips flutuantes */
        .chip {
          position: absolute;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 50px;
          padding: 8px 14px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 16px rgba(42,32,24,0.09);
        }
        .chip :global(svg) { stroke: var(--terra); flex-shrink: 0; }
        .chip-a { top: -18px; right: -12px; animation: floatY 3s ease-in-out infinite; }
        .chip-b { bottom: -18px; left: -12px; animation: floatY 3s ease-in-out infinite 1.5s; }

        @media (max-width: 1020px) {
          .hero-inner { gap: 40px; }
        }
        @media (max-width: 860px) {
          .hero-inner { grid-template-columns: 1fr; padding-top: 50px; }
          .hero-visual { max-width: 480px; margin: 0 auto; }
          .chip-a { right: 0; } .chip-b { left: 0; }
        }
        @media (max-width: 480px) {
          .hero-stats { gap: 14px; }
          .hero-stat .num { font-size: 26px; }
        }
      `}</style>
    </section>
  );
}
