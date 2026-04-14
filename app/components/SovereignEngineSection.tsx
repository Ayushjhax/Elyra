"use client";

export default function SovereignEngineSection() {
  return (
    <section className="hf-framework relative overflow-hidden border-t border-white/10 bg-[#000000] px- md:px-14 lg:px-20 py-28 md:py-36 lg:py-40">
      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight max-w-5xl">
        One-Person Civilization.
        </h2>
        <p className="mt-4 text-white/72 font-playfair text-base md:text-lg lg:text-xl max-w-4xl leading-tight">
        Building the technical stack for individuals to earn, deploy, and compound capital at the speed of light.        </p>
        <div className="mt-10 h-px bg-[#FFD700]/60" />

        <div className="mt-28 md:mt-[200px] grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="hf-card-wrap hf-aura-orange">
            <article className="hf-card hf-card-orange">
              <div className="hf-card-title font-jetbrains">[01_ENCLAVE] SECURE EXECUTION // TEE_ISOLATED</div>
              <div className="hf-card-body">
                <div className="hf-key-core">
                  <svg viewBox="0 0 220 220" className="hf-key-svg" fill="none" aria-hidden="true">
                    <g stroke="#FFD700" strokeWidth="2">
                      <circle cx="88" cy="88" r="34" />
                      <circle cx="88" cy="88" r="14" />
                      <path d="M117 88 H180" />
                      <path d="M151 88 V108" />
                      <path d="M170 88 V101" />
                    </g>
                  </svg>
                  <div className="hf-scan-line" />
                </div>
              </div>
            </article>
          </div>

          <div className="hf-card-wrap hf-aura-blue">
            <article className="hf-card hf-card-blue">
              <div className="hf-card-title font-jetbrains">[02_ORCHESTRATION] VENUE-NATIVE // UNIFIED_HFT</div>
              <div className="hf-card-body">
                <div className="hf-hub">
                  <div className="hf-hub-center" />
                  <div className="hf-hub-beam hf-hub-beam-a" />
                  <div className="hf-hub-beam hf-hub-beam-b" />
                  <div className="hf-hub-beam hf-hub-beam-c" />
                  <div className="hf-hub-label hf-hub-label-a font-jetbrains">HYPERLIQUID</div>
                  <div className="hf-hub-label hf-hub-label-b font-jetbrains">KAMINO</div>
                  <div className="hf-hub-label hf-hub-label-c font-jetbrains">JUPITER</div>
                </div>
              </div>
            </article>
          </div>

          <div className="hf-card-wrap hf-aura-green">
            <article className="hf-card hf-card-green">
              <div className="hf-card-title font-jetbrains">[03_SWARM] SWARM COORDINATION // PROGRAMMABLE_NEGOTIATION</div>
              <div className="hf-card-body">
                <div className="hf-swarm">
                  <div className="hf-web hf-web-a" />
                  <div className="hf-web hf-web-b" />
                  <div className="hf-web hf-web-c" />
                  <div className="hf-web hf-web-d" />
                  <div className="hf-agent hf-agent-a" />
                  <div className="hf-agent hf-agent-b" />
                  <div className="hf-agent hf-agent-c" />
                  <div className="hf-agent hf-agent-d" />
                  <div className="hf-agent hf-agent-e" />
                  <div className="hf-swarm-status font-jetbrains">
                    <span className="text-[#00FF41]">[ACTIVE]</span> STATUS: SWARM_CONSENSUS
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-14 md:mt-16 border-t border-white/20 pt-4">
          <p className="font-jetbrains text-[10px] tracking-[0.08em] text-white/75">
            Execution quality // Risk controls // Post-Tade Ledger // Data + research // Verification // Reliability // Compliance // Network effects
          </p>
        </div>
      </div>
    </section>
  );
}
