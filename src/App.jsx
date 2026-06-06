import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import PromoStrip from './components/sections/PromoStrip';
import FeaturedSection from './components/sections/FeaturedSection';
import ShopSection from './components/sections/ShopSection';
import WhyUsSection from './components/sections/WhyUsSection';
import AboutSection from './components/sections/AboutSection';

import CartDrawer from './components/cart/CartDrawer';
import WishlistDrawer from './components/cart/WishlistDrawer';
import SearchModal from './components/search/SearchModal';
import ToastContainer from './components/ui/Toast';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Global Overlays */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <ToastContainer />

      {/* App Shell */}
      <TopBar />
      <Header />
      
      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <PromoStrip />
        <FeaturedSection />
        <ShopSection />
        <WhyUsSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
