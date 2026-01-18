import About from "./components/About";
import BackgroundMusic from "./components/BackgroundMusic";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import LanguageToggle from "./components/LanguageToggle";
import Schedule from "./components/Schedule";
import Socials from "./components/Socials";
import { LanguageProvider } from "./context/LanguageContext";

import QuickLinks from "./components/QuickLinks";
import Works from "./components/Works";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-black">
        <BackgroundMusic />
        <LanguageToggle />
        <Hero />
        <About />
        <QuickLinks />
        <Works />
        <section id="schedule">
          <Schedule />
        </section>
        <Gallery />
        <Socials />
        
        <footer className="py-8 bg-zinc-950 text-center text-zinc-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Huang Xing Fan Site. Form @HuangXingTH</p>
        </footer>
      </main>
    </LanguageProvider>
  );
}
