import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-brand">
                        <h3>CEXUS.</h3>
                        <p>
                            The decentralized protocol for everyone.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>Protocol</h4>
                        <ul className="footer-links">
                            <li><Link to="/markets" className="footer-link">Markets</Link></li>
                            <li><Link to="/exchange" className="footer-link">Exchange</Link></li>
                            <li><Link to="/earn" className="footer-link">Yield</Link></li>
                            <li><Link to="/whitepaper" className="footer-link">Whitepaper</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Support</h4>
                        <ul className="footer-links">
                            <li><a href="#" className="footer-link">Help Center</a></li>
                            <li><a href="#" className="footer-link">Terms of Service</a></li>
                            <li><a href="#" className="footer-link">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Community</h4>
                        <div className="social-links">
                            <FaTwitter size={20} className="social-icon" />
                            <FaGithub size={20} className="social-icon" />
                            <FaDiscord size={20} className="social-icon" />
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <span>© 2025 Cexus Labs.</span>
                    <span>v2.4.0</span>
                </div>
            </div>
        </footer>
    );
};
