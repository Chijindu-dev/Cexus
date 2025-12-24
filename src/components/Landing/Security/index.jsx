import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaCheckDouble } from 'react-icons/fa';
import './Security.css';

export const Security = () => {
    return (
        <section className="security-section">
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="security-badge">
                        <FaShieldAlt style={{ color: 'var(--success)' }} />
                        <span className="security-badge-text">Bank-Grade Security</span>
                    </div>

                    <h2 className="security-title">
                        Your Funds are SAFU
                    </h2>
                    <p className="security-subtitle">
                        Audited by the world's leading blockchain security firms. Our smart contracts are open-source and verified.
                    </p>

                    <div className="security-logos">
                        <div className="security-item">
                            <FaCheckDouble color="var(--success)" /> CertiK Audited
                        </div>
                        <div className="security-item">
                            <FaCheckDouble color="var(--success)" /> PeckShield Verified
                        </div>
                        <div className="security-item">
                            <FaLock color="var(--success)" /> 24/7 Monitoring
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
