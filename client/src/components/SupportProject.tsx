import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const PIX_KEY = "037f07bd-a326-42b6-a5a3-f29b36e703db";
const PIX_PAYLOAD = `00020126580014br.gov.bcb.pix0136${PIX_KEY}52040000530398654051.005802BR5913OMNI CATALYST6009SAO PAULO62070503***6304`;

export default function SupportProject() {
  const [copied, setCopied] = useState(false);
  const [qrLoaded, setQrLoaded] = useState(false);

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      const textarea = document.createElement("textarea");
      textarea.value = PIX_KEY;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section
      id="support-project"
      className="relative py-16 md:py-24 px-4 overflow-hidden"
      aria-labelledby="support-title"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl animate-pulse-slow delay-2000" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Card */}
        <div
          className="relative rounded-3xl p-8 md:p-12 bg-white/5 dark:bg-gray-900/50 backdrop-blur-xl border border-white/10 dark:border-gray-700/30 shadow-2xl shadow-blue-500/10 overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500" />

          {/* Heart icon with animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-xl opacity-30 animate-ping" />
              <svg
                className="w-14 h-14 text-pink-500 animate-heartbeat"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2
            id="support-title"
            className="text-center text-3xl md:text-4xl font-bold font-mono mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
          >
            💙 Apoie este Projeto
          </h2>

          {/* Subtitle */}
          <p className="text-center text-lg md:text-xl text-gray-300 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Cada contribuição ajuda este projeto a crescer e permite que novas funcionalidades sejam desenvolvidas.
          </p>

          {/* Main text */}
          <div className="prose prose-invert dark:prose-invert max-w-none mb-10 text-center text-gray-300 dark:text-gray-400 leading-relaxed">
            <p className="mb-4">
              Este projeto foi criado com dedicação para compartilhar conhecimento sobre programação,
              tecnologia e segurança da informação. Com sua contribuição, será possível investir em novos
              recursos, melhorar o desempenho do site, criar conteúdos mais completos, manter a
              infraestrutura e desenvolver ferramentas úteis para toda a comunidade.
            </p>
            <p className="mb-4">
              Independentemente do valor, sua ajuda faz diferença. Cada doação representa um passo a mais
              na evolução deste projeto e incentiva a continuidade do desenvolvimento.
            </p>
            <p className="text-blue-400 font-medium">Muito obrigado por fazer parte dessa jornada! 🚀</p>
          </div>

          {/* Pix Area */}
          <div className="relative">
            <h3 className="text-center text-xl font-bold font-mono mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Doação via Pix
            </h3>

            {/* QR Code */}
            <div className="flex justify-center mb-6 relative group">
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"
              />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-xl shadow-cyan-500/10">
                <QRCodeSVG
                  value={PIX_PAYLOAD}
                  size={200}
                  level="M"
                  includeMargin={true}
                  fgColor="#06b6d4"
                  bgColor="transparent"
                  className="mx-auto block"
                  aria-label="QR Code para doação via Pix"
                />
              </div>
            </div>

            {/* Pix Key */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-2 font-mono">Chave Pix:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <code
                  className="px-4 py-2 bg-gray-900/50 dark:bg-gray-800/50 rounded-xl font-mono text-cyan-300 text-base border border-gray-700/50 break-all max-w-xs"
                  id="pix-key-display"
                >
                  {PIX_KEY}
                </code>
                <button
                  onClick={copyPixKey}
                  disabled={copied}
                  className="group relative px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:from-cyan-500 hover:to-blue-500 hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label={copied ? "Chave Pix copiada" : "Copiar chave Pix para área de transferência"}
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${copied ? "rotate-180 scale-125 text-green-300" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                    {copied ? (
                      <>
                        ✅ Copiado!
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-green-400 animate-fade-in-out">
                          Chave Pix copiada com sucesso!
                        </span>
                      </>
                    ) : (
                      "📋 Copiar chave Pix"
                    )}
                  </span>
                </button>
              </div>
              {copied && (
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-green-600 text-white text-xs rounded-lg shadow-lg animate-slide-up"
                  role="status"
                  aria-live="polite"
                >
                  ✅ Chave Pix copiada com sucesso!
                </div>
              )}
            </div>
          </div>

          {/* Footer note */}
          <p className="mt-10 text-center text-xs text-gray-500 dark:text-gray-600 font-mono">
            Projeto Omni Catalyst &copy; 2024 — Feito com dedicação por israel marques
          </p>
        </div>
      </div>
    </section>
  );
}