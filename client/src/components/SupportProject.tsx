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

// ===== Bank Logo SVGs (faithful inline approximations) =====

function LogoNubank({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" aria-label="Nubank">
      <rect width="36" height="36" rx="18" fill="#8A05BE" />
      <path d="M11 27V12l3.5 7.5V12H18v15h-3.5L11 19.5V27H9zm8 0V12l3.5 7.5V12H26v15h-3.5L19 19.5V27h-2z" fill="white" />
    </svg>
  );
}

function LogoItau({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" aria-label="Itaú">
      <rect width="36" height="36" rx="6" fill="#EC7000" />
      <text x="18" y="24" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14">itaú</text>
    </svg>
  );
}

function LogoBradesco({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" aria-label="Bradesco">
      <rect width="36" height="36" rx="4" fill="#CC092F" />
      <text x="18" y="24" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="16">B</text>
    </svg>
  );
}

function LogoSantander({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" aria-label="Santander">
      <circle cx="18" cy="18" r="18" fill="#EC0000" />
      <path d="M18 8c-1.5 0-2.5.8-2.5 2v2h5v-2c0-1.2-1-2-2.5-2zM12 16v5c0 3.3 2.7 6 6 6s6-2.7 6-6v-5h-3v5c0 1.7-1.3 3-3 3s-3-1.3-3-3v-5h-3z" fill="white" />
    </svg>
  );
}

function LogoBB({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" aria-label="Banco do Brasil">
      <rect width="36" height="36" rx="6" fill="#002FA7" />
      <text x="10" y="24" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="16" fill="#FFCC00">BB</text>
    </svg>
  );
}

function LogoCaixa({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" aria-label="Caixa">
      <rect width="36" height="36" rx="4" fill="#003A75" />
      <text x="18" y="23" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="10">CAIXA</text>
    </svg>
  );
}

function LogoInter({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" aria-label="Inter">
      <circle cx="18" cy="18" r="18" fill="#FF6600" />
      <text x="18" y="24" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="18">@</text>
    </svg>
  );
}

function LogoC6({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" aria-label="C6 Bank">
      <rect width="36" height="36" rx="6" fill="#000000" />
      <text x="18" y="24" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14">C6</text>
    </svg>
  );
}

function LogoPicPay({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" aria-label="PicPay">
      <circle cx="18" cy="18" r="18" fill="#21C25E" />
      <text x="18" y="24" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="18">P</text>
    </svg>
  );
}

function LogoMercadoPago({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" aria-label="Mercado Pago">
      <rect width="36" height="36" rx="6" fill="#00B5E2" />
      <text x="18" y="24" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="12">MP</text>
    </svg>
  );
}

function LogoOriginal({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" aria-label="Original">
      <circle cx="18" cy="18" r="18" fill="#5C2D91" />
      <text x="18" y="24" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="16">O</text>
    </svg>
  );
}

function LogoNeon({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" aria-label="Neon">
      <rect width="36" height="36" rx="6" fill="#00A859" />
      <path d="M20 10l-6 9h4l-2 7 6-9h-4l2-7z" fill="white" />
    </svg>
  );
}

function LogoPagBank({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" aria-label="PagBank">
      <rect width="36" height="36" rx="6" fill="#003D7A" />
      <text x="18" y="23" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="8">PagBank</text>
    </svg>
  );
}

// ===== Bank definitions =====

interface BankInfo {
  id: string;
  name: string;
  logo: (props: { size?: number }) => React.ReactNode;
}

const BANKS: BankInfo[] = [
  { id: "nubank", name: "Nubank", logo: LogoNubank },
  { id: "itau", name: "Itaú", logo: LogoItau },
  { id: "bradesco", name: "Bradesco", logo: LogoBradesco },
  { id: "santander", name: "Santander", logo: LogoSantander },
  { id: "bb", name: "Banco do Brasil", logo: LogoBB },
  { id: "caixa", name: "Caixa", logo: LogoCaixa },
  { id: "inter", name: "Inter", logo: LogoInter },
  { id: "c6", name: "C6 Bank", logo: LogoC6 },
  { id: "picpay", name: "PicPay", logo: LogoPicPay },
  { id: "mercadopago", name: "Mercado Pago", logo: LogoMercadoPago },
  { id: "original", name: "Original", logo: LogoOriginal },
  { id: "neon", name: "Neon", logo: LogoNeon },
  { id: "pagbank", name: "PagBank", logo: LogoPagBank },
];

// ===== Main Component =====

export default function SupportProject() {
  const [st, setSt] = useState<"idle" | "copied" | "error">("idle");
  const [activeBank, setActiveBank] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const doCopy = useCallback(async (bankId?: string) => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const ok = await copy(PIX_KEY);
    setSt(ok ? "copied" : "error");
    setActiveBank(bankId ?? null);
    timerRef.current = setTimeout(() => {
      setSt("idle");
      setActiveBank(null);
    }, ok ? 2000 : 4000);
  }, []);

  const [nubank, ...otherBanks] = BANKS;

  return (
    <section id="support" className="relative py-28 px-4 overflow-hidden" aria-labelledby="sp-title">
      {/* Glow background */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-gray-950 to-cyan-950/20" />
      <div aria-hidden className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div aria-hidden className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-lg mx-auto">
        <div className="rounded-2xl bg-gray-900/70 backdrop-blur-xl border border-white/[0.06] shadow-2xl shadow-black/40">
          {/* === HEADER === */}
          <div className="px-6 pt-10 pb-6 text-center border-b border-white/[0.06]">
            <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
              <span className="text-xl">❤️</span>
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

          {/* === BANK CARDS === */}
          <div className="px-6 py-5 bg-white/[0.02] border-t border-white/[0.06]">
            <p className="text-center text-xs text-gray-600 mb-4">
              Clique no seu banco para copiar a chave Pix:
            </p>

            {/* Nubank — featured card */}
            <button
              type="button"
              onClick={() => doCopy(nubank.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200 active:scale-[0.98] ${activeBank === nubank.id && st === "copied" ? "border-purple-500/60 bg-purple-500/10" : "border-purple-500/30 bg-purple-500/[0.06] hover:bg-purple-500/[0.10] hover:border-purple-500/50"}`}
            >
              <LogoNubank size={44} />
              <div className="flex-1 text-left">
                <span className="text-sm font-medium text-purple-300">Nubank</span>
                <p className="text-xs text-gray-600">Recomendado — Pagamento via Pix</p>
              </div>
              {activeBank === nubank.id && st === "copied" ? (
                <span className="text-emerald-400 text-xs font-medium">✓ Copiado!</span>
              ) : (
                <svg className="w-4 h-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor"><path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4" role="separator">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <span className="text-xs text-gray-700 font-mono tracking-widest uppercase">outros bancos</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>

            {/* Bank grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {otherBanks.map((bank) => {
                const isActive = activeBank === bank.id && st === "copied";
                const Logo = bank.logo;
                return (
                  <button
                    key={bank.id}
                    type="button"
                    onClick={() => doCopy(bank.id)}
                    className={`flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl border transition-all duration-200 active:scale-[0.95] ${isActive ? "border-emerald-500/40 bg-emerald-500/10" : "border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.10]"}`}
                  >
                    <Logo size={28} />
                    <span className="text-[10px] text-gray-500 font-medium leading-tight text-center">
                      {isActive ? "Copiado!" : bank.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* === FOOTER === */}
          <div className="px-6 py-3 text-center">
            <p className="text-[11px] text-gray-700 font-mono">Omni Catalyst Project &copy; 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
