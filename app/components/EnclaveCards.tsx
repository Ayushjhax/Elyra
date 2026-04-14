"use client";

import styles from "./EnclaveCards.module.css";

type Card = {
  id: "orange" | "blue" | "green";
  title: string;
  description: string;
  terminal: string;
  glowClass: string;
  textClass: string;
  icon: React.ReactNode;
};

export default function EnclaveCards() {
  const cards: Card[] = [
    {
      id: "orange",
      title: "SECURE EXECUTION (TEEs)",
      description:
        "Strategies run in isolated, encrypted containers, allowing agents to handle private keys and confidential data without central oversight.",
      terminal: "> TEE_STATUS: ENCLAVE_ACTIVE // NON-CUSTODIAL: TRUE",
      glowClass: styles.glowOrange,
      textClass: styles.textOrangeCard,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      ),
    },
    {
      id: "blue",
      title: "VENUE-NATIVE EXECUTION",
      description: "A single system trades spot and perps across Hyperliquid, Kamino, and Jupiter.",
      terminal: "> ROUTING: [HYPERLIQUID, KAMINO, JUPITER] // LATENCY: 12ms",
      glowClass: styles.glowBlue,
      textClass: styles.textBlueCard,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M3 12h5m8 0h5M12 3v5m0 8v5" />
        </svg>
      ),
    },
    {
      id: "green",
      title: "PROGRAMMABLE COORDINATION",
      description: "Agents form swarms to negotiate better terms or veto.",
      terminal: "> SWARM_ID: ELYRA_V0.1 // CONSENSUS: ESTABLISHED // CAPABILITY: [VEO, NEGO]",
      glowClass: styles.glowGreen,
      textClass: styles.textGreenCard,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <circle cx="9" cy="9" r="1" fill="currentColor" />
          <circle cx="15" cy="15" r="1" fill="currentColor" />
          <circle cx="15" cy="9" r="1" fill="currentColor" />
          <circle cx="9" cy="15" r="1" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.gridBg} />

      <div className={styles.cardsWrapper}>
        {cards.map((card) => (
          <div key={card.id} className={`${styles.cardOuter} ${card.glowClass}`}>
            <div className={styles.cardInner}>
              <div className={styles.iconWrapper}>{card.icon}</div>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.description}>{card.description}</p>
              <div className={styles.terminal}>
                <span className={card.textClass}>{card.terminal}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
