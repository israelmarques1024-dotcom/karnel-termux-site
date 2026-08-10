import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SECURITY_TOOLS as tools } from "@/data/catalog";

export default function KarnelSecurity() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Security Tools</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Install and manage security auditing tools for Termux.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-8">
            <h3 className="font-bold font-mono mb-4">Install all</h3>
            <CodeBlock
              code="karnel install security"
              language="bash"
              title="terminal"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Tool</th>
                    <th className="text-left py-3 px-4 font-mono">Flag</th>
                    <th className="text-left py-3 px-4 font-mono">Install</th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map(tool => (
                    <tr
                      key={tool.flag}
                      className="border-b border-border hover:bg-accent/5 transition-colors"
                    >
                      <td className="py-3 px-4 font-mono font-bold text-xs sm:text-sm">
                        {tool.name}
                      </td>
                      <td className="py-3 px-4 text-accent font-mono text-xs">
                        {tool.flag}
                      </td>
                      <td className="py-3 px-4">
                        <CodeBlock
                          code={`karnel install security ${tool.flag}`}
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

        <AnimatedSection delay={200}>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <h3 className="font-bold font-mono mb-2">Usage examples</h3>
            <CodeBlock
              code={`# Network scanning
nmap -sV target.com

# Password auditing
hydra -l admin -P wordlist.txt ssh://target.com

# Web scanning
nikto -h https://target.com

# SQL injection testing
sqlmap -u "https://target.com/page?id=1"

# Directory enumeration
gobuster dir -u https://target.com -w ~/wordlists/common.txt`}
              language="bash"
            />
            <p className="text-sm text-muted-foreground mt-2">
              Provide your own wordlist path. These tools are for authorized security testing only.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
