"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

export default function SovereignCommandCenterSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const capabilities = [
    {
      header: "Proprietary Execution Engine",
      description: "Best routing and latency optimization across venues.",
    },
    {
      header: "Systemic Risk Sovereignty",
      description: "TEE-isolated circuit breakers and hard limits.",
    },
    {
      header: "Real-Time Reconciliation",
      description: "Autonomous ledgering and automated tax-lot management.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.78;
      const end = -rect.height * 0.22;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(raw, 1));
      setScrollProgress(clamped);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const satellites = [
    { angle: 0, radiusX: 260, radiusY: 118, delay: "0s", glyph: "hex" },
    { angle: 45, radiusX: 240, radiusY: 132, delay: "-0.8s", glyph: "tri" },
    { angle: 90, radiusX: 220, radiusY: 142, delay: "-1.6s", glyph: "diamond" },
    { angle: 135, radiusX: 245, radiusY: 124, delay: "-2.4s", glyph: "ring" },
    { angle: 180, radiusX: 258, radiusY: 116, delay: "-3.2s", glyph: "hex" },
    { angle: 225, radiusX: 238, radiusY: 136, delay: "-4s", glyph: "tri" },
    { angle: 270, radiusX: 226, radiusY: 146, delay: "-4.8s", glyph: "diamond" },
    { angle: 315, radiusX: 248, radiusY: 126, delay: "-5.6s", glyph: "ring" },
  ];

  const renderSatelliteGlyph = (type: string) => {
    if (type === "tri") {
      return (
        <>
          <path d="M28 8 L46 42 L10 42 Z" />
          <path d="M28 16 L38 35 L18 35 Z" strokeOpacity="0.55" />
        </>
      );
    }
    if (type === "diamond") {
      return (
        <>
          <path d="M28 8 L46 26 L28 44 L10 26 Z" />
          <path d="M28 14 L40 26 L28 38 L16 26 Z" strokeOpacity="0.5" />
        </>
      );
    }
    if (type === "ring") {
      return (
        <>
          <circle cx="28" cy="26" r="17" />
          <circle cx="28" cy="26" r="9" strokeOpacity="0.55" />
          <path d="M11 26 H45" strokeOpacity="0.5" />
        </>
      );
    }
    return (
      <>
        <path d="M28 7 L43 16 L43 34 L28 43 L13 34 L13 16 Z" />
        <path d="M28 14 L37 19 L37 31 L28 36 L19 31 L19 19 Z" strokeOpacity="0.55" />
      </>
    );
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-8 md:px-14 lg:px-20 py-28 md:py-40 lg:py-48 border-t border-white/10 bg-[#000000]">
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(34,34,34,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(34,34,34,0.5)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,transparent_calc(12.5%-0.5px),rgba(40,40,40,0.55)_calc(12.5%-0.5px),rgba(40,40,40,0.55)_calc(12.5%+0.5px),transparent_calc(12.5%+0.5px),transparent_calc(25%-0.5px),rgba(40,40,40,0.55)_calc(25%-0.5px),rgba(40,40,40,0.55)_calc(25%+0.5px),transparent_calc(25%+0.5px),transparent_calc(37.5%-0.5px),rgba(40,40,40,0.55)_calc(37.5%-0.5px),rgba(40,40,40,0.55)_calc(37.5%+0.5px),transparent_calc(37.5%+0.5px),transparent_calc(50%-0.5px),rgba(40,40,40,0.55)_calc(50%-0.5px),rgba(40,40,40,0.55)_calc(50%+0.5px),transparent_calc(50%+0.5px),transparent_calc(62.5%-0.5px),rgba(40,40,40,0.55)_calc(62.5%-0.5px),rgba(40,40,40,0.55)_calc(62.5%+0.5px),transparent_calc(62.5%+0.5px),transparent_calc(75%-0.5px),rgba(40,40,40,0.55)_calc(75%-0.5px),rgba(40,40,40,0.55)_calc(75%+0.5px),transparent_calc(75%+0.5px),transparent_calc(87.5%-0.5px),rgba(40,40,40,0.55)_calc(87.5%-0.5px),rgba(40,40,40,0.55)_calc(87.5%+0.5px),transparent_calc(87.5%+0.5px))]" />

      <div className="relative max-w-7xl mx-auto">
        <h2 className="font-playfair text-center lg:text-left text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-16 md:mb-20 lg:mb-24">
          The Sovereign Command Center
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-8 gap-y-16 lg:gap-x-12 items-start">
          <div className="relative w-full lg:col-span-5 p-10 md:p-14 border border-white/10 bg-black/35 backdrop-blur-[8px] shadow-[0_0_30px_rgba(255,215,0,0.08)] animate-[sovereignPulse_4.8s_ease-in-out_infinite] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.09),transparent_46%),radial-gradient(circle_at_50%_50%,rgba(0,71,171,0.12),transparent_72%)]" />

            <svg
              viewBox="0 0 900 560"
              className="relative z-10 w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Abstract Elyra core agent glyph with satellites"
            >
              <defs>
                <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="traceGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Circuit traces to satellite anchors */}
              <g stroke="#0047AB" strokeWidth="1" strokeOpacity="0.35" filter="url(#traceGlow)">
                <path className="trace-flicker" d="M450 245 C520 205, 565 175, 650 175" />
                <path className="trace-flicker" d="M450 245 C525 230, 605 240, 700 270" />
                <path className="trace-flicker" d="M450 245 C470 290, 520 335, 600 390" />
                <path className="trace-flicker" d="M450 245 C410 300, 360 345, 300 405" />
                <path className="trace-flicker" d="M450 245 C370 265, 295 280, 200 292" />
                <path className="trace-flicker" d="M450 245 C360 220, 290 190, 215 160" />
                <path className="trace-flicker" d="M450 245 C430 170, 430 120, 438 82" />
                <path className="trace-flicker" d="M450 245 C495 170, 555 120, 615 92" />
              </g>

              {/* Core glyph */}
              <g stroke="#FFD700" strokeOpacity="0.9" strokeWidth="1.4" filter="url(#coreGlow)">
                <path d="M450 85 L585 165 L585 325 L450 405 L315 325 L315 165 Z" />
                <path d="M450 140 L535 190 L535 300 L450 350 L365 300 L365 190 Z" />
                <path d="M450 85 L450 350" />
                <path d="M315 165 L535 300" />
                <path d="M585 165 L365 300" />
                <path d="M315 325 L535 190" />
                <path d="M585 325 L365 190" />
                <circle cx="450" cy="245" r="36" />
                <circle cx="450" cy="245" r="82" strokeOpacity="0.42" />
                <circle cx="450" cy="245" r="136" strokeOpacity="0.24" />
              </g>
            </svg>

            {/* Orbiting satellites */}
            {satellites.map((satellite, index) => (
              <div
                key={`${satellite.glyph}-${index}`}
                className="absolute left-1/2 top-1/2 orbit-node"
                style={
                  {
                    "--orbit-angle": `${satellite.angle}deg`,
                    "--orbit-radius-x": `${satellite.radiusX}px`,
                    "--orbit-radius-y": `${satellite.radiusY}px`,
                    "--orbit-delay": satellite.delay,
                  } as CSSProperties
                }
              >
                <div className="satellite-shell">
                  <svg viewBox="0 0 56 52" className="w-11 h-11 md:w-12 md:h-12" fill="none" aria-hidden="true">
                    <g stroke="#FFD700" strokeWidth="1.2" strokeOpacity="0.9">
                      {renderSatelliteGlyph(satellite.glyph)}
                    </g>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card lg:col-span-3 lg:mt-16 p-8 md:p-10">
            <div className="space-y-12">
              {capabilities.map((item, index) => {
                const threshold = 0.2 + index * 0.28;
                const isVisible = scrollProgress >= threshold;
                return (
                  <div
                    key={item.header}
                    className={`transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                  >
                    <h3 className="font-playfair text-2xl md:text-3xl text-white tracking-tight">{item.header}</h3>
                    <p className="mt-2 text-white/65 text-base md:text-lg">{item.description}</p>
                    <p className="mt-3 font-jetbrains text-sm md:text-[15px] text-[#0047AB]/80">
                      Explore Specifications →
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
