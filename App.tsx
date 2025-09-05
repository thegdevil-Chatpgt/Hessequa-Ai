import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Consulting from './components/Consulting';
import Academy from './components/Academy';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-sandstone-beige font-sans">
      <Header />
      <main>
        <Hero />
        <Consulting />
        <Academy />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
