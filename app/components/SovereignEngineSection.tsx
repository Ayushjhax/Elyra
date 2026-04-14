"use client";

export default function SovereignEngineSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#000000] px-8 md:px-14 lg:px-20 py-28 md:py-36 lg:py-40">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight max-w-5xl">
        One-Person Civilization.
        </h2>
        <p className="mt-4 text-white/72 font-playfair text-base md:text-lg lg:text-xl max-w-4xl leading-tight">
        Building the technical stack for individuals to earn, deploy, and compound capital at the speed of light.        </p>
        <div className="mt-10 h-px bg-[#333333] shadow-[0_0_10px_rgba(255,215,0,0.22)]" />

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="group relative bg-[#000000] border border-[#333333] hover:border-white p-10 min-h-[420px] flex flex-col">
            <span className="hidden group-hover:block absolute top-3 right-3 w-1 h-1 bg-[#FFD700]" />
            <p className="font-jetbrains text-[10px] tracking-[0.2em] text-[#FFD700]/90">// MODULE_01: ENCLAVE</p>
            <h3 className="mt-6 font-playfair text-4xl text-white leading-[1.05]">Secure Execution (TEEs)</h3>
            <p className="mt-5 text-white/58 text-base leading-relaxed">
              Strategies run in isolated, encrypted containers. Non-custodial privacy by default.
            </p>
            <div className="mt-auto pl-3 border-l-2 border-[#FFD700]">
              <p className="font-jetbrains text-xs tracking-[0.08em] text-white/92">STATUS: ISOLATED</p>
            </div>
          </article>

          <article className="group relative bg-[#000000] border border-[#333333] hover:border-white p-10 min-h-[420px] flex flex-col">
            <span className="hidden group-hover:block absolute top-3 right-3 w-1 h-1 bg-[#FFD700]" />
            <p className="font-jetbrains text-[10px] tracking-[0.2em] text-[#0080FF]/95">// MODULE_02: ROUTING</p>
            <h3 className="mt-6 font-playfair text-4xl text-white leading-[1.05]">Venue-Native Execution</h3>
            <p className="mt-5 text-white/58 text-base leading-relaxed">
              A single system trading spot and perps across top venues.
            </p>
            <div className="mt-auto font-jetbrains text-xs tracking-[0.08em] text-white/92 space-y-1">
              <p>&gt; HYPERLIQUID: 12ms</p>
              <p>&gt; KAMINO: 14ms</p>
              <p>&gt; JUPITER: 09ms</p>
            </div>
          </article>

          <article className="group relative bg-[#000000] border border-[#333333] hover:border-white p-10 min-h-[420px] flex flex-col">
            <span className="hidden group-hover:block absolute top-3 right-3 w-1 h-1 bg-[#FFD700]" />
            <p className="font-jetbrains text-[10px] tracking-[0.2em] text-[#00FF41]/95">// MODULE_03: SWARM</p>
            <h3 className="mt-6 font-playfair text-4xl text-white leading-[1.05]">Programmable Coordination</h3>
            <p className="mt-5 text-white/58 text-base leading-relaxed">
              Agents form swarms to negotiate better terms or execute veto protocols.
            </p>
            <div className="mt-auto font-jetbrains text-xs tracking-[0.08em] text-white/92">
              CONSENSUS: [ESTABLISHED] | PROTOCOL: VETO
            </div>
          </article>
        </div>

        <div className="mt-14 border-t border-[#333333] pt-4">
          <p className="font-jetbrains text-[10px] tracking-[0.08em] text-white/78">
            Execution quality // Risk controls // Post-Tade Ledger // Data + research // Verification // Reliability // Compliance // Network effects
          </p>
        </div>
      </div>
    </section>
  );
}
