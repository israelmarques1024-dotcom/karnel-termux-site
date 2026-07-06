import { useState, useEffect } from "react";

const PIX_KEY = "037f07bd-a326-42b6-a5a3-f29b36e703db";

export default function SupportProject() {
  const [copied, setCopied] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState("");

  useEffect(() => {
    // Dynamically import QRCode only on client side
    import("qrcode.react")
      .then(({ QRCodeCanvas }) => {
        // Generate QR code using a simple svg approach
      })
      .catch(() => {
        // Fallback
      });
  }, []);

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = PIX_KEY;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      if (document.execCommand("copy")) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
      document.body.removeChild(textarea);
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
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(PIX_KEY)}`}
                alt="Pix QR Code"
                className="mx-auto block"
                width={200}
                height={200}
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