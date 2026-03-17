import fs from 'fs';
import { destinationsData } from '../../src/data/destinations.ts';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const headers = {
  "User-Agent": "AIStudioBot/1.0 (adrianhidalgo132005@gmail.com)"
};

async function getWikiImageUrl(query: string) {
  try {
    const searchRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&srlimit=1`, { headers });
    const searchData = await searchRes.json();
    if (searchData.query && searchData.query.search && searchData.query.search.length > 0) {
      const title = searchData.query.search[0].title;
      
      await delay(100);

      const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1000`, { headers });
      const data = await res.json();
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      if (pages[pageId].thumbnail) {
        return pages[pageId].thumbnail.source;
      }
    }
  } catch (e) {
    console.error("Error fetching", query, e);
  }
  return null;
}

const fallbacks: Record<string, string> = {
  "Tokyo Shibuya Crossing": "Shibuya Crossing",
  "Kyoto Temples": "Kinkaku-ji",
  "Arashiyama Bamboo Forest": "Arashiyama",
  "Boracay Island": "Boracay",
  "Palawan Underground River": "Puerto Princesa Subterranean River National Park",
  "Intramuros, Manila": "Intramuros",
  "Grand Palace, Bangkok": "Grand Palace",
  "Doi Suthep, Chiang Mai": "Wat Phra That Doi Suthep",
  "Gyeongbokgung Palace": "Gyeongbokgung",
  "DMZ (Demilitarized Zone)": "Korean Demilitarized Zone",
  "Li River, Guilin": "Li River",
  "The Bund, Shanghai": "The Bund",
  "Jaipur (Pink City)": "Jaipur",
  "Kerala Backwaters": "Kerala backwaters",
  "Goa Beaches": "Goa",
  "Borobudur Temple": "Borobudur",
  "Raja Ampat": "Raja Ampat Islands",
  "Ha Long Bay": "Hạ Long Bay",
  "Hoi An Ancient Town": "Hội An",
  "Phong Nha Caves": "Phong Nha-Kẻ Bàng National Park",
  "Cu Chi Tunnels": "Củ Chi tunnels",
  "Sapa Terraces": "Sa Pa",
  "Louvre Museum": "Louvre",
  "Florence Duomo": "Florence Cathedral",
  "La Sagrada Familia": "Sagrada Família",
  "Park Güell": "Parc Güell",
  "Plaza Mayor, Madrid": "Plaza Mayor, Madrid",
  "Big Ben & Parliament": "Palace of Westminster",
  "The British Museum": "British Museum",
  "The Black Forest": "Black Forest",
  "Berlin Wall Memorial": "Berlin Wall",
  "Meteora Monasteries": "Meteora",
  "Palace of Knossos": "Knossos",
  "Great Sphinx": "Great Sphinx of Giza",
  "Boulders Beach (Penguins)": "Boulders Beach",
  "Sahara Desert": "Sahara",
  "Amboseli National Park": "Amboseli National Park",
  "Lake Nakuru": "Lake Nakuru",
  "Mount Kenya": "Mount Kenya",
  "Diani Beach": "Diani Beach",
  "Mount Kilimanjaro": "Mount Kilimanjaro",
  "Serengeti National Park": "Serengeti National Park",
  "Ngorongoro Crater": "Ngorongoro Conservation Area",
  "Zanzibar Beaches": "Zanzibar",
  "Stone Town": "Stone Town",
  "Statue of Liberty": "Statue of Liberty",
  "Grand Canyon": "Grand Canyon",
  "Yellowstone National Park": "Yellowstone National Park",
  "Golden Gate Bridge": "Golden Gate Bridge",
  "Times Square": "Times Square",
  "Banff National Park": "Banff National Park",
  "Niagara Falls": "Niagara Falls",
  "CN Tower, Toronto": "CN Tower",
  "Old Quebec": "Old Quebec",
  "Stanley Park, Vancouver": "Stanley Park",
  "Chichén Itzá": "Chichen Itza",
  "Cancun Beaches": "Cancún",
  "Teotihuacan": "Teotihuacan",
  "Tulum Ruins": "Tulum",
  "Cenotes of Yucatan": "Cenote",
  "Arenal Volcano": "Arenal Volcano",
  "Monteverde Cloud Forest": "Monteverde Cloud Forest Reserve",
  "Tortuguero National Park": "Tortuguero National Park",
  "Tamarindo Beach": "Tamarindo, Costa Rica",
  "Old Havana": "Old Havana",
  "Varadero Beach": "Varadero",
  "Viñales Valley": "Viñales Valley",
  "Trinidad": "Trinidad, Cuba",
  "El Morro Castle": "Morro Castle (Havana)",
  "Christ the Redeemer": "Christ the Redeemer (statue)",
  "Copacabana Beach": "Copacabana, Rio de Janeiro",
  "Iguazu Falls": "Iguazu Falls",
  "Amazon Rainforest": "Amazon rainforest",
  "Sugarloaf Mountain": "Sugarloaf Mountain",
  "Machu Picchu": "Machu Picchu",
  "Sacred Valley": "Sacred Valley",
  "Lake Titicaca": "Lake Titicaca",
  "Colca Canyon": "Colca Canyon",
  "Nazca Lines": "Nazca Lines",
  "Perito Moreno Glacier": "Perito Moreno Glacier",
  "Iguazu Falls (Argentine side)": "Iguazu Falls",
  "Mount Fitz Roy": "Fitz Roy",
  "La Boca, Buenos Aires": "La Boca",
  "Mendoza Wine Region": "Mendoza Province",
  "Cartagena Old Town": "Cartagena, Colombia",
  "Cocora Valley": "Cocora Valley",
  "Tayrona National Park": "Tayrona National Park",
  "Salt Cathedral of Zipaquirá": "Salt Cathedral of Zipaquirá",
  "Medellín Metrocable": "Metrocable (Medellín)",
  "Torres del Paine National Park": "Torres del Paine National Park",
  "Atacama Desert": "Atacama Desert",
  "Easter Island (Rapa Nui)": "Easter Island",
  "Valparaíso": "Valparaíso",
  "Marble Caves": "Marble Caves, Chile",
  "Sydney Opera House": "Sydney Opera House",
  "Great Barrier Reef": "Great Barrier Reef",
  "Uluru (Ayers Rock)": "Uluru",
  "Bondi Beach": "Bondi Beach",
  "Great Ocean Road": "Great Ocean Road",
  "Milford Sound": "Milford Sound",
  "Hobbiton Movie Set": "Hobbiton Movie Set",
  "Aoraki / Mount Cook": "Aoraki / Mount Cook",
  "Rotorua Geothermal Parks": "Rotorua",
  "Franz Josef Glacier": "Franz Josef Glacier",
  "Mamanuca Islands": "Mamanuca Islands",
  "Yasawa Islands": "Yasawa Islands",
  "Coral Coast": "Coral Coast, Fiji",
  "Sri Siva Subramaniya Temple": "Sri Siva Subramaniya temple",
  "Bouma National Heritage Park": "Taveuni",
  "Bora Bora Lagoon": "Bora Bora",
  "Mount Otemanu": "Mount Otemanu",
  "Moorea": "Mo'orea",
  "Teahupo'o (Surfing)": "Teahupo'o",
  "Papeete Market": "Papeete",
  "Kokoda Track": "Kokoda Track",
  "Tufi Fjords": "Tufi",
  "Mount Wilhelm": "Mount Wilhelm",
  "Sepik River": "Sepik",
  "Tari Basin": "Tari, Papua New Guinea"
};

async function run() {
  const newData = JSON.parse(JSON.stringify(destinationsData));

  for (const continent of newData) {
    for (const country of continent.countries) {
      for (const attraction of country.attractions) {
        // Skip if it's already a valid wikimedia URL
        if (attraction.image.includes('wikimedia.org')) {
          continue;
        }

        await delay(200); // Rate limit

        let url = await getWikiImageUrl(attraction.name);
        if (!url && fallbacks[attraction.name]) {
          await delay(200);
          url = await getWikiImageUrl(fallbacks[attraction.name]);
        }
        if (url) {
          attraction.image = url;
          console.log(`✅ ${attraction.name}`);
        } else {
          console.log(`❌ Failed: ${attraction.name}`);
        }
      }
      // Set country hero image to the first attraction's image
      country.heroImage = country.attractions[0].image;
    }
  }

  const fileContent = `export interface Attraction {
  name: string;
  image: string;
}

export interface Country {
  id: string;
  name: string;
  description: string;
  heroImage: string;
  attractions: Attraction[];
  highlights: string[];
  tourExperiences: string[];
  travelTips: string[];
}

export interface Continent {
  id: string;
  name: string;
  image: string;
  countries: Country[];
}

export const destinationsData: Continent[] = ${JSON.stringify(newData, null, 2)};
`;

  fs.writeFileSync('../../src/data/destinations.ts', fileContent);
  console.log("Done updating destinations.ts");
}

run();
