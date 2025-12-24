import { Button } from '../../UI/Button';
import { Card } from '../../UI/Card';
import './LiquidityRewards.css';

export const LiquidityRewards = () => {
    const pools = [
        { pair: 'ETH-USDT', apy: '4.5%', tvl: '$125M', risk: 'Low' },
        { pair: 'CEXUS-ETH', apy: '12.0%', tvl: '$85M', risk: 'Medium' },
        { pair: 'BNB-CEXUS', apy: '9.5%', tvl: '$45M', risk: 'Medium' },
        { pair: 'SOL-USDC', apy: '5.5%', tvl: '$90M', risk: 'Low' },
    ];

    return (
        <section className="liquidity-section">
            <div className="container">
                <div className="liquidity-header">
                    <h2 className="liquidity-title">
                        Earn Yield
                    </h2>
                    <p className="liquidity-subtitle">Provide liquidity and earn industry-leading rewards.</p>
                </div>

                <div className="liquidity-grid">
                    {pools.map((pool, idx) => (
                        <Card key={idx} className="pool-card">
                            <div className="pool-header">
                                <h3 className="pool-pair">{pool.pair}</h3>
                                <span className="pool-risk">
                                    {pool.risk} Risk
                                </span>
                            </div>

                            <div className="pool-stat-row">
                                <span className="pool-label">APY</span>
                                <span className="pool-apy">{pool.apy}</span>
                            </div>
                            <div className="pool-stat-row last">
                                <span className="pool-label">TVL</span>
                                <span className="pool-tvl">{pool.tvl}</span>
                            </div>

                            <Button variant="outline" style={{ width: '100%', borderColor: 'var(--border-light)', color: '#fff' }}>Deposit</Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
