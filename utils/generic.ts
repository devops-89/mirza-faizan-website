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
    height: { xs: 250, sm: 360, md: 470 },
  },
  {
    id: "apparatus",
    title: "APPARATUS FOR DIFFERENTLY-ABLED USERS TO COMMUNICATE",
    image: "/images/invention/apparatus.jpg.png",
    height: { xs: 220, sm: 280, md: 320 },
  },
];

export const COLUMN_2_PROJECTS: ProjectItem[] = [
  {
    id: "aircraft",
    title: "AIRCRAFT TRACKING SYSTEM & METHOD",
    image: "/images/invention/aircraft.jpg.png",
    height: { xs: 220, sm: 280, md: 320 },
  },
  {
    id: "iot-based",
    title: "IOT-BASED POOL MANAGEMENT SYSTEM",
    image: "/images/invention/Iot-based.jpg.png",
    height: { xs: 250, sm: 360, md: 470 },
  },
];

export const COLUMN_3_PROJECTS: ProjectItem[] = [
  {
    id: "smart-rescue",
    title: "SMART RESCUE SYSTEM WITH INTERACTIVE APPLICATION",
    image: "/images/invention/smart-rascue.jpg.png",
    height: { xs: 250, sm: 360, md: 470 },
  },
  {
    id: "biodegradable",
    title: "BIODEGRADABLE BOTTLE CAP USING FUNGUS “PESTALOTIOPSIS MICROSPORIA”",
    image: "/images/invention/biodegradable.jpg.png",
    height: { xs: 220, sm: 280, md: 320 },
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

export const US_PATENTS_GRANTED = [
  { id: "us-1", patentNo: "U.S. patent 20210269998A1", title: "Apparatus and method to clean garbage from water bodies", region: "US", status: "Granted" },
  { id: "us-2", patentNo: "U.S. patent 20210269158A1", title: "Automated Aircraft Tray Table Disinfecting System Using Ultra-Violet light", region: "US", status: "Granted" },
  { id: "us-3", patentNo: "U.S. patent 20220034624A1", title: "Relay based system to launch a projectile", region: "US", status: "Granted" },
  { id: "us-4", patentNo: "U.S. patent 20210269997A1", title: "Automated system for cleaning and recovering spilled oil in the ocean using hair felt rollers", region: "US", status: "Granted" },
  { id: "us-5", patentNo: "U.S. patent 20210270240A1", title: "Wind powered system to lift water using multiple tanks", region: "US", status: "Granted" },
  { id: "us-6", patentNo: "U.S. patent 11464462B1", title: "Drug abuse prevention device and a method thereof", region: "US", status: "Granted" },
  { id: "us-7", patentNo: "U.S. patent 11433916B1", title: "System to generate an alert to wake a driver of a vehicle and a method thereof", region: "US", status: "Granted" },
  { id: "us-8", patentNo: "U.S. patent 20230065017A1", title: "Package delivery box", region: "US", status: "Granted" },
  { id: "us-9", patentNo: "U.S. patent 20210086970A1", title: "Biodegradable bottle cap using pestalotiopsis microsporia to biodegrade waste plastic bottle", region: "US", status: "Granted" },
  { id: "us-10", patentNo: "U.S. patent 20230034830A1", title: "Fluid flow control unit", region: "US", status: "Granted" },
  { id: "us-11", patentNo: "U.S. patent 20230048142A1", title: "Wearable device for managing alcohol-driven violence", region: "US", status: "Granted" },
  { id: "us-12", patentNo: "U.S. patent 20220386914A1", title: "System and Method for Mental State Determination", region: "US", status: "Granted" },
  { id: "us-13", patentNo: "U.S. patent 20210270793A1", title: "Handheld device to detect lead compounds and impurities in water", region: "US", status: "Granted" },
  { id: "us-14", patentNo: "U.S. patent 20220388788A1", title: "A high-speed pressure based propulsion system for transporting resources", region: "US", status: "Granted" },
  { id: "us-15", patentNo: "U.S. patent 20230061443A1", title: "Automatic sunvisor assembly", region: "US", status: "Granted" },
  { id: "us-16", patentNo: "U.S. patent 20230066405A1", title: "An apparatus for sanitising products", region: "US", status: "Granted" },
  { id: "us-17", patentNo: "U.S. patent 20220099408A1", title: "Deep sea pressure based projectile launching system", region: "US", status: "Granted" },
  { id: "us-18", patentNo: "U.S. patent 20220389694A1", title: "Smart shower head", region: "US", status: "Granted" },
  { id: "us-19", patentNo: "U.S. patent 20230060737A1", title: "A system for refilling of used markers", region: "US", status: "Granted" },
  { id: "us-20", patentNo: "U.S. patent 20220388736A1", title: "Bio-Degradable Container", region: "US", status: "Granted" },
  { id: "us-21", patentNo: "U.S. patent 20240087440A1", title: "Iot based management system and a method for assisting users around a swimming pool", region: "US", status: "Granted" },
  { id: "us-22", patentNo: "U.S. patent 20230324680A1", title: "Apparatus to enable disabled users to communicate and a method thereof", region: "US", status: "Granted" },
  { id: "us-23", patentNo: "U.S. patent 20240085134A1", title: "Method and system for preventing injury by friendly fire", region: "US", status: "Granted" },
  { id: "us-24", patentNo: "U.S. patent 20240080057A1", title: "Biodegradable cover for a portable electronic device", region: "US", status: "Granted" },
  { id: "us-25", patentNo: "U.S. patent 20240094830A1", title: "Method and system for providing a smart whiteboard cleaner", region: "US", status: "Granted" },
  { id: "us-26", patentNo: "U.S. patent 20240138541A1", title: "Perfume dispersing device", region: "US", status: "Granted" },
  { id: "us-27", patentNo: "U.S. patent 20220390615A1", title: "Aircraft tracking system and method", region: "US", status: "Granted" },
  { id: "us-28", patentNo: "U.S. patent 20230069173A1", title: "Smart rescue system coordinated with an interactive application", region: "US", status: "Granted" },
  { id: "us-29", patentNo: "U.S. patent 20240144357A1", title: "System for displaying selected clothes on a dummy human body", region: "US", status: "Granted" },
  { id: "us-30", patentNo: "U.S. patent 20220387639A1", title: "Self sanitizing door handle with protective cover", region: "US", status: "Granted" },
  { id: "us-31", patentNo: "U.S. patent 20230332468A1", title: "Method and system for providing a smart ladder to a user", region: "US", status: "Granted" },
];

export const SOUTH_AFRICA_PATENTS_GRANTED = [
  { id: "sa-1", patentNo: "South African Patent 202209145B", title: "Water desalination system", region: "South Africa", status: "Granted" },
  { id: "sa-2", patentNo: "South African Patent 202209147B", title: "Method and apparatus for enabling communication of disabled users", region: "South Africa", status: "Granted" },
  { id: "sa-3", patentNo: "South African Patent 202209146B", title: "Brick for power generation", region: "South Africa", status: "Granted" },
  { id: "sa-4", patentNo: "South African Patent 202209144B", title: "Vehicle collision avoidance system", region: "South Africa", status: "Granted" },
  { id: "sa-5", patentNo: "South African Patent 202209154B", title: "Stress management system", region: "South Africa", status: "Granted" },
  { id: "sa-6", patentNo: "South African Patent 202210453B", title: "Preventing finger of a user from pinch in a door gap", region: "South Africa", status: "Granted" },
  { id: "sa-7", patentNo: "South African Patent 202303467B", title: "Method and system for providing a smart ladder to a user", region: "South Africa", status: "Granted" },
  { id: "sa-8", patentNo: "South African Patent 202303468B", title: "A system for monitoring water consumption of users and a method thereof", region: "South Africa", status: "Granted" },
  { id: "sa-9", patentNo: "South African Patent 202303469B", title: "A system and a method for color-blind person to distinguish colors in a surrounding", region: "South Africa", status: "Granted" },
  { id: "sa-10", patentNo: "South African Patent 202303472B", title: "An IOT-Based management system and a method for assisting users around a swimming pool", region: "South Africa", status: "Granted" },
  { id: "sa-11", patentNo: "South African Patent 202303517B", title: "Method and system for preventing injury by friendly fire", region: "South Africa", status: "Granted" },
  { id: "sa-12", patentNo: "South African Patent 202402960B", title: "Stabilizer system for controlling tipping of furniture", region: "South Africa", status: "Granted" },
];

export const PATENTS_PENDING = [
  { id: "pen-1", patentNo: "U.S. patent 20210270050A1", title: "A system to prevent injury from stair fall", region: "Pending", status: "Pending" },
  { id: "pen-2", patentNo: "U.S. patent 20220390200A1", title: "Safety system for preventing mass shootings by Smart guns", region: "Pending", status: "Pending" },
  { id: "pen-3", patentNo: "U.S. patent 20220386899A1", title: "Wearable device to identify medical emergencies and notify", region: "Pending", status: "Pending" },
  { id: "pen-4", patentNo: "U.S. patent 20220388809A1", title: "System and method for contactless provisioning of elevator service", region: "Pending", status: "Pending" },
  { id: "pen-5", patentNo: "U.S. patent 20220387647A1", title: "Self-sanitizing Poles", region: "Pending", status: "Pending" },
  { id: "pen-6", patentNo: "U.S. patent 20220392593A1", title: "Medical surgery recording, processing and reporting system", region: "Pending", status: "Pending" },
  { id: "pen-7", patentNo: "U.S. patent 20230061572A1", title: "The automatic system to monitor health condition of an infant", region: "Pending", status: "Pending" },
  { id: "pen-8", patentNo: "U.S. patent 20250057488A1", title: "System and method for alerting users based on brain signals", region: "Pending", status: "Pending" },
  { id: "pen-9", patentNo: "U.S. patent 20250121490A1", title: "Exoskeleton apparatus to assist movement of user using brain signals", region: "Pending", status: "Pending" },
];
