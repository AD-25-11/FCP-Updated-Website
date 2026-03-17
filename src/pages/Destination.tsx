import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useEffect } from 'react';

const destinationData: Record<string, { name: string, image: string, desc: string, attractions: { name: string, image: string, desc: string }[] }> = {
  'asia': {
    name: 'Asia',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    desc: 'A continent of contrasts, from hyper-modern cities to ancient temples.',
    attractions: [
      { name: 'Mount Fuji, Japan', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Japan\'s iconic sacred volcano.' },
      { name: 'Great Wall of China', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'The monumental ancient fortification.' },
      { name: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Island of the Gods, known for its beaches and temples.' },
      { name: 'Taj Mahal, India', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'The magnificent marble mausoleum.' },
    ]
  },
  'europe': {
    name: 'Europe',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    desc: 'Rich history, diverse cultures, and stunning architecture.',
    attractions: [
      { name: 'Eiffel Tower, France', image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'The iconic symbol of Paris.' },
      { name: 'Colosseum, Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'The grand amphitheater of ancient Rome.' },
      { name: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Stunning white-washed buildings and sunsets.' },
      { name: 'Swiss Alps, Switzerland', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Majestic mountains perfect for skiing and hiking.' },
    ]
  },
  'africa': {
    name: 'Africa',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    desc: 'Incredible wildlife, vast landscapes, and vibrant cultures.',
    attractions: [
      { name: 'Serengeti, Tanzania', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Home to the Great Migration.' },
      { name: 'Pyramids of Giza, Egypt', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Ancient wonders of the world.' },
      { name: 'Victoria Falls, Zambia/Zimbabwe', image: 'https://images.unsplash.com/photo-1603201236596-eb1a63eb0ebe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'One of the largest and most spectacular waterfalls.' },
      { name: 'Cape Town, South Africa', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'A beautiful city nestled beneath Table Mountain.' },
    ]
  },
  'north-america': {
    name: 'North America',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    desc: 'From bustling metropolises to breathtaking national parks.',
    attractions: [
      { name: 'Grand Canyon, USA', image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'A massive, awe-inspiring natural wonder.' },
      { name: 'Banff National Park, Canada', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Stunning turquoise lakes and rocky peaks.' },
      { name: 'New York City, USA', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'The city that never sleeps.' },
      { name: 'Chichen Itza, Mexico', image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Ancient Mayan ruins.' },
    ]
  },
  'south-america': {
    name: 'South America',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    desc: 'Lush rainforests, towering Andes, and passionate cultures.',
    attractions: [
      { name: 'Machu Picchu, Peru', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'The legendary lost city of the Incas.' },
      { name: 'Christ the Redeemer, Brazil', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Iconic statue overlooking Rio de Janeiro.' },
      { name: 'Patagonia, Argentina/Chile', image: 'https://images.unsplash.com/photo-1552046122-03184de85e08?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Dramatic landscapes at the end of the world.' },
      { name: 'Galapagos Islands, Ecuador', image: 'https://images.unsplash.com/photo-1518182170546-076616fd6225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Unique wildlife and pristine nature.' },
    ]
  },
  'australia': {
    name: 'Australia & Oceania',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    desc: 'Vast outbacks, stunning reefs, and laid-back cities.',
    attractions: [
      { name: 'Sydney Opera House, Australia', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'The iconic architectural masterpiece.' },
      { name: 'Great Barrier Reef, Australia', image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'The world\'s largest coral reef system.' },
      { name: 'Milford Sound, New Zealand', image: 'https://images.unsplash.com/photo-1600208639272-111d4e022020?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Breathtaking fjords and waterfalls.' },
      { name: 'Bora Bora, French Polynesia', image: 'https://images.unsplash.com/photo-1589394815804-964ce0fa58f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'The ultimate tropical paradise.' },
    ]
  }
};

export default function Destination() {
  const { id } = useParams<{ id: string }>();
  const data = id ? destinationData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Destination not found</h2>
          <Link to="/" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pb-24">
      {/* Hero */}
      <div className="relative h-[60vh] w-full">
        <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              {data.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl max-w-2xl mx-auto"
            >
              {data.desc}
            </motion.p>
          </div>
        </div>
        <Link to="/" className="absolute top-24 left-8 glass text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/20 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </div>

      {/* Attractions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Must Visit</h2>
          <h3 className="text-4xl font-bold text-slate-900">Popular Attractions in {data.name}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.attractions.map((attraction, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white flex flex-col sm:flex-row h-auto sm:h-64"
            >
              <div className="w-full sm:w-2/5 h-64 sm:h-full overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold text-sm uppercase tracking-wider">Attraction</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{attraction.name}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{attraction.desc}</p>
                <a href="/#booking" className="inline-flex items-center font-semibold text-primary hover:text-blue-700 transition-colors">
                  Add to Itinerary <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
