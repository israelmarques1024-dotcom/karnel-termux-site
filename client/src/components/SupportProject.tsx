import { useState, useCallback } from "react";

// ===== Pix Key =====
const PIX_KEY = "037f07bd-a326-42b6-a5a3-f29b36e703db";

// ===== EMV Payload (for QR Code - required by bank apps) =====
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

const tlv = (tag: string, value: string): string =>
  tag + value.length.toString().padStart(2, "0") + value;

const PIX_PAYLOAD = (() => {
  const merchantAccount =
    tlv("26", tlv("00", "br.gov.bcb.pix") + tlv("01", PIX_KEY));
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

const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(PIX_PAYLOAD)}`;

// ===== Clipboard helper =====
async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // fallback to legacy execCommand
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
    return ok;
  } catch {
    return false;
  }
}

// ===== More accurate Nubank logo SVG =====
function NubankLogoSvg() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="inline-block w-9 h-9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nubank"
    >
      <circle cx="18" cy="18" r="18" fill="#8A05BE" />
      <path
        d="M10 26V12l4 7V12h3v14h-3l-4-7v7h-2zm8 0V12l4 7V12h3v14h-3l-4-7v7h-2z"
        fill="white"
      />
    </svg>
  );
}

const BANKS = [
  { name: "Itaú", icon: "🏦" },
  { name: "Bradesco", icon: "🏛️" },
  { name: "Santander", icon: "🏗️" },
  { name: "Banco do Brasil", icon: "🌐" },
  { name: "Caixa", icon: "🏧" },
  { name: "Inter", icon: "🔷" },
  { name: "C6 Bank", icon: "⚫" },
  { name: "PicPay", icon: "🟢" },
  { name: "Mercado Pago", icon: "🟡" },
  { name: "Original", icon: "🟣" },
  { name: "Neon", icon: "💚" },
  { name: "PagBank", icon: "🟤" },
];

export default function SupportProject() {
  const [copied, setCopied] = useState(false);
  const [copyErr, setCopyErr] = useState(false);

  const handleCopy = useCallback(async () => {
    setCopyErr(false);
    const ok = await copyToClipboard(PIX_KEY);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } else {
      setCopyErr(true);
      setTimeout(() => setCopyErr(false), 4000);
    }
  }, []);

  return (
    <section
      id="support-project"
      className="relative py-24 px-4 overflow-hidden"
      aria-labelledby="support-title"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-gray-950 to-cyan-950/20"
      />
      <div
        aria-hidden="true"
        className="absolute top-16 left-8 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-16 right-8 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px]"
      />

      <div className="relative max-w-lg mx-auto">
        <div className="rounded-2xl bg-gray-900/70 backdrop-blur-xl border border-white/[0.06] shadow-2xl shadow-black/40 overflow-hidden">
          {/* Header */}
          <div className="px-6 pt-8 pb-6 text-center border-b border-white/[0.06]">
            <div className="mx-auto mb-3 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-600/30">
              <span className="text-xl" role="img" aria-label="coração">
                ❤️
              </span>
            </div>
            <h2
              id="support-title"
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent"
            >
              Apoie o Projeto
            </h2>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Sua contribuição ajuda a manter este projeto
              <br />
              vivo e crescendo. Qualquer valor é bem-vindo!
            </p>
          </div>

          {/* Body */}
          <div className="px-6 py-6 space-y-6">
            {/* QR Code */}
            <div className="flex flex-col items-center">
              <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.06]">
                <img
                  src={QR_CODE_URL}
                  alt="QR Code Pix"
                  width={200}
                  height={200}
                  className="rounded-lg"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-xs text-gray-600">
                Escaneie com qualquer app de banco
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3" role="separator" aria-orientation="horizontal">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <span className="text-xs text-gray-700 font-mono tracking-widest uppercase">
                ou
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>

            {/* Pix Key */}
            <div>
              <p className="text-center text-xs text-gray-600 mb-2">
                Copie a chave Pix abaixo
              </p>

              {/* Clickable key display */}
              <div
                onClick={handleCopy}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleCopy();
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Copiar chave Pix"
                title="Clique para copiar"
                className="relative px-4 py-3.5 rounded-xl bg-gray-800/60 border border-white/[0.06] text-center
                          font-mono text-sm text-cyan-300/90 select-all cursor-pointer
                          hover:border-purple-500/40 hover:bg-gray-800/80
                          transition-colors duration-200"
              >
                <span className="text-gray-600 text-xs mr-2 select-none">
                  chave:
                </span>
                {PIX_KEY}
              </div>

              {/* Copy button */}
              <div className="flex justify-center mt-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium
                    transition-all duration-200 active:scale-[0.97]
                    ${copied
                      ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30"
                      : copyErr
                        ? "bg-red-600/70 text-white"
                        : "bg-white/[0.08] text-gray-300 hover:bg-white/[0.12] border border-white/[0.06]"
                    }`}
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Copiado!
                    </>
                  ) : copyErr ? (
                    <>
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Selecione manualmente
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Copiar chave
                    </>
                  )}
                </button>
              </div>

              {/* Error help text */}
              {copyErr && (
                <p className="mt-2 text-center text-xs text-gray-600">
                  Seu navegador não permitiu copiar automaticamente.
                  <br />
                  Selecione a chave acima e copie manualmente (Ctrl+C / Cmd+C).
                </p>
              )}
            </div>
          </div>

          {/* Bank badges footer */}
          <div className="px-6 py-4 bg-white/[0.02] border-t border-white/[0.06]">
            <div className="flex items-center justify-center gap-2 mb-3">
              <NubankLogoSvg />
              <span className="text-sm text-purple-400/80 font-medium">Nubank</span>
              <span className="text-xs text-gray-700">·</span>
              <span className="text-xs text-gray-600">Compatível com todos os bancos</span>
            </div>
            <div className="flex flex-wrap justify-center gap-1.5">
              {BANKS.map((bank) => (
                <span
                  key={bank.name}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/[0.04] text-xs text-gray-500 border border-white/[0.04]"
                  title={bank.name}
                >
                  <span className="text-sm">{bank.icon}</span>
                  <span className="hidden sm:inline">{bank.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-3 text-center">
            <p className="text-[11px] text-gray-700 font-mono">
              Omni Catalyst Project &copy; 2026 &mdash; Feito por israel marques
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
