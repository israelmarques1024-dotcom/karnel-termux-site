import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";
import { NPM_TOOLS as packages } from "@/data/catalog";

export default function KarnelNpm() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">
            Global npm Packages
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            npm packages installed globally via Karnel for productivity.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Quick Install</h3>
            <CodeBlock
              code="karnel install npm"
              language="bash"
              title="terminal"
            />
            <p className="text-sm text-muted-foreground mt-2">
              Install specific:{" "}
              <code className="text-accent">
                karnel install npm --typescript --prettier
              </code>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">
            Available Packages
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {packages.map((pkg, i) => (
            <AnimatedSection key={i} delay={300 + i * 50}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{pkg.desc}</p>
                <p className="text-xs text-muted-foreground mb-3">
                  Install flag: <code className="text-accent">{pkg.flag}</code>
                </p>
                <CodeBlock
                  code={`karnel install npm ${pkg.flag}`}
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
