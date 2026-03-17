import { motion } from 'motion/react';
import { Plane, Map, Calendar, Users, MessageSquare, ArrowRight, CheckCircle2, Globe2, Ticket, Building2, Briefcase, Ship, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: <Plane />, title: "International Flight Booking", desc: "Seamless bookings to any destination worldwide." },
  { icon: <Plane className="rotate-45" />, title: "Domestic Flight Booking", desc: "Explore the beauty of the Philippines." },
  { icon: <CheckCircle2 />, title: "Visa Assistance", desc: "Hassle-free visa processing for your travels." },
  { icon: <Briefcase />, title: "Travel Document Processing", desc: "Passports, clearances, and more." },
  { icon: <Building2 />, title: "Hotel Reservations", desc: "Comfortable stays at the best rates." },
  { icon: <Compass />, title: "Tour Packages", desc: "Curated experiences for every traveler." },
  { icon: <Ship />, title: "Cruise Booking", desc: "Set sail on unforgettable ocean journeys." },
  { icon: <Users />, title: "Group Tours", desc: "Special rates and itineraries for large groups." },
  { icon: <Users />, title: "Family Travel Planning", desc: "Kid-friendly and relaxing family vacations." },
  { icon: <Briefcase />, title: "Corporate Travel Assistance", desc: "Efficient solutions for business trips." },
  { icon: <Ticket />, title: "Attraction Tickets", desc: "Skip the lines at popular tourist spots." },
  { icon: <Map />, title: "Custom Travel Itinerary Planning", desc: "Personalized travel plans just for you." },
];

import { destinationsData } from '../data/destinations';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            {/* Replace this source with your videos/travel.mp4 once uploaded to the public/videos folder */}
            <source src="https://cdn.pixabay.com/video/2020/04/18/36511-413184646_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 leading-[0.9] tracking-tight"
          >
            Discover <br/> <span className="italic font-light text-white/90">The World</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-2xl text-slate-300 mb-12 font-light tracking-wide max-w-2xl mx-auto"
          >
            Curated journeys and unforgettable experiences crafted exclusively for you by FCP Sunrise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="#booking" className="bg-accent text-slate-900 px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,223,0,0.3)]">
              Begin Your Journey
            </a>
            <a href="#destinations" className="text-white px-8 py-4 rounded-full font-medium text-sm tracking-widest uppercase border border-white/30 hover:bg-white/10 transition-all">
              Explore Destinations
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
        >
          <span className="text-xs uppercase tracking-[0.3em] mb-4">Scroll to explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-[#f5f2ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">About FCP Sunrise</h2>
              <h3 className="text-5xl font-serif text-slate-900 mb-8 leading-tight">
                Crafting <span className="italic text-slate-500">Extraordinary</span> Travel Experiences
              </h3>
              <div className="w-12 h-[1px] bg-slate-300 mb-8"></div>
              <p className="text-slate-600 mb-6 text-lg font-light leading-relaxed">
                We are your trusted partner in turning your travel dreams into reality. With branches in Sto. Tomas, Batangas and Canlubang, Laguna, we bring the world closer to you.
              </p>
              <p className="text-slate-600 mb-10 text-lg font-light leading-relaxed">
                Whether you're planning a quick domestic getaway, a complex international corporate trip, or a dream family vacation, our expert team handles every detail so you can focus on creating memories.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center">
                  <Globe2 className="w-6 h-6 text-slate-800" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-slate-900">10+ Years</h4>
                  <p className="text-sm tracking-widest uppercase text-slate-500 mt-1">Of Excellence</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Travel" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="absolute -bottom-8 -left-12 bg-white p-8 shadow-xl max-w-xs hidden md:block border border-slate-100">
                <p className="font-serif text-xl text-slate-900 mb-2 italic">"The most seamless vacation we've ever had."</p>
                <div className="w-8 h-[1px] bg-accent mb-3"></div>
                <div className="flex text-accent text-sm">
                  {'★★★★★'}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">What We Offer</h2>
            <h3 className="text-5xl font-serif text-slate-900 mb-6">Comprehensive Services</h3>
            <div className="w-12 h-[1px] bg-slate-300 mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg font-light">From flights to visas, we handle all the details so you don't have to.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-8 border border-slate-100 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-serif text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-32 bg-[#f5f2ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">Explore</h2>
              <h3 className="text-5xl font-serif text-slate-900 mb-6">Popular Destinations</h3>
              <div className="w-12 h-[1px] bg-slate-300 mb-6"></div>
              <p className="text-slate-600 text-lg font-light">Discover the world's most breathtaking locations with our curated packages.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationsData.map((dest, index) => (
              <motion.div 
                key={dest.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              >
                <Link to={`/continent/${dest.id}`} className="block group relative h-[500px] overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-10 w-full">
                    <h4 className="text-4xl font-serif text-white mb-4">{dest.name}</h4>
                    <div className="flex items-center gap-3 text-accent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <span className="font-medium tracking-widest uppercase text-xs">Explore Countries</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-32 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">Ready to go?</h2>
              <h3 className="text-5xl md:text-6xl font-serif text-white mb-8 leading-tight">Book Your Next <br/><span className="italic text-slate-300">Adventure</span></h3>
              <div className="w-12 h-[1px] bg-accent mb-8"></div>
              <p className="text-slate-300 text-lg mb-12 font-light leading-relaxed">
                Fill out the form with your travel details, and our expert agents will get back to you with the best options and quotes within 24 hours.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-6 text-white">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Best Price Guarantee</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">We match any comparable public price to ensure you get the best value.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 text-white">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">24/7 Concierge Support</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">We're here for you before, during, and after your trip for total peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white p-10 shadow-2xl"
            >
              <h4 className="font-serif text-3xl text-slate-900 mb-8">Inquiry Form</h4>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const destination = formData.get('destination');
                const date = formData.get('date');
                const travelers = formData.get('travelers');
                const message = formData.get('message');

                const subject = `New Travel Inquiry from ${name}`;
                const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDestination: ${destination}\nTravel Date: ${date}\nNumber of Travelers: ${travelers}\n\nMessage:\n${message}`;
                
                window.location.href = `mailto:fcpsunrisetravel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Full Name</label>
                    <input name="name" required type="text" className="w-full px-0 py-3 border-b border-slate-200 focus:border-primary outline-none transition-all bg-transparent text-slate-900 placeholder-slate-300" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Email Address</label>
                    <input name="email" required type="email" className="w-full px-0 py-3 border-b border-slate-200 focus:border-primary outline-none transition-all bg-transparent text-slate-900 placeholder-slate-300" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Phone Number</label>
                    <input name="phone" required type="tel" className="w-full px-0 py-3 border-b border-slate-200 focus:border-primary outline-none transition-all bg-transparent text-slate-900 placeholder-slate-300" placeholder="+63 900 000 0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Destination</label>
                    <input name="destination" required type="text" className="w-full px-0 py-3 border-b border-slate-200 focus:border-primary outline-none transition-all bg-transparent text-slate-900 placeholder-slate-300" placeholder="E.g., Tokyo, Japan" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Travel Date</label>
                    <div className="relative">
                      <Calendar className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                      <input name="date" required type="date" className="w-full pr-8 py-3 border-b border-slate-200 focus:border-primary outline-none transition-all bg-transparent text-slate-900" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Travelers</label>
                    <div className="relative">
                      <Users className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                      <input name="travelers" required type="number" min="1" className="w-full pr-8 py-3 border-b border-slate-200 focus:border-primary outline-none transition-all bg-transparent text-slate-900 placeholder-slate-300" placeholder="2" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Message / Special Requests</label>
                  <textarea name="message" rows={3} className="w-full px-0 py-3 border-b border-slate-200 focus:border-primary outline-none transition-all bg-transparent text-slate-900 placeholder-slate-300 resize-none" placeholder="Tell us more about your dream trip..."></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white py-4 font-bold text-sm tracking-widest uppercase hover:bg-primary transition-colors mt-8">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
