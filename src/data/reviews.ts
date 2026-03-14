export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "apex-ultra",
    author: "James W.",
    rating: 5,
    date: "2026-03-01",
    title: "Best smartwatch I've ever owned",
    content: "The build quality is incredible. The titanium case feels premium and the display is stunning. Battery easily lasts 2 weeks with moderate use. Health tracking features are accurate and the ECG function gives me peace of mind.",
    verified: true,
  },
  {
    id: "r2",
    productId: "apex-ultra",
    author: "Maria S.",
    rating: 4,
    date: "2026-02-25",
    title: "Almost perfect",
    content: "Love everything about this watch except the price. The features are top-notch and the display is gorgeous. Only giving 4 stars because I wish it had a few more watch faces out of the box.",
    verified: true,
  },
  {
    id: "r3",
    productId: "pulse-fit-x",
    author: "Ryan K.",
    rating: 5,
    date: "2026-02-20",
    title: "Perfect for marathon training",
    content: "The dual GPS is incredibly accurate even in the city. Running dynamics metrics have helped me improve my form significantly. This watch has become essential to my training.",
    verified: true,
  },
  {
    id: "r4",
    productId: "pulse-fit-x",
    author: "Lisa M.",
    rating: 4,
    date: "2026-02-15",
    title: "Great fitness watch",
    content: "Excellent for tracking workouts. The sport modes cover everything I need. Battery life is solid. Would love to see more smart features like NFC payments.",
    verified: true,
  },
  {
    id: "r5",
    productId: "nova-series-7",
    author: "David L.",
    rating: 5,
    date: "2026-03-05",
    title: "Stunning design",
    content: "This is the most beautiful smartwatch I've seen. The ceramic bezel catches light beautifully and the display is crisp. Smart features work flawlessly.",
    verified: true,
  },
  {
    id: "r6",
    productId: "trail-master-gps",
    author: "Amanda R.",
    rating: 5,
    date: "2026-02-28",
    title: "Survived a 30-day trek",
    content: "Took this on a month-long hiking expedition. The solar charging kept it alive the entire time. GPS accuracy in remote areas was impressive. This watch is built like a tank.",
    verified: true,
  },
  {
    id: "r7",
    productId: "zen-wellness",
    author: "Sophie T.",
    rating: 4,
    date: "2026-02-10",
    title: "Great for health tracking",
    content: "The stress monitoring and guided breathing exercises have genuinely helped me manage anxiety. Sleep tracking is detailed and accurate. Wish it had GPS though.",
    verified: true,
  },
  {
    id: "r8",
    productId: "chrono-classic",
    author: "Robert H.",
    rating: 5,
    date: "2026-03-08",
    title: "The perfect hybrid",
    content: "Finally a smartwatch that looks like a real watch. The craftsmanship is exceptional. Smart features are discreet but useful. 30-day battery is unreal.",
    verified: true,
  },
  {
    id: "r9",
    productId: "volt-sport",
    author: "Chris P.",
    rating: 4,
    date: "2026-01-30",
    title: "Best value for money",
    content: "At this price point, you can't beat the Volt Sport. GPS works well, fitness tracking is accurate, and the display is bright and colorful. Great entry-level sports watch.",
    verified: true,
  },
  {
    id: "r10",
    productId: "quantum-x1",
    author: "Nina A.",
    rating: 5,
    date: "2026-03-12",
    title: "The future on your wrist",
    content: "The AI health insights are genuinely useful and have caught things I would have missed. The flexible display is amazing. This feels like wearing the future.",
    verified: true,
  },
];
