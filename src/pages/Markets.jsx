import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import './Markets.css';

const fetchMarkets = async () => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h'
  );
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export const Markets = () => {
  const { data: coins, isLoading, isError } = useQuery({
    queryKey: ['markets'],
    queryFn: fetchMarkets,
    refetchInterval: 30000, // Refresh every 30s
  });

  // Global Stats Mock
  const stats = [
    { label: 'Total Market Cap', value: '$2.45T' },
    { label: '24h Volume', value: '$84.2B' },
    { label: 'BTC Dominance', value: '52.1%' },
    { label: 'ETH Dominance', value: '17.8%' },
  ];

  return (
    <div className="container markets-page">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

        <div className="markets-header">
          <h1>Markets</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Top crypto assets by market cap</p>
        </div>

        <div className="market-stats-row">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <h3>{stat.label}</h3>
              <div className="value">{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="market-table-container">
          {isLoading ? (
            <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
              Loading market data...
            </div>
          ) : isError ? (
            <div style={{ padding: '4rem', textAlign: 'center', color: '#EF4444' }}>
              Failed to load market data (API Rate Limit likely).
            </div>
          ) : (
            <table className="market-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>24h Change</th>
                  <th className="hide-mobile">Market Cap</th>
                  <th className="hide-mobile">Volume (24h)</th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin) => (
                  <tr key={coin.id}>
                    <td style={{ color: 'var(--text-tertiary)', width: '50px' }}>{coin.market_cap_rank}</td>
                    <td>
                      <div className="coin-cell">
                        <img src={coin.image} alt={coin.name} />
                        <div className="coin-info">
                          <span style={{ fontWeight: 600 }}>{coin.name}</span>
                          <span className="coin-symbol">{coin.symbol}</span>
                        </div>
                      </div>
                    </td>
                    <td style={{ fontWeight: 600 }}>
                      ${coin.current_price.toLocaleString()}
                    </td>
                    <td>
                      <span className={coin.price_change_percentage_24h >= 0 ? 'text-green' : 'text-red'}>
                        {coin.price_change_percentage_24h > 0 ? '+' : ''}
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </span>
                    </td>
                    <td className="hide-mobile">${coin.market_cap.toLocaleString()}</td>
                    <td className="hide-mobile">${coin.total_volume.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </motion.div>
    </div>
  );
};

export default Markets;
