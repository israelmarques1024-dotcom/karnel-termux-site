import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function PG() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">
            karnel pg — PostgreSQL Manager
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Manage PostgreSQL databases directly from the terminal: start, stop,
            create, drop, and enter the psql shell with one command.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Uso</h3>
            <CodeBlock
              code={`karnel pg                       # Show help
karnel pg start                 # Start server
karnel pg stop                  # Stop server
karnel pg restart               # Restart server
karnel pg status                # Check status
karnel pg init                  # Initialize database
karnel pg create <name>         # Create database
karnel pg drop <name>           # Drop database
karnel pg list                  # List databases
karnel pg shell                 # Open psql console`}
              language="bash"
              title="terminal"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Quick Example</h2>
          <div className="card-hover bg-card border border-border rounded-lg p-6 mb-12">
            <CodeBlock
              code={`karnel pg init && karnel pg start && karnel pg create myapp`}
              language="bash"
              title="terminal"
            />
            <p className="text-sm text-muted-foreground mt-3">
              Initializes PostgreSQL, starts the server, and creates a database
              called "myapp".
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <h2 className="text-2xl font-bold font-mono mb-6">Prerequisites</h2>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground mb-4">
              PostgreSQL must be installed. Install with:
            </p>
            <CodeBlock
              code="karnel install db --postgresql"
              language="bash"
              title="terminal"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
