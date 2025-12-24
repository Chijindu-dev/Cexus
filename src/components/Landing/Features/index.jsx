import { motion } from 'framer-motion';
import { Card } from '../../UI/Card';
import { FaShieldAlt, FaExchangeAlt, FaLayerGroup, FaBolt } from 'react-icons/fa';
import './Features.css';

const FeatureItem = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
    >
        <Card className="feature-card">
            <div className="feature-icon-wrapper">
                <Icon />
            </div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{description}</p>
        </Card>
    </motion.div>
);

export const Features = () => {
    const features = [
        {
            icon: FaBolt,
            title: 'Lightning Fast',
            description: 'Experience instant trade execution with our optimized matching engine and low-latency network.'
        },
        {
            icon: FaExchangeAlt,
            title: 'Cross-Chain',
            description: 'Seamlessly swap assets across Ethereum, BSC, Solana, and more with our integrated bridge.'
        },
        {
            icon: FaShieldAlt,
            title: 'Audited Security',
            description: 'Your funds are safe. Fully non-custodial and audited by top security firms like CertiK.'
        },
        {
            icon: FaLayerGroup,
            title: 'Deep Liquidity',
            description: 'Access the best prices with our aggregated liquidity pools and automated market makers.'
        }
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="features-header">
                    <h2 className="features-title">
                        Why Cexus?
                    </h2>
                    <p className="features-subtitle">
                        Built for professional traders who demand speed and security.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((f, i) => (
                        <FeatureItem key={i} {...f} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};
