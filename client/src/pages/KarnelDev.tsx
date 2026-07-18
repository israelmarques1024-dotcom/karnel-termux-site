import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";
import { DEV_TOOLS as tools } from "@/data/catalog";

export default function KarnelDev() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">
            Development Tools
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Essential utilities for daily development in Termux.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Quick Install</h3>
            <CodeBlock
              code="karnel install dev"
              language="bash"
              title="terminal"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Available Tools</h2>
          <p className="text-muted-foreground mb-8">
            {tools.length} development tools from the Karnel registry.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tools.map((tool, i) => (
            <AnimatedSection key={i} delay={300 + i * 40}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {tool.desc}
                </p>
                <CodeBlock
                  code={`karnel install dev ${tool.flag}`}
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
