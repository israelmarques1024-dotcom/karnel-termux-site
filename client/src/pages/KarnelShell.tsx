import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const plugins = [
  { name: "powerlevel10k", flag: "--powerlevel10k", desc: "Fastest and most beautiful ZSH theme" },
  { name: "zsh-defer", flag: "--zsh-defer", desc: "Async plugin loading" },
  { name: "zsh-autosuggestions", flag: "--zsh-autosuggestions", desc: "Fish-style autocomplete" },
  { name: "zsh-syntax-highlighting", flag: "--zsh-syntax-highlighting", desc: "Syntax highlighting in commands" },
  { name: "zsh-history-substring-search", flag: "--history-substring", desc: "Fish-style history search" },
  { name: "zsh-completions", flag: "--zsh-completions", desc: "Extra completion definitions" },
  { name: "fzf-tab", flag: "--fzf-tab", desc: "Fuzzy tab completion with fzf" },
  { name: "zsh-you-should-use", flag: "--you-should-use", desc: "Reminds you of existing aliases" },
  { name: "zsh-autopair", flag: "--zsh-autopair", desc: "Auto-close brackets and quotes" },
  { name: "zsh-better-npm-completion", flag: "--better-npm", desc: "Improved npm completion" },
];

export default function KarnelShell() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Shell ZSH</h1>
          <p className="text-lg text-muted-foreground mb-8">
            ZSH com Oh My Zsh e plugins de produtividade para Termux.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Quick Install</h3>
            <CodeBlock code="karnel install shell" language="bash" title="terminal" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Included Plugins (10)</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {plugins.map((p, i) => (
            <AnimatedSection key={i} delay={250 + i * 40}>
              <div className="card-hover bg-card border border-border rounded-lg p-4">
                <h3 className="font-bold font-mono mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{p.desc}</p>
                <CodeBlock code={`karnel install shell ${p.flag}`} language="bash" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600}>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <h3 className="font-bold font-mono mb-4">Management</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Update plugins:</p>
                <CodeBlock code="karnel update shell" language="bash" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Remove:</p>
                <CodeBlock code="karnel uninstall shell" language="bash" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
