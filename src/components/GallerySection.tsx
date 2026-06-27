"use client";

import Reveal from "./Reveal";

const photos = [
  {
    src: "/173eb36c-53bb-4c55-a07f-b895ad93fc26.jpg",
    alt: "Kits LocalCar prontos para instalação",
    caption: "Kits prontos para instalação",
    area: "a",
  },
  {
    src: "/1c99743a-a06d-49bb-abc6-12c49cda3823.jpg",
    alt: "Rastreador LocalCar instalado em veículo",
    caption: "Instalado no veículo do cliente",
    area: "b",
  },
  {
    src: "/84efdc9a-3846-4899-9893-322dec5288e6.jpg",
    alt: "Embalagem LocalCar com esquema de ligação",
    caption: "Embalagem com esquema de ligação",
    area: "c",
  },
  {
    src: "/5ca1c8c1-4dfb-4e78-9c65-003bb2ebb776.jpg",
    alt: "LocalCar — Você no controle do seu carro",
    caption: "Você no controle do seu carro",
    area: "d",
  },
];

const videos = [
  { src: "/faec7a25-0629-4d11-9a97-6aa7edbb404f.mp4", label: "Instalação rápida e segura"  },
  { src: "/d66e4edc-9978-487c-bfaa-76093a4f88fc.mp4",  label: "Rastreamento em tempo real"  },
  { src: "/39424b04-8850-4648-9ec5-c235e1244c79.mp4",  label: "Controle total pelo celular" },
];

export default function GallerySection() {
  return (
    <section className="gallery-sec" id="galeria">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <span className="sec-tag">Na prática</span>
            <h2 className="sec-title">
              Produto real, <span className="grad">resultado real</span>
            </h2>
            <p className="sec-sub">
              Veja como o rastreador LocalCar chega até você e funciona no dia a dia.
            </p>
          </div>
        </Reveal>

        {/* Bento grid de fotos */}
        <Reveal delay={60}>
          <div className="photo-bento">
            {photos.map((p) => (
              <div key={p.src} className={`photo-item photo-${p.area}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} />
                <div className="photo-caption">{p.caption}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Grid de vídeos */}
        <Reveal delay={120}>
          <div className="video-grid">
            {videos.map((v) => (
              <div key={v.src} className="video-wrap">
                <video
                  src={v.src}
                  controls
                  preload="none"
                  playsInline
                  className="video-player"
                />
                <p className="video-label">{v.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .gallery-sec {
          padding: 110px 0;
          background: var(--bg2);
          position: relative;
          overflow: hidden;
        }
        .gallery-sec::before {
          content: '';
          position: absolute;
          top: 10%; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(214,154,30,0.06), transparent 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        /* ---- Bento grid ---- */
        .photo-bento {
          display: grid;
          grid-template-areas:
            "a a b"
            "c d b";
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 300px 300px;
          gap: 14px;
          margin-bottom: 48px;
        }

        .photo-item {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          cursor: zoom-in;
          background: var(--bg);
        }
        .photo-a { grid-area: a; }
        .photo-b { grid-area: b; }
        .photo-c { grid-area: c; }
        .photo-d { grid-area: d; }

        .photo-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .photo-item:hover img {
          transform: scale(1.06);
        }

        .photo-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 28px 18px 14px;
          background: linear-gradient(to top, rgba(43,35,16,0.75), transparent);
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.2px;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }
        .photo-item:hover .photo-caption {
          transform: translateY(0);
        }

        /* ---- Videos ---- */
        .video-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .video-wrap {
          background: var(--paper);
          border: 1px solid var(--line-soft);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px var(--shadow);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .video-wrap:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 44px var(--shadow);
        }

        .video-player {
          width: 100%;
          display: block;
          background: #1a1308;
          aspect-ratio: 16 / 9;
          object-fit: cover;
        }

        .video-label {
          padding: 14px 18px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          text-align: center;
          font-family: var(--font-outfit), sans-serif;
        }

        /* ---- Responsivo ---- */
        @media (max-width: 980px) {
          .photo-bento {
            grid-template-areas:
              "a a"
              "c b"
              "d b";
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 240px 260px 260px;
          }
          .video-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 620px) {
          .photo-bento {
            grid-template-areas:
              "a"
              "b"
              "c"
              "d";
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 260px);
          }
          .video-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
