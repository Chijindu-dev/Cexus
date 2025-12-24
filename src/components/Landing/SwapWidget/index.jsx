import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown, FaCog, FaChevronDown, FaSearch, FaTimes } from 'react-icons/fa';
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { Button } from '../../UI/Button';
import './SwapWidget.css';

const TOKENS = [
    { symbol: 'ETH', name: 'Ethereum', logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' },
    { symbol: 'USDT', name: 'Tether USD', logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png' },
    { symbol: 'CXUS', name: 'Cexus', logoURI: 'https://pbs.twimg.com/profile_images/1666952875150827520/L-x7p0_m_400x400.jpg' },
    { symbol: 'BNB', name: 'BNB Chain', logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png' },
    { symbol: 'SOL', name: 'Solana', logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png' },
    { symbol: 'USDC', name: 'USD Coin', logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png' },
];

export const SwapWidget = () => {
    const [fromAmount, setFromAmount] = useState('');
    const [price] = useState(3890.50);
    const [fromToken, setFromToken] = useState(TOKENS[0]); // ETH
    const [toToken, setToToken] = useState(TOKENS[1]);   // USDT

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectingSide, setSelectingSide] = useState('from'); // 'from' or 'to'
    const [searchQuery, setSearchQuery] = useState('');

    // Wagmi Hooks
    const { address, isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { data: balanceData } = useBalance({ address });

    const handleConnect = () => {
        const injectedConnector = connectors.find((c) => c.type === 'injected');
        if (injectedConnector) connect({ connector: injectedConnector });
    };

    const formatBalance = (bal) => {
        if (!bal || !bal.formatted) return '0.00';
        return parseFloat(bal.formatted).toFixed(4);
    };

    const handleTokenSelect = (token) => {
        if (selectingSide === 'from') {
            if (token.symbol === toToken.symbol) {
                setToToken(fromToken);
            }
            setFromToken(token);
        } else {
            if (token.symbol === fromToken.symbol) {
                setFromToken(toToken);
            }
            setToToken(token);
        }
        setIsModalOpen(false);
    };

    const openModal = (side) => {
        setSelectingSide(side);
        setSearchQuery('');
        setIsModalOpen(true);
    };

    const filteredTokens = TOKENS.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Mock price calculation safe check
    const calculatedValue = fromAmount && !isNaN(fromAmount)
        ? (parseFloat(fromAmount) * price).toLocaleString(undefined, { maximumFractionDigits: 2 })
        : '0.00';

    return (
        <div className="swap-widget" style={{ position: 'relative' }}>
            <div className="swap-header">
                <h3>Swap</h3>
                <FaCog className="settings-icon" />
            </div>

            {/* From Input */}
            <div className="input-container" style={{ marginBottom: '4px' }}>
                <div className="input-row">
                    <input
                        type="number"
                        value={fromAmount}
                        onChange={(e) => setFromAmount(e.target.value)}
                        placeholder="0.0"
                        className="token-input"
                    />
                    <button className="token-select" onClick={() => openModal('from')}>
                        <img src={fromToken.logoURI} alt={fromToken.symbol} className="token-icon" />
                        <span style={{ fontWeight: 600, fontSize: '1rem' }}>{fromToken.symbol}</span>
                        <FaChevronDown size={10} color="#666" />
                    </button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-tertiary, #52525B)' }}>
                    <span>$ {calculatedValue}</span>
                    <span>Balance: {isConnected ? formatBalance(balanceData) : '0.00'}</span>
                </div>
            </div>

            {/* Arrow */}
            <div className="switch-arrow-container">
                <div className="switch-arrow" onClick={() => {
                    const temp = fromToken;
                    setFromToken(toToken);
                    setToToken(temp);
                }}>
                    <FaArrowDown size={12} color="var(--text-tertiary)" />
                </div>
            </div>

            {/* To Input */}
            <div className="input-container" style={{ marginTop: '-4px' }}>
                <div className="input-row">
                    <input
                        type="text"
                        value={calculatedValue}
                        readOnly
                        className="token-input"
                    />
                    <button className="token-select" onClick={() => openModal('to')}>
                        <img src={toToken.logoURI} alt={toToken.symbol} className="token-icon" />
                        <span style={{ fontWeight: 600, fontSize: '1rem' }}>{toToken.symbol}</span>
                        <FaChevronDown size={10} color="#666" />
                    </button>
                </div>
                <div className="usd-value">
                    Best quote via Uniswap V3
                </div>
            </div>

            {/* Action Button */}
            {isConnected ? (
                <Button
                    variant="primary"
                    className="swap-button"
                    style={{ background: '#2563EB', borderColor: '#2563EB' }}
                >
                    Swap
                </Button>
            ) : (
                <Button
                    variant="primary"
                    className="swap-button"
                    onClick={handleConnect}
                >
                    Connect Wallet
                </Button>
            )}

            {/* Token Selection Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="token-modal"
                    >
                        <div className="modal-header">
                            <span>Select a token</span>
                            <FaTimes style={{ cursor: 'pointer' }} onClick={() => setIsModalOpen(false)} />
                        </div>

                        <div className="search-wrapper">
                            <FaSearch color="#666" />
                            <input
                                type="text"
                                placeholder="Search by name or paste address"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                            />
                        </div>

                        <div className="token-list">
                            {filteredTokens.map((token) => (
                                <div key={token.symbol} className="token-item" onClick={() => handleTokenSelect(token)}>
                                    <img src={token.logoURI} alt={token.symbol} className="token-icon" />
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontWeight: 600, color: '#fff' }}>{token.symbol}</span>
                                        <span style={{ fontSize: '0.85rem', color: '#666' }}>{token.name}</span>
                                    </div>
                                    {/* Balance could go here */}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {isModalOpen && <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}></div>}
        </div>
    );
};

export default SwapWidget;
