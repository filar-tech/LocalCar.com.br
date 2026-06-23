import { site, linkWhatsApp } from "@/config";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="radar">
        <div className="radar-ring" /><div className="radar-ring" />
        <div className="radar-ring" /><div className="radar-ring" />
        <div className="radar-sweep" />
        <div className="radar-dot d1" /><div className="radar-dot d2" /><div className="radar-dot d3" />
      </div>

      <div className="hero-inner container">
        <div className="hero-badge"><span className="dot" /> Tecnologia em rastreamento 24h</div>
        <h1>
          <span className="glow">Proteja seu</span>
          <br />veículo <span className="grad">24H</span>
        </h1>
        <div className="slogan">
          <span className="w">Você</span> <span className="b">no controle</span>{" "}
          <span className="r">do seu carro</span>
        </div>
        <p className="lead">
          Rastreamento em tempo real, bloqueio remoto e inteligência total sobre o seu veículo —
          direto do seu celular. Tecnologia de ponta para proteger o que é seu.
        </p>
        <div className="hero-cta">
          <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Icon name="pin" style={{ width: 20, height: 20 }} />
            Proteger meu veículo
          </a>
          <a href="#como" className="btn btn-ghost">Ver tecnologia</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="num tech">24/7</div><div className="lbl">Monitoramento ativo</div></div>
          <div className="hero-stat"><div className="num tech">100%</div><div className="lbl">Controle pelo app</div></div>
          <div className="hero-stat"><div className="num tech">iOS+And</div><div className="lbl">Multiplataforma</div></div>
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
          background: radial-gradient(ellipse 90% 70% at 50% 0%, #0d1420 0%, var(--black) 60%);
        }
        .hero-grid {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 55%;
          background-image: linear-gradient(rgba(255,184,0,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,184,0,0.07) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: perspective(400px) rotateX(60deg);
          transform-origin: bottom;
          mask-image: linear-gradient(to top, black, transparent);
          -webkit-mask-image: linear-gradient(to top, black, transparent);
          animation: gridmove 8s linear infinite;
        }
        @keyframes gridmove { from { background-position: 0 0; } to { background-position: 0 50px; } }
        .radar {
          position: absolute;
          top: 50%; left: 75%;
          transform: translate(-50%, -50%);
          width: 680px; height: 680px;
          border-radius: 50%;
          opacity: 0.5;
          pointer-events: none;
        }
        .radar-ring { position: absolute; inset: 0; border: 1px solid rgba(255,184,0,0.12); border-radius: 50%; }
        .radar-ring:nth-child(2) { inset: 22%; border-color: rgba(255,184,0,0.16); }
        .radar-ring:nth-child(3) { inset: 44%; border-color: rgba(255,184,0,0.2); }
        .radar-ring:nth-child(4) { inset: 66%; border-color: rgba(255,184,0,0.26); }
        .radar-sweep {
          position: absolute; inset: 0; border-radius: 50%;
          background: conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(255,184,0,0.3) 360deg);
          animation: sweep 4s linear infinite;
        }
        @keyframes sweep { to { transform: rotate(360deg); } }
        .radar-dot { position: absolute; width: 8px; height: 8px; background: var(--red); border-radius: 50%; box-shadow: 0 0 12px var(--red); }
        .radar-dot.d1 { top: 32%; left: 60%; animation: blip 3s ease-in-out infinite; }
        .radar-dot.d2 { top: 58%; left: 40%; animation: blip 3s ease-in-out infinite 1s; }
        .radar-dot.d3 { top: 46%; left: 72%; background: var(--yellow); box-shadow: 0 0 12px var(--yellow); animation: blip 3s ease-in-out infinite 1.8s; }
        @keyframes blip { 0%,100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.4); } }
        .hero-inner { position: relative; z-index: 3; max-width: 780px; padding-top: 60px; padding-bottom: 60px; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,184,0,0.1); border: 1px solid rgba(255,184,0,0.35);
          color: var(--red); font-weight: 600; font-size: 12px; letter-spacing: 2px;
          text-transform: uppercase; padding: 8px 18px; border-radius: 50px; margin-bottom: 30px;
          animation: fadeUp 0.8s ease both;
        }
        .hero-badge .dot { width: 7px; height: 7px; background: var(--red); border-radius: 50%; animation: pulse 2s infinite; }
        .hero h1 {
          font-weight: 800; font-size: clamp(46px, 7vw, 92px); line-height: 0.98;
          letter-spacing: -2px; margin-bottom: 18px; animation: fadeUp 0.8s ease 0.1s both;
        }
        .hero h1 .grad { background: linear-gradient(120deg, var(--red), var(--yellow)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .hero h1 .glow { color: #fff; text-shadow: 0 0 40px rgba(255,255,255,0.25); }
        .slogan {
          font-family: 'Chakra Petch', sans-serif; font-size: clamp(18px, 2.6vw, 28px);
          font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 26px;
          animation: fadeUp 0.8s ease 0.2s both;
        }
        .slogan .b { color: var(--blue); } .slogan .r { color: var(--red); } .slogan .w { color: #fff; }
        .lead { color: var(--mute); font-size: 18px; max-width: 540px; margin-bottom: 38px; animation: fadeUp 0.8s ease 0.3s both; }
        .hero-cta { display: flex; gap: 16px; flex-wrap: wrap; animation: fadeUp 0.8s ease 0.4s both; }
        .hero-stats { display: flex; gap: 48px; margin-top: 54px; animation: fadeUp 0.8s ease 0.5s both; }
        .hero-stat .num { font-family: 'Chakra Petch', sans-serif; font-size: 42px; font-weight: 700; line-height: 1; background: linear-gradient(120deg, #fff, var(--blue)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-stat .lbl { color: var(--mute2); font-size: 13px; margin-top: 6px; letter-spacing: 0.5px; }
        @media (max-width: 980px) { .radar { opacity: 0.25; left: 50%; } }
        @media (max-width: 680px) { .hero-stats { gap: 28px; } }
      `}</style>
    </section>
  );
}
