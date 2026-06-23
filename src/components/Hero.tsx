import { linkWhatsApp } from "@/config";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-orb hero-orb1" />
      <div className="hero-orb hero-orb2" />

      <div className="hero-inner container">
        {/* ---- LEFT: Content ---- */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Tecnologia em rastreamento 24h
          </div>

          <h1>
            Proteja seu<br />
            veículo <span className="grad">24H</span>
          </h1>

          <div className="slogan">
            <span className="sw">Você</span>{" "}
            <span className="sb">no controle</span>{" "}
            <span className="sr">do seu carro</span>
          </div>

          <p className="lead">
            Rastreamento em tempo real, bloqueio remoto e inteligência
            total sobre o seu veículo — direto do seu celular.
          </p>

          <div className="hero-cta">
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Icon name="pin" style={{ width: 20, height: 20 }} />
              Proteger meu veículo
            </a>
            <a href="#como" className="btn btn-ghost">
              Ver tecnologia
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num tech">24/7</div>
              <div className="lbl">Monitoramento ativo</div>
            </div>
            <div className="hero-stat">
              <div className="num tech">100%</div>
              <div className="lbl">Controle pelo app</div>
            </div>
            <div className="hero-stat">
              <div className="num tech">iOS+And</div>
              <div className="lbl">Multiplataforma</div>
            </div>
          </div>
        </div>

        {/* ---- RIGHT: Visual Panel ---- */}
        <div className="hero-visual">
          <div className="hv-panel">
            <div className="hvp-header">
              <div className="hvp-live">
                <span className="hvp-live-dot" />
                LocalCar · Ao vivo
              </div>
              <div className="hvp-wdots">
                <span className="wd-r" />
                <span className="wd-y" />
                <span className="wd-g" />
              </div>
            </div>

            <div className="hvp-map">
              <div className="hvp-map-grid" />
              <svg className="hvp-route" viewBox="0 0 360 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFB800" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path d="M40 155 Q 100 95 160 118 Q 220 142 270 78 T 330 55" />
              </svg>
              <div className="hvp-pin hvp-pin-a" />
              <div className="hvp-pin hvp-pin-b" />
              <div className="hvp-toast">
                <span className="hvp-toast-dot" />
                Veículo localizado · Zona Sul
              </div>
            </div>

            <div className="hvp-stats">
              <div className="hvp-stat">
                <div className="hvs-l">STATUS</div>
                <div className="hvs-v hvs-green">● Ativo</div>
              </div>
              <div className="hvp-stat">
                <div className="hvs-l">VELOCIDADE</div>
                <div className="hvs-v hvs-blue">62<small>km/h</small></div>
              </div>
              <div className="hvp-stat">
                <div className="hvs-l">PERCORRIDO</div>
                <div className="hvs-v hvs-amber">47<small>km</small></div>
              </div>
            </div>
          </div>

          {/* Floating: lock alert */}
          <div className="hv-float hv-float-block">
            <div className="hvf-icon">
              <Icon name="lock" />
            </div>
            <div>
              <div className="hvf-t">Bloqueio ativo</div>
              <div className="hvf-s">Motor desligado via app</div>
            </div>
          </div>

          {/* Floating: speed */}
          <div className="hv-float hv-float-speed">
            <div className="hvf-speed tech">62</div>
            <div className="hvf-unit">km/h</div>
          </div>

          {/* Radar accent */}
          <div className="hv-radar">
            <div className="hv-radar-r" />
            <div className="hv-radar-r" />
            <div className="hv-radar-r" />
            <div className="hv-radar-sweep" />
            <div className="hv-radar-dot" />
          </div>
        </div>
      </div>

      <style>{`
        /* == BASE == */
        .hero {
          position: relative;
          min-height: 100vh;
          padding-top: 80px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(145deg, #FDFCF8 0%, #FFF8E6 50%, #FFF3CC 100%);
        }
        .hero-bg-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px);
          background-size: 44px 44px;
        }
        .hero-orb { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
        .hero-orb1 {
          width: 700px; height: 700px; top: -250px; right: -150px;
          background: radial-gradient(circle, rgba(255,184,0,0.22), transparent 65%);
        }
        .hero-orb2 {
          width: 450px; height: 450px; bottom: -100px; left: 10%;
          background: radial-gradient(circle, rgba(37,99,235,0.1), transparent 65%);
        }

        /* == LAYOUT == */
        .hero-inner {
          position: relative; z-index: 3;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: center;
          padding-top: 50px; padding-bottom: 60px;
        }

        /* == LEFT == */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,184,0,0.12); border: 1px solid rgba(255,184,0,0.45);
          color: #7A4500; font-weight: 700; font-size: 11px; letter-spacing: 2px;
          text-transform: uppercase; padding: 8px 16px; border-radius: 50px;
          margin-bottom: 28px; animation: fadeUp 0.7s ease both;
        }
        .badge-dot {
          width: 6px; height: 6px; background: #FFB800; border-radius: 50%;
          box-shadow: 0 0 6px rgba(255,184,0,0.9);
          animation: pulse 2s infinite;
        }
        .hero h1 {
          font-weight: 900; font-size: clamp(42px, 5.5vw, 82px); line-height: 0.95;
          letter-spacing: -2.5px; margin-bottom: 18px;
          animation: fadeUp 0.7s ease 0.1s both; color: #080808;
        }
        .hero h1 .grad {
          background: linear-gradient(120deg, #FFB800 20%, #FF5500 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .slogan {
          font-family: 'Chakra Petch', sans-serif;
          font-size: clamp(13px, 1.8vw, 21px); font-weight: 700;
          text-transform: uppercase; letter-spacing: 3px; margin-bottom: 22px;
          animation: fadeUp 0.7s ease 0.2s both;
        }
        .slogan .sw { color: #1A1A1A; }
        .slogan .sb { color: var(--blue); }
        .slogan .sr { color: #FFB800; }
        .lead {
          color: var(--mute); font-size: 16.5px; max-width: 440px;
          margin-bottom: 34px; line-height: 1.7;
          animation: fadeUp 0.7s ease 0.3s both;
        }
        .hero-cta { display: flex; gap: 14px; flex-wrap: wrap; animation: fadeUp 0.7s ease 0.4s both; }
        .hero-stats {
          display: flex; gap: 32px; margin-top: 44px;
          padding-top: 32px; border-top: 1px solid rgba(0,0,0,0.08);
          animation: fadeUp 0.7s ease 0.5s both;
        }
        .hero-stat .num {
          font-family: 'Chakra Petch', sans-serif; font-size: 34px; font-weight: 700; line-height: 1;
          background: linear-gradient(120deg, #FFB800, #FF5500);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .hero-stat .lbl { color: var(--mute2); font-size: 12px; margin-top: 5px; letter-spacing: 0.5px; }

        /* == RIGHT == */
        .hero-visual {
          position: relative;
          padding: 40px 40px 60px 10px;
          animation: fadeUp 0.9s ease 0.35s both;
        }

        /* Main panel */
        .hv-panel {
          background: rgba(255,255,255,0.93);
          border: 1px solid rgba(255,184,0,0.22);
          border-radius: 22px; padding: 20px;
          box-shadow:
            0 24px 64px rgba(0,0,0,0.12),
            0 4px 16px rgba(255,184,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.8);
          backdrop-filter: blur(20px);
          animation: hvfloat 7s ease-in-out infinite;
        }
        @keyframes hvfloat {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        .hvp-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 14px;
        }
        .hvp-live {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Chakra Petch', sans-serif; font-size: 12px; font-weight: 600;
          color: #222; letter-spacing: 0.5px;
        }
        .hvp-live-dot {
          width: 7px; height: 7px; background: #22e07a; border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(34,224,122,0.2); animation: pulse 2s infinite;
        }
        .hvp-wdots { display: flex; gap: 5px; }
        .hvp-wdots span { width: 10px; height: 10px; border-radius: 50%; }
        .wd-r { background: #FF5F56; }
        .wd-y { background: #FFBD2E; }
        .wd-g { background: #27C93F; }

        /* Map */
        .hvp-map {
          height: 190px; border-radius: 14px; position: relative; overflow: hidden;
          background: linear-gradient(135deg, #ECF2FF 0%, #FFFBE8 100%);
          border: 1px solid rgba(0,0,0,0.06); margin-bottom: 14px;
        }
        .hvp-map-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.055) 1px, transparent 1px);
          background-size: 22px 22px;
        }
        .hvp-route { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
        .hvp-route path {
          fill: none; stroke: url(#rg); stroke-width: 3.5;
          stroke-linecap: round; stroke-dasharray: 9 11;
          filter: drop-shadow(0 2px 8px rgba(255,184,0,0.4));
          animation: routedash 1.6s linear infinite;
        }
        @keyframes routedash { to { stroke-dashoffset: -40; } }

        .hvp-pin {
          position: absolute; width: 18px; height: 18px;
          border-radius: 50% 50% 50% 0; transform: rotate(-45deg);
        }
        .hvp-pin::after {
          content: ''; position: absolute; top: 5px; left: 5px;
          width: 8px; height: 8px; background: #fff; border-radius: 50%;
        }
        .hvp-pin-a {
          bottom: 30%; left: 13%;
          background: #2563EB; box-shadow: 0 0 12px rgba(37,99,235,0.5);
        }
        .hvp-pin-b {
          top: 22%; right: 13%;
          background: #FFB800; box-shadow: 0 0 12px rgba(255,184,0,0.6);
          animation: pinbob 2.2s ease-in-out infinite;
        }
        @keyframes pinbob {
          0%,100% { transform: rotate(-45deg) translateY(0); }
          50% { transform: rotate(-45deg) translateY(-6px); }
        }
        .hvp-toast {
          position: absolute; bottom: 10px; left: 10px; right: 10px;
          background: rgba(255,255,255,0.97);
          border: 1px solid rgba(34,224,122,0.4);
          border-radius: 10px; padding: 8px 12px;
          font-size: 12px; font-weight: 600; color: #1A1A1A;
          display: flex; align-items: center; gap: 8px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
          animation: toastIn 0.5s ease 1.2s both;
        }
        @keyframes toastIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hvp-toast-dot {
          width: 7px; height: 7px; background: #22e07a; border-radius: 50%;
          box-shadow: 0 0 6px rgba(34,224,122,0.8); flex-shrink: 0;
        }

        /* Stats */
        .hvp-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .hvp-stat {
          background: #F8F7F3; border: 1px solid rgba(0,0,0,0.07);
          border-radius: 10px; padding: 11px 12px;
        }
        .hvs-l {
          font-size: 9.5px; letter-spacing: 0.6px; color: var(--mute2);
          margin-bottom: 4px; font-family: 'Chakra Petch', sans-serif;
        }
        .hvs-v { font-family: 'Chakra Petch', sans-serif; font-size: 16px; font-weight: 700; }
        .hvs-v small { font-size: 10px; font-weight: 400; opacity: 0.75; }
        .hvs-green { color: #1DB85A; }
        .hvs-blue { color: #2563EB; }
        .hvs-amber { color: #FFB800; }

        /* Floating cards */
        .hv-float {
          position: absolute;
          background: rgba(255,255,255,0.97);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .hv-float-block {
          display: flex; align-items: center; gap: 12px;
          padding: 13px 16px;
          bottom: 20px; left: -16px;
          animation: floatL 5.5s ease-in-out 0.8s infinite;
        }
        @keyframes floatL {
          0%,100% { transform: translateY(0) rotate(-1.5deg); }
          50% { transform: translateY(-10px) rotate(-1.5deg); }
        }
        .hvf-icon {
          width: 36px; height: 36px;
          background: rgba(255,184,0,0.12); border: 1px solid rgba(255,184,0,0.3);
          border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .hvf-icon :global(svg) { width: 18px; height: 18px; stroke: #FFB800; }
        .hvf-t { font-size: 12.5px; font-weight: 700; color: #1A1A1A; }
        .hvf-s { font-size: 11px; color: var(--mute); }

        .hv-float-speed {
          display: flex; align-items: baseline; gap: 3px;
          padding: 13px 16px;
          top: 55px; right: -16px;
          animation: floatR 4.5s ease-in-out 0.4s infinite;
        }
        @keyframes floatR {
          0%,100% { transform: translateY(0) rotate(1.5deg); }
          50% { transform: translateY(-11px) rotate(1.5deg); }
        }
        .hvf-speed { font-size: 30px; font-weight: 800; color: #2563EB; font-family: 'Chakra Petch', sans-serif; line-height: 1; }
        .hvf-unit { font-size: 12px; color: var(--mute); font-weight: 600; }

        /* Mini radar */
        .hv-radar {
          position: absolute; bottom: -20px; right: 30px;
          width: 88px; height: 88px; border-radius: 50%;
          opacity: 0.28; pointer-events: none;
        }
        .hv-radar-r { position: absolute; inset: 0; border-radius: 50%; border: 1px solid rgba(255,184,0,0.5); }
        .hv-radar-r:nth-child(2) { inset: 22%; border-color: rgba(255,184,0,0.7); }
        .hv-radar-r:nth-child(3) { inset: 44%; border-color: rgba(255,184,0,0.9); }
        .hv-radar-sweep {
          position: absolute; inset: 0; border-radius: 50%;
          background: conic-gradient(from 0deg, transparent 0deg, transparent 290deg, rgba(255,184,0,0.55) 360deg);
          animation: hwsweep 3s linear infinite;
        }
        @keyframes hwsweep { to { transform: rotate(360deg); } }
        .hv-radar-dot {
          position: absolute; width: 6px; height: 6px;
          background: #FFB800; border-radius: 50%; top: 28%; left: 58%;
          box-shadow: 0 0 8px rgba(255,184,0,0.9);
          animation: hwblip 3s ease-in-out 0.6s infinite;
        }
        @keyframes hwblip {
          0%,100% { opacity: 0.3; transform: scale(0.7); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        /* == RESPONSIVE == */
        @media (max-width: 1024px) {
          .hero-inner { gap: 40px; }
        }
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-visual { display: none; }
          .hero-content { max-width: 560px; }
        }
        @media (max-width: 680px) {
          .hero-stats { gap: 20px; }
          .hero h1 { letter-spacing: -1.5px; }
          .lead { font-size: 15.5px; }
        }
      `}</style>
    </section>
  );
}
