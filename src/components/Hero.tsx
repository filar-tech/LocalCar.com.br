import { site, linkWhatsApp } from "@/config";
import Icon from "./Icon";
import ParticlesBackground from "./ParticlesBackground";
import TiltCard from "./TiltCard";

export default function Hero() {
  return (
    <section className="hero">
      {/* Partículas — posição absoluta dentro da seção */}
      <ParticlesBackground />

      {/* Blobs de luz quente com animação drift */}
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

        {/* Col direita — mockup do painel com tilt 3D */}
        <div className="hero-visual" aria-hidden="true">
          <TiltCard className="vis-tilt">
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
          </TiltCard>

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
          /* Radial gradient de âmbar suave + fundo bege */
          background:
            radial-gradient(ellipse 70% 60% at 78% 35%, rgba(224,160,48,0.16), transparent 60%),
            var(--bg);
        }

        /* blobs — com animação drift */
        .blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
          opacity: 0.5;
        }
        .blob.b1 {
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(196,90,40,0.30), transparent 70%);
          top: -100px; right: -80px;
          animation: drift 14s ease-in-out infinite;
        }
        .blob.b2 {
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(224,160,48,0.28), transparent 70%);
          bottom: -60px; left: -60px;
          animation: drift 18s ease-in-out infinite reverse;
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
          background: rgba(196,90,40,0.08);
          border: 1px solid rgba(196,90,40,0.22);
          color: var(--terra-dark);
          font-weight: 600;
          font-size: 11.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 50px;
          margin-bottom: 26px;
          animation: fadeUp 0.7s ease both;
        }
        .dot {
          width: 7px; height: 7px;
          background: var(--terra);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        /* heading — gradiente no accent (em) */
        .hero-col h1 {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(46px, 5.8vw, 84px);
          font-weight: 900;
          line-height: 0.98;
          letter-spacing: -1.5px;
          color: var(--text);
          margin-bottom: 22px;
          animation: fadeUp 0.7s ease 0.1s both;
        }
        .hero-col h1 em {
          font-style: italic;
          background: linear-gradient(120deg, var(--terra), var(--amber));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* lead */
        .lead {
          color: var(--mute);
          font-size: 17.5px;
          max-width: 460px;
          margin-bottom: 34px;
          line-height: 1.78;
          animation: fadeUp 0.7s ease 0.2s both;
        }

        /* CTAs */
        .hero-cta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          animation: fadeUp 0.7s ease 0.3s both;
        }
        .hero-cta .btn :global(svg) { stroke: #fff; }

        /* stats */
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-top: 48px;
          animation: fadeUp 0.7s ease 0.5s both;
        }
        .hero-divider {
          width: 1px; height: 34px;
          background: var(--line);
        }
        .hero-stat .num {
          font-family: var(--font-fraunces), serif;
          font-size: 38px;
          font-weight: 700;
          color: var(--terra-dark);
          line-height: 1;
        }
        .hero-stat .lbl {
          color: var(--mute);
          font-size: 13px;
          margin-top: 5px;
        }

        /* ---- Visual / mockup ---- */
        .hero-visual {
          position: relative;
          animation: fadeUp 0.9s ease 0.3s both;
        }
        .vis-tilt {
          position: relative;
        }

        .vis-card {
          background: var(--paper);
          border: 1px solid var(--line-soft);
          border-radius: 30px;
          padding: 20px;
          box-shadow: 0 40px 80px rgba(120,72,30,0.25), 0 0 0 1px var(--line-soft);
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
          height: 200px;
          border-radius: 20px;
          overflow: hidden;
          background:
            linear-gradient(rgba(196,90,40,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,90,40,0.06) 1px, transparent 1px),
            linear-gradient(135deg, #F6EEDF, #EFE3CE);
          background-size: 24px 24px, 24px 24px, 100% 100%;
          border: 1px solid var(--line-soft);
          margin-bottom: 14px;
          position: relative;
        }
        .vis-map svg {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
        }
        .vis-map svg path {
          fill: none;
          stroke: var(--terra);
          stroke-width: 3;
          stroke-linecap: round;
          stroke-dasharray: 6 8;
          animation: dashMove 1.4s linear infinite;
        }
        @keyframes dashMove { to { stroke-dashoffset: -28; } }

        .vis-pin {
          position: absolute;
          width: 20px; height: 20px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
        }
        .vis-pin::after {
          content: '';
          position: absolute;
          top: 5px; left: 5px;
          width: 10px; height: 10px;
          background: #fff;
          border-radius: 50%;
        }
        .vis-pin.start { top: 62%; left: 15%; background: var(--amber-soft); }
        .vis-pin.end   { top: 22%; right: 18%; background: var(--terra); animation: bob 1.8s ease-in-out infinite; }
        @keyframes bob {
          0%,100% { transform: rotate(-45deg) translateY(0);   }
          50%      { transform: rotate(-45deg) translateY(-7px); }
        }

        .vis-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; }
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
          background: var(--paper);
          border: 1px solid var(--line-soft);
          border-radius: 14px;
          padding: 10px 14px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 9px;
          box-shadow: 0 14px 30px var(--shadow);
        }
        .chip :global(svg) { stroke: var(--terra); flex-shrink: 0; }
        .chip-a { top: -16px; right: -44px; animation: floatY 4s ease-in-out infinite; }
        .chip-b { bottom: 40px; left: -44px; animation: floatY 5s ease-in-out infinite 0.6s; }

        @media (max-width: 1020px) {
          .hero-inner { gap: 40px; }
          .chip-a { right: -10px; }
          .chip-b { left: -10px; }
        }
        @media (max-width: 860px) {
          .hero-inner { grid-template-columns: 1fr; padding-top: 50px; }
          .hero-visual { max-width: 480px; margin: 0 auto; }
          .chip-a { right: 0; } .chip-b { left: 0; }
        }
        @media (max-width: 480px) {
          .hero-stats { gap: 20px; }
          .hero-stat .num { font-size: 28px; }
        }
      `}</style>
    </section>
  );
}
