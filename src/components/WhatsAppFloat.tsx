import { linkWhatsApp } from "@/config";
import Icon from "./Icon";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <Icon name="whatsapp" />
      <style>{`
        .wa-float {
          position: fixed;
          bottom: 26px;
          right: 26px;
          z-index: 200;
          width: 60px;
          height: 60px;
          background: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 30px rgba(37, 211, 102, 0.6);
          transition: transform 0.25s;
          animation: pulse-wa 2.5s infinite;
        }
        .wa-float:hover { transform: scale(1.1); }
        .wa-float :global(svg) { width: 32px; height: 32px; fill: #fff; }
        @keyframes pulse-wa {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          70% { box-shadow: 0 0 0 18px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }
      `}</style>
    </a>
  );
}
