import { useState, useCallback, useRef } from "react";

// ===== Configuration =====
const PIX_KEY = "037f07bd-a326-42b6-a5a3-f29b36e703db";

// ===== EMV Payload (for QR code — required by ALL Brazilian bank apps) =====
function crc16(str: string): string {
  const table = new Uint16Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) {
      c = (c & 1) ? (c >> 1) ^ 0x8408 : c >> 1;
    }
    table[i] = c;
  }
  let crc = 0xffff;
  for (let i = 0; i < str.length; i++) {
    crc = (crc >> 8) ^ table[(crc ^ str.charCodeAt(i)) & 0xff];
  }
  return (crc ^ 0xffff).toString(16).toUpperCase().padStart(4, "0");
}

const tlv = (tag: string, val: string): string =>
  tag + val.length.toString().padStart(2, "0") + val;

const PIX_EMV = (() => {
  const merchant = tlv("26", tlv("00", "br.gov.bcb.pix") + tlv("01", PIX_KEY));
  const body =
    tlv("00", "01") +
    merchant +
    tlv("52", "0000") +
    tlv("53", "986") +
    tlv("58", "BR") +
    tlv("59", "OMNICATALYST") +
    tlv("60", "SAOPAULO") +
    tlv("62", tlv("05", "TEST")) +
    "6304";
  return body + crc16(body);
})();

const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(PIX_EMV)}`;

// ===== Clipboard =====
async function copy(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch { /**/ }
  try {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.cssText = "position:fixed;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0";
    document.body.appendChild(el);
    el.focus();
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    return ok;
  } catch {
    return false;
  }
}

// ===== Main Component =====

export default function SupportProject() {
  const [st, setSt] = useState<"idle" | "copied" | "error">("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const doCopy = useCallback(async () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const ok = await copy(PIX_KEY);
    setSt(ok ? "copied" : "error");
    timerRef.current = setTimeout(() => {
      setSt("idle");
    }, ok ? 2000 : 4000);
  }, []);

  return (
    <section id="support-project" className="relative py-28 px-4 overflow-hidden" aria-labelledby="sp-title">
      {/* Glow background */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-gray-950 to-cyan-950/20" />
      <div aria-hidden className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div aria-hidden className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-lg mx-auto">
        <div className="rounded-2xl bg-gray-900/70 backdrop-blur-xl border border-white/[0.06] shadow-2xl shadow-black/40">
          {/* === HEADER === */}
          <div className="px-6 pt-10 pb-6 text-center border-b border-white/[0.06]">
            <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
              <span className="text-xl">+</span>
            </div>
            <h2 id="sp-title" className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Apoie o Projeto
            </h2>
            <p className="mt-2 text-sm text-gray-500">Qualquer valor ajuda a manter o projeto vivo.</p>
          </div>

          {/* === BODY === */}
          <div className="px-6 py-6 space-y-6">
            {/* QR Code */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.06]">
                <img src={QR_URL} alt="QR Code Pix" width={210} height={210} className="rounded-lg" loading="lazy" />
              </div>
              <p className="text-xs text-gray-600">Escaneie com qualquer app de banco</p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3" role="separator">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <span className="text-xs text-gray-700 font-mono tracking-widest uppercase">ou</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>

            {/* Pix key */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs text-gray-600">Copie a chave Pix:</p>

              <div
                onClick={() => doCopy()}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); doCopy(); } }}
                role="button"
                tabIndex={0}
                aria-label="Copiar chave Pix"
                className="w-full px-4 py-3.5 rounded-xl bg-gray-800/60 border border-white/[0.06] text-center font-mono text-sm text-cyan-300/90 select-all cursor-pointer hover:border-purple-500/40 hover:bg-gray-800/80 transition-colors"
              >
                <span className="text-gray-600 text-xs mr-2 select-none">chave:</span>
                {PIX_KEY}
              </div>

              <button
                type="button"
                onClick={() => doCopy()}
                disabled={st === "copied"}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all active:scale-[0.97] disabled:opacity-80 ${st === "copied" ? "bg-emerald-600 text-white" : st === "error" ? "bg-red-600/70 text-white" : "bg-white/[0.08] text-gray-300 hover:bg-white/[0.12] border border-white/[0.06]"}`}
              >
                {st === "copied" ? (
                  <><svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Copiado!</>
                ) : st === "error" ? (
                  <><svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg> Selecionar manualmente</>
                ) : (
                  <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> Copiar chave Pix</>
                )}
              </button>

              {st === "error" && (
                <p className="text-xs text-gray-600 text-center">
                  Copia automática indisponível. Selecione a chave acima e use Ctrl+C / Cmd+C.
                </p>
              )}
            </div>
          </div>

          {/* === FOOTER === */}
          <div className="px-6 py-3 text-center border-t border-white/[0.06]">
            <p className="text-[11px] text-gray-700 font-mono">Omni Catalyst Project &copy; 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
