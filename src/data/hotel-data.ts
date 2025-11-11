import suiteImg from '../assets/suite.jpg';
import standardImg from '../assets/standard.jpg';
import miniImg from '../assets/mini.jpg';



export interface Room {
  id: string;
  title: string;
  price: number;
  size: string;
  maxGuests: number;
  bedType: string;
  view: string;
  image: string;
  description: string;
  features: string[];
  amenities: string[];
}

export const rooms: Room[] = [
  {
    id: "suite-room",
    title: "Suite Room",
    price: 899,
    size: "75 m²",
    maxGuests: 4,
    bedType: "King Bed + Sofa",
    view: "City View",
    image: suiteImg,
    description: "Experience ultimate luxury in our spacious Suite Room featuring separate living and sleeping areas. Perfect for extended stays with premium amenities and stunning city views.",
    features: ["Free WiFi", "Air Conditioning", "Smart TV", "Private Bathroom", "Coffee Maker", "Room Service", "Mini Bar", "Balcony"],
    amenities: ["Complimentary breakfast", "24-hour room service", "Daily housekeeping", "Access to fitness center", "Spa access", "Airport transfer"]
  },
  {
    id: "standard-room",
    title: "Standard Room",
    price: 299,
    
    size: "35 m²",
    maxGuests: 2,
    bedType: "Queen Bed",
    view: "Garden View",
    image: standardImg,
    description: "Comfortable and well-appointed Standard Room offering all essential amenities for a pleasant stay. Features modern furnishings and garden views for a relaxing experience.",
    features: ["Free WiFi", "Air Conditioning", "Smart TV", "Private Bathroom", "Coffee Maker", "Room Service"],
    amenities: ["Complimentary breakfast", "Daily housekeeping", "Access to fitness center"]
  },
  {
    id: "mini-room",
    title: "Mini Room",
    price: 199,
    size: "25 m²",
    maxGuests: 2,
    bedType: "Double Bed",
    view: "Courtyard View",
    image: miniImg,
    description: "Compact yet comfortable Mini Room perfect for solo travelers or couples seeking affordable accommodation. Efficiently designed with all necessary amenities.",
    features: ["Free WiFi", "Air Conditioning", "Smart TV", "Private Bathroom", "Coffee Maker"],
    amenities: ["Daily housekeeping", "Access to common areas"]
  }
];
