import { motion } from 'framer-motion';
import { FaWallet, FaExchangeAlt, FaChartLine } from 'react-icons/fa';
import './HowItWorks.css';

export const HowItWorks = () => {
    const steps = [
        {
            icon: FaWallet,
            title: 'Connect Wallet',
            desc: 'Link your wallet securely to start trading instantly.',
            id: '01'
        },
        {
            icon: FaExchangeAlt,
            title: 'Select Pair',
            desc: 'Choose from 500+ verified assets across multiple chains.',
            id: '02'
        },
        {
            icon: FaChartLine,
            title: 'Start Trading',
            desc: 'Execute swaps with best-in-class pricing and zero slippage.',
            id: '03'
        }
    ];

    return (
        <section className="hiw-section">
            <div className="container">
                <div className="hiw-header">
                    <span className="hiw-label">
                        Getting Started
                    </span>
                    <h2 className="hiw-title">
                        Start Trading in Minutes
                    </h2>
                </div>

                <div className="hiw-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="hiw-card"
                            whileHover={{ y: -5, borderColor: '#fff' }}
                        >
                            <div className="hiw-number">
                                {step.id}
                            </div>

                            <div className="hiw-icon-wrapper">
                                <step.icon />
                            </div>

                            <div className="hiw-content">
                                <h3 className="hiw-card-title">{step.title}</h3>
                                <p className="hiw-card-desc">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
