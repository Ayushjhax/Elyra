"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ShadowMapSection from "./components/ShadowMapSection";
import SovereignEngineSection from "./components/SovereignEngineSection";
import ReturnEquationSection from "./components/ReturnEquationSection";
import LiveTerminalSection from "./components/LiveTerminalSection";

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Smooth animation curve (ease-in-out cubic)
  const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const scrollProgress = Math.min(scrollY / 300, 1); // Complete animation in 300px
  const easedProgress = easeInOutCubic(scrollProgress);

  // Logo and waitlist should converge to become adjacent in a blurred container.
  // Keep the X button fixed; only logo + waitlist participate in convergence.
  const calculateConvergenceDistance = () => {
    if (windowWidth === 0) return 0;

    const isMobile = windowWidth < 768;
    const logoLeft = isMobile ? 16 : 24; // left-4 / md:left-6
    const logoWidth = isMobile ? 80 : 112; // w-20 / md:w-28
    const waitlistWidth = isMobile ? 148 : 170;
    const waitlistRight = isMobile ? 16 : 24; // right-4 / md:right-6
    const targetGap = isMobile ? 28 : 40;

    const logoRightEdge = logoLeft + logoWidth;
    const waitlistLeftEdge = windowWidth - waitlistRight - waitlistWidth;
    const currentGap = waitlistLeftEdge - logoRightEdge;
    const distanceToMove = (currentGap - targetGap) / 2;

    return Math.max(0, distanceToMove);
  };
  const convergenceDistance = calculateConvergenceDistance();
  const logoTranslateX = easedProgress * convergenceDistance; // Move right toward center
  const buttonTranslateX = -easedProgress * convergenceDistance; // Move left toward center
  
  // Background container opacity increases as they converge
  const containerOpacity = easedProgress * 0.9;
  // Nav should move down slightly when scrolling to add gap above
  const navTranslateY = Math.min(scrollY * 0.2, 24); // Move down up to 24px for compact feel

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Bar - Always visible, logo and button converge into blurred container */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-14 md:h-16 px-4 md:px-8 pointer-events-none"
      >
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
          {/* Blurred Background Container - Appears as elements converge */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-full px-3 py-1.5 md:px-4 md:py-2 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: containerOpacity,
              backdropFilter: 'blur(12px)',
              backgroundColor: 'rgba(17, 24, 39, 0.6)', // gray-900 with transparency
              border: '1px solid rgba(75, 85, 99, 0.5)', // gray-600 border
              transform: `translate(-50%, ${navTranslateY}px)`,
              minWidth: windowWidth > 0 && windowWidth < 768 ? '210px' : '280px',
            }}
          >
            {/* Invisible spacer to maintain container size 
            when visible */}
            <div className="w-[190px] md:w-[260px] h-10 md:h-11" />
          </div>

          {/* Logo - Starts at left, converges to center, becomes adjacent to button */}
          <div
            className="absolute left-4 md:left-6 pointer-events-auto z-10"
            style={{
              transform: `translate(${logoTranslateX}px, ${navTranslateY}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-white/20 bg-black/35 shadow-[0_0_24px_rgba(255,255,255,0.12)] flex items-center justify-center backdrop-blur-sm">
              <Image
                src="/logo.png"
                alt="Elyra Logo"
                fill
                className="object-cover scale-[0.9]"
                priority
              />
            </div>
          </div>

          {/* Join Waitlist Button - Starts at right, converges to center, becomes adjacent to logo */}
          <div
            className="absolute right-4 md:right-6 pointer-events-auto z-10"
            style={{
              transform: `translate(${buttonTranslateX}px, ${navTranslateY}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <a
              href="https://forms.gle/k7uLeN46X1zUJWrCA"
              target="_blank"
              rel="noopener noreferrer"
              className="waitlist-hardware group px-4 py-2 md:px-5 md:py-2.5 rounded-full text-white font-medium text-sm transition-all duration-300 flex items-center gap-2 h-11 md:h-12 whitespace-nowrap"
            >
              <span>Join Waitlist</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-end px-6 md:px-8 pb-12 md:pb-16">
        <div className="w-full">
          <div className="max-w-3xl">
            <h1 className="magic-elyra font-playball text-6xl md:text-8xl lg:text-9xl mb-6 leading-[0.98] tracking-tight">
              ELYRA
            </h1>
            <p className="font-playfair text-2xl md:text-3xl lg:text-4xl font-medium italic mb-4 text-white/90 leading-tight tracking-wide">
            Built for the next era of trading
            </p>
            <p className="font-playfair text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed font-light italic tracking-normal mb-8">
              A Multi-Agentic sovereign hedge fund
            </p>
            
            {/* Join Waitlist Button - Below Hero Text */}
            <a
              href="https://forms.gle/k7uLeN46X1zUJWrCA"
              target="_blank"
              rel="noopener noreferrer"
              className="waitlist-hardware inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-medium text-base md:text-lg transition-all duration-300 group"
            >
              <span>Join Waitlist</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="relative z-10 bg-black/95 backdrop-blur-sm">
        <ShadowMapSection />
        <SovereignEngineSection />
        <ReturnEquationSection />
        <LiveTerminalSection />

        {/* FAQ Section */}
        <section className="px-6 md:px-8 py-16 md:py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              {/* Frequently Asked Questions Button/Capsule */}
              <div className="inline-flex items-center mb-12 px-5 py-2.5 bg-gray-900/60 backdrop-blur-sm border border-gray-800/80 rounded-full shadow-lg">
                <span className="text-white/90 text-sm md:text-base font-medium tracking-wide">Frequently Asked Questions</span>
              </div>
              
              {/* Main Heading */}
              <h2 className="font-space-grotesk text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white tracking-tight leading-none">
              Command your capital <span className="font-great-vibes italic text-7xl md:text-8xl lg:text-9xl font-normal ml-2">Swarm</span>
              </h2>
              
              {/* Subtitle/Description */}
              <p className="font-playfair text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              The autonomous stack for high-frequency financial sovereignty — learn how <span className="text-white/80 font-medium">Elyra</span> makes Trading smooth, smart, and seriously powerful.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
            <FAQItem
  question="What defines Elyra as an 'Agentic Sovereign Fund' vs. a traditional quant fund?"
  answer={`Traditional funds rely on human analysts to interpret data and "bots" to execute static code. Elyra replaces the human bottleneck with Autonomous Capital Swarms. Our agents don't just execute orders; they perform research, monitor systemic risk in shadow banking, and self-correct their strategies in real-time within Trusted Execution Environments (TEEs). It is a "One-Person Civilization" stack where the AI is the researcher, the trader, and the risk manager.`}
  defaultOpen={true}
/>

<FAQItem
  question='What is "The Great Extraction," and how does Elyra solve it?'
  answer={`The current financial system systematically moves wealth from wage earners to asset owners through an opaque, $1.7T+ shadow banking "blackbox." Elyra weaponizes transparency. By using our Shadow Map Agent to scrape SEC filings and reconstruct hidden debt graphs, we turn institutional opacity into a retail "Alpha" signal, allowing the public to front-run the insolvency of legacy financial engineering.`}
/>

<FAQItem
  question="Why is the Elyra stack built on Solana?"
  answer={`Speed and capital formation. To compete with HFT (High-Frequency Trading) firms, we need sub-second finality and minimal fees. Solana allows Elyra to initiate Dutch Auctions and Capital Swarms instantly, enabling a network of individuals to aggregate capital and move with the agility of a single institutional entity.`}
/>

<FAQItem
  question='How does the "Open Claw" Intelligence Stack work?'
  answer={`Open Claw is our vertically integrated research layer. While legacy funds pay $50,000/year for data that is already months old, Open Claw agents scrape real-time event streams from DeFi liquidations to SEC EDGAR filings to create a "True Default Rate" oracle. This intelligence is then fed directly into our trading agents across Hyperliquid, Drift, and Jupiter.`}
/>

<FAQItem
  question="How do you ensure the security of autonomous agents handling capital?"
  answer={`We utilize TEEs (Trusted Execution Environments). This means the agent’s logic and private keys are housed in encrypted, hardware-level containers. Even the developers cannot intervene or "rug" the strategy once it is live. This creates a trustless environment where the agent’s sovereignty is mathematically guaranteed.`}
/>

<FAQItem
  question="Is Elyra a trading bot or a software infrastructure?"
  answer={`It is a complete vertical stack. Most "bots" are just tools that require constant human supervision. Elyra provides the eight core operational domains from risk controls and post-trade ledgers to research pipelines needed to run a hedge fund autonomously. We aren't building a better tool; we are building an autonomous replacement for the firm itself.`}
/>

<FAQItem
  question="What is the 'Return Equation' used by the agents?"
  answer={`Our agents optimize for Net Value Realization. We define performance through a rigorous derivative formula:

Total Return = Σ (Win Rate × Profit − Loss Rate × Loss) × Frequency

By removing human emotional volatility and execution gaps, we maximize the "Frequency" and "Win Rate" components that typically degrade in biological traders during 24/7 market cycles.`}
/>

            </div>
          </div>
        </section>

        {/* Waitlist CTA Section */}
        <section className="px-6 md:px-8 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h2 className="font-space-grotesk text-6xl md:text-7xl lg:text-8xl font-bold mb-10 text-white tracking-tight leading-none">
              Ready for agentic <span className="font-great-vibes italic text-7xl md:text-8xl lg:text-9xl font-normal ml-2">precision?</span>
            </h2>
            
            {/* Descriptive Text */}
            <div className="space-y-4 mb-10">
              <p className="font-playfair text-white/70 text-lg md:text-xl font-light tracking-wide">
                We're opening early access to a small group of testers.
              </p>
              <p className="font-playfair text-white/80 text-lg md:text-xl font-medium tracking-wide">
                Experience how <span className="text-white font-semibold">Elyra</span>'s AI-powered intelligence transforms every hedge.
              </p>
            </div>

            {/* Latest Article Button */}
            <div className="mb-6">
              <a
                href="https://medium.com/@ayushkmrjha/how-personal-ai-trading-agents-will-shatter-human-limits-and-redefine-alpha-in-the-agentic-economy-da49d8a22929"
                target="_blank"
                rel="noopener noreferrer"
                className="waitlist-hardware inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-medium text-base md:text-lg transition-all duration-300 group"
              >
                <span>Read the latest Article</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>

            {/* Footer Text */}
            <p className="font-playfair text-white/50 text-sm md:text-base">
              Get early access and future perks.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function FAQItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="glass-card rounded-xl overflow-hidden hover:border-white/20 hover:bg-black/60 transition-all duration-300 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
      >
        <span className="font-playfair font-medium text-lg md:text-xl text-white">{question}</span>
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
          <svg
            className={`w-5 h-5 transform transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" />
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 border-t border-white/5">
          <p className="font-playfair text-white/60 leading-relaxed text-base mt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}
