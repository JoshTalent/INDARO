// GalleryPage.tsx
import React, { useState, useEffect } from "react";

// Gallery item type
type GalleryItem = {
  id: number;
  type: "image" | "video";
  category: string;
  subcategory: string;
  title: string;
  description: string;
  location: string;
  date: string;
  photographer?: string;
  videographer?: string;
  featured?: boolean;
  likes: number;
  downloads: number;
  imageUrl?: string;
  videoUrl?: string;
  poster?: string;
  thumbnail: string;
  tags: string[];
  duration?: string;
  views?: number;
};
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  X,
  Heart,
  Download,
  Share2,
  Filter,
  LayoutGrid,
  List,
  Play,
  Camera,
  Video,
  Calendar,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Info,
  Star,
  Image as ImageIcon,
  Sparkles,
  Award,
  Music,
  BookOpen,
  Home,
  Clock,
} from "lucide-react";

// Sample gallery data - replace with actual content
const galleryItems: GalleryItem[] = [
  // Dance & Performance Images
  {
    id: 1,
    type: "image" as const,
    category: "dance",
    subcategory: "traditional",
    title: "Traditional Dance Performance",
    description:
      "Youth performing traditional Rwandan Intore dance at community event",
    location: "Kigali, Rwanda",
    date: "2024-12-15",
    photographer: "Jean Pierre",
    featured: true,
    likes: 234,
    downloads: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3",
    thumbnail:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&w=400",
    tags: ["dance", "culture", "traditional", "performance"],
  },
  {
    id: 2,
    type: "image" as const,
    category: "dance",
    subcategory: "afro",
    title: "Afro Dance Workshop",
    description: "Students learning Afro-dance moves during weekly workshop",
    location: "Gasabo, Kigali",
    date: "2024-11-20",
    photographer: "Marie Claire",
    featured: true,
    likes: 156,
    downloads: 23,
    imageUrl:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3",
    thumbnail:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&w=400",
    tags: ["dance", "afro", "workshop", "youth"],
  },
  {
    id: 3,
    type: "video" as const,
    category: "dance",
    subcategory: "breakdance",
    title: "Breakdance Battle Finals",
    description: "Annual breakdance competition showcasing youth talent",
    location: "Downtown Kigali",
    date: "2024-10-10",
    videographer: "Samuel N.",
    duration: "3:45",
    likes: 892,
    views: 2345,
    downloads: 0,
    videoUrl: "https://example.com/video1.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&w=400",
    poster:
      "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3",
    tags: ["breakdance", "competition", "urban"],
  },
  {
    id: 4,
    type: "image" as const,
    category: "education",
    subcategory: "classroom",
    title: "ICT Training Session",
    description: "Students learning computer skills in our tech lab",
    location: "Education Center, Kigali",
    date: "2024-12-05",
    photographer: "Peter M.",
    featured: true,
    likes: 167,
    downloads: 34,
    imageUrl:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3",
    thumbnail:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&w=400",
    tags: ["education", "technology", "learning", "ICT"],
  },
  {
    id: 5,
    type: "image" as const,
    category: "education",
    subcategory: "materials",
    title: "School Supplies Distribution",
    description: "Providing educational materials to underprivileged students",
    location: "Rwamagana",
    date: "2024-11-28",
    photographer: "Alice U.",
    likes: 203,
    downloads: 41,
    imageUrl:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3",
    thumbnail:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&w=400",
    tags: ["education", "supplies", "community"],
  },
  {
    id: 6,
    type: "video" as const,
    category: "education",
    subcategory: "success",
    title: "Student Success Stories",
    description:
      "Interviews with students who returned to school through our program",
    location: "Multiple locations",
    date: "2024-12-01",
    videographer: "David K.",
    duration: "5:20",
    likes: 445,
    views: 1678,
    downloads: 0,
    videoUrl: "https://example.com/video2.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&w=400",
    poster:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3",
    tags: ["education", "success", "testimonials"],
  },
  {
    id: 7,
    type: "image" as const,
    category: "sports",
    subcategory: "boxing",
    title: "Boxing Training Session",
    description: "Young athletes training at our boxing program",
    location: "Sports Complex, Kigali",
    date: "2024-12-10",
    photographer: "James O.",
    featured: true,
    likes: 312,
    downloads: 56,
    imageUrl:
      "https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-4.0.3",
    thumbnail:
      "https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-4.0.3&w=400",
    tags: ["sports", "boxing", "training", "discipline"],
  },
  {
    id: 8,
    type: "video" as const,
    category: "sports",
    subcategory: "boxing",
    title: "Inter-school Boxing Tournament",
    description: "Highlights from our annual boxing competition",
    location: "Kigali Arena",
    date: "2024-09-15",
    videographer: "Robert M.",
    duration: "4:15",
    likes: 567,
    views: 2341,
    downloads: 0,
    videoUrl: "https://example.com/video3.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?ixlib=rb-4.0.3&w=400",
    poster:
      "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?ixlib=rb-4.0.3",
    tags: ["sports", "boxing", "competition"],
  },
  {
    id: 9,
    type: "image" as const,
    category: "sports",
    subcategory: "skating",
    title: "Skating Club Session",
    description: "Youth learning skating skills",
    location: "Skating Park, Kigali",
    date: "2024-11-18",
    photographer: "Grace T.",
    likes: 145,
    downloads: 28,
    imageUrl:
      "https://images.unsplash.com/photo-1524593166157-1c29ec749b64?ixlib=rb-4.0.3",
    thumbnail:
      "https://images.unsplash.com/photo-1524593166157-1c29ec749b64?ixlib=rb-4.0.3&w=400",
    tags: ["sports", "skating", "youth"],
  },
  {
    id: 10,
    type: "image" as const,
    category: "living",
    subcategory: "shelter",
    title: "Safe Home Environment",
    description: "Children in our residential care program",
    location: "Children's Home, Kigali",
    date: "2024-12-12",
    photographer: "Sarah K.",
    featured: true,
    likes: 423,
    downloads: 67,
    imageUrl:
      "https://images.unsplash.com/photo-1524062431328-9f4fe202ad35?ixlib=rb-4.0.3",
    thumbnail:
      "https://images.unsplash.com/photo-1524062431328-9f4fe202ad35?ixlib=rb-4.0.3&w=400",
    tags: ["living", "shelter", "care", "children"],
  },
  {
    id: 11,
    type: "video" as const,
    category: "living",
    subcategory: "meals",
    title: "Daily Meal Program",
    description: "Nutrition program providing healthy meals to children",
    location: "Community Center",
    date: "2024-11-25",
    videographer: "Paul N.",
    duration: "2:30",
    likes: 234,
    views: 1234,
    downloads: 0,
    videoUrl: "https://example.com/video4.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1593113598338-cd288d649433?ixlib=rb-4.0.3&w=400",
    poster:
      "https://images.unsplash.com/photo-1593113598338-cd288d649433?ixlib=rb-4.0.3",
    tags: ["living", "meals", "nutrition", "care"],
  },
  {
    id: 12,
    type: "image" as const,
    category: "music",
    subcategory: "drumming",
    title: "Umutagara Drumming Practice",
    description: "Traditional drumming session with master instructors",
    location: "Cultural Center",
    date: "2024-12-08",
    photographer: "Emmanuel D.",
    featured: true,
    likes: 289,
    downloads: 52,
    imageUrl:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3",
    thumbnail:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3&w=400",
    tags: ["music", "drumming", "traditional", "culture"],
  },
];

// Categories with icons and translation keys
const categories = [
  {
    id: "all",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
    translationKey: "all",
  },
  {
    id: "images",
    icon: <Camera className="w-5 h-5" />,
    translationKey: "images",
  },
  {
    id: "videos",
    icon: <Video className="w-5 h-5" />,
    translationKey: "videos",
  },
  { id: "dance", icon: <Music className="w-5 h-5" />, translationKey: "dance" },
  { id: "music", icon: <Music className="w-5 h-5" />, translationKey: "music" },
  {
    id: "education",
    icon: <BookOpen className="w-5 h-5" />,
    translationKey: "education",
  },
  {
    id: "sports",
    icon: <Award className="w-5 h-5" />,
    translationKey: "sports",
  },
  {
    id: "living",
    icon: <Home className="w-5 h-5" />,
    translationKey: "living",
  },
];

// Lightbox Component with i18n
type LightboxProps = {
  item: GalleryItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  t: (key: string, options?: any) => string;
};
const Lightbox: React.FC<LightboxProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  t,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showInfo, setShowInfo] = useState<boolean>(true);

  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-4 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-4 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div className="flex-1 flex items-center justify-center p-12">
          {item.type === "video" ? (
            <video
              src={item.videoUrl}
              poster={item.poster}
              controls
              autoPlay
              className="max-h-full max-w-full rounded-lg"
            />
          ) : (
            <div className="relative">
              <motion.img
                src={item.imageUrl}
                alt={item.title}
                style={{ scale: zoomLevel }}
                className="max-h-[85vh] max-w-[85vw] rounded-lg cursor-zoom-in"
                onClick={() => setZoomLevel(zoomLevel === 1 ? 2 : 1)}
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={() => setZoomLevel(Math.min(zoomLevel + 0.5, 3))}
                  className="p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setZoomLevel(Math.max(zoomLevel - 0.5, 1))}
                  className="p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        <motion.div
          initial={{ x: 400 }}
          animate={{ x: showInfo ? 0 : 400 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute right-0 top-0 h-full w-96 bg-white shadow-2xl overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <button
                onClick={() => setShowInfo(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                item.type === "video"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {item.type === "video" ? (
                <Video className="w-4 h-4 mr-1" />
              ) : (
                <Camera className="w-4 h-4 mr-1" />
              )}
              {item.type === "video"
                ? t("gallery.mediaTypes.video")
                : t("gallery.mediaTypes.photo")}
            </div>

            <p className="text-gray-600 mb-6">{item.description}</p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                <span>
                  {new Date(item.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-3 text-blue-500" />
                <span>{item.photographer || item.videographer}</span>
              </div>
              {item.duration && (
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-blue-500" />
                  <span>
                    {t("gallery.lightbox.duration")}: {item.duration}
                  </span>
                </div>
              )}
            </div>

            <div className="flex gap-6 mb-6">
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                <span className="font-bold">{item.likes}</span>
              </div>
              <div className="flex items-center">
                <Download className="w-5 h-5 text-green-500 mr-2" />
                <span className="font-bold">{item.downloads}</span>
              </div>
              {item.views && (
                <div className="flex items-center">
                  <Play className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="font-bold">{item.views}</span>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">
                {t("gallery.lightbox.tags")}
              </h3>
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

            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4" />
                {t("gallery.lightbox.download")}
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="w-4 h-4" />
                {t("gallery.lightbox.share")}
              </button>
            </div>
          </div>
        </motion.div>

        {!showInfo && (
          <button
            onClick={() => setShowInfo(true)}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-3 bg-blue-600 hover:bg-blue-700 rounded-l-lg text-white transition-all"
          >
            <Info className="w-5 h-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

// Gallery Card Component with i18n
type GalleryCardProps = {
  item: GalleryItem;
  onClick: () => void;
  t: (key: string, options?: any) => string;
};
const GalleryCard: React.FC<GalleryCardProps> = ({ item, onClick, t }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        />

        <div
          className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 ${
            item.type === "video"
              ? "bg-purple-600 text-white"
              : "bg-blue-600 text-white"
          }`}
        >
          {item.type === "video" ? (
            <Video className="w-3 h-3" />
          ) : (
            <Camera className="w-3 h-3" />
          )}
          {item.type === "video"
            ? t("gallery.mediaTypes.video")
            : t("gallery.mediaTypes.photo")}
        </div>

        {item.featured && (
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-yellow-500 text-white rounded-full text-xs font-medium flex items-center gap-1">
            <Star className="w-3 h-3" />
            {t("gallery.mediaTypes.featured")}
          </div>
        )}

        {item.type === "video" && item.duration && (
          <div className="absolute bottom-4 left-4 px-2 py-1 bg-black/60 text-white rounded-lg text-xs font-medium">
            {item.duration}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute bottom-4 right-4 flex gap-2"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-lg transition-colors"
          >
            <Heart
              className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-700"}`}
            />
          </button>
        </motion.div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3" />
            <span>{new Date(item.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              {item.likes}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mt-3">
          {item.tags.slice(0, 2).map((tag: string, idx: number) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
          {item.tags.length > 2 && (
            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
              +{item.tags.length - 2}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Main Gallery Component with i18n
const GalleryPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filteredItems, setFilteredItems] =
    useState<GalleryItem[]>(galleryItems);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<"latest" | "popular" | "featured">(
    "latest",
  );

  useEffect(() => {
    let filtered: GalleryItem[] = [...galleryItems];

    if (selectedCategory === "images") {
      filtered = filtered.filter((item) => item.type === "image");
    } else if (selectedCategory === "videos") {
      filtered = filtered.filter((item) => item.type === "video");
    } else if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      );
    }

    if (sortBy === "latest") {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "popular") {
      filtered.sort(
        (a, b) => b.likes + (b.views || 0) - (a.likes + (a.views || 0)),
      );
    } else if (sortBy === "featured") {
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredItems(filtered as GalleryItem[]);
  }, [selectedCategory, searchQuery, sortBy]);

  const currentIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;
  const hasNext = currentIndex < filteredItems.length - 1;
  const hasPrev = currentIndex > 0;

  const handleNext = () => {
    if (hasNext) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    }
  };

  const totalImages = galleryItems.filter(
    (item) => item.type === "image",
  ).length;
  const totalVideos = galleryItems.filter(
    (item) => item.type === "video",
  ).length;
  const totalFeatured = galleryItems.filter((item) => item.featured).length;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section - Matching What We Do page style */}
      <section className="relative bg-black text-white overflow-hidden">
        {/* Abstract pattern overlay */}
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
              {t("gallery.hero.badge")}
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t("gallery.hero.title")}
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              {t("gallery.hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() =>
                    document
                      .getElementById("gallery-grid")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2"
                >
                  <span>{t("gallery.hero.exploreButton")}</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/donate"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {t("gallery.hero.supportButton")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
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

      {/* Gallery Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Camera className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">
                {totalImages}+
              </div>
              <div className="text-sm text-gray-600">
                {t("gallery.stats.photos")}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Video className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">
                {totalVideos}+
              </div>
              <div className="text-sm text-gray-600">
                {t("gallery.stats.videos")}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">
                {totalFeatured}
              </div>
              <div className="text-sm text-gray-600">
                {t("gallery.stats.featured")}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">2021-2025</div>
              <div className="text-sm text-gray-600">
                {t("gallery.stats.timeline")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-8 bg-white sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="w-full md:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("gallery.controls.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
                <svg
                  className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "latest" | "popular" | "featured")
                }
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="latest">
                  {t("gallery.controls.sort.latest")}
                </option>
                <option value="popular">
                  {t("gallery.controls.sort.popular")}
                </option>
                <option value="featured">
                  {t("gallery.controls.sort.featured")}
                </option>
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`p-3 border rounded-xl transition-colors ${
                  showFilters
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Filter className="w-5 h-5" />
              </button>

              <div className="flex border border-gray-300 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 transition-colors ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <LayoutGrid className="w-5 h-5" />
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
            </div>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="py-4 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                        selectedCategory === category.id
                          ? "bg-blue-600 text-white shadow-lg scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.icon}
                      {t(`gallery.categories.${category.translationKey}`)}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            <span className="font-medium">
              {filteredItems.length} {t("gallery.controls.itemsCount")}
            </span>
            {selectedCategory !== "all" && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full flex items-center gap-1">
                {t(
                  `gallery.categories.${categories.find((c) => c.id === selectedCategory)?.translationKey}`,
                )}
                <button onClick={() => setSelectedCategory("all")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full flex items-center gap-1">
                "{searchQuery}"
                <button onClick={() => setSearchQuery("")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery-grid" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {viewMode === "grid" && (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredItems.map((item) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    onClick={() => setSelectedItem(item)}
                    t={t}
                  />
                ))}
              </motion.div>
            )}

            {viewMode === "list" && (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-48 h-48 relative">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        {item.type === "video" && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Play className="w-12 h-12 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              item.type === "video"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {item.type === "video"
                              ? t("gallery.mediaTypes.video")
                              : t("gallery.mediaTypes.photo")}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {item.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <ImageIcon className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                {t("gallery.emptyState.title")}
              </h3>
              <p className="text-gray-500">
                {t("gallery.emptyState.description")}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Collection */}
      {galleryItems.filter((item) => item.featured).length > 0 && (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {t("gallery.featured.title")}
                </h2>
                <p className="text-gray-600">
                  {t("gallery.featured.subtitle")}
                </p>
              </div>
              <Sparkles className="w-8 h-8 text-yellow-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryItems
                .filter((item) => item.featured)
                .slice(0, 4)
                .map((item) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    onClick={() => setSelectedItem(item)}
                    t={t}
                  />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4">{t("gallery.cta.title")}</h2>
          <p className="text-xl mb-8 text-blue-100">
            {t("gallery.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors">
              <Link to="/contact"> {t("gallery.cta.submitButton")}</Link>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-colors">
              <Link to="/contact">{t("gallery.cta.contactButton")}</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <Lightbox
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={hasNext}
            hasPrev={hasPrev}
            t={t}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
