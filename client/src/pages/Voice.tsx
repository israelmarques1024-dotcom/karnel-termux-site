import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "wouter";

const agents = [
  { name: "kilo", cmd: "kilo --prompt \"...\"" },
  { name: "opencode", cmd: "opencode run \"...\"" },
  { name: "claude-code", cmd: "claude -p \"...\"" },
  { name: "codex", cmd: "codex \"...\"" },
  { name: "gemini-cli", cmd: "gemini -p \"...\"" },
  { name: "hermes-agent", cmd: "hermes chat -q \"...\"" },
  { name: "kimi-code", cmd: "kimi -p \"...\"" },
  { name: "mimocode", cmd: "mimo run \"...\"" },
  { name: "mistral-vibe", cmd: "vibe --prompt \"...\"" },
  { name: "openclaude", cmd: "openclaude --bg \"...\"" },
  { name: "pi", cmd: "pi -p \"...\"" },
  { name: "qwen-code", cmd: "qwen -p \"...\"" },
  { name: "crush", cmd: "crush \"...\"" },
  { name: "kiro", cmd: "kiro-cli \"...\"" },
  { name: "text", cmd: "stdout (no agent)" },
];

const steps = [
  { num: "1", title: "Captura", desc: "Fale o prompt no microfone. O Android transcreve com speech-to-text." },
  { num: "2", title: "Revisão", desc: "Texto transcrito abre no code-server para corrigir erros e ajustar." },
  { num: "3", title: "Clipboard", desc: "Prompt revisado é copiado para a área de transferência automaticamente." },
  { num: "4", title: "Disparo", desc: "Agente de AI é executado com o prompt — mãos-livres." },
];

export default function Voice() {
  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold font-mono mb-4">karnel voice — Speech-to-Agent</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Capture áudio pelo microfone, revise no code-server, copie para a área de
              transferência e dispare qualquer agente de IA com o prompt transcrito.
              Tudo em um comando.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
              <h3 className="font-bold font-mono mb-4">Uso Básico</h3>
              <CodeBlock
                code={`karnel voice                     # Mostra ajuda
karnel voice opencode             # Captura → code-server → opencode run
karnel voice text                 # Captura → code-server → stdout
karnel voice '!'                  # Atalho para "text"
karnel voice claude-code --lang pt-BR  # Fala em português → claude`}
                language="bash"
                title="terminal"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-2xl font-bold font-mono mb-6">Fluxo de Trabalho</h2>
          </AnimatedSection>

          <div className="space-y-4 mb-12">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={300 + i * 80}>
                <div className="card-hover bg-card border border-border rounded-lg p-5 flex gap-5 items-start">
                  <div className="relative flex shrink-0 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-accent/20 blur-md" />
                    <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 border border-accent/30 font-bold text-accent font-mono text-sm">
                      {step.num}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold font-mono mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600}>
            <h2 className="text-2xl font-bold font-mono mb-6">Agentes Suportados (15)</h2>
          </AnimatedSection>

          <AnimatedSection delay={650}>
            <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-mono text-accent">Agente</th>
                      <th className="text-left p-3 font-mono text-accent">Comando Executado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agents.map((a, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-accent/5 transition-colors">
                        <td className="p-3 font-mono">{a.name}</td>
                        <td className="p-3 text-muted-foreground font-mono text-xs">{a.cmd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={700}>
            <h2 className="text-2xl font-bold font-mono mb-6">Opções</h2>
          </AnimatedSection>

          <AnimatedSection delay={750}>
            <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-mono text-accent">Flag</th>
                      <th className="text-left p-3 font-mono text-accent">Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                      <td className="p-3 font-mono">--lang &lt;código&gt;</td>
                      <td className="p-3 text-muted-foreground">Idioma da fala: pt-BR, en-US, es</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                      <td className="p-3 font-mono">--raw</td>
                      <td className="p-3 text-muted-foreground">Pula edição no code-server, usa captura direta</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                      <td className="p-3 font-mono">--no-clip</td>
                      <td className="p-3 text-muted-foreground">Não copia prompt para área de transferência</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={800}>
            <h2 className="text-2xl font-bold font-mono mb-6">Exemplos</h2>
          </AnimatedSection>

          <div className="space-y-6 mb-12">
            {[
              { title: "Desenvolvimento com Voz", code: "karnel voice claude-code --lang en-US", desc: "Fale \"Create a React component with a counter\" e o Claude gera o código." },
              { title: "Código em Português", code: "karnel voice opencode --lang pt-BR", desc: "Descreva uma feature em português e o opencode implementa." },
              { title: "Anotações Rápidas", code: "karnel voice text --raw --no-clip >> ideias.txt", desc: "Transcreve direto para um arquivo sem edição nem clipboard." },
            ].map((ex, i) => (
              <AnimatedSection key={i} delay={900 + i * 80}>
                <div className="card-hover bg-card border border-border rounded-lg p-6">
                  <h3 className="font-bold font-mono mb-3">{ex.title}</h3>
                  <CodeBlock code={ex.code} language="bash" title="terminal" />
                  <p className="text-sm text-muted-foreground mt-3">{ex.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={1100}>
            <h2 className="text-2xl font-bold font-mono mb-6">Requisitos</h2>
            <div className="card-hover bg-card border border-border rounded-lg p-6 mb-12">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-accent">•</span> <strong>Termux:API package:</strong> <code className="text-accent">pkg install termux-api</code></li>
                <li className="flex gap-2"><span className="text-accent">•</span> <strong>Termux:API app:</strong> <Link href="/termux/api" className="text-accent underline">Download APK</Link></li>
                <li className="flex gap-2"><span className="text-accent">•</span> <strong>code-server:</strong> <code className="text-accent">karnel install editor</code> (opcional com <code className="text-accent">--raw</code>)</li>
                <li className="flex gap-2"><span className="text-accent">•</span> <strong>Microfone:</strong> permitir nas Config. Android &gt; Apps &gt; Termux &gt; Permissões</li>
                <li className="flex gap-2"><span className="text-accent">•</span> <strong>Agente de IA:</strong> <code className="text-accent">karnel install ai</code></li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1200}>
            <h2 className="text-2xl font-bold font-mono mb-6">Solução de Problemas</h2>
            <div className="card-hover bg-card border border-border rounded-lg p-6">
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h3 className="font-bold font-mono text-foreground mb-1">"No speech detected"</h3>
                  <p>Microfone sem permissão ou app Termux:API não instalado.</p>
                </div>
                <div>
                  <h3 className="font-bold font-mono text-foreground mb-1">Captura em inglês mesmo falando português</h3>
                  <p>Use <code className="text-accent">--lang pt-BR</code> para forçar o idioma.</p>
                </div>
                <div>
                  <h3 className="font-bold font-mono text-foreground mb-1">code-server não abre</h3>
                  <p>Use <code className="text-accent">--raw</code> para pular a edição quando não há TTY.</p>
                </div>
                <div>
                  <h3 className="font-bold font-mono text-foreground mb-1">Histórico de bugs corrigidos</h3>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Corrigido: comando <code className="text-accent">termux-dialog speech</code> → <code className="text-accent">termux-speech-to-text</code></li>
                    <li>Corrigido: agente <code className="text-accent">kilo</code> faltando no dispatch</li>
                    <li>Corrigido: lógica booleana <code className="text-accent">is_text</code> com string</li>
                    <li>Corrigido: <code className="text-accent">cat | xargs</code> removido (UUOC)</li>
                    <li>Adicionado: opções <code className="text-accent">--lang</code>, <code className="text-accent">--raw</code>, <code className="text-accent">--no-clip</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
