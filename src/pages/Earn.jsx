import { motion } from 'framer-motion';
import { Button } from '../components/UI/Button';
import './Earn.css';

export const Earn = () => {
    const stats = [
        { label: 'Total Value Locked (TVL)', value: '$342.5M' },
        { label: 'Avg. APY', value: '18.2%' },
        { label: 'Rewards Distributed', value: '2.5M CXUS' },
        { label: 'Total Deposits', value: '45.1k' },
    ];

    const pools = [
        {
            pair: 'ETH - USDT',
            name: 'Ethereum / Tether LP',
            apr: '12.45%',
            tvl: '$125.4M',
            volume: '$24.1M',
            rewards: 'CXUS + Fees',
            icons: [
                'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
                'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'
            ],
            tags: ['Stable', 'Stablecoin']
        },
        {
            pair: 'CEXUS - ETH',
            name: 'Cexus Protocol / Ethereum LP',
            apr: '45.12%',
            tvl: '$45.2M',
            volume: '$8.5M',
            rewards: 'CXUS (Bonus)',
            icons: [
                'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
                'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' // Mock logo for placeholder
            ],
            tags: ['High Yield', 'Native']
        },
        {
            pair: 'SOL - CEXUS',
            name: 'Solana / Cexus Protocol LP',
            apr: '32.10%',
            tvl: '$28.1M',
            volume: '$4.2M',
            rewards: 'CXUS',
            icons: [
                'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
                'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'
            ],
            tags: ['Hot', 'Ecosystem']
        },
        {
            pair: 'USDC - USDT',
            name: 'Circle USD / Tether LP',
            apr: '3.15%',
            tvl: '$144.1M',
            volume: '$52.8M',
            rewards: 'Fees',
            icons: [
                'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
                'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'
            ],
            tags: ['Low Risk', 'Stablecoin']
        }
    ];

    return (
        <div className="container earn-page">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>

                {/* Header Section */}
                <div className="earn-header">
                    <h1 className="text-glow">Cexus Earn</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Providing liquidity to the Cexus Protocol pools and earn yield from trading fees and incentives.
                    </p>
                </div>

                {/* Dashboard Stats */}
                <div className="earn-stats-row">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="earn-stat-card glass-panel"
                        >
                            <span className="label">{stat.label}</span>
                            <div className="value">{stat.value}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Pools Grid */}
                <div className="pools-grid">
                    {pools.map((pool, index) => (
                        <motion.div
                            key={pool.pair}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="pool-card glass-panel"
                        >
                            <div className="pool-header">
                                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                    <div className="pool-icons">
                                        <img src={pool.icons[0]} alt="coin1" className="pool-icon" />
                                        <img src={pool.icons[1]} alt="coin2" className="pool-icon" />
                                    </div>
                                    <div className="pool-title">
                                        <h3>{pool.pair}</h3>
                                        <span>{pool.name}</span>
                                    </div>
                                </div>
                                <div className="pool-apr">
                                    <span className="apr-label">Earning</span>
                                    {pool.apr}
                                </div>
                            </div>

                            <div className="pool-tags">
                                {pool.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>

                            <div className="pool-details">
                                <div className="detail-item">
                                    <span className="label">Total TVL</span>
                                    <span className="value">{pool.tvl}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="label">24h Vol</span>
                                    <span className="value">{pool.volume}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="label">Rewards</span>
                                    <span className="value">{pool.rewards}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="label">My Balance</span>
                                    <span className="value">$0.00</span>
                                </div>
                            </div>

                            <div className="pool-actions">
                                <Button variant="primary" style={{ flex: 1 }}>Deposit</Button>
                                <Button variant="secondary" style={{ flex: 1 }}>Withdraw</Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
};

export default Earn;
