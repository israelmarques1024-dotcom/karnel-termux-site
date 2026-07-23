import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

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
            <CodeBlock code="karnel install security" language="bash" title="terminal" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-8">
            <h3 className="font-bold font-mono mb-4">Available tools</h3>
            <CodeBlock code={`karnel install security --nmap
karnel install security --hydra
karnel install security --nikto
karnel install security --sqlmap
karnel install security --gobuster
karnel install security --dirb
karnel install security --wpscan
karnel install security --john
karnel install security --aircrack-ng
karnel install security --metasploit`} language="bash" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <h3 className="font-bold font-mono mb-2">Usage examples</h3>
            <CodeBlock code={`# Network scanning
nmap -sV target.com

# Password auditing
hydra -l admin -P wordlist.txt ssh://target.com

# Web scanning
nikto -h https://target.com

# SQL injection testing
sqlmap -u "https://target.com/page?id=1"

# Directory enumeration
gobuster dir -u https://target.com -w /usr/share/wordlists/dirb/common.txt`} language="bash" />
            <p className="text-sm text-muted-foreground mt-2">
              These tools are for authorized security testing only.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
