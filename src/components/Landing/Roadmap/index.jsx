import { motion } from 'framer-motion';
import './Roadmap.css';

export const Roadmap = () => {
    const phases = [
        { title: 'Q1 2025', items: ['Platform Launch', 'Token Airdrop', 'Staking Live'] },
        { title: 'Q2 2025', items: ['Cross-Chain Bridge', 'Mobile App Beta', 'Limit Orders'] },
        { title: 'Q3 2025', items: ['Governance DAO', 'Fiat On-Ramp', 'NFT Marketplace'] },
        { title: 'Q4 2025', items: ['Global Expansion', 'Advanced Derivatives', 'Institutional API'] },
    ];

    return (
        <section className="roadmap-section">
            <div className="container">
                <div className="roadmap-header">
                    <h2 className="roadmap-title">Roadmap</h2>
                    <p className="roadmap-subtitle">Our journey to decentralized dominance.</p>
                </div>

                <div className="roadmap-grid">
                    {phases.map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`roadmap-item ${i < 2 ? 'active' : ''}`}
                            style={{
                                opacity: i < 2 ? 1 : 0.6
                            }}
                        >
                            <div className="roadmap-phase-title">
                                {phase.title}
                            </div>

                            <ul className="roadmap-list">
                                {phase.items.map((item, idx) => (
                                    <li key={idx} className="roadmap-list-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
