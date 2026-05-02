import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Erikson Wander" },
      { name: "description", content: "Entre em contato para atendimento clínico, mentoria, formação ou perícia." },
      { property: "og:title", content: "Contato — Erikson Wander" },
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
          </div>

          <div className="md:col-span-7">
          <Reveal delay={0.3}>
              <div className="mt-12 space-y-5">
                <div className="flex items-start gap-4">
                  <Mail size={18} className="mt-1 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</p>
                    <p className="text-ink">eriksonwander.psi@gmail.com</p>
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
        </div>
      </section>
    </SiteLayout>
  );
}
