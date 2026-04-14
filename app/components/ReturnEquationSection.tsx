"use client";

import { useState } from "react";

type VariableKey = "winRate" | "profit" | "lossRate" | "loss" | "frequency";

const CAPTIONS: Record<VariableKey, string> = {
  winRate: "Probability of profitable outcomes across executed opportunities.",
  profit: "Average upside captured per successful position.",
  lossRate: "Probability of adverse outcomes in active strategies.",
  loss: "Expected downside absorbed per failed position.",
  frequency: "Agents operate 24/7/365 with zero fatigue.",
};

export default function ReturnEquationSection() {
  const [activeVariable, setActiveVariable] = useState<VariableKey | null>(null);

  const variableClass = (key: VariableKey) =>
    `transition-all duration-200 cursor-default ${
      activeVariable === key ? "text-[#ffe38a]" : "text-white"
    }`;

  return (
    <section className="relative overflow-hidden px-6 md:px-8 py-20 md:py-28 border-t border-white/10 bg-[#050505]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_20%_20%,#ffffff_0.7px,transparent_0.8px)] [background-size:4px_4px]" />

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="glass-card inline-flex items-center mb-8 px-4 py-2 rounded-full border-[#FFD700]/30 bg-[#FFD700]/5">
          <span className="font-jetbrains text-xs uppercase tracking-[0.16em] text-[#f6d877]">
            The Return Equation
          </span>
        </div>

        <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white mb-12 tracking-tight">
          Alpha, expressed as math
        </h2>

        <div
          className="hidden md:block font-playfair text-[2.6rem] leading-[1.4] lg:text-[3.4rem] text-white max-w-6xl mx-auto"
          style={{ textShadow: "0 0 16px rgba(255, 215, 0, 0.24)" }}
        >
          <span>Total Return</span>
          <span className="mx-3">=</span>
          <span className="mx-2">Σ</span>
          <span>(</span>
          <span
            className={variableClass("winRate")}
            onMouseEnter={() => setActiveVariable("winRate")}
            onMouseLeave={() => setActiveVariable(null)}
          >
            Win Rate
          </span>
          <span className="mx-2">×</span>
          <span
            className={variableClass("profit")}
            onMouseEnter={() => setActiveVariable("profit")}
            onMouseLeave={() => setActiveVariable(null)}
          >
            Profit
          </span>
          <span className="mx-3">-</span>
          <span
            className={variableClass("lossRate")}
            onMouseEnter={() => setActiveVariable("lossRate")}
            onMouseLeave={() => setActiveVariable(null)}
          >
            Loss Rate
          </span>
          <span className="mx-2">×</span>
          <span
            className={variableClass("loss")}
            onMouseEnter={() => setActiveVariable("loss")}
            onMouseLeave={() => setActiveVariable(null)}
          >
            Loss
          </span>
          <span>)</span>
          <span className="mx-2">×</span>
          <span
            className={variableClass("frequency")}
            onMouseEnter={() => setActiveVariable("frequency")}
            onMouseLeave={() => setActiveVariable(null)}
          >
            Frequency
          </span>
        </div>

        <div
          className="md:hidden font-playfair text-[1.65rem] leading-[1.35] text-white max-w-md mx-auto"
          style={{ textShadow: "0 0 16px rgba(255, 215, 0, 0.24)" }}
        >
          <div>
            <span>Total Return</span>
            <span className="mx-2">=</span>
            <span>Σ</span>
          </div>
          <div className="mt-1">
            <span>(</span>
            <span
              className={variableClass("winRate")}
              onMouseEnter={() => setActiveVariable("winRate")}
              onMouseLeave={() => setActiveVariable(null)}
            >
              Win Rate
            </span>
            <span className="mx-1.5">×</span>
            <span
              className={variableClass("profit")}
              onMouseEnter={() => setActiveVariable("profit")}
              onMouseLeave={() => setActiveVariable(null)}
            >
              Profit
            </span>
          </div>
          <div className="mt-1">
            <span>-</span>
            <span
              className={variableClass("lossRate")}
              onMouseEnter={() => setActiveVariable("lossRate")}
              onMouseLeave={() => setActiveVariable(null)}
            >
              {" "}
              Loss Rate
            </span>
            <span className="mx-1.5">×</span>
            <span
              className={variableClass("loss")}
              onMouseEnter={() => setActiveVariable("loss")}
              onMouseLeave={() => setActiveVariable(null)}
            >
              Loss
            </span>
            <span>)</span>
          </div>
          <div className="mt-1">
            <span>×</span>
            <span
              className={variableClass("frequency")}
              onMouseEnter={() => setActiveVariable("frequency")}
              onMouseLeave={() => setActiveVariable(null)}
            >
              {" "}
              Frequency
            </span>
          </div>
        </div>

        <div className="mt-8 min-h-[36px]">
          {activeVariable ? (
            <p className="font-jetbrains text-sm md:text-base text-[#f6d877]">
              {CAPTIONS[activeVariable]}
            </p>
          ) : (
            <p className="font-jetbrains text-sm md:text-base text-white/45">
              Hover a variable to inspect its operational meaning.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
