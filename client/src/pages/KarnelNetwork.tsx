import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";
import { NETWORK_TOOLS as networkTools } from "@/data/catalog";

export default function KarnelNetwork() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Network Tools</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Network security and OSINT tools for ethical hacking and
            reconnaissance.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Quick Install</h3>
            <CodeBlock
              code={`karnel install network`}
              language="bash"
              title="terminal"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">
            Available Network Tools
          </h2>
          <p className="text-muted-foreground mb-8">
            {networkTools.length} network tools — install individually or all at once
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Tool</th>
                    <th className="text-left py-3 px-4 font-mono">Description</th>
                    <th className="text-left py-3 px-4 font-mono">Flag</th>
                    <th className="text-left py-3 px-4 font-mono">Install</th>
                  </tr>
                </thead>
                <tbody>
                  {networkTools.map((tool, i) => (
                    <tr
                      key={i}
                      className="border-b border-border hover:bg-accent/5 transition-colors"
                    >
                      <td className="py-3 px-4 font-mono font-bold text-xs sm:text-sm">
                        {tool.name}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground text-xs">
                        {tool.desc}
                      </td>
                      <td className="py-3 px-4 text-accent font-mono text-xs">
                        {tool.flag}
                      </td>
                      <td className="py-3 px-4">
                        <CodeBlock
                          code={`karnel install network ${tool.flag}`}
                          language="bash"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="card-hover bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold font-mono mb-4">
              Ethical Use Warning
            </h2>
            <p className="text-muted-foreground">
              These tools are designed for ethical security research and
              authorized testing only. Use them only on systems you own or have
              explicit written permission to test. Unauthorized use may violate
              applicable laws.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
