import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const tools = [
  { name: "Vercel", bin: "vercel", flag: "--vercel", desc: "Frontend & serverless deploy" },
  { name: "Railway", bin: "railway", flag: "--railway", desc: "Full-stack with databases" },
  { name: "Netlify", bin: "netlify", flag: "--netlify", desc: "Static sites & edge functions" },
];

export default function Deploy() {
  return (
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold font-mono mb-4">Deploy CLIs</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Deploy to production directly from your phone. Vercel, Railway and
              Netlify — all pre-configured and ready.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
              <h3 className="font-bold font-mono mb-4">Quick Install</h3>
              <CodeBlock code={`karnel install deploy`} language="bash" title="terminal" />
              <p className="text-sm text-muted-foreground mt-4">
                Install specific: <code className="text-accent">karnel install deploy --vercel --railway</code>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-2xl font-bold font-mono mb-6">Available CLIs</h2>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/30">
                      <th className="text-left py-3 px-4 font-mono">CLI</th>
                      <th className="text-left py-3 px-4 font-mono">Binary</th>
                      <th className="text-left py-3 px-4 font-mono">Flag</th>
                      <th className="text-left py-3 px-4 font-mono">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tools.map((tool, i) => (
                      <tr key={i} className="border-b border-border hover:bg-accent/5 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold">{tool.name}</td>
                        <td className="py-3 px-4 font-mono text-accent text-xs">{tool.bin}</td>
                        <td className="py-3 px-4 text-accent font-mono text-xs">{tool.flag}</td>
                        <td className="py-3 px-4 text-muted-foreground">{tool.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <h2 className="text-2xl font-bold font-mono mb-6">Uso</h2>
          </AnimatedSection>

          <div className="space-y-6">
            {tools.map((tool, i) => (
              <AnimatedSection key={i} delay={400 + i * 100}>
                <div className="card-hover bg-card border border-border rounded-lg p-6">
                  <h3 className="font-bold font-mono text-accent mb-2">{tool.name}</h3>
                  <CodeBlock code={`${tool.bin} ${tool.name === "Railway" ? "up" : "deploy --prod"}`} language="bash" title="terminal" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
  );
}
