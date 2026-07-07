import { useState, useCallback } from "react";
const PIX_KEY = "037f07bd-a326-42b6-a5a3-f29b36e703db";
// ============ EMV Payload generation (for QR Code only) ============
function crc16(str: string): string {
  const crcTable = new Uint16Array(256);
  for (let i = 0; i < 256; i++) {
    let crc = i;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 1) ? (crc >> 1) ^ 0x8408 : crc >> 1;
    }
    crcTable[i] = crc;
  }
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    crc = (crc >> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xff];
  }
  return (crc ^ 0xFFFF).toString(16).toUpperCase().padStart(4, "0");
}
const tlv = (tag: string, value: string): string => tag + value.length.toString().padStart(2, "0") + value;
const PIX_PAYLOAD = (() => {
  const merchantAccount = tlv("26", tlv("00", "br.gov.bcb.pix") + tlv("01", PIX_KEY));
  const payload =
    tlv("00", "01") +
    merchantAccount +
    tlv("52", "0000") +
    tlv("53", "986") +
    tlv("58", "BR") +
    tlv("59", "OMNICATALYST") +
    tlv("60", "SAOPAULO") +
    tlv("62", tlv("05", "TEST")) +
    "6304";
  return payload + crc16(payload);
})();
// QR Code uses EMV payload (required for bank apps to recognize)
const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(PIX_PAYLOAD)}`;
// ============ Clipboard ============
async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fallback
    }
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    ta.style.top = "-9999px";
    ta.style.width = "1px";
    ta.style.height = "1px";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    if (ok) return true;
  } catch {
    // silent
  }
  return false;
}
// ============ Nubank Logo SVG ============
function NubankLogo() {
  return (
    <svg viewBox="0 0 120 40" className="inline-block w-20 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Nubank">
      <rect width="120" height="40" rx="8" fill="#8A05BE" />
      <path d="M28 12h4l6 10V12h4v16h-4l-6-10v10h-4V12z" fill="white" />
      <path d="M52 14c-3.3 0-6 2.5-6 6s2.7 6 6 6 6-2.5 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="white" />
      <path d="M64 14v4h3v3h-3v6h-4V14h4z" fill="white" />
      <path d="M75 14c-3.3 0-6 2.5-6 6s2.7 6 6 6c2.2 0 4-1.1 5.2-2.8l-3.2-2c-.5.8-1.2 1.2-2 1.2-1.1 0-2-.9-2-2.4 0-1.5.9-2.4 2-2.4.8 0 1.5.4 2 1.2l3.2-2C79 15.1 77.2 14 75 14z" fill="white" />
      <path d="M84 14v16h4v-6h2l2 6h4l-2-6c2-.5 3-2.5 3-4 0-3-2-6-5-6h-8zm4 3h3c1 0 2 .8 2 2 0 1.2-1 2-2 2h-3v-4z" fill="white" />
    </svg>
  );
}
const BANKS = [
  { name: "Itau", emoji: "🏦" },
  { name: "Bradesco", emoji: "🏛️" },
  { name: "Santander", emoji: "🏗️" },
  { name: "BB", emoji: "🌐" },
  { name: "Caixa", emoji: "🏧" },
  { name: "Inter", emoji: "🔷" },
  { name: "C6", emoji: "⚫" },
  { name: "PicPay", emoji: "🟢" },
  { name: "Mercado Pago", emoji: "🟡" },
];
export default function SupportProject() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const handleCopy = useCallback(async () => {
    setCopyError(false);
    const ok = await copyToClipboard(PIX_KEY);
    if (ok) {
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 3000);
    } else {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 4000);
    }
  }, []);
  return (
    <section
      id="support-project"
      className="relative py-24 px-4 overflow-hidden"
      aria-labelledby="support-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/30 to-cyan-900/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="relative max-w-2xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-10 bg-gray-900/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-900/20">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 mb-4 shadow-lg shadow-purple-500/30">
              <span className="text-2xl">💙</span>
            </div>
            <h2
              id="support-title"
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Apoie o Projeto
            </h2>
            <p className="mt-3 text-gray-400 max-w-md mx-auto text-sm sm:text-base">
              Sua contribuicao ajuda a manter este projeto vivo. Qualquer valor e bem-vindo!
            </p>
          </div>
          {/* QR Code */}
          <div className="text-center mb-8">
            <div className="inline-block bg-white/5 rounded-2xl p-4 border border-white/10 shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
              <img
                src={QR_CODE_URL}
                alt="Pix QR Code - escaneie com seu app de banco"
                width={220}
                height={220}
                className="rounded-xl"
              />
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Escaneie com o app do seu banco
            </p>
          </div>
          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
            <span className="text-xs text-gray-600 font-mono px-2">ou</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
          </div>
          {/* Pix Key */}
          <div className="mb-8">
            <p className="text-center text-sm text-gray-400 mb-3">
              Copie a chave Pix:
            </p>
            <div className="relative group">
              <div
                className="px-5 py-4 bg-gray-800/80 rounded-xl font-mono text-sm text-cyan-300 border border-gray-700/50 text-center select-all cursor-pointer hover:border-purple-500/50 hover:bg-gray-800 transition-all duration-200 active:scale-[0.99]"
                onClick={handleCopy}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleCopy(); } }}
                role="button"
                tabIndex={0}
                aria-label="Copiar chave Pix"
                title="Clique para copiar"
              >
                <span className="text-cyan-300/70">PIX: </span>
                {PIX_KEY}
              </div>
              <div className="flex justify-center mt-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`
                    inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm
                    transition-all duration-200 active:scale-95
                    ${copied
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                      : copyError
                        ? "bg-red-600/80 text-white shadow-lg shadow-red-600/20"
                        : "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-600/25"
                    }
                  `}
                >
                  {copied ? (
                    <><svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Chave copiada!</>
                  ) : copyError ? (
                    <><svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg> Selecione a chave acima</>
                  ) : (
                    <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> Copiar chave Pix</>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Bank badges with Nubank logo */}
          <div className="text-center mb-6 p-5 rounded-2xl bg-gradient-to-r from-purple-900/20 to-gray-900/30 border border-purple-500/10">
            <p className="text-xs text-gray-500 mb-4">
              Compativel com todos os bancos:
            </p>
            {/* Nubank Logo destacado */}
            <div className="flex items-center justify-center gap-3 mb-4 p-3 rounded-xl bg-purple-950/30 border border-purple-500/20">
              <NubankLogo />
              <span className="text-sm text-purple-300 font-semibold">Nubank</span>
              <span className="text-xs text-gray-500">|</span>
              <span className="text-xs text-gray-400">e demais bancos:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {BANKS.filter(b => b.name !== "Nubank").map((bank) => (
                <span
                  key={bank.name}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-800/50 rounded-full text-xs text-gray-400 border border-gray-700/30"
                  title={bank.name}
                >
                  <span className="text-sm">{bank.emoji}</span>
                  <span className="hidden sm:inline">{bank.name}</span>
                </span>
              ))}
            </div>
          </div>
          {/* Footer */}
          <p className="text-center text-xs text-gray-600 font-mono">
            Omni Catalyst Project &copy; 2026 &mdash; Feito por israel marques
          </p>
        </div>
      </div>
    </section>
  );
}
