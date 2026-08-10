import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function KarnelPlugin() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Plugin System</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Extend Karnel with community plugins from GitHub.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-8">
            <h3 className="font-bold font-mono mb-4">Install a plugin</h3>
            <CodeBlock
              code="karnel plugin install <approved-name>"
              language="bash"
              title="terminal"
            />
            <p className="text-sm text-muted-foreground mt-2">
              Installs an approved plugin from the official registry.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-8">
            <h3 className="font-bold font-mono mb-4">Plugin commands</h3>
            <CodeBlock
              code={`karnel plugin install <approved-name>       Install an approved plugin
karnel plugin install <user/repo> --unsafe  Install an unapproved GitHub plugin
karnel plugin remove <name>      Uninstall a plugin
 karnel plugin update <name>      Update a plugin
 karnel plugin list               List installed plugins
 karnel plugin search --compatible Search approved compatible plugins
 karnel plugin create <name>      Scaffold a new plugin`}
              language="bash"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={175}>
          <p className="text-sm text-muted-foreground mb-8">
            Unapproved repositories require <code>--unsafe</code> and an
            interactive confirmation because plugins run with your user
            permissions. Approved registry metadata is reviewed, but plugins are
            Bash code and are not sandboxed.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="card-hover bg-card border border-border rounded-lg p-6 mb-8">
            <h3 className="font-bold font-mono mb-2">Scaffold a plugin</h3>
            <p className="text-muted-foreground mb-4">
              Generate a new plugin with the default structure:
            </p>
            <CodeBlock
              code={`karnel plugin create my-plugin`}
              language="bash"
            />
            <p className="text-sm text-muted-foreground mt-2">
              Creates <code>$KARNEL_DATA/plugins/my-plugin/</code>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={250}>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <h3 className="font-bold font-mono mb-2">Plugin structure</h3>
            <p className="text-muted-foreground mb-4">
              Each plugin needs a <code>karnel-plugin.json</code> manifest:
            </p>
            <CodeBlock
              code={`{
  "schemaVersion": 1,
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "My awesome plugin",
  "commands": ["hello"],
  "minKarnelVersion": "4.13.11",
  "license": "MIT",
  "capabilities": []
}`}
              language="json"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Commands go in <code>commands/</code> as shell scripts. Each
              command file defines a <code>{`{name}_main()`}</code> function.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
