import { useEffect } from 'react';
import gsap from 'gsap';
import { CustomCursor } from './components/CustomCursor';
import { StickyNav } from './components/StickyNav';
import { HeroSection } from './components/HeroSection';
import { ObservationSection } from './components/ObservationSection';
import { SelectedWorksSection } from './components/SelectedWorksSection';
import { QuoteSection } from './components/QuoteSection';
import { CTAFooter } from './components/CTAFooter';

// Wait, the GSAP import is just `import gsap from 'gsap'` and `import { ScrollTrigger } from 'gsap/ScrollTrigger'`.
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Add hide-cursor class to body on mount
    document.body.classList.add('hide-cursor');
    return () => {
      document.body.classList.remove('hide-cursor');
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen selection:bg-accent-amber selection:text-primary">
      <CustomCursor />
      <StickyNav />

      <main>
        <HeroSection />
        <ObservationSection />
        <SelectedWorksSection />
        <QuoteSection />
      </main>

      <CTAFooter />
    </div>
  );
}

export default App;
