import { motion } from 'framer-motion';
import { Button } from '../components/UI/Button';
import { FaUserCircle, FaClock, FaCheckCircle, FaVoteYea } from 'react-icons/fa';
import './Governance.css';

export const Governance = () => {
  const stats = [
    { label: 'Total CXUS Staked', value: '125.4M' },
    { label: 'Proposals Passed', value: '42' },
    { label: 'Active Proposals', value: '3' },
    { label: 'Total Voters', value: '12,504' },
  ];

  const proposals = [
    {
      id: 'UP-45',
      title: 'Incentivize Protocol Liquidity: Increase CXUS Emission for CEXUS/ETH LP',
      status: 'Active',
      proposer: '0x8f2...3e1d',
      endsIn: '2d 14h',
      forVotes: '12.4M',
      againstVotes: '1.2M',
      forPercentage: 91,
      description: 'This proposal aims to double the CXUS token emissions for the primary CEXUS/ETH liquidity pool on Uniswap V3 to ensure deeper liquidity for the protocol native token.'
    },
    {
      id: 'UP-44',
      title: 'Integrate Chainlink CCIP for Multi-Chain Staking Support',
      status: 'Active',
      proposer: '0x4c1...a92b',
      endsIn: '4d 8h',
      forVotes: '8.2M',
      againstVotes: '4.5M',
      forPercentage: 64,
      description: 'Leveraging Chainlink Cross-Chain Interoperability Protocol (CCIP) to allow users to stake assets from Base and Arbitrum into Cexus pools.'
    },
    {
      id: 'UP-43',
      title: 'Adjust Stability Fee for USDC-backed Lending Vaults',
      status: 'Passed',
      proposer: 'cexus_dao',
      endsIn: 'Ended',
      forVotes: '24.5M',
      againstVotes: '2.1M',
      forPercentage: 92,
      description: 'Lowering the stability fee by 0.5% to encourage more collateralized debt position (CDP) creation during market volatility.'
    }
  ];

  return (
    <div className="container governance-page">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

        {/* Header */}
        <header className="gov-header">
          <div className="gov-title">
            <h1 className="text-glow">Governance</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Shape the future of Cexus Protocol via community proposals.</p>
          </div>
          <Button variant="primary">New Proposal</Button>
        </header>

        {/* Stats Dashboard */}
        <div className="gov-stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="gov-stat-card glass-panel">
              <h3>{stat.label}</h3>
              <div className="value">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Proposals Section */}
        <div className="proposals-list">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff' }}>Proposals</h2>
          {proposals.map((proposal, index) => (
            <motion.div
              key={proposal.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`proposal-card glass-panel`}
            >
              <span className={`proposal-badge ${proposal.status === 'Active' ? 'badge-active' : 'badge-passed'}`}>
                {proposal.status}
              </span>

              <div className="proposal-content">
                <div className="proposal-main">
                  <h2>{proposal.id}: {proposal.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {proposal.description}
                  </p>
                  <div className="proposal-meta">
                    <span><FaUserCircle /> {proposal.proposer}</span>
                    <span><FaClock /> {proposal.endsIn}</span>
                    {proposal.status === 'Passed' && <span style={{ color: '#10B981' }}><FaCheckCircle /> Executed</span>}
                  </div>
                </div>

                <div className="proposal-voting">
                  <div className="vote-progress-container">
                    <div className="vote-track">
                      <div className="vote-fill for-fill" style={{ width: `${proposal.forPercentage}%` }}></div>
                    </div>
                    <div className="vote-labels">
                      <span style={{ color: '#10B981' }}>For: {proposal.forVotes}</span>
                      <span>{proposal.forPercentage}%</span>
                    </div>

                    <div className="vote-track">
                      <div className="vote-fill against-fill" style={{ width: `${100 - proposal.forPercentage}%` }}></div>
                    </div>
                    <div className="vote-labels">
                      <span style={{ color: '#EF4444' }}>Against: {proposal.againstVotes}</span>
                      <span>{100 - proposal.forPercentage}%</span>
                    </div>
                  </div>

                  {proposal.status === 'Active' && (
                    <div className="vote-actions">
                      <button className="vote-btn for">Vote For</button>
                      <button className="vote-btn against">Against</button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default Governance;
