import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import Submit from '@/pages/Submit';
import Winners from '@/pages/Winners';
import About from '@/pages/About';
import { SupabaseProvider } from '@/contexts/SupabaseContext';


function App() {
  return (
    <SupabaseProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/winners" element={<Winners />} /> */}
              <Route path="/submit" element={<Submit />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </SupabaseProvider>
  );
}

export default App;