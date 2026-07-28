import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function BrandCover() {
  return (
    <section className="brand-cover">
      <div className="container">
        <Reveal>
          <div className="bc-wrap">
            <div className="bc-badge">
              <div className="bc-pin" aria-hidden="true">
                <Icon name="pin" />
              </div>
              <span>Você no controle</span>
              <span>do seu carro</span>
            </div>

            <Image
              src="/logo-localcar.png"
              alt="LocalCar - Rastreamento Automotivo"
              width={900}
              height={957}
              className="bc-logo"
            />
          </div>
        </Reveal>
      </div>

      <style>{`
        .brand-cover {
          padding: 80px 0;
          background: var(--bg2);
          position: relative;
          overflow: hidden;
        }

        .bc-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .bc-badge {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2px;
          border: 3px solid var(--yellow);
          border-radius: 22px;
          padding: 22px 52px;
          background: var(--panel);
          box-shadow: 0 16px 40px var(--shadow);
          font-family: var(--font-barlow), sans-serif;
          font-weight: 800;
          font-size: clamp(24px, 3.4vw, 40px);
          line-height: 1.15;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          color: var(--navy);
          margin-bottom: 44px;
        }

        .bc-pin {
          position: absolute;
          top: -22px;
          right: -22px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--yellow), var(--yellow-closed));
          border: 3px solid var(--panel);
          box-shadow: 0 10px 24px var(--yellow-glow);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bc-pin :global(svg) {
          width: 24px;
          height: 24px;
          stroke: var(--navy);
          fill: none;
          stroke-width: 2;
        }

        .bc-logo {
          width: min(380px, 78%);
          height: auto;
          display: block;
        }

        @media (max-width: 680px) {
          .brand-cover { padding: 56px 0; }
          .bc-badge { padding: 18px 30px; border-radius: 18px; margin-bottom: 32px; }
          .bc-pin { width: 42px; height: 42px; top: -16px; right: -16px; }
          .bc-pin :global(svg) { width: 19px; height: 19px; }
        }
      `}</style>
    </section>
  );
}
