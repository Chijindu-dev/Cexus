import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './pages/Home';
import { Markets } from './pages/Markets';
import { Exchange } from './pages/Exchange';
import { Earn } from './pages/Earn';
import { Governance } from './pages/Governance';
import { Whitepaper } from './pages/Whitepaper';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </Layout>
  )
}

export default App;
