import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Player from './components/Player';
import { CaptionsProvider } from './CaptionContext';
import Hero from './components/Hero';

function App() {
  return (
    <CaptionsProvider>
      <div className="min-h-screen w-full bg-gray-100">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/main" element={<Hero />} />
            <Route path="/main/:videoID" element={<Player />} />
          </Routes>
        </Router>
      </div>
    </CaptionsProvider>
  );
}

export default App;
