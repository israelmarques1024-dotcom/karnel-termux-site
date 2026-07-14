import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const commands = {
  clipboard: [
    { desc: "Get clipboard content", cmd: "termux-clipboard-get" },
    { desc: "Set clipboard content", cmd: 'termux-clipboard-set "text"' },
  ],
  hardware: [
    { desc: "Get battery status", cmd: "termux-battery-status" },
    { desc: "List available sensors", cmd: "termux-sensor -s" },
    { desc: "Read sensor data", cmd: "termux-sensor -n <sensor>" },
    { desc: "Turn on flashlight", cmd: "termux-torch on" },
    { desc: "Turn off flashlight", cmd: "termux-torch off" },
    { desc: "Vibrate for 500ms", cmd: "termux-vibrate -d 500" },
  ],
  camera: [
    { desc: "Get camera information", cmd: "termux-camera-info" },
    { desc: "Take a photo", cmd: "termux-camera-photo" },
  ],
  location: [
    { desc: "Get GPS location", cmd: "termux-location" },
  ],
  notifications: [
    { desc: "Show notification", cmd: 'termux-notification -t "Title" -c "Content"' },
    { desc: "Remove notification", cmd: "termux-notification-remove <id>" },
  ],
  sms: [
    { desc: "Get device information", cmd: "termux-telephony-deviceinfo" },
    { desc: "Get cell information", cmd: "termux-telephony-cellinfo" },
    { desc: "List SMS inbox", cmd: "termux-sms-inbox" },
    { desc: "Send SMS", cmd: 'termux-sms-send -n <number> "message"' },
  ],
};

export default function TermuxAPI() {
  return (
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold font-mono mb-4">Termux:API</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Termux:API exposes Android and hardware features as command-line
              commands. Access clipboard, sensors, camera, notifications and more
              directly from your terminal.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
              <h3 className="font-bold font-mono mb-4">Installation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Install the APK and termux-api package, then run any command below.
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
                <TabsTrigger value="clipboard">Clipboard</TabsTrigger>
                <TabsTrigger value="hardware">Hardware</TabsTrigger>
                <TabsTrigger value="camera">Câmera</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
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
              <h2 className="text-2xl font-bold font-mono mb-6">Requirements</h2>
              <p className="text-muted-foreground mb-6">
                Termux:API requires two components to work. The APK grants Android
                permissions, and the package provides the command-line interface.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold font-mono mb-3">1. Install the APK</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download and install the Termux:API app from GitHub.
                  </p>
                  <a
                    href="https://github.com/termux/termux-api/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                  >
                    Download APK
                  </a>
                </div>
                <div>
                  <h3 className="font-bold font-mono mb-3">2. Install the Package</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Inside Termux, install the API package:
                  </p>
                  <CodeBlock code="pkg install termux-api" language="bash" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
  );
}
