"use client";

import { useState } from "react";
import { site } from "@/config";
import Icon from "./Icon";

export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [tipo, setTipo] = useState("Dono de veículo particular");
  const [msg, setMsg] = useState("");

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
        <label>Nome completo</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" />
      </div>
      <div className="field">
        <label>WhatsApp / Telefone</label>
        <input type="tel" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="(00) 00000-0000" />
      </div>
      <div className="field">
        <label>Você é</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option>Dono de veículo particular</option>
          <option>Empresa com frota</option>
        </select>
      </div>
      <div className="field">
        <label>Mensagem (opcional)</label>
        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Conte o que você precisa..." />
      </div>
      <button className="form-btn" onClick={enviar}>
        <Icon name="whatsapp" /> Enviar pelo WhatsApp
      </button>
      <p className="form-note">Resposta rápida via WhatsApp</p>

      <style jsx>{`
        .contact-form { padding: 56px 48px; }
        .contact-form h3 { font-size: 25px; font-weight: 700; margin-bottom: 6px; }
        .contact-form > p { color: var(--mute); font-size: 14px; margin-bottom: 28px; }
        .field { margin-bottom: 18px; }
        .field label { display: block; font-size: 12px; font-weight: 500; color: var(--mute); margin-bottom: 8px; letter-spacing: 0.5px; text-transform: uppercase; }
        .field input, .field select, .field textarea {
          width: 100%; padding: 14px 16px; background: var(--black2); border: 1px solid var(--line);
          border-radius: 10px; font-family: 'Sora', sans-serif; font-size: 15px; color: #fff; transition: 0.2s;
        }
        .field input::placeholder, .field textarea::placeholder { color: var(--mute2); }
        .field input:focus, .field select:focus, .field textarea:focus { outline: none; border-color: var(--red); box-shadow: 0 0 0 3px rgba(255,42,32,0.12); }
        .field textarea { resize: vertical; min-height: 90px; }
        .form-btn {
          width: 100%; background: linear-gradient(135deg, var(--red), #c71810); color: #fff; border: none;
          padding: 16px; border-radius: 10px; font-family: 'Sora', sans-serif; font-weight: 700;
          font-size: 16px; cursor: pointer; transition: 0.25s; display: flex; align-items: center;
          justify-content: center; gap: 10px; box-shadow: 0 0 24px var(--red-glow);
        }
        .form-btn:hover { transform: translateY(-2px); box-shadow: 0 0 40px var(--red-glow); }
        .form-btn :global(svg) { width: 20px; height: 20px; fill: #fff; }
        .form-note { text-align: center; font-size: 13px; color: var(--mute); margin-top: 16px; }
        @media (max-width: 680px) { .contact-form { padding: 38px 26px; } }
      `}</style>
    </div>
  );
}
