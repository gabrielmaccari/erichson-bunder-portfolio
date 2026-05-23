import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, GraduationCap, Scale, Compass } from "lucide-react";
import portrait from "@/assets/Erikson-portrait.png";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Erikson Wander — Psicólogo, Escritor e Mentor" },
      {
        name: "description",
        content:
          "Site oficial de Erikson Wander. Psicólogo clínico, escritor, mentor, professor e perito. Escuta atenta, prática ética e cuidado humano.",
      },
      { property: "og:title", content: "Erikson Wander — Psicólogo, Escritor e Mentor" },
      {
        property: "og:description",
        content: "Psicólogo, escritor, mentor, professor e perito.",
      },
    ],
  }),
  component: Index,
});

const facets = [
  {
    icon: Brain,
    title: "Neuropsicólogo",
    text:
      "Avaliação neuropsicológica completa: memória, atenção, funções executivas e linguagem, com laudos detalhados que orientam diagnóstico e tratamento.",
  },
  {
    icon: Compass,
    title: "Psicólogo Clínico",
    text: "Atendimento humanizado e baseado em evidências, com escuta cuidadosa e plano terapêutico individualizado.",
  },
  {
    icon: BookOpen,
    title: "Escritor",
    text: "Livros e ensaios sobre cérebro, subjetividade e o ofício de cuidar.",
  },
  {
    icon: GraduationCap,
    title: "Professor",
    text: "Cursos, palestras e formações em neuropsicologia, psicologia clínica e ética profissional.",
  },
  {
    icon: Scale,
    title: "Perito",
    text: "Pareceres técnicos e perícias neuropsicológicas com rigor metodológico e linguagem acessível.",
  },
  {
    icon: Compass,
    title: "Mentor",
    text: "Acompanho profissionais e estudantes em sua formação contínua e prática clínica.",
  },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden -mt-24 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 -z-10 bg-cream" />
        <div className="absolute -z-10 top-20 -left-32 h-[480px] w-[480px] rounded-full bg-sand/40 blur-3xl animate-float-slow" />
        <div className="absolute -z-10 bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-ink/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              Erikson Wander · CRP: 04/57656 · Neuropsicólogo
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] text-ink text-balance"
            >
              Cuidar é também{" "}
              <span className="italic font-light">um ofício.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg text-ink/70 text-pretty"
            >
              Neuropsicólogo, psicólogo clínico, escritor, mentor, professor e perito.
              Há mais de uma década dedicado à avaliação neuropsicológica, à escuta clínica
              e à formação de profissionais comprometidos com o humano.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <Link
                to="/imersao"
                className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-ink/90 transition-all"
              >
                Agendar uma conversa
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/sobre" className="text-sm text-ink link-underline">
                Conhecer minha trajetória
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-ink/5 -rotate-2" />
            <div className="absolute -inset-1 rounded-[2rem] border border-ink/10 rotate-1" />
            <img
              src={portrait}
              alt="Retrato de Erikson Wander"
              width={1024}
              height={1280}
              className="relative rounded-[2rem] object-cover object-top w-full aspect-[4/5] shadow-2xl shadow-ink/20"
            />
            <div className="absolute -bottom-6 -left-6 bg-cream border border-border rounded-2xl px-5 py-4 shadow-lg shadow-ink/5">
              <p className="font-display italic text-ink text-sm">"A escuta é o início da clínica."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-24 md:py-32 bg-ink text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-cream/50">Manifesto</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl md:text-5xl leading-tight text-balance">
              Não tratamos sintomas isolados.{" "}
              <span className="italic text-cream/70">Acompanhamos pessoas.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-cream/70 text-lg leading-relaxed text-pretty">
              Acredito que o trabalho clínico se constrói na delicadeza do encontro:
              tempo, presença, rigor teórico e disposição genuína para o outro. É a
              partir desse cruzamento que nascem mudanças reais e duradouras.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FACETS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Atuação</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink text-balance">
                Cinco frentes,{" "}
                <span className="italic">uma única ética</span> de cuidado.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-3 rounded-3xl overflow-hidden">
            {facets.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="bg-cream p-8 md:p-10 h-full group hover:bg-card transition-colors">
                  <f.icon size={28} strokeWidth={1.4} className="text-ink/70 group-hover:text-gold transition-colors" />
                  <h3 className="mt-6 font-display text-2xl text-ink">{f.title}</h3>
                  <p className="mt-3 text-sm text-ink/70 leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/atuacao" className="inline-flex items-center gap-2 text-sm text-ink link-underline">
              Ver todos os serviços <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <blockquote className="font-display text-3xl md:text-4xl leading-snug text-ink text-balance">
              <span className="text-gold">"</span>
              O que cura não é a técnica em si, mas a presença que ela viabiliza —
              uma escuta que sustenta o tempo necessário para que algo novo possa
              ser dito.
              <span className="text-gold">"</span>
            </blockquote>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              — Erikson Wander
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-3xl gradient-ink p-10 md:p-16 text-cream relative overflow-hidden">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
              <p className="text-xs uppercase tracking-[0.3em] text-cream/50">Vamos conversar</p>
              <h3 className="mt-4 font-display text-3xl md:text-5xl text-balance max-w-2xl">
                Um espaço para pensar, sentir e <span className="italic text-cream/80">recomeçar.</span>
              </h3>
              <p className="mt-6 max-w-xl text-cream/70">
                Atendimento presencial e online, supervisão clínica e formações sob medida.
              </p>
              <Link
                to="/imersao"
                className="mt-8 inline-flex items-center gap-2 bg-cream text-ink px-7 py-3.5 rounded-full text-sm hover:bg-gold transition-colors"
              >
                Entrar em contato <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
