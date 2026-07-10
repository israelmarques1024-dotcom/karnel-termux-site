import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const commands = {
  clipboard: [
    { desc: "Obter conteúdo da área de transferência", cmd: "termux-clipboard-get" },
    { desc: "Definir conteúdo da área de transferência", cmd: 'termux-clipboard-set "text"' },
  ],
  hardware: [
    { desc: "Obter status da bateria", cmd: "termux-battery-status" },
    { desc: "Listar sensores disponíveis", cmd: "termux-sensor -s" },
    { desc: "Ler dados do sensor", cmd: "termux-sensor -n <sensor>" },
    { desc: "Ligar lanterna", cmd: "termux-torch on" },
    { desc: "Desligar lanterna", cmd: "termux-torch off" },
    { desc: "Vibrar por 500ms", cmd: "termux-vibrate -d 500" },
  ],
  camera: [
    { desc: "Obter informações da câmera", cmd: "termux-camera-info" },
    { desc: "Tirar uma foto", cmd: "termux-camera-photo" },
  ],
  location: [
    { desc: "Obter localização GPS", cmd: "termux-location" },
  ],
  notifications: [
    { desc: "Mostrar notificação", cmd: 'termux-notification -t "Title" -c "Content"' },
    { desc: "Remover notificação", cmd: "termux-notification-remove <id>" },
  ],
  sms: [
    { desc: "Obter informações do dispositivo", cmd: "termux-telephony-deviceinfo" },
    { desc: "Obter informações da célula", cmd: "termux-telephony-cellinfo" },
    { desc: "Listar caixa de entrada SMS", cmd: "termux-sms-inbox" },
    { desc: "Enviar SMS", cmd: 'termux-sms-send -n <number> "message"' },
  ],
};

export default function TermuxAPI() {
  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold font-mono mb-4">Termux:API</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Termux:API expõe recursos do Android e hardware como comandos de linha
              de comando. Acesse área de transferência, sensores, câmera, notificações e muito mais
              diretamente do seu terminal.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
              <h3 className="font-bold font-mono mb-4">Instalação</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Instale o APK e o pacote termux-api, depois execute qualquer comando abaixo.
              </p>
              <CodeBlock
                code={`# 1. Baixe e instale o APK do GitHub
# 2. Dentro do Termux, instale o pacote:
pkg install termux-api`}
                language="bash"
                title="terminal"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Tabs defaultValue="clipboard" className="mb-12">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                <TabsTrigger value="clipboard">Área de Transferência</TabsTrigger>
                <TabsTrigger value="hardware">Hardware</TabsTrigger>
                <TabsTrigger value="camera">Câmera</TabsTrigger>
                <TabsTrigger value="location">Localização</TabsTrigger>
                <TabsTrigger value="notifications">Notificações</TabsTrigger>
                <TabsTrigger value="sms">SMS</TabsTrigger>
              </TabsList>
              {Object.entries(commands).map(([category, cmds]) => (
                <TabsContent key={category} value={category}>
                  <div className="space-y-4">
                    {cmds.map((item, i) => (
                      <div key={i} className="card-hover bg-card border border-border rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                        <CodeBlock code={item.cmd} language="bash" />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="card-hover bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold font-mono mb-6">Requisitos</h2>
              <p className="text-muted-foreground mb-6">
                Termux:API requer dois componentes para funcionar. O APK concede permissões
                do Android, e o pacote fornece a interface de linha de comando.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold font-mono mb-3">1. Instale o APK</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Baixe e instale o aplicativo Termux:API do GitHub.
                  </p>
                  <a
                    href="https://github.com/termux/termux-api/releases/download/v0.53.0/termux-api-app_v0.53.0+github.debug.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                  >
                    Baixar APK
                  </a>
                </div>
                <div>
                  <h3 className="font-bold font-mono mb-3">2. Instale o Pacote</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Dentro do Termux, instale o pacote da API:
                  </p>
                  <CodeBlock code="pkg install termux-api" language="bash" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
