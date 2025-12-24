import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../UI/Button';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const { address, isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();

    const formatAddress = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

    const handleConnect = () => {
        const injectedConnector = connectors.find((c) => c.type === 'injected');
        if (injectedConnector) connect({ connector: injectedConnector });
    };

    const handleDisconnect = () => {
        disconnect();
        setShowUserMenu(false);
    };

    const navItems = [
        { name: 'Markets', path: '/markets' },
        { name: 'Exchange', path: '/exchange' },
        { name: 'Earn', path: '/earn' },
        { name: 'Governance', path: '/governance' },
    ];

    return (
        <>
            <nav className="navbar">
                <div className="container navbar-container">

                   
                    <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
                        <span className="logo-text">CEXUS.</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="nav-links hidden-mobile">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Connect Button (Desktop) */}
                    <div className="connect-wrapper hidden-mobile" style={{ position: 'relative' }}>
                        {isConnected ? (
                            <div className="wallet-dropdown-trigger" onClick={() => setShowUserMenu(!showUserMenu)}>
                                <span className="status-dot"></span>
                                {formatAddress(address)}
                                <FaChevronDown size={10} style={{ marginLeft: '8px', opacity: 0.6 }} />

                                <AnimatePresence>
                                    {showUserMenu && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="user-dropdown glass-panel"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="dropdown-item" onClick={() => {
                                                navigator.clipboard.writeText(address);
                                                setShowUserMenu(false);
                                            }}>
                                                Copy Address
                                            </div>
                                            <div className="dropdown-divider" />
                                            <div className="dropdown-item disconnect" onClick={handleDisconnect}>
                                                Disconnect
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Button onClick={handleConnect} variant="primary" style={{ borderRadius: '24px', fontSize: '0.85rem', padding: '8px 16px' }}>
                                Connect Wallet
                            </Button>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button className="mobile-toggle" onClick={() => setIsOpen(true)}>
                        <FaBars />
                    </button>

                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mobile-menu-overlay"
                    >
                        <div className="mobile-header">
                            <Link to="/" className="logo" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none' }}>CEXUS.</Link>
                            <FaTimes size={20} onClick={() => setIsOpen(false)} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }} />
                        </div>

                        <div className="mobile-links">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>

                        <div className="mobile-footer">
                            <Button onClick={handleConnect} variant="primary" style={{ width: '100%' }}>
                                {isConnected ? 'Disconnect' : 'Connect Wallet'}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay Backdrop */}
            {isOpen && (
                <div className="backdrop" onClick={() => setIsOpen(false)}></div>
            )}
        </>
    );
};

export default Navbar;
