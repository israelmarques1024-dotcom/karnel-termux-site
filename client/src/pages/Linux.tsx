import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function Linux() {
  const stacks = [
    { name: "Node.js", desc: "JavaScript/TypeScript runtime — v22 LTS", pkg: "nodejs" },
    { name: "Python", desc: "Python 3.12 com pip e venv", pkg: "python" },
    { name: "Go", desc: "Linguagem compilada da Google", pkg: "golang" },
    { name: "Rust", desc: "Linguagem de sistemas segura e rápida", pkg: "rust" },
    { name: "PostgreSQL", desc: "Banco relacional avançado", pkg: "postgresql" },
    { name: "MongoDB", desc: "Banco NoSQL orientado a documentos", pkg: "mongodb" },
    { name: "MariaDB", desc: "Banco relacional compatível com MySQL", pkg: "mariadb" },
    { name: "SQLite", desc: "Banco leve embutido", pkg: "sqlite" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">Stack Linux Completa</h1>
          <p className="text-lg text-muted-foreground mb-8">
            O Omni transforma seu Android num ambiente Linux completo com
            linguagens, bancos de dados e ferramentas de desenvolvimento.
          </p>

          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <CodeBlock code="omni install lang" language="bash" title="terminal" />
            <p className="text-sm text-muted-foreground mt-3">
              Instala Node.js, Python, Go, Rust, C/C++ e mais.
            </p>
            <div className="mt-3">
              <CodeBlock code="omni install db" language="bash" title="terminal" />
              <p className="text-sm text-muted-foreground mt-3">
                Instala PostgreSQL, MariaDB, SQLite e MongoDB.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Linguagens</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {stacks.slice(0, 4).map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-bold font-mono text-accent mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                <CodeBlock code={`omni install lang --${item.pkg}`} language="bash" />
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Bancos de Dados</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {stacks.slice(4).map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-bold font-mono text-accent mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                <CodeBlock code={`omni install db --${item.pkg}`} language="bash" />
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Por que isso importa</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground mb-4">
              Com o Omni, seu dispositivo Android vira um ambiente de desenvolvimento
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
        </div>
      </section>
    </Layout>
  );
}
