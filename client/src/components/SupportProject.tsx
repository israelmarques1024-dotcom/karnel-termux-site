const PIX_KEY = "037f07bd-a326-42b6-a5a3-f29b36e703db";

export default function SupportProject() {
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
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=037f07bd-a326-42b6-a5a3-f29b36e703db"
                alt="Pix QR Code"
                className="mx-auto block"
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
              onClick={() => {
                const el = document.createElement("textarea");
                el.value = PIX_KEY;
                document.body.appendChild(el);
                el.select();
                document.execCommand("copy");
                document.body.removeChild(el);
              }}
              className="px-4 py-2 bg-cyan-600 text-white rounded-xl font-semibold"
            >
              📋 Copy
            </button>
          </div>

          <p className="mt-10 text-center text-xs text-gray-500 font-mono">
            Omni Catalyst Project &copy; 2026 — Built by israel marques
          </p>
        </div>
      </div>
    </section>
  );
}