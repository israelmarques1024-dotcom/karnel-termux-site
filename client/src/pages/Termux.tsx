import { Check, X, Lock, Zap, Shield, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const features = [
  { icon: <Lock size={28} />, title: "Seguro", desc: "Ambiente Linux isolado com recursos de segurança integrados" },
  { icon: <Zap size={28} />, title: "Rápido", desc: "Terminal leve que funciona perfeitamente em qualquer Android" },
  { icon: <Shield size={28} />, title: "Poderoso", desc: "Acesso a um shell Linux completo com gerenciador de pacotes" },
  { icon: <Wrench size={28} />, title: "Flexível", desc: "Instale Python, Node.js, Git e milhares de outros pacotes" },
];

const comparisons = [
  { feature: "Configuração com um comando", termux: false },
  { feature: "Sistema de módulos & CLI framework", termux: false },
  { feature: "30 agentes de IA pré-configurados", termux: false },
  { feature: "code-server (VS Code no navegador)", termux: false },
  { feature: "ZSH + plugins + memória persistente", termux: false },
  { feature: "Deploy direto (Vercel, Railway, Netlify)", termux: false },
  { feature: "Assistente de voz integrado", termux: false },
  { feature: "PostgreSQL gerenciado (karnel pg)", termux: false },
  { feature: "Diagnóstico automático (karnel doctor)", termux: false },
  { feature: "Gerenciamento de secrets (karnel env)", termux: false },
  { feature: "Multi-linguagem (Python, Node, Go, Rust)", termux: false },
  { feature: "Git + GitHub CLI pré-configurados", termux: false },
  { feature: "Mecanismo de atualização centralizado", termux: false },
  { feature: "Segundo cérebro (karnel brain)", termux: false },
  { feature: "Inicialização de projetos (karnel init)", termux: false },
  { feature: "Ambiente configurado em segundos", termux: false },
  { feature: "Gerenciamento de variáveis de ambiente", termux: false },
  { feature: "Documentação interativa (karnel show)", termux: false },
];

export default function Termux() {
  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold font-mono mb-4">Termux</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Termux é um emulador de terminal Linux para Android que fornece um
              ambiente seguro e leve para executar programas de linha de comando.
              Ele transforma seu dispositivo Android em uma poderosa estação de trabalho de desenvolvimento.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex gap-4 mb-12">
              <a
                href="https://github.com/termux/termux-app/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/40 active:scale-95"
              >
                Baixar Termux
              </a>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={200 + i * 80}>
                <div className="card-hover bg-card border border-border rounded-lg p-6">
                  <div className="text-3xl mb-3 text-accent">{f.icon}</div>
                  <h3 className="font-bold font-mono mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <h2 className="text-2xl font-bold font-mono mb-6">Por que Usar o Karnel?</h2>
            <p className="text-muted-foreground mb-6">
              Embora o Termux funcione muito bem pronto para uso, o Karnel melhora sua
              experiência com automação e ferramentas avançadas.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={550}>
            <div className="card-hover overflow-hidden rounded-xl border border-border mb-12">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-mono font-bold">Funcionalidade</th>
                      <th className="text-center py-3 px-4 font-mono font-bold">Apenas Termux</th>
                      <th className="text-center py-3 px-4 font-mono font-bold">Karnel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((row, i) => (
                      <tr key={i} className="border-b border-border hover:bg-accent/5 transition-colors">
                        <td className="py-3 px-4 font-mono text-sm">{row.feature}</td>
                        <td className="py-3 px-4 text-center">
                          {row.termux ? (
                            <Check size={18} className="mx-auto text-emerald-500" />
                          ) : (
                            <X size={18} className="mx-auto text-destructive" />
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Check size={18} className="mx-auto text-emerald-500" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="card-hover bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold font-mono mb-4">Pronto para Começar?</h3>
              <p className="text-muted-foreground mb-6">
                Baixe o Termux primeiro, depois instale o Karnel para desbloquear todo o
                potencial do seu ambiente de desenvolvimento Android.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/termux/termux-app/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  Baixar Termux
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
