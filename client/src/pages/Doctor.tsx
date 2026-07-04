import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function Doctor() {
  const checks = [
    { num: 1, title: "Informações do Sistema", desc: "Versão do Android, versão do Termux, arquitetura da CPU" },
    { num: 2, title: "Recursos do Sistema", desc: "Espaço em disco disponível, RAM total e disponível, avisos de pouca memória" },
    { num: 3, title: "Armazenamento e Permissões", desc: "Acessibilidade do armazenamento compartilhado, permissões de gravação no caminho do Omni, integridade do diretório Omni" },
    { num: 4, title: "Linguagens e Ferramentas Críticas", desc: "Verifica git, ripgrep, jq, curl, tar, Node.js, Python, Rust, Go, Clang, Make" },
    { num: 5, title: "Saúde do Gerenciador de Pacotes", desc: "Auditoria dpkg, pacotes retidos, validação de fontes APT" },
    { num: 6, title: "Node.js e NPM", desc: "Versão do Node, versão do NPM, permissões do prefixo global, tamanho do cache" },
    { num: 7, title: "Ambiente Python", desc: "Detecção do interpretador Python, disponibilidade do pip, módulo venv" },
    { num: 8, title: "Banco de Dados PostgreSQL", desc: "Instalação do PostgreSQL, diretório de dados, status de execução" },
    { num: 9, title: "Framework Omni", desc: "Versão do Omni, symlinks da CLI, instalação do banner na configuração do shell" },
    { num: 10, title: "Status das Ferramentas de IA", desc: "Escaneia 30+ ferramentas de IA (opencode, claude, gemini, ollama, etc.)" },
    { num: 11, title: "Configuração do Shell", desc: "Existência do arquivo de configuração ZSH/Bash, validação de sintaxe" },
    { num: 12, title: "Compatibilidade com Android", desc: "Detecção do Phantom Process Killer no Android 12+" },
    { num: 13, title: "Termux:API", desc: "Verificação de instalação do pacote Termux-API" },
    { num: 14, title: "Configuração do Git", desc: "Configurações de git user.name e user.email" },
    { num: 15, title: "Chaves SSH", desc: "Existência de chave SSH para autenticação no GitHub" },
    { num: 16, title: "Conectividade de Rede", desc: "Acessibilidade HTTP ao GitHub" },
    { num: 17, title: "Servidor OpenSSH", desc: "Disponibilidade do SSHD (opcional)" },
    { num: 18, title: "Saúde do Disco", desc: "Aviso de espaço em disco baixo (abaixo de 500MB)" },
    { num: 19, title: "Integridade dos Dados Omni", desc: "Verifica diretórios OMNI_CONFIG, OMNI_CACHE, OMNI_DATA" },
    { num: 20, title: "Geração de Relatório", desc: "Salva um relatório detalhado em Markdown em OMNI_DATA/doctor_reports/" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">omni doctor</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Diagnostique seu ambiente Termux e Omni. Executa 20 verificações em recursos
            do sistema, runtimes de linguagens, bancos de dados, ferramentas de IA, configuração do shell e mais.
          </p>

          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Uso</h3>
            <CodeBlock code="omni doctor" language="bash" title="terminal" />
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">As 20 Verificações</h2>
          <p className="text-muted-foreground mb-6">
            Cada verificação relata um status — sucesso, aviso ou erro — e pode
            opcionalmente ser corrigida automaticamente.
          </p>

          <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono w-12">#</th>
                    <th className="text-left py-3 px-4 font-mono">Verificação</th>
                    <th className="text-left py-3 px-4 font-mono">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {checks.map((check) => (
                    <tr key={check.num} className="border-b border-border hover:bg-secondary/20 transition-colors">
                      <td className="py-3 px-4 font-mono text-accent">{check.num}</td>
                      <td className="py-3 px-4 font-mono font-medium">{check.title}</td>
                      <td className="py-3 px-4 text-muted-foreground">{check.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Capacidade de Auto-Correção</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <p className="text-muted-foreground mb-4">
              Após executar todas as verificações, o <code className="text-accent">omni doctor</code> apresenta problemas detectados e
              pergunta se você deseja aplicar as correções automáticas. Cada problema tem uma correção
              predefinida ou comando shell.
            </p>
            <p className="text-muted-foreground mb-4">Exemplos de correções automáticas:</p>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              {[
                "Vincular armazenamento compartilhado via termux-setup-storage",
                "Instalar pacotes ausentes via pkg install",
                "Corrigir estado quebrado do dpkg/apt",
                "Recriar symlinks da CLI para core/omni",
                "Corrigir permissões do diretório global do NPM",
                "Inicializar e iniciar PostgreSQL",
                "Gerar chave SSH para GitHub",
                "Instalar banner do Omni na configuração do shell",
                "Limpar cache e pacotes não utilizados",
              ].map((fix, i) => (
                <div key={i} className="bg-background border border-border rounded p-3 text-sm text-muted-foreground">
                  {fix}
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Saída do Relatório</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <p className="text-muted-foreground mb-4">
              Um relatório detalhado em Markdown é salvo em:
            </p>
            <CodeBlock
              code={"$OMNI_DATA/doctor_reports/doctor_report_latest.md"}
              language="bash"
              title="report path"
            />
            <p className="text-muted-foreground mt-4">
              O relatório inclui informações do sistema, uso de recursos, status do PostgreSQL, contagem de ferramentas
              de IA e um resumo de erros, avisos e correções aplicadas.
            </p>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Exemplo de Saída</h2>

          <div className="bg-card border border-border rounded-lg p-6">
            <CodeBlock
              code={`◈ OMNI DOCTOR ◈

[✓] Android Version: 14
[✓] Termux Version: 0.118.0
[✓] CPU Architecture: aarch64

── System Resources ──
[✓] Available disk space: 45G
[✓] RAM: Total: 6144 MB | Available: 2800 MB

── Languages & Critical Tools ──
[✓] git: 2.45.0
[✓] node: v22.0.0
[✓] python: 3.12.0
[!] go is not installed

── Summary ──
[✓] Diagnostics completed!
Report saved: /data/data/com.termux/files/home/.local/share/omni/doctor_reports/doctor_report_latest.md
Found 1 warning(s). System is functional but can be optimized.

── Auto-Fix Options ──
Detected 1 issue(s) that can be automatically fixed:
  1. Install missing: golang

Apply all auto-corrections? [y/N]`}
              language="bash"
              title="sample output"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
