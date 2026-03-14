export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    role: "Marathon Runner",
    content: "The Pulse Fit X has completely transformed my training. The GPS accuracy is unmatched and the running dynamics have helped me shave 15 minutes off my marathon time.",
    rating: 5,
    avatar: "SM",
  },
  {
    id: "t2",
    name: "David Chen",
    role: "Tech Executive",
    content: "I wear the Chrono Classic to every board meeting. It's the only smartwatch that looks appropriate with a suit while still giving me all the notifications I need.",
    rating: 5,
    avatar: "DC",
  },
  {
    id: "t3",
    name: "Emily Rodriguez",
    role: "Yoga Instructor",
    content: "The Zen Wellness Band helps me and my students track stress levels and breathing patterns. The guided meditation features are beautifully integrated.",
    rating: 5,
    avatar: "ER",
  },
  {
    id: "t4",
    name: "Jake Thompson",
    role: "Mountain Guide",
    content: "30 days of battery life with solar charging in the backcountry. The Trail Master GPS has been my most reliable piece of gear on every expedition.",
    rating: 5,
    avatar: "JT",
  },
  {
    id: "t5",
    name: "Lisa Park",
    role: "Healthcare Professional",
    content: "The health monitoring on the Apex Ultra Pro rivals clinical-grade devices. ECG and blood oxygen tracking give me real peace of mind for my patients and myself.",
    rating: 5,
    avatar: "LP",
  },
];
