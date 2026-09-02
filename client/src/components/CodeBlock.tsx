import { Copy, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({
  code,
  language = "bash",
  title,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API is unavailable");
      }
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Copied to clipboard!");
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Could not copy to clipboard");
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden my-4 shadow-lg shadow-black/20 hover:shadow-accent/10 hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      {(title || language) && (
        <div className="flex items-center justify-between gap-2 bg-gradient-to-r from-secondary/50 to-secondary/30 px-3 py-2 sm:px-4 sm:py-3 border-b border-border/50">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            {/* Terminal dots */}
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-sm" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-sm" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm" />
            </div>
            <span
              className="truncate text-xs text-muted-foreground font-mono ml-1 font-semibold tracking-wide"
              title={title || language}
            >
              {title || language}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy code to clipboard"}
            title={copied ? "Copied" : "Copy code"}
            className="min-h-11 min-w-11 p-0 hover:bg-accent/10 transition-colors"
          >
            {copied ? (
              <Check size={14} className="text-accent animate-pulse" />
            ) : (
              <Copy size={14} className="hover:text-accent transition-colors" />
            )}
          </Button>
        </div>
      )}

      {/* Code */}
      <pre className="p-3 sm:p-5 overflow-x-auto bg-gradient-to-b from-background to-background/80">
        <code className="font-mono text-xs sm:text-sm text-foreground leading-relaxed tracking-tight">
          {code}
        </code>
      </pre>
    </div>
  );
}
