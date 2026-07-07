import { useState } from "react";

const PIX_KEY = "037f07bd-a326-42b6-a5a3-f29b36e703db";

// CRC16 for PIX
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

// TLV format
const tlv = (tag: string, value: string): string => tag + value.length.toString().padStart(2, "0") + value;

// Generate valid Pix Copia & Cola (EMV format)
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

const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(PIX_PAYLOAD)}`;

// Link direto HTTPS do Nubank — funciona em qualquer dispositivo (abre no browser/app)
const PIX_LINK = `https://nubank.com.br/pagar/${PIX_KEY}`;

async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fall through
    }
  }
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    return true;
  } catch {
    return false;
  }
}

export default function SupportProject() {
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const copyPixCode = async () => {
    const ok = await copyToClipboard(PIX_PAYLOAD);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const copyPixLink = async () => {
    const ok = await copyToClipboard(PIX_LINK);
    if (ok) {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2500);
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

          <p className="text-center mb-8 max-w-2xl mx-auto text-gray-300">
            Every contribution helps this project grow and enables new features to be developed.
            Choose the method that works best for you:
          </p>

          {/* QR Code */}
          <div className="text-center mb-6">
            <div className="inline-block bg-white/5 rounded-2xl p-4 border border-white/10 mb-2">
              <img
                src={QR_CODE_URL}
                alt="Pix QR Code \u2014 escaneie com seu app de banco"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <p className="text-xs text-gray-500">Escaneie o QR Code com seu app de banco</p>
          </div>

          {/* Pix Copia & Cola */}
          <div className="text-center mb-6">
            <p className="mb-2 font-mono text-sm text-gray-400">Ou copie o c\u00f3digo Pix:</p>
            <div
              onClick={copyPixCode}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") copyPixCode(); }}
              role="button"
              tabIndex={0}
              aria-label="Copiar Pix Copia & Cola"
              className="px-4 py-3 bg-gray-900/50 rounded-xl font-mono text-cyan-300 border border-gray-700/50 break-all inline-block mb-3 cursor-pointer hover:bg-gray-800/50 hover:border-cyan-500/50 active:scale-[0.98] transition-all select-all text-xs sm:text-sm"
            >
              {PIX_PAYLOAD}
            </div>
            <br />
            <button
              type="button"
              onClick={copyPixCode}
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-500 active:bg-cyan-700 transition-all active:scale-95"
            >
              {copied ? (
                <><span>\u2705</span> Copiado!</>
              ) : (
                <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> Copiar</>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gray-700/50" />
            <span className="text-xs text-gray-500 font-mono">ou</span>
            <div className="flex-1 h-px bg-gray-700/50" />
          </div>

          {/* Payment Link \u2014 Nubank */}
          <div className="text-center p-6 rounded-xl bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30">
            <p className="text-sm font-semibold text-purple-300 mb-4">
              \ud83d\udcb3 Pagar com Nubank
            </p>

            {/* Link principal: abre nubank.com.br/pagar/... em nova aba */}
            <a
              href={PIX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 active:bg-purple-700 transition-all active:scale-95 shadow-lg shadow-purple-600/25"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect width="24" height="24" rx="6" fill="#8A2BE2" />
                <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Ir para Pagamento
              <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <p className="text-xs text-gray-400 mt-3">
              Abre a p\u00e1gina de pagamento do Nubank no seu navegador ou app
            </p>

            {/* Copiar link do Pix */}
            <div className="mt-5 pt-4 border-t border-purple-500/20">
              <p className="text-xs text-gray-500 mb-2">
                Ou copie o link de pagamento:
              </p>
              <button
                type="button"
                onClick={copyPixLink}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/40 text-purple-300 rounded-lg text-sm hover:bg-purple-900/60 active:scale-95 transition-all border border-purple-500/20"
              >
                {linkCopied ? (
                  <><span>\u2705</span> Link copiado!</>
                ) : (
                  <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> Copiar link</>
                )}
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-gray-500 font-mono">
            Omni Catalyst Project \u00a9 2026 \u2014 Built by israel marques
          </p>
        </div>
      </div>
    </section>
  );
}
