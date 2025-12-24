import { Hero } from '../components/Landing/Hero/index';
import { Features } from '../components/Landing/Features/index';
import { HowItWorks } from '../components/Landing/HowItWorks/index';
import { TokenInfo } from '../components/Landing/TokenInfo/index';
import { LiquidityRewards } from '../components/Landing/LiquidityRewards/index';
import { Security } from '../components/Landing/Security/index';
import { Roadmap } from '../components/Landing/Roadmap/index';

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <TokenInfo />
      <LiquidityRewards />
      <Security />
      <Roadmap />
    </>
  );
};

export default Home;
