import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function KarnelCleanup() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Cache Cleanup</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Free up storage by cleaning package manager caches.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-8">
            <h3 className="font-bold font-mono mb-4">Karnel Command</h3>
            <CodeBlock code="karnel cleanup" language="bash" title="terminal" />
            <p className="text-sm text-muted-foreground mt-2">
              Cleans caches, logs and temporary files automatically.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-6 mb-12">
          <AnimatedSection delay={200}>
            <div className="card-hover bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold font-mono mb-2">apt / pkg</h3>
              <CodeBlock code="pkg clean && pkg autoclean" language="bash" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={250}>
            <div className="card-hover bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold font-mono mb-2">npm</h3>
              <CodeBlock code="npm cache clean --force" language="bash" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="card-hover bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold font-mono mb-2">Pip</h3>
              <CodeBlock code="pip cache purge" language="bash" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={350}>
            <div className="card-hover bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold font-mono mb-2">Cargo (Rust)</h3>
              <CodeBlock code="cargo cache --autoclean" language="bash" />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={400}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6">
            <h3 className="font-bold font-mono mb-4">Single Command</h3>
            <CodeBlock
              code="pkg clean && npm cache clean --force && pip cache purge"
              language="bash"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
