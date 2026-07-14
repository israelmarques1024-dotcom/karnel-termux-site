import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const stacks = [
  { name: "Node.js", desc: "JavaScript/TypeScript runtime — v22 LTS", pkg: "nodejs" },
  { name: "Python", desc: "Python 3.12 with pip and venv", pkg: "python" },
  { name: "Go", desc: "Google's compiled language", pkg: "golang" },
  { name: "Rust", desc: "Safe and fast systems language", pkg: "rust" },
  { name: "C/C++", desc: "Clang compiler for C and C++", pkg: "clang" },
  { name: "PHP", desc: "Web backend language", pkg: "php" },
  { name: "Perl", desc: "Scripting and text processing language", pkg: "perl" },
  { name: "PostgreSQL", desc: "Advanced relational database", pkg: "postgresql" },
  { name: "MongoDB", desc: "Document-oriented NoSQL database", pkg: "mongodb" },
  { name: "MariaDB", desc: "MySQL-compatible relational database", pkg: "mariadb" },
  { name: "SQLite", desc: "Lightweight embedded database", pkg: "sqlite" },
  { name: "Redis", desc: "In-memory cache and key-value store", pkg: "redis" },
];

export default function Linux() {
  return (
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold font-mono mb-4">Stack Linux Completa</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Karnel transforms your Android into a complete Linux environment with
              languages, databases, and development tools.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
              <h3 className="font-bold font-mono mb-4">Quick Install</h3>
              <CodeBlock code="karnel install lang" language="bash" title="terminal" />
              <p className="text-sm text-muted-foreground mt-3">
                Installs Node.js, Python, Go, Rust, C/C++ and more.
              </p>
              <div className="mt-3">
                <CodeBlock code="karnel install db" language="bash" title="terminal" />
                <p className="text-sm text-muted-foreground mt-3">
                   Installs PostgreSQL, MariaDB, SQLite, MongoDB and Redis.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-2xl font-bold font-mono mb-6">Languages</h2>
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
            <h2 className="text-2xl font-bold font-mono mb-6">Databases</h2>
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
