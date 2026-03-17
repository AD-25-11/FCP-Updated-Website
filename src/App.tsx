import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Continent from './pages/Continent';
import Country from './pages/Country';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination/:id" element={<Destination />} />
            <Route path="/continent/:id" element={<Continent />} />
            <Route path="/country/:continentId/:countryId" element={<Country />} />
          </Routes>
        </main>
        <Footer />
        <MusicPlayer />
      </div>
    </Router>
  );
}
