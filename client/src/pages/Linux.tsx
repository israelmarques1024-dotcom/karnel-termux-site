import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const stacks = [
  { name: "Node.js", desc: "JavaScript/TypeScript runtime — v22 LTS", pkg: "nodejs" },
  { name: "Python", desc: "Python 3.12 com pip e venv", pkg: "python" },
  { name: "Go", desc: "Linguagem compilada da Google", pkg: "golang" },
  { name: "Rust", desc: "Linguagem de sistemas segura e rápida", pkg: "rust" },
  { name: "C/C++", desc: "Clang compiler para C e C++", pkg: "clang" },
  { name: "PHP", desc: "Linguagem para web backend", pkg: "php" },
  { name: "Perl", desc: "Linguagem de scripting e text processing", pkg: "perl" },
  { name: "PostgreSQL", desc: "Banco relacional avançado", pkg: "postgresql" },
  { name: "MongoDB", desc: "Banco NoSQL orientado a documentos", pkg: "mongodb" },
  { name: "MariaDB", desc: "Banco relacional compatível com MySQL", pkg: "mariadb" },
  { name: "SQLite", desc: "Banco leve embutido", pkg: "sqlite" },
];

export default function Linux() {
  return (
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold font-mono mb-4">Stack Linux Completa</h1>
            <p className="text-lg text-muted-foreground mb-8">
              O Karnel transforma seu Android num ambiente Linux completo com
              linguagens, bancos de dados e ferramentas de desenvolvimento.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
              <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
              <CodeBlock code="karnel install lang" language="bash" title="terminal" />
              <p className="text-sm text-muted-foreground mt-3">
                Instala Node.js, Python, Go, Rust, C/C++ e mais.
              </p>
              <div className="mt-3">
                <CodeBlock code="karnel install db" language="bash" title="terminal" />
                <p className="text-sm text-muted-foreground mt-3">
                   Instala PostgreSQL, MariaDB, SQLite, MongoDB e Redis.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-2xl font-bold font-mono mb-6">Linguagens</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {stacks.slice(0, 7).map((item, i) => (
              <AnimatedSection key={i} delay={300 + i * 60}>
                <div className="card-hover bg-card border border-border rounded-lg p-5">
                  <h3 className="font-bold font-mono text-accent mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                  <CodeBlock code={`karnel install lang --${item.pkg}`} language="bash" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={700}>
            <h2 className="text-2xl font-bold font-mono mb-6">Bancos de Dados</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {stacks.slice(7).map((item, i) => (
              <AnimatedSection key={i} delay={800 + i * 80}>
                <div className="card-hover bg-card border border-border rounded-lg p-5">
                  <h3 className="font-bold font-mono text-accent mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                  <CodeBlock code={`karnel install db --${item.pkg}`} language="bash" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={1100}>
            <h2 className="text-2xl font-bold font-mono mb-6">Por que isso importa</h2>
            <div className="card-hover bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                Com o Karnel, seu dispositivo Android vira um ambiente de desenvolvimento
                completo. Você pode:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-accent">•</span> Rodar servidores Node.js, Python e Go</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Conectar em bancos PostgreSQL e MongoDB</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Compilar código Rust e C/C++</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Fazer deploy direto do seu celular</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Desenvolver apps completos sem precisar de PC</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
  );
}
