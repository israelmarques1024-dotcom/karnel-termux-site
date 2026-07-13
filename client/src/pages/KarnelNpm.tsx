import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const packages = [
  { name: "TypeScript", flag: "--typescript", desc: "JavaScript com tipos" },
  { name: "tsx", flag: "--tsx", desc: "Execução TypeScript direta" },
  { name: "Vercel CLI", flag: "--vercel", desc: "Deploy na Vercel" },
  { name: "pnpm", flag: "--pnpm", desc: "Gerenciador de pacotes rápido" },
  { name: "yarn", flag: "--yarn", desc: "Gerenciador de pacotes alternativo" },
  { name: "nodemon", flag: "--nodemon", desc: "Auto-restart em alterações" },
  { name: "http-server", flag: "--http-server", desc: "Servidor HTTP simples" },
  { name: "live-server", flag: "--live-server", desc: "Servidor com live reload" },
  { name: "json-server", flag: "--json-server", desc: "API REST a partir de JSON" },
  { name: "ngrok", flag: "--ngrok", desc: "Túneis públicos para localhost" },
];

export default function KarnelNpm() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Pacotes npm Globais</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Pacotes npm instalados globalmente via Karnel para produtividade.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <CodeBlock code="karnel install npm" language="bash" title="terminal" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Pacotes Disponíveis</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {packages.map((pkg, i) => (
            <AnimatedSection key={i} delay={300 + i * 50}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>
                <CodeBlock code={`karnel install npm ${pkg.flag}`} language="bash" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
