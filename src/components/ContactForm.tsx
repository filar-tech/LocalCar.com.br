"use client";

import { useState } from "react";
import { site } from "@/config";
import Icon from "./Icon";

export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [tel,  setTel]  = useState("");
  const [tipo, setTipo] = useState("Dono de veículo particular");
  const [msg,  setMsg]  = useState("");

  function enviar() {
    if (!nome.trim() || !tel.trim()) {
      alert("Por favor, preencha pelo menos seu nome e telefone.");
      return;
    }
    let texto = "Olá! Gostaria de um orçamento da LocalCar.\n\n";
    texto += `Nome: ${nome}\n`;
    texto += `Telefone: ${tel}\n`;
    texto += `Perfil: ${tipo}\n`;
    if (msg.trim()) texto += `Mensagem: ${msg}`;
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="contact-form">
      <h3>Solicite seu orçamento</h3>
      <p>Preencha os dados e entraremos em contato rapidamente.</p>

      <div className="field">
        <label htmlFor="cf-nome">Nome completo</label>
        <input
          id="cf-nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          autoComplete="name"
        />
      </div>

      <div className="field">
        <label htmlFor="cf-tel">WhatsApp / Telefone</label>
        <input
          id="cf-tel"
          type="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          placeholder="(00) 00000-0000"
          autoComplete="tel"
        />
      </div>

      <div className="field">
        <label htmlFor="cf-tipo">Você é</label>
        <select id="cf-tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option>Dono de veículo particular</option>
          <option>Empresa com frota</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="cf-msg">Mensagem (opcional)</label>
        <textarea
          id="cf-msg"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Conte o que você precisa..."
        />
      </div>

      <button className="form-btn" onClick={enviar} type="button">
        <Icon name="whatsapp" aria-hidden="true" />
        Enviar pelo WhatsApp
      </button>

      <p className="form-note">Resposta rápida via WhatsApp</p>

      <style jsx>{`
        .contact-form { padding: 54px 46px; }

        .contact-form h3 {
          font-family: var(--font-fraunces), serif;
          font-size: 26px;
          font-weight: 600;
          margin-bottom: 6px;
          color: var(--text);
        }
        .contact-form > p {
          color: var(--mute);
          font-size: 14px;
          margin-bottom: 26px;
          line-height: 1.6;
        }

        .field { margin-bottom: 17px; }
        .field label {
          display: block;
          font-size: 12px;
          font-weight: 500;
          color: var(--mute);
          margin-bottom: 7px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .field input,
        .field select,
        .field textarea {
          width: 100%;
          padding: 14px 16px;
          background: var(--bg);
          border: 1.5px solid var(--line-soft);
          border-radius: 12px;
          font-family: var(--font-outfit), sans-serif;
          font-size: 15px;
          color: var(--text);
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }
        .field input::placeholder,
        .field textarea::placeholder { color: var(--mute2); }

        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          border-color: var(--terra);
          box-shadow: 0 0 0 3px rgba(214, 154, 30, 0.12);
        }

        .field select {
          cursor: pointer;
          appearance: auto;
        }

        .field textarea {
          resize: vertical;
          min-height: 88px;
        }

        .form-btn {
          width: 100%;
          background: linear-gradient(135deg, var(--terra), var(--mustard));
          color: #fff;
          border: none;
          padding: 16px;
          border-radius: 12px;
          font-family: var(--font-outfit), sans-serif;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.25s, box-shadow 0.25s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 10px 26px rgba(214, 154, 30, 0.3);
          margin-top: 4px;
        }
        .form-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(214, 154, 30, 0.42);
        }
        .form-btn :global(svg) { width: 20px; height: 20px; fill: #fff; }

        .form-note {
          text-align: center;
          font-size: 13px;
          color: var(--mute2);
          margin-top: 15px;
        }

        @media (max-width: 680px) {
          .contact-form { padding: 38px 26px; }
        }
      `}</style>
    </div>
  );
}
