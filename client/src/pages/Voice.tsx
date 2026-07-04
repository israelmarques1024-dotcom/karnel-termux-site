import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function Voice() {
  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">omni voice — Comandos de Voz</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Capture áudio do microfone, revise no Neovim e dispare um agente de IA.
            Codificação mãos-livres no seu Android.
          </p>

          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Uso</h3>
            <CodeBlock
              code={`omni voice                    # Mostra ajuda
omni voice <agent>            # Captura → nvim → envia pro agente
omni voice text               # Captura → nvim → imprime no terminal
omni voice !                  # Atalho para 'text'`}
              language="bash"
              title="terminal"
            />
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Fluxo de Trabalho</h2>

          <div className="space-y-4 mb-12">
            {[
              { num: "1", title: "Captura", desc: "O Omni grava sua voz pelo microfone do dispositivo." },
              { num: "2", title: "Revisão", desc: "Abre o texto transcrito no Neovim pra você editar." },
              { num: "3", title: "Envio", desc: "Envia o texto revisado para o agente de IA escolhido." },
            ].map((step, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5 flex gap-5 items-start">
                <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center font-bold text-accent font-mono text-sm shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold font-mono mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Exemplo</h2>
          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <CodeBlock
              code={`omni voice gemini`}
              language="bash"
              title="terminal"
            />
            <p className="text-sm text-muted-foreground mt-3">
              Grava sua voz, abre no Neovim pra revisão, e envia pro Gemini CLI.
            </p>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Requisitos</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-accent">•</span> Microfone funcionando no Termux</li>
              <li className="flex gap-2"><span className="text-accent">•</span> Neovim instalado (via <code className="text-accent">omni install editor</code>)</li>
              <li className="flex gap-2"><span className="text-accent">•</span> Um agente de IA instalado (ex: <code className="text-accent">omni install ai --gemini-cli</code>)</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
