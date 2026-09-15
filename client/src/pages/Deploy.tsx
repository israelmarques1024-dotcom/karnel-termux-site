import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";
import { DEPLOY_TOOLS } from "@/data/catalog";
import { ROUTES } from "@/lib/routes";
import { useLocation } from "wouter";

const tools = DEPLOY_TOOLS.map(tool => ({ ...tool, bin: tool.flag.slice(2) }));

export default function Deploy() {
  const [location] = useLocation();
  const isSupabaseRoute = location === ROUTES.supabase;

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">
            {isSupabaseRoute ? "Supabase CLI" : "Deploy CLIs"}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {isSupabaseRoute
              ? "Supabase project workflows and the Android/Termux compatibility limitation."
              : "Install deployment CLIs directly from your phone. Vercel, Railway, Netlify, and Supabase are available in the catalog."}
          </p>
        </AnimatedSection>

        {isSupabaseRoute && (
          <AnimatedSection delay={150}>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-bold font-mono mb-3">
                Android / Termux limitation
              </h2>
              <p className="text-muted-foreground">
                The official Supabase CLI downloads a native binary that is not
                supported on Android/Termux. It can terminate with
                <code className="text-accent"> SIGSYS </code>. Do not rely on
                <code className="text-accent">
                  {" "}
                  karnel install deploy --supabase{" "}
                </code>
                for a working on-device CLI.
              </p>
              <p className="text-muted-foreground mt-3">
                Run Supabase CLI commands from a supported desktop or CI
                environment instead. Android projects can still use Supabase
                through their application SDK or HTTPS APIs.
              </p>
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Quick Install</h3>
            <CodeBlock
              code={`karnel install deploy`}
              language="bash"
              title="terminal"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Install specific:{" "}
              <code className="text-accent">
                karnel install deploy --vercel --railway
              </code>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Available CLIs</h2>
        </AnimatedSection>

        <AnimatedSection delay={250}>
          <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[42rem] text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">CLI</th>
                    <th className="text-left py-3 px-4 font-mono">Binary</th>
                    <th className="text-left py-3 px-4 font-mono">Flag</th>
                    <th className="text-left py-3 px-4 font-mono">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map(tool => (
                    <tr
                      key={tool.flag}
                      className="border-b border-border hover:bg-accent/5 transition-colors"
                    >
                      <td className="py-3 px-4 font-mono font-bold">
                        {tool.name}
                      </td>
                      <td className="py-3 px-4 font-mono text-accent text-xs">
                        {tool.bin}
                      </td>
                      <td className="py-3 px-4 text-accent font-mono text-xs">
                        {tool.flag}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">
                        {tool.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <h2 className="text-2xl font-bold font-mono mb-6">Usage</h2>
        </AnimatedSection>

        <div className="space-y-6">
          {tools.map((tool, i) => (
            <AnimatedSection key={i} delay={400 + i * 100}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono text-accent mb-2">
                  {tool.name}
                </h3>
                <CodeBlock
                  code={`karnel install deploy ${tool.flag}`}
                  language="bash"
                  title="install"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
