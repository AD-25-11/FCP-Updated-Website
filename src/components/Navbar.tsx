import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const navClass = isHome && !isScrolled ? 'bg-transparent text-white border-b border-white/10' : 'bg-white/95 backdrop-blur-md shadow-sm text-slate-900 border-b border-slate-100';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-2xl leading-none">FCP Sunrise</span>
              <span className="text-[9px] tracking-[0.2em] uppercase opacity-80 mt-1">Travel & Tours Inc.</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors">Home</Link>
            <a href="/#services" className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors">Services</a>
            <a href="/#destinations" className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors">Destinations</a>
            <a href="/#booking" className="bg-slate-900 text-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-accent hover:text-slate-900 transition-colors border border-slate-900 hover:border-accent">
              Book Now
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white text-slate-800 shadow-xl absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-medium p-2 hover:bg-slate-50 rounded-lg">Home</Link>
            <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="font-medium p-2 hover:bg-slate-50 rounded-lg">Services</a>
            <a href="/#destinations" onClick={() => setIsMobileMenuOpen(false)} className="font-medium p-2 hover:bg-slate-50 rounded-lg">Destinations</a>
            <a href="/#booking" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent text-slate-900 px-4 py-2 rounded-lg font-bold text-center shadow-md shadow-accent/20">Book Now</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
