import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AI_TOOLS as aiTools } from "@/data/catalog";

export default function AITools() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">
            AI Development Tools
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            AI coding assistants and tools adapted for Termux. Boost your
            productivity with code generation, debugging, and more.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Quick Install</h3>
            <CodeBlock
              code={`karnel install ai`}
              language="bash"
              title="terminal"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">
            Available AI Tools
          </h2>
          <p className="text-muted-foreground mb-8">
            {aiTools.length} AI assistants and tools — exact list from{" "}
            <code className="text-accent">karnel list ai</code>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Tool</th>
                    <th className="text-left py-3 px-4 font-mono hidden lg:table-cell">
                      Description
                    </th>
                    <th className="text-left py-3 px-4 font-mono">Flag</th>
                    <th className="text-left py-3 px-4 font-mono hidden md:table-cell">
                      Binary
                    </th>
                    <th className="text-left py-3 px-4 font-mono">Install</th>
                  </tr>
                </thead>
                <tbody>
                  {aiTools.map((tool, i) => (
                    <tr
                      key={i}
                      className="border-b border-border hover:bg-accent/5 transition-colors"
                    >
                      <td className="py-3 px-4 font-mono font-bold text-xs sm:text-sm">
                        {tool.name}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground text-xs hidden lg:table-cell max-w-[200px]">
                        {tool.desc}
                      </td>
                      <td className="py-3 px-4 text-accent font-mono text-xs">
                        {tool.flag}
                      </td>
                      <td className="py-3 px-4 font-mono text-xs hidden md:table-cell">
                        {tool.bin}
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline md:hidden font-mono text-xs text-accent">
                          karnel install ai {tool.flag}
                        </span>
                        <span className="hidden md:inline">
                          <CodeBlock
                            code={`karnel install ai ${tool.flag}`}
                            language="bash"
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
