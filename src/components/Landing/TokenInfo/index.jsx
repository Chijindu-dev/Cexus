import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
} from 'chart.js';
import { Button } from '../../UI/Button';
import { Card } from '../../UI/Card';
import './TokenInfo.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
);

export const TokenInfo = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Cexus Price',
                data: [1.2, 1.5, 1.4, 2.1, 2.8, 3.5],
                borderColor: '#FFFFFF',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                tension: 0,
                fill: true,
                pointRadius: 0,
                borderWidth: 2
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#000',
                titleColor: '#fff',
                bodyColor: '#A1A1AA',
                borderColor: '#333',
                borderWidth: 1,
                padding: 12,
                cornerRadius: 4,
                displayColors: false
            }
        },
        scales: {
            x: { grid: { display: false }, ticks: { color: '#52525B', font: { size: 10 } } },
            y: { grid: { color: '#27272A', drawBorder: false }, ticks: { color: '#52525B', font: { size: 10 } } },
        },
        interaction: {
            mode: 'index',
            intersect: false,
        }
    };

    return (
        <section className="token-info-section">
            <div className="container">
                <div className="token-info-grid">

                    {/* Info Side */}
                    <div>
                        <div className="token-label">
                            NATIVE UTILITY TOKEN
                        </div>
                        <h2 className="token-title">
                            The Cexus Token
                        </h2>
                        <p className="token-desc">
                            Governs the protocol, incentivizes liquidity, and powers the ecosystem.
                        </p>

                        <div className="token-stats">
                            <div>
                                <h4 className="stat-value">$3.50</h4>
                                <p className="stat-label">Current Price</p>
                            </div>
                            <div>
                                <h4 className="stat-value">$420M</h4>
                                <p className="stat-label">Market Cap</p>
                            </div>
                            <div>
                                <h4 className="stat-value">10M</h4>
                                <p className="stat-label">Circulating</p>
                            </div>
                            <div>
                                <h4 className="stat-value">45%</h4>
                                <p className="stat-label">Staked</p>
                            </div>
                        </div>

                        <Button variant="primary" style={{ background: '#fff', color: '#000' }}>Buy CXUS</Button>
                    </div>

                    {/* Chart Side */}
                    <Card className="chart-card-wrapper">
                        <div className="chart-container">
                            <div style={{ height: '300px' }}>
                                <Line data={data} options={options} />
                            </div>
                            <div className="chart-footer">
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span className="chart-footer-label">24h Volume</span>
                                    <span className="chart-footer-value">$12,450,000</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <span className="chart-footer-label">Change</span>
                                    <span className="chart-footer-change">+15.4%</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </section>
    );
};
