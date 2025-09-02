import rumtekImage from '@/assets/rumtek-monastery.jpg';
import pemayangtseImage from '@/assets/pemayangtse-monastery.jpg';
import tashidingImage from '@/assets/tashiding-monastery.jpg';

export interface Monastery {
  id: string;
  name: string;
  region: string;
  description: string;
  history: string;
  image: string;
  location: {
    lat: number;
    lng: number;
  };
  visitingHours: string;
  founded: string;
  significance: string[];
  nearbyAttractions: string[];
}

export const monasteries: Monastery[] = [
  {
    id: "rumtek",
    name: "Rumtek Monastery",
    region: "East Sikkim",
    description: "The largest monastery in Sikkim and the main seat of the Karma Kagyu lineage outside Tibet.",
    history: "Built in the 1960s by the 16th Karmapa, Rumtek is a replica of the original monastery in Tsurphu, Tibet. It houses many precious artifacts and serves as the headquarters of the Karma Kagyu sect.",
    image: rumtekImage,
    location: { lat: 27.2855, lng: 88.5558 },
    visitingHours: "6:00 AM - 6:00 PM",
    founded: "1966",
    significance: ["Main seat of Karma Kagyu lineage", "Houses precious artifacts", "Center for Buddhist studies"],
    nearbyAttractions: ["Gangtok city", "Enchey Monastery", "Tsomgo Lake"]
  },
  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    region: "West Sikkim",
    description: "One of the oldest and most important monasteries in Sikkim, meaning 'Perfect Sublime Lotus'.",
    history: "Founded in 1705 by Lhatsun Chempo, this monastery belongs to the Nyingma sect. It's built on three levels and houses ancient Buddhist scriptures and artifacts.",
    image: pemayangtseImage,
    location: { lat: 27.2129, lng: 88.2123 },
    visitingHours: "7:00 AM - 5:00 PM",
    founded: "1705",
    significance: ["Oldest monastery in Sikkim", "Nyingma sect headquarters", "Three-story traditional architecture"],
    nearbyAttractions: ["Khecheopalri Lake", "Yuksom village", "Kanchenjunga Falls"]
  },
  {
    id: "tashiding",
    name: "Tashiding Monastery",
    region: "West Sikkim",
    description: "Sacred monastery situated between two holy rivers, offering spectacular Himalayan views.",
    history: "Established in 1717 by Ngadak Sempa Chempo, this monastery is considered one of the holiest sites in Sikkim. The annual Bhumchu festival is celebrated here with great fervor.",
    image: tashidingImage,
    location: { lat: 27.2847, lng: 88.2689 },
    visitingHours: "6:00 AM - 6:00 PM",
    founded: "1717",
    significance: ["Holiest monastery in Sikkim", "Between Rathong and Rangeet rivers", "Famous Bhumchu festival"],
    nearbyAttractions: ["Yuksom", "Khecheopalri Lake", "Rabdentse Ruins"]
  },
  {
    id: "enchey",
    name: "Enchey Monastery",
    region: "East Sikkim", 
    description: "Ancient monastery in Gangtok known for its tantric practices and annual Chaam dance.",
    history: "Built in 1909 on the site blessed by Lama Druptob Karpo, this monastery belongs to the Nyingma sect. It's famous for its masked dance festival and houses ancient idols.",
    image: rumtekImage, // Reusing for now
    location: { lat: 27.3314, lng: 88.6138 },
    visitingHours: "5:30 AM - 7:00 PM",
    founded: "1909",
    significance: ["Center for tantric practices", "Annual Chaam dance", "Ancient Buddhist idols"],
    nearbyAttractions: ["Gangtok MG Marg", "Hanuman Tok", "Ganesh Tok"]
  },
  {
    id: "phensang",
    name: "Phensang Monastery",
    region: "North Sikkim",
    description: "Remote monastery offering pristine mountain views and ancient Buddhist traditions.",
    history: "Founded in the 17th century, this monastery is located in the remote Kabi region. It follows the Kagyu tradition and is known for its meditation retreats and spiritual practices.",
    image: pemayangtseImage, // Reusing for now
    location: { lat: 27.4123, lng: 88.5847 },
    visitingHours: "6:00 AM - 5:00 PM",
    founded: "1642",
    significance: ["Ancient meditation center", "Kagyu tradition", "Remote mountain location"],
    nearbyAttractions: ["Kabi Lungchok", "Singhik viewpoint", "Chungthang"]
  },
  {
    id: "ngadak",
    name: "Ngadak Monastery",
    region: "South Sikkim",
    description: "Peaceful monastery known for its beautiful murals and traditional architecture.",
    history: "Established in the 18th century, this monastery is renowned for its exquisite wall paintings and traditional Sikkimese architecture. It serves as an important center for Buddhist learning.",
    image: tashidingImage, // Reusing for now
    location: { lat: 27.1456, lng: 88.3789 },
    visitingHours: "6:30 AM - 6:30 PM", 
    founded: "1780",
    significance: ["Beautiful murals", "Traditional architecture", "Buddhist learning center"],
    nearbyAttractions: ["Namchi town", "Char Dham", "Samdruptse Hill"]
  }
];

export const regions = ["All Regions", "East Sikkim", "West Sikkim", "North Sikkim", "South Sikkim"];