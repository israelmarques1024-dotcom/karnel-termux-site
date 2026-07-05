import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Zap, Code2, Cpu, Terminal, Brain, Rocket, Stethoscope, Eye, Mic, Database, Puzzle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function Home() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const DISTANCE = 700;
    let raf: number | null = null;
    const onScroll = () => {
      if (raf !== null) return;
      raf = requestAnimationFrame(() => {
        setP(Math.min(window.scrollY / DISTANCE, 1));
        raf = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  const bgWhite = 1 - p;
  const logoVis = 0.25 * (1 - p);
  const fg = `rgb(${lerp(25, 235, p) | 0}, ${lerp(25, 235, p) | 0}, ${lerp(25, 235, p) | 0})`;
  const accent = `rgb(${lerp(160, 235, p) | 0}, ${lerp(35, 85, p) | 0}, ${lerp(30, 75, p) | 0})`;
  const muted = `rgb(${lerp(90, 155, p) | 0}, ${lerp(90, 155, p) | 0}, ${lerp(95, 160, p) | 0})`;

  const stats = [
    { label: "Agentes de IA", value: "28" },
    { label: "Linguagens", value: "8" },
    { label: "Bancos", value: "4" },
    { label: "Ferramentas Dev", value: "19" },
    { label: "CLIs Deploy", value: "3" },
    { label: "Total Pacotes", value: "77" },
  ];

  const iconColors = ["text-red-500", "text-purple-500", "text-orange-500", "text-sky-500", "text-emerald-500", "text-pink-500", "text-amber-500", "text-indigo-500"];

  const faqs = [
    { q: "É de graça?", a: "Sim! O Omni é 100% gratuito e open source (MIT)." },
    { q: "Precisa de root?", a: "Não. O Omni funciona em qualquer Android com Termux, sem root." },
    { q: "Funciona em qualquer Android?", a: "Sim, Android 11+ recomendado. Dispositivos com 4GB+ de RAM têm melhor performance." },
    { q: "Como o Omni se sustenta?", a: "A CLI Omni Catalyst não exibe anúncios nem coleta dados. Futuramente, recursos premium podem ser oferecidos, mas o Omni permanecerá gratuito e open source." },
    { q: "Precisa de internet?", a: "Sim, pra instalar os pacotes. Depois de instalado, a maioria das ferramentas funciona offline." },
    { q: "Dá pra usar sem saber Linux?", a: "Sim! O Omni foi feito pra ser simples. Comandos em português e assistente integrado." },
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative min-h-screen py-16 md:py-24 px-4 overflow-hidden">
        {/* Banner background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0"
          style={{ backgroundImage: "url(/omni-banner.svg)" }}
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background pointer-events-none z-0" />

        {/* White overlay — fades out as user scrolls */}
        {p < 1 && (
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ backgroundColor: `rgba(255,255,255,${bgWhite})` }}
          />
        )}

        {/* Background logo watermark — fades out with scroll */}
        <img
          src="/omni-logo.svg"
          alt=""
          className="hero-bg-logo"
          style={{ opacity: logoVis }}
        />

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: `rgba(255,255,255,${0.15 * (1 - p)})`,
              borderColor: `rgba(0,0,0,${0.15 * (1 - p)})`,
              borderWidth: 1,
              borderStyle: "solid",
            }}
          >
            <span style={{ color: accent, fontFamily: "monospace", fontSize: "0.875rem", fontWeight: 600 }}>
              Omni Catalyst v1.0.1 — Android + Termux
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono mb-6 leading-tight tracking-tight" style={{ color: fg }}>
            Seu Ambiente Dev
            <br />
            <span style={{ color: accent }}>
              Em Um Comando
            </span>
          </h1>

          <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: muted }}>
            Transforme seu Android em uma estação de desenvolvimento completa.
            Instale 28 agentes de IA, 8 linguagens, 4 bancos de dados, 19 ferramentas
            e 3 CLIs de deploy — em segundos.
          </p>

          <div className="flex gap-4 justify-center mb-16 flex-wrap">
            <Link href="/termux">
              <a>
                <Button size="lg" className="gap-2 font-semibold text-base">
                  Começar <ArrowRight size={20} />
                </Button>
              </a>
            </Link>
            <Link href="/omni">
              <a>
                <Button size="lg" variant="outline" className="font-semibold text-base">
                  Explorar Docs
                </Button>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg p-4 transition-colors"
                style={{
                  backgroundColor: p < 1 ? `rgba(255,255,255,${0.8 * (1 - p)})` : undefined,
                  border: p < 1 ? `1px solid rgba(0,0,0,${0.1 * (1 - p)})` : undefined,
                }}
              >
                <div className="text-2xl font-bold font-mono" style={{ color: accent }}>
                  {stat.value}
                </div>
                <div className="text-xs mt-1 font-medium" style={{ color: muted }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instalação */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl font-bold font-mono mb-3">
              Instale em Uma Linha
            </h2>
            <p className="text-muted-foreground">
              Sem dependências. Sem bloat. Só poder de desenvolvimento puro.
            </p>
          </div>
          <div className="space-y-3">
            <CodeBlock
              code={`bash -c "$(curl -fsSL https://raw.githubusercontent.com/israel676767/omni/main/install.sh)"`}
              language="bash"
              title="quick install"
            />
            <p className="text-center text-xs text-muted-foreground">ou</p>
            <CodeBlock
              code={`npm install -g omni-catalyst`}
              language="bash"
              title="npm install"
            />
            <p className="text-center text-xs text-muted-foreground">ou</p>
            <CodeBlock
              code={`pnpm add -g omni-catalyst`}
              language="bash"
              title="pnpm install"
            />
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">
            Funciona em qualquer Termux Android. Leva menos de 2 minutos.
          </p>
        </div>
      </section>

      {/* Por que Omni */}
      <section className="py-16 md:py-20 px-4 bg-card/30 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-3 text-center">
            Por que Desenvolvedores Escolhem o Omni
          </h2>
          <p className="text-center text-muted-foreground mb-14">
            Feito por desenvolvedores, para desenvolvedores que codam onde estiverem.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                href: "/omni",
                icon: <Zap size={22} />,
                title: "Arquitetura Modular",
                desc: "Instale só o que precisa. Sem conflitos entre ferramentas.",
              },
              {
                href: "/omni/ai",
                icon: <Code2 size={22} />,
                title: "28 Agentes de IA",
                desc: "Claude, Gemini, OpenCode, Ollama e mais. Pré-configurados.",
              },
              {
                href: "/omni/editor",
                icon: <Terminal size={22} />,
                title: "Editor Profissional",
                desc: "Neovim + NvChad com LSP pra 20+ linguagens. Copilot incluso.",
              },
              {
                href: "/omni/linux",
                icon: <Cpu size={22} />,
                title: "Stack Linux Completa",
                desc: "PostgreSQL, MongoDB, Node.js, Python, Go, Rust. Tudo que precisa.",
              },
              {
                href: "/omni/brain",
                icon: <Brain size={22} />,
                title: "Segundo Cérebro",
                desc: "Memória integrada com busca por IA e grafo de ideias.",
              },
              {
                href: "/omni/deploy",
                icon: <Rocket size={22} />,
                title: "Deploy Direto",
                desc: "Vercel, Railway, Netlify. Publique do seu celular.",
              },
              {
                href: "/omni/doctor",
                icon: <Stethoscope size={22} />,
                title: "omni doctor",
                desc: "Diagnostique o ambiente com 20 verificações automáticas.",
              },
              {
                href: "/omni/show",
                icon: <Eye size={22} />,
                title: "omni show",
                desc: "Veja documentação de qualquer ferramenta sem sair do terminal.",
              },
              {
                href: "/omni/voice",
                icon: <Mic size={22} />,
                title: "omni voice",
                desc: "Fale com seus agentes de IA. Codificação mãos-livres.",
              },
              {
                href: "/omni/pg",
                icon: <Database size={22} />,
                title: "omni pg",
                desc: "Gerencie PostgreSQL: init, start, stop, shell — um comando só.",
              },
              {
                href: "/omni/init",
                icon: <Puzzle size={22} />,
                title: "omni init",
                desc: "Crie projetos Next.js, Express e outros em segundos.",
              },
              {
                href: "/omni/env",
                icon: <Shield size={22} />,
                title: "omni env",
                desc: "Gerencie chaves de API com segurança. Nunca hardcode secrets.",
              },
            ].map((feature, i) => (
              <Link key={i} href={feature.href}>
                <a className="block bg-background border border-border rounded-lg p-6 hover:border-accent/30 transition-colors cursor-pointer">
                  <div className={`mb-3 ${iconColors[i % iconColors.length]}`}>{feature.icon}</div>
                  <h3 className="text-base font-bold font-mono mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-3 text-center">
            Perguntas Frequentes
          </h2>
          <p className="text-center text-muted-foreground mb-14">
            Tire suas dúvidas sobre o Omni Catalyst.
          </p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-card border border-border rounded-lg group open:border-accent/30 transition-colors">
                <summary className="px-6 py-4 font-mono font-semibold text-sm cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <ArrowRight size={14} className="shrink-0 transition-transform duration-200 group-open:rotate-90 text-accent" />
                </summary>
                <div className="px-6 pb-4 text-sm text-muted-foreground border-t border-border pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          {/* GitHub Star Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/israel676767/omni"
              target="_blank"
              rel="noopener noreferrer"
              className="star-btn inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold font-mono text-sm sm:text-base transition-all duration-300"
            >
              <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
              </svg>
              Dar uma estrela no GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-12 text-center">
            Comece Rápido
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Baixe o Termux",
                desc: "Instale o Termux pelo GitHub ou F-Droid.",
              },
              {
                step: "2",
                title: "Execute o Instalador",
                desc: "Cole o comando de instalação e deixe o Omni configurar tudo.",
              },
              {
                step: "3",
                title: "Escolha Suas Ferramentas",
                desc: "Use 'omni install' pra adicionar agentes de IA, bancos, editores e mais.",
              },
              {
                step: "4",
                title: "Comece a Codar",
                desc: "Abra o Neovim, conecte no banco e construa projetos reais.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center font-bold text-accent font-mono text-sm">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold font-mono mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-card/50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-mono mb-4">
            Pronto pra Codar no Seu Celular?
          </h2>
          <p className="text-muted-foreground mb-8">
            Junte-se a milhares de desenvolvedores construindo aplicativos reais com Omni.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/termux">
              <a>
                <Button size="lg" className="gap-2 font-semibold">
                  Começar Agora <ArrowRight size={20} />
                </Button>
              </a>
            </Link>
            <a
              href="https://github.com/israel676767/omni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="font-semibold">
                Ver no GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
