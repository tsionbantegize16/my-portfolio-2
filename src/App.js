import React from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeIndicator from './components/DarkModeIndicator';

function App() {
  return (
    <DarkModeProvider>
      <div className="font-sans min-h-screen transition-all duration-500 ease-in-out bg-primary-50 dark:bg-primary-400 text-primary-400 dark:text-primary-50">
        <Header />
        <main className="pt-20"> {/* Add padding-top to account for fixed header */}
          <Home />
          <About />
          <Skills />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <DarkModeIndicator />
      </div>
    </DarkModeProvider>
  );
}

export default App;
