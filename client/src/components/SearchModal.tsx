import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useLocation } from "wouter";
import { searchTools, type SearchEntry } from "@/lib/search";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [, navigate] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const results = useMemo(() => searchTools(query), [query]);

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
          return;
        }
        if (event.key !== "Tab") return;
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      };
      document.addEventListener("keydown", onKeyDown);
      return () => {
        document.removeEventListener("keydown", onKeyDown);
        previousFocusRef.current?.focus();
      };
    }
  }, [open, onClose]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        navigate(results[selectedIndex].route);
        onClose();
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [results, selectedIndex, navigate, onClose]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div className="fixed inset-0 bg-black/60" onClick={onClose} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-dialog-title"
        className="relative w-full max-w-lg rounded-xl border border-border bg-background shadow-2xl"
      >
        <h2 id="search-dialog-title" className="sr-only">
          Search Karnel documentation
        </h2>
        <div className="flex items-center gap-3 border-b border-border px-4">
          <svg
            className="h-5 w-5 shrink-0 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          <input
            ref={inputRef}
            aria-label="Search tools and categories"
            className="flex-1 bg-transparent py-4 text-base outline-none placeholder:text-muted-foreground"
            placeholder="Search tools, categories..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
          <kbd className="hidden rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground sm:inline-block">
            ESC
          </kbd>
        </div>
        {query && results.length === 0 && (
          <div className="p-6 text-center text-sm text-muted-foreground">
            No tools found for "<strong>{query}</strong>"
          </div>
        )}
        {results.length > 0 && (
          <ul
            className="max-h-80 overflow-y-auto p-2"
            aria-label="Search results"
          >
            {results.map((entry, i) => (
              <SearchItem
                key={entry.flag}
                entry={entry}
                selected={i === selectedIndex}
                onSelect={() => {
                  navigate(entry.route);
                  onClose();
                }}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function SearchItem({
  entry,
  selected,
  onSelect,
}: {
  entry: SearchEntry;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
          selected ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
        }`}
        onClick={onSelect}
      >
        <span className="flex-1 truncate">
          <span className="font-medium">{entry.name}</span>
          <span className="ml-2 text-muted-foreground">{entry.desc}</span>
        </span>
        <span className="shrink-0 rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
          {entry.category}
        </span>
        <code className="hidden shrink-0 text-xs text-muted-foreground sm:inline-block">
          {entry.flag}
        </code>
      </button>
    </li>
  );
}
