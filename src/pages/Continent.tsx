import { useParams, Link } from 'react-router-dom';
import { destinationsData } from '../data/destinations';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Continent() {
  const { id } = useParams<{ id: string }>();
  const continent = destinationsData.find(c => c.id === id);

  if (!continent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-slate-900 mb-4">Continent Not Found</h2>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f2ed] pt-24">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={continent.image} alt={continent.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white tracking-wide"
          >
            {continent.name}
          </motion.h1>
        </div>
      </div>

      {/* Countries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">Discover</h2>
          <h3 className="text-4xl font-serif text-slate-900 mb-6">Countries in {continent.name}</h3>
          <div className="w-12 h-[1px] bg-slate-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {continent.countries.map((country, index) => (
            <motion.div 
              key={country.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/country/${continent.id}/${country.id}`} className="block group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={country.heroImage} 
                    alt={country.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-slate-800">
                    <MapPin className="w-3 h-3 text-primary" />
                    {country.attractions.length} Attractions
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-3xl font-serif text-slate-900 mb-3">{country.name}</h4>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-6 font-light leading-relaxed">{country.description}</p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm tracking-widest uppercase group-hover:text-accent transition-colors">
                    <span>Explore Country</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
