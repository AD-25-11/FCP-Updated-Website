import fs from 'fs';
import { destinationsData } from './src/data/destinations.ts';

async function getWikiImageUrl(title: string) {
  try {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1000`);
    const data = await res.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    if (pages[pageId].thumbnail) {
      return pages[pageId].thumbnail.source;
    }
  } catch (e) {}
  return null;
}

const fallbacks: Record<string, string> = {
  "Mont Saint Michel": "Mont-Saint-Michel",
  "French Riviera": "Côte d'Azur",
  "Venice Canals": "Grand Canal (Venice)",
  "Florence Duomo": "Florence Cathedral",
  "La Sagrada Familia": "Sagrada Família",
  "Park Güell": "Parc Güell",
  "Plaza Mayor, Madrid": "Plaza Mayor, Madrid",
  "Big Ben & Parliament": "Palace of Westminster",
  "The Black Forest": "Black Forest",
  "Santorini Caldera": "Santorini",
  "Mykonos Windmills": "Mykonos",
  "Pyramids of Giza": "Giza pyramid complex",
  "Boulders Beach (Penguins)": "Boulders Beach",
  "Jemaa el-Fnaa, Marrakech": "Jemaa el-Fnaa",
  "Chefchaouen (Blue City)": "Chefchaouen",
  "Ait Benhaddou": "Aït Benhaddou",
  "Maasai Mara National Reserve": "Maasai Mara",
  "Diani Beach": "Diani Beach",
  "Zanzibar Beaches": "Zanzibar",
  "Stone Town": "Stone Town",
  "Statue of Liberty": "Statue of Liberty",
  "Old Quebec": "Old Quebec",
  "Cancun Beaches": "Cancún",
  "Cenotes of Yucatan": "Cenote",
  "Tamarindo Beach": "Tamarindo, Costa Rica",
  "Old Havana": "Old Havana",
  "Varadero Beach": "Varadero",
  "Viñales Valley": "Viñales Valley",
  "El Morro Castle": "Morro Castle (Havana)",
  "Copacabana Beach": "Copacabana, Rio de Janeiro",
  "Iguazu Falls (Argentine side)": "Iguazu Falls",
  "La Boca, Buenos Aires": "La Boca",
  "Mendoza Wine Region": "Mendoza Province",
  "Cartagena Old Town": "Cartagena, Colombia",
  "Medellín Metrocable": "Metrocable (Medellín)",
  "Marble Caves": "Marble Caves, Chile",
  "Bondi Beach": "Bondi Beach",
  "Great Ocean Road": "Great Ocean Road",
  "Hobbiton Movie Set": "Hobbiton Movie Set",
  "Rotorua Geothermal Parks": "Rotorua",
  "Mamanuca Islands": "Mamanuca Islands",
  "Yasawa Islands": "Yasawa Islands",
  "Coral Coast": "Coral Coast, Fiji",
  "Sri Siva Subramaniya Temple": "Sri Siva Subramaniya temple",
  "Bora Bora Lagoon": "Bora Bora",
  "Teahupo'o (Surfing)": "Teahupo'o",
  "Papeete Market": "Papeete",
  "Kokoda Track": "Kokoda Track",
  "Tufi Fjords": "Tufi",
  "Tari Basin": "Tari, Papua New Guinea"
};

async function run() {
  const newData = JSON.parse(JSON.stringify(destinationsData));

  for (const continent of newData) {
    for (const country of continent.countries) {
      for (const attraction of country.attractions) {
        let url = await getWikiImageUrl(attraction.name);
        if (!url && fallbacks[attraction.name]) {
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

  fs.writeFileSync('./src/data/destinations.ts', fileContent);
  console.log("Done updating destinations.ts");
}

run();
