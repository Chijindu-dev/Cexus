import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button';
import { SwapWidget } from '../SwapWidget';
import './Hero.css';

export const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-content"
                >
                    <div className="hero-label">
                        Decentralized Protocol V2
                    </div>

                    <h1 className="hero-title">
                        The future of <br />
                        <span className="hero-subtitle">trading is here.</span>
                    </h1>

                    <p className="hero-description">
                        Experience the most efficient liquidity protocol. Zero compromises on security or speed.
                    </p>

                    <div className="hero-actions">
                        <Button variant="primary">
                            Start Trading
                        </Button>
                        <Link to="/whitepaper" style={{ textDecoration: 'none' }}>
                            <Button variant="outline">
                                White Paper
                            </Button>
                        </Link>
                    </div>
                </motion.div>


                <div className="hero-widget-wrapper">
                    <SwapWidget />
                </div>
            </div>
        </section>
    );
};
export default Hero;