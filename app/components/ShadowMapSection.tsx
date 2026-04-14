"use client";

import { useState } from "react";

export default function ShadowMapSection() {
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });
  const spotlightRadius = 210;

  return (
    <section className="px-6 md:px-8 py-16 md:py-24 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white mb-10 md:mb-14 tracking-tight">
          Shadow Map
        </h2>

        <div
          className="glass-card relative grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden min-h-[520px]"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setSpotlight({
              x: event.clientX - rect.left,
              y: event.clientY - rect.top,
              active: true,
            });
          }}
          onMouseEnter={() =>
            setSpotlight((prev) => ({
              ...prev,
              active: true,
            }))
          }
          onMouseLeave={() =>
            setSpotlight((prev) => ({
              ...prev,
              active: false,
            }))
          }
        >
          {/* Base Layer: Legacy Blackbox */}
          <div className="grid grid-cols-1 md:grid-cols-2 absolute inset-0">
            <div className="relative p-8 md:p-10 bg-[#0a0a0a] text-white/40 overflow-hidden">
              <h3 className="text-xl md:text-2xl font-semibold mb-5">The Legacy Blackbox</h3>
              <p className="font-inter text-sm md:text-base leading-relaxed blur-[1px]">
                Shadow banking systems route trillions through opaque entities, layered securitizations,
                and non-linear debt chains that conceal default contagion until systemic stress appears.
              </p>
              <div className="mt-8 space-y-3 opacity-60 blur-[1.5px]">
                <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                <div className="h-2 w-5/6 bg-white/20 rounded-full" />
                <div className="h-2 w-2/3 bg-white/20 rounded-full" />
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-24 h-24 border border-white/20 rounded-full blur-[1px]" />
                <div className="absolute bottom-20 left-24 w-40 h-px bg-white/30 rotate-12" />
                <div className="absolute top-28 right-12 w-28 h-20 border border-white/15 rounded-xl" />
                <div className="absolute bottom-14 right-20 w-16 h-16 border border-white/20 rounded-full" />
              </div>
            </div>
            <div className="bg-[#0b0b0b]" />
          </div>

          {/* Reveal Layer: Elyra Way */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 absolute inset-0 transition-[clip-path] duration-75"
            style={{
              clipPath: spotlight.active
                ? `circle(${spotlightRadius}px at ${spotlight.x}px ${spotlight.y}px)`
                : "circle(120px at 50% 50%)",
            }}
          >
            <div className="bg-[#0a0a0a]" />
            <div className="relative p-8 md:p-10 bg-black text-[#FFD700] overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-semibold mb-5 font-playfair">The Elyra Way</h3>
              <p className="font-mono text-sm md:text-base leading-relaxed text-[#FFD700]">
                Autonomous agents parse filings, map hidden liabilities, and react in real-time.
                Intelligence flows from event streams to execution rails without human lag.
              </p>
              <div className="mt-8 space-y-3 font-mono text-xs md:text-sm">
                <div className="border border-[#FFD700]/40 rounded-lg p-3">INPUT :: SEC EDGAR + DeFi liquidations</div>
                <div className="border border-[#FFD700]/40 rounded-lg p-3">ENGINE :: Shadow graph reconstruction</div>
                <div className="border border-[#FFD700]/40 rounded-lg p-3">OUTPUT :: Net value realization signals</div>
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-12 left-10 w-24 h-24 border border-[#FFD700]/35 rounded-full" />
                <div className="absolute top-24 left-24 w-40 h-px bg-[#FFD700]/45 -rotate-6" />
                <div className="absolute bottom-20 right-12 w-28 h-20 border border-[#FFD700]/40 rounded-xl" />
                <div className="absolute bottom-12 left-16 w-16 h-16 border border-[#FFD700]/40 rounded-full" />
              </div>
            </div>
          </div>

          {spotlight.active && (
            <div
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                background: `radial-gradient(circle ${spotlightRadius + 16}px at ${spotlight.x}px ${spotlight.y}px, rgba(255, 215, 0, 0.22) 0%, rgba(255, 215, 0, 0.12) 45%, rgba(255, 215, 0, 0.0) 72%)`,
              }}
            />
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs md:text-sm text-white/60 font-inter tracking-wide">
            Scrub to Reveal
          </div>
        </div>
      </div>
    </section>
  );
}
