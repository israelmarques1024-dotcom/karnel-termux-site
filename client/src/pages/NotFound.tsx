import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg text-center">
        <AnimatedSection animation="scale-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-full animate-ping" />
              <AlertCircle className="relative h-16 w-16 text-accent" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-6xl font-bold text-foreground mb-2 font-mono">
            404
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/40 active:scale-95"
          >
            <Home className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Go Home
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
