import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  Brain,
  Heart,
  Target,
  Flame,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  Star,
  Gift,
  Shield,
  Zap,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/imersao")({
  head: () => ({
    meta: [
      { title: "Imersão Desperte Sua Melhor Versão — Erikson Wander" },
      {
        name: "description",
        content:
          "Imersão de transformação pessoal com o psicólogo Erikson Wander. Clareza, propósito e autoconfiança.",
      },
      { property: "og:title", content: "Imersão Desperte Sua Melhor Versão" },
    ],
  }),
  component: ContatoPage,
});

const identificacoes = [
  "Sente que sua vida está no piloto automático",
  "Tem dificuldade em tomar decisões importantes",
  "Se sente perdido(a) sem saber qual é seu propósito",
  "Carrega medos e crenças que te limitam",
  "Sabe que pode mais, mas não sabe por onde começar",
  "Busca mais paz interior e autoconfiança",
];

const conquistas = [
  { icon: Brain, label: "Clareza mental e autoconhecimento profundo" },
  { icon: Heart, label: "Cura emocional e libertação de bloqueios" },
  { icon: Target, label: "Definição clara dos seus objetivos de vida" },
  { icon: Flame, label: "Despertar da sua energia interior" },
  { icon: Lightbulb, label: "Técnicas práticas de transformação pessoal" },
  { icon: TrendingUp, label: "Plano de ação para sua evolução contínua" },
];

const incluso = [
  "Conteúdo exclusivo e transformador",
  "Exercícios práticos de autoconhecimento",
  "Meditações guiadas poderosas",
  "Material de apoio completo",
  "Acesso vitalício ao conteúdo",
  "Suporte via WhatsApp",
];

const depoimentos = [
  {
    nome: "Maria Silva",
    texto:
      "Essa imersão mudou completamente minha vida! Finalmente encontrei meu propósito e tenho clareza do que quero.",
  },
  {
    nome: "Carlos Santos",
    texto:
      "Nunca imaginei que em tão pouco tempo eu conseguiria me libertar de crenças que me limitavam há anos.",
  },
  {
    nome: "Ana Oliveira",
    texto:
      "A melhor decisão que tomei! Hoje vivo uma vida mais leve, com mais amor próprio e autoconfiança.",
  },
];

function Pill({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-secondary/70 border border-border px-5 py-2 text-sm text-ink">
      <Icon size={16} className="text-gold" />
      <span className="font-medium">{children}</span>
    </div>
  );
}

function ContatoPage() {
  return (
    <SiteLayout>
      {/* Identificação */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-4xl md:text-5xl text-ink">
              Você se identifica com isso?
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {identificacoes.map((t, i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 hover:border-gold/60 transition-colors">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-gold shrink-0" />
                  <p className="text-ink/85 leading-relaxed">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* O que vai conquistar */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-4xl md:text-5xl text-ink">
              O que você vai conquistar
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-center text-ink/70 max-w-2xl mx-auto">
              Ao final dessa imersão, você terá uma nova visão de si mesmo e da sua vida.
            </p>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conquistas.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 0.05}>
                <div className="h-full rounded-xl border border-border bg-card p-7 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gold/15 text-gold">
                    <Icon size={22} />
                  </div>
                  <p className="mt-5 text-ink leading-relaxed">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="flex justify-center">
              <Pill icon={Gift}>O que está incluso</Pill>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-center font-display text-4xl md:text-5xl text-ink text-balance">
              Tudo que você precisa para transformar sua vida
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 rounded-2xl border border-border bg-card p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
                {incluso.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckCircle2 size={22} className="text-gold shrink-0" />
                    <span className="text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex justify-center">
              <Pill icon={Heart}>Depoimentos</Pill>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-center font-display text-4xl md:text-5xl text-ink">
              Vidas transformadas
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <Reveal key={d.nome} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-border bg-card p-7">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-5 text-ink/85 italic leading-relaxed">"{d.texto}"</p>
                  <p className="mt-6 font-medium text-gold">{d.nome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="relative rounded-3xl bg-ink text-cream p-10 md:p-14 shadow-2xl overflow-hidden border border-sand/20">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sand/15 blur-3xl" />
              <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
              <div className="absolute top-5 right-5">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-cream text-ink px-3 py-1.5 text-xs font-bold tracking-wider shadow-md">
                  <Sparkles size={12} /> OFERTA ESPECIAL
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl text-center text-cream text-balance">
                Imersão Desperte Sua Melhor Versão
              </h2>

              <p className="mt-8 text-center text-sand line-through">De R$ 497,00</p>
              <p className="mt-2 text-center text-cream">por apenas</p>

              <div className="mt-4 flex items-end justify-center gap-1">
                <span className="font-display text-7xl md:text-8xl text-cream leading-none drop-shadow-lg">
                  R$ 197
                </span>
                <span className="text-cream text-2xl mb-3">,00</span>
              </div>

              <p className="mt-4 text-center text-cream/90">
                ou em até <span className="text-sand font-semibold">12x de R$ 19,67</span>
              </p>

              <a
                href="https://wa.me/553291057806?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%2C%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20sua%20imers%C3%A0!"
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-10 flex items-center justify-center gap-3 rounded-xl bg-cream hover:bg-sand text-ink font-bold px-6 py-5 text-lg tracking-wide transition-all hover:shadow-2xl hover:-translate-y-0.5"
              >
                <MessageCircle size={22} />
                GARANTIR MINHA VAGA AGORA
              </a>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-cream">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-sand" /> Garantia de 7 dias
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-sand" /> Acesso imediato
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
