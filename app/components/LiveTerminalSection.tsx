"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type FeedTemplate = {
  agent: string;
  message: string;
};

type FeedLine = FeedTemplate & {
  id: number;
  timestamp: string;
};

const TEMPLATES: FeedTemplate[] = [
  { agent: "AGENT_01", message: "Scraping SEC EDGAR... PIK structure detected" },
  { agent: "AGENT_02", message: "Calculating Systemic Risk Score... 0.84 (CRITICAL)" },
  { agent: "ELYRA", message: "Deploying capital swarm to Solana rails..." },
  { agent: "AGENT_03", message: "Reconstructing hidden debt graph... 3 new nodes mapped" },
  { agent: "AGENT_04", message: "Verifying TEE attestations... integrity passed" },
  { agent: "AGENT_05", message: "Cross-venue execution route recalibrated... drift reduced" },
];

const formatTime = (date: Date) =>
  date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

export default function LiveTerminalSection() {
  const seedLines = useMemo<FeedLine[]>(
    () =>
      TEMPLATES.slice(0, 5).map((entry, index) => ({
        ...entry,
        id: index,
        timestamp: "--:--:--",
      })),
    []
  );

  const [lines, setLines] = useState<FeedLine[]>(seedLines);
  const [systemTime, setSystemTime] = useState("--:--:--");
  const [cursorVisible, setCursorVisible] = useState(true);
  const feedRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(seedLines.length);
  const templateIndexRef = useRef(0);

  useEffect(() => {
    const now = Date.now();
    setLines(
      TEMPLATES.slice(0, 5).map((entry, index) => ({
        ...entry,
        id: index,
        timestamp: formatTime(new Date(now - (5 - index) * 2000)),
      }))
    );
    setSystemTime(formatTime(new Date()));

    const feedTimer = window.setInterval(() => {
      const template = TEMPLATES[templateIndexRef.current % TEMPLATES.length];
      templateIndexRef.current += 1;

      setLines((prev) => {
        const next = [
          ...prev,
          {
            ...template,
            id: nextIdRef.current++,
            timestamp: formatTime(new Date()),
          },
        ];
        return next.slice(-120);
      });
      setSystemTime(formatTime(new Date()));
    }, 2000);

    const cursorTimer = window.setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      window.clearInterval(feedTimer);
      window.clearInterval(cursorTimer);
    };
  }, []);

  useEffect(() => {
    if (!feedRef.current) return;
    feedRef.current.scrollTop = feedRef.current.scrollHeight;
  }, [lines]);

  return (
    <section className="px-6 md:px-8 py-16 md:py-24 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <div className="glass-card inline-flex items-center mb-5 px-4 py-2 rounded-full border-[#0080FF]/40 bg-[#0080FF]/10">
            <span className="font-jetbrains text-xs uppercase tracking-[0.16em] text-[#9dccff]">
              Live Terminal
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Agent Command Center
          </h2>
        </div>

        <div className="glass-card relative h-[300px] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.55)] overflow-hidden">
          <div className="flex items-center justify-between px-4 md:px-5 py-3 border-b border-white/10 bg-black/30">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00FF41] shadow-[0_0_10px_rgba(0,255,65,0.9)]" />
              <span className="font-jetbrains text-xs tracking-[0.14em] text-white/75 uppercase">
                Elyra Runtime Feed
              </span>
            </div>
            <span className="font-jetbrains text-xs text-white/50">STREAMING</span>
          </div>

          <div
            ref={feedRef}
            className="scanlines h-[calc(300px-49px)] overflow-y-auto px-4 md:px-5 py-4 font-jetbrains text-sm leading-7 bg-[linear-gradient(180deg,rgba(0,0,0,0.42),rgba(0,0,0,0.62))]"
          >
            {lines.map((line) => (
              <p key={line.id} className="whitespace-pre-wrap break-words">
                <span className="text-white/45">[{line.timestamp}] </span>
                <span className="text-[#00FF41]">[{line.agent}]</span>
                <span className="text-white">: {line.message}</span>
              </p>
            ))}
            <p className="text-[#00FF41] mt-2">
              <span className="text-white/45">[{systemTime}] </span>
              <span>[SYSTEM]</span>
              <span className="text-white">: awaiting next signal</span>
              <span className={`ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"}`}>_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
