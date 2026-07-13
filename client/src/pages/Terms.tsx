export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-mono mb-8 text-center">
        <span className="text-accent">Terms</span> of Use
      </h1>

      <div className="space-y-6 text-muted-foreground">
        <p>
          These terms govern your use of the Karnel Termux documentation website
          and the Karnel Termux software ("the Software"). By using the Software
          or accessing this site, you agree to these terms.
        </p>

        <h2 className="text-xl font-bold font-mono text-foreground mt-8">1. MIT License</h2>
        <p>
          The Software is released under the MIT License. You are free to use, copy,
          modify, merge, publish, distribute, sublicense, and/or sell copies of the
          Software, subject to the following conditions:
        </p>
        <p className="bg-card border border-border rounded-lg p-4 font-mono text-sm">
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
          IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY.
        </p>

        <h2 className="text-xl font-bold font-mono text-foreground mt-8">2. No Warranty</h2>
        <p>
          The Software is provided without any warranty. You use it at your own risk.
          The authors are not responsible for any data loss, device issues, or other
          damages that may arise from its use.
        </p>

        <h2 className="text-xl font-bold font-mono text-foreground mt-8">3. Termux Compatibility</h2>
        <p>
          The Software is designed for Termux on Android. Compatibility with other
          environments is not guaranteed. Always backup your data before running any
          automation or system-modifying commands.
        </p>

        <h2 className="text-xl font-bold font-mono text-foreground mt-8">4. Third-Party Services</h2>
        <p>
          The Software may interact with third-party services (e.g., Google Drive via
          rclone, GitHub, AI APIs). You are responsible for complying with their
          respective terms of service.
        </p>

        <h2 className="text-xl font-bold font-mono text-foreground mt-8">5. Changes</h2>
        <p>
          These terms may be updated at any time. Continued use after changes
          constitutes acceptance of the new terms.
        </p>

        <p className="pt-8 text-sm">
          Last updated: July 2026.
          Contact: <a href="mailto:israelmarques1024@gmail.com" className="text-accent hover:underline">israelmarques1024@gmail.com</a>
        </p>
      </div>
    </section>
  );
}
