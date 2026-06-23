import { recursos, comoFunciona, publicos } from "@/config";
import Icon from "./Icon";

export function Marquee() {
  const items = ["Localização em tempo real", "Bloqueio remoto do motor", "Cerca virtual inteligente", "Estatísticas do veículo", "Instalação rápida", "App iOS & Android"];
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="mq-track">
        {all.map((t, i) => <span className="mq-item" key={i}>{t}</span>)}
      </div>
      <style>{`
        .marquee { background: var(--black2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 20px 0; overflow: hidden; }
        .mq-track { display: flex; gap: 50px; white-space: nowrap; animation: scroll 24s linear infinite; width: max-content; }
        .mq-item { font-family: 'Chakra Petch', sans-serif; font-weight: 600; font-size: 16px; text-transform: uppercase; letter-spacing: 2px; color: var(--mute); display: flex; align-items: center; gap: 14px; }
        .mq-item::before { content: '///'; color: var(--red); letter-spacing: -2px; }
        @keyframes scroll { to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}

export function Features() {
  const glows = ["var(--blue)", "var(--red)", "var(--yellow)", "var(--blue)", "var(--red)", "var(--yellow)"];
  return (
    <section className="features" id="recursos">
      <div className="container">
        <div className="sec-head">
          <span className="sec-tag">Recursos</span>
          <h2 className="sec-title">Controle total <span className="grad">na palma da mão</span></h2>
          <p className="sec-sub">Tecnologia de ponta para você acompanhar e proteger seu veículo de onde estiver.</p>
        </div>
        <div className="feat-grid">
          {recursos.map((r, i) => (
            <div className="feat-card" key={r.id}>
              <span className="feat-num tech">{String(i + 1).padStart(2, "0")}</span>
              <div className="feat-glow" style={{ background: glows[i] }} />
              <div className="feat-icon"><Icon name={r.icone} /></div>
              <h3>{r.titulo}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .features { padding: 110px 0; position: relative; }
        .features::before { content: ''; position: absolute; top: 10%; left: -10%; width: 500px; height: 500px; background: radial-gradient(circle, var(--red-glow), transparent 70%); opacity: 0.15; filter: blur(60px); }
        .feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; position: relative; }
        .feat-card { background: linear-gradient(160deg, var(--panel), var(--black2)); border: 1px solid var(--line); border-radius: 18px; padding: 34px 30px; position: relative; overflow: hidden; transition: all 0.4s; }
        .feat-card:hover { transform: translateY(-8px); border-color: rgba(255,184,0,0.4); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .feat-glow { position: absolute; top: -40px; right: -40px; width: 120px; height: 120px; border-radius: 50%; opacity: 0; transition: 0.4s; filter: blur(30px); }
        .feat-card:hover .feat-glow { opacity: 0.4; }
        .feat-icon { width: 58px; height: 58px; border-radius: 14px; background: rgba(255,184,0,0.1); border: 1px solid rgba(255,184,0,0.25); display: flex; align-items: center; justify-content: center; margin-bottom: 22px; transition: 0.4s; }
        .feat-card:hover .feat-icon { background: rgba(255,184,0,0.18); border-color: rgba(255,184,0,0.4); }
        .feat-icon :global(svg) { width: 28px; height: 28px; stroke: var(--red); transition: 0.4s; }
        .feat-card:hover .feat-icon :global(svg) { stroke: var(--red); }
        .feat-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 10px; }
        .feat-card p { color: var(--mute); font-size: 14.5px; }
        .feat-num { position: absolute; top: 24px; right: 28px; font-family: 'Chakra Petch', sans-serif; font-size: 14px; color: var(--mute2); letter-spacing: 1px; }
        @media (max-width: 980px) { .feat-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 680px) { .feat-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="how" id="como">
      <div className="container">
        <div className="how-grid">
          <div>
            <span className="sec-tag">Como funciona</span>
            <h2 className="sec-title" style={{ textAlign: "left" }}>Do início <span className="grad">ao controle total</span></h2>
            <p className="sec-sub" style={{ marginTop: 14 }}>Em poucos passos seu veículo está protegido e monitorado 24 horas.</p>
            <ul className="how-list">
              {comoFunciona.map((p) => (
                <li key={p.n}>
                  <div className="how-num">{p.n}</div>
                  <div><h4>{p.titulo}</h4><p>{p.desc}</p></div>
                </li>
              ))}
            </ul>
          </div>

          <div className="dash">
            <div className="dash-glow" />
            <div className="dash-top">
              <div className="dash-title"><span className="dash-live" /> LocalCar · Painel ao vivo</div>
              <div className="dash-dots"><span style={{ background: "var(--red)" }} /><span style={{ background: "var(--yellow)" }} /><span style={{ background: "#22e07a" }} /></div>
            </div>
            <div className="dash-map">
              <svg className="dmap-route" viewBox="0 0 400 240" preserveAspectRatio="none"><path d="M70 150 Q 160 60 220 120 T 330 60" /></svg>
              <div className="dmap-pin s" /><div className="dmap-pin e" />
            </div>
            <div className="dash-stats">
              <div className="dstat"><div className="l">STATUS</div><div className="v on">● Ativo</div></div>
              <div className="dstat"><div className="l">VELOCIDADE</div><div className="v b">62<span style={{ fontSize: 12 }}> km/h</span></div></div>
              <div className="dstat"><div className="l">PERCORRIDO</div><div className="v y">47<span style={{ fontSize: 12 }}> km</span></div></div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .how { padding: 110px 0; background: var(--black2); position: relative; overflow: hidden; }
        .how-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: center; }
        .how-list { margin-top: 40px; }
        .how-list li { display: flex; gap: 20px; margin-bottom: 28px; align-items: flex-start; position: relative; }
        .how-list li:not(:last-child)::after { content: ''; position: absolute; left: 23px; top: 50px; width: 1px; height: calc(100% - 10px); background: linear-gradient(var(--line), transparent); }
        .how-num { flex-shrink: 0; width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, var(--red), #CC8C00); color: #111; display: flex; align-items: center; justify-content: center; font-family: 'Chakra Petch', sans-serif; font-weight: 700; font-size: 20px; box-shadow: 0 0 24px var(--red-glow); }
        .how-list h4 { font-size: 19px; font-weight: 700; margin-bottom: 4px; }
        .how-list p { color: var(--mute); font-size: 14.5px; }
        .dash { background: linear-gradient(160deg, var(--panel), var(--black)); border: 1px solid var(--line); border-radius: 22px; padding: 22px; position: relative; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
        .dash-glow { position: absolute; top: -80px; right: -80px; width: 260px; height: 260px; background: radial-gradient(circle, var(--red-glow), transparent 70%); opacity: 0.3; filter: blur(50px); }
        .dash-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; position: relative; }
        .dash-title { font-family: 'Chakra Petch', sans-serif; font-size: 14px; font-weight: 600; letter-spacing: 1px; display: flex; align-items: center; gap: 8px; }
        .dash-live { width: 7px; height: 7px; background: #22e07a; border-radius: 50%; box-shadow: 0 0 10px #22e07a; animation: pulse 2s infinite; }
        .dash-dots { display: flex; gap: 6px; }
        .dash-dots span { width: 9px; height: 9px; border-radius: 50%; }
        .dash-map { height: 240px; border-radius: 14px; position: relative; overflow: hidden; background: linear-gradient(135deg, #FFF8E0, #FFFDE4); border: 1px solid var(--line); margin-bottom: 16px; }
        .dash-map::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,184,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,184,0,0.08) 1px, transparent 1px); background-size: 26px 26px; }
        .dmap-route { position: absolute; inset: 0; width: 100%; height: 100%; }
        .dmap-route path { fill: none; stroke: var(--yellow); stroke-width: 3; stroke-linecap: round; stroke-dasharray: 7 9; filter: drop-shadow(0 0 6px var(--yellow-glow)); animation: dash 1.4s linear infinite; }
        @keyframes dash { to { stroke-dashoffset: -32; } }
        .dmap-pin { position: absolute; width: 22px; height: 22px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); }
        .dmap-pin::after { content: ''; position: absolute; top: 6px; left: 6px; width: 10px; height: 10px; background: #fff; border-radius: 50%; }
        .dmap-pin.s { top: 62%; left: 18%; background: var(--blue); box-shadow: 0 0 14px var(--blue-glow); }
        .dmap-pin.e { top: 26%; right: 18%; background: var(--red); box-shadow: 0 0 14px var(--red-glow); animation: bob 1.8s ease-in-out infinite; }
        @keyframes bob { 0%,100% { transform: rotate(-45deg) translateY(0); } 50% { transform: rotate(-45deg) translateY(-7px); } }
        .dash-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .dstat { background: var(--panel2); border: 1px solid var(--line); border-radius: 12px; padding: 14px; }
        .dstat .l { font-size: 11px; color: var(--mute2); margin-bottom: 5px; letter-spacing: 0.5px; }
        .dstat .v { font-family: 'Chakra Petch', sans-serif; font-size: 19px; font-weight: 700; }
        .dstat .v.on { color: #22e07a; } .dstat .v.b { color: var(--blue); } .dstat .v.y { color: var(--yellow); }
        @media (max-width: 980px) { .how-grid { grid-template-columns: 1fr; } .dash { order: -1; } }
      `}</style>
    </section>
  );
}

export function Audience() {
  return (
    <section className="audience" id="publico">
      <div className="container">
        <div className="sec-head">
          <span className="sec-tag">Para quem é</span>
          <h2 className="sec-title">Para o seu carro <span className="grad">e para sua frota</span></h2>
        </div>
        <div className="aud-grid">
          {publicos.map((p) => (
            <div className={`aud-card ${p.tipo}`} key={p.tipo}>
              <div className="ic"><Icon name={p.tipo === "own" ? "car" : "truck"} /></div>
              <h3>{p.titulo}</h3>
              <p>{p.desc}</p>
              <ul>
                {p.itens.map((it) => (
                  <li key={it}><Icon name="check" /> {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .audience { padding: 110px 0; position: relative; overflow: hidden; }
        .audience::before { content: ''; position: absolute; bottom: 0; right: 10%; width: 500px; height: 500px; background: radial-gradient(circle, var(--red-glow), transparent 70%); opacity: 0.1; filter: blur(70px); }
        .aud-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; position: relative; }
        .aud-card { background: linear-gradient(160deg, var(--panel), var(--black2)); border: 1px solid var(--line); border-radius: 22px; padding: 46px 42px; transition: all 0.4s; position: relative; overflow: hidden; }
        .aud-card:hover { transform: translateY(-6px); border-color: rgba(255,255,255,0.15); }
        .aud-card .ic { width: 64px; height: 64px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 26px; }
        .aud-card.own .ic { background: rgba(255,42,32,0.12); border: 1px solid rgba(255,42,32,0.3); }
        .aud-card.fleet .ic { background: rgba(255,200,36,0.12); border: 1px solid rgba(255,200,36,0.3); }
        .aud-card .ic :global(svg) { width: 32px; height: 32px; }
        .aud-card.own .ic :global(svg) { stroke: var(--red); } .aud-card.fleet .ic :global(svg) { stroke: var(--yellow); }
        .aud-card h3 { font-size: 26px; font-weight: 800; margin-bottom: 12px; }
        .aud-card > p { color: var(--mute); font-size: 15px; margin-bottom: 22px; }
        .aud-card li { color: #cfd5e0; font-size: 14px; padding: 9px 0; display: flex; gap: 12px; align-items: center; border-bottom: 1px solid var(--line); }
        .aud-card li:last-child { border: none; }
        .aud-card li :global(svg) { width: 16px; height: 16px; stroke-width: 3; flex-shrink: 0; }
        .aud-card.own li :global(svg) { stroke: var(--red); } .aud-card.fleet li :global(svg) { stroke: var(--yellow); }
        @media (max-width: 820px) { .aud-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
