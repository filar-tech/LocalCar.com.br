import { site } from "@/config";
import Icon from "./Icon";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="contact" id="contato">
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-info">
            <h2>Fale com a<br />LocalCar</h2>
            <p>Pronto para o controle total do seu veículo? Proteja seu patrimônio hoje mesmo.</p>

            <div className="ci-item">
              <div className="ci-icon"><Icon name="pin" /></div>
              <div>
                <div className="l">Ponto de venda e instalação</div>
                <div className="v">{site.endereco.rua} — {site.endereco.bairro}</div>
              </div>
            </div>
            <div className="ci-item">
              <div className="ci-icon"><Icon name="phone2" /></div>
              <div>
                <div className="l">WhatsApp / Telefone</div>
                <div className="v">{site.telefoneExibicao}</div>
              </div>
            </div>
            <div className="ci-item">
              <div className="ci-icon"><Icon name="mail" /></div>
              <div>
                <div className="l">Instagram</div>
                <div className="v">@{site.instagram}</div>
              </div>
            </div>
            <div className="ci-item">
              <div className="ci-icon"><Icon name="clock" /></div>
              <div>
                <div className="l">Atendimento</div>
                <div className="v">{site.atendimento}</div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>

      <style>{`
        .contact { padding: 110px 0; background: var(--black2); }
        .contact-wrap { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--line); border-radius: 26px; overflow: hidden; background: var(--panel); }
        .contact-info { padding: 56px 48px; position: relative; overflow: hidden; background: linear-gradient(160deg, #0d1420, var(--black)); }
        .contact-info::before { content: ''; position: absolute; bottom: -80px; left: -80px; width: 300px; height: 300px; background: radial-gradient(circle, var(--blue-glow), transparent 70%); opacity: 0.2; filter: blur(50px); }
        .contact-info h2 { font-size: 38px; font-weight: 800; line-height: 1.05; margin-bottom: 16px; position: relative; }
        .contact-info > p { color: var(--mute); margin-bottom: 38px; position: relative; }
        .ci-item { display: flex; gap: 16px; margin-bottom: 24px; align-items: center; position: relative; }
        .ci-icon { width: 46px; height: 46px; border-radius: 12px; background: rgba(255,255,255,0.05); border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ci-icon :global(svg) { width: 21px; height: 21px; stroke: var(--blue); }
        .ci-item .l { font-size: 12px; color: var(--mute2); }
        .ci-item .v { font-size: 15px; font-weight: 600; }
        @media (max-width: 820px) { .contact-wrap { grid-template-columns: 1fr; } .contact-info { padding: 38px 26px; } }
      `}</style>
    </section>
  );
}
