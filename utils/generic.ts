import {
  ProjectItem,
  RecognitionLogo,
  ExperienceItem,
  TestimonialItem,
  AboutInfo,
  CounterItem,
  HeroInfo,
  PatentHeroInfo,
  PatentSectionMetadata,
  SocialLinkItem,
} from "./type";

export const COLUMN_1_PROJECTS: ProjectItem[] = [
  {
    id: "ground-reality",
    title: "Ground Reality Information Processing System (GRIPS)",
    image: "/images/invention/ground-reality.jpg.png",
    category: "Aviation Safety",
    description:
      "Advanced runway safety technology preventing runway incursions, excursions, and detecting foreign object debris in real time.",
  },
  {
    id: "apparatus",
    title: "Apparatus for Differently-Abled Users to Communicate",
    image: "/images/invention/apparatus.jpg.png",
    category: "Assistive Tech",
    description:
      "Tactile gesture interface translating micro-movements into synthetic speech and text for disabled users.",
  },
];

export const COLUMN_2_PROJECTS: ProjectItem[] = [
  {
    id: "aircraft",
    title: "Aircraft Tracking System & Sensor Fusion Method",
    image: "/images/invention/aircraft.jpg.png",
    category: "Aerospace Systems",
    description:
      "Ground-based sensor fusion platform monitoring aircraft movement across taxiways and active runways in real time.",
  },
  {
    id: "iot-based",
    title: "IoT-Based Aquatic Safety & Pool Management System",
    image: "/images/invention/Iot-based.jpg.png",
    category: "Aquatic IoT Safety",
    description:
      "Underwater motion sensing and perimeter monitoring system alerting lifeguards to submersion hazards.",
  },
];

export const COLUMN_3_PROJECTS: ProjectItem[] = [
  {
    id: "smart-rescue",
    title: "Smart Rescue System with Interactive Application",
    image: "/images/invention/smart-rascue.jpg.png",
    category: "Emergency Response",
    description:
      "Wearable emergency SOS beacons integrated with interactive mobile dispatch coordination networks.",
  },
  {
    id: "biodegradable",
    title: "Biodegradable Bottle Cap using Fungal Decomposition",
    image: "/images/invention/biodegradable.jpg.png",
    category: "Bio-Tech Innovation",
    description:
      "Eco-friendly bottle cap impregnated with Pestalotiopsis microspora fungus to accelerate plastic waste breakdown.",
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
  "Featured Talks (TEDx, University Lectures,\nPanels)",
  "Innovation Mentorship\nInitiative",
  "Advisory Roles &\nCollaborations",
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

export const US_PATENTS_GRANTED = [
  {
    id: "US20210269998A1",
    patentNo: "U.S. patent 20210269998A1",
    title: "Apparatus and method to clean garbage from water bodies",
    region: "US",
    status: "Granted",
    description:
      "An automated pontoon water vehicle with a conveyor belt assembly for collecting and extracting floating debris and plastic garbage from aquatic environments.",
  },
  {
    id: "US20210269158A1",
    patentNo: "U.S. patent 20210269158A1",
    title:
      "Automated Aircraft Tray Table Disinfecting System Using Ultra-Violet light",
    region: "US",
    status: "Granted",
    description:
      "An automated disinfection system using ultra-violet (UV) light emitters integrated into aircraft tray tables to eliminate surface pathogens between flights.",
  },
  {
    id: "US20220034624A1",
    patentNo: "U.S. patent 20220034624A1",
    title: "Relay based system to launch a projectile",
    region: "US",
    status: "Granted",
    description:
      "A relay-based electromagnetic launch system using sequential magnetic acceleration rings to launch payloads and projectiles with high velocity.",
  },
  {
    id: "US20210269997A1",
    patentNo: "U.S. patent 20210269997A1",
    title:
      "Automated system for cleaning and recovering spilled oil in the ocean using hair felt rollers",
    region: "US",
    status: "Granted",
    description:
      "An automated pontoon vessel utilizing specialized human hair felt rollers for efficient ocean crude oil spill retrieval and containment.",
  },
  {
    id: "US20210270240A1",
    patentNo: "U.S. patent 20210270240A1",
    title: "Wind powered system to lift water using multiple tanks",
    region: "US",
    status: "Granted",
    description:
      "A wind-powered water pumping system featuring a central rotating cylinder and multi-tank relay staging to lift water across vertical elevations.",
  },
  {
    id: "US11464462B1",
    patentNo: "U.S. patent 11464462B1",
    title: "Drug abuse prevention device and a method thereof",
    region: "US",
    status: "Granted",
    description:
      "A wearable smart wristband combining micro-fluidic sweat analysis and ambient air sensing to detect illicit drug exposure and alert guardians.",
  },
  {
    id: "US11433916B1",
    patentNo: "U.S. patent 11433916B1",
    title:
      "System to generate an alert to wake a driver of a vehicle and a method thereof",
    region: "US",
    status: "Granted",
    description:
      "An intelligent driver vigilance system that monitors physiological vitals and facial posture to generate multi-sensory awakening alerts.",
  },
  {
    id: "US20230065017A1",
    patentNo: "U.S. patent 20230065017A1",
    title: "Package delivery box",
    region: "US",
    status: "Granted",
    description:
      "A secure smart package delivery receptacle equipped with automated locking mechanisms, anti-theft sensors, and mobile notification connectivity.",
  },
  {
    id: "US20210086970A1",
    patentNo: "U.S. patent 20210086970A1",
    title:
      "Biodegradable bottle cap using pestalotiopsis microsporia to biodegrade waste plastic bottle",
    region: "US",
    status: "Granted",
    description:
      "A biodegradable bottle cap impregnated with Pestalotiopsis microspora fungus to accelerate plastic waste breakdown in natural environments.",
  },
  {
    id: "US20230034830A1",
    patentNo: "U.S. patent 20230034830A1",
    title: "Fluid flow control unit",
    region: "US",
    status: "Granted",
    description:
      "A high-precision fluid flow control unit for regulating liquid dynamics and pressure in industrial and agricultural fluid distribution.",
  },
  {
    id: "US20230048142A1",
    patentNo: "U.S. patent 20230048142A1",
    title: "Wearable device for managing alcohol-driven violence",
    region: "US",
    status: "Granted",
    description:
      "A bio-sensing wearable device that detects physiological indicators of intoxication and aggression to prevent alcohol-driven violence.",
  },
  {
    id: "US20220386914A1",
    patentNo: "U.S. patent 20220386914A1",
    title: "System and Method for Mental State Determination",
    region: "US",
    status: "Granted",
    description:
      "A real-time physiological and neurological monitoring system that assesses cognitive load, stress, and mental states.",
  },
  {
    id: "US20210270793A1",
    patentNo: "U.S. patent 20210270793A1",
    title: "Handheld device to detect lead compounds and impurities in water",
    region: "US",
    status: "Granted",
    description:
      "A portable handheld device using electrochemical sensors to instantly identify lead contamination and toxic heavy metal impurities in water.",
  },
  {
    id: "US20220388788A1",
    patentNo: "U.S. patent 20220388788A1",
    title:
      "A high-speed pressure based propulsion system for transporting resources",
    region: "US",
    status: "Granted",
    description:
      "A high-speed pressure-based pneumatic propulsion network for transporting cargo and resources through low-friction pipeline tubes.",
  },
  {
    id: "US20230061443A1",
    patentNo: "U.S. patent 20230061443A1",
    title: "Automatic sunvisor assembly",
    region: "US",
    status: "Granted",
    description:
      "An automated vehicle sunvisor assembly that dynamically adjusts shade position based on real-time solar glare tracking and driver gaze.",
  },
  {
    id: "US20230066405A1",
    patentNo: "U.S. patent 20230066405A1",
    title: "An apparatus for sanitising products",
    region: "US",
    status: "Granted",
    description:
      "A sanitization device using multi-wavelength ultraviolet light and ultrasonic waves to decontaminate commercial products and personal items.",
  },
  {
    id: "US20220099408A1",
    patentNo: "U.S. patent 20220099408A1",
    title: "Deep sea pressure based projectile launching system",
    region: "US",
    status: "Granted",
    description:
      "A deep-sea hydrostatic pressure-based projectile launching system utilizing ocean water head pressure for energy-efficient underwater propulsion.",
  },
  {
    id: "US20220389694A1",
    patentNo: "U.S. patent 20220389694A1",
    title: "Smart shower head",
    region: "US",
    status: "Granted",
    description:
      "An eco-friendly smart shower head equipped with water flow metering, temperature feedback, and automated water-saving shutoff valves.",
  },
  {
    id: "US20230060737A1",
    patentNo: "U.S. patent 20230060737A1",
    title: "A system for refilling of used markers",
    region: "US",
    status: "Granted",
    description:
      "An automated marker ink refilling apparatus designed to recharge dry whiteboard markers cleanly and extend stationery lifespan.",
  },
  {
    id: "US20220388736A1",
    patentNo: "U.S. patent 20220388736A1",
    title: "Bio-Degradable Container",
    region: "US",
    status: "Granted",
    description:
      "A sustainable biodegradable food and liquid container engineered from natural organic fibers to replace single-use plastics.",
  },
  {
    id: "US20240087440A1",
    patentNo: "U.S. patent 20240087440A1",
    title:
      "Iot based management system and a method for assisting users around a swimming pool",
    region: "US",
    status: "Granted",
    description:
      "An IoT-enabled aquatic safety monitoring system that tracks pool perimeter activity, water submersion time, and alerts lifeguards.",
  },
  {
    id: "US20230324680A1",
    patentNo: "U.S. patent 20230324680A1",
    title:
      "Apparatus to enable disabled users to communicate and a method thereof",
    region: "US",
    status: "Granted",
    description:
      "An assistive communication apparatus that translates tactile micro-gestures into synthetic speech and text for speech-impaired users.",
  },
  {
    id: "US20240085134A1",
    patentNo: "U.S. patent 20240085134A1",
    title: "Method and system for preventing injury by friendly fire",
    region: "US",
    status: "Granted",
    description:
      "A military tactical system utilizing directional RFID tagging and smart targeting optics to prevent friendly fire casualties.",
  },
  {
    id: "US20240080057A1",
    patentNo: "U.S. patent 20240080057A1",
    title: "Biodegradable cover for a portable electronic device",
    region: "US",
    status: "Granted",
    description:
      "A protective eco-friendly case for smartphones and electronic gadgets crafted from fully compostable organic materials.",
  },
  {
    id: "US20240094830A1",
    patentNo: "U.S. patent 20240094830A1",
    title: "Method and system for providing a smart whiteboard cleaner",
    region: "US",
    status: "Granted",
    description:
      "An autonomous robotic whiteboard cleaning mechanism equipped with optical erasing sensors and uniform surface wiping.",
  },
  {
    id: "US20240138541A1",
    patentNo: "U.S. patent 20240138541A1",
    title: "Perfume dispersing device",
    region: "US",
    status: "Granted",
    description:
      "A smart perfume dispersing apparatus featuring ambient air scent sensing, timed micro-diffusion, and personalized fragrance control.",
  },
  {
    id: "US20220390615A1",
    patentNo: "U.S. patent 20220390615A1",
    title: "Aircraft tracking system and method",
    region: "US",
    status: "Granted",
    description:
      "A real-time aircraft tracking system using ground-based sensor fusion (GRIPS) to prevent runway incursions and detect debris.",
  },
  {
    id: "US20230069173A1",
    patentNo: "U.S. patent 20230069173A1",
    title: "Smart rescue system coordinated with an interactive application",
    region: "US",
    status: "Granted",
    description:
      "An emergency response coordination system pairing wearable SOS beacons with interactive mobile application dispatch networks.",
  },
  {
    id: "US20240144357A1",
    patentNo: "U.S. patent 20240144357A1",
    title: "System for displaying selected clothes on a dummy human body",
    region: "US",
    status: "Granted",
    description:
      "A smart retail apparel display system projecting 3D garment simulations and tailored outfits onto interactive dummy mannequins.",
  },
  {
    id: "US20220387639A1",
    patentNo: "U.S. patent 20220387639A1",
    title: "Self sanitizing door handle with protective cover",
    region: "US",
    status: "Granted",
    description:
      "A self-sanitizing architectural door handle featuring continuous antimicrobial surface coating and protective sanitary covers.",
  },
  {
    id: "US20230332468A1",
    patentNo: "U.S. patent 20230332468A1",
    title: "Method and system for providing a smart ladder to a user",
    region: "US",
    status: "Granted",
    description:
      "An intelligent telescopic ladder assembly featuring automatic level stabilization sensors, anti-slip locks, and safety indicators.",
  },
];

export const SOUTH_AFRICA_PATENTS_GRANTED = [
  {
    id: "202209145B",
    patentNo: "South African Patent 202209145B",
    title: "Water desalination system",
    region: "South Africa",
    status: "Granted",
    description:
      "An off-grid solar-thermal water desalination system designed to convert seawater and brackish water into clean drinking water.",
  },
  {
    id: "202209147B",
    patentNo: "South African Patent 202209147B",
    title: "Method and apparatus for enabling communication of disabled users",
    region: "South Africa",
    status: "Granted",
    description:
      "An innovative communication interface apparatus empowering speech and mobility impaired individuals with custom gesture input.",
  },
  {
    id: "202209146B",
    patentNo: "South African Patent 202209146B",
    title: "Brick for power generation",
    region: "South Africa",
    status: "Granted",
    description:
      "A modular piezoelectric power generation brick that harvests kinetic impact and ambient solar thermal energy to produce electricity.",
  },
  {
    id: "202209144B",
    patentNo: "South African Patent 202209144B",
    title: "Vehicle collision avoidance system",
    region: "South Africa",
    status: "Granted",
    description:
      "An active vehicle collision avoidance system combining radar sensors, emergency braking triggers, and proximity warning alerts.",
  },
  {
    id: "202209154B",
    patentNo: "South African Patent 202209154B",
    title: "Stress management system",
    region: "South Africa",
    status: "Granted",
    description:
      "A biofeedback stress management wearable system that monitors galvanic skin response and guides calming breathing exercises.",
  },
  {
    id: "202210453B",
    patentNo: "South African Patent 202210453B",
    title: "Preventing finger of a user from pinch in a door gap",
    region: "South Africa",
    status: "Granted",
    description:
      "A door gap safety guard system designed to prevent finger pinch injuries, particularly protecting children around door hinges.",
  },
  {
    id: "202303467B",
    patentNo: "South African Patent 202303467B",
    title: "Method and system for providing a smart ladder to a user",
    region: "South Africa",
    status: "Granted",
    description:
      "A smart ladder safety monitoring system equipped with tilt detection angle sensors and automatic stabilizing outriggers.",
  },
  {
    id: "202303468B",
    patentNo: "South African Patent 202303468B",
    title:
      "A system for monitoring water consumption of users and a method thereof",
    region: "South Africa",
    status: "Granted",
    description:
      "An IoT water consumption monitoring system with real-time leak detection, usage analytics, and automated flow shutoff valves.",
  },
  {
    id: "202303469B",
    patentNo: "South African Patent 202303469B",
    title:
      "A system and a method for color-blind person to distinguish colors in a surrounding",
    region: "South Africa",
    status: "Granted",
    description:
      "An assistive vision system featuring spectral filtering lenses and camera translation to help color-blind users distinguish colors.",
  },
  {
    id: "202303472B",
    patentNo: "South African Patent 202303472B",
    title:
      "An IOT-Based management system and a method for assisting users around a swimming pool",
    region: "South Africa",
    status: "Granted",
    description:
      "An IoT swimming pool safety management system incorporating underwater movement sensors and perimeter alarm notifications.",
  },
  {
    id: "202303517B",
    patentNo: "South African Patent 202303517B",
    title: "Method and system for preventing injury by friendly fire",
    region: "South Africa",
    status: "Granted",
    description:
      "A battlefield tactical safety system designed to identify friendly forces via encrypted RF transponders and eliminate friendly fire.",
  },
  {
    id: "202402960B",
    patentNo: "South African Patent 202402960B",
    title: "Stabilizer system for controlling tipping of furniture",
    region: "South Africa",
    status: "Granted",
    description:
      "An anti-tipping furniture stabilizer mechanism that automatically deploys counter-weight supports when unbalanced loads are detected.",
  },
];

export const PATENTS_PENDING = [
  {
    id: "US20210270050A1",
    patentNo: "U.S. patent 20210270050A1",
    title: "A system to prevent injury from stair fall",
    region: "Pending",
    status: "Pending",
    description:
      "A stair fall prevention safety system featuring active impact mitigation and intelligent posture monitoring to protect elderly users.",
  },
  {
    id: "US20220390200A1",
    patentNo: "U.S. patent 20220390200A1",
    title: "Safety system for preventing mass shootings by Smart guns",
    region: "Pending",
    status: "Pending",
    description:
      "A smart gun security architecture integrating biometric authorization and location-based geofencing to prevent mass shootings.",
  },
  {
    id: "US20210270830A1",
    patentNo: "U.S. patent 20210270830A1",
    title: "Sensory test system for diagnosing peripheral neuropathy",
    region: "Pending",
    status: "Pending",
    description:
      "A non-invasive diagnostic sensory test device designed to detect early indicators of peripheral neuropathy in diabetic patients.",
  },
  {
    id: "US20210272020A1",
    patentNo: "U.S. patent 20210272020A1",
    title: "System and method for intelligent scheduling",
    region: "Pending",
    status: "Pending",
    description:
      "An AI-powered intelligent scheduling system that optimizes time allocation, workflow priorities, and resource management.",
  },
  {
    id: "US20210270740A1",
    patentNo: "U.S. patent 20210270740A1",
    title: "Device for detecting hazardous airborne particles",
    region: "Pending",
    status: "Pending",
    description:
      "A compact sensor device configured to detect hazardous airborne micro-particles, toxic gases, and industrial air pollutants.",
  },
];

export const ABOUT_INFO: AboutInfo = {
  name: "Mirza Faizan",
  designation: "Founder & Chief Innovation Facilitator, DiscoverSTEM-USA",
  paragraphs: [
    "Mirza Faizan is an internationally recognized aerospace scientist, inventor and innovation educator with extensive experience in aerospace, defence and mission-critical systems.",
    "He is the inventor of the Ground Reality Information Processing System (GRIPS), an advanced runway safety technology designed to prevent runway incursions, runway excursions and detect foreign object debris in real time.",
    "His work has been recognized by experts from NASA, the U.S. Army Missile Research, Development & Engineering Center, and the U.S. Air Force. He has also been invited to evaluate research outcomes from leading global research and innovation labs such as NASA, MIT Lincoln Lab, Defence Threat Reduction Agency, Sandia National Lab-USA, Lawrence Livermore National Lab-USA, Argonne National Lab-USA, Oak Ridge National Lab-USA etc. as a judge for the prestigious R&D 100 Awards.",
    "Under his mentorship, over 1000 school students have filed patent applications, with over 450 students’ patents granted, making DiscoverSTEM one of the world’s leading school innovation ecosystems focused on intellectual property creation by young innovators.",
    "He is a recipient of the George Washington Honor Medal, a US national award for revolutionizing education in the United States. In March 2025, Texas House of Representatives passed House Resolution HR-403 and honor and recognize his contribution in Innovation, Research and Entrepreneurship in the State of Texas.",
    "Mr. Faizan is a serial innovator with over 50 patents granted and over 52 patents pending in the United States. He is a US citizen and resides in Dallas, Texas with his family. He will personally lead this training and mentor participating teachers.",
  ],
};

export const HOME_COUNTERS: CounterItem[] = [
  {
    value: "23",
    unit: "k",
    label: "Social Followers",
  },
  {
    value: "12",
    unit: "m",
    label: "Email Subscribers",
  },
  {
    value: "82",
    unit: "+",
    label: "Patents",
  },
];

export const HERO_INFO: HeroInfo = {
  greeting: "Hello there,",
  meetTitle: "Meet",
  nameTitle: "Mr.Mirza Faizan.",
  subtitle:
    "Aerospace Scientist | Inventor | Technology Visionary shaping the future of aviation safety and AI in aerospace.",
};

export const PATENT_HERO_INFO: PatentHeroInfo = {
  title: "Patents",
  subtitle: "52 Total Patent Filings",
  description:
    "Mirza Faizan is a serial innovator whose mission-critical aerospace safety systems, AI analytics, biotech, and assistive technologies have produced groundbreaking patented inventions across the United States and internationally.",
  stats: [
    { num: "31", label: "US Patents Granted" },
    { num: "12", label: "South Africa Granted" },
  ],
};

export const FILTER_PORTFOLIO_HEADING = "Filter Patent Portfolio";

export const PATENT_SECTIONS_METADATA: PatentSectionMetadata[] = [
  {
    id: "US",
    title: "U.S. Granted Patents",
    subtitle:
      "Patents granted by the United States Patent and Trademark Office",
  },
  {
    id: "SA",
    title: "South Africa Granted Patents",
    subtitle:
      "Patents granted by the Companies and Intellectual Property Commission (CIPC)",
  },
  {
    id: "PENDING",
    title: "Pending Patent Applications",
    subtitle:
      "Applications currently under examination in global patent offices",
  },
];

export const FOOTER_SUBTITLE = "DISCOVER NEXT";

import { PatentDetailData } from "./type";

// ─── Patent detail records keyed by publication number ──────────────────────
export const PATENT_DETAILS: Record<string, PatentDetailData> = {
  US20210269998A1: {
    id: "US20210269998A1",
    patentNo: "US20210269998A1",
    grantPublicationNo: "US11414825B2",
    title: "Apparatus and method to clean garbage from water bodies",
    region: "US",
    status: "Granted",
    abstract:
      "The apparatus for removal of garbage from water comprises a garbage collecting system in a boat with at least one inlet to allow the liquid to flow into the garbage collecting system, a sump pump for pulling liquid into and through the garbage collecting system, and to an outlet of the system, and a collecting system to collect the garbage, wherein the sump pump pumps at such a speed to maintain the highest point on the bottom edge of the inlet at a level below the water line outside the body, and to maintain the water level within the body slightly below that of the water outside the body.",
    inventors: [
      "Mirza Faizan",
      "Yumna Syeda Ali Shah",
      "Nimra Syeda Ali Shah",
      "Bilal Syed Ali Shah",
    ],
    filingDate: "Feb 25, 2021",
    publicationDate: "Sep 2, 2021",
    priorityDate: "Feb 27, 2020",
    applicationNumber: "US17/184,998",
    keywords: [
      "garbage cleaning",
      "ocean cleanup",
      "sump pump",
      "microplastics filter",
      "oil spill recovery",
      "coarse filter",
      "boat skimmer",
      "autonomous navigation",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/77/58/1e/c34f12ecf1d8bd/US20210269998A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20210269998A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/a3/22/0f/fd6d286e844d67/US20210269998A1-20210902-D00000.png",
    images: [
      {
        title: "FIG. 1a & 1b — Boat & Hemisphere Assembly Overview",
        caption:
          "Top and side elevation views depicting the floating boat hull (10), rudder/propeller mechanics (11), top/bottom hemispheres (12 & 13), and hemisphere connectors (15).",
        url: "https://patentimages.storage.googleapis.com/a3/22/0f/fd6d286e844d67/US20210269998A1-20210902-D00000.png",
      },
      {
        title: "FIG. 1 Detail — Hull Construction & Component Layout",
        caption:
          "Detailed mechanical schematic illustrating the catamaran/hemisphere boat construction, rudder alignment, and internal structural frame.",
        url: "https://patentimages.storage.googleapis.com/28/b7/c7/67e2994de1135c/US20210269998A1-20210902-D00001.png",
      },
      {
        title: "FIG. 2 — 3-Stage Filtration System Cross-Section",
        caption:
          "Cross-sectional view showing the fluid flow path through the Coarse Filter (18), Fine Microplastic Filter (17), Oleophilic Oil Absorbing Filter (16), and Sump Pump (19).",
        url: "https://patentimages.storage.googleapis.com/e6/37/7b/fd5f1f5653c0ca/US20210269998A1-20210902-D00002.png",
      },
    ],
    summaryHighlights: [
      "3-Stage Filtration System: Integrates a Coarse Filter (macro-trash), Fine Filter (microplastics & granular debris), and an Oleophilic Polyurethane Foam Filter (oil spills & hydrocarbons).",
      "Autonomous 3-Mode Operation: Smart switching between Detection Mode (6 km/h search), Operation Mode (active filtration), and Idle Mode (energy-saving 4 km/h navigation).",
      "Continuous Sump Pump Suction: Creates an artificial water height differential to draw surface garbage into the collection basket without harming marine life.",
      "Smart Sensing & AI Analysis: Outfitted with cameras and image-processing sensors to detect waste clusters and alert operations when full.",
    ],
    referenceNumerals: [
      { num: "10", label: "Filter Carrying Boat / Hull" },
      { num: "11", label: "Propeller & Rudder Mechanics" },
      { num: "12", label: "Bottom Hemisphere of Filter Boat" },
      { num: "13", label: "Top Hemisphere of Filter Boat" },
      { num: "14", label: "Filtration Assembly Unit" },
      { num: "15", label: "Hemisphere Connectors" },
      { num: "16", label: "Oil Absorbing Filter (Oleophilic Foam)" },
      { num: "17", label: "Fine Filter (Microplastic Trap)" },
      { num: "18", label: "Coarse Filter & Supporting Connectors" },
      { num: "19", label: "Sump Pump Unit" },
      { num: "20", label: "Outer Protective Casing" },
      { num: "21", label: "Water Flow Direction Path" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "An apparatus for garbage cleaning, wherein the apparatus is attached to a boat for removing garbage from a water surface, said apparatus comprising: an openable hemisphere having a top and a bottom, wherein said top and bottom parts are joined together with the polarity of connectors; a plurality of filters; a plurality of inlets, wherein each inlet of said plurality of inlets comprises an opening to permit said garbage to pass through said inlet; a basket to collect garbage filtered through the filters, a sump pump for maintaining a substantially constant flow of water into said plurality of inlets and through said flow-through openings in said collection means; and a control module of the garbage cleaning system to work in any of the detection mode, operation mode and an idle mode.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The apparatus as claimed in claim 1 wherein said basket have dimensions to closely fit within the interior walls of the boat.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The apparatus as in claim 2 wherein said basket includes means for lifting said basket from the boat when the boat is opened.",
      },
      {
        num: 4,
        isIndependent: false,
        text: "The apparatus as claimed in claim 1 further comprises a monitoring camera configured to monitor the real-time status of the garbage collection and monitoring of one or more areas.",
      },
      {
        num: 5,
        isIndependent: false,
        text: "The apparatus as claimed in claim 1 further comprises a plurality of sensors for segregation of collected garbage.",
      },
      {
        num: 6,
        isIndependent: false,
        text: "The apparatus as claimed in claim 1 further comprises one or more processors configured to analyze the collected garbage.",
      },
      {
        num: 7,
        isIndependent: false,
        text: "The apparatus as claimed in claim 1 further comprises a three-layer filter system, wherein said filters are a first coarse filter, second fine filter, and a third oil absorbing filter.",
      },
    ],
    classifications: [
      {
        code: "E02B 15/04",
        description:
          "Devices for cleaning or keeping clear the surface of open water from oil or like floating materials by separating or removing these materials",
      },
      {
        code: "E02B 15/106",
        description: "Overflow skimmers with suction heads; suction heads",
      },
      {
        code: "C02F 1/00",
        description: "Treatment of water, waste water, or sewage",
      },
      {
        code: "E02B 15/048",
        description:
          "Oil collectors moved over the water skimming the water surface",
      },
      {
        code: "E02B 15/101",
        description: "Means floating loosely on the water absorbing oil",
      },
    ],
    legalEvents: [
      {
        date: "Feb 27, 2020",
        title: "Priority to US17/184,998",
        type: "Priority",
      },
      {
        date: "Feb 25, 2021",
        title: "Application filed by Individual inventors",
        type: "Filing",
      },
      {
        date: "Sep 2, 2021",
        title: "Publication of Patent Application US20210269998A1",
        type: "Publication",
      },
      {
        date: "Aug 16, 2022",
        title: "Patent Granted (Patent No. US11414825B2)",
        type: "Grant",
      },
      {
        date: "Feb 25, 2041",
        title: "Anticipated Patent Expiration Date",
        type: "Status",
      },
    ],
    descriptionSections: [
      {
        heading: "TECHNICAL FIELD",
        paragraphs: [
          "The present invention relates to a cleaning apparatus, more particularly to the cleaning of water bodies like ocean, sea, river, lake, ship docking area, anchorage, dockyard, harbor marina from unnatural garbage and other pollution or contamination.",
        ],
      },
      {
        heading: "BACKGROUND OF THE INVENTION",
        paragraphs: [
          "The 'Great Pacific Garbage Patch' is one of the gyres that has grown to more than 600,000 square miles, containing around 1.8 trillion pieces of trash. Furthermore, oil spills kill thousands of marine animals every year, while 90% of illegal plastic dumps end up in the ocean as toxic microplastics.",
          "Conventional anti-pollution vessels and passive current traps lack precision, have high costs, or process waste too slowly. In light of this, there is a strong need for an efficient, multi-stage garbage cleaning apparatus capable of removing large trash, microplastics, and oil slicks simultaneously.",
        ],
      },
      {
        heading: "SUMMARY OF THE INVENTION",
        paragraphs: [
          "The present invention provides an apparatus capable of rapidly removing and storing common large and small floating garbage. In an exemplary embodiment, the apparatus comprises a boat hull with at least one inlet, a sump pump pulling liquid through the system, and a 3-stage filtration system.",
          "Stage 1 features a coarse filter to remove plastic bottles, bags, and cans. Stage 2 utilizes a fine multi-layer filter for microplastics and granular debris. Stage 3 consists of oleophilic polyurethane foam designed to absorb oil spills and hydrocarbon contaminants, restoring clean water to the environment.",
        ],
      },
      {
        heading: "DETAILED DESCRIPTION & DRAWINGS",
        paragraphs: [
          "FIG. 1a and FIG. 1b illustrate the floating boat hull (10) propelled by rudder/propeller mechanics (11). The top hemisphere (13) and bottom hemisphere (12) are securely fastened via hemisphere connectors (15).",
          "FIG. 2 demonstrates the top cross-sectional view. As the sump pump (19) pulls water through the lower hemisphere inlets, water flows sequentially through the coarse filter (18), fine filter (17), and oleophilic oil-absorbing filter (16) before being discharged back into the ocean.",
        ],
      },
    ],
  },

  US20210269158A1: {
    id: "US20210269158A1",
    patentNo: "US20210269158A1",
    grantPublicationNo: "US11427326B2",
    title:
      "Automated Aircraft Tray Table Disinfecting System Using Ultra-Violet light",
    region: "US",
    status: "Granted",
    abstract:
      "A sanitation assembly attaches over a surface inside a tray table of an aircraft. A source of UV radiation is mounted to the assembly and configured to direct UVC radiation to the tray table at a predetermined dosage, wherein the assembly uses for disinfection of the aircraft tray table. The embodiments may use UV light sources and/or a disinfection unit powered by a fuel cell or other external power source.",
    inventors: [
      "Mirza Faizan",
      "Yumna Syeda Ali Shah",
      "Nimra Syeda Ali Shah",
      "Bilal Syed Ali Shah",
    ],
    filingDate: "Feb 25, 2021",
    publicationDate: "Sep 2, 2021",
    priorityDate: "Feb 27, 2020",
    applicationNumber: "US17/185,008",
    keywords: [
      "aircraft tray table",
      "UVC disinfection",
      "safety switch",
      "germicidal UV light",
      "pathogen elimination",
      "laminar surface",
      "light sealant",
      "in-flight sanitation",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/0f/dd/06/fa75a0662d2221/US20210269158A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20210269158A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/d2/12/10/8693c7f4e75714/US20210269158A1-20210902-D00000.png",
    images: [
      {
        title: "FIG. 1 — Aircraft Seat & Tray Table Disinfection Assembly",
        caption:
          "Overall elevation view of the UVC sanitization system mounted behind airplane seat (10) showing laminar surface (12), UVC LEDs (13), and locking safety latches (15, 16).",
        url: "https://patentimages.storage.googleapis.com/d2/12/10/8693c7f4e75714/US20210269158A1-20210902-D00000.png",
      },
      {
        title: "FIG. 1 Detail — Seatback Mounting & Power Source",
        caption:
          "Schematic showing seat attachment via nut-bolt mechanism (14), removable/rechargeable power pack (18), and safety switch circuit alignment.",
        url: "https://patentimages.storage.googleapis.com/7a/96/c4/17ff4f726c8a4d/US20210269158A1-20210902-D00001.png",
      },
      {
        title: "FIG. 2 — Foldable Tray Table with Embedded UVC Strip",
        caption:
          "Perspective view of the foldable tray table (19) across hinge (20) with perimeter light sealant (21) and parallel UVC LED array (22).",
        url: "https://patentimages.storage.googleapis.com/da/90/4b/006a2af38b1f95/US20210269158A1-20210902-D00002.png",
      },
      {
        title: "FIG. 3 — Closed Tray Table Disinfection Activation State",
        caption:
          "Operational state view when tray table is stowed upright; latches (15 & 16) complete the safety switch circuit, triggering indicator LED (24) and starting 18–30 sec UVC cycle.",
        url: "https://patentimages.storage.googleapis.com/00/3c/07/46bef75832e159/US20210269158A1-20210902-D00003.png",
      },
      {
        title: "FIG. 4 — Automated Disinfection Flowchart & Logic",
        caption:
          "System process flowchart illustrating safety switch monitoring, circuit closure validation, UVC dosage timing, status LED color transitions (Red → Green), and fault alarms.",
        url: "https://patentimages.storage.googleapis.com/05/8d/aa/9237b9dd085a25/US20210269158A1-20210902-D00004.png",
      },
    ],
    summaryHighlights: [
      "Automated Stow-and-Disinfect: Disinfection process automatically triggers when the tray table is folded into the locked upright position.",
      "Safety Sealant & Eye Protection: Lined with flexible light sealant edges (12A/21) to prevent UVC radiation leakage into the passenger cabin.",
      "18–30 Second Rapid Cycle: Emits germicidal UVC (240nm–285nm) to eliminate 99.9% of bacteria and viruses in under 30 seconds.",
      "Fail-Safe Interlock Switch: Latches (15 & 16) act as a physical safety switch; UV LEDs deactivate instantly if the tray table is opened during cycle.",
    ],
    referenceNumerals: [
      { num: "10", label: "Backside of Airplane Seat" },
      { num: "11", label: "Tray Table of Airplane Seat" },
      { num: "12", label: "Laminar Surface with UVC Light Source" },
      { num: "12A", label: "Edge Light Sealant" },
      { num: "13", label: "Ultraviolet (UVC) Light Source / LEDs" },
      { num: "14", label: "Nut-Bolt / Attachment Mechanism" },
      { num: "15", label: "Primary Safety Latch Switch 1" },
      { num: "16", label: "Secondary Safety Latch Switch 1" },
      { num: "17", label: "Auxiliary Safety Switches 2" },
      { num: "18", label: "Removable & Rechargeable Power Source" },
      { num: "19", label: "Foldable Aircraft Tray Table" },
      { num: "20", label: "Folding Hinge Assembly" },
      { num: "21", label: "Perimeter Light Sealant Tape" },
      { num: "22", label: "UVC LEDs Embedded in Sealant" },
      { num: "24", label: "Status Indicator LED (Red/Green)" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "An automated aircraft tray table disinfecting system, comprising; a tray table including a laminar surface; a sanitation assembly coupled to the tray table, wherein the sanitation assembly includes: one or more UVC light source embedded on the laminar surface, wherein the UVC light configure to emit UVC light on the laminar surface of the tray table; a light sealant running at an edge of the laminar surface; a safety switch configured to activate and/or deactivate the disinfection system, wherein the safety switch operatively coupled to the UV light source, wherein the one or more laminar surfaces of the tray table are configured to reflect the UV light emitted from the UV light source onto surfaces of the tray table, wherein the switching mechanism of the safety switch is based on a plurality of latches in a lock or unlock position.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The system of claim 1, wherein the UVC light source is powered by rechargeable and removable battery, USB cable, or by drawing power from In-Flight Entertainment System installed on an airplane seat.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The system of claim 1, wherein the activation system activates the disinfection system in response to a determination that a set of criteria has been met, wherein the set of criteria at least includes the tray table is secured in an upright position i.e. when the safety switch is closed.",
      },
      {
        num: 4,
        isIndependent: false,
        text: "The system of claim 3, the safety switch operates when latch 15 and latch 16 are in the closed position.",
      },
      {
        num: 5,
        isIndependent: false,
        text: "The system of claim 1, wherein UVC light sources are embedded into light sealant running along the edge of the tray table.",
      },
      {
        num: 6,
        isIndependent: false,
        text: "The system of claim 1 further comprises a fault detection and an alarming unit, wherein said fault detection and alarming unit are configured to generate an alarm upon identification of pre-defined one or more conditions.",
      },
      {
        num: 7,
        isIndependent: false,
        text: "The system of claim 1, wherein the system automatically switches off the UVC LED light source after disinfecting the tray table.",
      },
      {
        num: 8,
        isIndependent: false,
        text: "The apparatus of claim 1, wherein a controller deactivates the disinfection system to place the disinfection system in an inactive mode after completion of the disinfection process.",
      },
    ],
    classifications: [
      {
        code: "A61L 2/10",
        description:
          "Sterilisation or disinfection of materials or objects using Ultraviolet light",
      },
      {
        code: "B64D 11/06",
        description:
          "Aircraft seat arrangements & interior passenger equipment",
      },
      {
        code: "A61L 2/24",
        description:
          "Disinfection methods or apparatus with automatic control systems",
      },
      {
        code: "A61L 9/20",
        description:
          "Disinfection of air or enclosed spaces using Ultraviolet light",
      },
    ],
    legalEvents: [
      {
        date: "Feb 27, 2020",
        title: "Priority to US17/185,008",
        type: "Priority",
      },
      {
        date: "Feb 25, 2021",
        title: "Application filed by Individual inventors",
        type: "Filing",
      },
      {
        date: "Sep 2, 2021",
        title: "Publication of Patent Application US20210269158A1",
        type: "Publication",
      },
      {
        date: "Aug 30, 2022",
        title: "Patent Granted (Patent No. US11427326B2)",
        type: "Grant",
      },
      {
        date: "Feb 25, 2041",
        title: "Anticipated Patent Expiration Date",
        type: "Status",
      },
    ],
    descriptionSections: [
      {
        heading: "TECHNICAL FIELD",
        paragraphs: [
          "The present invention relates generally to an aircraft tray table, and more specifically to a system to disinfect aircraft tray tables automatically for keeping passengers safe from pathogens and microbes, wherein the system uses UVC light from a removable and rechargeable power source.",
        ],
      },
      {
        heading: "BACKGROUND OF THE INVENTION",
        paragraphs: [
          "Infectious disease transmission among air travelers is a major public health concern. Studies reveal that aircraft tray tables harbor over 1,600 germ count units—making them up to 50 times more contaminated than an airport toilet seat.",
          "Short turnaround times between flights leave cabin crew with insufficient time to manually wipe down each of the ~300 tray tables on an airliner, leaving passengers exposed to harmful pathogens and viruses.",
        ],
      },
      {
        heading: "SUMMARY OF THE INVENTION",
        paragraphs: [
          "The present invention overcomes these limitations by providing an automated UVC disinfection assembly coupled to the aircraft seat and tray table.",
          "When a passenger folds the tray table into its upright stowed position, physical latches (15 & 16) complete a safety switch circuit. The microprocessor triggers UVC LEDs (13) embedded along the laminar surface (12) for a timed 18-to-30 second germicidal exposure cycle. Light sealants (12A & 21) line all edges to prevent UV leakage.",
        ],
      },
      {
        heading: "DETAILED DESCRIPTION & DRAWINGS",
        paragraphs: [
          "FIG. 1 and FIG. 1 Detail depict the sanitization assembly mounted to the backside of aircraft seat (10), powered by removable/rechargeable batteries (18) or in-seat USB/IFE power.",
          "FIG. 2 and FIG. 3 demonstrate the foldable tray table (19) across hinge (20) with embedded UVC LED strip (22). Indicator LED (24) illuminates red during active disinfection and turns green upon completion. FIG. 4 provides the full operational flowchart.",
        ],
      },
    ],
  },

  US20220034624A1: {
    id: "US20220034624A1",
    patentNo: "US20220034624A1",
    grantPublicationNo: "US11536534B2",
    title: "Relay based system to launch a projectile",
    region: "US",
    status: "Granted",
    abstract:
      "A series of the relay of the electromagnetic launcher with a gun and a floating launch platform to launch projectiles in space, wherein the projectile is accelerated along a path using electromagnetic force until the projectile reaches a desired direction and position. The direction of the path is determined by orienting the path in the desired direction using a catcher as high above as possible, coming close to near space. When the projectile reaches the last platform, it is launched by the railgun and ignites its rocket engine to take the payload into space, eliminating the need for massive rocket boosters.",
    inventors: [
      "Mirza Faizan",
      "Mikaeel Faisal Khan",
      "Zainab Khan",
      "Faraz Rahman",
      "Mohammed Omer Shakoor",
      "Ishaq Nadeem Khan",
      "Shoaib Ali",
      "Bilal Syed Ali Shah",
      "Mirza Rizwan",
    ],
    filingDate: "Feb 25, 2021",
    publicationDate: "Feb 03, 2022",
    priorityDate: "Feb 27, 2020",
    applicationNumber: "US17/185,017",
    keywords: [
      "electromagnetic railgun",
      "floating launch platform",
      "projectile catcher",
      "space launch relay",
      "stopper net",
      "jolt sensor",
      "zero booster launch",
      "aerospace propulsion",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/1c/11/3f/dd936f54022d1d/US20220034624A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20220034624A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/64/aa/b5/bb784fc014185e/US20220034624A1-20220203-D00000.png",
    images: [
      {
        title: "FIG. 1 — Electromagnetic Relay Launch System Overview",
        caption:
          "Overall elevation view of the relay launch system showing high-altitude helium floating platform (15), solar panels (16), suspended projectile catcher (12), and powerful electromagnetic railgun (10).",
        url: "https://patentimages.storage.googleapis.com/64/aa/b5/bb784fc014185e/US20220034624A1-20220203-D00000.png",
      },
      {
        title: "FIG. 2 — Projectile Catcher Deployment & Hinge Mechanism",
        caption:
          "Detailed view of the catcher deployment arm (14), openable base door (17) on hinge (18), and gear-driven pulley system around the railgun barrel.",
        url: "https://patentimages.storage.googleapis.com/b9/11/04/fd9b242f46bcb7/US20220034624A1-20220203-D00001.png",
      },
      {
        title: "FIG. 3 — Umbrella Catcher Structure & Jolt Sensor",
        caption:
          "Inner structure of the projectile catcher featuring umbrella-type foldable arms (20), servo motor joints (21), stopper net (13), and jolt sensor (19) to detect and capture incoming projectiles.",
        url: "https://patentimages.storage.googleapis.com/df/fb/36/7d15f6a192a38a/US20220034624A1-20220203-D00002.png",
      },
    ],
    summaryHighlights: [
      "Electromagnetic Relay Propulsion: Accelerates projectiles along a floating relay pathway using electromagnetic forces, eliminating bulky first-stage rocket boosters.",
      "Helium Gas Floating Platform: High-altitude carbon fiber honeycomb floating platforms powered by top-mounted solar panels and batteries.",
      "Automated Projectile Catcher: Umbrella-type catcher with jolt sensors, stopper net, and servo-driven foldable arms to catch and re-orient projectiles.",
      "Zero-Velocity Catch Mechanism: Platforms stationed at pre-calculated heights using V²=U²+2gS physics so projectiles reach near-zero velocity at the catcher.",
    ],
    referenceNumerals: [
      { num: "10", label: "Electromagnetic Railgun" },
      { num: "11", label: "Projectile" },
      { num: "12", label: "Projectile Catcher" },
      { num: "13", label: "Stopper Net" },
      { num: "14", label: "Arm-Pulley System" },
      { num: "15", label: "Large Floating Platform" },
      { num: "16", label: "Solar Panels" },
      { num: "17", label: "Openable Base Door" },
      { num: "18", label: "Hinge" },
      { num: "19", label: "Jolt Sensor" },
      { num: "20", label: "Foldable Arm" },
      { num: "21", label: "Servo Motor" },
      { num: "22", label: "Rocket Engine" },
      { num: "23", label: "Batteries & Railgun Control" },
      { num: "24", label: "Platform Propellers" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A relay system for launching projectiles comprising: an electromagnetic rail gun; a helium gas floating platform with a projectile catcher, wherein the projectile catcher is configured to catch the projectile from the electromagnetic rail gun; a closed-loop-shaped pathway for retaining a projectile therein, wherein the pathway is made of non-conductive material; and a plurality of conductive coils embedded in the pathway, wherein the conductive coils are operable to be electrically connected to a power supply, such that the power supply provides an electric current to the conductive coils creating an electromagnetic field along the pathway for accelerating the projectile within the pathway.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The Relay system for launching projectiles of claim 1, wherein the pathway includes at least one launch site, wherein the launch site comprises a door openable when the projectile within the pathway reaches a critical speed and the catcher of the helium gas floating platform catches the projectile from the pathway.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The Relay system for launching projectiles of claim 1, further comprises one or more solar panels.",
      },
    ],
    classifications: [
      { code: "F41B 6/006", description: "Electromagnetic Rail Launchers" },
      { code: "B64G 1/002", description: "Cosmonautic Air Launch Systems" },
      { code: "B64G 1/417", description: "Electromagnetic Propulsion Systems" },
      {
        code: "H01F 7/064",
        description: "Actuating Circuitry for Electromagnets",
      },
    ],
    legalEvents: [
      {
        date: "Feb 27, 2020",
        title: "Priority to US17/185,017",
        type: "Priority",
      },
      {
        date: "Feb 25, 2021",
        title: "Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "Feb 03, 2022",
        title: "Publication of US20220034624A1",
        type: "Publication",
      },
      {
        date: "Dec 27, 2022",
        title: "Application granted (US11536534B2)",
        type: "Grant",
      },
      {
        date: "Feb 25, 2041",
        title: "Anticipated Expiration",
        type: "Expiration",
      },
    ],
    descriptionSections: [
      {
        heading: "TECHNICAL FIELD & INVENTION OBJECT",
        paragraphs: [
          "The present invention relates generally to a relay system for launching projectiles in space, and more specifically to a relay of electromagnetic guns and floating launch platforms with the help of which the system launches projectiles into space.",
          "Conventional space launches rely on solid or liquid chemical rocket boosters, which are extremely expensive, carry dangerous volatile fuels, and generate high noise and pollution. The present invention eliminates the need for initial-stage rocket boosters by staging high-altitude floating platforms equipped with electromagnetic railguns.",
        ],
      },
      {
        heading: "FLOATING PLATFORMS & CATCHER MECHANISM",
        paragraphs: [
          "Each floating launch platform is filled with helium gas and reinforced with a carbon fiber honeycomb matrix to prevent bursting at high altitude. Solar panels (16) mounted on the top surface continuously charge onboard battery banks (23) to power the electromagnetic railgun (10).",
          "Hanging from each platform is a specialized projectile catcher (12) deployed via an arm-pulley system (14). The catcher features an umbrella-like array of foldable arms (20) linked to servo motors (21) and lined with a durable stopper net (13). When an incoming projectile contacts the net, a jolt sensor (19) triggers the servo motors to close the arms and secure the projectile.",
          "Using standard gravitational deceleration physics (V² = U² + 2gS), platforms are stationed at pre-calculated altitudes so that the projectile decelerates naturally to near-zero velocity just as it reaches the catcher, preventing structural damage upon capture.",
        ],
      },
      {
        heading: "RELAY LAUNCH & FINAL STAGE IGNITION",
        paragraphs: [
          "Once captured, the arm-pulley system (14) draws the catcher and projectile through an openable base door (17) into the barrel of the platform's railgun (10). The railgun then re-accelerates the projectile toward the next higher platform in the relay series.",
          "Upon reaching the final high-altitude near-space platform, the last electromagnetic railgun launches the projectile and ignites its onboard rocket engine (22) to place satellites or payloads directly into orbit.",
        ],
      },
    ],
  },

  US20210269997A1: {
    id: "US20210269997A1",
    patentNo: "US20210269997A1",
    grantPublicationNo: "US11401673B2",
    title:
      "Automated system for cleaning and recovering spilled oil in the ocean using hair felt rollers",
    region: "US",
    status: "Granted",
    abstract:
      "An oil spill retrieval system for retrieving spilled oil from the surface of a body of water and including a boat having means for collecting the oil from the water surface and having means for processing the collected oil. A pontoon boat that collects spilled oil from the ocean through a hair roller system suspended between the pontoons. Human hair is present within a porous casing of the roller and Oil floating on the water enters the porous casing whereupon the oil is absorbed by the human hair, wherein the absorbed oil is pass through one or more pipes to go into large pontoons which are the main oil collecting tanks on the pontoon boat.",
    inventors: [
      "Mirza Faizan",
      "Mirza Rizwan",
      "Zeyd Mohd Fahzy",
      "Abdallah Farooqui",
      "Adam Arsalan Jaffery",
      "Abdul Basit Piracha",
      "Maheen Rafique",
      "Salaah Asif Sayed",
      "Umar Ahmad Syed",
    ],
    filingDate: "Feb 25, 2021",
    publicationDate: "Sep 2, 2021",
    priorityDate: "Feb 27, 2020",
    applicationNumber: "US17/185,080",
    keywords: [
      "oil spill recovery",
      "human hair felt rollers",
      "pontoon boat skimmer",
      "oleophilic absorption",
      "vacuum pump transfer",
      "laser guidance docking",
      "ocean pollution cleanup",
      "marine environment",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/a8/e8/df/b2bbc2bdc05373/US20210269997A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20210269997A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/86/fd/f6/781a1e3bc08e34/US20210269997A1-20210902-D00000.png",
    images: [
      {
        title: "FIG. 1 — Automated Pontoon Oil Recovery Boat Overview",
        caption:
          "Perspective elevation view of the automated pontoon oil recovery vessel showing top deck (11), pontoon tanks (12), electronics housing (14), and hair roller array (41).",
        url: "https://patentimages.storage.googleapis.com/86/fd/f6/781a1e3bc08e34/US20210269997A1-20210902-D00000.png",
      },
      {
        title: "FIG. 2 — Pontoon Hull & Internal Compartments",
        caption:
          "Side cross-sectional view illustrating the pontoon storage tanks (12), satellite communications dish (15), and main structural frame.",
        url: "https://patentimages.storage.googleapis.com/ab/78/37/e394a27eb237e4/US20210269997A1-20210902-D00001.png",
      },
      {
        title: "FIG. 3 — Hair Felt Roller Array & Divider Flaps",
        caption:
          "Detailed internal schematic of hair felt rollers (41), rotating divider flaps (23), conveyor belt (22), and drive gears (24).",
        url: "https://patentimages.storage.googleapis.com/ec/5f/41/7e8faa6b1baa86/US20210269997A1-20210902-D00002.png",
      },
      {
        title: "FIG. 4 — Vacuum Pump Transfer & Main Storage Tanks",
        caption:
          "Oil transfer mechanism showing intermediate tank (32), fast conveyor chain (33), vacuum transfer pipes (35), and main pontoon tanks (31).",
        url: "https://patentimages.storage.googleapis.com/26/d7/cc/b99ef3cc0bde9f/US20210269997A1-20210902-D00003.png",
      },
      {
        title: "FIG. 5 — Hair Felt Roller Internal Construction",
        caption:
          "Exploded view of hair felt roller (41) showing perforated hollow inner pipe (42) packed with human hair, and drive sprockets (44).",
        url: "https://patentimages.storage.googleapis.com/47/4e/c8/9aabedca3b7c92/US20210269997A1-20210902-D00004.png",
      },
      {
        title: "FIG. 6 — Autonomous Fleet Docking & Laser Guidance",
        caption:
          "Modular fleet docking conduit (53), autonomous laser guidance sensors (56), and interlocking teeth (19) for multi-boat oil spill recovery operations.",
        url: "https://patentimages.storage.googleapis.com/d5/aa/bc/ab4e0f681afd71/US20210269997A1-20210902-D00005.png",
      },
    ],
    summaryHighlights: [
      "Human Hair Oleophilic Absorption: Uses natural human/mammal hair packed into porous rollers, absorbing up to 5 times its weight in crude oil while repelling water.",
      "Automated Pontoon Skimming: Dual pontoon hull design draws oil slicks directly through an active roller array for continuous, high-efficiency recovery.",
      "Real-Time Sensor & Vacuum Transfer: Optical sensors monitor intermediate tank levels and activate vacuum pumps to transfer oil to main pontoon storage tanks.",
      "Autonomous Laser Guidance & Fleet Docking: Equipped with satellite communication, real-time cameras, and laser guidance (56) for multi-vessel fleet coordination.",
    ],
    referenceNumerals: [
      { num: "11", label: "Upper Part of Boat" },
      { num: "12", label: "Pontoon Tanks (Lower Hull)" },
      { num: "13", label: "Docking Mechanism" },
      { num: "14", label: "Electronics Housing" },
      { num: "15", label: "Satellite Dish" },
      { num: "18", label: "Conduit Housing Body" },
      { num: "19", label: "Interlocking Teeth" },
      { num: "20", label: "Vacuum Pump Pipe" },
      { num: "22", label: "Conveyor Belt" },
      { num: "23", label: "Rotating Divider Flaps" },
      { num: "24", label: "Drive Gears" },
      { num: "25", label: "Pontoon Connecting Pipe" },
      { num: "31", label: "Main Oil Storage Tanks" },
      { num: "32", label: "Intermediate Collection Tank" },
      { num: "33", label: "Fast Conveyor Chain" },
      { num: "35", label: "Oil Vacuum Transfer Pipe" },
      { num: "41", label: "Human Hair Felt Rollers" },
      { num: "42", label: "Hollow Perforated Inner Pipe" },
      { num: "44", label: "Drive Sprockets" },
      { num: "56", label: "Autonomous Laser Guidance" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A system on pontoon boat for cleaning oil spill, wherein the system comprising: at least a boat, wherein the boat allows the system to rest on the surface of the body of water from which the oil is to be removed; at least a roller, on which plurality of human or mammal hairs are fixed which serves the purpose of absorbing the oil from the water surface, supported by the boat, wherein said rollers are rotatable about an axis; a motor operatively connected to the said roller, wherein the motor is configured to rotate the roller about its axis of rotation; and an intermediate tank, wherein the intermediate tank of the boat is configured to collect the oil from the roller.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The system as claim 1, wherein the boat further comprises one or more collection tanks, wherein the collection tanks collects oil from the intermediate tank through one or more pipes.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The system as claim 1, wherein the roller of the boat system is used to raise and separate said oil from said water.",
      },
      {
        num: 4,
        isIndependent: false,
        text: "The system as claim 1, further comprising a communicatively coupled camera, wherein said camera is configured to remotely control the one or more pipes.",
      },
    ],
    classifications: [
      {
        code: "E02B 15/04",
        description: "Cleaning surface of open water from oil spills",
      },
      {
        code: "E02B 15/10",
        description: "Devices using absorbents or skimmers for floating oil",
      },
      {
        code: "B63B 35/32",
        description: "Vessels specially adapted for collecting floating oil",
      },
    ],
    legalEvents: [
      {
        date: "Feb 27, 2020",
        title: "Priority to US17/185,080",
        type: "Priority",
      },
      {
        date: "Feb 25, 2021",
        title: "Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "Sep 02, 2021",
        title: "Publication of US20210269997A1",
        type: "Publication",
      },
      {
        date: "Aug 02, 2022",
        title: "Patent Granted (US11401673B2)",
        type: "Grant",
      },
      {
        date: "Feb 25, 2041",
        title: "Anticipated Expiration",
        type: "Expiration",
      },
    ],
    descriptionSections: [
      {
        heading: "TECHNICAL FIELD & BACKGROUND",
        paragraphs: [
          "The present invention relates to an automated oil spill retrieval system, and more specifically to a pontoon vessel equipped with human hair felt rollers for efficient ocean oil recovery.",
          "Major oil spills inflict catastrophic environmental damage on marine ecosystems. Chemical dispersants and burning often cause secondary ecological toxicity. Natural human and mammal hair possesses extraordinary oleophilic (oil-attracting) and hydrophobic (water-repelling) properties, capable of absorbing up to 5 times its weight in crude oil.",
        ],
      },
      {
        heading: "HAIR FELT ROLLER SYSTEM & PONTOON SKIMMING",
        paragraphs: [
          "The pontoon boat (11) features a dual-hull design (12) that stabilizes the vessel on open ocean swells while creating an active channel for oil slicks. Suspended between the pontoons is an array of rotatable rollers (41). Each roller comprises a perforated hollow pipe (42) packed with densely felted human hair.",
          "As the motor-driven rollers rotate through the surface oil slick, the hair fibers absorb oil while repelling seawater. Rotating divider flaps (23) and squeegee blades scrape the absorbed oil off the rollers into an intermediate collection tank (32).",
        ],
      },
      {
        heading: "VACUUM TRANSFER & AUTONOMOUS FLEET GUIDANCE",
        paragraphs: [
          "Level sensors (38) inside the intermediate tank (32) continuously monitor oil accumulation. When filled, the system automatically activates high-capacity vacuum pumps (20) to transfer recovered crude through pipes (35) into the main pontoon storage tanks (31).",
          "For large-scale disaster response, multiple vessels coordinate using satellite communication (15), onboard cameras, and an autonomous laser guidance system (56). Interlocking teeth (19) and modular docking conduits (53) allow ships to form continuous skimming barriers across expanding oil slicks.",
        ],
      },
    ],
  },

  US20210270240A1: {
    id: "US20210270240A1",
    patentNo: "US20210270240A1",
    grantPublicationNo: "US11408397B2",
    title: "Wind powered system to lift water using multiple tanks",
    region: "US",
    status: "Granted",
    abstract:
      "A system for pumping water from a lower tank water source that is operable in association with the windmill having a tower frame i.e supporting pillar, and rotating cylinder connected to the windmill. The system includes a rotating cylinder linked to the windmill which rotates on the rotation of the windmill driven by the wind. The pipes operate through the motion of the rotating cylinder and delivers a flow of compressed water from the lower tank to a point above i.e upper tank. The speedometer drives the pipe to intermediate tanks on the basis of the rotation generated by the rotating cylinder. The microprocessor automatically switches pipe in various tanks based on the speedometer.",
    inventors: [
      "Mirza Faizan",
      "Mohammad Ayaan",
      "Mariya Kawish",
      "Faizaan Syed Hussain",
      "Maryam Abid Bhojwani",
      "Bilal Syed Ali Shah",
      "Nimra Syeda Ali Shah",
    ],
    filingDate: "Feb 25, 2021",
    publicationDate: "Sep 2, 2021",
    priorityDate: "Feb 27, 2020",
    applicationNumber: "US17/185,083",
    keywords: [
      "wind powered water pump",
      "rotating cylinder",
      "multiple tank relay",
      "speedometer sensing",
      "microprocessor valve switching",
      "gear multiplier",
      "helical water pipe",
      "renewable agriculture irrigation",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/14/1d/dc/4a9ba223deef39/US20210270240A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20210270240A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/be/f2/c9/25b2b5fdb3a25f/US20210270240A1-20210902-D00000.png",
    images: [
      {
        title: "FIG. 1 — Blade Windmill & Water Pumping Assembly Overview",
        caption:
          "Elevation view of horizontal-shaft blade windmill (12) driving central rotating torque cylinder (19), gear assembly (15), and water pipe (20) from lower ground tank (10) to upper tank (11).",
        url: "https://patentimages.storage.googleapis.com/be/f2/c9/25b2b5fdb3a25f/US20210270240A1-20210902-D00000.png",
      },
      {
        title: "FIG. 2 — Multi-Tank Staging & Relay Reservoir Network",
        caption:
          "Cross-sectional schematic illustrating intermediate staging tanks (11A) positioned vertically between ground reservoir (10) and upper tank (11).",
        url: "https://patentimages.storage.googleapis.com/3b/4d/ca/e679acd19da03b/US20210270240A1-20210902-D00001.png",
      },
      {
        title: "FIG. 3 — Circular Turbine Head & Battery Power Unit",
        caption:
          "Perspective view of circular turbine fan head (13) coupled to vertical drive shaft, speed-multiplying gearbox (15), battery unit (18), and water delivery pipes (20).",
        url: "https://patentimages.storage.googleapis.com/e7/d0/05/6ea7a1ec95a6f3/US20210270240A1-20210902-D00002.png",
      },
      {
        title: "FIG. 4 — Speedometer & Microprocessor Logic Flowchart",
        caption:
          "Operational process flowchart showing wind rotation detection, speedometer tachometer (21), and microprocessor (22) dynamic pipe switching across intermediate tanks.",
        url: "https://patentimages.storage.googleapis.com/2d/fd/de/a966da5b4ab8e5/US20210270240A1-20210902-D00003.png",
      },
    ],
    summaryHighlights: [
      "Direct Wind-to-Hydro Pressure: Converts wind kinetic energy directly into rotational suction via a central cylinder (19), lifting water without heavy electric pumps.",
      "Multi-Tank Relay Staging: Solves high-elevation water lifting limits by staging water progressively across intermediate tanks (11A) using pressure balancing.",
      "Adaptive Microprocessor Routing: Speedometers (21) measure wind velocity, enabling microprocessor (22) to switch pipe valves dynamically to the optimal intermediate tank.",
      "Mechanical Gear Speed Multiplication: Integrated gear assembly (15) multiplies low-wind blade RPM to create high-speed cylinder rotation for rapid water draw.",
    ],
    referenceNumerals: [
      { num: "10", label: "Lower Ground Reservoir" },
      { num: "11", label: "Upper Water Tank" },
      { num: "11A", label: "Intermediate Staging Tanks" },
      { num: "12", label: "Windmill Fan Blades" },
      { num: "13", label: "Circular Turbine Head" },
      { num: "15", label: "Speed Multiplier Gearbox" },
      { num: "18", label: "Onboard Battery Unit" },
      { num: "19", label: "Central Rotating Torque Cylinder" },
      { num: "20", label: "Helical Water Delivery Pipes" },
      { num: "21", label: "Wind Speedometer / Tachometer" },
      { num: "22", label: "Onboard Microprocessor" },
      { num: "25", label: "Wind Orientation Control Vane" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A system for pumping water from a lower tank, said system operable in association with a windmill, said windmill having a tower frame, a wind-driven turbine positioned at an apex of said tower frame, and a rotating cylinder operably connected to the said turbine and positioned between the turbine and the ground.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The present system of claim 1 consists of a rotating cylinder that is positioned with the windmill responsible for the lifting of water after rotation.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The present system of claim 1 consists of a gear assembly that multiplies the speed of the rotating cylinder.",
      },
    ],
    classifications: [
      {
        code: "F03D 9/28",
        description: "Wind motors driving water pumps or compressors",
      },
      {
        code: "F03D 7/0276",
        description: "Controlling wind motor rotor speed",
      },
      {
        code: "F05B 2250/25",
        description: "Helical geometry for wind fluid pumping",
      },
    ],
    legalEvents: [
      {
        date: "Feb 27, 2020",
        title: "Priority to US17/185,083",
        type: "Priority",
      },
      {
        date: "Feb 25, 2021",
        title: "Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "Sep 02, 2021",
        title: "Publication of US20210270240A1",
        type: "Publication",
      },
      {
        date: "Aug 09, 2022",
        title: "Patent Granted (US11408397B2)",
        type: "Grant",
      },
      {
        date: "Feb 25, 2041",
        title: "Anticipated Expiration",
        type: "Expiration",
      },
    ],
    descriptionSections: [
      {
        heading: "TECHNICAL FIELD & PURPOSE",
        paragraphs: [
          "The present invention relates to a wind-powered water pumping system, and more specifically to a windmill-driven rotating cylinder assembly that lifts water across a series of staged tanks.",
          "In remote agricultural regions, off-grid farms, and arid landscapes, electricity and fossil fuels are scarce or prohibitively expensive. Conventional windmill pumps struggle to lift water to significant heights against gravity. The present invention solves this by utilizing direct rotational cylinder dynamics coupled with smart intermediate tank staging.",
        ],
      },
      {
        heading: "ROTATING CYLINDER & MULTI-TANK RELAY",
        paragraphs: [
          "Wind blowing against turbine blades (12, 13) generates rotational torque, which is transferred through a speed-multiplying gearbox (15) to a central vertical cylinder (19). Helical delivery pipes (20) wound around the cylinder rotate at high RPM, creating low pressure and strong suction at the lower reservoir (10) intake.",
          "When water needs to be lifted to high elevations, lifting water in a single lift requires extreme wind speeds. The system overcomes this by installing intermediate staging tanks (11A). Water is pumped sequentially from the lower reservoir into intermediate tanks, reducing the hydrostatic head ($P = \\rho g h$) required at each stage.",
        ],
      },
      {
        heading: "SPEEDOMETER & MICROPROCESSOR AUTOMATION",
        paragraphs: [
          "Tachometer speedometers (21) continuously measure the rotational speed of the turbine and cylinder. An onboard microprocessor (22) processes real-time wind speed data to automatically switch solenoid valves along the pipe network (20).",
          "During light breezes, the microprocessor routes water to closer intermediate tanks (11A); during strong wind gusts, it engages full lift directly to the main elevated water tank (11). Integrated batteries (18) maintain control circuitry power during zero-wind lulls.",
        ],
      },
    ],
  },

  US11464462B1: {
    id: "US11464462B1",
    patentNo: "US11464462B1",
    grantPublicationNo: "US11464462B1",
    title: "Drug abuse prevention device and a method thereof",
    region: "US",
    status: "Granted",
    abstract:
      "The invention relates to a drug abuse prevention device and a method thereof, said device comprising a sweat analysis system configured to determine content of drugs from sweat of a user; an air quality determination unit configured to determine the presence of drug contents in the air, a processor configured to compare the determined content of drugs in air and sweat of user with predetermined drug levels; and an auto trigger unit configured to trigger one or more registered users regarding the presence of drugs upon violation of predetermined drug levels.",
    inventors: [
      "Mirza Faizan",
      "Aalia Mohammad",
      "Aanchal Raghuvanshi",
      "Ridah Shaista Shanavas",
      "Mansoor Hasan Khan",
      "Saadia Asaf",
      "Deepika Dandeboina",
      "Sarah Varghese",
      "Mirza Rizwan",
    ],
    filingDate: "Jun 3, 2021",
    publicationDate: "Oct 11, 2022",
    priorityDate: "Jun 3, 2021",
    applicationNumber: "US17/338,153",
    keywords: [
      "drug abuse prevention",
      "sweat analysis sensor",
      "ambient air quality detector",
      "micro-fluidic drug scanning",
      "automated guardian alert",
      "wearable smart wristband",
      "real-time GPS location",
      "substance abuse deterrence",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/a0/50/a7/7aa4865417f78d/US11464462.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US11464462B1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/c3/09/08/babc07a002ae79/US11464462-20221011-D00001.png",
    images: [
      {
        title: "FIG. 1 — Wearable Drug Abuse Prevention Device Assembly",
        caption:
          "Perspective view of wearable wristband (104) embedding sweat analysis sensor (102), air quality detector, and level determination device (106).",
        url: "https://patentimages.storage.googleapis.com/c3/09/08/babc07a002ae79/US11464462-20221011-D00001.png",
      },
      {
        title: "FIG. 2 — System Architecture & Computing Environment",
        caption:
          "Block diagram showing wearable device (100) communicating with remote mobile computing device (200), processor (202), and memory (204).",
        url: "https://patentimages.storage.googleapis.com/2f/e5/19/913a8e63f08572/US11464462-20221011-D00002.png",
      },
      {
        title: "FIG. 3 — Process Flowchart for Drug Detection & Alert Trigger",
        caption:
          "Flowchart (300) detailing sweat scanning (304), air drug detection, threshold comparison (306), and automatic parent/guardian GPS alerting (308).",
        url: "https://patentimages.storage.googleapis.com/74/c5/4c/dc649560794de9/US11464462-20221011-D00003.png",
      },
    ],
    summaryHighlights: [
      "Non-Invasive Sweat & Ambient Sensing: Combines micro-fluidic sweat analysis sensors (102) with ambient air quality detectors to identify illicit drug exposure.",
      "Real-Time Threshold Comparison: Onboard processor (202) continuously evaluates detected drug biomarker concentrations against predetermined safety baselines.",
      "Automated Parent / Guardian Alerting: Instantly dispatches encrypted wireless notifications with real-time GPS coordinates when drug thresholds are exceeded.",
      "Wearable Form Factor: Embedded inside an ergonomic wristband (104), smart bracelet, or clothing accessory with solar-enabled charging and Bluetooth/NFC connectivity.",
    ],
    referenceNumerals: [
      { num: "100", label: "Wearable Drug Abuse Prevention Device" },
      { num: "102", label: "Sweat Analysis & Air Sensor Unit" },
      { num: "104", label: "Wrist Band / Wearable Housing" },
      { num: "106", label: "Drug Level Determination Module" },
      { num: "200", label: "Mobile / Remote Computing Device" },
      { num: "202", label: "Processing Unit" },
      { num: "204", label: "Memory Storage Unit" },
      { num: "304", label: "Sweat Scan & Air Sensing Step" },
      { num: "306", label: "Threshold Evaluation Step" },
      { num: "308", label: "Automated Contact / Parent Alert Step" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A drug abuse prevention device, said device comprising a sweat analysis system configured to determine content of drugs from sweat of a user; an air quality determination unit configured to determine presence of drug contents in air; a processor configured to compare the determined content of drugs in the air and sweat of the user with predetermined drug levels; and an auto trigger unit configured to trigger one or more registered users regarding the presence of drugs upon violation of predetermined drug levels.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The drug abuse prevention device as claimed in claim 1, further comprising a memory unit configured to store historical records.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The drug abuse prevention device as claimed in claim 1, further comprising a data correlation unit.",
      },
      {
        num: 8,
        isIndependent: true,
        text: "A method for preventing drug abuse, said method comprising steps of: determining content of drugs from sweat of a user; determining presence of drug contents in air; comparing the determined content of drugs in the air and sweat of the user with predetermined drug levels; and triggering one or more registered users regarding the presence of drugs upon violation of predetermined drug levels.",
      },
    ],
    classifications: [
      { code: "A61B 5/14517", description: "Measuring chemical compounds in sweat" },
      { code: "A61B 5/0002", description: "Telemetry aspect of medical measurements" },
      { code: "G16H 40/67", description: "Mobile health monitoring systems and alert delivery" },
    ],
    legalEvents: [
      { date: "Jun 03, 2021", title: "Priority & Application filed with USPTO", type: "Filing" },
      { date: "Oct 11, 2022", title: "Patent Granted (US11464462B1)", type: "Grant" },
      { date: "Oct 11, 2022", title: "Publication of US11464462B1", type: "Publication" },
      { date: "Jun 17, 2041", title: "Adjusted Expiration", type: "Expiration" },
    ],
    descriptionSections: [
      {
        heading: "TECHNICAL FIELD & BACKGROUND",
        paragraphs: [
          "The present invention relates to a wearable drug abuse prevention device and method, and more specifically to a sweat analysis and air quality monitoring wristband configured to alert parents or guardians upon detecting drug exposure.",
          "Substance abuse among teenagers and vulnerable individuals poses severe health and social risks. Early detection is critical for intervention. Traditional urine or blood tests are invasive and reactive after consumption. The present invention provides non-invasive, continuous real-time monitoring via sweat analysis and ambient air sensing.",
        ],
      },
      {
        heading: "SWEAT & AIR ANALYSIS SENSING",
        paragraphs: [
          "The wearable device (100) features a sweat analysis sensor (102) embedded in a comfortable wristband (104). The micro-fluidic sensor scans microscopic sweat droplets released through pores, analyzing drug metabolite levels in real time.",
          "Additionally, an integrated air quality determination unit scans ambient air for airborne drug particles (such as smoked or vaporized substances). The real-time readings are continuously passed to the level determination module (106).",
        ],
      },
      {
        heading: "AUTOMATED ALERTING & GPS TRACKING",
        paragraphs: [
          "When the determined drug concentrations in sweat or air exceed predetermined safety thresholds (306), an auto-trigger unit immediately activates.",
          "The device dispatches encrypted wireless notifications (SMS/push alert) over Bluetooth or cellular networks to designated emergency contacts (parents/guardians). Alerts include the exact real-time GPS coordinates of the user (308), enabling immediate preventive assistance.",
        ],
      },
    ],
  },

  US20220390615A1: {
    id: "US20220390615A1",
    patentNo: "US20220390615A1",
    grantPublicationNo: "US11532236B2",
    title: "Aircraft tracking system and method",
    region: "US",
    status: "Granted",
    abstract:
      "A system and method for tracking aircraft in real-time using advanced sensor fusion and ground-based processing. The system improves situational awareness on airport runways and taxiways, forming part of the Ground Reality Information Processing System (GRIPS) framework developed to prevent runway incursions and foreign object debris detection.",
    inventors: ["Mirza Faizan"],
    filingDate: "Jun 10, 2021",
    publicationDate: "Dec 8, 2022",
    applicationNumber: "US17/344,615",
    keywords: [
      "aircraft tracking",
      "runway",
      "GRIPS",
      "sensor fusion",
      "aviation safety",
      "situational awareness",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/00/00/00/US20220390615A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20220390615A1",
  },
};

// Helper: get patent detail by id across all lists
export function getPatentById(id: string): PatentDetailData | null {
  if (PATENT_DETAILS[id]) return PATENT_DETAILS[id];

  // Fall back to basic PatentItem data merged with empty detail fields
  const allPatents = [
    ...US_PATENTS_GRANTED,
    ...SOUTH_AFRICA_PATENTS_GRANTED,
    ...PATENTS_PENDING,
  ];
  const found = allPatents.find((p) => p.id === id || p.patentNo.includes(id));
  if (!found) return null;

  return {
    ...found,
    region: found.region as "US" | "South Africa" | "Pending",
    status: found.status as "Granted" | "Pending",
    abstract: "",
    inventors: ["Mirza Faizan"],
    filingDate: "",
    publicationDate: "",
  };
}
