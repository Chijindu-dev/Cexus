import { motion } from 'framer-motion';
import './Whitepaper.css';

export const Whitepaper = () => {
    const sections = [
        { id: 'abstract', title: 'Abstract' },
        { id: 'introduction', title: '1. Introduction' },
        { id: 'problem-statement', title: '2. Problem Statement' },
        { id: 'protocol-overview', title: '3. Protocol Overview' },
        { id: 'architecture', title: '4. Architecture' },
        { id: 'tokenomics', title: '5. Tokenomics' },
        { id: 'governance', title: '6. Governance' },
        { id: 'use-cases', title: '7. Use Cases' },
        { id: 'roadmap', title: '8. Roadmap' },
        { id: 'risks', title: '9. Risks' },
        { id: 'conclusion', title: '10. Conclusion' },
    ];

    return (
        <div className="container whitepaper-page">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="whitepaper-layout"
            >
                {/* Sidebar */}
                <aside className="wp-sidebar">
                    <div className="wp-nav-title">Whitepaper</div>
                    <ul className="wp-nav-links">
                        {sections.map(section => (
                            <li key={section.id} className="wp-nav-item">
                                <a href={`#${section.id}`} className="wp-nav-link">
                                    {section.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="wp-content">
                    <article className="wp-article">
                        <h1 className="text-glow">Cexus Protocol Whitepaper</h1>
                        <span className="version">Official Documentation — Dec 2025</span>

                        <section id="abstract" className="wp-section">
                            <h2>Abstract</h2>
                            <p>
                                Cexus Protocol is a decentralized infrastructure designed to enable secure, scalable, and capital-efficient on-chain interactions. By combining modular architecture, trust-minimized execution, and incentive-aligned tokenomics, Cexus aims to provide a robust foundation for next-generation decentralized applications and financial systems.
                            </p>
                        </section>

                        <section id="introduction" className="wp-section">
                            <h2>1. Introduction</h2>
                            <p>
                                Blockchain technology has enabled permissionless value transfer and programmable finance, yet current systems face challenges including scalability limits, fragmented liquidity, security risks, and poor user experience. Cexus Protocol addresses these issues by introducing a unified protocol layer that optimizes execution, coordination, and incentives across decentralized ecosystems.
                            </p>
                        </section>

                        <section id="problem-statement" className="wp-section">
                            <h2>2. Problem Statement</h2>
                            <p>
                                Existing protocols often suffer from inefficient capital utilization, high transaction costs and latency, security vulnerabilities due to complex smart contract interactions, fragmented user and developer experiences, and limited interoperability across chains and applications.
                            </p>
                        </section>

                        <section id="protocol-overview" className="wp-section">
                            <h2>3. Cexus Protocol Overview</h2>
                            <p>
                                Cexus Protocol is designed as a modular, chain-agnostic protocol that enables secure execution of on-chain operations, efficient coordination between participants, and seamless integration with existing blockchain ecosystems.
                            </p>
                        </section>

                        <section id="architecture" className="wp-section">
                            <h2>4. Architecture</h2>
                            <p>
                                The protocol separates execution, settlement, and governance layers to improve flexibility and security.
                            </p>
                            <div className="wp-card">
                                <h3>Core Components:</h3>
                                <ul className="wp-list">
                                    <li><strong>Core Contracts</strong>: Essential logic for protocol operations.</li>
                                    <li><strong>Execution Layer</strong>: Efficient processing of transactions.</li>
                                    <li><strong>Incentive Layer</strong>: Reward structures for participants.</li>
                                    <li><strong>Governance Layer</strong>: Community-led decision-making.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="tokenomics" className="wp-section">
                            <h2>5. Tokenomics</h2>
                            <p>
                                The CEXUS token is the native utility and governance asset of the protocol. It is used for:
                            </p>
                            <div className="wp-card">
                                <ul className="wp-list" style={{ marginBottom: 0 }}>
                                    <li><strong>Staking</strong>: Securing the network and providing utility.</li>
                                    <li><strong>Fees</strong>: Payment for protocol-specific operations.</li>
                                    <li><strong>Governance Voting</strong>: Shaping the protocol's future.</li>
                                    <li><strong>Incentivization</strong>: Rewarding liquidity providers and active users.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="governance" className="wp-section">
                            <h2>6. Governance</h2>
                            <p>
                                Cexus Protocol is governed by token holders through on-chain proposals, transparent voting, timelocked execution, and progressive decentralization.
                            </p>
                        </section>

                        <section id="use-cases" className="wp-section">
                            <h2>7. Use Cases</h2>
                            <div className="wp-list">
                                <li>DeFi infrastructure for multi-chain liquidity.</li>
                                <li>Cross-chain coordination for decentralized applications.</li>
                                <li>On-chain automation for complex financial operations.</li>
                                <li>Institutional blockchain applications with high security needs.</li>
                                <li>Developer tooling for rapid dApp deployment.</li>
                            </div>
                        </section>

                        <section id="roadmap" className="wp-section">
                            <h2>8. Roadmap</h2>
                            <div className="roadmap-wp">
                                <div className="wp-card">
                                    <h3>Phase 1: Foundation</h3>
                                    <p>Establishment of core protocol and security audits.</p>
                                </div>
                                <div className="wp-card">
                                    <h3>Phase 2: Launch</h3>
                                    <p>Mainnet deployment and ecosystem expansion.</p>
                                </div>
                                <div className="wp-card">
                                    <h3>Phase 3: Expansion</h3>
                                    <p>Cross-chain scaling and permissionless integrations.</p>
                                </div>
                            </div>
                        </section>

                        <section id="risks" className="wp-section">
                            <h2>9. Risks</h2>
                            <div className="wp-list">
                                <li>Smart contract risk and potential vulnerabilities.</li>
                                <li>Governance capture by large token holders.</li>
                                <li>Regulatory uncertainty in various jurisdictions.</li>
                                <li>Adoption challenges in a competitive landscape.</li>
                            </div>
                        </section>

                        <section id="conclusion" className="wp-section">
                            <h2>10. Conclusion</h2>
                            <p>
                                Cexus Protocol aims to serve as a foundational layer for scalable and secure decentralized systems, optimizing how users and protocols interact in the evolving on-chain economy.
                            </p>
                        </section>
                    </article>
                </main>
            </motion.div>
        </div>
    );
};

export default Whitepaper;
