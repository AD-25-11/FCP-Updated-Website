import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 text-white">
              <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl leading-none">FCP Sunrise</span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-slate-500 mt-1">Travel & Tours Inc.</span>
              </div>
            </Link>
            <p className="text-sm mb-8 font-light leading-relaxed">Creating Memories. Breaking the Distance. Your premier partner in luxury and corporate travel.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-accent hover:text-slate-900 hover:border-accent transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-accent hover:text-slate-900 hover:border-accent transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-accent hover:text-slate-900 hover:border-accent transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="/#services" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="/#destinations" className="hover:text-accent transition-colors">Destinations</a></li>
              <li><a href="/#booking" className="hover:text-accent transition-colors">Book a Trip</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-serif text-xl mb-6">Our Locations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-xs tracking-widest uppercase">
                  <MapPin className="w-4 h-4 text-accent" /> Branch 1
                </h4>
                <p className="text-xs mb-3 font-light leading-relaxed">Check Point Mall<br/>Philippines</p>
                <p className="text-xs flex items-center gap-2 font-light"><Phone className="w-3 h-3 text-slate-600" /> +63 912 345 6789</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-xs tracking-widest uppercase">
                  <MapPin className="w-4 h-4 text-accent" /> Branch 2
                </h4>
                <p className="text-xs mb-3 font-light leading-relaxed">Sto. Tomas, Batangas<br/>Philippines</p>
                <p className="text-xs flex items-center gap-2 font-light"><Phone className="w-3 h-3 text-slate-600" /> +63 998 765 4321</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-xs tracking-widest uppercase">
                  <MapPin className="w-4 h-4 text-accent" /> Branch 3
                </h4>
                <p className="text-xs mb-3 font-light leading-relaxed">Canlubang, Laguna<br/>Philippines</p>
                <p className="text-xs flex items-center gap-2 font-light"><Phone className="w-3 h-3 text-slate-600" /> +63 945 678 9012</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800 text-sm flex items-center gap-3 font-light">
              <Mail className="w-4 h-4 text-accent" /> fcpsunrisetravel@gmail.com
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-900 text-xs font-light text-center flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} FCP Sunrise Travel & Tours Inc. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
