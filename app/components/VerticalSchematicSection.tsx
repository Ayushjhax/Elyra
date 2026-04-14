"use client";

import { useState } from "react";

type StackNode = {
  title: string;
  snippet: string;
};

const STACK_NODES: StackNode[] = [
  {
    title: "Execution",
    snippet: `> exec-engine --route hyperliquid --pair ETH-PERP
latency: 31ms | fill: 99.2% | slippage: 0.03%`,
  },
  {
    title: "Risk Controls",
    snippet: `if (exposure.delta > limit.delta) {
  hedge("delta-neutral");
  throttle("aggressive");
}`,
  },
  {
    title: "Post-Trade Ledger",
    snippet: `ledger.append({
  txHash: "0x8f...92",
  pnl: "+12.48%",
  timestamp: "2026-04-14T20:13:02Z"
});`,
  },
  {
    title: "Data Research",
    snippet: `stream.subscribe(["edgar", "liquidations", "macro"]);
signal = alphaModel.infer(events, debtGraph);`,
  },
  {
    title: "Verification",
    snippet: `verify.proof({
  modelCommit: "sha256:5c...",
  strategyDigest: "sha256:ab..."
});`,
  },
  {
    title: "Reliability",
    snippet: `[healthcheck] quorum=3/3
[failover] region=iad -> region=fra
[status] stable`,
  },
  {
    title: "Compliance",
    snippet: `compliance.scan(order);
policy: passed (jurisdiction=US)
auditTrail: persisted`,
  },
  {
    title: "Network Effects",
    snippet: `swarm.signal.broadcast(alphaPacket);
participants: 1,204
capitalSync: +$2.3M`,
  },
];

export default function VerticalSchematicSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-8 py-16 md:py-24 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full border border-white/15 bg-white/5">
            <span className="font-jetbrains text-[11px] md:text-xs uppercase tracking-[0.18em] text-white/70">
              The Architecture
            </span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4">
            Agentic Stack
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
            Eight operational domains coordinated as a single autonomous capital system.
          </p>
        </div>

        <div className="glass-card relative mx-auto max-w-4xl rounded-3xl bg-[linear-gradient(180deg,rgba(0,128,255,0.2),rgba(6,8,12,0.9))] p-6 md:p-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(0,128,255,0.2),transparent_40%),radial-gradient(circle_at_90%_90%,rgba(255,215,0,0.12),transparent_45%)]" />

          <div className="relative">
            {STACK_NODES.map((node, index) => (
              <div key={node.title} className="relative pl-10 md:pl-16">
                {index < STACK_NODES.length - 1 && (
                  <div className="absolute left-[14px] md:left-[22px] top-12 h-[56px] md:h-[64px] w-px bg-gradient-to-b from-[#0080FF]/85 via-[#0080FF]/60 to-transparent shadow-[0_0_12px_rgba(0,128,255,0.85)]" />
                )}

                <button
                  type="button"
                  className="relative w-full text-left mb-4 md:mb-5 group"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered((current) => (current === index ? null : current))}
                  onFocus={() => setHovered(index)}
                  onBlur={() => setHovered((current) => (current === index ? null : current))}
                >
                  <span className="absolute left-0 top-5 h-3 w-3 rounded-full bg-[#0080FF] shadow-[0_0_14px_rgba(0,128,255,1)]" />
                  <div className="glass-card ml-5 md:ml-7 rounded-xl border-[#0080FF]/45 bg-[#081326]/75 px-4 py-4 transition-all duration-200 group-hover:border-[#0080FF]/80 group-hover:bg-[#0d1d34]/85">
                    <p className="font-jetbrains text-sm md:text-base uppercase tracking-[0.13em] text-[#d7e9ff]">
                      {node.title}
                    </p>
                  </div>

                  {hovered === index && (
                    <div className="glass-card absolute z-20 left-6 md:left-12 top-14 md:top-16 w-[88%] md:w-[72%] rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-4">
                      <p className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-[#b9d9ff]/85 mb-2">
                        Runtime Snippet
                      </p>
                      <pre className="font-jetbrains text-xs md:text-sm whitespace-pre-wrap leading-relaxed text-[#d9ecff]">
                        {node.snippet}
                      </pre>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
