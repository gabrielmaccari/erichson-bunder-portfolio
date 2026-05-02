import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import portrait from "@/assets/EriksonSobre.png";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Erikson Wander" },
      { name: "description", content: "Trajetória, formação e princípios de Erikson Wander, psicólogo, escritor e mentor." },
      { property: "og:title", content: "Sobre — Erikson Wander" },
      { property: "og:image", content: "/og.png" },
    ],
  }),
  component: SobrePage,
});

const milestones = [
  { year: "2012", title: "Graduação em Psicologia", desc: "Início da formação clínica e dos primeiros estágios." },
  { year: "2015", title: "Especialização clínica", desc: "Aprofundamento em psicoterapia e prática supervisionada." },
  { year: "2018", title: "Docência e supervisão", desc: "Início das atividades como professor e supervisor de psicólogos em formação." },
  { year: "2021", title: "Atuação pericial", desc: "Pareceres técnicos e atuação em contextos jurídicos." },
  { year: "2024", title: "Publicações", desc: "Livros e ensaios sobre clínica, vínculo e ética do cuidado." },
];

function SobrePage() {
  return (
    <SiteLayout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <Reveal>
              <img
                src={portrait}
                alt="Erikson Wander"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover rounded-3xl shadow-xl shadow-ink/10"
              />
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Sobre</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 font-display text-4xl md:text-6xl text-ink text-balance">
                Uma trajetória feita de <span className="italic">escuta</span> e estudo.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-5 text-ink/80 leading-relaxed">
                <p>
                  Erikson Wander de Oliveira da Silva é um cristão dedicado e um profissional altamente 
                  qualificado no campo da psicologia e teologia. Com 40 anos de idade, Erikson possui uma 
                  sólida formação acadêmica que inclui um bacharelado em teologia e psicologia. 
                  Além disso, ele é pós-graduado em Terapia Cognitivo-Comportamental (TCC), Geriatria 
                  e Gerontologia, e Neuropsicologia. 
                </p>
                <p>
                  Ao longo de mais de sete anos, Erikson tem atuado como psicólogo clínico, oferecendo 
                  atendimento especializado em psicologia clínica, avaliação psicológica e avaliação neuropsicológica. 
                  Sua experiência e dedicação o tornaram um profissional respeitado na área, ajudando inúmeros pacientes 
                  a encontrar caminhos para a cura e o bem-estar. 
                </p>
                <p>
                  Combinando sua fé cristã com sua expertise em psicologia, Erikson aborda a saúde mental de uma perspectiva 
                  holística, integrando princípios espirituais e científicos para oferecer um suporte completo aos seus pacientes. 
                  Sua paixão por ajudar os outros e seu compromisso com o desenvolvimento contínuo em sua área de atuação são evidentes 
                  em seu trabalho diário.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Trajetória</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-ink">Marcos da formação</h2>
          </Reveal>

          <div className="mt-16 relative">
            <div className="absolute left-[88px] md:left-[120px] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.06}>
                  <div className="flex gap-8 md:gap-12 items-start">
                    <div className="w-20 md:w-28 shrink-0 text-right">
                      <span className="font-display text-2xl text-gold">{m.year}</span>
                    </div>
                    <div className="relative">
                      <span className="absolute -left-[27px] md:-left-[35px] top-2 h-3 w-3 rounded-full bg-ink ring-4 ring-cream" />
                      <h3 className="font-display text-xl text-ink">{m.title}</h3>
                      <p className="mt-2 text-ink/70">{m.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
