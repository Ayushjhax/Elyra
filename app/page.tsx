"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth animation curve (ease-in-out cubic)
  const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const scrollProgress = Math.min(scrollY / 300, 1); // Complete animation in 300px
  const easedProgress = easeInOutCubic(scrollProgress);

  // Logo and button should converge to become adjacent in a blurred container
  // Logo moves from left toward center, button moves from right toward center
  // Both converge to become adjacent (with small gap between them)
  // Adjusted convergence distance to prevent overlap while staying adjacent
  const logoTranslateX = easedProgress * 520; // Move right toward center (adjusted to prevent overlap)
  const buttonTranslateX = -easedProgress * 520; // Move left toward center (adjusted to prevent overlap)
  
  // Background container opacity increases as they converge
  const containerOpacity = easedProgress * 0.9;
  
  // Nav should move down slightly when scrolling to add gap above
  const navTranslateY = Math.min(scrollY * 0.3, 40); // Move down up to 40px for gap

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
        style={{
          transform: `translateY(${navTranslateY}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
          {/* Blurred Background Container - Appears as elements converge */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-full px-5 py-2.5 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: containerOpacity,
              backdropFilter: 'blur(12px)',
              backgroundColor: 'rgba(17, 24, 39, 0.6)', // gray-900 with transparency
              border: '1px solid rgba(75, 85, 99, 0.5)', // gray-600 border
              transform: `translateX(-50%)`,
              minWidth: '320px',
            }}
          >
            {/* Invisible spacer to maintain container size when visible */}
            <div className="w-[300px] h-12 md:h-14" />
          </div>

          {/* Logo - Starts at left, converges to center, becomes adjacent to button */}
          <div
            className="absolute left-4 md:left-6 pointer-events-auto z-10"
            style={{
              transform: `translateX(${logoTranslateX}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="relative w-20 h-14 md:w-28 md:h-18 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Horizon Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Join Waitlist Button - Starts at right, converges to center, becomes adjacent to logo */}
          <div
            className="absolute right-4 md:right-6 pointer-events-auto z-10"
            style={{
              transform: `translateX(${buttonTranslateX}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <a
              href="https://forms.gle/k7uLeN46X1zUJWrCA"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-4 py-2 md:px-5 md:py-2.5 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full text-white font-medium text-sm hover:bg-gray-800/90 hover:border-gray-600 transition-all duration-300 flex items-center gap-2 h-11 md:h-12 whitespace-nowrap"
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
            <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold italic mb-6 bg-gradient-to-r from-blue-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent leading-[1.1] tracking-tight">
              Horizon
            </h1>
            <p className="font-playfair text-2xl md:text-3xl lg:text-4xl font-medium italic mb-4 text-white/90 leading-tight tracking-wide">
            Built for the next era of trading. 
            </p>
            <p className="font-playfair text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed font-light italic tracking-normal mb-8">
              AI-powered forecasting and hedging of everyday uncertainties via Kalshi markets.
            </p>
            
            {/* Join Waitlist Button - Below Hero Text */}
            <a
              href="https://forms.gle/k7uLeN46X1zUJWrCA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full text-white font-medium text-base md:text-lg hover:bg-gray-800/90 hover:border-gray-600 transition-all duration-300 group"
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
                Trade like a <span className="font-playfair italic font-semibold ml-2">pro</span>
              </h2>
              
              {/* Subtitle/Description */}
              <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-inter font-light tracking-wide">
                From predictions to profits — learn how <span className="text-white/80 font-medium">Horizon</span> makes hedging smooth, smart, and seriously powerful.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <FAQItem
                question="What is HorizonAI?"
                answer={`Horizon's AI scans news and data (economic reports, social media, satellite weather feeds, etc.) to gauge risks like inflation jumps or storms. When a risk rises, it automatically buys or sells "Yes/No" shares on a prediction market corresponding to that event. For example, if groceries are going to get expensive, Horizon might buy a "Yes" share in an event like "CPI inflation > 4%" to offset your cost increase. All trading happens on Kalshi's markets, which are now tokenized on Solana via DFlow and Jupiter. In practice this means trades are executed on-chain in a single step (a hybrid RFQ system), giving you instant, transparent hedges against the predicted outcome.`}
                defaultOpen={true}              />
              <FAQItem
                question="Is it safe?"
                answer={`Yes. Horizon uses Kalshi – the first CFTC-regulated prediction market – so every contract and payout is overseen by regulators. Trades settle on Solana's blockchain, which is public and non-custodial (no one can run away with your funds). In fact, Kalshi's tokenized markets are "non-custodial, instant, and crypto native", meaning each trade is governed by smart contracts you can audit. That said, prediction markets are speculative by nature, so we always advise setting sensible limits and understanding that hedges can reduce losses but not eliminate risk entirely.`}
              />
              <FAQItem
                question="Do I need crypto?"
                answer="You will use crypto indirectly. Horizon routes all trades through Solana's ecosystem, so you'll connect a Solana-compatible wallet (e.g. Phantom) to trade using a stablecoin like USDC. However, you don't need to be a blockchain expert. Horizon provides a simple interface and on-ramps: for example, you can fund your account with a bank card, and we convert it to the required token. The platform shows exactly how much crypto is needed for each hedge. In short: you don't need prior crypto experience, but all transactions happen on-chain for speed and transparency."
              />
              <FAQItem
                question="What are prediction markets?"
                answer={`A prediction market is like a stock exchange for future events. Instead of trading company shares, you trade contracts whose price reflects the probability of an event (e.g. "Will it rain tomorrow?" or "Will inflation exceed 4%?"). Each share costs between $0 and $1. If you buy a share on the outcome you believe will happen (say "Yes" for inflation >4%), and that outcome occurs, each winning share pays out $1. If the outcome doesn't occur, your shares expire worth nothing. The current price of the share (say $0.60) effectively signals a 60% chance of that event. In other words, you earn money if you buy low and the outcome happens. This lets anyone hedge or speculate on real-world risks.`}
              />
              <FAQItem
                question="Can I trust the AI?"
                answer="We build Horizon's AI with strong safeguards. The models are regularly tested on historical data and overseen by financial experts. In fact, many financial firms rely on predictive analytics: surveys show 77% of wealth managers say AI-driven forecasts improve their decisions. Still, Horizon's AI is just a tool. We recommend users monitor and adjust settings as needed. All trades remain your choice – the AI suggests probabilities and automates execution, but you can review every move. We also continually refine the algorithms, and you can disable or stop any automation at any time. In practice, our hybrid approach (AI plus oversight) has proven reliable for identifying trends like weather or inflation impacts."
              />
              <FAQItem
                question="Can I make money using this?"
                answer="Prediction markets can be profitable, but they carry risk – just like stock trading or poker. Success often comes from finding mispriced opportunities or hedging existing exposures. For example, if you own stocks that might drop when rates rise, a winning bet on a Fed hike can offset that loss. Horizon provides advanced tools to seek these edges, but we never promise gains. Users should treat Horizon primarily as a risk management tool: it can protect or improve your financial outcome if events unfold in your favor, but losses are always possible. Always start small, understand the odds (prices), and only invest what you're comfortable risking."
              />
              <FAQItem
                question="Is it free? What are the fees?"
                answer="Horizon itself has no subscription fee – you only pay the standard transaction fees of the markets and blockchain. Kalshi charges a small commission on your winning trades (a percentage of the profit, visible before you trade). There are no hidden costs, and you pay only when your trade succeeds. You will also pay Solana network fees (typically just a few cents per transaction) when trades execute. The app always displays the fee upfront, so there are no surprises."
              />
              <FAQItem
                question="Who is this built for?"
                answer="Horizon is built for everyone who cares about real-world financial risks. That includes the everyday consumer – say, a young family worried about rising grocery bills or oil prices – as well as professional traders and portfolio managers seeking to automate event-driven strategies. If you pay rent, buy gas, or invest in markets, Horizon can help protect you. Its friendly interface makes sophisticated hedging accessible to non-experts, while its programmable features offer power users a way to integrate macro event trading into a larger portfolio."
              />
            </div>
          </div>
        </section>

        {/* Waitlist CTA Section */}
        <section className="px-6 md:px-8 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h2 className="font-space-grotesk text-6xl md:text-7xl lg:text-8xl font-bold mb-10 text-white tracking-tight leading-none">
              Ready to trade <span className="font-playfair italic font-semibold ml-2">smarter?</span>
            </h2>
            
            {/* Descriptive Text */}
            <div className="space-y-4 mb-10">
              <p className="text-white/70 text-lg md:text-xl font-inter font-light tracking-wide">
                We're opening early access to a small group of testers.
              </p>
              <p className="text-white/80 text-lg md:text-xl font-inter font-medium tracking-wide">
                Experience how <span className="text-white font-semibold">Horizon</span>'s AI-powered intelligence transforms every hedge.
              </p>
            </div>

            {/* Join Waitlist Button */}
            <div className="mb-6">
              <a
                href="https://forms.gle/k7uLeN46X1zUJWrCA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full text-white font-medium text-base md:text-lg hover:bg-gray-800/90 hover:border-gray-600 transition-all duration-300 group"
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

            {/* Footer Text */}
            <p className="text-white/50 text-sm md:text-base font-inter">
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
    <div className="border border-white/10 rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm hover:border-white/20 hover:bg-black/60 transition-all duration-300 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
      >
        <span className="font-space-grotesk font-medium text-lg md:text-xl text-white">{question}</span>
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
          <p className="text-white/60 leading-relaxed font-inter text-base mt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}
