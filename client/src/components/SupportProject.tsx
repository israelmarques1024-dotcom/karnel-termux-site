import { useState } from "react";

const PIX_KEY = "037f07bd-a326-42b6-a5a3-f29b36e703db";

const PIX_PAYLOAD = `00020126580014br.gov.bcb.pix0136${PIX_KEY}52040000530398654051.005802BR5913OMNI CATALYST6009SAO PAULO62070503***6304`;

// QR code via API (works in all environments, no SSR issues)
const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(PIX_PAYLOAD)}`;

export default function SupportProject() {
  const [copied, setCopied] = useState(false);

  const copyPixKey = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(PIX_PAYLOAD);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = PIX_PAYLOAD;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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
              <img
                src={QR_CODE_URL}
                alt="Pix QR Code"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="mb-2 font-mono text-sm">Pix Key:</p>
            <code
              className="px-4 py-2 bg-gray-900/50 rounded-xl font-mono text-cyan-300 border border-gray-700/50 break-all inline-block mb-3"
            >
              {PIX_KEY}
            </code>
            <br />
            <button
              type="button"
              onClick={copyPixKey}
              className="mt-2 px-4 py-2 bg-cyan-600 text-white rounded-xl font-semibold"
            >
              {copied ? "✅ Copied!" : "📋 Copy"}
            </button>
          </div>

          <div className="text-center mt-8 p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30">
            <p className="text-sm font-semibold text-purple-300 mb-2">
              Pagamento com Nubank
            </p>
            <button
              type="button"
              onClick={copyPixKey}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-500 transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="24" height="24" rx="6" fill="#8A2BE2" />
                <path
                  d="M7 12L10 15L17 8"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Copiar Pix para o Nubank
            </button>
            <p className="text-xs text-gray-400 mt-2">
              Abra o app do Nubank e cole o Pix Copia e Cola
            </p>
          </div>

          <p className="mt-10 text-center text-xs text-gray-500 font-mono">
            Omni Catalyst Project &copy; 2026 — Built by israel marques
          </p>
        </div>
      </div>
    </section>
  );
}