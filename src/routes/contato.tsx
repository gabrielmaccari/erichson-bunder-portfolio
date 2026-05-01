import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Erichson Bunder" },
      { name: "description", content: "Entre em contato para atendimento clínico, mentoria, formação ou perícia." },
      { property: "og:title", content: "Contato — Erichson Bunder" },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contato</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 font-display text-4xl md:text-6xl text-ink text-balance">
                Vamos <span className="italic">conversar.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-ink/70 leading-relaxed">
                Para agendar uma sessão, propor uma formação ou pedir um parecer
                técnico — escreva. Respondo pessoalmente, em até dois dias úteis.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 space-y-5">
                <div className="flex items-start gap-4">
                  <Mail size={18} className="mt-1 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</p>
                    <p className="text-ink">contato@erichsonbunder.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={18} className="mt-1 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">WhatsApp</p>
                    <p className="text-ink">+55 (00) 00000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="mt-1 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Atendimento</p>
                    <p className="text-ink">Presencial e online</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.15}>
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Nome</label>
                    <input
                      required
                      type="text"
                      className="mt-2 w-full bg-transparent border-b border-border py-2 text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</label>
                    <input
                      required
                      type="email"
                      className="mt-2 w-full bg-transparent border-b border-border py-2 text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Assunto</label>
                  <select
                    className="mt-2 w-full bg-transparent border-b border-border py-2 text-ink focus:outline-none focus:border-ink transition-colors"
                  >
                    <option>Atendimento clínico</option>
                    <option>Mentoria</option>
                    <option>Formação / Palestra</option>
                    <option>Perícia</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Mensagem</label>
                  <textarea
                    required
                    rows={5}
                    className="mt-2 w-full bg-transparent border-b border-border py-2 text-ink focus:outline-none focus:border-ink transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-3.5 rounded-full text-sm hover:bg-ink/90 transition-colors"
                >
                  {sent ? "Mensagem enviada — obrigado." : "Enviar mensagem"}
                  {!sent && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
