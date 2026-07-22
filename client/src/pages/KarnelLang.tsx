import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const langs = [
  {
    name: "Bun",
    flag: "--bun",
    pkg: "bun",
    desc: "Fast all-in-one JavaScript runtime",
  },
  {
    name: "Node.js LTS",
    flag: "--nodejs",
    pkg: "nodejs",
    desc: "V8-based JavaScript runtime",
  },
  {
    name: "Python",
    flag: "--python",
    pkg: "python",
    desc: "Versatile language for scripts and apps",
  },
  {
    name: "Perl",
    flag: "--perl",
    pkg: "perl",
    desc: "Text processing and scripting",
  },
  { name: "PHP", flag: "--php", pkg: "php", desc: "Web server language" },
  {
    name: "Rust",
    flag: "--rust",
    pkg: "rust",
    desc: "Systems programming with safety and performance",
  },
  {
    name: "C/C++",
    flag: "--clang",
    pkg: "clang",
    desc: "Native compilation with Clang/GCC",
  },
  {
    name: "Go (golang)",
    flag: "--golang",
    pkg: "golang",
    desc: "Compiled concurrent language",
  },
];

export default function KarnelLang() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">
            Programming Languages
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Install runtimes and compilers for major languages in Termux.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Quick Install</h3>
            <CodeBlock
              code="karnel install lang"
              language="bash"
              title="terminal"
            />
            <p className="text-sm text-muted-foreground mt-2">
              Install specific:{" "}
              <code className="text-accent">
                karnel install lang --nodejs --python
              </code>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
        <h2 className="text-2xl font-bold font-mono mb-6">
          Available Languages ({langs.length})
        </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {langs.map((lang, i) => (
            <AnimatedSection key={i} delay={300 + i * 50}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono mb-2">{lang.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {lang.desc}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  Pacote: {lang.pkg}
                </p>
                <CodeBlock
                  code={`karnel install lang ${lang.flag}`}
                  language="bash"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
