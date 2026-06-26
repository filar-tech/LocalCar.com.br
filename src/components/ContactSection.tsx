import { site } from "@/config";
import Icon from "./Icon";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <section className="contact" id="contato">
      <div className="container">
        <Reveal>
          <div className="contact-wrap">
            {/* Info */}
            <div className="contact-info">
              <h2>Fale com a<br />LocalCar</h2>
              <p>
                Pronto para o controle total do seu veículo? Proteja seu patrimônio hoje mesmo.
              </p>

              <div className="ci-item">
                <div className="ci-icon" aria-hidden="true">
                  <Icon name="pin" />
                </div>
                <div>
                  <div className="l">Ponto de venda e instalação</div>
                  <div className="v">{site.endereco.rua} — {site.endereco.bairro}</div>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon" aria-hidden="true">
                  <Icon name="phone2" />
                </div>
                <div>
                  <div className="l">WhatsApp / Telefone</div>
                  <div className="v">{site.telefoneExibicao}</div>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon" aria-hidden="true">
                  <Icon name="mail" />
                </div>
                <div>
                  <div className="l">Instagram</div>
                  <div className="v">@{site.instagram}</div>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon" aria-hidden="true">
                  <Icon name="clock" />
                </div>
                <div>
                  <div className="l">Atendimento</div>
                  <div className="v">{site.atendimento}</div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <ContactForm />
          </div>
        </Reveal>
      </div>

      <style>{`
        .contact {
          padding: 110px 0;
          background: var(--bg2);
        }

        .contact-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid var(--line-soft);
          border-radius: 28px;
          overflow: hidden;
          background: var(--paper);
          box-shadow: 0 30px 60px var(--shadow);
        }

        .contact-info {
          padding: 54px 46px;
          background: linear-gradient(160deg, #2A2018, #3A2A1C);
          border-right: 1px solid var(--line);
          position: relative;
          overflow: hidden;
          color: #fff;
        }
        .contact-info::before {
          content: '';
          position: absolute;
          bottom: -60px; right: -60px;
          width: 240px; height: 240px;
          background: radial-gradient(circle, rgba(224,160,48,0.3), transparent 70%);
          filter: blur(30px);
        }

        .contact-info h2 {
          font-family: var(--font-fraunces), serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 14px;
          color: #fff;
          position: relative;
        }
        .contact-info > p {
          color: rgba(255,255,255,0.7);
          font-size: 15px;
          margin-bottom: 34px;
          line-height: 1.72;
          position: relative;
        }

        .ci-item {
          display: flex;
          gap: 15px;
          margin-bottom: 22px;
          align-items: center;
          position: relative;
        }
        .ci-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          background: rgba(255,255,255,0.10);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ci-icon :global(svg) { width: 21px; height: 21px; stroke: var(--amber-soft); }
        .ci-item .l { font-size: 12px; color: rgba(255,255,255,0.55); margin-bottom: 2px; letter-spacing: 0.3px; }
        .ci-item .v { font-size: 15px; font-weight: 600; color: #fff; }

        @media (max-width: 820px) {
          .contact-wrap { grid-template-columns: 1fr; }
          .contact-info { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 36px 26px; }
        }
      `}</style>
    </section>
  );
}
