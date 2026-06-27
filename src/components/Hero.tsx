import { linkWhatsApp } from "@/config";
import ParticlesBackground from "./ParticlesBackground";
import TiltCard from "./TiltCard";

export default function Hero() {
  return (
    <section className="hero">
      <ParticlesBackground />

      <div className="hero-blob b1" aria-hidden="true" />
      <div className="hero-blob b2" aria-hidden="true" />

      <div className="hero-inner container">
        {/* Coluna de texto */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="dot" aria-hidden="true" />
            Proteção veicular 24 horas
          </div>

          <h1>
            Proteja seu veículo com{" "}
            <span className="accent">inteligência</span>
          </h1>

          <p className="slogan">
            <b>Você no controle do seu carro</b> — onde estiver, a qualquer hora.
          </p>

          <p className="lead">
            Rastreamento em tempo real, bloqueio remoto e gestão completa do seu
            veículo direto pelo celular. Tecnologia de ponta para a sua tranquilidade.
          </p>

          <div className="hero-cta">
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Proteger meu veículo pelo WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4.5 8-11.8A8 8 0 0 0 4 10.2C4 17.5 12 22 12 22z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Proteger meu veículo
            </a>
            <a href="#como" className="btn btn-ghost">Ver como funciona</a>
          </div>

          <div className="hero-stats" aria-label="Destaques da LocalCar">
            <div className="hero-stat">
              <div className="num">24h</div>
              <div className="lbl">Monitoramento</div>
            </div>
            <div className="hero-divider" aria-hidden="true" />
            <div className="hero-stat">
              <div className="num">100%</div>
              <div className="lbl">Pelo aplicativo</div>
            </div>
            <div className="hero-divider" aria-hidden="true" />
            <div className="hero-stat">
              <div className="num">iOS+And</div>
              <div className="lbl">Multiplataforma</div>
            </div>
          </div>
        </div>

        {/* Coluna visual — device card com tilt 3D */}
        <div className="hero-visual" aria-hidden="true">
          <TiltCard maxDeg={9} style={{ height: "auto" }}>
            {/* Float tags */}
            <div className="float-tag t1">
              <div className="ico ico-pin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M12 22s8-4.5 8-11.8A8 8 0 0 0 4 10.2C4 17.5 12 22 12 22z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              Localizado
            </div>

            <div className="float-tag t2">
              <div className="ico ico-lock">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <rect x="5" y="11" width="14" height="10" rx="2"/>
                  <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
                </svg>
              </div>
              Bloqueado
            </div>

            {/* Device card */}
            <div className="device">
              <div className="device-screen">
                <div className="ds-head">
                  <div className="ds-title">
                    <span className="ds-live" />
                    Meu Veículo
                  </div>
                  <span className="ds-ao-vivo">Ao vivo</span>
                </div>

                <div className="ds-map">
                  <svg className="ds-route" viewBox="0 0 300 200" preserveAspectRatio="none">
                    <path d="M55 130 Q 130 50 175 95 T 250 50"/>
                  </svg>
                  <div className="ds-pin s" />
                  <div className="ds-pin e" />
                </div>

                <div className="ds-info">
                  <div className="ds-row">
                    <span className="ds-lbl">Status</span>
                    <span className="ds-val on">● Em movimento</span>
                  </div>
                  <div className="ds-row">
                    <span className="ds-lbl">Velocidade</span>
                    <span className="ds-val">62 km/h</span>
                  </div>
                  <div className="ds-row">
                    <span className="ds-lbl">Bloqueio do motor</span>
                    <div className="ds-toggle" />
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          padding-top: 90px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(ellipse 70% 60% at 78% 35%, rgba(224,160,48,0.16), transparent 60%),
            var(--bg);
        }

        /* blobs */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(60px);
          opacity: 0.5;
          z-index: 0;
        }
        .hero-blob.b1 {
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(196,90,40,0.30), transparent 70%);
          top: -100px; right: -80px;
          animation: drift 14s ease-in-out infinite;
        }
        .hero-blob.b2 {
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
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
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
          border: 1px solid rgba(196,90,40,0.25);
          color: var(--terra-dark);
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 50px;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateY(20px);
          animation: rise 0.7s ease forwards;
        }
        .dot {
          width: 7px; height: 7px;
          background: var(--terra);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        /* heading */
        .hero-text h1 {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(42px, 6vw, 82px);
          font-weight: 900;
          line-height: 0.98;
          letter-spacing: -1.5px;
          color: var(--text);
          margin-bottom: 18px;
          opacity: 0;
          transform: translateY(24px);
          animation: rise 0.7s ease 0.1s forwards;
        }
        .hero-text h1 .accent {
          background: linear-gradient(120deg, var(--terra), var(--amber));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
        }

        /* slogan */
        .slogan {
          font-size: clamp(16px, 1.8vw, 20px);
          font-weight: 500;
          color: var(--mute);
          margin-bottom: 24px;
          opacity: 0;
          transform: translateY(24px);
          animation: rise 0.7s ease 0.2s forwards;
        }
        .slogan b {
          display: block;
          font-family: var(--font-fraunces), serif;
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 800;
          font-style: italic;
          line-height: 1.05;
          letter-spacing: -0.5px;
          background: linear-gradient(120deg, var(--terra-dark), var(--amber));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
        }

        /* lead */
        .lead {
          color: var(--mute);
          font-size: 17px;
          max-width: 480px;
          margin-bottom: 36px;
          line-height: 1.78;
          opacity: 0;
          transform: translateY(24px);
          animation: rise 0.7s ease 0.3s forwards;
        }

        /* CTAs */
        .hero-cta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(24px);
          animation: rise 0.7s ease 0.4s forwards;
        }

        /* stats */
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-top: 48px;
          opacity: 0;
          animation: rise 0.7s ease 0.5s forwards;
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

        /* ---- Visual / device card ---- */
        .hero-visual {
          display: flex;
          justify-content: center;
          opacity: 0;
          animation: rise 0.9s ease 0.3s forwards;
          perspective: 1000px;
        }

        /* Float tags */
        .float-tag {
          position: absolute;
          background: var(--paper);
          border: 1px solid var(--line-soft);
          border-radius: 14px;
          padding: 10px 14px;
          box-shadow: 0 14px 30px rgba(120,72,30,0.18);
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text);
          white-space: nowrap;
          z-index: 4;
        }
        .float-tag .ico {
          width: 30px; height: 30px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ico-pin  { background: linear-gradient(135deg, var(--terra), var(--mustard)); }
        .ico-lock { background: linear-gradient(135deg, var(--amber), var(--mustard)); }
        .float-tag.t1 { top: 30px; left: -46px; animation: floaty 4s ease-in-out infinite; }
        .float-tag.t2 { bottom: 50px; right: -40px; animation: floaty 5s ease-in-out infinite 0.6s; }
        @keyframes floaty {
          0%, 100% { transform: translateY(0);   }
          50%       { transform: translateY(-12px); }
        }

        /* Device */
        .device {
          width: 300px;
          background: var(--paper);
          border-radius: 30px;
          padding: 20px;
          box-shadow: 0 40px 80px rgba(120,72,30,0.25), 0 0 0 1px var(--line-soft);
        }
        .device-screen {
          background: linear-gradient(165deg, #fff, var(--bg2));
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--line-soft);
        }

        /* ds-head */
        .ds-head {
          padding: 16px 18px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ds-title {
          font-weight: 600;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .ds-live {
          display: inline-block;
          width: 7px; height: 7px;
          background: #3FB871;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(63,184,113,0.5);
          animation: pulse 2s infinite;
        }
        .ds-ao-vivo {
          font-size: 11px;
          color: var(--mute);
        }

        /* ds-map */
        .ds-map {
          height: 200px;
          position: relative;
          background:
            linear-gradient(rgba(196,90,40,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,90,40,0.06) 1px, transparent 1px),
            linear-gradient(135deg, #F6EEDF, #EFE3CE);
          background-size: 24px 24px, 24px 24px, 100% 100%;
        }
        .ds-route {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
        }
        .ds-route path {
          fill: none;
          stroke: var(--terra);
          stroke-width: 3;
          stroke-linecap: round;
          stroke-dasharray: 6 8;
          animation: dash 1.4s linear infinite;
        }
        @keyframes dash { to { stroke-dashoffset: -28; } }

        .ds-pin {
          position: absolute;
          width: 20px; height: 20px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
        }
        .ds-pin::after {
          content: '';
          position: absolute;
          top: 5px; left: 5px;
          width: 10px; height: 10px;
          background: #fff;
          border-radius: 50%;
        }
        .ds-pin.s { background: var(--amber); top: 60%; left: 20%; }
        .ds-pin.e { background: var(--terra); top: 25%; right: 20%; animation: bob 1.8s ease-in-out infinite; }
        @keyframes bob {
          0%, 100% { transform: rotate(-45deg) translateY(0);   }
          50%       { transform: rotate(-45deg) translateY(-7px); }
        }

        /* ds-info */
        .ds-info {
          padding: 14px 18px;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .ds-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ds-lbl {
          font-size: 11px;
          color: var(--mute);
        }
        .ds-val {
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
        }
        .ds-val.on { color: #3FB871; }
        .ds-toggle {
          width: 40px; height: 23px;
          background: #3FB871;
          border-radius: 50px;
          position: relative;
          flex-shrink: 0;
        }
        .ds-toggle::after {
          content: '';
          position: absolute;
          top: 3px; right: 3px;
          width: 17px; height: 17px;
          background: #fff;
          border-radius: 50%;
        }

        @keyframes rise { to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 1020px) {
          .hero-inner { gap: 40px; }
          .float-tag.t1 { left: -10px; }
          .float-tag.t2 { right: -10px; }
        }
        @media (max-width: 860px) {
          .hero-inner { grid-template-columns: 1fr; padding-top: 50px; }
          .hero-visual { max-width: 360px; margin: 0 auto; }
          .float-tag.t1 { left: -10px; }
          .float-tag.t2 { right: -10px; }
        }
        @media (max-width: 480px) {
          .hero-stats { gap: 20px; }
          .hero-stat .num { font-size: 28px; }
          .device { width: 260px; }
        }
      `}</style>
    </section>
  );
}
