import {
  ProjectItem,
  RecognitionLogo,
  ExperienceItem,
  TestimonialItem,
} from "./type";

export const COLUMN_1_PROJECTS: ProjectItem[] = [
  {
    id: "ground-reality",
    title: "GROUND REALITY INFORMATION PROCESSING SYSTEM",
    image: "/images/invention/ground-reality.jpg.png",
    height: { xs: 360, md: 470 },
  },
  {
    id: "apparatus",
    title: "APPARATUS FOR DIFFERENTLY-ABLED USERS TO COMMUNICATE",
    image: "/images/invention/apparatus.jpg.png",
    height: { xs: 280, md: 320 },
  },
];

export const COLUMN_2_PROJECTS: ProjectItem[] = [
  {
    id: "aircraft",
    title: "AIRCRAFT TRACKING SYSTEM & METHOD",
    image: "/images/invention/aircraft.jpg.png",
    height: { xs: 280, md: 320 },
  },
  {
    id: "iot-based",
    title: "IOT-BASED POOL MANAGEMENT SYSTEM",
    image: "/images/invention/Iot-based.jpg.png",
    height: { xs: 360, md: 470 },
  },
];

export const COLUMN_3_PROJECTS: ProjectItem[] = [
  {
    id: "smart-rescue",
    title: "SMART RESCUE SYSTEM WITH INTERACTIVE APPLICATION",
    image: "/images/invention/smart-rascue.jpg.png",
    height: { xs: 360, md: 470 },
  },
  {
    id: "biodegradable",
    title: "BIODEGRADABLE BOTTLE CAP USING FUNGUS “PESTALOTIOPSIS MICROSPORIA”",
    image: "/images/invention/biodegradable.jpg.png",
    height: { xs: 280, md: 320 },
  },
];

export const INVENTION_RESEARCH_HEADING = "Inventions & Research Projects";
export const INVENTION_RESEARCH_DESCRIPTION =
  "A deep passion for problem-solving drives every project — turning real-world challenges into practical, life-saving technologies.";

export const RECOGNITION_HEADING = "Recognition & Awards";

export const RECOGNITION_BULLETS = [
  "Featured on BBC, The Hindu, and Times of India for aerospace innovation.",
  "Honored by various international institutions for technological innovation.",
  "Invited speaker at global aviation forums and technology summits.",
  "Recognized among top innovators promoting safe air transport systems.",
];

export const RECOGNITION_QUOTE =
  "“Innovation is not about complex machines; it’s about simplifying life and saving lives.”";

export const RECOGNITION_AUTHOR = "Mirza Faizan";

export const RECOGNITION_LOGOS: RecognitionLogo[] = [
  {
    id: "mit",
    name: "MIT Lincoln Laboratory",
    image: "/images/recognition/MIT.png",
  },
  {
    id: "nasa",
    name: "NASA",
    image: "/images/recognition/Nasa.png",
  },
  {
    id: "battelle-1",
    name: "Battelle",
    image: "/images/recognition/bettelle.png",
  },
  {
    id: "oak-ridge",
    name: "Oak Ridge National Laboratory",
    image: "/images/recognition/Oak-ridge.png",
  },
  {
    id: "battelle-2",
    name: "Battelle",
    image: "/images/recognition/bettelle.png",
  },
];

export const TALKS_HEADING = "Talks & Thought Leadership";
export const TALKS_DESCRIPTION =
  "Mirza Faizan regularly mentors young engineers, guiding them on ideation, research methodologies, and socially responsible technology. His guest lectures and public sessions inspire the next generation of scientists to innovate fearlessly.";

export const TALKS_BULLETS = [
  "Featured Talks (TEDx, University Lectures, Panels)",
  "Innovation Mentorship Initiative",
  "Advisory Roles & Collaborations",
];

export const EXPERIENCE_HEADING = "Experience & Collaborations";

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: "Founder / Inventor",
    description: "Ground Reality Information Processing System (GRIPS)",
  },
  {
    role: "Aerospace Scientist",
    description: "Worked with international aviation research teams.",
  },
  {
    role: "Technology Consultant",
    description: "Guiding R&D for safety systems and AI-based analytics.",
  },
  {
    role: "Mentor & Educator",
    description: "Advocating innovation and STEM education for youth.",
  },
];

export const WORLD_SAYS_HEADING = "What the World Says";
export const WORLD_SAYS_DESCRIPTION =
  "World has praised Mr.Mirza Faizan for his exceptional creativity, clear vision, and ability to transform ideas into impactful, user-focused digital experiences.";

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    title: "Aviation Safety Board Expert",
    location: "California",
    daysAgo: "38 Days ago",
    quote:
      "Mirza’s work on GRIPS has the potential to redefine aviation safety globally.",
  },
  {
    id: "2",
    title: "Industry Colleague",
    location: "California",
    daysAgo: "3 Days ago",
    quote:
      "His passion for innovation is matched only by his dedication to public safety.",
  },
  {
    id: "3",
    title: "Aviation Safety Board Expert",
    location: "California",
    daysAgo: "38 Days ago",
    quote:
      "Mirza’s work on GRIPS has the potential to redefine aviation safety globally.",
  },
  {
    id: "4",
    title: "Aerospace Research Director",
    location: "Washington, D.C.",
    daysAgo: "12 Days ago",
    quote:
      "Ground Reality Information Processing System is a groundbreaking invention in global aviation safety.",
  },
];

export const GET_IN_TOUCH_HEADING = "Get in Touch";
export const GET_IN_TOUCH_DESCRIPTION =
  "For research collaborations, speaking engagements, or media inquiries, please reach out.";

export const FOOTER_QUOTE =
  "An idea becomes powerful only when it serves a purpose greater than oneself.";

export const SOCIAL_LINKS = [
  { id: "facebook", name: "Facebook", href: "https://facebook.com" },
  { id: "x", name: "X", href: "https://x.com" },
  { id: "instagram", name: "Instagram", href: "https://instagram.com" },
  { id: "linkedin", name: "LinkedIn", href: "https://linkedin.com" },
  { id: "google", name: "Google", href: "https://google.com" },
  { id: "youtube", name: "YouTube", href: "https://youtube.com" },
];
