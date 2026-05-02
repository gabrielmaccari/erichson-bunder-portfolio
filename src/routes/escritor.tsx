import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { BookOpen } from "lucide-react";
import Book1 from "@/assets/DepressaoNaVidaCrista.jpeg";
import Book2 from "@/assets/DesperteSuaMelhorVersao.jpeg"
import portrait from "@/assets/Erikson-portrait.png";

export const Route = createFileRoute("/escritor")({
  head: () => ({
    meta: [
      { title: "Escritor — Erikson Wander" },
      { name: "description", content: "Livros, ensaios e textos de Erikson Wander sobre clínica, subjetividade e o ofício de cuidar." },
      { property: "og:title", content: "Escritor — Erikson Wander" },
    ],
  }),
  component: EscritorPage,
});

const works = [
  {
    year: "2024",
    title: "Depressão na Vida Cristã",
    img: Book1,
    desc: "Aborda a depressão no contexto da vida cristã, integrando perspectivas psicológicas e teológicas. O livro define a depressão, explora teorias de Freud, Jung, Beck e Seligman, e oferece ferramentas práticas para a gestão do transtorno. A dimensão espiritual é destacada, com análise de passagens bíblicas e histórias de figuras bíblicas que enfrentaram angústia, mostrando que a depressão é parte da condição humana. O livro oferece encorajamento e suporte para cristãos enfrentando a depressão, unindo psicologia e fé para promover esperança e cura.",
  },
  {
    year: "2022",
    title: "Desperte Sua Melhor Versão",
    img: Book2,
    desc: "Cada indivíduo possui um potencial extraordinário à espera de ser desvendado, no livro você vai encontrar ferramentas, que não apenas informam, mas também motivam à ação.Desperte sua melhor versão é um livro que conduz os leitores na descoberta de suas paixões, no estabelecimento de metas realistas e na adoção de hábitos transformadores. Adquira aqui seu livro e mostre para o mundo sua melhor versão.",
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
                  {w.img ? (
                    <img
                      src={w.img}
                      alt={w.title}
                      className="h-100 w-100 rounded-md object-cover"
                    />
                  ) : (
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Livro
                    </span>
                  )}
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
