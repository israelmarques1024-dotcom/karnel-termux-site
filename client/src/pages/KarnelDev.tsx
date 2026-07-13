import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const tools = [
  { name: "GitHub CLI", flag: "--gh", desc: "Gerencie GitHub pelo terminal" },
  { name: "Wget", flag: "--wget", desc: "Download por rede" },
  { name: "Curl", flag: "--curl", desc: "Cliente HTTP" },
  { name: "LSD", flag: "--lsd", desc: "Ls moderno com ícones" },
  { name: "Bat", flag: "--bat", desc: "Cat moderno com syntax highlight" },
  { name: "Proot", flag: "--proot", desc: "Ambiente Linux isolado sem root" },
  { name: "Ncurses Utils", flag: "--ncurses", desc: "Utilitários de terminal" },
  { name: "Tmate", flag: "--tmate", desc: "Compartilhamento de terminal" },
  { name: "Cloudflared", flag: "--cloudflared", desc: "Túnel Cloudflare" },
  { name: "Translate Shell", flag: "--translate", desc: "Tradutor no terminal" },
  { name: "html2text", flag: "--html2text", desc: "Converte HTML para texto" },
  { name: "jq", flag: "--jq", desc: "Processador JSON no terminal" },
  { name: "bc", flag: "--bc", desc: "Calculadora de precisão" },
  { name: "Tree", flag: "--tree", desc: "Exibe diretórios em árvore" },
  { name: "Fzf", flag: "--fzf", desc: "Buscador fuzzy de arquivos" },
  { name: "ImageMagick", flag: "--imagemagick", desc: "Edição de imagens no terminal" },
  { name: "Shfmt", flag: "--shfmt", desc: "Formatador de shell script" },
  { name: "Make", flag: "--make", desc: "Build system" },
  { name: "Udocker", flag: "--udocker", desc: "Contêineres sem root" },
];

export default function KarnelDev() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Ferramentas de Desenvolvimento</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Utilitários essenciais para o dia a dia de desenvolvimento no Termux.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <CodeBlock code="karnel install dev" language="bash" title="terminal" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Ferramentas Disponíveis</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tools.map((tool, i) => (
            <AnimatedSection key={i} delay={300 + i * 40}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
                <CodeBlock code={`karnel install dev ${tool.flag}`} language="bash" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
