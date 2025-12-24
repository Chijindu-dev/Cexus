import { useState } from 'react';
import { motion } from 'framer-motion';
import { SwapWidget } from '../components/Landing/SwapWidget/index';
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
  Legend,
} from 'chart.js';
import './Exchange.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// Mock Data for the chart
const generateChartData = (timeframe) => {
  let points = 24;
  if (timeframe === '1W') points = 7;
  if (timeframe === '1M') points = 30;

  const labels = Array.from({ length: points }, (_, i) => {
    if (timeframe === '1H') return `${i}:00`;
    if (timeframe === '1W') return `Day ${i + 1}`;
    return `${i + 1}`;
  });

  const dataPoints = labels.map(() => 3800 + Math.random() * 350);

  // Determine color based on trend (start vs end)
  const isUp = dataPoints[dataPoints.length - 1] > dataPoints[0];
  const color = isUp ? '#10B981' : '#EF4444';
  const bgColor = isUp ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)';

  return {
    labels,
    datasets: [
      {
        fill: true,
        label: 'ETH/USDT',
        data: dataPoints,
        borderColor: color,
        backgroundColor: bgColor,
        tension: 0.1,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(10, 10, 10, 0.9)',
      titleColor: '#fff',
      bodyColor: '#a1a1aa',
      borderColor: 'rgba(255,255,255,0.1)',
      borderWidth: 1,
      callbacks: {
        label: (context) => `$${context.parsed.y.toFixed(2)}`
      }
    },
  },
  scales: {
    x: {
      grid: { display: false, drawBorder: false },
      ticks: { color: '#52525b', maxTicksLimit: 8 },
    },
    y: {
      grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
      ticks: { color: '#52525b' },
      position: 'right',
    },
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false
  }
};

const MOCK_TRADES = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  price: (3890 + Math.random() * 10 - 5).toFixed(2),
  amount: (Math.random() * 2).toFixed(4),
  time: new Date(Date.now() - i * 1000 * 60).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  type: Math.random() > 0.5 ? 'buy' : 'sell'
}));

export const Exchange = () => {
  const [timeframe, setTimeframe] = useState('1H');
  const [chartData, setChartData] = useState(generateChartData('1H'));
  const [activeTab, setActiveTab] = useState('trades');

  const handleTimeframeChange = (tf) => {
    setTimeframe(tf);
    setChartData(generateChartData(tf));
  };

  return (
    <div className="container exchange-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="exchange-layout"
      >
        {/* Left Column: Chart & Data */}
        <div className="chart-column">

          {/* Header Card */}
          <div className="exchange-header-card glass-panel">
            <div className="pair-identifier">
              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="ETH" style={{ width: 32, height: 32 }} />
              <div>
                <h2>ETH / USDT</h2>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Ethereum</div>
              </div>
              <div style={{ marginLeft: '1rem', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>$3,892.45</span>
                <span className="text-green" style={{ fontSize: '0.8rem', fontWeight: 600 }}>+2.45%</span>
              </div>
            </div>

            <div className="market-stats">
              <div className="stat-item">
                <span className="stat-label">24h High</span>
                <span className="stat-value">$3,950.12</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">24h Low</span>
                <span className="stat-value">$3,780.05</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">24h Vol (ETH)</span>
                <span className="stat-value">145,230.5</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">24h Vol (USDT)</span>
                <span className="stat-value">$564.2M</span>
              </div>
            </div>
          </div>

          {/* Chart Card */}
          <div className="chart-container-card glass-panel">
            <div className="chart-controls">
              {['1H', '4H', '1D', '1W', '1M'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => handleTimeframeChange(tf)}
                  className={`time-btn ${timeframe === tf ? 'active' : ''}`}
                >
                  {tf}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <Line data={chartData} options={options} />
            </div>
          </div>

          {/* Trades / Orders Tabs */}
          <div className="trades-container-card glass-panel">
            <div className="tabs-header">
              <button className={`tab-btn ${activeTab === 'trades' ? 'active' : ''}`} onClick={() => setActiveTab('trades')}>Recent Trades</button>
              <button className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>My Orders</button>
            </div>

            <div className="trades-list">
              <div className="trade-row trade-header">
                <span>Price (USDT)</span>
                <span style={{ textAlign: 'right' }}>Amount (ETH)</span>
                <span style={{ textAlign: 'right' }}>Time</span>
              </div>
              {activeTab === 'trades' ? (
                MOCK_TRADES.map((trade) => (
                  <div key={trade.id} className="trade-row">
                    <span className={trade.type === 'buy' ? 'text-green' : 'text-red'}>{trade.price}</span>
                    <span style={{ textAlign: 'right', color: '#fff' }}>{trade.amount}</span>
                    <span style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>{trade.time}</span>
                  </div>
                ))
              ) : (
                <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                  Connect wallet to view your orders
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Right Column: Swap */}
        <div className="swap-section">
          <SwapWidget />
        </div>

      </motion.div>
    </div>
  );
};

export default Exchange;
