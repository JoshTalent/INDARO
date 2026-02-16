// NewsEventsPage.tsx (with all mock data untouched, only UI translated and types fixed)
import React, { useState, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronRight,
  X,
  Share2,
  Heart,
  Bookmark,
  Eye,
  Search,
  Grid,
  List,
  Music,
  Star,
  Bell,
  Volume2,
  Newspaper,
  Mic,
  Theater,
  Sparkles,
  Mail,
  Phone,
  CheckCircle,
} from "lucide-react";

// Type Definitions
interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  type: string;
  image: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  readTime: string;
  views: number;
  likes: number;
  comments: number;
  featured: boolean;
  tags: string[];
}

interface EventItem {
  id: number;
  title: string;
  type: string;
  description: string;
  longDescription: string;
  date: string;
  time: string;
  location: string;
  address: string;
  image: string;
  price: string;
  capacity: number;
  registered: number;
  featured: boolean;
  category: string;
  tags: string[];
}

interface HirePackage {
  id: string;
  name: string;
  icon: JSX.Element;
  description: string;
  groupSize: string;
  duration: string;
  price: string;
  includes: string[];
}

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  event: string;
}

interface NewsCardProps {
  item: NewsItem;
  onClick: (item: NewsItem) => void;
  variant?: "grid" | "featured";
  t: (key: string) => string;
}

interface EventCardProps {
  event: EventItem;
  onClick: (event: EventItem) => void;
  t: (key: string) => string;
}

interface NewsModalProps {
  item: NewsItem | null;
  onClose: () => void;
  t: (key: string) => string;
}

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
  t: (key: string) => string;
}

interface FixedHireCTAProps {
  t: (key: string) => string;
}

// News data (UNCHANGED - keep as mock data, no translation)
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Indaro Foundation Launches New Youth Arts Center",
    excerpt:
      "State-of-the-art facility to provide dance, music, and visual arts training for over 500 youth annually.",
    content:
      "The Indaro Foundation celebrated the grand opening of its new Youth Arts Center in Kigali, a state-of-the-art facility designed to nurture creative talents. The center features multiple dance studios, music practice rooms, an art gallery, and a 200-seat performance venue. 'This center represents our commitment to providing young people with the resources they need to develop their artistic abilities,' said the Foundation's Director. The opening ceremony included performances from foundation beneficiaries and was attended by government officials, partner organizations, and community members.",
    category: "announcement",
    type: "news",
    image:
      "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3",
    date: "2024-12-15",
    author: "Marie Claire",
    authorRole: "Communications Director",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    readTime: "4 min read",
    views: 1234,
    likes: 89,
    comments: 23,
    featured: true,
    tags: ["arts center", "facility", "youth development"],
  },
  {
    id: 2,
    title: "Traditional Dance Troupe Wins National Competition",
    excerpt:
      "Young performers bring home first prize at the Rwanda Cultural Festival.",
    content:
      "Indaro Foundation's traditional dance troupe, comprised of 25 young performers aged 12-18, won first place at the annual Rwanda Cultural Festival. Their performance of the Intore dance, accompanied by live Umutagara drumming, captivated judges and audiences alike. 'This victory is a testament to the dedication of our young artists and the importance of preserving our cultural heritage,' said Emmanuel Dushime, Cultural Director. The troupe will now represent Rwanda at the East African Cultural Exchange in Nairobi next month.",
    category: "achievement",
    type: "news",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3",
    date: "2024-12-10",
    author: "Jean Pierre",
    authorRole: "Cultural Program Coordinator",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    readTime: "3 min read",
    views: 2156,
    likes: 234,
    comments: 45,
    featured: true,
    tags: ["dance", "competition", "achievement", "culture"],
  },
  {
    id: 3,
    title: "Education Program Reaches 100 Students Milestone",
    excerpt:
      "Foundation celebrates successful reintegration of out-of-school children.",
    content:
      "Indaro Foundation's Education Support and School Reintegration Program has successfully reached 100 students, providing school fees, learning materials, and tutoring support. The milestone was celebrated at a ceremony where students shared their stories of returning to education. 'Before this program, I had given up on my dreams of becoming a teacher. Now I'm back in school and excelling in my classes,' shared Marie Uwase, 16, one of the program beneficiaries. The program has achieved a 95% retention rate and plans to expand to 200 students by year-end.",
    category: "impact",
    type: "news",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3",
    date: "2024-12-05",
    author: "Alice Mukamana",
    authorRole: "Education Coordinator",
    authorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
    readTime: "5 min read",
    views: 987,
    likes: 67,
    comments: 12,
    featured: false,
    tags: ["education", "milestone", "success"],
  },
  {
    id: 4,
    title: "Boxing Program Produces Regional Champions",
    excerpt:
      "Three young boxers from Indaro Foundation win medals at regional tournament.",
    content:
      "The Indaro Foundation Boxing Program celebrated a major achievement as three of its young athletes won medals at the East African Youth Boxing Tournament. Jean Claude (16) won gold in the lightweight category, while sisters Aline (15) and Grace (17) Niyomugabo took silver and bronze respectively in their weight classes. 'The discipline and training they've received at Indaro has been life-changing,' said coach Patrick Nsengimana. 'These young athletes are not only excelling in the ring but also in school and as role models in their communities.'",
    category: "achievement",
    type: "news",
    image:
      "https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-4.0.3",
    date: "2024-11-28",
    author: "Patrick Nsengimana",
    authorRole: "Sports Director",
    authorImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3",
    readTime: "4 min read",
    views: 1543,
    likes: 178,
    comments: 34,
    featured: true,
    tags: ["boxing", "sports", "achievement", "youth"],
  },
  {
    id: 5,
    title: "Partnership with UNESCO for Cultural Preservation",
    excerpt:
      "New initiative to document and teach traditional Rwandan arts to young generations.",
    content:
      "Indaro Foundation has entered into a strategic partnership with UNESCO to preserve and promote traditional Rwandan performing arts. The two-year project will document endangered art forms, create digital learning resources, and train 50 young master artists who will serve as cultural ambassadors. 'This partnership recognizes the important work Indaro is doing to keep our cultural heritage alive,' said Emmanuel Dushime. The project will focus on traditional dance, drumming, and oral traditions, with materials made available to schools across the country.",
    category: "partnership",
    type: "news",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
    date: "2024-11-20",
    author: "Diane Uwase",
    authorRole: "Partnership Manager",
    authorImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
    readTime: "4 min read",
    views: 876,
    likes: 92,
    comments: 15,
    featured: false,
    tags: ["partnership", "unesco", "culture", "preservation"],
  },
  {
    id: 6,
    title: "Annual Fundraising Gala Raises Record Amount",
    excerpt:
      "Community comes together to support youth programs with generous donations.",
    content:
      "Indaro Foundation's annual fundraising gala 'An Evening of Hope' raised a record $75,000 to support youth programs. The event featured performances from foundation beneficiaries, including the traditional dance troupe and choir, along with inspiring stories from young people whose lives have been transformed. 'The generosity of our community never ceases to amaze me,' said the Foundation Director. 'These funds will directly support our education, arts, and sports programs, helping us reach even more young people in need.'",
    category: "event",
    type: "news",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
    date: "2024-11-15",
    author: "Sarah Johnson",
    authorRole: "Development Director",
    authorImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3",
    readTime: "3 min read",
    views: 2341,
    likes: 267,
    comments: 41,
    featured: true,
    tags: ["fundraising", "gala", "community", "support"],
  },
];

// Events data (UNCHANGED - keep as mock data, no translation)
const events: EventItem[] = [
  {
    id: 101,
    title: "Traditional Dance Performance",
    type: "performance",
    description:
      "Indaro youth dance troupe performing traditional Intore and Amaraba dances at the Kigali Cultural Festival.",
    longDescription:
      "Experience the vibrant energy of Rwandan traditional dance performed by Indaro Foundation's youth troupe. The 45-minute performance will showcase Intore (the dance of heroes), Amaraba, and Umushayayo dances, accompanied by live Umutagara drumming. Following the performance, audience members will have the opportunity to learn basic dance steps from the performers.",
    date: "2025-01-15",
    time: "15:00 - 16:30",
    location: "Kigali Convention Center",
    address: "KG 2 Roundabout, Kigali",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3",
    price: "Free - Donations Welcome",
    capacity: 200,
    registered: 145,
    featured: true,
    category: "performance",
    tags: ["dance", "traditional", "performance", "culture"],
  },
  {
    id: 102,
    title: "Umutagara Drumming Workshop",
    type: "workshop",
    description:
      "Learn traditional drumming techniques from master drummers in this hands-on workshop.",
    longDescription:
      "Join us for an immersive workshop on Umutagara drumming, led by master drummer Emmanuel Dushime and his ensemble. Participants will learn basic rhythms, proper playing techniques, and the cultural significance of each drum. No prior experience required. Drums will be provided. The workshop concludes with a group drumming session where participants can practice what they've learned.",
    date: "2025-01-22",
    time: "10:00 - 13:00",
    location: "Indaro Arts Center",
    address: "Gasabo, Kigali",
    image:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3",
    price: "$15 (includes materials)",
    capacity: 30,
    registered: 18,
    featured: false,
    category: "workshop",
    tags: ["drumming", "workshop", "music", "traditional"],
  },
  {
    id: 103,
    title: "Youth Boxing Exhibition",
    type: "sports",
    description:
      "Watch young boxers showcase their skills in friendly exhibition matches.",
    longDescription:
      "Indaro Foundation's boxing program presents an afternoon of exhibition matches featuring youth boxers of various skill levels. The event showcases the discipline, sportsmanship, and technique developed through our program. Matches will be supervised by certified coaches and referees. All proceeds support the boxing program's equipment and training needs.",
    date: "2025-01-28",
    time: "14:00 - 17:00",
    location: "Sports Complex",
    address: "Kicukiro, Kigali",
    image:
      "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?ixlib=rb-4.0.3",
    price: "$5 entry",
    capacity: 150,
    registered: 67,
    featured: false,
    category: "sports",
    tags: ["boxing", "sports", "exhibition", "youth"],
  },
  {
    id: 104,
    title: "Afro Dance Masterclass",
    type: "workshop",
    description: "High-energy Afro-dance workshop for all skill levels.",
    longDescription:
      "Get ready to move! This high-energy workshop led by professional Afro-dance instructor Marie Claire will teach you popular Afrobeat dance moves and choreography. The session includes warm-up, technique breakdown, and a fun choreography routine. All ages and skill levels welcome. Wear comfortable clothing and bring water.",
    date: "2025-02-05",
    time: "16:00 - 18:00",
    location: "Indaro Arts Center",
    address: "Gasabo, Kigali",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3",
    price: "$10",
    capacity: 40,
    registered: 22,
    featured: true,
    category: "workshop",
    tags: ["dance", "afro", "workshop", "fitness"],
  },
  {
    id: 105,
    title: "Education Support Information Session",
    type: "community",
    description:
      "Learn about our education programs and how to enroll children.",
    longDescription:
      "Parents, guardians, and community members are invited to learn about Indaro Foundation's education support programs. This information session will cover eligibility criteria, application process, and the range of support available including school fees, materials, and tutoring. Staff will be available to answer questions and assist with applications.",
    date: "2025-02-10",
    time: "09:00 - 12:00",
    location: "Community Center",
    address: "Rwamagana",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3",
    price: "Free",
    capacity: 100,
    registered: 34,
    featured: false,
    category: "community",
    tags: ["education", "community", "information", "support"],
  },
  {
    id: 106,
    title: "Valentine's Day Charity Concert",
    type: "performance",
    description:
      "Evening of music featuring Indaro choir and special guest artists.",
    longDescription:
      "Celebrate love and community at our Valentine's Day charity concert. The Indaro choir will perform romantic songs and audience favorites, joined by special guest musicians from the local music scene. Proceeds support our youth music programs. The evening includes refreshments and a chance to meet the performers.",
    date: "2025-02-14",
    time: "18:30 - 21:00",
    location: "Cultural Hall",
    address: "Downtown Kigali",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3",
    price: "$20 ($15 advance)",
    capacity: 150,
    registered: 78,
    featured: true,
    category: "performance",
    tags: ["concert", "music", "choir", "charity", "valentine"],
  },
  {
    id: 107,
    title: "Breakdance Battle: Youth Edition",
    type: "competition",
    description:
      "Annual breakdance competition for youth crews and solo dancers.",
    longDescription:
      "The annual Breakdance Battle returns! Youth dancers (ages 12-21) will compete in crew and solo categories for prizes and recognition. The event features preliminary rounds, finals, and special performances by guest judges from Rwanda's breaking community. All skill levels welcome to compete or just watch and enjoy the energy.",
    date: "2025-02-22",
    time: "12:00 - 18:00",
    location: "Youth Park",
    address: "Kigali",
    image:
      "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3",
    price: "$5 spectators, $10 competitors",
    capacity: 300,
    registered: 120,
    featured: false,
    category: "competition",
    tags: ["breakdance", "competition", "youth", "dance"],
  },
  {
    id: 108,
    title: "Cultural Heritage Day",
    type: "festival",
    description:
      "Day-long celebration of Rwandan culture with performances, crafts, and food.",
    longDescription:
      "Join us for a vibrant celebration of Rwandan culture! Cultural Heritage Day features continuous performances by Indaro's dance and music groups, traditional craft demonstrations and workshops, storytelling sessions, and authentic Rwandan food. This family-friendly event is perfect for locals and visitors wanting to experience Rwanda's rich cultural traditions.",
    date: "2025-03-01",
    time: "10:00 - 18:00",
    location: "Cultural Village",
    address: "Eastern Province",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3",
    price: "Free entry, activities $2-5",
    capacity: 500,
    registered: 0,
    featured: true,
    category: "festival",
    tags: ["culture", "festival", "family", "traditional", "food"],
  },
];

// Hire Us packages (UNCHANGED - keep as mock data, no translation)
const hirePackages: HirePackage[] = [
  {
    id: "traditional-dance",
    name: "Traditional Dance Troupe",
    icon: <Music className="w-6 h-6" />,
    description: "Full traditional dance performance with live drumming",
    groupSize: "12-20 dancers",
    duration: "30-60 min",
    price: "From $500",
    includes: ["Traditional costumes", "Live drumming", "Cultural explanation"],
  },
  {
    id: "drumming-ensemble",
    name: "Umutagara Drumming Ensemble",
    icon: <Volume2 className="w-6 h-6" />,
    description: "Powerful traditional drumming performances",
    groupSize: "8-15 drummers",
    duration: "20-45 min",
    price: "From $400",
    includes: [
      "Traditional drums",
      "Ensemble performance",
      "Interactive segment",
    ],
  },
  {
    id: "modern-dance",
    name: "Afro & Modern Dance Crew",
    icon: <Theater className="w-6 h-6" />,
    description: "Contemporary Afro-fusion and urban dance",
    groupSize: "8-12 dancers",
    duration: "15-30 min",
    price: "From $350",
    includes: ["Choreographed routines", "Urban style", "High energy"],
  },
  {
    id: "choir",
    name: "Youth Choir",
    icon: <Mic className="w-6 h-6" />,
    description: "Inspirational vocal performances",
    groupSize: "15-25 singers",
    duration: "20-40 min",
    price: "From $300",
    includes: [
      "A cappella or accompanied",
      "Traditional & modern songs",
      "Harmonies",
    ],
  },
  {
    id: "full-show",
    name: "Full Cultural Show",
    icon: <Sparkles className="w-6 h-6" />,
    description: "Complete experience with dance, drumming, and choir",
    groupSize: "25-40 performers",
    duration: "60-90 min",
    price: "From $1,200",
    includes: [
      "All performance groups",
      "Multiple segments",
      "MC with cultural context",
      "Customizable program",
    ],
  },
];

// Testimonials from past clients (UNCHANGED - keep as mock data, no translation)
const hireTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kigali Marriott Hotel",
    comment:
      "The Indaro dancers performed at our New Year's Eve gala and were absolutely spectacular. Our guests were mesmerized by the traditional dances and drumming. Professional, punctual, and truly talented.",
    rating: 5,
    event: "Corporate Gala",
  },
  {
    id: 2,
    name: "Rwanda Development Board",
    comment:
      "We hired Indaro for a delegation visit and they exceeded expectations. The cultural performance was the highlight of the evening, and the performers engaged wonderfully with our international guests.",
    rating: 5,
    event: "Government Reception",
  },
  {
    id: 3,
    name: "International School of Kigali",
    comment:
      "The drumming workshop was a huge success with our students. The facilitators were patient, skilled, and made learning fun. We'll definitely book again for our next cultural day.",
    rating: 5,
    event: "School Workshop",
  },
];

// News Card Component with i18n (UI only)
const NewsCard: React.FC<NewsCardProps> = ({
  item,
  onClick,
  variant = "grid",
  t,
}) => {
  const categoryColors: Record<string, string> = {
    announcement: "bg-blue-100 text-blue-700",
    achievement: "bg-green-100 text-green-700",
    impact: "bg-purple-100 text-purple-700",
    partnership: "bg-orange-100 text-orange-700",
    event: "bg-pink-100 text-pink-700",
  };

  const getCategoryColor = (category: string): string => {
    return categoryColors[category] || "bg-gray-100 text-gray-700";
  };

  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
        onClick={() => onClick(item)}
      >
        <div className="relative h-96">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute top-6 left-6">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(item.category)}`}
            >
              {t(`news.categories.${item.category}`)}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-4 text-sm mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {item.readTime}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-white/80 line-clamp-2 mb-4">{item.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={item.authorImage}
                  alt={item.author}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{item.author}</p>
                  <p className="text-sm text-white/60">{item.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {item.views}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {item.likes}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
      onClick={() => onClick(item)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}
          >
            {t(`news.categories.${item.category}`)}
          </span>
        </div>
        {item.featured && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-white p-1.5 rounded-full">
            <Star className="w-3 h-3" />
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(item.date).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {item.readTime}
          </span>
        </div>

        <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={item.authorImage}
              alt={item.author}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs text-gray-600">{item.author}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {item.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              {item.likes}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Event Card Component with i18n (UI only)
const EventCard: React.FC<EventCardProps> = ({ event, onClick, t }) => {
  const eventTypeColors: Record<string, string> = {
    performance: "bg-purple-100 text-purple-700",
    workshop: "bg-blue-100 text-blue-700",
    sports: "bg-green-100 text-green-700",
    competition: "bg-orange-100 text-orange-700",
    festival: "bg-pink-100 text-pink-700",
    community: "bg-gray-100 text-gray-700",
  };

  const getEventTypeColor = (type: string): string => {
    return eventTypeColors[type] || "bg-gray-100 text-gray-700";
  };

  // Fix date arithmetic by converting to Date objects
  const eventDate = new Date(event.date);
  const today = new Date();
  const diffTime = eventDate.getTime() - today.getTime();
  const daysUntil = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const isSoon = daysUntil <= 7 && daysUntil > 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100"
      onClick={() => onClick(event)}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-48 h-32 relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          {isSoon && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
              {t("news.events.soon")}
            </div>
          )}
        </div>
        <div className="flex-1 p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${getEventTypeColor(event.category)}`}
              >
                {t(`news.categories.${event.type}`)}
              </span>
              <h3 className="font-bold text-lg mt-1">{event.title}</h3>
            </div>
            {event.featured && (
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            )}
          </div>

          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {event.description}
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(event.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {event.time}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {event.location}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {event.registered}/{event.capacity}
            </div>
          </div>

          <div className="flex justify-between items-center mt-3">
            <span className="text-sm font-semibold text-blue-600">
              {event.price}
            </span>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1">
              {t("news.events.details")} <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// News Modal Component with i18n (UI only)
const NewsModal: React.FC<NewsModalProps> = ({ item, onClose, t }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-96 object-cover"
        />

        <div className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                item.category === "announcement"
                  ? "bg-blue-100 text-blue-700"
                  : item.category === "achievement"
                    ? "bg-green-100 text-green-700"
                    : item.category === "impact"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-orange-100 text-orange-700"
              }`}
            >
              {t(`news.categories.${item.category}`)}
            </span>
            <span className="text-gray-500 text-sm">{item.readTime}</span>
          </div>

          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <img
                src={item.authorImage}
                alt={item.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{item.author}</p>
                <p className="text-sm text-gray-500">{item.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLiked(!liked)}
                className={`p-2 rounded-full transition-colors ${
                  liked
                    ? "bg-red-50 text-red-500"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-red-500" : ""}`} />
              </button>
              <button
                onClick={() => setSaved(!saved)}
                className={`p-2 rounded-full transition-colors ${
                  saved
                    ? "bg-blue-50 text-blue-500"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Bookmark
                  className={`w-5 h-5 ${saved ? "fill-blue-500" : ""}`}
                />
              </button>
              <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-lg leading-relaxed">{item.content}</p>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-3">{t("news.modal.tags")}</h3>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Event Modal Component with i18n (UI only)
const EventModal: React.FC<EventModalProps> = ({ event, onClose, t }) => {
  const [registered, setRegistered] = useState(false);

  if (!event) return null;

  const spotsLeft = event.capacity - event.registered;
  const isAlmostFull = spotsLeft <= 20 && spotsLeft > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                event.category === "performance"
                  ? "bg-purple-100 text-purple-700"
                  : event.category === "workshop"
                    ? "bg-blue-100 text-blue-700"
                    : event.category === "sports"
                      ? "bg-green-100 text-green-700"
                      : event.category === "competition"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-700"
              }`}
            >
              {t(`news.categories.${event.type}`)}
            </span>
            {event.featured && (
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Star className="w-4 h-4" /> {t("news.modal.featured")}
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">{t("news.events.date")}</p>
                <p className="font-medium">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">{t("news.events.time")}</p>
                <p className="font-medium">{event.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">
                  {t("news.events.location")}
                </p>
                <p className="font-medium">{event.location}</p>
                <p className="text-sm text-gray-500">{event.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">
                  {t("news.events.capacity")}
                </p>
                <p className="font-medium">
                  {event.registered} {t("news.events.registered")} /{" "}
                  {event.capacity} {t("news.events.capacity")}
                </p>
                {isAlmostFull && (
                  <p className="text-sm text-orange-600 font-semibold">
                    {t("news.events.soon")} {spotsLeft}{" "}
                    {t("news.events.spotsLeft")}!
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">{t("news.events.about")}</h3>
            <p className="text-gray-700 leading-relaxed">
              {event.longDescription}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">
                  {t("news.events.price")}
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {event.price}
                </p>
              </div>
              <button
                onClick={() => setRegistered(!registered)}
                className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                  registered
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {registered
                  ? t("news.events.registered")
                  : t("news.events.register")}
              </button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-3">{t("news.events.tags")}</h3>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Fixed Hire Us CTA Component with i18n (UI only, package names translated)
const FixedHireCTA: React.FC<FixedHireCTAProps> = ({ t }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showHireModal, setShowHireModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <AnimatePresence mode="wait">
          {!isMinimized ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden w-96"
            >
              <div className="p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <Theater className="w-6 h-6" />
                    <h3 className="font-bold text-lg">
                      {t("news.hireUs.title")}
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="text-white/80 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-sm text-purple-100 mb-4">
                  {t("news.hireUs.subtitle")}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <Music className="w-4 h-4 mx-auto mb-1" />
                    <p className="text-xs">
                      {t("news.hireUs.packages.traditionalDance")}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <Volume2 className="w-4 h-4 mx-auto mb-1" />
                    <p className="text-xs">
                      {t("news.hireUs.packages.drummingEnsemble")}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <Mic className="w-4 h-4 mx-auto mb-1" />
                    <p className="text-xs">{t("news.hireUs.packages.choir")}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <Sparkles className="w-4 h-4 mx-auto mb-1" />
                    <p className="text-xs">
                      {t("news.hireUs.packages.fullShow")}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>{t("news.hireUs.startingFrom")}:</span>
                    <span className="font-bold">$300</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{t("news.hireUs.groupsAvailable")}:</span>
                    <span className="font-bold">
                      5-40 {t("news.hireUs.performers")}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowHireModal(true)}
                  className="w-full bg-white text-purple-600 px-4 py-3 rounded-xl font-bold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  {t("news.hireUs.cta")}
                </button>

                <div className="flex items-center justify-center gap-4 mt-3 text-xs text-purple-200">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3" /> +250 788 555 123
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3" /> events@indaro.org
                  </span>
                </div>
              </div>

              <div className="bg-white/10 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  <span className="text-sm">
                    4.9 (87 {t("news.hireUs.rating")})
                  </span>
                </div>
                <span className="text-xs">{t("news.hireUs.serve")}</span>
              </div>
            </motion.div>
          ) : (
            <motion.button
              key="minimized"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsMinimized(false)}
              className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-4 rounded-full shadow-2xl hover:shadow-xl transition-shadow relative"
            >
              <Theater className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hire Us Modal with i18n (UI only) */}
      <AnimatePresence>
        {showHireModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setShowHireModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowHireModal(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-2">
                  {t("news.hireUs.title")}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t("news.hireUs.subtitle")}
                </p>

                {/* Packages Grid - Package names translated, descriptions kept as mock data */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {hirePackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="border rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                          {pkg.icon}
                        </div>
                        <span className="text-lg font-bold text-purple-600">
                          {pkg.price}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">
                        {t(`news.hireUs.packages.${pkg.id.replace("-", "")}`)}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {pkg.description}
                      </p>
                      <div className="space-y-1 text-sm">
                        <p className="flex items-center gap-2 text-gray-500">
                          <Users className="w-4 h-4" /> {pkg.groupSize}
                        </p>
                        <p className="flex items-center gap-2 text-gray-500">
                          <Clock className="w-4 h-4" /> {pkg.duration}
                        </p>
                      </div>
                      <div className="mt-3">
                        <p className="text-xs font-semibold mb-1">
                          {t("news.hireUs.includes")}:
                        </p>
                        <ul className="text-xs text-gray-500 space-y-1">
                          {pkg.includes.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonials - Kept as mock data */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="font-semibold mb-4">
                    {t("news.hireUs.whatClientsSay")}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {hireTestimonials.map((test) => (
                      <div key={test.id} className="bg-white p-4 rounded-lg">
                        <div className="flex items-center gap-1 text-yellow-400 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          "{test.comment}"
                        </p>
                        <p className="text-xs font-semibold">{test.name}</p>
                        <p className="text-xs text-gray-500">{test.event}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Form - UI only */}
                <form className="space-y-4">
                  <h3 className="font-semibold">
                    {t("news.hireUs.requestAvailability")}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder={t("news.hireUs.yourName")}
                      className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="email"
                      placeholder={t("news.hireUs.emailAddress")}
                      className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder={t("news.hireUs.phoneNumber")}
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <select className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500">
                      <option>{t("news.hireUs.selectPackage")}</option>
                      {hirePackages.map((pkg) => (
                        <option key={pkg.id}>
                          {t(`news.hireUs.packages.${pkg.id.replace("-", "")}`)}
                        </option>
                      ))}
                    </select>
                    <input
                      type="date"
                      className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <textarea
                    placeholder={t("news.hireUs.eventDetails")}
                    rows={4}
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition-colors">
                    {t("news.hireUs.submitRequest")}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Main News & Events Page with i18n
const NewsEventsPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [viewMode, setViewMode] = useState<string>("grid");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const featuredNews = newsItems.find((item) => item.featured);

  // Filter news based on tab and search
  const filteredNews = newsItems.filter((item) => {
    if (activeTab === "news" && item.type !== "news") return false;
    if (activeTab === "events" && item.type !== "events") return false;

    if (searchQuery) {
      return (
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  });

  const filteredEvents = events.filter((event) => {
    if (filterCategory !== "all" && event.category !== filterCategory)
      return false;

    if (searchQuery) {
      return (
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  });

  // Fix date comparison by converting to timestamps
  const today = new Date();

  // Upcoming events sorted by date
  const upcomingEvents = [...events]
    .filter((e) => new Date(e.date).getTime() >= today.getTime())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = [...events]
    .filter((e) => new Date(e.date).getTime() < today.getTime())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
            >
              <circle cx="10" cy="10" r="2" fill="white" />
            </pattern>
            <rect width="100" height="100" fill="url(#pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left md:max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              {t("news.hero.badge")}
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t("news.hero.title")}
              <br />
              {t("news.hero.titleLine2")}
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              {t("news.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() =>
                    document
                      .getElementById("news-feed")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2"
                >
                  <span>{t("news.hero.exploreButton")}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/get-involved"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {t("news.hero.getInvolvedButton")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Newspaper className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">
                {newsItems.length}+
              </div>
              <div className="text-sm text-gray-600">
                {t("news.stats.newsArticles")}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">
                {upcomingEvents.length}
              </div>
              <div className="text-sm text-gray-600">
                {t("news.stats.upcomingEvents")}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">1,200+</div>
              <div className="text-sm text-gray-600">
                {t("news.stats.eventAttendees")}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">8</div>
              <div className="text-sm text-gray-600">
                {t("news.stats.awardsWon")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="news-feed" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex border-b mb-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === "all"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t("news.tabs.all")}
              {activeTab === "all" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === "news"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t("news.tabs.news")}
              {activeTab === "news" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === "events"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t("news.tabs.events")}
              {activeTab === "events" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                />
              )}
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="w-full md:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("news.controls.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
                <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {activeTab === "events" && (
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="all">{t("news.controls.allCategories")}</option>
                <option value="performance">
                  {t("news.controls.performances")}
                </option>
                <option value="workshop">{t("news.controls.workshops")}</option>
                <option value="sports">{t("news.controls.sports")}</option>
                <option value="competition">
                  {t("news.controls.competitions")}
                </option>
                <option value="festival">{t("news.controls.festivals")}</option>
                <option value="community">
                  {t("news.controls.community")}
                </option>
              </select>
            )}

            {activeTab !== "events" && (
              <div className="flex border border-gray-300 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 transition-colors ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 transition-colors ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Featured News */}
          {activeTab !== "events" && featuredNews && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                {t("news.news.featuredStory")}
              </h2>
              <NewsCard
                item={featuredNews}
                onClick={setSelectedNews}
                variant="featured"
                t={t}
              />
            </div>
          )}

          {/* News Grid */}
          {activeTab !== "events" && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">
                {t("news.news.latestNews")}
              </h2>
              <AnimatePresence mode="wait">
                {viewMode === "grid" ? (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {filteredNews.map((item) => (
                      <NewsCard
                        key={item.id}
                        item={item}
                        onClick={setSelectedNews}
                        t={t}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {filteredNews.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer"
                        onClick={() => setSelectedNews(item)}
                      >
                        <div className="flex">
                          <div className="w-48 h-32">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${
                                  item.category === "announcement"
                                    ? "bg-blue-100 text-blue-700"
                                    : item.category === "achievement"
                                      ? "bg-green-100 text-green-700"
                                      : "bg-purple-100 text-purple-700"
                                }`}
                              >
                                {t(`news.categories.${item.category}`)}
                              </span>
                              <span className="text-xs text-gray-500">
                                {item.date}
                              </span>
                            </div>
                            <h3 className="font-bold mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {item.excerpt}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Events Section */}
          {activeTab !== "news" && (
            <>
              {/* Upcoming Events */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  {t("news.events.upcomingEvents")}
                  {upcomingEvents.length > 0 && (
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      ({upcomingEvents.length} {t("news.events.eventsCount")})
                    </span>
                  )}
                </h2>

                <div className="space-y-4">
                  {filteredEvents
                    .filter(
                      (e) => new Date(e.date).getTime() >= today.getTime(),
                    )
                    .sort(
                      (a, b) =>
                        new Date(a.date).getTime() - new Date(b.date).getTime(),
                    )
                    .map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        onClick={setSelectedEvent}
                        t={t}
                      />
                    ))}
                </div>

                {filteredEvents.filter(
                  (e) => new Date(e.date).getTime() >= today.getTime(),
                ).length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-xl">
                    <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">
                      {t("news.events.noUpcomingEvents")}
                    </p>
                  </div>
                )}
              </div>

              {/* Past Events */}
              {pastEvents.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-gray-400" />
                    {t("news.events.pastEvents")}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pastEvents.slice(0, 4).map((event) => (
                      <div
                        key={event.id}
                        className="bg-gray-50 rounded-xl p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() => setSelectedEvent(event)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">{event.title}</h3>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(event.date).toLocaleDateString()} •{" "}
                              {event.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {pastEvents.length > 4 && (
                    <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
                      {t("news.events.viewAllPast")}{" "}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}
            </>
          )}

          {/* Empty State */}
          {((activeTab !== "events" && filteredNews.length === 0) ||
            (activeTab === "events" && filteredEvents.length === 0)) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Newspaper className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                {t("news.emptyState.title")}
              </h3>
              <p className="text-gray-500">
                {t("news.emptyState.description")}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-3xl mx-auto text-center text-white px-4">
          <Bell className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            {t("news.newsletter.title")}
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            {t("news.newsletter.description")}
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder={t("news.newsletter.placeholder")}
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              {t("news.newsletter.subscribe")}
            </button>
          </form>
          <p className="text-sm text-blue-200 mt-4">
            {t("news.newsletter.privacy")}
          </p>
        </div>
      </section>

      {/* Fixed Hire Us CTA */}
      <FixedHireCTA t={t} />

      {/* Modals */}
      <AnimatePresence>
        {selectedNews && (
          <NewsModal
            item={selectedNews}
            onClose={() => setSelectedNews(null)}
            t={t}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
            t={t}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsEventsPage;
