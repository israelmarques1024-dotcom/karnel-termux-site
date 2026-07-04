import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function Termux() {
  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">Termux</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Termux é um emulador de terminal Linux para Android que fornece um
            ambiente seguro e leve para executar programas de linha de comando.
            Ele transforma seu dispositivo Android em uma poderosa estação de trabalho de desenvolvimento.
          </p>

          <div className="flex gap-4 mb-12">
            <a
              href="https://github.com/termux/termux-app/releases/download/v0.118.3/termux-app_v0.118.3+github-debug_universal.apk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">Baixar Termux</Button>
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: "🔒",
                title: "Seguro",
                desc: "Ambiente Linux isolado com recursos de segurança integrados",
              },
              {
                icon: "⚡",
                title: "Rápido",
                desc: "Terminal leve que funciona perfeitamente em qualquer Android",
              },
              {
                icon: "💪",
                title: "Poderoso",
                desc: "Acesso a um shell Linux completo com gerenciador de pacotes",
              },
              {
                icon: "🔧",
                title: "Flexível",
                desc: "Instale Python, Node.js, Git e milhares de outros pacotes",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold font-mono mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <h2 className="text-2xl font-bold font-mono mb-6">
            Por que Usar o Omni?
          </h2>
          <p className="text-muted-foreground mb-6">
            Embora o Termux funcione muito bem pronto para uso, o Omni melhora sua
            experiência com automação e ferramentas avançadas.
          </p>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-mono font-bold">
                    Funcionalidade
                  </th>
                  <th className="text-center py-3 px-4 font-mono font-bold">
                    Apenas Termux
                  </th>
                  <th className="text-center py-3 px-4 font-mono font-bold">
                    Omni
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Configuração com um comando",
                    termux: false,
                    core: true,
                  },
                  {
                    feature: "Sistema de módulos & CLI framework",
                    termux: false,
                    core: true,
                  },
                  {
                    feature: "Ferramentas de IA pré-configuradas (18+)",
                    termux: false,
                    core: true,
                  },
                  {
                    feature: "Neovim + suporte LSP (16+ linguagens)",
                    termux: false,
                    core: true,
                  },
                  {
                    feature: "ZSH + plugins + memória persistente",
                    termux: false,
                    core: true,
                  },
                  {
                    feature: "Mecanismo de atualização centralizado",
                    termux: false,
                    core: true,
                  },
                  {
                    feature: "Instalações manuais com pkg necessárias",
                    termux: true,
                    core: false,
                  },
                  {
                    feature: "Sem sistema de módulos",
                    termux: true,
                    core: false,
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border hover:bg-card/50 transition-colors"
                  >
                    <td className="py-3 px-4 font-mono text-sm">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.termux ? (
                        <X size={18} className="mx-auto text-destructive" />
                      ) : (
                        <Check size={18} className="mx-auto text-accent" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.core ? (
                        <Check size={18} className="mx-auto text-accent" />
                      ) : (
                        <X size={18} className="mx-auto text-destructive" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Next Steps */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold font-mono mb-4">
              Pronto para Começar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Baixe o Termux primeiro, depois instale o Omni para desbloquear todo o
              potencial do seu ambiente de desenvolvimento Android.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com/termux/termux-app/releases/download/v0.118.3/termux-app_v0.118.3+github-debug_universal.apk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Baixar Termux</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
