import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const PIX_KEY = "037f07bd-a326-42b6-a5a3-f29b36e703db";

export default function SupportProject() {
  const [copied, setCopied] = useState(false);

  const copyPixKey = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(PIX_KEY);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = PIX_KEY;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = PIX_KEY;
      document.body.appendChild(textarea);
      textarea.select();
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="support-project"
      className="py-20 px-4 bg-gray-900/30"
      aria-labelledby="support-title"
    >
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl p-8 bg-white/5 dark:bg-gray-900/50 backdrop-blur-xl border border-white/10">
          <h2
            id="support-title"
            className="text-center text-3xl font-bold font-mono mb-4"
          >
            💙 Support This Project
          </h2>

          <p className="text-center mb-8 max-w-2xl mx-auto">
            Every contribution helps this project grow and enables new features to be developed.
          </p>

          <div className="text-center mb-6">
            <div className="inline-block bg-white/5 rounded-2xl p-4 border border-white/10 mb-4">
              <QRCodeSVG
                value={PIX_KEY}
                size={200}
                level="M"
                includeMargin={true}
              />
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="mb-2 font-mono text-sm">Pix Key:</p>
            <code
              className="px-4 py-2 bg-gray-900/50 rounded-xl font-mono text-cyan-300 border border-gray-700/50 break-all"
              id="pix-key-display"
            >
              {PIX_KEY}
            </code>
            <button
              onClick={copyPixKey}
              className="ml-3 px-4 py-2 bg-cyan-600 text-white rounded-xl font-semibold"
            >
              {copied ? "✅ Copied!" : "📋 Copy"}
            </button>
            {copied && (
              <p className="mt-2 text-green-400 text-sm">Pix key copied!</p>
            )}
          </div>

          <p className="mt-10 text-center text-xs text-gray-500 font-mono">
            Omni Catalyst Project &copy; 2026 — Built by israel marques
          </p>
        </div>
      </div>
    </section>
  );
}