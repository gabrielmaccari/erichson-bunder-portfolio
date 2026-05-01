import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { BookOpen } from "lucide-react";

export const Route = createFileRoute("/escritor")({
  head: () => ({
    meta: [
      { title: "Escritor — Erichson Bunder" },
      { name: "description", content: "Livros, ensaios e textos de Erichson Bunder sobre clínica, subjetividade e o ofício de cuidar." },
      { property: "og:title", content: "Escritor — Erichson Bunder" },
    ],
  }),
  component: EscritorPage,
});

const works = [
  {
    year: "2024",
    title: "A escuta como morada",
    type: "Livro",
    desc: "Reflexões sobre o lugar do silêncio na clínica psicológica e o trabalho de hospedar a fala do outro.",
  },
  {
    year: "2022",
    title: "Pequenas travessias",
    type: "Ensaios",
    desc: "Coletânea de ensaios sobre transições, lutos e os movimentos invisíveis da vida psíquica.",
  },
  {
    year: "2020",
    title: "O ofício de cuidar",
    type: "Livro",
    desc: "Notas sobre formação, ética e a construção de uma clínica autoral em tempos acelerados.",
  },
];

function EscritorPage() {
  return (
    <SiteLayout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Escritor</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-4xl md:text-6xl text-ink text-balance max-w-3xl">
              Escrever é uma forma de <span className="italic">prolongar a escuta.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-ink/70">
              Os textos abaixo nascem da prática clínica — e da convicção de que pensar
              em voz alta é uma forma legítima de cuidar.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          {works.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.07}>
              <article className="group grid md:grid-cols-12 gap-6 items-start border-t border-border pt-8 hover:bg-card/40 transition-colors p-4 -mx-4 rounded-2xl">
                <div className="md:col-span-2 flex items-center gap-3">
                  <BookOpen size={18} className="text-gold" />
                  <span className="font-display text-xl text-ink">{w.year}</span>
                </div>
                <div className="md:col-span-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {w.type}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <h2 className="font-display text-2xl md:text-3xl text-ink group-hover:text-ink/90">
                    {w.title}
                  </h2>
                  <p className="mt-3 text-ink/70">{w.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-ink text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-display italic text-2xl md:text-3xl text-cream/90 leading-snug text-balance">
              "A página em branco é, no fundo, mais uma forma de divã: nela
              também se aprende a esperar o que ainda não foi dito."
            </p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
