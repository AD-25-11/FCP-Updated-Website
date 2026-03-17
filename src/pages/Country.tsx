import { useParams, Link } from 'react-router-dom';
import { destinationsData } from '../data/destinations';
import { motion } from 'motion/react';
import { MapPin, CheckCircle2, Lightbulb, ArrowLeft, Camera } from 'lucide-react';

export default function Country() {
  const { continentId, countryId } = useParams<{ continentId: string, countryId: string }>();
  
  const continent = destinationsData.find(c => c.id === continentId);
  const country = continent?.countries.find(c => c.id === countryId);

  if (!country || !continent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-slate-900 mb-4">Country Not Found</h2>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={country.heroImage} alt={country.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
          <Link to={`/continent/${continent.id}`} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm tracking-widest uppercase transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to {continent.name}
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif text-white mb-6"
          >
            {country.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-200 max-w-2xl font-light leading-relaxed"
          >
            {country.description}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Attractions */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif text-slate-900 mb-10 flex items-center gap-3">
              <Camera className="w-8 h-8 text-primary" /> Famous Destinations
            </h2>
            <div className="space-y-12">
              {country.attractions.map((attraction, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative h-80 rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-serif text-white flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-accent" /> {attraction.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="space-y-12">
            {/* Highlights */}
            <div className="bg-[#f5f2ed] p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-serif text-slate-900 mb-6">Travel Highlights</h3>
              <ul className="space-y-4">
                {country.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-light">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tour Experiences */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-serif mb-6">Recommended Tours</h3>
              <ul className="space-y-4">
                {country.tourExperiences.map((tour, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2"></div>
                    <span className="font-light">{tour}</span>
                  </li>
                ))}
              </ul>
              <Link to="/#booking" className="mt-8 block w-full bg-accent text-slate-900 text-center py-3 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors">
                Book a Tour
              </Link>
            </div>

            {/* Travel Tips */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-serif text-slate-900 mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-accent" /> Travel Tips
              </h3>
              <ul className="space-y-4">
                {country.travelTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <span className="text-primary font-bold">{index + 1}.</span>
                    <span className="font-light text-sm leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
