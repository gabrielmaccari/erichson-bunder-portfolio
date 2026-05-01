import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Brain, BookOpen, Compass, GraduationCap, Scale, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/atuacao")({
  head: () => ({
    meta: [
      { title: "Atuação — Erichson Bunder" },
      { name: "description", content: "Áreas de atuação: clínica, mentoria, docência, perícia e escrita." },
      { property: "og:title", content: "Atuação — Erichson Bunder" },
    ],
  }),
  component: AtuacaoPage,
});

const services = [
  {
    icon: Brain,
    title: "Clínica psicológica",
    text: "Atendimento individual presencial e online. Acompanhamento de adultos em processos de elaboração, sofrimento psíquico, transições de vida e busca de sentido.",
  },
  {
    icon: Compass,
    title: "Mentoria",
    text: "Para psicólogos em início de carreira ou em transição. Construção de identidade clínica, organização do consultório e desenvolvimento de uma escuta autoral.",
  },
  {
    icon: GraduationCap,
    title: "Docência e formação",
    text: "Cursos, palestras e formações para instituições, equipes de saúde e estudantes. Temas: clínica, ética, escuta, vínculo terapêutico.",
  },
  {
    icon: Scale,
    title: "Perícia psicológica",
    text: "Pareceres técnicos, avaliações e atuação pericial em contextos jurídicos, com rigor metodológico e responsabilidade ética.",
  },
  {
    icon: BookOpen,
    title: "Escrita e publicações",
    text: "Livros, artigos e ensaios sobre o ofício clínico, a subjetividade contemporânea e a prática do cuidado.",
  },
];

function AtuacaoPage() {
  return (
    <SiteLayout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Atuação</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-4xl md:text-6xl text-ink text-balance max-w-3xl">
              Cinco frentes de trabalho, <span className="italic">uma mesma escuta.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-ink/70">
              Cada modalidade tem seu próprio ritmo e exigência, mas todas partem do
              mesmo princípio: o cuidado é construído no detalhe.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 space-y-px bg-border rounded-3xl overflow-hidden">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="bg-cream group hover:bg-card transition-colors">
                <div className="p-8 md:p-12 grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-1">
                    <s.icon size={32} strokeWidth={1.4} className="text-ink/70 group-hover:text-gold transition-colors" />
                  </div>
                  <div className="md:col-span-4">
                    <h2 className="font-display text-3xl text-ink">{s.title}</h2>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-ink/75 leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-ink text-cream px-7 py-3.5 rounded-full text-sm hover:bg-ink/90 transition-colors"
          >
            Falar sobre meu caso <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
