export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  category: string;
  features: string[];
  specs: {
    display: string;
    battery: string;
    waterResistance: string;
    sensors: string;
    os: string;
    connectivity: string;
    weight: string;
  };
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "apex-ultra",
    name: "Apex Ultra Pro",
    brand: "TechVance",
    price: 499,
    originalPrice: 599,
    description:
      "The Apex Ultra Pro redefines what a smartwatch can do. Featuring a stunning 1.9-inch AMOLED display with always-on capability, advanced health monitoring including ECG and blood oxygen tracking, and up to 14 days of battery life. Built with aerospace-grade titanium and sapphire crystal glass, this watch is as durable as it is beautiful.",
    shortDescription: "Premium titanium smartwatch with advanced health monitoring and 14-day battery life.",
    image: "/watches/apex-ultra.jpg",
    images: ["/watches/apex-ultra.jpg", "/watches/apex-ultra-2.jpg", "/watches/apex-ultra-3.jpg"],
    category: "Luxury",
    features: ["ECG Monitor", "Blood Oxygen", "GPS", "NFC Payments", "Always-On Display", "Water Resistant 100m"],
    specs: {
      display: '1.9" AMOLED, 454x454px',
      battery: "Up to 14 days",
      waterResistance: "10 ATM (100m)",
      sensors: "ECG, SpO2, Heart Rate, Accelerometer, Gyroscope, Barometer",
      os: "TechVance OS 4.0",
      connectivity: "Bluetooth 5.3, Wi-Fi, NFC, LTE",
      weight: "52g",
    },
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    isNew: true,
    isFeatured: true,
    tags: ["luxury", "health", "fitness", "premium"],
  },
  {
    id: "pulse-fit-x",
    name: "Pulse Fit X",
    brand: "FitCore",
    price: 279,
    originalPrice: 329,
    description:
      "Engineered for athletes, the Pulse Fit X offers the most comprehensive fitness tracking available. With dual-frequency GPS for precise route mapping, advanced running dynamics, and over 100 sport modes. The rugged polymer build withstands any workout while the 7-day battery keeps up with your training schedule.",
    shortDescription: "Ultimate fitness smartwatch with dual-GPS, 100+ sport modes, and advanced running dynamics.",
    image: "/watches/pulse-fit-x.jpg",
    images: ["/watches/pulse-fit-x.jpg", "/watches/pulse-fit-x-2.jpg", "/watches/pulse-fit-x-3.jpg"],
    category: "Fitness",
    features: ["Dual-GPS", "Heart Rate Zones", "VO2 Max", "100+ Sports", "Sleep Tracking", "Water Resistant 50m"],
    specs: {
      display: '1.4" AMOLED, 466x466px',
      battery: "Up to 7 days",
      waterResistance: "5 ATM (50m)",
      sensors: "Heart Rate, SpO2, Accelerometer, Gyroscope, Compass",
      os: "FitCore OS 3.0",
      connectivity: "Bluetooth 5.2, Wi-Fi, GPS",
      weight: "38g",
    },
    rating: 4.6,
    reviewCount: 2034,
    inStock: true,
    isFeatured: true,
    tags: ["fitness", "sports", "running", "gps"],
  },
  {
    id: "nova-series-7",
    name: "Nova Series 7",
    brand: "NovaTech",
    price: 399,
    description:
      "The Nova Series 7 combines elegant design with smart functionality. Its ceramic bezel and curved OLED display make a style statement while offering comprehensive health tracking, smart notifications, and seamless smartphone integration. Perfect for those who want technology that looks as good as it performs.",
    shortDescription: "Elegant ceramic smartwatch blending luxury design with comprehensive health tracking.",
    image: "/watches/nova-series-7.jpg",
    images: ["/watches/nova-series-7.jpg", "/watches/nova-series-7-2.jpg", "/watches/nova-series-7-3.jpg"],
    category: "Luxury",
    features: ["Ceramic Bezel", "OLED Display", "Heart Rate", "NFC Payments", "Voice Assistant", "Wireless Charging"],
    specs: {
      display: '1.7" OLED, 396x484px',
      battery: "Up to 5 days",
      waterResistance: "5 ATM (50m)",
      sensors: "Heart Rate, SpO2, Accelerometer, Gyroscope",
      os: "NovaTech WearOS",
      connectivity: "Bluetooth 5.3, Wi-Fi, NFC",
      weight: "45g",
    },
    rating: 4.7,
    reviewCount: 876,
    inStock: true,
    isNew: true,
    tags: ["luxury", "style", "elegant", "ceramic"],
  },
  {
    id: "trail-master-gps",
    name: "Trail Master GPS",
    brand: "OutdoorPro",
    price: 349,
    originalPrice: 399,
    description:
      "Built for the great outdoors, the Trail Master GPS features multi-band satellite positioning, topographic maps, and a solar-charging display that extends battery life to an impressive 30 days. The reinforced polymer case and MIL-STD-810 rating ensure it survives wherever your adventures take you.",
    shortDescription: "Rugged outdoor GPS watch with solar charging and 30-day battery life.",
    image: "/watches/trail-master.jpg",
    images: ["/watches/trail-master.jpg", "/watches/trail-master-2.jpg", "/watches/trail-master-3.jpg"],
    category: "Outdoor",
    features: ["Solar Charging", "Topo Maps", "Multi-Band GPS", "MIL-STD-810", "Altimeter", "Storm Alert"],
    specs: {
      display: '1.3" MIP Solar, 260x260px',
      battery: "Up to 30 days (solar)",
      waterResistance: "10 ATM (100m)",
      sensors: "Heart Rate, Altimeter, Barometer, Compass, Thermometer",
      os: "OutdoorPro OS",
      connectivity: "Bluetooth 5.0, ANT+, GPS/GLONASS/Galileo",
      weight: "58g",
    },
    rating: 4.5,
    reviewCount: 1567,
    inStock: true,
    isFeatured: true,
    tags: ["outdoor", "hiking", "rugged", "gps", "solar"],
  },
  {
    id: "zen-wellness",
    name: "Zen Wellness Band",
    brand: "MindBody",
    price: 199,
    description:
      "The Zen Wellness Band focuses on holistic health with advanced stress monitoring, guided breathing exercises, body composition analysis, and comprehensive sleep tracking with sleep coaching. Its slim, comfortable design makes it perfect for 24/7 wear, while the 10-day battery means less time charging.",
    shortDescription: "Holistic health band with stress monitoring, body composition, and 10-day battery.",
    image: "/watches/zen-wellness.jpg",
    images: ["/watches/zen-wellness.jpg", "/watches/zen-wellness-2.jpg", "/watches/zen-wellness-3.jpg"],
    category: "Health",
    features: ["Stress Monitor", "Body Composition", "Sleep Coach", "Guided Breathing", "Hydration Tracking", "Menstrual Tracking"],
    specs: {
      display: '1.1" AMOLED, 294x294px',
      battery: "Up to 10 days",
      waterResistance: "5 ATM (50m)",
      sensors: "BIA Sensor, Heart Rate, SpO2, Skin Temperature",
      os: "MindBody Health OS",
      connectivity: "Bluetooth 5.2, Wi-Fi",
      weight: "28g",
    },
    rating: 4.4,
    reviewCount: 934,
    inStock: true,
    tags: ["health", "wellness", "sleep", "stress"],
  },
  {
    id: "chrono-classic",
    name: "Chrono Classic Digital",
    brand: "Heritage",
    price: 599,
    description:
      "Where traditional watchmaking meets modern technology. The Chrono Classic Digital features a hybrid analog-digital display under a sapphire crystal dome, housed in a hand-finished stainless steel case. Discreet smart features include notifications, activity tracking, and NFC payments without compromising its classic appearance.",
    shortDescription: "Hybrid luxury watch combining classic analog design with discreet smart features.",
    image: "/watches/chrono-classic.jpg",
    images: ["/watches/chrono-classic.jpg", "/watches/chrono-classic-2.jpg", "/watches/chrono-classic-3.jpg"],
    category: "Luxury",
    features: ["Hybrid Display", "Sapphire Crystal", "NFC Payments", "Activity Tracking", "Stainless Steel", "E-ink Sub-dial"],
    specs: {
      display: '42mm Analog + 0.9" E-ink sub-dial',
      battery: "Up to 30 days",
      waterResistance: "5 ATM (50m)",
      sensors: "Heart Rate, Accelerometer",
      os: "Heritage Smart OS",
      connectivity: "Bluetooth 5.0, NFC",
      weight: "68g",
    },
    rating: 4.9,
    reviewCount: 432,
    inStock: true,
    isNew: true,
    isFeatured: true,
    tags: ["luxury", "classic", "hybrid", "premium", "elegant"],
  },
  {
    id: "volt-sport",
    name: "Volt Sport Edition",
    brand: "FitCore",
    price: 229,
    description:
      "The Volt Sport Edition is designed for everyday athletes who want reliable fitness tracking at an accessible price. With GPS, 50+ sport modes, and a vibrant color display, it covers all the essentials. The lightweight silicone band and 5-day battery make it a comfortable daily companion.",
    shortDescription: "Affordable sports watch with GPS, 50+ sport modes, and vibrant display.",
    image: "/watches/volt-sport.jpg",
    images: ["/watches/volt-sport.jpg", "/watches/volt-sport-2.jpg"],
    category: "Fitness",
    features: ["GPS", "50+ Sports", "Heart Rate", "Sleep Tracking", "Music Control", "Water Resistant 50m"],
    specs: {
      display: '1.3" LCD, 360x360px',
      battery: "Up to 5 days",
      waterResistance: "5 ATM (50m)",
      sensors: "Heart Rate, Accelerometer, Gyroscope",
      os: "FitCore OS Lite",
      connectivity: "Bluetooth 5.1, GPS",
      weight: "32g",
    },
    rating: 4.3,
    reviewCount: 3210,
    inStock: true,
    tags: ["fitness", "sports", "budget", "gps"],
  },
  {
    id: "quantum-x1",
    name: "Quantum X1",
    brand: "TechVance",
    price: 449,
    description:
      "The Quantum X1 pushes boundaries with its edge-to-edge flexible OLED display, AI-powered health insights, and the industry's first on-wrist body temperature monitoring for illness detection. Running TechVance OS 4.0, it offers the richest app ecosystem with thousands of apps and watch faces.",
    shortDescription: "Cutting-edge smartwatch with AI health insights, flexible OLED, and temperature monitoring.",
    image: "/watches/quantum-x1.jpg",
    images: ["/watches/quantum-x1.jpg", "/watches/quantum-x1-2.jpg", "/watches/quantum-x1-3.jpg"],
    category: "Smart",
    features: ["AI Health Insights", "Body Temperature", "Flexible OLED", "App Store", "Voice Assistant", "Fall Detection"],
    specs: {
      display: '2.0" Flexible OLED, 502x410px',
      battery: "Up to 3 days",
      waterResistance: "5 ATM (50m)",
      sensors: "Heart Rate, SpO2, ECG, Temperature, Accelerometer, Gyroscope",
      os: "TechVance OS 4.0",
      connectivity: "Bluetooth 5.3, Wi-Fi 6, NFC, LTE, UWB",
      weight: "48g",
    },
    rating: 4.6,
    reviewCount: 678,
    inStock: true,
    isNew: true,
    tags: ["smart", "ai", "health", "premium", "tech"],
  },
];

export const brands = [...new Set(products.map((p) => p.brand))];
export const categories = [...new Set(products.map((p) => p.category))];
export const priceRanges = [
  { label: "Under $200", min: 0, max: 200 },
  { label: "$200 - $350", min: 200, max: 350 },
  { label: "$350 - $500", min: 350, max: 500 },
  { label: "Over $500", min: 500, max: Infinity },
];
