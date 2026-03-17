export interface Attraction {
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

export const destinationsData: Continent[] = [
  {
    "id": "asia",
    "name": "Asia",
    "image": "/asia.jpg",
    "countries": [
      {
        "id": "japan",
        "name": "Japan",
        "description": "Japan is known for its rich culture, modern cities, ancient temples, and beautiful landscapes.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/1280px-View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg",
        "attractions": [
          {
            "name": "Mount Fuji",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/1280px-View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg"
          },
          {
            "name": "Tokyo Shibuya Crossing",
            "image": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Kyoto Temples",
            "image": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Osaka Castle",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Osaka_Castle_02bs3200.jpg/1280px-Osaka_Castle_02bs3200.jpg"
          },
          {
            "name": "Arashiyama Bamboo Forest",
            "image": "https://images.unsplash.com/photo-1510853675132-58241c941e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Cherry Blossom Viewing",
          "Authentic Sushi & Ramen",
          "Bullet Train Rides",
          "Onsen Hot Springs"
        ],
        "tourExperiences": [
          "Tokyo City Tour",
          "Kyoto Cultural Heritage Walk",
          "Osaka Food Crawl",
          "Mt. Fuji Day Trip"
        ],
        "travelTips": [
          "Get a JR Pass for unlimited train travel.",
          "Learn basic Japanese phrases.",
          "Carry cash as some traditional places do not accept cards."
        ]
      },
      {
        "id": "philippines",
        "name": "Philippines",
        "description": "The Philippines is an archipelago of 7,641 islands known for its pristine beaches, vibrant festivals, and warm hospitality.",
        "heroImage": "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Boracay Island",
            "image": "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Palawan Underground River",
            "image": "https://images.unsplash.com/photo-1531761535209-180857e963b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Chocolate Hills",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Chocolate_Hills_Bohol.JPG/1280px-Chocolate_Hills_Bohol.JPG"
          },
          {
            "name": "Banaue Rice Terraces",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Banaue-terrace.JPG/1280px-Banaue-terrace.JPG"
          },
          {
            "name": "Intramuros, Manila",
            "image": "https://images.unsplash.com/photo-1583251633146-d94007321557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "World-class Beaches",
          "Rich Spanish Colonial History",
          "Incredible Scuba Diving",
          "Delicious Local Cuisine"
        ],
        "tourExperiences": [
          "El Nido Island Hopping",
          "Cebu Canyoneering",
          "Manila Historical Tour",
          "Bohol Countryside Tour"
        ],
        "travelTips": [
          "Best time to visit is during the dry season (Nov-Apr).",
          "English is widely spoken.",
          "Try the local street food like Balut and Taho."
        ]
      },
      {
        "id": "thailand",
        "name": "Thailand",
        "description": "Thailand is known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha.",
        "heroImage": "https://images.unsplash.com/photo-1582468546235-9bf31e5bc4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Grand Palace, Bangkok",
            "image": "https://images.unsplash.com/photo-1582468546235-9bf31e5bc4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Phi Phi Islands",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/KohPhiPhi.JPG/1280px-KohPhiPhi.JPG"
          },
          {
            "name": "Ayutthaya Historical Park",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Ayutthaya_World_Heritage_sign.jpg/1280px-Ayutthaya_World_Heritage_sign.jpg"
          },
          {
            "name": "Doi Suthep, Chiang Mai",
            "image": "https://images.unsplash.com/photo-1580100586938-02822d99c4a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Railay Beach",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Railay_Beach_5.jpg/1280px-Railay_Beach_5.jpg"
          }
        ],
        "highlights": [
          "Vibrant Street Food",
          "Beautiful Temples",
          "Tropical Islands",
          "Thai Massage"
        ],
        "tourExperiences": [
          "Bangkok Temple Tour",
          "Phuket Island Hopping",
          "Chiang Mai Elephant Sanctuary",
          "Thai Cooking Class"
        ],
        "travelTips": [
          "Dress modestly at temples.",
          "Negotiate prices at markets.",
          "Respect the royal family."
        ]
      },
      {
        "id": "south-korea",
        "name": "South Korea",
        "description": "South Korea offers a mix of high-tech cities, ancient palaces, beautiful mountains, and a globally influential pop culture.",
        "heroImage": "https://images.unsplash.com/photo-1546874177-9e664107314e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Gyeongbokgung Palace",
            "image": "https://images.unsplash.com/photo-1546874177-9e664107314e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "N Seoul Tower",
            "image": "https://upload.wikimedia.org/wikipedia/en/a/a6/NamsanTower_%28Cropped%29.jpeg"
          },
          {
            "name": "Jeju Island",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Jeju_Island.jpg/1280px-Jeju_Island.jpg"
          },
          {
            "name": "Bukchon Hanok Village",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bukchon_Hanok_Village_01.jpg/1280px-Bukchon_Hanok_Village_01.jpg"
          },
          {
            "name": "DMZ (Demilitarized Zone)",
            "image": "https://images.unsplash.com/photo-1578469645762-4299b95490b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "K-Pop and K-Drama Culture",
          "Korean BBQ",
          "High-Speed Internet",
          "Historic Palaces"
        ],
        "tourExperiences": [
          "Seoul City Tour",
          "Jeju Island Nature Tour",
          "DMZ Guided Tour",
          "Korean Street Food Tasting"
        ],
        "travelTips": [
          "Use T-money card for public transport.",
          "Learn basic Korean phrases.",
          "Tipping is not customary."
        ]
      },
      {
        "id": "china",
        "name": "China",
        "description": "China is a vast country with a rich history, featuring ancient wonders, modern metropolises, and diverse landscapes.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
        "attractions": [
          {
            "name": "Great Wall of China",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
          },
          {
            "name": "Forbidden City",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/The_Forbidden_City_-_View_from_Coal_Hill.jpg/1280px-The_Forbidden_City_-_View_from_Coal_Hill.jpg"
          },
          {
            "name": "Terracotta Army",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/1280px-51714-Terracota-Army.jpg"
          },
          {
            "name": "Li River, Guilin",
            "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "The Bund, Shanghai",
            "image": "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Ancient History",
          "Diverse Regional Cuisines",
          "Modern Architecture",
          "Giant Pandas"
        ],
        "tourExperiences": [
          "Great Wall Hiking",
          "Beijing City Tour",
          "Yangtze River Cruise",
          "Chengdu Panda Base Visit"
        ],
        "travelTips": [
          "Download a VPN before arriving.",
          "Have your destination written in Chinese characters.",
          "Carry cash, though mobile payments are dominant."
        ]
      },
      {
        "id": "india",
        "name": "India",
        "description": "India is a vibrant country known for its rich history, diverse culture, stunning architecture, and flavorful cuisine.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg",
        "attractions": [
          {
            "name": "Taj Mahal",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg"
          },
          {
            "name": "Jaipur (Pink City)",
            "image": "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Varanasi",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg/1280px-Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg"
          },
          {
            "name": "Kerala Backwaters",
            "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Goa Beaches",
            "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Spiritual Sites",
          "Rich Spices and Food",
          "Colorful Festivals",
          "Historical Monuments"
        ],
        "tourExperiences": [
          "Golden Triangle Tour",
          "Taj Mahal Sunrise Visit",
          "Kerala Houseboat Stay",
          "Rajasthan Desert Safari"
        ],
        "travelTips": [
          "Drink only bottled water.",
          "Dress modestly.",
          "Be prepared for sensory overload."
        ]
      },
      {
        "id": "indonesia",
        "name": "Indonesia",
        "description": "Indonesia is a massive archipelago known for its volcanic islands, diverse wildlife, and vibrant cultures.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bali_in_Indonesia_%28special_marker%29.svg/1280px-Bali_in_Indonesia_%28special_marker%29.svg.png",
        "attractions": [
          {
            "name": "Bali",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bali_in_Indonesia_%28special_marker%29.svg/1280px-Bali_in_Indonesia_%28special_marker%29.svg.png"
          },
          {
            "name": "Borobudur Temple",
            "image": "https://images.unsplash.com/photo-1584814524419-7509f6b0f16e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Komodo National Park",
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Komodo_dragon_at_Komodo_National_Park.jpg"
          },
          {
            "name": "Mount Bromo",
            "image": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Bromo-Semeru-Batok-Widodaren.jpg"
          },
          {
            "name": "Raja Ampat",
            "image": "https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Beautiful Beaches",
          "Ancient Temples",
          "Unique Wildlife",
          "Rich Culture"
        ],
        "tourExperiences": [
          "Bali Island Tour",
          "Komodo Dragon Trek",
          "Mount Bromo Sunrise Tour",
          "Raja Ampat Diving"
        ],
        "travelTips": [
          "Respect local customs and dress codes.",
          "Be prepared for tropical weather.",
          "Learn a few basic Indonesian phrases."
        ]
      },
      {
        "id": "vietnam",
        "name": "Vietnam",
        "description": "Vietnam is known for its bustling cities, stunning natural landscapes, and delicious street food.",
        "heroImage": "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Ha Long Bay",
            "image": "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Hoi An Ancient Town",
            "image": "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Phong Nha Caves",
            "image": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Cu Chi Tunnels",
            "image": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Sapa Terraces",
            "image": "https://images.unsplash.com/photo-1543637005-4d639a4e16de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Incredible Street Food",
          "Rich History",
          "Stunning Scenery",
          "Affordable Travel"
        ],
        "tourExperiences": [
          "Ha Long Bay Cruise",
          "Hoi An Lantern Making",
          "Mekong Delta Tour",
          "Hanoi Street Food Tour"
        ],
        "travelTips": [
          "Be careful when crossing the street.",
          "Bargain at markets.",
          "Try the local coffee."
        ]
      }
    ]
  },
  {
    "id": "europe",
    "name": "Europe",
    "image": "/europe.jpg",
    "countries": [
      {
        "id": "france",
        "name": "France",
        "description": "France is one of the world's top travel destinations known for art, cuisine, and historic landmarks.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1280px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        "attractions": [
          {
            "name": "Eiffel Tower",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1280px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"
          },
          {
            "name": "Louvre Museum",
            "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Mont Saint Michel",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Mont-Saint-Michel_vu_du_ciel.jpg/1280px-Mont-Saint-Michel_vu_du_ciel.jpg"
          },
          {
            "name": "Palace of Versailles",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Versailles-Chateau-Jardins02.jpg/1280px-Versailles-Chateau-Jardins02.jpg"
          },
          {
            "name": "French Riviera",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/%C3%88ze_und_Cap_Ferrat-Grande_Corniche.jpg/1280px-%C3%88ze_und_Cap_Ferrat-Grande_Corniche.jpg"
          }
        ],
        "highlights": [
          "Fine Dining and Wine",
          "World-Renowned Art Galleries",
          "Romantic Cityscapes",
          "Historic Chateaus"
        ],
        "tourExperiences": [
          "Paris City Tour & Seine Cruise",
          "Wine Tasting in Bordeaux",
          "French Riviera Yacht Tour",
          "Normandy D-Day Beaches"
        ],
        "travelTips": [
          "Learn a few basic French greetings.",
          "Dinner is typically served later in the evening.",
          "Validate your train tickets before boarding."
        ]
      },
      {
        "id": "italy",
        "name": "Italy",
        "description": "Italy is renowned for its rich history, art, architecture, and world-class cuisine.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg",
        "attractions": [
          {
            "name": "Colosseum",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg"
          },
          {
            "name": "Venice Canals",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/1280px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg"
          },
          {
            "name": "Leaning Tower of Pisa",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Italy_-_Pisa_-_Leaning_Tower.jpg/1280px-Italy_-_Pisa_-_Leaning_Tower.jpg"
          },
          {
            "name": "Amalfi Coast",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Amalfi_Coast_%28Italy%2C_October_2020%29_-_75_%2850558355441%29.jpg/1280px-Amalfi_Coast_%28Italy%2C_October_2020%29_-_75_%2850558355441%29.jpg"
          },
          {
            "name": "Florence Duomo",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/1280px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg"
          }
        ],
        "highlights": [
          "Ancient Roman Ruins",
          "Renaissance Art",
          "Authentic Pizza and Pasta",
          "Beautiful Coastlines"
        ],
        "tourExperiences": [
          "Rome Historical Walking Tour",
          "Venice Gondola Ride",
          "Tuscany Wine Tasting",
          "Pompeii Guided Tour"
        ],
        "travelTips": [
          "Cover shoulders and knees when visiting churches.",
          "Cappuccino is typically a morning drink.",
          "Beware of pickpockets in crowded tourist areas."
        ]
      },
      {
        "id": "spain",
        "name": "Spain",
        "description": "Spain offers a vibrant culture, stunning architecture, beautiful beaches, and delicious tapas.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941.jpg/1280px-%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941.jpg",
        "attractions": [
          {
            "name": "La Sagrada Familia",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941.jpg/1280px-%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941.jpg"
          },
          {
            "name": "Alhambra",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/1280px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg"
          },
          {
            "name": "Park Güell",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Parc_guell_-_panoramio.jpg/1280px-Parc_guell_-_panoramio.jpg"
          },
          {
            "name": "Ibiza",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Ibiza_flag.svg/1280px-Ibiza_flag.svg.png"
          },
          {
            "name": "Plaza Mayor, Madrid",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Madrid_Plaza_Mayor_%2848733706273%29.jpg/1280px-Madrid_Plaza_Mayor_%2848733706273%29.jpg"
          }
        ],
        "highlights": [
          "Flamenco Dancing",
          "Tapas and Paella",
          "Gaudí Architecture",
          "Lively Festivals"
        ],
        "tourExperiences": [
          "Barcelona Architecture Tour",
          "Seville Flamenco Show",
          "Madrid Tapas Crawl",
          "Granada Alhambra Visit"
        ],
        "travelTips": [
          "Dinner is eaten very late (9 PM - 11 PM).",
          "Siesta time means some shops may close in the afternoon.",
          "Learn basic Spanish phrases."
        ]
      },
      {
        "id": "uk",
        "name": "United Kingdom",
        "description": "The UK is steeped in history, featuring royal palaces, historic castles, and vibrant modern cities.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Houses_of_Parliament_in_2022_%28cropped%29.jpg/1280px-Houses_of_Parliament_in_2022_%28cropped%29.jpg",
        "attractions": [
          {
            "name": "Big Ben & Parliament",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Houses_of_Parliament_in_2022_%28cropped%29.jpg/1280px-Houses_of_Parliament_in_2022_%28cropped%29.jpg"
          },
          {
            "name": "Stonehenge",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/1280px-Stonehenge2007_07_30.jpg"
          },
          {
            "name": "Tower of London",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/1280px-Tower_of_London_from_the_Shard_%288515883950%29.jpg"
          },
          {
            "name": "Edinburgh Castle",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Edinburgh_Castle_-_aerial_-_2025-04-19_03.jpg/1280px-Edinburgh_Castle_-_aerial_-_2025-04-19_03.jpg"
          },
          {
            "name": "The British Museum",
            "image": "https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Royal History",
          "Pub Culture",
          "World-Class Museums",
          "Scenic Countryside"
        ],
        "tourExperiences": [
          "London Hop-On Hop-Off Bus",
          "Stonehenge & Bath Day Trip",
          "Scottish Highlands Tour",
          "Harry Potter Studio Tour"
        ],
        "travelTips": [
          "Look right before crossing the street (they drive on the left).",
          "Stand on the right on escalators.",
          "Bring an umbrella; weather can be unpredictable."
        ]
      },
      {
        "id": "germany",
        "name": "Germany",
        "description": "Germany is known for its rich history, fairy-tale castles, vibrant cities, and Oktoberfest.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/1280px-Schloss_Neuschwanstein_2013.jpg",
        "attractions": [
          {
            "name": "Neuschwanstein Castle",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/1280px-Schloss_Neuschwanstein_2013.jpg"
          },
          {
            "name": "Brandenburg Gate",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1280px-Brandenburger_Tor_abends.jpg"
          },
          {
            "name": "Cologne Cathedral",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/K%C3%B6lner_Dom_-_Westfassade_2022_ohne_Ger%C3%BCst-0968_b.jpg/1280px-K%C3%B6lner_Dom_-_Westfassade_2022_ohne_Ger%C3%BCst-0968_b.jpg"
          },
          {
            "name": "The Black Forest",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Blick_vom_Hohfelsen.jpg/1280px-Blick_vom_Hohfelsen.jpg"
          },
          {
            "name": "Berlin Wall Memorial",
            "image": "https://images.unsplash.com/photo-1590049987979-247d515b61fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Bavarian Culture",
          "Historic Landmarks",
          "Beer Gardens",
          "Christmas Markets"
        ],
        "tourExperiences": [
          "Berlin History Walking Tour",
          "Rhine River Cruise",
          "Munich Brewery Tour",
          "Bavarian Castles Day Trip"
        ],
        "travelTips": [
          "Always carry some cash.",
          "Recycling is taken very seriously.",
          "Don't walk in the bike lanes."
        ]
      },
      {
        "id": "greece",
        "name": "Greece",
        "description": "Greece is the cradle of Western civilization, known for ancient ruins, whitewashed villages, and beautiful islands.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg/1280px-1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg",
        "attractions": [
          {
            "name": "Acropolis of Athens",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg/1280px-1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg"
          },
          {
            "name": "Santorini Caldera",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/2011_Dimos_Thiras.png/1280px-2011_Dimos_Thiras.png"
          },
          {
            "name": "Meteora Monasteries",
            "image": "https://images.unsplash.com/photo-1516483638261-f40af5edca57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Mykonos Windmills",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/2011_Dimos_Mykonou.png/1280px-2011_Dimos_Mykonou.png"
          },
          {
            "name": "Palace of Knossos",
            "image": "https://images.unsplash.com/photo-1551042614-2e9148d287e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Ancient Mythology",
          "Mediterranean Cuisine",
          "Island Hopping",
          "Stunning Sunsets"
        ],
        "tourExperiences": [
          "Athens Mythology Tour",
          "Santorini Sunset Cruise",
          "Crete Historical Tour",
          "Greek Food Tasting"
        ],
        "travelTips": [
          "Wear comfortable shoes for walking on uneven ruins.",
          "Tap water is safe in Athens, but use bottled water on islands.",
          "Pace yourself in the summer heat."
        ]
      }
    ]
  },
  {
    "id": "africa",
    "name": "Africa",
    "image": "/africa.jpg",
    "countries": [
      {
        "id": "egypt",
        "name": "Egypt",
        "description": "Egypt is famous for its ancient civilization and monumental landmarks.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/1280px-Pyramids_of_the_Giza_Necropolis.jpg",
        "attractions": [
          {
            "name": "Pyramids of Giza",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/1280px-Pyramids_of_the_Giza_Necropolis.jpg"
          },
          {
            "name": "Great Sphinx",
            "image": "https://images.unsplash.com/photo-1539650116574-8efeb43e2b50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Luxor Temple",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Templo_de_Luxor%2C_Luxor%2C_Egipto%2C_2022-04-01%2C_DD_01.jpg/1280px-Templo_de_Luxor%2C_Luxor%2C_Egipto%2C_2022-04-01%2C_DD_01.jpg"
          },
          {
            "name": "Valley of the Kings",
            "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Luxor%2C_Tal_der_K%C3%B6nige_%281995%2C_860x605%29.jpg"
          },
          {
            "name": "Abu Simbel",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ramsis%2C_Aswan_Governorate%2C_Egypt_-_panoramio.jpg/1280px-Ramsis%2C_Aswan_Governorate%2C_Egypt_-_panoramio.jpg"
          }
        ],
        "highlights": [
          "Ancient Pyramids",
          "Nile River Cruises",
          "Red Sea Scuba Diving",
          "Vibrant Bazaars"
        ],
        "tourExperiences": [
          "Giza Pyramids Camel Ride",
          "Nile River Luxury Cruise",
          "Cairo Museum Tour",
          "Red Sea Resort Stay"
        ],
        "travelTips": [
          "Dress modestly, especially when visiting religious sites.",
          "Drink bottled water only.",
          "Haggling is expected in markets."
        ]
      },
      {
        "id": "south-africa",
        "name": "South Africa",
        "description": "South Africa offers diverse landscapes, incredible wildlife safaris, and vibrant cities.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Kruger_Zebra.JPG/1280px-Kruger_Zebra.JPG",
        "attractions": [
          {
            "name": "Kruger National Park",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Kruger_Zebra.JPG/1280px-Kruger_Zebra.JPG"
          },
          {
            "name": "Table Mountain",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Table_Mountain_DanieVDM.jpg/1280px-Table_Mountain_DanieVDM.jpg"
          },
          {
            "name": "Cape of Good Hope",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Playa_Dias%2C_Cape_Point%2C_Sud%C3%A1frica%2C_2018-07-23%2C_DD_103.jpg/1280px-Playa_Dias%2C_Cape_Point%2C_Sud%C3%A1frica%2C_2018-07-23%2C_DD_103.jpg"
          },
          {
            "name": "Robben Island",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Robben_Island_-_Cape_Town%2C_South_Africa_%283883849594%29.jpg/1280px-Robben_Island_-_Cape_Town%2C_South_Africa_%283883849594%29.jpg"
          },
          {
            "name": "Boulders Beach (Penguins)",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Boulders_Beach_Suedafrika.jpg/1280px-Boulders_Beach_Suedafrika.jpg"
          }
        ],
        "highlights": [
          "Big Five Safaris",
          "World-Class Wine Regions",
          "Stunning Coastlines",
          "Rich Cultural History"
        ],
        "tourExperiences": [
          "Kruger Safari Game Drive",
          "Cape Town City Tour",
          "Stellenbosch Wine Tasting",
          "Shark Cage Diving"
        ],
        "travelTips": [
          "Rent a car for the Garden Route.",
          "Be aware of your surroundings in cities.",
          "Tipping is generally 10-15%."
        ]
      },
      {
        "id": "morocco",
        "name": "Morocco",
        "description": "Morocco is a gateway to Africa, known for its bustling medinas, vast deserts, and stunning architecture.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Djemaa_el_Fna.jpg/1280px-Djemaa_el_Fna.jpg",
        "attractions": [
          {
            "name": "Jemaa el-Fnaa, Marrakech",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Djemaa_el_Fna.jpg/1280px-Djemaa_el_Fna.jpg"
          },
          {
            "name": "Chefchaouen (Blue City)",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Chefchaouen_%2852189357475%29.jpg/1280px-Chefchaouen_%2852189357475%29.jpg"
          },
          {
            "name": "Sahara Desert",
            "image": "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Hassan II Mosque",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Hassan_II_mosque%2C_Casablanca_2.jpg/1280px-Hassan_II_mosque%2C_Casablanca_2.jpg"
          },
          {
            "name": "Ait Benhaddou",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ksar_A%C3%AFt_Benhaddou%2C_Marocco_%28%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%2C_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93%29.jpg/1280px-Ksar_A%C3%AFt_Benhaddou%2C_Marocco_%28%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%2C_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93%29.jpg"
          }
        ],
        "highlights": [
          "Vibrant Souks",
          "Desert Glamping",
          "Mint Tea Culture",
          "Intricate Tilework"
        ],
        "tourExperiences": [
          "Sahara Camel Trek",
          "Marrakech Medina Tour",
          "Atlas Mountains Hike",
          "Moroccan Cooking Class"
        ],
        "travelTips": [
          "Dress modestly.",
          "Haggling is a must in the souks.",
          "Ask permission before taking photos of people."
        ]
      },
      {
        "id": "kenya",
        "name": "Kenya",
        "description": "Kenya is synonymous with the classic African safari, featuring vast savannahs and incredible wildlife.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Masai_Mara_at_Sunset.jpg/1280px-Masai_Mara_at_Sunset.jpg",
        "attractions": [
          {
            "name": "Maasai Mara National Reserve",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Masai_Mara_at_Sunset.jpg/1280px-Masai_Mara_at_Sunset.jpg"
          },
          {
            "name": "Amboseli National Park",
            "image": "https://images.unsplash.com/photo-1547471080-7cb2cb6a5a36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Lake Nakuru",
            "image": "https://images.unsplash.com/photo-1534564539381-128d95b5420e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Mount Kenya",
            "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Diani Beach",
            "image": "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "The Great Migration",
          "Maasai Culture",
          "Stunning Landscapes",
          "Pristine Beaches"
        ],
        "tourExperiences": [
          "Maasai Mara Hot Air Balloon Safari",
          "Amboseli Elephant Watching",
          "Nairobi City Tour",
          "Diani Beach Relaxation"
        ],
        "travelTips": [
          "Take anti-malaria medication if advised.",
          "Pack neutral-colored clothing for safaris.",
          "Respect wildlife and follow guide instructions."
        ]
      },
      {
        "id": "tanzania",
        "name": "Tanzania",
        "description": "Tanzania is home to Africa's highest peak, vast wildlife reserves, and the beautiful island of Zanzibar.",
        "heroImage": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Mount Kilimanjaro",
            "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Serengeti National Park",
            "image": "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Ngorongoro Crater",
            "image": "https://images.unsplash.com/photo-1547471080-7cb2cb6a5a36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Zanzibar Beaches",
            "image": "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Stone Town",
            "image": "https://images.unsplash.com/photo-1552083974-186346191183?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Wildlife Safaris",
          "Mountain Climbing",
          "Spice Tours",
          "Tropical Island Getaways"
        ],
        "tourExperiences": [
          "Serengeti Game Drive",
          "Kilimanjaro Trek",
          "Zanzibar Spice Tour",
          "Ngorongoro Crater Descent"
        ],
        "travelTips": [
          "Book safaris well in advance.",
          "Learn a few Swahili greetings like \"Jambo\".",
          "Yellow fever vaccination may be required."
        ]
      }
    ]
  },
  {
    "id": "north-america",
    "name": "North America",
    "image": "/north-america.jpg",
    "countries": [
      {
        "id": "usa",
        "name": "United States",
        "description": "A vast country offering diverse landscapes, iconic cities, and world-famous entertainment.",
        "heroImage": "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Statue of Liberty",
            "image": "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Grand Canyon",
            "image": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Yellowstone National Park",
            "image": "https://images.unsplash.com/photo-1580952153875-fcb0edb9df47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Golden Gate Bridge",
            "image": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Times Square",
            "image": "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "National Parks",
          "Broadway Shows",
          "Hollywood",
          "Diverse Culinary Scene"
        ],
        "tourExperiences": [
          "NYC Helicopter Tour",
          "Grand Canyon Helicopter & Boat Tour",
          "Disney World Vacation",
          "Route 66 Road Trip"
        ],
        "travelTips": [
          "Tipping is customary (15-20%).",
          "Distances are vast; domestic flights or car rentals are often necessary.",
          "Sales tax is added at the register, not included in the display price."
        ]
      },
      {
        "id": "canada",
        "name": "Canada",
        "description": "Canada is known for its stunning natural beauty, friendly locals, and multicultural cities.",
        "heroImage": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Banff National Park",
            "image": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Niagara Falls",
            "image": "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "CN Tower, Toronto",
            "image": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Old Quebec",
            "image": "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Stanley Park, Vancouver",
            "image": "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Spectacular Rocky Mountains",
          "Winter Sports",
          "Maple Syrup",
          "Diverse Wildlife"
        ],
        "tourExperiences": [
          "Rocky Mountaineer Train Journey",
          "Niagara Falls Boat Tour",
          "Whistler Ski Trip",
          "Montreal Food Tour"
        ],
        "travelTips": [
          "Dress in layers, weather can change quickly.",
          "Tipping is similar to the US (15-20%).",
          "Distances between cities are very large."
        ]
      },
      {
        "id": "mexico",
        "name": "Mexico",
        "description": "Mexico offers a rich blend of ancient ruins, beautiful beaches, and vibrant culture and cuisine.",
        "heroImage": "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Chichén Itzá",
            "image": "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Cancun Beaches",
            "image": "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Teotihuacan",
            "image": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Tulum Ruins",
            "image": "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Cenotes of Yucatan",
            "image": "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Authentic Mexican Cuisine",
          "Mayan and Aztec Ruins",
          "Mariachi Music",
          "Beautiful Cenotes"
        ],
        "tourExperiences": [
          "Chichén Itzá Day Trip",
          "Cenote Swimming Tour",
          "Mexico City Street Food Tour",
          "Cabo San Lucas Boat Tour"
        ],
        "travelTips": [
          "Drink bottled water only.",
          "Learn basic Spanish.",
          "Haggling is common in local markets."
        ]
      },
      {
        "id": "costa-rica",
        "name": "Costa Rica",
        "description": "Costa Rica is a paradise for eco-tourism, known for its rainforests, volcanoes, and biodiversity.",
        "heroImage": "https://images.unsplash.com/photo-1518182170546-076616fdca44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Arenal Volcano",
            "image": "https://images.unsplash.com/photo-1518182170546-076616fdca44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Manuel Antonio National Park",
            "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Manuel_antonio_06_april_2005.jpeg"
          },
          {
            "name": "Monteverde Cloud Forest",
            "image": "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Tortuguero National Park",
            "image": "https://images.unsplash.com/photo-1547471080-7cb2cb6a5a36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Tamarindo Beach",
            "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Pura Vida Lifestyle",
          "Incredible Biodiversity",
          "Surfing and Beaches",
          "Zip-lining and Adventure"
        ],
        "tourExperiences": [
          "Arenal Volcano Hot Springs",
          "Monteverde Zip-lining",
          "Manuel Antonio Wildlife Walk",
          "Tortuguero Turtle Watching"
        ],
        "travelTips": [
          "Embrace the \"Pura Vida\" (pure life) pace.",
          "Pack insect repellent and rain gear.",
          "Tap water is generally safe in most areas."
        ]
      },
      {
        "id": "cuba",
        "name": "Cuba",
        "description": "Cuba is a Caribbean island known for its vintage cars, colonial architecture, and vibrant music scene.",
        "heroImage": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Old Havana",
            "image": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Varadero Beach",
            "image": "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Viñales Valley",
            "image": "https://images.unsplash.com/photo-1518182170546-076616fdca44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Trinidad",
            "image": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "El Morro Castle",
            "image": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Classic American Cars",
          "Salsa Dancing",
          "Cigar Plantations",
          "Pristine Beaches"
        ],
        "tourExperiences": [
          "Havana Vintage Car Tour",
          "Viñales Tobacco Farm Visit",
          "Trinidad Walking Tour",
          "Varadero Catamaran Cruise"
        ],
        "travelTips": [
          "Internet access can be limited.",
          "Bring plenty of cash as US credit cards often don't work.",
          "Stay in a \"Casa Particular\" for an authentic experience."
        ]
      }
    ]
  },
  {
    "id": "south-america",
    "name": "South America",
    "image": "/south-america.jpg",
    "countries": [
      {
        "id": "brazil",
        "name": "Brazil",
        "description": "Famous for its vibrant Carnival, Amazon rainforest, and iconic beaches.",
        "heroImage": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Christ the Redeemer",
            "image": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Copacabana Beach",
            "image": "https://images.unsplash.com/photo-1543059080-f9b1272213d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Iguazu Falls",
            "image": "https://images.unsplash.com/photo-1518182170546-076616fdca44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Amazon Rainforest",
            "image": "https://images.unsplash.com/photo-1518182170546-076616fdca44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Sugarloaf Mountain",
            "image": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Carnival in Rio",
          "Amazon River Cruises",
          "Samba Music & Dance",
          "Churrascaria Dining"
        ],
        "tourExperiences": [
          "Rio de Janeiro City Tour",
          "Amazon Jungle Safari",
          "Iguazu Falls Boat Ride",
          "Salvador Cultural Tour"
        ],
        "travelTips": [
          "Learn some basic Portuguese.",
          "Be mindful of your belongings in crowded tourist areas.",
          "Try the national dish, Feijoada."
        ]
      },
      {
        "id": "peru",
        "name": "Peru",
        "description": "Peru is home to the ancient Incan city of Machu Picchu, the Andes mountains, and a world-renowned culinary scene.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Machu_Picchu%2C_2023_%28012%29.jpg/1280px-Machu_Picchu%2C_2023_%28012%29.jpg",
        "attractions": [
          {
            "name": "Machu Picchu",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Machu_Picchu%2C_2023_%28012%29.jpg/1280px-Machu_Picchu%2C_2023_%28012%29.jpg"
          },
          {
            "name": "Sacred Valley",
            "image": "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Lake Titicaca",
            "image": "https://images.unsplash.com/photo-1580834341580-8c17a3a630fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Colca Canyon",
            "image": "https://images.unsplash.com/photo-1531968894103-1250395d8514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Nazca Lines",
            "image": "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Incan Ruins",
          "Incredible Gastronomy",
          "Andean Culture",
          "Amazon Basin"
        ],
        "tourExperiences": [
          "Inca Trail Trek",
          "Lima Culinary Tour",
          "Cusco City Tour",
          "Amazon Rainforest Lodge Stay"
        ],
        "travelTips": [
          "Acclimatize to the altitude in Cusco before trekking.",
          "Try Ceviche and Pisco Sour.",
          "Book Machu Picchu tickets well in advance."
        ]
      },
      {
        "id": "argentina",
        "name": "Argentina",
        "description": "Argentina is known for the tango, vast Patagonian landscapes, and excellent wine and steak.",
        "heroImage": "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Perito Moreno Glacier",
            "image": "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Iguazu Falls (Argentine side)",
            "image": "https://images.unsplash.com/photo-1518182170546-076616fdca44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Mount Fitz Roy",
            "image": "https://images.unsplash.com/photo-1534564539381-128d95b5420e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "La Boca, Buenos Aires",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/LaBoca_ST_98.jpg/1280px-LaBoca_ST_98.jpg"
          },
          {
            "name": "Mendoza Wine Region",
            "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Tango Dancing",
          "Patagonian Glaciers",
          "World-Class Malbec Wine",
          "Gaucho Culture"
        ],
        "tourExperiences": [
          "Buenos Aires Tango Show",
          "Patagonia Glacier Trek",
          "Mendoza Wine Tasting",
          "Iguazu Falls Boat Ride"
        ],
        "travelTips": [
          "Dinner is served very late.",
          "Bring crisp US dollars to exchange at the \"blue rate\".",
          "Learn basic Spanish."
        ]
      },
      {
        "id": "colombia",
        "name": "Colombia",
        "description": "Colombia offers lush coffee plantations, vibrant cities, and beautiful Caribbean beaches.",
        "heroImage": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Cartagena Old Town",
            "image": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Cocora Valley",
            "image": "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Tayrona National Park",
            "image": "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Salt Cathedral of Zipaquirá",
            "image": "https://images.unsplash.com/photo-1547471080-7cb2cb6a5a36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Medellín Metrocable",
            "image": "https://images.unsplash.com/photo-1552083974-186346191183?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Coffee Culture",
          "Salsa Dancing",
          "Colorful Colonial Towns",
          "Diverse Landscapes"
        ],
        "tourExperiences": [
          "Coffee Farm Tour",
          "Cartagena Walking Tour",
          "Medellín Comuna 13 Tour",
          "Tayrona Park Hike"
        ],
        "travelTips": [
          "Use ride-sharing apps instead of hailing taxis on the street.",
          "Learn basic Spanish.",
          "Try Arepas and Empanadas."
        ]
      },
      {
        "id": "chile",
        "name": "Chile",
        "description": "Chile is a long, narrow country featuring the driest desert in the world and stunning glacial fjords.",
        "heroImage": "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Torres del Paine National Park",
            "image": "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Atacama Desert",
            "image": "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Easter Island (Rapa Nui)",
            "image": "https://images.unsplash.com/photo-1580834341580-8c17a3a630fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Valparaíso",
            "image": "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Marble Caves",
            "image": "https://images.unsplash.com/photo-1534564539381-128d95b5420e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Stargazing in Atacama",
          "Patagonian Trekking",
          "Wine Tasting",
          "Moai Statues"
        ],
        "tourExperiences": [
          "Torres del Paine W Trek",
          "Atacama Desert Stargazing Tour",
          "Valparaíso Street Art Tour",
          "Maipo Valley Wine Tour"
        ],
        "travelTips": [
          "Distances are huge, plan for domestic flights.",
          "Pack for all four seasons if traveling the length of the country.",
          "Try a Pisco Sour."
        ]
      }
    ]
  },
  {
    "id": "australia-oceania",
    "name": "Australia / Oceania",
    "image": "/australia-oceania.jpg",
    "countries": [
      {
        "id": "australia",
        "name": "Australia",
        "description": "A massive continent known for the Outback, unique wildlife, and the Great Barrier Reef.",
        "heroImage": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Sydney Opera House",
            "image": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Great Barrier Reef",
            "image": "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Uluru (Ayers Rock)",
            "image": "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Bondi Beach",
            "image": "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Great Ocean Road",
            "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Unique Wildlife (Kangaroos, Koalas)",
          "Surfing Culture",
          "Vibrant Cities",
          "Aboriginal Heritage"
        ],
        "tourExperiences": [
          "Great Barrier Reef Snorkeling",
          "Sydney Harbour Bridge Climb",
          "Outback Safari",
          "Melbourne Coffee Tour"
        ],
        "travelTips": [
          "Always wear sunscreen (the sun is very strong).",
          "Swim between the red and yellow flags at the beach.",
          "Tipping is not expected but appreciated for exceptional service."
        ]
      },
      {
        "id": "new-zealand",
        "name": "New Zealand",
        "description": "New Zealand is an adventure capital known for its dramatic landscapes, Maori culture, and Lord of the Rings filming locations.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Milford_Sound_%28New_Zealand%29.JPG/1280px-Milford_Sound_%28New_Zealand%29.JPG",
        "attractions": [
          {
            "name": "Milford Sound",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Milford_Sound_%28New_Zealand%29.JPG/1280px-Milford_Sound_%28New_Zealand%29.JPG"
          },
          {
            "name": "Hobbiton Movie Set",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Waterhouse_Lake_Front.jpg/1280px-Waterhouse_Lake_Front.jpg"
          },
          {
            "name": "Aoraki / Mount Cook",
            "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Rotorua Geothermal Parks",
            "image": "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Franz Josef Glacier",
            "image": "https://images.unsplash.com/photo-1534564539381-128d95b5420e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Extreme Sports (Bungee Jumping)",
          "Stunning Fjords",
          "Maori Cultural Experiences",
          "World-Class Hiking"
        ],
        "tourExperiences": [
          "Milford Sound Cruise",
          "Queenstown Bungee Jump",
          "Rotorua Maori Village Visit",
          "Waitomo Glowworm Caves Tour"
        ],
        "travelTips": [
          "Weather can change rapidly, pack layers.",
          "Drive on the left side of the road.",
          "Declare all food and outdoor equipment at customs."
        ]
      },
      {
        "id": "fiji",
        "name": "Fiji",
        "description": "Fiji is a tropical paradise in the South Pacific, famous for its soft coral reefs, clear lagoons, and welcoming locals.",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Mamanuca.jpg/1280px-Mamanuca.jpg",
        "attractions": [
          {
            "name": "Mamanuca Islands",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Mamanuca.jpg/1280px-Mamanuca.jpg"
          },
          {
            "name": "Yasawa Islands",
            "image": "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Coral Coast",
            "image": "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Sri Siva Subramaniya Temple",
            "image": "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Bouma National Heritage Park",
            "image": "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "World-Class Scuba Diving",
          "Fijian Hospitality (\"Bula\")",
          "Kava Ceremonies",
          "Luxury Island Resorts"
        ],
        "tourExperiences": [
          "Island Hopping Cruise",
          "Shark Diving in Beqa Lagoon",
          "Traditional Village Visit",
          "Sigatoka River Safari"
        ],
        "travelTips": [
          "Learn to say \"Bula\" (hello).",
          "Dress modestly when visiting villages.",
          "Participate in a Kava ceremony if invited."
        ]
      },
      {
        "id": "french-polynesia",
        "name": "French Polynesia",
        "description": "French Polynesia is an overseas collectivity of France, known for its overwater bungalows and stunning lagoons, particularly in Bora Bora and Tahiti.",
        "heroImage": "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Bora Bora Lagoon",
            "image": "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Mount Otemanu",
            "image": "https://images.unsplash.com/photo-1502208327471-d5dde4d78995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Moorea",
            "image": "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Teahupo'o (Surfing)",
            "image": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Papeete Market",
            "image": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Overwater Bungalows",
          "Pristine Coral Reefs",
          "Polynesian Culture",
          "Black Pearl Shopping"
        ],
        "tourExperiences": [
          "Bora Bora Shark and Ray Snorkel Safari",
          "Moorea ATV Tour",
          "Tahiti Island Tour",
          "Sunset Catamaran Cruise"
        ],
        "travelTips": [
          "French and Tahitian are the main languages.",
          "It is a very expensive destination, budget accordingly.",
          "Pack plenty of reef-safe sunscreen."
        ]
      },
      {
        "id": "papua-new-guinea",
        "name": "Papua New Guinea",
        "description": "Papua New Guinea offers immense cultural and biological diversity, known for its beaches, coral reefs, and dense rainforests.",
        "heroImage": "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "attractions": [
          {
            "name": "Kokoda Track",
            "image": "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Tufi Fjords",
            "image": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Mount Wilhelm",
            "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Sepik River",
            "image": "https://images.unsplash.com/photo-1534564539381-128d95b5420e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            "name": "Tari Basin",
            "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ],
        "highlights": [
          "Incredible Cultural Diversity (800+ languages)",
          "World War II History",
          "Bird of Paradise Watching",
          "Untouched Scuba Diving"
        ],
        "tourExperiences": [
          "Kokoda Track Trekking",
          "Sepik River Cultural Cruise",
          "Tufi Diving Expedition",
          "Goroka Show (Cultural Festival)"
        ],
        "travelTips": [
          "Travel with a reputable guide or tour company.",
          "Take anti-malaria precautions.",
          "Respect local customs and tribal traditions."
        ]
      }
    ]
  }
];
