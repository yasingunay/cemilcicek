import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Press from './components/Press';
import Blog from './components/Blog';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import SearchModal from './components/SearchModal';
import ComingSoon from './components/ComingSoon';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  if (showComingSoon) {
    return <ComingSoon onBack={() => setShowComingSoon(false)} />;
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      <main>
        <Hero />
        <About />
        <Services />
        <Press onShowComingSoon={() => setShowComingSoon(true)} />
        <Blog onShowComingSoon={() => setShowComingSoon(true)} />
        <Contact />
      </main>
      <WhatsAppButton />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}

export default App;
