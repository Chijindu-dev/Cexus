import { Navbar } from './Navbar/index';
import { Footer } from './Footer/index';

// Use Named Export for Layout as well to be consistent
export const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#000', color: '#fff' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
