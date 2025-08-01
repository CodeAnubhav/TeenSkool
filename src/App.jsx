import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from './pages/Contact';
import ProgramDetail from './pages/ProgramDetail';
import { SupabaseProvider } from '@/contexts/SupabaseContext';

// NOTE: I've removed the old wrapper div with the dark gradient.
// The new light theme from index.css will now apply correctly.
function App() {
  return (
    <SupabaseProvider>
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/program/:id" element={<ProgramDetail />} />
            {/* You can re-enable these routes when the pages are ready */}
            {/* <Route path="/winners" element={<Winners />} /> */}
            {/* <Route path="/submit" element={<Submit />} /> */}
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </Router>
    </SupabaseProvider>
  );
}

export default App;
