import { linkWhatsApp } from "@/config";
import Icon from "./Icon";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a LocalCar pelo WhatsApp"
    >
      <Icon name="whatsapp" aria-hidden="true" />

      <style>{`
        .wa-float {
          position: fixed;
          bottom: 26px;
          right: 26px;
          z-index: 200;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
          transition: transform 0.25s, box-shadow 0.25s;
          animation: pulseWa 2.5s infinite;
        }
        .wa-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 28px rgba(37, 211, 102, 0.55);
        }
        .wa-float :global(svg) { width: 30px; height: 30px; fill: #fff; }

        @keyframes pulseWa {
          0%   { box-shadow: 0 0 0 0   rgba(37, 211, 102, 0.45); }
          70%  { box-shadow: 0 0 0 18px transparent;              }
          100% { box-shadow: 0 0 0 0   transparent;              }
        }
      `}</style>
    </a>
  );
}
