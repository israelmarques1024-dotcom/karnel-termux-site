import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const langs = [
  { name: "Node.js LTS", flag: "--nodejs", pkg: "nodejs", desc: "Runtime JavaScript baseado em V8" },
  { name: "Python", flag: "--python", pkg: "python", desc: "Linguagem versátil para scripts e apps" },
  { name: "Perl", flag: "--perl", pkg: "perl", desc: "Processamento de texto e scripts" },
  { name: "PHP", flag: "--php", pkg: "php", desc: "Linguagem para web servers" },
  { name: "Rust", flag: "--rust", pkg: "rust", desc: "Sistemas com performance e segurança" },
  { name: "C/C++", flag: "--clang", pkg: "clang", desc: "Compilação nativa com Clang/GCC" },
  { name: "Go (golang)", flag: "--golang", pkg: "golang", desc: "Linguagem compilada e concorrente" },
];

export default function KarnelLang() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Linguagens de Programação</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Instale runtimes e compiladores para as principais linguagens no Termux.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <CodeBlock code="karnel install lang" language="bash" title="terminal" />
            <p className="text-sm text-muted-foreground mt-2">
              Instalar específicas: <code className="text-accent">karnel install lang --nodejs --python</code>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Linguagens Disponíveis</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {langs.map((lang, i) => (
            <AnimatedSection key={i} delay={300 + i * 50}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono mb-2">{lang.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{lang.desc}</p>
                <p className="text-xs text-muted-foreground mb-3">Pacote: {lang.pkg}</p>
                <CodeBlock code={`karnel install lang ${lang.flag}`} language="bash" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
