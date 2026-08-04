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

import cleanGarbage from "@/images/patents/clean_garbage.png";
import aircraft_tray from "@/images/patents/aircraft_tray.png";
import relay from "@/images/patents/relay-based.png";
import cleaning_Spilled_oil from "@/images/patents/oil_recovery.png";
import wind_powered from "@/images/patents/windmill.png";
import drug_abuse from "@/images/patents/drug_abuse.png";

export const COLUMN_1_PROJECTS: ProjectItem[] = [
  {
    id: "ground-reality",
    patentId: "US20220390615A1",
    patentNo: "U.S. patent 20220390615A1",
    title: "Ground Reality Information Processing System (GRIPS)",
    category: "Aviation Safety",
    description:
      "Advanced runway safety technology preventing runway incursions, excursions, and detecting foreign object debris (FOD) in real time.",
  },
  {
    id: "apparatus",
    patentId: "US20230324680A1",
    patentNo: "U.S. patent 20230324680A1",
    title: "Apparatus to Enable Disabled Users to Communicate",
    category: "Assistive Tech",
    description:
      "Tactile gesture interface translating micro-movements into synthetic speech and text for speech and mobility impaired individuals.",
  },
];

export const COLUMN_2_PROJECTS: ProjectItem[] = [
  {
    id: "aircraft-disinfect",
    patentId: "US20210269158A1",
    patentNo: "U.S. patent 20210269158A1",
    title: "Automated Aircraft Tray Table UV Disinfecting System",
    category: "Avionics & Sanitation",
    description:
      "Automated ultra-violet (UV) light disinfection system integrated into aircraft passenger tray tables to eliminate surface pathogens between flights.",
  },
  {
    id: "iot-based",
    patentId: "US20240087440A1",
    patentNo: "U.S. patent 20240087440A1",
    title: "IoT-Based Aquatic Safety & Pool Management System",
    category: "Aquatic IoT Safety",
    description:
      "Underwater motion sensing and perimeter monitoring system alerting lifeguards to submersion hazards in real time.",
  },
];

export const COLUMN_3_PROJECTS: ProjectItem[] = [
  {
    id: "oil-spill",
    patentId: "US20210269997A1",
    patentNo: "U.S. patent 20210269997A1",
    title: "Ocean Oil Spill Cleaning & Recovery System",
    category: "Environmental Tech",
    description:
      "Automated pontoon vessel utilizing specialized human hair felt rollers for efficient ocean crude oil spill retrieval and containment.",
  },
  {
    id: "drug-abuse-prevention",
    patentId: "US11464462B1",
    patentNo: "U.S. patent 11464462B1",
    title: "Drug Abuse Prevention Wearable Device",
    category: "Health Tech",
    description:
      "Wearable smart wristband combining micro-fluidic sweat analysis and ambient sensing to detect illicit drug exposure.",
  },
];

export const INVENTION_RESEARCH_HEADING = "Inventions & Research Projects";
export const INVENTION_RESEARCH_DESCRIPTION =
  "A deep passion for problem-solving drives every project — turning real-world challenges into practical, life-saving technologies.";

export const RECOGNITION_HEADING = "Recognition & Awards";

export const RECOGNITION_BULLETS = [
  "Recipient of the George Washington Honor Medal from the Freedoms Foundation.",
  "Felicitation by the Texas House of Representatives via official House Resolution #403.",
  "Nominated for the prestigious Jane's ATC Award 2014 in Madrid for GRIPS.",
  "Evaluated and recommended by NASA scientists, FAA, and NATS (UK).",
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
  "As the founder of DiscoverSTEM, Mirza Faizan regularly guides young innovators using a 5-step methodology: Think, Analyze, Ideate, Create, and Innovate. His mentorship has produced nearly 200 young inventors and $3.5M+ in elite university scholarships.";

export const TALKS_BULLETS = [
  "DiscoverSTEM Innovation\nMentorship",
  "AIAA & Aviation Safety\nPresentations",
  "Keynote Talks &\nUniversity Lectures",
];

export const EXPERIENCE_HEADING = "Experience & Professional Journey";

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: "Founder & Chief Innovator",
    description: "DiscoverSTEM Program (2016–Present)",
  },
  {
    role: "Head of Engineering Services (USA & Canada)",
    description: "Capgemini (Resigned 2019 to focus full-time on DiscoverSTEM)",
  },
  {
    role: "Aerospace Scientist & Consultant",
    description: "Honeywell, Airbus-France & US Aerospace Projects",
  },
  {
    role: "Embedded Systems & Defense Research",
    description: "DRDO & Satyam Computers",
  },
];

export const WORLD_SAYS_HEADING = "What the World Says";
export const WORLD_SAYS_DESCRIPTION =
  "A legacy built on innovation. A reputation earned through impact. Discover what clients, collaborators, and industry leaders say about working with Mirza Faizan.";

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
    image: cleanGarbage,
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
    image: aircraft_tray,
  },
  {
    id: "US20220034624A1",
    patentNo: "U.S. patent 20220034624A1",
    title: "Relay based system to launch a projectile",
    region: "US",
    status: "Granted",
    description:
      "A relay-based electromagnetic launch system using sequential magnetic acceleration rings to launch payloads and projectiles with high velocity.",
    image: relay,
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
    image: cleaning_Spilled_oil,
  },
  {
    id: "US20210270240A1",
    patentNo: "U.S. patent 20210270240A1",
    title: "Wind powered system to lift water using multiple tanks",
    region: "US",
    status: "Granted",
    description:
      "A wind-powered water pumping system featuring a central rotating cylinder and multi-tank relay staging to lift water across vertical elevations.",
    image: wind_powered,
  },
  {
    id: "US11464462B1",
    patentNo: "U.S. patent 11464462B1",
    title: "Drug abuse prevention device and a method thereof",
    region: "US",
    status: "Granted",
    description:
      "A wearable smart wristband combining micro-fluidic sweat analysis and ambient air sensing to detect illicit drug exposure and alert guardians.",
    image: drug_abuse,
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
      "A package delivery box 100 with container 101, openable lid 102, pressure plate 103 closing mechanism, and flexible rod 104 slider 109 locking mechanism.",
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
  designation:
    "Indian-American Aerospace Scientist, Aviation Safety Expert & DiscoverSTEM Founder",
  paragraphs: [
    "Mirza Faizan is an Indian-American aerospace scientist and aviation safety expert. He attended St. Karen’s School in Patna, graduated from Patna University, completed his Master of Computer Applications at Manipal Institute of Technology, and pursued embedded systems research at the prestigious Indian Institute of Science (IISc), Bangalore.",
    "He built his professional foundation working with renowned defense and aerospace organizations including the Defence Research and Development Organisation (DRDO), Satyam Computers, Honeywell, Airbus-France, and Capgemini (where he served as Head of Engineering Services for USA & Canada), as well as leading aerospace projects in the United States.",
    "Faizan is the inventor of the Ground Reality Information Processing System (GRIPS), a revolutionary runway safety technology designed to prevent runway incursions and detect foreign object debris (FOD) in real-time during aircraft takeoff and landing. Evaluated and recommended by NASA scientists to National Air Traffic Services (NATS UK) and shortlisted by the Federal Aviation Administration (FAA), GRIPS was nominated for the prestigious Jane’s ATC Award in Madrid.",
    "In 2016, he founded DiscoverSTEM to mentor the next generation of thinkers, scientists, and innovators. Utilizing a 5-step framework—Think, Analyze, Ideate, Create, and Innovate—DiscoverSTEM has produced nearly 200 young inventors (ages 10 to 18) and secured $3.5M+ in university scholarships to elite institutions including Harvard, Stanford, Princeton, and Duke.",
    "A member of the American Institute of Aeronautics and Astronautics (AIAA), Mirza Faizan came to the US on an EB-1 visa. He is a recipient of the George Washington Honor Medal from the Freedoms Foundation and was felicitated by the Texas House of Representatives with House Resolution #403 in recognition of his transformative contributions to innovation and education.",
  ],
};

export const HOME_COUNTERS: CounterItem[] = [
  {
    value: "50",
    unit: "+",
    label: "Patents Granted",
  },
  {
    value: "200",
    unit: "+",
    label: "Young Inventors Trained",
  },
  {
    value: "3.5",
    unit: "M+$",
    label: "Scholarships Secured",
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
  subtitle: "52+ Patent Portfolio (US & International)",
  description:
    "Mirza Faizan is a serial innovator whose mission-critical aerospace safety systems, AI analytics, biotech, and assistive technologies have produced groundbreaking patented inventions across the United States, South Africa, and internationally.",
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
      {
        code: "A61B 5/14517",
        description: "Measuring chemical compounds in sweat",
      },
      {
        code: "A61B 5/0002",
        description: "Telemetry aspect of medical measurements",
      },
      {
        code: "G16H 40/67",
        description: "Mobile health monitoring systems and alert delivery",
      },
    ],
    legalEvents: [
      {
        date: "Jun 03, 2021",
        title: "Priority & Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "Oct 11, 2022",
        title: "Patent Granted (US11464462B1)",
        type: "Grant",
      },
      {
        date: "Oct 11, 2022",
        title: "Publication of US11464462B1",
        type: "Publication",
      },
      {
        date: "Jun 17, 2041",
        title: "Adjusted Expiration",
        type: "Expiration",
      },
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
    grantPublicationNo: "US12217616B2",
    title: "Aircraft tracking system and method",
    region: "US",
    status: "Granted",
    abstract:
      "A Receiver and Transmitter of Enroute Aircraft Data (RATEAD) system and method for tracking enroute and missing aircraft in real time. The system comprises a network of autonomous floating ocean buoys and high-altitude atmospheric balloons equipped with solar-powered battery systems, gyroscopically stabilized motorized dish antennas, and wireless transceivers. As an aircraft flies along its flight path, nearby RATEAD nodes maintain continuous real-time wireless links with the aircraft, mirroring black box flight recorder data to cloud and ground servers. If an aircraft unexpectedly departs its route or fails to connect with the next node within an expected time window, the system automatically detects node connection loss and triggers immediate emergency missing-aircraft tracking alerts.",
    inventors: [
      "Mirza Faizan",
      "Mirza Rizwan",
      "Danish Khan",
      "Sidra Ambreen",
      "Mustafa SYED",
      "Yaseen Syed",
      "Mehreen Syed",
      "Vineet ANSHUMAN",
      "Aiman Rahman",
      "Summan Rahman",
      "Saadia Asaf",
      "Mansoor Hasan Khan",
    ],
    filingDate: "Jun 4, 2021",
    publicationDate: "Dec 8, 2022",
    priorityDate: "Jun 4, 2021",
    applicationNumber: "US17/339,280",
    keywords: [
      "aircraft tracking system",
      "RATEAD",
      "enroute aircraft data",
      "floating ocean buoys",
      "atmospheric balloon network",
      "real-time black box replication",
      "gyroscopic dish antenna",
      "missing aircraft emergency alert",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/ed/b5/98/c1f4c03db3a649/US20220390615A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20220390615A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/80/f9/9f/dd7714c15ff89a/US20220390615A1-20221208-D00000.png",
    images: [
      {
        title:
          "FIG. 1 — Aircraft Tracking System & Central Server Architecture",
        caption:
          "Central computing device (100) architecture showing processor (102), memory (104), storage (106), I/O devices (108), and position acquisition unit (110).",
        url: "https://patentimages.storage.googleapis.com/80/f9/9f/dd7714c15ff89a/US20220390615A1-20221208-D00000.png",
      },
      {
        title: "FIG. 2 — Floating Ocean Buoy Network (RATEAD System)",
        caption:
          "RATEAD ocean buoy embodiment (200) featuring floating buoys (202), solar battery system (204), gyroscopic dish antenna (206), tracking motors (208), and solar panels (210).",
        url: "https://patentimages.storage.googleapis.com/2d/22/b2/e63b65fcb8090c/US20220390615A1-20221208-D00002.png",
      },
      {
        title:
          "FIG. 3 — High-Altitude Atmospheric Balloon Network (RATEAD System)",
        caption:
          "RATEAD atmospheric balloon embodiment (300) featuring high-altitude balloons (302) equipped with climate sensors, solar power (304), motorized directional antenna (306), and weatherproofing (310).",
        url: "https://patentimages.storage.googleapis.com/01/3b/a1/0ad7d6aeb2e49e/US20220390615A1-20221208-D00003.png",
      },
      {
        title: "FIG. 4 — Enroute Tracking & Missing Aircraft Alert Flowchart",
        caption:
          "Process flowchart (400) illustrating real-time black box data replication (404), node handoff (406), node loss timeout detection (408), and automated missing aircraft alert generation (410).",
        url: "https://patentimages.storage.googleapis.com/52/2e/3c/b58c4b01255fde/US20220390615A1-20221208-D00004.png",
      },
    ],
    summaryHighlights: [
      "RATEAD Network Mesh Infrastructure: Deployable across oceanic corridors (floating buoys 202) and remote atmospheric sectors (high-altitude balloons 302) to maintain continuous coverage where ground radar cannot reach.",
      "Real-Time Black Box Telemetry Streaming: Establishes high-bandwidth wireless links with passing in-range aircraft, replicating black box data and flight telemetry to cloud servers in real time.",
      "Gyroscopic Tracking Antenna: Dish antenna (206/306) mounted on a motorized gyroscopic platform that automatically aligns and tracks passing aircraft dynamically during motion.",
      "Automated Missing Aircraft Early Alert: Monitors expected node arrival timestamps; if an aircraft fails to check into the next sequential node, the system immediately flags the exact last known location and triggers search and rescue alerts.",
    ],
    referenceNumerals: [
      { num: "100", label: "Central Tracking Server / Computing System" },
      { num: "102", label: "Central Processing Unit (CPU)" },
      { num: "104", label: "System Memory / Telemetry Storage" },
      { num: "106", label: "Mass Storage Device" },
      { num: "108", label: "I/O Communication Devices" },
      { num: "110", label: "Data & Aircraft Position Acquisition Unit" },
      { num: "200", label: "RATEAD Ocean Buoy System Embodiment" },
      { num: "202", label: "Ocean Floating Buoys" },
      { num: "204", label: "Solar-Powered Battery Bank" },
      { num: "206", label: "Gyroscopic Motorized Dish Antenna" },
      { num: "208", label: "Antenna Steering Motors" },
      { num: "210", label: "Solar Panel & Weatherproof Housing" },
      { num: "300", label: "RATEAD Atmospheric Balloon System Embodiment" },
      { num: "302", label: "High-Altitude Atmospheric Balloons" },
      { num: "304", label: "Balloon Solar Power System" },
      { num: "306", label: "Directional Receiver Dish Antenna" },
      { num: "310", label: "Atmospheric Weatherproofing Unit" },
      { num: "400", label: "Missing Aircraft Tracking Method Flowchart" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A receiver and transmitter of enroute aircraft data (RATEAD) system, said system comprising: a plurality of network enabled devices at a plurality of locations; and said plurality of network enabled devices are communicatively coupled to an aircraft passing within a pre-defined range, wherein a data of said in range aircraft is communicatively transmitted in real-time to a network device of said plurality of network enabled devices with which said aircraft is connected.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The RATEAD system as claimed in claim 1, wherein the plurality of network enabled devices comprise floating ocean buoys or high-altitude atmospheric balloons equipped with solar panels and battery systems.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The RATEAD system as claimed in claim 1, wherein each network device includes a gyroscopically mounted motorized dish antenna configured to dynamically align with the direction of the passing aircraft.",
      },
    ],
    legalEvents: [
      {
        date: "Jun 04, 2021",
        title: "Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "Dec 08, 2022",
        title: "Publication of US20220390615A1",
        type: "Publication",
      },
      {
        date: "Feb 04, 2025",
        title: "Patent Granted (US12217616B2)",
        type: "Grant",
      },
      {
        date: "Jun 04, 2041",
        title: "Anticipated Expiration",
        type: "Expiration",
      },
    ],
    descriptionSections: [
      {
        heading: "FIELD & BACKGROUND OF THE INVENTION",
        paragraphs: [
          "Transoceanic and remote flight tracking remains a major challenge in civil aviation. When aircraft fly over vast ocean expanses beyond ground radar reach, flight telemetry data relies on intermittent satellite pings, making early detection of in-flight emergencies or lost aircraft difficult.",
          "The present invention introduces the Receiver and Transmitter of Enroute Aircraft Data (RATEAD) system, which establishes an autonomous mesh network of ocean buoys and atmospheric balloons to continuously capture and mirror flight data in real time.",
        ],
      },
      {
        heading: "RATEAD OCEAN BUOY & ATMOSPHERIC BALLOON NODES",
        paragraphs: [
          "The RATEAD system utilizes solar-powered floating ocean buoys (202) and high-altitude balloons (302) stationed along flight corridors.",
          "Each node features a gyroscopically stabilized motorized dish antenna (206/306) that locks onto passing aircraft, maintaining continuous gigabit-speed data transfer even in rough seas or turbulent winds.",
        ],
      },
      {
        heading: "REAL-TIME BLACK BOX REPLICATION & MISSING AIRCRAFT ALERTS",
        paragraphs: [
          "As aircraft fly from node to node, black box telemetry and cockpit voice data are replicated to secure ground and cloud servers in real time.",
          "If an aircraft fails to establish a wireless link with the next node along its route within an expected timeframe, the central server (100) instantly detects node loss and alerts air traffic authorities with exact coordinates.",
        ],
      },
    ],
  },
  US11433916B1: {
    id: "US11433916B1",
    patentNo: "US11433916B1",
    grantPublicationNo: "US11433916B1",
    title:
      "System to generate an alert to wake a driver of a vehicle and a method thereof",
    region: "US",
    status: "Granted",
    abstract:
      "A system to generate an alert to wake up a drowsy driver of a moving vehicle comprises at least one camera configured to detect driver's facial expressions, at least one Electroencephalograph (EEG) detector configured to detect EEG signals from the driver, at least one Artificial Intelligence (AI) camera configured to detect and enhance facial expressions using artificial neural networks, and a processing module configured to analyze EEG signals and compare facial captures with pre-stored neural training data to confirm driver drowsiness and trigger multi-sensory inside and outside vehicle alerts.",
    inventors: [
      "Mirza Faizan",
      "Adam Mhal",
      "Anish Bhattacharya",
      "Ayra Iftikhar",
      "Manha Sadarulanam",
      "Tanish Prasad",
      "Vivek Maranganti",
      "Abdullah Kabeer",
      "Mirza Rizwan",
    ],
    filingDate: "Jul 12, 2021",
    publicationDate: "Sep 6, 2022",
    priorityDate: "Jul 12, 2021",
    applicationNumber: "US17/373,447",
    keywords: [
      "driver vigilance",
      "EEG drowsiness detection",
      "AI facial recognition",
      "neural network analysis",
      "vehicle safety",
      "alert generation system",
      "external warning speaker",
      "drowsy driver alert",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/7c/ed/77/c8ce3b6ffea384/US11433916.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US11433916B1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/0e/68/23/d5942848ada341/US11433916-20220906-D00000.png",
    images: [
      {
        title: "FIG. 1 — System Architecture Overview",
        caption:
          "Block diagram illustrating the camera, EEG sensor, AI camera neural processor, and internal/external alarm notification units.",
        url: "https://patentimages.storage.googleapis.com/0e/68/23/d5942848ada341/US11433916-20220906-D00000.png",
      },
      {
        title: "FIG. 2 — Driver Surveillance & Facial Posture Sensor Layout",
        caption:
          "Diagram showing vehicle interior positioning of optical camera sensors and EEG signal receiver relative to the driver.",
        url: "https://patentimages.storage.googleapis.com/96/11/bf/b6b67ded3c7dd8/US11433916-20220906-D00001.png",
      },
      {
        title: "FIG. 3 — Multi-Stage Alert Dispatch Process",
        caption:
          "Flowchart detailing dual-sensor EEG + AI facial signal verification and escalating interior cabin and exterior vehicle audio-visual alarms.",
        url: "https://patentimages.storage.googleapis.com/29/0c/ca/0b5b5585a320a6/US11433916-20220906-D00002.png",
      },
    ],
    summaryHighlights: [
      "Contactless & Dual EEG + AI Vision Sensing: Combines real-time EEG brainwave signal processing with optical AI cameras to monitor microsleeps and facial fatigue.",
      "Neural Network Image Enhancement: Uses artificial neural networks to enhance low-light facial captures and cross-match with pre-stored driver fatigue models.",
      "Interior Cabin Awakening Alerts: Triggers loud internal acoustic alarms immediately when driver drowsiness is verified.",
      "External Vehicle Warning System: Activates exterior speakers and LED display screens to warn surrounding drivers and pedestrians of a fatigued driver.",
    ],
    referenceNumerals: [
      { num: "100", label: "Driver Drowsiness Alert System" },
      { num: "102", label: "Electroencephalograph (EEG) Sensor Module" },
      { num: "104", label: "Optical Camera Array" },
      { num: "106", label: "Artificial Intelligence (AI) Camera Unit" },
      { num: "108", label: "Central Processing & Analysis Module" },
      { num: "110", label: "Internal Cabin Speaker / Alarm" },
      { num: "112", label: "External Vehicle Warning Speaker & Screen" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A system to generate an alert to wake up a drowsy driver of a moving vehicle, said system comprises: at least one camera configured to detect driver's facial expressions; at least one Electroencephalograph (EEG) detector configured to detect EEG signals from the driver; at least one Artificial Intelligence (AI) camera configured to detect the driver's facial expressions and enhance the driver's facial expressions using artificial neural network; a processing module, connected to the at least one camera, at least one EEG detector and at least one AI camera; wherein the processing module is configured to process the EEG signals, wherein the at least one Camera and the at least one AI camera take pictures of driver's face and send the pictures to processing module to start comparison of driver's face with a database of pre-stored training pictures after receiving signal from EEG, and wherein the processing module is configured to compare the detections made by at least one camera and the at least one AI camera to confirm the drowsiness of the driver, wherein the system generates an alarm after receiving the confirmation of driver's drowsiness, wherein the alarms are produced inside the vehicle and/or outside the vehicle.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The system to generate the alert to wake up the driver of the vehicle as claimed in claim 1 further comprises a screen and a speaker attached outside the vehicle.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The system to generate the alert to wake up the driver of the vehicle as claimed in claim 2 wherein the screen and the speaker are connected to the processing module.",
      },
      {
        num: 4,
        isIndependent: false,
        text: "The system to generate the alert to wake the driver of the vehicle as claimed in claim 3 wherein the screen is configured to display a message and the speaker is configured to make a louder noise outside the vehicle in response to the alert generated by the processing module.",
      },
      {
        num: 5,
        isIndependent: false,
        text: "The system to generate the alert to wake the driver of the vehicle as claimed in claim 1 further comprises a speaker fixed inside the vehicle.",
      },
      {
        num: 6,
        isIndependent: false,
        text: "The system to generate the alert to wake up the driver of the vehicle as claimed in claim 5, wherein the speaker that fixed inside the vehicle is connected to the processing module.",
      },
      {
        num: 7,
        isIndependent: false,
        text: "The system to generate the alert to wake the driver of the vehicle as claimed in claim 6, wherein the speaker that fixed inside the vehicle is configured to generate loud sound to wake the driver in response to the alert generated by the processing module.",
      },
    ],
    descriptionSections: [
      {
        heading: "TECHNICAL FIELD & BACKGROUND",
        paragraphs: [
          "The present invention relates to a system and method for vehicle driver safety, specifically an intelligent multi-modal monitoring system utilizing electroencephalogram (EEG) signals and AI-powered computer vision to detect drowsy drivers and generate immediate awakening alerts.",
          "Driver fatigue and microsleep episodes account for a significant portion of traffic accidents worldwide. Conventional warning systems rely solely on steering wheel movement or single-camera eye-tracking, which often yield false positives or fail in poor lighting conditions.",
        ],
      },
      {
        heading: "DUAL-SENSOR EEG AND AI VISION DETECTION",
        paragraphs: [
          "The system incorporates an EEG signal receiver to monitor brainwave patterns associated with onset of sleep (theta/alpha wave shifts). Upon detecting EEG indicators of drowsiness, the processing unit triggers high-resolution optical and AI-assisted cameras.",
          "The AI camera utilizes artificial neural networks to enhance facial images captured in sub-optimal ambient light. The processing module compares the real-time facial expressions against a pre-trained database of fatigue indicators to confirm driver drowsiness with high precision.",
        ],
      },
      {
        heading: "INTEGRATED CABIN & EXTERIOR ALARM SYSTEM",
        paragraphs: [
          "Once driver drowsiness is confirmed, the central module generates urgent alerts inside the cabin via high-decibel acoustic speakers to wake the driver immediately.",
          "Simultaneously, an external warning module consisting of exterior-mounted speakers and visual warning screens alerts adjacent vehicles and surrounding traffic, minimizing collision risks caused by an incapacitated driver.",
        ],
      },
    ],
  },

  US20230065017A1: {
    id: "US20230065017A1",
    patentNo: "US20230065017A1",
    grantPublicationNo: "US11571079B1",
    title: "Package delivery box",
    region: "US",
    status: "Granted",
    abstract:
      "A package delivery box 100 is disclosed. It comprises a container 101 for accommodating at least one package, an openable lid 102 attached to the container 101, a closing mechanism for closing the container 101, and a locking mechanism for locking the closed container 101. The closing mechanism comprises a pressure plate 103 at a base of the container 101, a string 105 connecting the pressure plate 103 with the lid, and at least one pull spring 106 between the lid 102 and the container 101, and the locking mechanism comprises a flexible rod 104 beneath the pressure plate 103 and directly connected to the pressure plate 103, a slider 109 connected to the flexible rod, and a hole 110 in the lid, wherein the hole 110 is adapted to accommodate insertion of the flexible rod 104 therein.",
    inventors: ["Mirza Faizan"],
    filingDate: "Aug 29, 2021",
    publicationDate: "Mar 2, 2023",
    priorityDate: "Aug 29, 2021",
    applicationNumber: "US17/460,241",
    keywords: [
      "package delivery box",
      "porch piracy prevention",
      "automated locking receptacle",
      "UV-C parcel sterilization",
      "weight-activated lid closure",
      "smart parcel compartment",
      "anti-theft box",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/72/52/aa/04d6d8fb582f94/US20230065017A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20230065017A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/97/99/3a/03761ddae8f921/US20230065017A1-20230302-D00000.png",
    images: [
      {
        title: "FIG. 1 — Automatic Closing Mechanism & Pressure Plate",
        caption:
          "Schematic view illustrating the base pressure plate, connection string, hook assembly, and tight top pull-spring for automatic lid closure upon parcel placement.",
        url: "https://patentimages.storage.googleapis.com/97/99/3a/03761ddae8f921/US20230065017A1-20230302-D00000.png",
      },
      {
        title: "FIG. 2 & 2a — Flexible Rod & Slider Locking Mechanism",
        caption:
          "Detail view showing the slider assembly beneath the push springs, flexible locking rod insertion into lid hole 110, push button 111, and key release mechanism.",
        url: "https://patentimages.storage.googleapis.com/00/00/00/US20230065017A1-20230302-D00001.png",
      },
    ],
    summaryHighlights: [
      "Weight-Triggered Auto Closing: Uses a bottom pressure plate linked via string and top pull-springs to automatically pull the lid shut as soon as a parcel is deposited.",
      "Tamper-Proof Mechanical Locking: Automatically engages a flexible rod into the lid locking aperture via a sliding locking block, preventing unauthorized external access.",
      "Integrated UV-C Sanitization: Features built-in ultraviolet radiation emitters that sanitize parcel surfaces within 9 seconds to neutralize bacteria and viral pathogens.",
      "Animal Escape & Safety Release: Equipped with an Arduino control module and internal motion sensors connected to a servo motor release button, allowing trapped pets or animals to escape safely.",
      "Modular Multi-Compartment System: Supports expandable 1-to-10 compartment configurations with individual locks and custom add-on racks (umbrella holder, shoe storage).",
    ],
    referenceNumerals: [
      { num: "100", label: "Package Delivery Box Assembly" },
      { num: "101", label: "Parcel Storage Container / Cavity" },
      { num: "102", label: "Openable Security Lid" },
      { num: "103", label: "Weight-Sensing Pressure Plate" },
      { num: "104", label: "Flexible Locking Rod" },
      { num: "105", label: "Lid Actuation String" },
      { num: "106", label: "Top Lid Pull Spring" },
      { num: "107", label: "Lid Attachment Hook" },
      { num: "108", label: "Base Push Springs" },
      { num: "109", label: "Sliding Lock Assembly Block" },
      { num: "110", label: "Lid Locking Aperture / Hole" },
      { num: "111", label: "Servo Emergency Release Push Button" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A package delivery box comprising: a container for accommodating at least one package; an openable lid attached to the container; a closing mechanism for closing the container; and a locking mechanism for locking the closed container, wherein the closing mechanism comprises a pressure plate at a base of the container, a string connecting the pressure plate with the lid, and at least one pull spring between the lid and the container, and wherein the locking mechanism comprises a flexible rod beneath the pressure plate and directly connected to the pressure plate, a slider connected to the flexible rod, and a hole in the lid, wherein the hole is adapted to accommodate insertion of the flexible rod therein.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The package delivery box as claimed in claim 1, wherein the slider is a mechanical part slidably movable and adapted to convert straight-line motion to rotary motion and/or rotary motion to straight line motion, and wherein the slider slides towards the hole in a locking position.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The package delivery box as claimed in claim 1, further comprising an Arduino board adapted to control the lid based on movement detected inside the box.",
      },
      {
        num: 4,
        isIndependent: false,
        text: "The package delivery box as claimed in claim 1, comprising a plurality of compartments, each of the plurality of compartments accommodating one or more packages and having an individual closing and locking mechanism.",
      },
      {
        num: 5,
        isIndependent: false,
        text: "The package delivery box as claimed in claim 1, further comprising an ultraviolet sterilizer directing ultraviolet radiation on packages deposited in the box to disinfect surfaces.",
      },
    ],
    descriptionSections: [
      {
        heading: "PROBLEM STATEMENT & PORCH PIRACY PREVENTION",
        paragraphs: [
          "With over 5.5 million cases of porch piracy reported annually in the United States alone (exceeding $6 billion in stolen goods), there is a critical need for an automated, secure porch delivery box that locks incoming parcels without requiring courier access codes or keys.",
          "The present invention provides an autonomous mechanical and electrical delivery box that automatically closes and locks upon parcel placement, protecting deliveries from theft and weather exposure.",
        ],
      },
      {
        heading: "AUTOMATED CLOSING & LOCKING MECHANISMS",
        paragraphs: [
          "When a delivery driver drops a parcel into container (101), the weight depresses pressure plate (103). This pulls actuation string (105) down, allowing pull spring (106) to pull lid (102) closed instantly.",
          "Once closed, slider block (109) advances flexible locking rod (104) into lid hole (110), locking the box securely from the inside. Homeowners can easily retrieve contents using an external physical key.",
        ],
      },
      {
        heading: "UV-C DISINFECTION & SAFETY FEATURES",
        paragraphs: [
          "To combat surface pathogen transmission, the delivery box integrates an automated UV-C sterilization module that bathes deposited packages in germicidal ultraviolet light for approximately 9 seconds, deactivating viruses and bacteria before retrieval.",
          "For safety, an internal motion sensor connected to an Arduino micro-controller automatically unlocks lid (102) via a servo push button if an animal or pet enters the receptacle.",
        ],
      },
    ],
  },

  US20210086970A1: {
    id: "US20210086970A1",
    patentNo: "US20210086970A1",
    grantPublicationNo: "US11472617B2",
    title:
      "Biodegradable bottle cap using pestalotiopsis microsporia to biodegrade waste plastic bottle",
    region: "US",
    status: "Granted",
    abstract:
      "A biodegradable bottle cap impregnated with plastic-eating fungus Pestalotiopsis microspora housed within a protective aluminum casing and safe food dye indicator. Upon pulling an integrated tab after consuming the beverage, the barrier breaks, releasing the fungus onto the plastic bottle to rapidly digest the bottle and cap within weeks without leaving synthetic environmental waste behind.",
    inventors: [
      "Mirza Faizan",
      "Hana Ahmad",
      "Humza Ahmad",
      "Mohsen Ahmad",
      "Rabiya Sayeed",
      "Sofia Ali",
      "Zain Ali",
      "Sarah Nawab",
      "Danyal Nawab",
      "Mirza Rizwan",
    ],
    filingDate: "Sep 19, 2019",
    publicationDate: "Mar 25, 2021",
    priorityDate: "Sep 19, 2019",
    applicationNumber: "US16/575,925",
    keywords: [
      "biodegradable bottle cap",
      "Pestalotiopsis microspora",
      "plastic eating fungus",
      "eco friendly packaging",
      "aluminum casing seal",
      "food dye safety indicator",
      "zero waste plastic",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/a4/50/a8/890f2ce57e92c2/US20210086970A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20210086970A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/4a/15/e7/c4f3bfb9db4783/US20210086970A1-20210325-D00000.png",
    images: [
      {
        title: "FIG. 1 — Bottle Cap Top Cover & Component Sections",
        caption:
          "Top view diagram showing plastic outer protector (1), pull tab (2), food dye reservoir (3), fungal spores chamber (4), aluminum casing (5), and bottom breakable plastic membrane (6).",
        url: "https://patentimages.storage.googleapis.com/4a/15/e7/c4f3bfb9db4783/US20210086970A1-20210325-D00000.png",
      },
      {
        title: "FIG. 2 — Side Cross-Sectional Layer Assembly",
        caption:
          "Side elevation view depicting the multi-layered seal between the aluminum casing, food dye compartment, and fungal activation trigger.",
        url: "https://patentimages.storage.googleapis.com/08/7f/c0/efb4374a47dd33/US20210086970A1-20210325-D00001.png",
      },
      {
        title: "FIG. 3 — Outer Shell & Bottle Interface Mechanics",
        caption:
          "3D schematic of the biodegradable cap outer shell showing thread alignment and permanent pull-tab locking teeth.",
        url: "https://patentimages.storage.googleapis.com/85/9e/87/277fcd33f85049/US20210086970A1-20210325-D00002.png",
      },
    ],
    summaryHighlights: [
      "Plastic-Eating Fungal Biodegradation: Employs Pestalotiopsis microspora spores capable of consuming polyurethane and polyethylene plastic bottles within weeks instead of centuries.",
      "Protective Aluminum & Dye Casing: Encloses fungal spores inside a zero-leakage aluminum barrier paired with natural food coloring to instantly signal accidental early seal breach.",
      "One-Way Pull-Tab Trigger: Pulling tab (2) permanently locks the cap onto the bottle so it cannot be reopened for drinking, while simultaneously puncturing the internal seal to initiate biodegradation.",
      "Zero Toxic Residuals: Entire assembly breaks down naturally into organic compost, eliminating plastic landfill accumulation and ocean microplastics.",
    ],
    referenceNumerals: [
      { num: "1", label: "Plastic Outer Cap Protector" },
      { num: "2", label: "Pull-Tab Barrier Actuator & Lock" },
      { num: "3", label: "Safe Food Dye Indicator Reservoir" },
      { num: "4", label: "Pestalotiopsis Microspora Fungal Storage Chamber" },
      { num: "5", label: "Protective Aluminum Casing Barrier" },
      { num: "6", label: "Breakable Bottom Cap Layer" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A biodegradable bottle cap comprising: an outer cap body formed of plastic; an aluminum casing housed within the outer cap body containing plastic-eating fungus Pestalotiopsis microspora and a safe food dye indicator; and a pull-tab mechanism configured to break a barrier of the aluminum casing when actuated, releasing the fungus onto an attached plastic bottle to initiate biodegradation.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The biodegradable bottle cap of claim 1, wherein actuation of the pull-tab permanently locks the cap to the bottle, preventing further access to the bottle interior.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The biodegradable bottle cap of claim 1, wherein the food dye indicator colors liquid within the bottle upon accidental seal rupture to signal non-potability.",
      },
    ],
    descriptionSections: [
      {
        heading: "ENVIRONMENTAL IMPACT & BIODEGRADATION",
        paragraphs: [
          "With hundreds of millions of single-use plastic water bottles ending up in landfills and marine environments every year, traditional recycling rates remain low. Plastic bottles require hundreds of years to decompose naturally.",
          "The present invention utilizes the rare plastic-eating fungus Pestalotiopsis microspora, which thrives on polyurethane and polyethylene plastics even in anaerobic environments, reducing plastic bottle waste to natural organic compounds in a matter of weeks.",
        ],
      },
      {
        heading: "SEAL SECURITY & VISUAL DYE SAFETY SYSTEM",
        paragraphs: [
          "To keep the fungal spores dormant and prevent premature plastic breakdown while the beverage is stored, spores are safely isolated inside an inert aluminum casing (5).",
          "A food-grade dye reservoir (3) is co-stored with the fungus. In the event of an accidental seal rupture prior to consumption, the dye immediately colors the liquid, visually warning consumers not to drink.",
        ],
      },
      {
        heading: "PULL-TAB ACTIVATION METHOD",
        paragraphs: [
          "Once the user finishes drinking, they replace the cap and pull actuation tab (2). This permanently locks the cap onto the bottle threads and pierces bottom membrane (6), releasing Pestalotiopsis microspora directly into the empty bottle to begin rapid biodegradation.",
        ],
      },
    ],
  },

  US20230034830A1: {
    id: "US20230034830A1",
    patentNo: "US20230034830A1",
    grantPublicationNo: "US11753804B2",
    title: "Fluid flow control unit",
    region: "US",
    status: "Granted",
    abstract:
      "A fluid flow control unit 100 adapted to control flow of fluid from a tap is disclosed. The fluid flow control unit comprises a vertical piece 101 extending along the length of the tap; and a horizontal piece 102 extending along a handle of the tap, wherein the vertical piece 101 and the horizontal piece 102 are sheet structures attached together at a predetermined angle, wherein one of sides 101a of the vertical piece 101 is attached to one of sides 102a of horizontal piece, and wherein a point of attachment of the vertical piece 101 and the horizontal piece is above the handle 105 of the tap.",
    inventors: ["Ayat Faizan", "Mirza Faizan"],
    filingDate: "Aug 1, 2021",
    publicationDate: "Feb 2, 2023",
    priorityDate: "Aug 1, 2021",
    applicationNumber: "US17/391,000",
    keywords: [
      "fluid flow control",
      "water conservation tap",
      "predetermined flow rate",
      "inverted L-shaped control unit",
      "tap handle restrictor",
      "plumbing flow regulator",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/f5/64/e2/665a82eb7bb2e4/US20230034830A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20230034830A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/ef/8c/bf/5e00923242d3fc/US20230034830A1-20230202-D00000.png",
    images: [
      {
        title: "FIG. 1 — Fluid Flow Control Unit Structure",
        caption:
          "Schematic view showing vertical piece (101), horizontal piece (102), attachment line (103), side edges (101a & 102a), gripping extended pieces (104), and handle alignment (105).",
        url: "https://patentimages.storage.googleapis.com/ef/8c/bf/5e00923242d3fc/US20230034830A1-20230202-D00000.png",
      },
      {
        title: "FIG. 2 — Fluid Flow Dispensing Assembly Mounted on Tap",
        caption:
          "Perspective view illustrating fluid control unit 100 mounted on a water faucet, demonstrating handle travel restriction to regulate output flow rate.",
        url: "https://patentimages.storage.googleapis.com/81/c4/01/65432cabfa1302/US20230034830A1-20230202-D00001.png",
      },
    ],
    summaryHighlights: [
      "Water Conservation Mechanism: Restricts tap handle travel distance to a predetermined angle, controlling liquid discharge to essential flow levels and eliminating wasteful over-dispensing.",
      "Inverted L-Shaped Sheet Construction: Consists of a vertical sheet (101) running longitudinally along the faucet body and a horizontal sheet (102) positioned above the handle.",
      "Adjustable Flexible Gripping Unit: Features flexible extended pieces (104) that conform to different faucet shapes and diameters, preventing slipping during handle operation.",
      "Universal Tap Compatibility: Easily retrofitted onto existing kitchen and bathroom faucets without requiring plumbing alterations or pipe disassemblies.",
    ],
    referenceNumerals: [
      { num: "100", label: "Fluid Flow Control Unit Assembly" },
      { num: "101", label: "Vertical Sheet / Body Piece" },
      { num: "101a", label: "Vertical Piece Attachment Edge" },
      { num: "102", label: "Horizontal Restrictor Sheet" },
      { num: "102a", label: "Horizontal Piece Attachment Edge" },
      { num: "103", label: "Sheet Attachment Line / Joint" },
      { num: "104", label: "Faucet Gripping Extended Arms" },
      { num: "105", label: "Faucet Handle" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A fluid flow control unit adapted to control flow of fluid from a tap, the fluid flow control unit comprises: a vertical piece extending along the length of the tap; and a horizontal piece extending along a handle of the tap, wherein the vertical piece and the horizontal piece are sheet structures attached together at a predetermined angle, wherein one of sides of the vertical piece is attached to one of sides of horizontal piece, and wherein a point of attachment of the vertical piece and the horizontal piece is above the handle of the tap.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The fluid flow control unit as claimed in claim 1, wherein the fluid flow control unit is made of plastic material.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The fluid flow control unit as claimed in claim 1, wherein the vertical piece comprises one or more gripping unit to allow the vertical unit to rest on the tap.",
      },
      {
        num: 4,
        isIndependent: false,
        text: "The fluid flow control unit as claimed in claim 3, wherein the gripping unit comprises two extended pieces adapted to surround the length of the tap.",
      },
      {
        num: 5,
        isIndependent: false,
        text: "The fluid flow control unit as claimed in claim 1, wherein the predetermined angle between the vertical piece and the horizontal piece is associated with a predetermined rate of fluid flow.",
      },
    ],
    descriptionSections: [
      {
        heading: "BACKGROUND & WATER CONSERVATION OBJECTIVE",
        paragraphs: [
          "Water scarcity and excessive domestic water waste during daily tasks (washing, rinsing) present significant environmental and economic challenges.",
          "Conventional faucets lack easy, customizable physical limiters, leading users to open handles fully and waste gallons of clean water. The present invention provides a lightweight, easily installable flow control attachment that restricts handle opening to an optimal, water-saving angle.",
        ],
      },
      {
        heading: "MECHANICAL DESIGN & TAP MOUNTING",
        paragraphs: [
          "The control unit (100) comprises an inverted L-shaped sheet configuration formed by vertical piece (101) and horizontal piece (102). Extended gripping arms (104) wrap around the faucet barrel, holding the unit securely in place.",
          "When the user lifts tap handle (105), its upward travel is stopped when it meets horizontal piece (102). By adjusting the predetermined attachment angle between pieces (101) and (102), the maximum fluid flow rate can be precisely tuned.",
        ],
      },
    ],
  },

  US20230048142A1: {
    id: "US20230048142A1",
    patentNo: "US20230048142A1",
    grantPublicationNo: "US11766549B2",
    title: "Wearable device for managing alcohol-driven violence",
    region: "US",
    status: "Granted",
    abstract:
      "A wearable device 100 for managing alcohol-driven violence is disclosed. The device 100 comprises a capsule C1 adapted to sense sweat of wearer and detect a level of alcohol in the sweat, a capsule C3 adapted to convert a data detected by the capsule C1 to generate signal activating a capsule C4, a capsule C2 adapted to provide power to the capsule C3, and a capsule C5 adapted to detect a muscle activity of the wearer, wherein the capsule C4 is adapted to inject a drug into the body of the wearer, when activated, and wherein the capsule C5 alerts authorities when no muscle activity is detected.",
    inventors: [
      "Mirza Faizan",
      "Reya Dawlah",
      "Zad Ahmed",
      "Naadira Shareef Kateeb",
      "Tarik Syed",
      "Rishi Kata",
      "Lingesh Veda",
      "Yusuf Zakiy Ali",
      "Shreya Nair",
      "Ahmed Malik",
      "Mirza Rizwan",
    ],
    filingDate: "Aug 16, 2021",
    publicationDate: "Feb 16, 2023",
    priorityDate: "Aug 16, 2021",
    applicationNumber: "US17/403,484",
    keywords: [
      "wearable device",
      "alcohol driven violence",
      "transdermal sweat alcohol sensor",
      "microneedle drug injection",
      "Haloperidol sedative delivery",
      "electromyography muscle sensor",
      "automated emergency alert",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/12/22/c3/4585649c0ac100/US20230048142A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20230048142A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/76/d9/13/75202607461554/US20230048142A1-20230216-D00000.png",
    images: [
      {
        title: "FIG. 1 — Multi-Capsule Wearable Band System Architecture",
        caption:
          "Schematic illustration of the wristband device (100) showing integrated capsules C1 (sweat alcohol sensor), C2 (power supply), C3 (processing module), C4 (transdermal drug injector), and C5 (EMG muscle activity sensor).",
        url: "https://patentimages.storage.googleapis.com/76/d9/13/75202607461554/US20230048142A1-20230216-D00000.png",
      },
      {
        title: "FIG. 2 — Microneedle Drug Delivery Capsule Assembly",
        caption:
          "Detailed cross-section of drug administration capsule C4 featuring Haloperidol reservoir (103), microtubes (104), micro-piston driver, and painless microneedles (106).",
        url: "https://patentimages.storage.googleapis.com/6e/03/56/61c3d3a5f9bc5c/US20230048142A1-20230216-D00001.png",
      },
      {
        title: "FIG. 3 — Transdermal Microneedle Array Patch",
        caption:
          "Enlarged view showing microneedle array patch (110) with hollow microneedles (106) for rapid transdermal sedative administration upon threshold alcohol detection.",
        url: "https://patentimages.storage.googleapis.com/7a/f2/91/29869ae546a5dd/US20230048142A1-20230216-D00002.png",
      },
    ],
    summaryHighlights: [
      "Real-Time Transdermal Alcohol Sensing: Capsule C1 continuously monitors sweat alcohol concentration levels on the wearer's skin without invasive blood sampling.",
      "Automated Therapeutic Intervention: Capsule C4 deploys hollow microneedles (106) to painlessly inject a therapeutic dose of Haloperidol (103) into the subcutaneous layer to calm aggressive urges.",
      "Muscular Activity & Safety Monitoring: Capsule C5 utilizes EMG sensors to detect muscle movement; if no muscle activity is registered after drug administration, an emergency alert signal is sent to medical authorities.",
      "Modular Wristband Capsule Design: Compact, tamper-resistant wristband housing capsules C1 through C5 powered by rechargeable micro-battery unit C2.",
    ],
    referenceNumerals: [
      { num: "100", label: "Wearable Device Assembly / Wristband" },
      { num: "C1", label: "Sweat Alcohol Sensing Capsule" },
      { num: "C2", label: "Power Supply Unit / Battery Capsule" },
      { num: "C3", label: "Signal Conversion & Microcontroller Capsule" },
      { num: "C4", label: "Transdermal Drug Delivery Capsule" },
      { num: "C5", label: "EMG Muscle Activity & Alert Capsule" },
      { num: "101", label: "Adjustable Wrist Strap" },
      { num: "103", label: "Haloperidol Drug Reservoir" },
      { num: "104", label: "Drug Delivery Microtubes" },
      { num: "106", label: "Transdermal Microneedles" },
      { num: "110", label: "Microneedle Patch Assembly" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A wearable device 100 for managing alcohol-driven violence, the device 100 comprising: a capsule C1 adapted to sense sweat of wearer and detect a level of alcohol in the sweat; a capsule C3 adapted to convert a data detected by the capsule C1 to generate signal activating a capsule C4; a capsule C2 adapted to provide power to the capsule C3; and a capsule C5 adapted to detect a muscle activity of the wearer, wherein the capsule C4 is adapted to inject a drug into the body of the wearer, when activated, and wherein the capsule C5 alerts authorities when no muscle activity is detected.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The wearable device 100 as claimed in claim 1, wherein the drug injected by the capsule C4 is Haloperidol.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The wearable device 100 as claimed in claim 1, wherein the capsule C4 comprises a plurality of microtubes and microneedles to administer the drug subcutaneously.",
      },
      {
        num: 4,
        isIndependent: false,
        text: "The wearable device 100 as claimed in claim 1, wherein the capsule C5 comprises an electromyography sensor to monitor physiological muscle contractions.",
      },
      {
        num: 5,
        isIndependent: false,
        text: "The wearable device 100 as claimed in claim 1, wherein the capsule C5 comprises a wireless communication module configured to send GPS location coordinates to emergency services when zero muscle activity is detected.",
      },
    ],
    descriptionSections: [
      {
        heading: "PROBLEM STATEMENT & ALCOHOL-DRIVEN AGGRESSION",
        paragraphs: [
          "Alcohol-driven violence is a major societal concern responsible for millions of assaults, domestic abuse incidents, and public altercations annually. Excessive alcohol consumption impairs prefrontal cortex inhibitions while heightening aggressive behavioral tendencies.",
          "The present invention provides a bio-monitoring wearable system that automatically detects rising alcohol levels via perspiration and delivers a controlled therapeutic dose of sedative before aggressive episodes escalate into violence.",
        ],
      },
      {
        heading: "CAPSULE ARCHITECTURE & TRANSDERMAL INJECTION",
        paragraphs: [
          "The device (100) comprises five specialized capsules (C1–C5) mounted along strap (101). Capsule C1 measures ethanol concentration in transdermal sweat. When levels cross a critical safety threshold, processing capsule C3 triggers drug delivery capsule C4.",
          "Capsule C4 drives microtubes (104) and microneedles (106) into skin, delivering Haloperidol (103) directly into the circulatory system to reduce agitation without causing physical harm.",
        ],
      },
      {
        heading: "SAFETY & EMERGENCY RESPONDER MONITORING",
        paragraphs: [
          "To safeguard the wearer, capsule C5 continuously tracks electromyographic (EMG) muscle activity. If muscle movement drops to zero (indicating loss of consciousness or medical emergency), capsule C5 automatically transmits real-time location data to emergency responders and medical services.",
        ],
      },
    ],
  },

  US20220386914A1: {
    id: "US20220386914A1",
    patentNo: "US20220386914A1",
    grantPublicationNo: "US11751783B2",
    title: "System and Method for Mental State Determination",
    region: "US",
    status: "Granted",
    abstract:
      "The invention relates to mental health and using technology that can analyze and interpret hormones from drops of sweat and also a peer to peer feedback system to predict mental health issues (such as depression) in an individual. The invention further relates to the monitoring of sweat and feedback and interpreting the two in tandem to identify symptoms of mental health illnesses in an individual over a period of time (to predict and prevent that certain mental health disease). Furthermore, the records of the sweat analysis and peer to peer feedback will be utilized to provide smart suggestions and track the mental health of an individual.",
    inventors: [
      "Mirza Faizan",
      "Vineet Anshuman",
      "Sidra Ambreen",
      "Binu Kurien Varghese",
      "Syed Shah Ekramullah Alvi",
      "Abdul Malik Ayam",
      "Hunzalah Iqbal",
      "Mustafa Qadri",
      "Ayan Zaman",
      "Mirza Rizwan",
      "Ridah Shaista Shanavas",
      "Saadia Asaf",
      "Mansoor Hasan Khan",
    ],
    filingDate: "Jun 4, 2021",
    publicationDate: "Dec 8, 2022",
    priorityDate: "Jun 4, 2021",
    applicationNumber: "US17/339,205",
    keywords: [
      "mental state determination",
      "sweat hormone analysis",
      "peer to peer feedback system",
      "depression prediction",
      "cortisol and serotonin tracking",
      "biochemical and behavioral tandem analysis",
      "predictive mental healthcare",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/21/ae/e2/ebaf1067518b55/US20220386914A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20220386914A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/3b/13/71/b7820963cbd101/US20220386914A1-20221208-D00000.png",
    images: [
      {
        title:
          "FIG. 1 — Tandem Sweat Hormone & Peer Feedback System Architecture",
        caption:
          "System schematic illustrating sweat sample collection unit (102), biochemical hormone analyzer (100A), peer-to-peer behavioral feedback interface, and central mental health predictive processor.",
        url: "https://patentimages.storage.googleapis.com/3b/13/71/b7820963cbd101/US20220386914A1-20221208-D00000.png",
      },
      {
        title: "FIG. 2 — Dual-Track Mental Health Prediction Flowchart",
        caption:
          "Operational flowchart depicting real-time sweat biomarker extraction, cross-referencing with peer behavioral logs, historical trend analysis, and automated preventive therapy recommendations.",
        url: "https://patentimages.storage.googleapis.com/41/20/3a/ef88dd688c27b1/US20220386914A1-20221208-D00001.png",
      },
    ],
    summaryHighlights: [
      "Biochemical Sweat Biomarker Analysis: Analyzes micro-droplets of sweat to measure stress and mood-regulating hormones (cortisol, dopamine, serotonin, oxytocin).",
      "Peer-to-Peer Behavioral Feedback Loop: Combines objective hormonal data with trusted peer/family behavioral observations to build a holistic longitudinal mental health profile.",
      "Early Predictive Disease Identification: Interprets sweat chemistry and peer logs in tandem over extended periods to catch symptoms of clinical depression and anxiety before severe clinical onset.",
      "Smart Actionable Suggestions & AI Recommendations: Generates personalized lifestyle interventions, therapy prompts, and wellness tracking updates based on individual stress trends.",
    ],
    referenceNumerals: [
      { num: "100A", label: "Sweat & Peer Mental Health Analysis System" },
      { num: "102", label: "Hardware Housing / Micro-Fluidic Sensor Unit" },
      { num: "104", label: "Sweat Collection Micro-Capillary Layer" },
      { num: "106", label: "Hormone Detection Transducer Array" },
      { num: "108", label: "Peer Feedback Application Interface" },
      { num: "110", label: "Predictive Analytics & Recommendation Engine" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A system for determining a mental state of an individual, the system comprising: a sweat collection device configured to collect a sample of sweat from the individual; a processor; and a memory storing instructions that, when executed by the processor, cause the system to: analyze the collected sample of sweat to measure a concentration of one or more hormones associated with stress or mood; receive peer-to-peer feedback data regarding behavioral patterns of the individual; analyze the measured concentration of the one or more hormones and the received peer-to-peer feedback data in tandem to determine a mental state score; and output a predictive mental health notification based on the determined mental state score.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The system of claim 1, wherein the one or more hormones measured from sweat comprise cortisol, serotonin, dopamine, or oxytocin.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The system of claim 1, wherein the peer-to-peer feedback data is collected via a mobile application from designated family members, peers, or healthcare providers.",
      },
      {
        num: 4,
        isIndependent: false,
        text: "The system of claim 1, wherein the instructions further cause the system to track sweat hormone levels over a predetermined multi-day period to establish a personal baseline for depression risk prediction.",
      },
      {
        num: 5,
        isIndependent: false,
        text: "The system of claim 1, wherein outputting the predictive notification comprises transmitting automated lifestyle recommendations and therapy prompts to a user device.",
      },
    ],
    descriptionSections: [
      {
        heading: "BACKGROUND & MENTAL HEALTH CHALLENGES",
        paragraphs: [
          "Mental health disorders, particularly clinical depression and anxiety, affect hundreds of millions globally but are frequently diagnosed late due to reliance on subjective self-reporting.",
          "Biochemical indicators in human sweat (such as fluctuating cortisol and serotonin levels) provide objective real-time data, but physical biomarkers alone do not capture social context. The present invention solves this by uniting sweat hormone tracking with peer-to-peer behavioral feedback.",
        ],
      },
      {
        heading: "TANDEM BIOCHEMICAL & BEHAVIORAL ANALYSIS",
        paragraphs: [
          "The system collects sweat via micro-capillary housing (102) and quantifies hormonal concentrations using electrochemical transducers. Simultaneously, peer feedback interface (108) receives qualitative logs from close contacts regarding mood shifts or social withdrawal.",
          "Predictive engine (110) processes both data streams in tandem, recognizing subtle physiological and social patterns that precede depressive episodes, enabling early preventive intervention.",
        ],
      },
    ],
  },

  US20210270793A1: {
    id: "US20210270793A1",
    patentNo: "US20210270793A1",
    grantPublicationNo: "US11754543B2",
    title: "Handheld device to detect lead compounds and impurities in water",
    region: "US",
    status: "Granted",
    abstract:
      "A simple, sensitive method and device for detecting the LEAD presence in the water. The test involves a sample of water from a subject; followed by determining the presence of LEAD in the water sample by using a LEAD sensitive solution used in the device.",
    inventors: [
      "Mirza Faizan",
      "Rafae Qureshi",
      "Mishaal Qureshi",
      "Minal Ahmad",
      "Ayaan Nauert",
      "Ibrahim Nauert",
      "Zakaria Shaikh",
      "Fatima Shakeel",
      "Yusra Ali Khan",
      "Mirza Rizwan",
    ],
    filingDate: "Feb 25, 2021",
    publicationDate: "Sep 2, 2021",
    priorityDate: "Feb 27, 2020",
    applicationNumber: "US17/184,930",
    keywords: [
      "handheld lead detector",
      "water quality testing device",
      "lead sensitive solution",
      "heavy metal contamination",
      "colorimetric lead assay",
      "portable water purity sensor",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/d1/48/c5/34e1fee69c5a44/US20210270793A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20210270793A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/b5/bc/57/ac7614e7ef5229/US20210270793A1-20210902-D00000.png",
    images: [
      {
        title: "FIG. 1 — Handheld Water Lead Detection Unit Architecture",
        caption:
          "Exploded schematic view showing liquid sample chamber (18), chemical pod chamber (13), chemical input spout (17), seal lid (15), and keychain attachment ring (16).",
        url: "https://patentimages.storage.googleapis.com/b5/bc/57/ac7614e7ef5229/US20210270793A1-20210902-D00000.png",
      },
      {
        title:
          "FIG. 2 — Portable Chemical Pod & Colorimetric Reaction Assembly",
        caption:
          "Detail view illustrating chemical pod (14) insertion into chamber (13) for rapid colorimetric chemical reaction upon contact with contaminated lead water samples.",
        url: "https://patentimages.storage.googleapis.com/8a/46/d8/615561f7f40de1/US20210270793A1-20210902-D00001.png",
      },
    ],
    summaryHighlights: [
      "Rapid Point-of-Use Lead Detection: Provides immediate visual and chemical indication of toxic lead (Pb) ions in drinking water samples without expensive lab equipment.",
      "Integrated Reagent Pod System: Uses replaceable chemical pods (14) pre-filled with a lead-sensitive reagent solution that changes color upon reacting with heavy metal contaminants.",
      "Portable Keychain Accessory Form Factor: Features a compact, ergonomic handheld housing equipped with keychain accessory (16) for field testing by homeowners and travelers.",
      "Dual Chamber Mixing Mechanism: Combines sample liquid chamber (18) and reagent input spout (17) to ensure safe, spill-proof chemical mixing during testing.",
    ],
    referenceNumerals: [
      { num: "13", label: "Chemical Pod Reaction Chamber" },
      { num: "14", label: "Replaceable Lead-Sensitive Chemical Pod" },
      { num: "15", label: "Chamber Seal Lid" },
      { num: "16", label: "Keychain Attachment Ring" },
      { num: "17", label: "Chemical Reagent Input Spout" },
      { num: "18", label: "Water Sample Collection Chamber" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A handheld device for detecting lead compounds and impurities in water comprising: a liquid chamber for receiving a water sample; a chemical pod chamber holding a chemical pod filled with a lead-sensitive reagent solution; an input spout connecting the chemical pod chamber to the liquid chamber; and a lid for sealing the liquid chamber, wherein mixing the water sample with the lead-sensitive reagent solution induces a visible color change indicating the presence of lead in the water sample.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The handheld device of claim 1, wherein the chemical pod is a single-use replaceable capsule.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The handheld device of claim 1, further comprising a keychain accessory attached to an outer surface of the device for portable carrying.",
      },
      {
        num: 4,
        isIndependent: false,
        text: "The handheld device of claim 1, wherein the lead-sensitive solution detects lead concentration levels down to parts-per-billion (ppb) thresholds.",
      },
    ],
    descriptionSections: [
      {
        heading: "PROBLEM STATEMENT & WATER CONTAMINATION",
        paragraphs: [
          "Lead contamination in municipal and residential drinking water poses severe neurotoxic risks, especially to children and vulnerable populations. Old lead piping and industrial discharge frequently leach lead into tap water unnoticed.",
          "Traditional laboratory water testing is slow, expensive, and inaccessible in real time. The present invention provides an affordable, instant, handheld testing device that detects lead contamination on-site in seconds.",
        ],
      },
      {
        heading: "DEVICE MECHANICS & COLORIMETRIC TESTING",
        paragraphs: [
          "A water sample is poured into liquid chamber (18) and sealed with lid (15). A pre-measured chemical pod (14) is punctured through input spout (17), releasing lead-sensitive reagent into chamber (13).",
          "The reagent rapidly reacts with heavy metal ions, producing a distinct visual color shift that alerts users to dangerous lead levels prior to water consumption.",
        ],
      },
    ],
  },

  US20220388788A1: {
    id: "US20220388788A1",
    patentNo: "US20220388788A1",
    grantPublicationNo: "US11858756B2",
    title:
      "High-speed pressure based propulsion system for transporting resources",
    region: "US",
    status: "Granted",
    abstract:
      "A high-speed pressure based propulsion system for transporting resources is disclosed. The system comprising: a plurality of cars; an electronic track configured to carry said plurality of cars; an automatic guidance system configured to establish a route for said plurality of cars on said electronic track based on one or more pre-defined parameters; a plurality of electronically controlled stations configured to facilitate one or more task on said routed plurality of cars for transportation of resources. The disclosed system facilitates movement of food from one place to another by use of fast speed hyperloop technology and thereby tries to solves the issue of malnutrition in under developed nations.",
    inventors: [
      "Mirza Faizan",
      "Mirza Rizwan",
      "Summan Rahman",
      "Aiman Rahman",
      "Daanish Sheikh",
      "Roohie Sheikh",
      "Ridah Shaista Shanavas",
      "Mansoor Hasan Khan",
      "Saadia Asaf",
    ],
    filingDate: "Jun 4, 2021",
    publicationDate: "Dec 8, 2022",
    priorityDate: "Jun 4, 2021",
    applicationNumber: "US17/339,227",
    keywords: [
      "pressure based propulsion",
      "hyperloop food transport",
      "malnutrition relief logistics",
      "automatic guidance track",
      "pneumatic high speed cars",
      "electronically controlled cargo stations",
      "zero emission resource delivery",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/65/23/de/53f90eea9c2cfd/US20220388788A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20220388788A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/b7/eb/ed/dc0ea966431611/US20220388788A1-20221208-D00000.png",
    images: [
      {
        title:
          "FIG. 1 — Hyperloop Pressure-Based Propulsion System Architecture",
        caption:
          "System block diagram illustrating central computing unit (102), automatic guidance controller (104), electronic track network, autonomous cargo cars, and automated resource loading stations.",
        url: "https://patentimages.storage.googleapis.com/b7/eb/ed/dc0ea966431611/US20220388788A1-20221208-D00000.png",
      },
    ],
    summaryHighlights: [
      "Pneumatic Hyperloop Food Logistics: Utilizes low-pressure tube propulsion technology to transport food supplies and critical medical resources across vast geographical distances at ultra-high speeds.",
      "Global Malnutrition Relief Focus: Purpose-built to rapidly move surplus food resources to famine-affected and underdeveloped regions before perishable goods spoil.",
      "Autonomous AI Guidance System: Features an intelligent track routing controller that establishes dynamic travel paths based on supply priority, weather conditions, and energy efficiency.",
      "Automated Electronic Cargo Stations: Equipped with robotic loading, unloading, and climate-controlled storage pods that manage resource distribution without manual bottlenecking.",
    ],
    referenceNumerals: [
      { num: "100", label: "Pressure Propulsion System Assembly" },
      { num: "102", label: "Central Master Computer / Processing Unit" },
      { num: "104", label: "Automatic Track Guidance System Controller" },
      { num: "106", label: "Memory Storage Unit" },
      { num: "108", label: "Autonomous Pressure Propulsion Cargo Cars" },
      { num: "110", label: "Electronic Guide Track Assembly" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A high-speed pressure based propulsion system for transporting resources, the system comprising: a plurality of cars; an electronic track configured to carry said plurality of cars; an automatic guidance system configured to establish a route for said plurality of cars on said electronic track based on one or more pre-defined parameters; and a plurality of electronically controlled stations configured to facilitate one or more tasks on said routed plurality of cars for transportation of resources.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The system of claim 1, wherein the resources transported comprise food supplies, agricultural yield, and emergency medical kits.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The system of claim 1, wherein the electronic track operates within a low-pressure pneumatic tube network to reduce aerodynamic drag.",
      },
      {
        num: 4,
        isIndependent: false,
        text: "The system of claim 1, wherein the automatic guidance system dynamically reroutes cars based on real-time station congestion and regional food shortage severity.",
      },
    ],
    descriptionSections: [
      {
        heading: "BACKGROUND & GLOBAL MALNUTRITION RELIEF",
        paragraphs: [
          "Malnutrition and famine claim millions of lives annually in underdeveloped nations, largely due to inefficient, slow surface transport infrastructure that causes food supplies to rot in transit.",
          "The present invention leverages high-speed pressure-based pneumatic propulsion (hyperloop technology) to transport food and medical supplies across countries in hours rather than weeks, dramatically curbing global hunger.",
        ],
      },
      {
        heading: "SYSTEM ARCHITECTURE & AUTONOMOUS TRACK ROUTING",
        paragraphs: [
          "System (100) comprises a network of autonomous cargo cars (108) riding along electronic track (110). Master computer (102) and automatic guidance system (104) dynamically compute optimal speed and path profiles.",
          "Electronically controlled stations handle automated loading, climate-controlled container sealing, and instant dispatch along low-pressure vacuum tubes.",
        ],
      },
    ],
  },

  US20230061443A1: {
    id: "US20230061443A1",
    patentNo: "US20230061443A1",
    grantPublicationNo: "US11858319B2",
    title: "Automatic sunvisor assembly",
    region: "US",
    status: "Granted",
    abstract:
      "An automatic sunvisor assembly 100 for vehicle is disclosed. The automatic sunvisor assembly 100 comprises sunvisor(s) 101 positioned over the front seats of the vehicle, ambient light sensor 102 positioned inside the vehicle adapted to sense the intensity of sunlight; a processor to collect and compare the intensity of sunlight sensed by the ambient sensors 102 in real time; and two high-torque servo motors 103 connected to each of the sunvisors 101 to move the at least one sunvisor 101. The processor identifies the ambient light sensor 102 sensing higher intensity of sunlight, generates signals, and transmits signals to the high-torque servo motor 103, and the signals received by the high-torque servo motor 103 determines a direction of movement of the sunvisor 101.",
    inventors: [
      "Mirza Faizan",
      "Mirza Rizwan",
      "Abdullah Hasani",
      "Mustafa Hasani",
      "Mariam Mansoor",
      "Rizwan Mansoor",
      "Madhalasa Iyer",
      "Sparsh Kamdar",
      "Umar Kateeb",
      "Saadia Asaf",
      "Mansoor Hasan Khan",
    ],
    filingDate: "Aug 25, 2021",
    publicationDate: "Mar 2, 2023",
    priorityDate: "Aug 25, 2021",
    applicationNumber: "US17/411,931",
    keywords: [
      "automatic sunvisor assembly",
      "ambient light sensor",
      "high torque servo motor",
      "solar glare protection",
      "vehicle safety automation",
      "real time glare tracking",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/ac/7d/f3/40f0ef40ad6ba5/US20230061443A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20230061443A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/bd/33/b2/6205e73c29b5ad/US20230061443A1-20230302-D00000.png",
    images: [
      {
        title: "FIG. 1 — Automatic Sunvisor Assembly System Architecture",
        caption:
          "Schematic view illustrating sunvisors (101) mounted over driver and front passenger seats, ambient light sensors (102) positioned around windshield perimeter, central processor, and high-torque servo motors (103).",
        url: "https://patentimages.storage.googleapis.com/bd/33/b2/6205e73c29b5ad/US20230061443A1-20230302-D00000.png",
      },
    ],
    summaryHighlights: [
      "Automated Solar Glare Protection: Dynamically adjusts sunvisor angles to block intense direct sunlight without requiring manual driver or passenger intervention.",
      "Real-Time Multi-Sensor Array: Employs distributed ambient light sensors (102) around cabin glass to continuously evaluate directional solar intensity.",
      "Dual High-Torque Servo Actuation: Features high-precision servo motors (103) connected to each sunvisor (101) to perform smooth horizontal and vertical angle adjustments.",
      "Driver Safety Enhancement: Prevents momentary blind spots and glare accidents caused by sudden sun emergence during highway driving.",
    ],
    referenceNumerals: [
      { num: "100", label: "Automatic Sunvisor Assembly" },
      { num: "101", label: "Motorized Vehicle Sunvisors" },
      { num: "102", label: "Ambient Sunlight Intensity Sensors" },
      { num: "103", label: "High-Torque Servo Actuator Motors" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "An automatic sunvisor assembly 100 for vehicle comprising: sunvisor(s) 101 positioned over the front seats of the vehicle; ambient light sensor 102 positioned inside the vehicle adapted to sense the intensity of sunlight; a processor to collect and compare the intensity of sunlight sensed by the ambient sensors 102 in real time; and two high-torque servo motors 103 connected to each of the sunvisors 101 to move the at least one sunvisor 101, wherein the processor identifies the ambient light sensor 102 sensing higher intensity of sunlight, generates signals, and transmits signals to the high-torque servo motor 103, and the signals received by the high-torque servo motor 103 determines a direction of movement of the sunvisor 101.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The automatic sunvisor assembly of claim 1, wherein the ambient light sensors are positioned at multiple distinct angles along the windshield frame.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The automatic sunvisor assembly of claim 1, wherein the high-torque servo motors rotate the sunvisors in both horizontal and vertical axes to block localized glare.",
      },
    ],
    descriptionSections: [
      {
        heading: "PROBLEM STATEMENT & VEHICLE GLARE HAZARDS",
        paragraphs: [
          "Sudden sunlight glare through vehicle windshields causes severe temporary blindness for drivers, leading to thousands of road accidents annually. Manually adjusting sunvisors while driving distracts drivers and takes hands off the steering wheel.",
          "The present invention provides an autonomous, sensor-driven sunvisor system that detects sunlight angle and intensity in real time and automatically deploys high-torque servo motors to block glare without driver intervention.",
        ],
      },
      {
        heading: "AUTOMATED SERVO ACTUATION & SENSOR PROCESSING",
        paragraphs: [
          "Ambient light sensors (102) sample solar intensity continuously. Central processing unit compares sensor readings; when glare exceeds pre-set safety thresholds, signals are dispatched to high-torque servo motors (103).",
          "Servo motors (103) swiftly pivot sunvisors (101) into optimal shielding angles, restoring full driver visibility seamlessly.",
        ],
      },
    ],
  },

  US20230066405A1: {
    id: "US20230066405A1",
    patentNo: "US20230066405A1",
    grantPublicationNo: "US11857687B2",
    title: "An apparatus for sanitising products",
    region: "US",
    status: "Granted",
    abstract:
      "An apparatus for sanitising products comprising a housing comprising a bottom portion, interior walls an external portion and doors a pair of support beams, a plurality of internal conveyor belts, at least one UV-C light connected inside the housing, a first opening adapted to allow products to enter the housing for sanitisation and a second opening adapted to allow products to exit the housing after sanitisation.",
    inventors: [
      "Mirza Faizan",
      "Mirza Rizwan",
      "Kayla Goodrich",
      "Manish Rangan",
      "Muhammad Sayed",
      "Benjamin Stafford",
      "Zaina Iqbal",
      "Shayan Iqbal",
      "Kenny Joel DeCay, Jr.",
      "Omar Eido",
      "Saadia Asaf",
      "Mansoor Hasan Khan",
    ],
    filingDate: "Aug 28, 2021",
    publicationDate: "Mar 2, 2023",
    priorityDate: "Aug 28, 2021",
    applicationNumber: "US17/460,187",
    keywords: [
      "product sanitising apparatus",
      "UV-C radiation disinfection",
      "internal conveyor belt system",
      "automated entry exit doors",
      "surface pathogen sterilizer",
      "commercial parcel sanitization",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/11/e8/fd/a000f948366cf9/US20230066405A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20230066405A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/b7/4b/24/3f02f6133f56ac/US20230066405A1-20230302-D00000.png",
    images: [
      {
        title: "FIG. 1 — Product Sanitising Chamber Front & Housing Assembly",
        caption:
          "Perspective view of the product sanitization apparatus housing showing main chassis, front entry door, internal support beams, and UV-C lamp placement.",
        url: "https://patentimages.storage.googleapis.com/b7/4b/24/3f02f6133f56ac/US20230066405A1-20230302-D00000.png",
      },
      {
        title: "FIG. 2 — Internal Conveyor Belt & UV-C Sterilization Tunnel",
        caption:
          "Internal cross-section depicting motorized conveyor belts transporting packages through 360-degree germicidal UV-C light irradiation zone.",
        url: "https://patentimages.storage.googleapis.com/2d/a8/35/27075e9b6f4912/US20230066405A1-20230302-D00001.png",
      },
      {
        title: "FIG. 3 — Automated Entry/Exit Door & Sensor Mechanism",
        caption:
          "Detailed view of automatic entry opening (first door) and exit opening (second door) equipped with motion sensors to isolate UV-C radiation inside the housing.",
        url: "https://patentimages.storage.googleapis.com/c0/f2/91/1d129dd8ad9bf7/US20230066405A1-20230302-D00002.png",
      },
      {
        title: "FIG. 4 — Structural Support Beams & Internal Reflective Lining",
        caption:
          "Exploded view illustrating internal reflective stainless-steel wall lining and support beam framework for maximum UV-C irradiance distribution across all parcel surfaces.",
        url: "https://patentimages.storage.googleapis.com/9b/5f/8b/a22e3fc94722f3/US20230066405A1-20230302-D00003.png",
      },
    ],
    summaryHighlights: [
      "Continuous UV-C Surface Disinfection: Bathes commercial packages, groceries, and retail goods in high-intensity germicidal UV-C light to neutralize viruses and bacteria within seconds.",
      "Dual Automated Conveyor System: Transports items seamlessly from input entry opening to output exit opening via motorized internal conveyor belts.",
      "Radiation Shielding Entry/Exit Doors: Features automated door closures that prevent UV-C light leakage into the surrounding environment during operation.",
      "360-Degree Reflective Chamber: Internal reflective walls ensure uniform UV-C exposure across all sides, top, and bottom of passing items.",
    ],
    referenceNumerals: [
      { num: "100", label: "Product Sanitisation Apparatus Assembly" },
      { num: "101", label: "External Protective Housing Chassis" },
      { num: "102", label: "Motorized Internal Conveyor Belts" },
      { num: "103", label: "High-Output UV-C Germicidal Lamps" },
      { num: "104", label: "First Entry Product Opening & Automated Door" },
      { num: "105", label: "Second Exit Product Opening & Automated Door" },
      { num: "106", label: "Internal Structural Support Beams" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "An apparatus for sanitising products comprising: a housing comprising a bottom portion, interior walls, an external portion, and doors; a pair of support beams; a plurality of internal conveyor belts; at least one UV-C light connected inside the housing; a first opening adapted to allow products to enter the housing for sanitisation; and a second opening adapted to allow products to exit the housing after sanitisation.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The apparatus of claim 1, wherein the interior walls are lined with UV-C reflective material to maximize radiation coverage.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The apparatus of claim 1, wherein the first opening and second opening feature automated doors configured to close during sanitisation to prevent UV-C leakage.",
      },
      {
        num: 4,
        isIndependent: false,
        text: "The apparatus of claim 1, wherein the conveyor belts operate at variable speeds to adjust UV-C exposure duration based on product type.",
      },
    ],
    descriptionSections: [
      {
        heading: "PROBLEM STATEMENT & PATHOGEN TRANSMISSION",
        paragraphs: [
          "Surface contamination on commercially delivered packages, luggage, and retail merchandise serves as a major vector for viral and bacterial pathogens. Manual chemical wiping is slow, inconsistent, and often damages packaging.",
          "The present invention provides an automated, chemical-free sanitization tunnel that rapidly sterilizes all exterior surfaces of moving products using high-intensity UV-C radiation.",
        ],
      },
      {
        heading: "TUNNEL ARCHITECTURE & CONVEYOR AUTOMATION",
        paragraphs: [
          "Items enter through automated first opening (104) onto motorized conveyor belts (102). As items move through housing (101), high-output UV-C lamps (103) and reflective interior walls deliver 360-degree germicidal exposure.",
          "Once sanitized, items pass through automated second opening (105) for safe retrieval, ensuring zero operator exposure to hazardous radiation.",
        ],
      },
    ],
  },

  US20220099408A1: {
    id: "US20220099408A1",
    patentNo: "US20220099408A1",
    grantPublicationNo: "US11959725B2",
    title: "Deep sea pressure based projectile launching system",
    region: "US",
    status: "Granted",
    abstract:
      "A projectile launching apparatus for launching projectile with the pressure exerted by the seawater. The projectile launching apparatus includes a large barrel launch, a piston, one or more piston stoppers, plurality of hinged doors, piston locks, and a plurality of water pump is available at bottom of the barrel to generate pressure and help to launch the projectile, wherein the assembly for the projectile is less expensive than present systems, lighter in weight, and of less complexity.",
    inventors: [
      "Mirza Faizan",
      "Aroush Fatima",
      "Arifa Fatima",
      "Ashaz Haque",
      "Zayd Khan",
      "Omar Farooq Khan",
      "Wafiqah Zubair",
      "Rida Siddiqui",
      "Abdullah Nouiouat",
      "Abdurraheem Sheikh",
      "Hamza Ahmed",
      "Mirza Rizwan",
    ],
    filingDate: "Feb 25, 2021",
    publicationDate: "Mar 31, 2022",
    priorityDate: "Feb 27, 2020",
    applicationNumber: "US17/184,956",
    keywords: [
      "deep sea projectile launcher",
      "hydrostatic pressure propulsion",
      "underwater barrel launch",
      "seawater pressure piston",
      "hinged launch doors",
      "marine defense system",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/f9/6b/d5/efb7a9c71ee046/US20220099408A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20220099408A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/ef/8e/95/0b7b7b2f4dd51b/US20220099408A1-20220331-D00000.png",
    images: [
      {
        title: "FIG. 1 — Subsurface Hydrostatic Pressure Launch System",
        caption:
          "Schematic elevation view showing launch barrel (10), drive piston (11), projectile capsule (12), piston stoppers (13), hinged doors (14), piston locks (15), and water pump inlet (16).",
        url: "https://patentimages.storage.googleapis.com/ef/8e/95/0b7b7b2f4dd51b/US20220099408A1-20220331-D00000.png",
      },
      {
        title: "FIG. 2 — Piston Lock & High-Pressure Water Pump Assembly",
        caption:
          "Detailed mechanical cross-section illustrating high-pressure seawater inlet pumps (16), piston locking mechanism (15), and explosive-free hydrostatic release chamber.",
        url: "https://patentimages.storage.googleapis.com/06/b0/29/f166905b91a65d/US20220099408A1-20220331-D00001.png",
      },
    ],
    summaryHighlights: [
      "Hydrostatic Seawater Propulsion: Harnesses deep-sea ambient water pressure to propel subsea projectiles and research capsules without reliant chemical propellants.",
      "Explosive-Free Mechanical Piston Drive: Drives internal piston (11) using controlled differential ocean pressure, significantly reducing acoustic footprint and thermal signatures.",
      "Hinged Barrel Doors & Pressure Locks: Features fast-acting hinged doors (14) and piston locks (15) that maintain watertight seals until peak launch pressure is triggered.",
      "Low-Cost Lightweight Subsea Architecture: Simple, corrosion-resistant launcher barrel (10) assembly providing a cost-effective alternative to conventional submarine torpedo tubes.",
    ],
    referenceNumerals: [
      { num: "10", label: "Launcher Barrel Tube" },
      { num: "11", label: "Hydrostatic Drive Piston" },
      { num: "12", label: "Underwater Projectile Payload" },
      { num: "13", label: "Piston Motion Stoppers" },
      { num: "14", label: "Hinged Barrel Exit Doors" },
      { num: "15", label: "Mechanical Piston Release Locks" },
      { num: "16", label: "High-Pressure Seawater Pump Inlet" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A projectile launching apparatus for launching projectile with pressure exerted by seawater comprising: a launch barrel; a piston disposed slidably within the launch barrel; one or more piston stoppers; a plurality of hinged doors at an exit of the launch barrel; piston locks; and a plurality of water pumps arranged at a bottom of the launch barrel to generate pressure and propel the projectile.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The projectile launching apparatus of claim 1, wherein the ambient hydrostatic pressure of deep ocean water acts upon the piston when the piston locks disengage.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The projectile launching apparatus of claim 1, wherein the hinged doors open automatically under internal fluid pressure as the projectile exits the launch barrel.",
      },
    ],
    descriptionSections: [
      {
        heading: "BACKGROUND & UNDERWATER PROPULSION PROBLEMS",
        paragraphs: [
          "Conventional submarine and deep-sea projectile launchers rely heavily on chemical propellants or heavy high-pressure air tanks. These systems add immense weight, complexity, thermal signature, and risk of accidental explosion.",
          "The present invention utilizes the immense ambient hydrostatic pressure naturally present at deep ocean depths, providing a lightweight, low-cost, silent launching system powered by seawater.",
        ],
      },
      {
        heading: "LAUNCH DYNAMICS & HYDROSTATIC PISTON DRIVE",
        paragraphs: [
          "Launch barrel (10) houses drive piston (11) and projectile (12). High-pressure seawater pumps (16) assist in building pressure differential. When piston locks (15) disengage, ocean water pressure forces piston (11) upward at high velocity.",
          "Hinged doors (14) swing open cleanly as projectile (12) clears the barrel, after which piston stoppers (13) arrest piston movement safely inside the launcher.",
        ],
      },
    ],
  },

  US20220389694A1: {
    id: "US20220389694A1",
    patentNo: "US20220389694A1",
    grantPublicationNo: "US11933029B2",
    title: "Smart shower head",
    region: "US",
    status: "Granted",
    abstract:
      "A smart shower head to regulate temperature of water being supplied is disclosed. The smart shower head comprises a showering section (101) for showering water, a shower head arm connecting the showering section (101) and supplying water to the showering section (101), and at least one compartmentalized nero-thermal coil 103 running through the length of the shower head arm (102) and the showering section (101).",
    inventors: [
      "Mirza Faizan",
      "Ameer Syedibrahim",
      "Amjad Syedibrahim",
      "Syed Shah Ekramullah Alvi",
      "Binu Varghese",
      "Vineet ANSHUMAN",
      "Mirza Rizwan",
      "Sidra Ambreen",
      "Hiba Khan",
      "Zainab Khan",
      "Mansoor Hasan Khan",
      "Saadia Asaf",
    ],
    filingDate: "Jun 3, 2021",
    publicationDate: "Dec 8, 2022",
    priorityDate: "Jun 3, 2021",
    applicationNumber: "US17/338,252",
    keywords: [
      "smart shower head",
      "water temperature regulation",
      "nero thermal heating coil",
      "shower arm water channel",
      "instantaneous water heating",
      "energy efficient bathroom fixture",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/c0/b9/ba/1f73691218701a/US20220389694A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20220389694A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/10/81/e8/9343dcc79a1aa6/US20220389694A1-20221208-D00000.png",
    images: [
      {
        title: "FIG. 1 — Smart Shower Head Architecture & Thermal Coil Route",
        caption:
          "Schematic view showing showering section (101), shower head arm (102), compartmentalized nero-thermal coils (103), water spray nozzles (104), and electronic temperature controller.",
        url: "https://patentimages.storage.googleapis.com/10/81/e8/9343dcc79a1aa6/US20220389694A1-20221208-D00000.png",
      },
      {
        title: "FIG. 2 — Compartmentalized Nero-Thermal Coil Cross-Section",
        caption:
          "Detailed internal view of shower arm (102) cutaway displaying parallel micro-channels and embedded thermal heating coils (103) for rapid heat exchange with flowing water.",
        url: "https://patentimages.storage.googleapis.com/1f/f2/0c/800e52c90afdea/US20220389694A1-20221208-D00000.png",
      },
    ],
    summaryHighlights: [
      "Instantaneous Thermal Water Regulation: Uses compartmentalized nero-thermal coils (103) along the shower head arm (102) to adjust water temperature instantly without wasting water while waiting for hot water to arrive.",
      "Compartmentalized Heating Channels: Directs incoming water through insulated thermal conduits inside showering section (101), preventing outer housing overheating.",
      "Eco-Friendly Energy Efficiency: Eliminates pre-shower water waste by bringing water to desired user temperature right at the spray nozzle (104).",
      "Precision Electronic Control: Integrates digital thermistors and feedback controls to maintain precise water temperature during dynamic pressure fluctuations.",
    ],
    referenceNumerals: [
      { num: "100", label: "Smart Shower Head System Assembly" },
      { num: "101", label: "Showering Head Section" },
      { num: "102", label: "Shower Head Extension Arm" },
      { num: "103", label: "Compartmentalized Nero-Thermal Heating Coils" },
      { num: "104", label: "Precision Water Spray Nozzles" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A smart shower head to regulate temperature of water being supplied comprising: a showering section (101) for showering water; a shower head arm (102) connecting the showering section (101) and supplying water to the showering section (101); and at least one compartmentalized nero-thermal coil (103) running through the length of the shower head arm (102) and the showering section (101).",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The smart shower head of claim 1, further comprising a temperature sensor positioned at the showering section (101) to provide real-time thermal feedback.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The smart shower head of claim 1, wherein the compartmentalized nero-thermal coil (103) dynamically modulates electrical power based on desired user target temperature.",
      },
    ],
    descriptionSections: [
      {
        heading: "PROBLEM STATEMENT & WATER WASTE IN BATHROOMS",
        paragraphs: [
          "Traditional shower systems waste tens of gallons of fresh water per shower while users wait for cold water sitting in long pipes to clear out and warm up. Central water heaters also lose significant thermal energy in plumbing lines.",
          "The present invention provides a point-of-use smart shower head equipped with internal nero-thermal coils running along the arm and head section, instantly bringing water to the desired temperature at the nozzle.",
        ],
      },
      {
        heading: "THERMAL COIL MECHANICS & ELECTRONIC CONTROL",
        paragraphs: [
          "Water flows into shower head arm (102) and contacts compartmentalized nero-thermal coils (103). Micro-controller adjusts current through coils (103) instantly based on flow rate and user temperature settings.",
          "Warmed water passes through showering section (101) and exits via nozzles (104), ensuring immediate comfortable water temperature with zero wasted runoff.",
        ],
      },
    ],
  },

  US20230060737A1: {
    id: "US20230060737A1",
    patentNo: "US20230060737A1",
    grantPublicationNo: "US11964508B2",
    title: "System for refilling of used markers",
    region: "US",
    status: "Granted",
    abstract:
      "The invention provides a system for refilling of used markers. The system comprises at least one round plate (1) mounted on a supporting platform, at least one ink reservoir (2) adapted to store ink and positioned at the center of the round plate (1) and one entry hole (3) on the ink reservoir (2) adapted to hold a nib of a marker (6). The round plate (1) of the system is mounted on a motor adapted to rotate the round plate (1) at high speed in a circular motion to dispense ink from the ink reservoir (2) by centrifugal force via the entry hole (3) to refill the marker (6) through the nib.",
    inventors: [
      "Mirza Faizan",
      "Mirza Rizwan",
      "Maheen Rafique",
      "Abdul Basit Piracha",
      "Naveed Rauf",
      "Ali Akbar Kayani",
      "Meher Saanvi Singh",
      "Jiya Saanvi Singh",
      "Maya Ajlouni",
      "Abdullah Mohiuddin",
      "Hassan Saadi",
      "Hiba Sheikh",
      "Gibran Saleem",
      "Saadia Asaf",
      "Mansoor Hasan Khan",
    ],
    filingDate: "Aug 31, 2021",
    publicationDate: "Mar 2, 2023",
    priorityDate: "Aug 31, 2021",
    applicationNumber: "US17/462,486",
    keywords: [
      "used marker refilling system",
      "centrifugal force ink dispenser",
      "rotating turntable platform",
      "central ink reservoir",
      "whiteboard marker recycling",
      "nib capillary ink injection",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/fd/3f/68/3e27681b42a6e2/US20230060737A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20230060737A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/db/2e/2e/ac3dbd89400ea6/US20230060737A1-20230302-D00000.png",
    images: [
      {
        title: "FIG. 1 — Centrifugal Marker Refilling Turntable Assembly",
        caption:
          "Top plan view of rotating round plate (1), central ink reservoir (2), marker nib entry holes (3), radial marker holding slots, and electric drive motor.",
        url: "https://patentimages.storage.googleapis.com/db/2e/2e/ac3dbd89400ea6/US20230060737A1-20230302-D00000.png",
      },
      {
        title: "FIG. 2 — Marker Nib Insertion & Ink Reservoir Cross-Section",
        caption:
          "Side cross-sectional view showing dry marker (6) inserted nib-first into entry hole (3) of central ink reservoir (2) on motor-driven platform.",
        url: "https://patentimages.storage.googleapis.com/9f/24/cb/0d95ebc1d0442c/US20230060737A1-20230302-D00001.png",
      },
      {
        title: "FIG. 3 — Centrifugal Force Ink Injection Dynamics",
        caption:
          "Diagram demonstrating outwards centrifugal force vector driving liquid ink from central reservoir (2) through nib micro-pores into the marker core reservoir.",
        url: "https://patentimages.storage.googleapis.com/2b/f8/d8/2091122af357c7/US20230060737A1-20230302-D00002.png",
      },
    ],
    summaryHighlights: [
      "Centrifugal Ink Transfer System: Rotates round plate (1) at high rotational speed to use centrifugal force for forcing liquid ink into dried felt marker cores.",
      "Nib-First Direct Ingress: Dry markers (6) insert nib-first into entry holes (3) connected to central ink reservoir (2), eliminating messy manual ink syringes.",
      "Multi-Marker Simultaneous Refilling: Radial alignment slots allow simultaneous recharging of multiple dry whiteboard or permanent markers in under 30 seconds.",
      "Stationery Waste Reduction: Significantly extends marker lifespan in schools, universities, and corporate offices, drastically cutting plastic stationery waste.",
    ],
    referenceNumerals: [
      { num: "1", label: "Motorized Rotating Round Plate / Turntable" },
      { num: "2", label: "Central Ink Reservoir" },
      { num: "3", label: "Marker Nib Entry Hole" },
      { num: "6", label: "Used Dry Marker Body & Nib" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A system for refilling of used markers comprising: at least one round plate (1) mounted on a supporting platform; at least one ink reservoir (2) adapted to store ink and positioned at the center of the round plate (1); and one entry hole (3) on the ink reservoir (2) adapted to hold a nib of a marker (6), wherein the round plate (1) is mounted on a motor adapted to rotate the round plate (1) at high speed in a circular motion to dispense ink from the ink reservoir (2) by centrifugal force via the entry hole (3) to refill the marker (6) through the nib.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The system of claim 1, wherein the ink reservoir (2) comprises a plurality of entry holes radially spaced around its perimeter.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The system of claim 1, wherein the motor speed is variable to adjust centrifugal ink dispensing rate based on marker absorbency.",
      },
    ],
    descriptionSections: [
      {
        heading: "PROBLEM STATEMENT & PLASTIC STATIONERY WASTE",
        paragraphs: [
          "Whiteboard and permanent markers are discarded by the billions annually as soon as their internal ink reservoir dries out, generating massive plastic waste. Manual refilling with liquid ink bottles is messy, slow, and prone to spilling.",
          "The present invention introduces an automated centrifugal refilling machine that uses rotational physics to instantly inject ink directly through marker nibs cleanly and evenly.",
        ],
      },
      {
        heading: "CENTRIFUGAL FORCE MECHANICS & REFILL OPERATION",
        paragraphs: [
          "Marker (6) is placed nib-first into entry hole (3) of central reservoir (2) on round plate (1). High-speed rotation of plate (1) creates strong centrifugal acceleration, driving ink outwards into the absorbent core of marker (6).",
          "This capillary and centrifugal saturation recharges the marker to 100% capacity within seconds, completely restoring writing quality.",
        ],
      },
    ],
  },

  US20220388736A1: {
    id: "US20220388736A1",
    patentNo: "US20220388736A1",
    grantPublicationNo: "US11891221B2",
    title: "Bio-Degradable Container",
    region: "US",
    status: "Granted",
    abstract:
      "Biodegradable bottle cap is a water bottle cap containing the plastic eating fungus pestalotiopsismicrosporia. When the consumer is done drinking from the bottle, the cap has a tab that is pulled and this tab releases the fungus. The fungus consumes the plastic bottle and the cap so no trace is left behind. The cap is made of plastic and the fungus is contained in an aluminum casing. Also contain in the casing is the safe food dye which will be coloring the water in case of accidental release or opening of the casing before the use of the drinking water. Such water coloring will be an indication to avoid using the water for drinking though the fungus is safe after human galloping.",
    inventors: [
      "Mirza Faizan",
      "Mirza Rizwan",
      "Hana Ahmad",
      "Humza Ahmad",
      "Mohsen Ahmad",
      "Rabiya Sayeed",
      "Sofia Ali",
      "Zain Ali",
      "Sarah Nawab",
      "Danyal Nawab",
    ],
    filingDate: "Jun 4, 2021",
    publicationDate: "Dec 8, 2022",
    priorityDate: "Jun 4, 2021",
    applicationNumber: "US17/339,463",
    keywords: [
      "biodegradable bottle cap",
      "plastic eating fungus",
      "pestalotiopsis microspora",
      "aluminum fungi casing",
      "pullable tab release",
      "food dye safety indicator",
      "zero plastic waste bottle",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/a9/db/45/188b7b71e46de5/US20220388736A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20220388736A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/9f/29/de/8dad49c26ab636/US20220388736A1-20221208-D00000.png",
    images: [
      {
        title: "FIG. 1 — Biodegradable Cap Assembly & Fungi Casing",
        caption:
          "Exploded view illustrating bottle cap lid (100), upper cover (101), aluminum fungi casing (first segment 103, second segment 104), and lower cover (106).",
        url: "https://patentimages.storage.googleapis.com/9f/29/de/8dad49c26ab636/US20220388736A1-20221208-D00000.png",
      },
      {
        title: "FIG. 2 — Pullable Release Tab & Dye Safety Mechanism",
        caption:
          "Cross-section showing pullable tab release mechanism and food dye indicator compartment for safe consumer operation upon bottle disposal.",
        url: "https://patentimages.storage.googleapis.com/92/1b/07/470f5859342d00/US20220388736A1-20221208-D00001.png",
      },
    ],
    summaryHighlights: [
      "Plastic-Eating Fungus Release: Encapsulates Pestalotiopsis microspora spores inside a sealed aluminum casing within the bottle cap structure.",
      "Post-Consumer Pull-Tab Trigger: Consumers pull an outer tab after drinking, piercing the internal casing to release fungal spores directly onto the plastic bottle for rapid degradation.",
      "Visual Safety Indicator Dye: Contains a safe food dye inside the casing that turns water bright blue/red if prematurely punctured, signaling users to refrain from drinking.",
      "Zero Plastic Trace Behind: Fungal spores digest the polyurethane and PET polymers of both bottle cap and body, leaving zero toxic microplastics behind.",
    ],
    referenceNumerals: [
      { num: "100", label: "Biodegradable Cap Lid Assembly" },
      { num: "101", label: "Upper Protective Cover" },
      { num: "103", label: "Fungi Casing First Segment" },
      { num: "104", label: "Fungi Casing Second Segment" },
      { num: "106", label: "Lower Threaded Seal Cover" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A biodegradable bottle cap comprising: a lid (100); an upper cover (101); a casing holding plastic-eating fungus Pestalotiopsis microspora; a pullable tab configured to open the casing to release the fungus onto a plastic bottle; and a lower cover (106) connecting the cap to the plastic bottle.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The biodegradable bottle cap of claim 1, wherein the casing further comprises a non-toxic food dye that colors liquid inside the bottle if the casing is ruptured prematurely.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The biodegradable bottle cap of claim 1, wherein the plastic-eating fungus digests both the plastic bottle and the bottle cap completely.",
      },
    ],
    descriptionSections: [
      {
        heading: "PROBLEM STATEMENT & PLASTIC POLLUTION",
        paragraphs: [
          "Single-use plastic water bottles take hundreds of years to decompose in landfills and oceans, leaching toxic microplastics into ecosystems globally.",
          "The present invention provides a revolutionary self-destructing bottle cap containing plastic-eating fungus spores (*Pestalotiopsis microspora*) that completely digest the plastic bottle post-use.",
        ],
      },
      {
        heading: "FUNGI RELEASE & SAFETY DYE MECHANICS",
        paragraphs: [
          "Fungi spores are safely isolated inside aluminum casing segments (103, 104). When the user finishes drinking, pulling the tab releases the spores onto the container.",
          "If the casing is accidentally damaged while full, food dye immediately colors the liquid, visually warning the consumer not to drink.",
        ],
      },
    ],
  },

  US20240087440A1: {
    id: "US20240087440A1",
    patentNo: "US20240087440A1",
    grantPublicationNo: "US12020553B2",
    title:
      "Iot based management system and a method for assisting users around a swimming pool",
    region: "US",
    status: "Granted",
    abstract:
      "The present disclosure envisages an IOT based management system for assisting users around a swimming pool. The system comprises a plurality of sensors configured to sense a plurality of parameters corresponding to various pre-defined events associated with said swimming pool; a control unit communicatively coupled to said plurality of sensors through a communication network to receive said plurality of parameters and configured to process said plurality of parameters based on at least one machine learning algorithm to generate actionable intelligence in the form of signals associated with said pre-defined events corresponding to said plurality of parameters; and at least one IOT based actuating mechanism configured to receive said signals and perform at least one action upon reception of said signals.",
    inventors: [
      "Mirza Faizan",
      "Mohammed Abdussamad Zaki",
      "Safiyah Fatima",
      "Afreen Fatima",
      "Afrin Shaikh",
      "Kemery Oparah",
      "Maazin Saif",
      "Mirza Rizwan",
      "Amreen Syed",
      "Hadiya Sameen",
      "Aayan Chowdhury",
      "Abdul Basit Piracha",
      "Mishaal Qureshi",
      "Abdullah Hasani",
      "Zaynab Khan",
      "Mariam Mir",
      "Muhummed Mir",
    ],
    filingDate: "Sep 8, 2022",
    publicationDate: "Mar 14, 2024",
    priorityDate: "Sep 8, 2022",
    applicationNumber: "US17/940,060",
    keywords: [
      "swimming pool safety",
      "IoT management system",
      "drowning prevention",
      "machine learning data fusion",
      "elevating pool floor",
      "rack and pinion mechanism",
      "underwater movement sensors",
      "automated ring buoy delivery",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/00/91/cf/dfbba20e9c4af0/US20240087440A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20240087440A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/59/37/5d/31f0c2df2845e1/US20240087440A1-20240314-D00000.png",
    images: [
      {
        title: "FIG. 1 — IoT Network & Pool Safety System Architecture",
        caption:
          "Exemplary network environment illustrating distributed pool sensors (102), control unit (104), communication network (106), and IoT actuating mechanism (108).",
        url: "https://patentimages.storage.googleapis.com/99/f2/12/a2936958cb1bdf/US20240087440A1-20240314-D00001.png",
      },
      {
        title: "FIG. 2 — Functional Block Diagram of Control Unit",
        caption:
          "Block diagram showing I/O interface (112), processor (110), memory (114), receiving module (202), ML analysis module (204), flagging module (206), and alarm generating module (208).",
        url: "https://patentimages.storage.googleapis.com/aa/3d/e5/ccfaf91cb83139/US20240087440A1-20240314-D00002.png",
      },
      {
        title: "FIG. 3 — Swimming Pool Safety Management Method Flowchart",
        caption:
          "Flow diagram depicting parameter sensing (302), machine learning data processing (304), event flagging (306), and automated rescue actuation.",
        url: "https://patentimages.storage.googleapis.com/59/37/5d/31f0c2df2845e1/US20240087440A1-20240314-D00000.png",
      },
    ],
    summaryHighlights: [
      "Multi-Sensor Aquatic Monitoring: Continuously measures water level relative to pool floor, user submersion duration, swimmer height/position, and water temperature.",
      "Machine Learning Event Classification: Uses ML data fusion to process sensor inputs and distinguish normal diving/swimming from critical drowning hazards.",
      "Automated Physical Rescue Actuation: Features a movable fiberglass mesh pool floor driven by a rack and pinion mechanism to raise struggling swimmers out of the water.",
      "Emergency Payload & Dispatch: Automatically deploys ring buoys and oxygen masks while transmitting real-time distress alerts to local police and emergency medical teams.",
    ],
    referenceNumerals: [
      { num: "100", label: "IoT Pool Safety Management System" },
      { num: "102", label: "Plurality of Pool Sensors" },
      { num: "104", label: "Central Control Unit" },
      { num: "106", label: "Communication Network (Wired/Wireless)" },
      { num: "108", label: "IoT-Based Actuating Mechanism" },
      { num: "110", label: "Processor" },
      { num: "112", label: "I/O Interface" },
      { num: "114", label: "Memory" },
      { num: "202", label: "Sensor Data Receiving Module" },
      { num: "204", label: "Machine Learning Analysis Module" },
      { num: "206", label: "Emergency Event Flagging Module" },
      { num: "208", label: "Alarm & Dispatch Generating Module" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "An IoT based management system for assisting users around a swimming pool, the system comprising: a plurality of sensors configured to sense a plurality of parameters corresponding to various pre-defined events associated with said swimming pool; a control unit communicatively coupled to said plurality of sensors through a communication network to receive said plurality of parameters and configured to process said plurality of parameters based on at least one machine learning algorithm to generate actionable intelligence in the form of signals associated with said pre-defined events corresponding to said plurality of parameters; and at least one IoT based actuating mechanism configured to receive said signals and perform at least one action upon reception of said signals.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The management system as claimed in claim 1, wherein said plurality of parameters includes water level relative to the base of the swimming pool, presence of user below water level, swimmer position and height relative to the swimming pool, submerged time duration, and water temperature.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The management system as claimed in claim 1, wherein said at least one IoT based actuating mechanism comprises a rack and pinion lifting mechanism configured to raise a fiberglass mesh base of the swimming pool to elevate a user out of the water.",
      },
      {
        num: 4,
        isIndependent: false,
        text: "The management system as claimed in claim 1, wherein said actuating mechanism is further configured to deliver a ring buoy or an oxygen mask to a user experiencing breathing distress and transmit distress messages to emergency services.",
      },
    ],
    descriptionSections: [
      {
        heading: "FIELD & BACKGROUND OF THE INVENTION",
        paragraphs: [
          "Safety around swimming pools is a critical concern, particularly for children, novice swimmers, and individuals facing unexpected medical emergencies in water. Conventional safety measures like perimeter ropes or manual lifeguard watching cannot guarantee instant intervention during silent drowning incidents.",
          "The present disclosure envisages an IoT-based intelligent pool management system that combines multi-sensor tracking, machine learning algorithms, and active physical intervention mechanisms to safeguard swimmers.",
        ],
      },
      {
        heading: "MACHINE LEARNING ANALYSIS & EVENT FLAGGING",
        paragraphs: [
          "Sensors (102) continuously stream water depth, swimmer height, underwater duration, and movement patterns to the Control Unit (104) via communication network (106).",
          "Analysis module (204) processes sensor signals with machine learning model to evaluate drowning risk. Flagging module (206) compares submergence time against safety thresholds, triggering alarm module (208) if an anomaly is detected.",
        ],
      },
      {
        heading: "ACTIVE RESCUE & RACK AND PINION LIFTING MECHANISM",
        paragraphs: [
          "Upon flagging a drowning or distress event, IoT actuating mechanism (108) triggers immediate physical rescue operations. A rack and pinion lifting assembly rapidly raises a submerged fiberglass mesh floor, lifting the struggling swimmer to the pool surface.",
          "Simultaneously, ring buoys and oxygen masks are dispatched to the user's location, while automated emergency distress calls are placed to local medical and security teams.",
        ],
      },
    ],
  },
  US20230324680A1: {
    id: "US20230324680A1",
    patentNo: "US20230324680A1",
    grantPublicationNo: "US12032156B2",
    title:
      "Apparatus to enable differently abled users to communicate and a method thereof",
    region: "US",
    status: "Granted",
    abstract:
      "An apparatus and method for communication to enable differently abled users to communicate their requirements to others. The apparatus comprises an eye wearable device adapted to emit an infrared light signal from a certain area of at least one eye of the user (such as infrared LEDs embedded in contact lenses powered via electromagnetic induction coils). A monitoring device connected via a communication network receives the transmitted infrared light signal, determines the user's point of gaze (using infrared sensors or Lidar depth differential between iris and sclera), identifies the user's requirement from an icon matrix or predictive text algorithm, and generates corresponding speech or text output.",
    inventors: [
      "Mirza Faizan",
      "Yashas Vamsi Pradeep",
      "Zayn Sohel Sachak",
      "Gautam Rao",
      "Hamza Ali Zakir",
      "Sanjiv Sridharan",
      "Sheza Asif",
      "Mishaal Qureshi",
      "Iliyan Ali Mithani",
      "Vihan Yerubandi",
      "Nihal Yerubandi",
      "Abdullah Ali Syed",
      "Avaneesh Jakkireddy",
      "Raj Kusumakar",
      "Abdullah Hasani",
    ],
    filingDate: "Apr 8, 2022",
    publicationDate: "Oct 12, 2023",
    priorityDate: "Apr 8, 2022",
    applicationNumber: "US17/716,637",
    keywords: [
      "assistive communication",
      "eye wearable device",
      "infrared LED emission",
      "inductive wireless power",
      "point of gaze tracking",
      "LIDAR eye tracking",
      "differently abled communication",
      "predictive text matrix",
      "synthetic audio speech output",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/be/63/dc/20eb533699b37c/US20230324680A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20230324680A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/fb/94/09/6fdcc6d38367a7/US20230324680A1-20231012-D00000.png",
    images: [
      {
        title: "FIG. 1 — System Architecture Overview",
        caption:
          "Schematic diagram of the assistive communication system (100) comprising eye wearable device (102), wireless communication network (106), and monitoring device with optical matrix display screen (104).",
        url: "https://patentimages.storage.googleapis.com/fb/94/09/6fdcc6d38367a7/US20230324680A1-20231012-D00000.png",
      },
      {
        title: "FIG. 2 — Monitoring Device Unit & Processing Architecture",
        caption:
          "Functional block diagram of monitoring device (104) showing receiving module (202), point of gaze determination module (204), user requirement identification module (206), audio output module (208), processor (110), memory (108), and I/O interface (112).",
        url: "https://patentimages.storage.googleapis.com/1f/c2/24/e2a6af02355962/US20230324680A1-20231012-D00001.png",
      },
      {
        title: "FIG. 3 — Communication Execution Method Flowchart",
        caption:
          "Operational flowchart illustrating method steps (302–310) for IR signal transmission, point of gaze calculation, icon cell matching, requirement identification, and synthesized audio speech output.",
        url: "https://patentimages.storage.googleapis.com/ab/cf/9a/89e6d7cd6d02c6/US20230324680A1-20231012-D00002.png",
      },
    ],
    summaryHighlights: [
      "Wireless Inductive Eye Wearable: Integrates micro-infrared LEDs within contact lenses powered via wireless electromagnetic induction from custom eyeglasses.",
      "Lidar & Infrared Gaze Tracking: Determines exact point of gaze under all ambient lighting conditions by measuring depth differentials between iris and sclera.",
      "Interactive Matrix Icon Selection: Maps user gaze onto a customizable icon and cell matrix to instantly translate user intentions into clear actions.",
      "AI Predictive Speech Generation: Integrates machine learning predictive text algorithms to assemble phrases and synthesize crystal-clear audio output for speech-impaired individuals.",
    ],
    referenceNumerals: [
      { num: "100", label: "Communication Apparatus" },
      { num: "102", label: "Eye Wearable Device (Infrared Lenses / Glasses)" },
      { num: "104", label: "Monitoring Device Unit" },
      { num: "106", label: "Wireless Communication Network" },
      { num: "202", label: "Infrared Signal Receiving Module" },
      { num: "204", label: "Point of Gaze Determination Module" },
      { num: "206", label: "User Requirement Identification Module" },
      { num: "208", label: "Audio Output Module & Speech Synthesizer" },
      { num: "300", label: "Communication Execution Method" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "An apparatus for communication to enable users to communicate their requirements to others, said apparatus comprising: an eye wearable device adapted to emit an infrared light signal from a certain area of at least one eye of said user; a monitoring device connected to said eye wearable device through a communication network, wherein the monitoring device includes: a receiving module configured to receive said transmitted infrared light signal from said at least one eye of said user, wherein said receiving module includes a plurality of icons arranged in a matrix, each icon of said plurality of icons corresponds to a cell of a plurality of cells in said matrix, said plurality of icons correspond to said requirements, and each cell of said plurality of cells includes at least one infra-red sensor configured to capture a point of gaze of said user; and an identification module to identify said requirement of said user corresponding to said transmitted infrared light signal.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The apparatus as claimed in claim 1, wherein said monitoring device further comprises: a determination module configured to determine the point of gaze of said user corresponding to said transmitted infrared light signal, wherein the identification module is further configured to identify said requirement of said user based on determined said point of gaze; and an output module configured to provide an audio output corresponding to an identified icon of said cell of the matrix presented on an optical screen.",
      },
      {
        num: 5,
        isIndependent: false,
        text: "The apparatus as claimed in claim 1, wherein said at least one infra-red sensor is a LIDAR sensor.",
      },
      {
        num: 6,
        isIndependent: false,
        text: "The apparatus as claimed in claim 1, wherein said eye wearable device includes at least one of a lens and a glass.",
      },
      {
        num: 7,
        isIndependent: false,
        text: "The apparatus as claimed in claim 6, wherein said eye wearable device is charged via an induction device.",
      },
      {
        num: 8,
        isIndependent: false,
        text: "The apparatus as claimed in claim 1, wherein said monitoring device is further configured to operate in at least one of a predictive word generation mode and a preset phase mode by employing at least one of machine learning techniques.",
      },
      {
        num: 10,
        isIndependent: true,
        text: "A method for communication to enable users to communicate their requirements, said method comprising: in an apparatus, transmitting, by an eye wearable device, infrared light signal from a certain area of at least one eye of said user; receiving, by a receiving module, said transmitted infrared light signal from said at least one eye of said user, wherein said receiving module includes a plurality of icons arranged in a matrix, each icon of said plurality of icons corresponds to a cell of a plurality of cells in said matrix, said plurality of icons correspond to said requirements, and each cell of said plurality of cells includes at least one infra-red sensor configured to capture a point of gaze of said user; determining, by a determination module, a point of gaze of said user corresponding to said transmitted infrared light signal; identifying, by an identification module, said requirement of said user based on determined said point of gaze; and providing, by an output module, an audio output corresponding to said identified requirement.",
      },
    ],
    legalEvents: [
      {
        date: "Apr 08, 2022",
        title: "Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "Oct 12, 2023",
        title: "Publication of US20230324680A1",
        type: "Publication",
      },
      {
        date: "Jul 09, 2024",
        title: "Patent Granted (US12032156B2)",
        type: "Grant",
      },
      {
        date: "Apr 08, 2042",
        title: "Anticipated Expiration",
        type: "Expiration",
      },
    ],
    descriptionSections: [
      {
        heading: "FIELD & BACKGROUND OF THE INVENTION",
        paragraphs: [
          "Differently abled individuals facing severe motor or vocal speech impairments often struggle to convey basic needs, feelings, and emergency requests to caregivers. Existing gaze-tracking communication boards frequently rely on ambient lighting conditions or intrusive heavy camera hardware.",
          "The present disclosure envisages a non-intrusive, highly accurate, and continuous assistive communication apparatus. It utilizes micro-emissive contact lenses or glasses paired with an induction-powered infrared emitter system to track point-of-gaze regardless of environmental lighting.",
        ],
      },
      {
        heading: "INDUCTIVE EMISSION & EYE-WEARABLE STRUCTURE",
        paragraphs: [
          "The apparatus features contact lenses containing micro-infrared LEDs (102) paired with induction receiving micro-coils. Custom eyeglasses worn over the lenses house primary electromagnetic coils acting as energy transmitters.",
          "When the user wears both, inductive coupling wirelessly powers the contact lens IR micro-LEDs without requiring onboard battery mass, ensuring maximum safety and comfort while creating constant infrared emission points across eye movements.",
        ],
      },
      {
        heading:
          "GAZE SELECTION, PREDICTIVE MACHINE LEARNING & SPEECH SYNTHESIS",
        paragraphs: [
          "A monitoring unit (104) featuring an infrared or LIDAR sensor matrix (202) continuously detects the infrared light signals emitted from the user's eye, accurately calculating depth differentials between the iris and sclera.",
          "The determination module (204) matches the calculated gaze vector to a matrix of contextual icons or text fields. Powered by machine learning predictive text algorithms, the system accelerates communication by anticipating frequent phrases and outputting natural synthetic speech via an audio speaker (208).",
        ],
      },
    ],
  },
  US20240085134A1: {
    id: "US20240085134A1",
    patentNo: "US20240085134A1",
    grantPublicationNo: "US12038245B2",
    title: "Method and system for preventing injury by friendly fire",
    region: "US",
    status: "Granted",
    abstract:
      "A smart monitoring method and system for identifying friendly forces and preventing casualties caused by friendly fire in tactical, law enforcement, and military operations. The system comprises a thermal signature emitting unit concealed within an inner portion of a user's tactical attire or bulletproof vest, configured to emit a low-temperature thermal signature matching a pre-stored metal unit insignia. An AI-based thermal camera mounted on a firearm detects target thermal signatures in real time and compares them against a database of authorized teammate insignia patterns. Upon detecting a match, a display unit or optical eyepiece renders a red-cross 'NO SHOOT' symbol and/or triggers an electronic trigger lock to prevent accidental friendly fire engagement.",
    inventors: [
      "Mirza Faizan",
      "Aarish Salman Bhojani",
      "Nadia Anisa Sethuraman",
      "Sofia Sethuraman",
      "Raahi S Jogani",
      "Zaid Marwat",
      "Mirza Rizwan",
      "Abdullah Hasani",
      "Hisham Ahmad",
    ],
    filingDate: "Sep 12, 2022",
    publicationDate: "Mar 14, 2024",
    priorityDate: "Sep 12, 2022",
    applicationNumber: "US17/942,735",
    keywords: [
      "friendly fire prevention",
      "tactical IFF system",
      "thermal signature emitting unit",
      "metal insignia recognition",
      "AI thermal optics camera",
      "smart gun optics",
      "ocular HUD eyepiece",
      "tactical combat safety",
      "military identification",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/3c/74/6b/8f1320fc326544/US20240085134A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20240085134A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/3d/01/b2/88d7aaf3dca39d/US20240085134A1-20240314-D00000.png",
    images: [
      {
        title: "FIG. 1A — Tactical Uniform Thermal Emitter Placement",
        caption:
          "Diagram of tactical user uniform (102) illustrating internal placement of thermal signature emitting unit (104) producing low-temperature metal insignia profile.",
        url: "https://patentimages.storage.googleapis.com/38/fb/b8/cccd4a7596fd73/US20240085134A1-20240314-D00001.png",
      },
      {
        title: "FIG. 1B — Firearm Thermal Optics & Soldier Ocular HUD",
        caption:
          "Firearm assembly (106) equipped with AI thermal camera optics (108) communicatively linked to soldier eyepiece display (110) presenting TARGET / NO FIRE warnings.",
        url: "https://patentimages.storage.googleapis.com/bb/c3/ab/6ea57443dac53b/US20240085134A1-20240314-D00002.png",
      },
      {
        title: "FIG. 1C — Weapon Microprocessor & Power Electronics",
        caption:
          "Hardware schematic of weapon system (106) showing embedded microprocessor (112) and battery power source (114) for real-time thermal image pattern matching.",
        url: "https://patentimages.storage.googleapis.com/20/4e/1b/e9927ad8ff8c38/US20240085134A1-20240314-D00003.png",
      },
      {
        title: "FIG. 2 — Smart Monitoring Device Architecture",
        caption:
          "Functional block diagram of smart monitoring device (202), wireless transceiver (204), processor (206), storage module (208), and display module (210).",
        url: "https://patentimages.storage.googleapis.com/4a/86/90/fd13540c1ddb31/US20240085134A1-20240314-D00004.png",
      },
      {
        title:
          "FIG. 3 — Teammate Identification & Threat Verification Flowchart",
        caption:
          "Operational flowchart showing method steps (302–312) from thermal signature emission, optic scanning, insignia pattern matching, to red-cross NO SHOOT HUD alert output.",
        url: "https://patentimages.storage.googleapis.com/e2/76/d2/85f93672f1ee35/US20240085134A1-20240314-D00005.png",
      },
    ],
    summaryHighlights: [
      "Concealed Low-Temperature Thermal Insignia: Integrates a micro-thermal emitting unit inside bulletproof vests or uniform linings that projects a distinct metal insignia temperature signature.",
      "AI-Powered Weapon Optics: Mounts an AI thermal camera directly onto firearms to detect and decode thermal signatures in zero-visibility or night environments.",
      "Real-Time Pattern Matching Database: Compares scanned signatures against an encrypted onboard or cloud database of friendly unit insignia patterns.",
      "Ocular HUD & Active No-Shoot Warnings: Renders an immediate red-cross 'NO SHOOT' overlay onto the shooter's eyepiece HUD to prevent accidental engagements.",
    ],
    referenceNumerals: [
      { num: "102", label: "Tactical User / Soldier / Law Enforcement" },
      {
        num: "104",
        label: "Thermal Signature Emitting Unit (Inserts in Vest)",
      },
      { num: "106", label: "Firearm System" },
      { num: "108", label: "AI Thermal Camera Optics Module" },
      { num: "110", label: "Ocular Display Eyepiece (HUD)" },
      { num: "112", label: "Onboard Weapon Microprocessor" },
      { num: "114", label: "Battery Power Module" },
      { num: "202", label: "Smart Monitoring Device" },
      { num: "204", label: "Transceiver Module" },
      { num: "206", label: "Central Processing Module" },
      { num: "208", label: "Storage Module (Insignia Database)" },
      { num: "210", label: "Display Module" },
      { num: "300", label: "Teammate Identification Process" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A method for providing a smart monitoring device to determine at least one user as a team mate, the method comprising: attaching, by a processor, a thermal signature emitting unit at one inner portion of the user's clothes, wherein the thermal signature emitting unit corresponds to a temperature signature of a metal insignia; connecting, by the processor, an AI-based thermal camera module to a gun to detect data related to the thermal signature of the metal insignia; comparing, by the processor, the data received from the AI-based thermal camera module with the patterns of the metal insignia stored in the database; and displaying, by a display unit, a red-cross symbol to the user when the data is matched by the comparison, wherein the red-cross symbol indicates the user not to shoot.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The method as claimed in claim 1, wherein the step of attaching, by the processor, the thermal signature emitting unit at one inner portion of the user's clothes further comprises inserting the thermal signature of the metal insignia inside a bulletproof vest.",
      },
      {
        num: 5,
        isIndependent: true,
        text: "A system for providing a smart monitoring device to determine at least one user as a team mate, the system comprising: a processor configured to: attach a thermal signature emitting unit at one inner portion of the user's clothes, wherein the thermal signature emitting unit corresponds to a temperature signature of a metal insignia; connect an AI-based thermal camera module to a gun to detect data related to the thermal signature of the metal insignia; compare data received from the AI-based thermal camera module with patterns of the metal insignia stored in a database; and a display unit configured to display a red-cross symbol to the user when the data is matched by the comparison, wherein the red-cross symbol indicates the user not to shoot.",
      },
    ],
    legalEvents: [
      {
        date: "Sep 12, 2022",
        title: "Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "Mar 14, 2024",
        title: "Publication of US20240085134A1",
        type: "Publication",
      },
      {
        date: "Jul 16, 2024",
        title: "Patent Granted (US12038245B2)",
        type: "Grant",
      },
      {
        date: "Sep 12, 2042",
        title: "Anticipated Expiration",
        type: "Expiration",
      },
    ],
    descriptionSections: [
      {
        heading: "FIELD & BACKGROUND OF THE INVENTION",
        paragraphs: [
          "In high-intensity military combat and urban law enforcement operations, rapid target identification is critical. Poor visibility, smoke, nighttime operations, and high stress often lead to tragic friendly fire encounters.",
          "Conventional Identify Friend or Foe (IFF) systems rely on radio beacons or infrared strobes that can be intercepted or targeted by opponents. The present invention introduces a passive/low-energy thermal insignia signature coupled with AI optical weapon sights to reliably identify teammates without exposing their position.",
        ],
      },
      {
        heading: "THERMAL INSIGNIA EMISSION & WEAPON SIGHT INTEGRATION",
        paragraphs: [
          "The system utilizes a compact thermal signature emitting unit (104) concealed inside a soldier's bulletproof vest or jacket lining. The unit generates a low-temperature thermal gradient matching a pre-defined military rank or unit metal insignia.",
          "An AI-enabled thermal optic camera (108) mounted on a firearm (106) captures thermal target images and streams data to an integrated microprocessor (112).",
        ],
      },
      {
        heading: "AI PATTERN MATCHING & HUD NO-SHOOT INTERVENTION",
        paragraphs: [
          "The weapon processor (112) cross-checks scanned thermal patterns against an encrypted local database (208) of authorized friendly insignias.",
          "If a teammate thermal pattern is confirmed, the system immediately projects a distinct red-cross 'NO SHOOT' indicator onto the shooter's HUD eyepiece (110) and can electronically disable weapon trigger firing, preventing accidental fratricide.",
        ],
      },
    ],
  },
  US20240080057A1: {
    id: "US20240080057A1",
    patentNo: "US20240080057A1",
    grantPublicationNo: "US12212355B2",
    title: "Biodegradable cover for a portable electronic device",
    region: "US",
    status: "Granted",
    abstract:
      "A modular, universal, and eco-friendly biodegradable protective cover for portable electronic devices (such as smartphones and tablets). The cover comprises a top portion attached to the back of a portable device using an array of interlocking, magnetically connected puzzle pieces made of biodegradable hemp plastic and natural elastomer matrix. Each puzzle piece features magnetic side pieces with alternating north/south pole alignments and integrated eco-elastic expandable sections (right and left sections) that stretch and adjust to fit electronic devices of varying lengths, widths, and thicknesses. Corner bumper portions coated with protective polyurethane layers secure the cover around the device corners, absorbing drop impacts while eliminating single-use plastic waste.",
    inventors: [
      "Mirza Faizan",
      "Zara Majid",
      "Aniq Shaikh",
      "Ali Khan",
      "Abdullah Mommandi",
      "Basith Abdul Syed",
      "Aayesha Syed Ibrahim",
      "Saanchi Gabri",
      "Pranav Kumar",
      "Prisha Bhat",
      "Hadia Khatri",
      "Sufiya Khatri",
      "Zaynab Khan",
      "Mirza Rizwan",
      "Mishaal Qureshi",
      "Abdullah Hasani",
      "Rishika Nandigam",
    ],
    filingDate: "Sep 5, 2022",
    publicationDate: "Mar 7, 2024",
    priorityDate: "Sep 5, 2022",
    applicationNumber: "US17/902,941",
    keywords: [
      "biodegradable phone cover",
      "hemp plastic case",
      "modular puzzle piece cover",
      "magnetic interlocking case",
      "expandable eco-elastic border",
      "universal smartphone protection",
      "sustainable electronics accessory",
      "polyurethane corner bumpers",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/fa/24/bb/337147470789d7/US20240080057A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20240080057A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/0a/15/c4/30eff29e41f7a7/US20240080057A1-20240307-D00000.png",
    images: [
      {
        title: "FIG. 1A — Biodegradable Cover Corner & Device Interface",
        caption:
          "Perspective view showing corner attachment portions (108) securing the protective cover around portable electronic device (102).",
        url: "https://patentimages.storage.googleapis.com/0a/15/c4/30eff29e41f7a7/US20240080057A1-20240307-D00000.png",
      },
      {
        title: "FIG. 1B — Modular Puzzle Piece Grid Assembly",
        caption:
          "Rear elevation view of top portion (104) comprising a grid of interlocking puzzle pieces (106-1 to 106-n) mounted to device back wall.",
        url: "https://patentimages.storage.googleapis.com/16/bb/d4/1412be61edd9f5/US20240080057A1-20240307-D00001.png",
      },
      {
        title:
          "FIG. 2 — Interlocking Magnetic Puzzle Piece & Expandable Section Detail",
        caption:
          "Detailed view of individual puzzle piece (106) showing hemp plastic square piece (202), alternating magnetic side pieces (204), and eco-elastic expandable portion (206) for universal size adjustment.",
        url: "https://patentimages.storage.googleapis.com/39/3a/0c/91f9c3d2e20955/US20240080057A1-20240307-D00002.png",
      },
    ],
    summaryHighlights: [
      "100% Biodegradable Hemp Plastic Construction: Primary structural square pieces crafted from organic hemp plastic and compostable bio-polymers to eliminate e-waste.",
      "Modular Interlocking Magnetic Grid: Puzzle pieces utilize alternating diagonal north/south magnetic poles to snap together securely into customizable grids.",
      "Eco-Elastic Expandable Border: Integrated elastic side sections stretch dynamically, allowing a single cover to adaptively fit smartphones and tablets of all dimensions.",
      "Polyurethane Drop Impact Dampening: Reinforced corner caps wrapped in shock-absorbing polyurethane defend screens and glass backs from drop damage.",
    ],
    referenceNumerals: [
      { num: "100", label: "Biodegradable Protective Cover System" },
      { num: "102", label: "Portable Electronic Device (Smartphone / Tablet)" },
      { num: "104", label: "Top Cover Portion (Rear Assembly)" },
      {
        num: "106",
        label: "Interlocking Puzzle Piece Unit (106-1, 106-2 ... 106-n)",
      },
      { num: "108", label: "Corner Protective Bumper Cap" },
      { num: "202", label: "Hemp Plastic Square Core Piece" },
      { num: "204", label: "Magnetic Side Piece (Alternating Poles)" },
      { num: "205A", label: "First Magnetic Pole Unit (North)" },
      { num: "205B", label: "Second Magnetic Pole Unit (South)" },
      { num: "206", label: "Eco-Elastic Expandable Section" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A biodegradable cover for a portable electronic device, the cover comprising: a top portion including a plurality of adjustable puzzle pieces, wherein said top portion is attached at back wall of said portable device, wherein each puzzle piece further comprises: a square piece and at least one magnetic side piece attached to said square piece, wherein each of said magnetic side piece of first puzzle piece is connected to center of square piece to define length and width of different sizes of portable devices; and an expandable portion comprising a right section and a left section, for extending said biodegradable cover along the portable device; and at least one corner portion to attach said top portion with corners of said portable device.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The biodegradable cover as claimed in claim 1, wherein said magnetic side piece of first puzzle piece is connected to center of square piece using an eco-elastic material.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The biodegradable cover as claimed in claim 1, wherein said square piece is constructed from hemp plastic.",
      },
      {
        num: 6,
        isIndependent: false,
        text: "The biodegradable cover as claimed in claim 1, wherein each of said puzzle piece includes two positive and two negative sides of said magnetic side pieces arranged diagonally to each other.",
      },
    ],
    legalEvents: [
      {
        date: "Sep 05, 2022",
        title: "Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "Mar 07, 2024",
        title: "Publication of US20240080057A1",
        type: "Publication",
      },
      {
        date: "Mar 04, 2025",
        title: "Patent Granted (US12212355B2)",
        type: "Grant",
      },
      {
        date: "Sep 05, 2042",
        title: "Anticipated Expiration",
        type: "Expiration",
      },
    ],
    descriptionSections: [
      {
        heading: "FIELD & BACKGROUND OF THE INVENTION",
        paragraphs: [
          "Over 1.5 billion smartphone cases are sold globally each year, the vast majority made of non-biodegradable synthetic petroleum plastics that persist in landfills and oceans for centuries. Furthermore, rigid phone cases only fit single specific phone models, forcing consumers to discard them whenever upgrading devices.",
          "The present disclosure introduces a fully compostable, universal protective cover engineered from organic hemp plastic and natural elastic polymers with a modular magnetic puzzle design.",
        ],
      },
      {
        heading: "HEMP PLASTIC CORE & MAGNETIC PUZZLE ASSEMBLY",
        paragraphs: [
          "The cover (100) features a matrix of interlocking puzzle pieces (106) made from high-strength hemp plastic (202). Each piece contains embedded micro-magnets (204) with diagonally arranged North (205A) and South (205B) poles.",
          "The magnetic grid snaps together effortlessly, enabling users to create custom cover shapes or expand/contract the array to fit any device surface.",
        ],
      },
      {
        heading: "ECO-ELASTIC EXPANSION & SHOCK-ABSORBING CORNERS",
        paragraphs: [
          "Interlocking puzzle pieces incorporate eco-elastic expandable sections (206) that stretch radially along the device back. Polyurethane-coated corner bumpers (108) latch securely over screen edges, providing high impact resistance against drops and vibrations.",
        ],
      },
    ],
  },
  US20240094830A1: {
    id: "US20240094830A1",
    patentNo: "US20240094830A1",
    grantPublicationNo: "US12210692B2",
    title: "Method and system for providing a smart whiteboard cleaner",
    region: "US",
    status: "Granted",
    abstract:
      "An automated smart whiteboard cleaning method and system designed for classrooms, lecture halls, and corporate meeting rooms. The system uniformly divides a whiteboard screen into a plurality of selectable horizontal rows, each associated with row switches or remote control inputs. It features motorized dual-axis clearing assemblies—a top eraser bar moving vertically and a side eraser bar moving horizontally. An integrated transceiver receives row-specific clearing commands to selectively erase specific board sections without wiping active notes. An automated inactivity timer monitors user presence; if the board remains idle for over 15 minutes or user absence is detected, the system auto-erases and shuts down display access to protect confidential meeting contents, while an internal memory module archives board content prior to erasure for future retrieval.",
    inventors: [
      "Mirza Faizan",
      "Vedanth Venkatesh",
      "Gabriel Bashir Khatri",
      "Iffra Mehek Pathan",
      "Saad Master",
      "Rehan Sahir Ali",
      "Zahra Shifa Khatri",
      "Mirza Rizwan",
      "Samad Syed",
      "Darshan Kumar",
      "Mishaal Qureshi",
      "Abdullah Hasani",
      "Zaynab Khan",
    ],
    filingDate: "Sep 20, 2022",
    publicationDate: "Mar 21, 2024",
    priorityDate: "Sep 20, 2022",
    applicationNumber: "US17/948,427",
    keywords: [
      "smart whiteboard cleaner",
      "automated eraser bar",
      "dual-axis horizontal vertical erasing",
      "row selective clearing",
      "remote control whiteboard",
      "confidential content auto-shutdown",
      "content archival memory",
      "classroom automation",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/87/f0/4b/1df1a0d68fb9d6/US20240094830A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20240094830A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/62/49/b8/2d66ef6cc32418/US20240094830A1-20240321-D00000.png",
    images: [
      {
        title:
          "FIG. 1A — Smart Whiteboard System Environment & Dual Eraser Bars",
        caption:
          "Overall system environment (100) showing whiteboard (102), wireless remote control (104), vertical top eraser bar (106), and horizontal side eraser bar (108).",
        url: "https://patentimages.storage.googleapis.com/62/49/b8/2d66ef6cc32418/US20240094830A1-20240321-D00000.png",
      },
      {
        title: "FIG. 1B — Whiteboard Row Segment & Selective Erase Control",
        caption:
          "Front elevation view of whiteboard screen (102) divided into horizontal row segments configured with individual row erase switches.",
        url: "https://patentimages.storage.googleapis.com/a1/03/9f/262a75acb64850/US20240094830A1-20240321-D00001.png",
      },
      {
        title: "FIG. 2 — Smart Whiteboard Cleaner Architecture Block Diagram",
        caption:
          "Functional block diagram of smart whiteboard cleaner system (200), cleaner unit (202), transceiver (204), processor (206), memory storage (208), and I/O unit (210).",
        url: "https://patentimages.storage.googleapis.com/6a/6c/2b/a59810b5a4bf01/US20240094830A1-20240321-D00002.png",
      },
      {
        title:
          "FIG. 3 — Selective Erase & Confidential Auto-Shutdown Flowchart",
        caption:
          "Operational flowchart illustrating method steps (302–312) for row division, selective command reception, motorized erasure, and idle security auto-shutdown.",
        url: "https://patentimages.storage.googleapis.com/88/ec/4c/d52070a657ccc2/US20240094830A1-20240321-D00003.png",
      },
    ],
    summaryHighlights: [
      "Dual-Axis Motorized Erasing Assembly: Features a top eraser bar moving vertically and a side eraser bar moving horizontally across the whiteboard surface.",
      "Row-Specific Selective Clearing: Divides the whiteboard screen into horizontal rows with corresponding switch buttons or remote controls, enabling selective section erasing.",
      "Confidentiality Auto-Shutdown: Automatically detects user absence or 15-minute inactivity, triggering motorized full erasure and screen power-down to safeguard sensitive information.",
      "Digital Archival Memory Unit: Digitally captures and stores board drawings/text in memory prior to erasing, allowing retrieval for absent students or meeting minutes.",
    ],
    referenceNumerals: [
      { num: "100", label: "Classroom / Conference Room Environment" },
      { num: "102", label: "Smart Whiteboard Unit" },
      { num: "104", label: "Wireless Remote Control Device" },
      { num: "106", label: "Vertical Top Eraser Bar Assembly" },
      { num: "108", label: "Horizontal Side Eraser Bar Assembly" },
      { num: "200", label: "Cleaner System Control Architecture" },
      { num: "202", label: "Whiteboard Cleaner Motorized Unit" },
      { num: "204", label: "Wireless Transceiver Module" },
      { num: "206", label: "Central Processor Module" },
      { num: "208", label: "System Storage / Memory Module" },
      { num: "210", label: "Input / Output (I/O) Control Unit" },
      { num: "300", label: "Selective Cleaning Method Process" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A method to erase at least a certain amount of content presented on a whiteboard with a whiteboard cleaner, the method comprising: uniformly dividing whiteboard screen into a plurality of horizontal rows, wherein each row of the plurality of horizontal rows is configured with a switch button; selecting at least one switch button, by a user, to signify a certain amount of content that the user admires to erase; receiving a command, by a transceiver, to automatically erase the certain amount of content selected by the user, wherein the command corresponds to an electronic signal configured with each switch button; and determining, by a processor, absence of the user for a predetermined time period, wherein based on determination, the system shuts off the whiteboard to restrict access of unknown person to view the content of the whiteboard.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The method as claimed in claim 1, wherein the whiteboard cleaner comprises a top eraser that moves vertically to erase the whiteboard and a side eraser that moves horizontally to erase the whiteboard.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The method as claimed in claim 1, further comprising storing, in a memory module, the data presented on the whiteboard prior to erasing.",
      },
    ],
    legalEvents: [
      {
        date: "Sep 20, 2022",
        title: "Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "Mar 21, 2024",
        title: "Publication of US20240094830A1",
        type: "Publication",
      },
      {
        date: "Jan 28, 2025",
        title: "Patent Granted (US12210692B2)",
        type: "Grant",
      },
      {
        date: "Sep 20, 2042",
        title: "Anticipated Expiration",
        type: "Expiration",
      },
    ],
    descriptionSections: [
      {
        heading: "FIELD & BACKGROUND OF THE INVENTION",
        paragraphs: [
          "Traditional classroom and conference room whiteboards require manual marker erasing, which wastes instructional time, creates harmful marker dust residue, and often leads to messy or incomplete cleaning.",
          "Furthermore, sensitive corporate notes or exam solutions left on whiteboards after meetings pose confidentiality risks. The present invention introduces an automated, dual-axis smart whiteboard cleaner with selective row erasing and security auto-shutdown.",
        ],
      },
      {
        heading: "DUAL-AXIS ERASING & ROW SELECTIVE CONTROL",
        paragraphs: [
          "The smart whiteboard (102) is outfitted with a motorized top eraser bar (106) moving vertically and a side eraser bar (108) moving horizontally.",
          "The board screen is divided into uniform horizontal rows, each assigned a physical switch or remote command key (104). Users can selectively trigger erasure for specific rows while preserving other regions.",
        ],
      },
      {
        heading: "DIGITAL ARCHIVING & SECURITY AUTO-SHUTDOWN",
        paragraphs: [
          "Before executing any erase cycle, an integrated processor (206) scans and archives board text/drawings into digital memory (208) for easy distribution to meeting participants.",
          "An automated inactivity sensor monitors classroom presence; if the board remains untouched for over 15 minutes, the system automatically sweeps the surface clean and shuts off power to prevent unauthorized viewing.",
        ],
      },
    ],
  },
  US20240138541A1: {
    id: "US20240138541A1",
    patentNo: "US20240138541A1",
    grantPublicationNo: "US12207721B2",
    title: "Perfume dispersing device",
    region: "US",
    status: "Granted",
    abstract:
      "A multi-fragrance smart perfume dispersing device and method for selectively dispensing a plurality of perfume scents. The device comprises a plurality of individual perfume holders, each containing a distinct perfume sample connected via a pressurized manifold pipe network to an air tank and miniature compressor. The device connects directly to a user's mobile smartphone via a standard audio jack or wireless link, drawing power directly from the mobile device to operate internal micro-valves and the compressor. A custom smartphone user interface (UI) enables users to browse a digital fragrance library, select specific scent notes, and trigger precise micro-droplet air dispersion through dedicated fragrance nozzles.",
    inventors: ["Mirza Faizan", "Kimaya Rafiq Meherali"],
    filingDate: "Oct 31, 2022",
    publicationDate: "May 2, 2024",
    priorityDate: "Oct 31, 2022",
    applicationNumber: "US17/976,894",
    keywords: [
      "perfume dispersing device",
      "multi-fragrance dispenser",
      "smartphone connected scent diffuser",
      "audio jack powered diffuser",
      "air compressor fragrance tank",
      "digital fragrance selector UI",
      "micro-nozzle perfume holder",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/41/b8/7e/3f77980e3b380d/US20240138541A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20240138541A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/ab/94/1b/399479af23a619/US20240138541A1-20240502-D00000.png",
    images: [
      {
        title: "FIG. 1 — Multi-Fragrance Dispersing System & Air Tank Assembly",
        caption:
          "Schematic view of perfume dispersing device (100) showing compressor (102), pressurized air tank (104), multiple perfume holders (106-1 to 106-n), audio jack connector (110), and dispersion nozzles.",
        url: "https://patentimages.storage.googleapis.com/ab/94/1b/399479af23a619/US20240138541A1-20240502-D00000.png",
      },
      {
        title:
          "FIG. 2 — Mobile Device Connection & Digital Fragrance Selector UI",
        caption:
          "Diagram showing perfume dispersing device (100) plugged into smartphone (202) via audio jack (110), powered by phone current and controlled through a touch UI scent menu.",
        url: "https://patentimages.storage.googleapis.com/5e/11/f6/118490914e0f49/US20240138541A1-20240502-D00002.png",
      },
      {
        title:
          "FIG. 3 — Internal Hardware & Micro-Nozzle Controller Block Diagram",
        caption:
          "Functional architecture showing dispersion nozzle (302), compressor (304), controller (306), processor (308), and transceiver (310).",
        url: "https://patentimages.storage.googleapis.com/da/29/11/cc2182507f1310/US20240138541A1-20240502-D00003.png",
      },
      {
        title: "FIG. 4 — Computing Environment & Smartphone Logic Architecture",
        caption:
          "Computing environment (400) detailing processing unit (402), control unit (404), ALU (406), memory (412), and storage (414) executing fragrance selection logic.",
        url: "https://patentimages.storage.googleapis.com/d0/cf/9a/57c4419b452d00/US20240138541A1-20240502-D00004.png",
      },
    ],
    summaryHighlights: [
      "Multi-Fragrance Chamber Array: Houses multiple individual scent chambers (106-1 to 106-n) within a single compact device, eliminating the need to carry separate perfume bottles.",
      "Smartphone Power & Control Interface: Connects via a standard audio jack or wireless protocol to draw operation current directly from the mobile phone and execute app instructions.",
      "Pressurized Micro-Nozzle Dispersion: Micro-compressor (102) builds air tank pressure (104) to release precise aerosolized scent micro-droplets through dedicated micro-nozzles.",
      "Digital Fragrance Sampling UI: Custom mobile app UI allows users to sample digital fragrance libraries, mix scents, and test manufacturer fragrance samples prior to purchase.",
    ],
    referenceNumerals: [
      { num: "100", label: "Multi-Fragrance Perfume Dispersing Device" },
      { num: "102", label: "Micro-Air Compressor Module" },
      { num: "104", label: "Pressurized Air Tank Reservoir" },
      { num: "106", label: "Perfume Holder Chambers (106-1 to 106-n)" },
      {
        num: "108",
        label: "Fragrance Dispersion Micro-Nozzles (108-1 to 108-n)",
      },
      { num: "110", label: "Mobile Audio Jack / Power Connector" },
      { num: "202", label: "Host Smartphone / Mobile Device" },
      { num: "302", label: "Dispersion Nozzle Assembly" },
      { num: "304", label: "Compressor Drive Unit" },
      { num: "306", label: "System Micro-Controller" },
      { num: "308", label: "Embedded Processor" },
      { num: "310", label: "Communication Transceiver" },
      { num: "400", label: "Smartphone Software Computing Environment" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A method for dispersing a plurality of flavours of perfume from a perfume dispersing device, the method comprising: receiving, from a user, an input indicating a selection of a flavour from a plurality of flavours of perfume; generating, from a compressor of the perfume dispersing device, pressure in an air tank of the perfume dispersing device, wherein the air tank is filled with air; selecting, by a processor of the perfume dispersing device, a perfume holder from a plurality of perfume holders included in the perfume dispersing device based on the input from the user, wherein each perfume holder of the plurality of perfume holders contains a specific flavour of the plurality of flavours of perfume; releasing, by the air tank, air pressure to the selected perfume holder; and dispersing, by the selected perfume holder, the flavour indicated by the input from the user.",
      },
      {
        num: 9,
        isIndependent: true,
        text: "A perfume dispersing device for dispersing a plurality of flavours of perfume, the device comprising: an input unit configured to receive an input from a user, wherein the input indicates a selection of a flavour from a plurality of flavours of perfume; a compressor configured to generate pressure in an air tank of the perfume dispersing device, wherein the air tank is filled with air; a processor configured to select a perfume holder from a plurality of perfume holders included in the perfume dispersing device based on the input from the user, wherein each perfume holder of the plurality of perfume holders contains a specific flavour of the plurality of flavours of perfume; the air tank is configured to release air pressure to the selected perfume holder; and the perfume holder is configured to disperse the flavour indicated by the input from the user.",
      },
      {
        num: 10,
        isIndependent: false,
        text: "The device as claimed in claim 9, further comprising an audio jack configured to connect the perfume dispersing device to a mobile device.",
      },
    ],
    legalEvents: [
      {
        date: "Oct 31, 2022",
        title: "Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "May 02, 2024",
        title: "Publication of US20240138541A1",
        type: "Publication",
      },
      {
        date: "Jan 28, 2025",
        title: "Patent Granted (US12207721B2)",
        type: "Grant",
      },
      {
        date: "Jun 13, 2043",
        title: "Adjusted Expiration",
        type: "Expiration",
      },
    ],
    descriptionSections: [
      {
        heading: "FIELD & BACKGROUND OF THE INVENTION",
        paragraphs: [
          "Fragrance enthusiasts and travelers often wish to carry multiple perfume scents for different occasions throughout the day. Carrying multiple bulky glass perfume bottles is impractical, prone to leakage, and inconvenient.",
          "Furthermore, fragrance manufacturers struggle to provide consumers with physical scent samples efficiently. The present disclosure envisages a compact, smartphone-powered multi-fragrance dispersing accessory.",
        ],
      },
      {
        heading: "COMPRESSOR & PRESSURIZED AIR TANK OPERATION",
        paragraphs: [
          "The perfume dispersing device (100) incorporates a micro-compressor (102) linked to a pressurized air tank (104) and a manifold network of pipes.",
          "The air tank feeds compressed air selectively into one of several perfume holder chambers (106-1 to 106-n), atomizing the selected liquid perfume into a delicate mist expelled through micro-nozzles (108).",
        ],
      },
      {
        heading: "SMARTPHONE UI CONTROL & AUDIO JACK POWERING",
        paragraphs: [
          "The device connects to a host mobile phone (202) via a standard audio jack (110) or wireless interface, drawing operating current directly from the smartphone battery.",
          "A mobile application presents a graphical user interface (UI) displaying available fragrance profiles. Selecting a scent sends digital control signals to actuate corresponding internal valves and compressor cycles.",
        ],
      },
    ],
  },
  US20230069173A1: {
    id: "US20230069173A1",
    patentNo: "US20230069173A1",
    grantPublicationNo: "US12211384B2",
    title: "Smart rescue system",
    region: "US",
    status: "Granted",
    abstract:
      "An automated smart emergency rescue method and IoT server system for optimizing emergency medical response times and ambulance navigation. The system comprises a requester mobile application, a central IoT rescue server, a geo-location tracking module, an intelligent navigation system, and microchip receivers installed within urban traffic signal lights. Upon receiving an emergency ambulance request, the IoT server dispatches the nearest available unit. As the ambulance approaches traffic intersections (within a 2–5 km radius), the server or onboard vehicle transceiver overrides upcoming traffic lights to green while activating a blue auxiliary indicator light at the intersection. The blue indicator flashes at dynamic rates corresponding to ambulance proximity, informing waiting drivers of incoming emergency vehicles and preventing traffic gridlock during transit to medical centers.",
    inventors: [
      "Mirza Faizan",
      "Mirza Rizwan",
      "Aarifa Fatima",
      "Ayesha Fatima",
      "Ashaz Haque",
      "Kaushiki Mudgal",
      "Abhudya Sharma",
      "Zayan Tabish",
      "Zayed Tabish",
      "Daanya Tabish",
      "Shayan Naiyar Taban",
      "Mikhail Imtiaz",
      "Sama Fatima",
      "Mishaal Fauzan Qureshi",
      "Aroush Fatima",
      "Saadia Asaf",
      "Mansoor Hasan Khan",
      "Aiman Fatima Jamadar",
    ],
    filingDate: "Sep 1, 2021",
    publicationDate: "Mar 2, 2023",
    priorityDate: "Sep 1, 2021",
    applicationNumber: "US17/464,237",
    keywords: [
      "smart rescue system",
      "IoT emergency server",
      "ambulance dispatch optimization",
      "traffic light microchip override",
      "dynamic green wave navigation",
      "auxiliary blue indicator light",
      "proximity flashing traffic signal",
      "real-time medical routing",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/d5/7c/68/22e3136ee64c7e/US20230069173A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20230069173A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/6e/1c/93/0433102ae5ddf5/US20230069173A1-20230302-D00001.png",
    images: [
      {
        title: "FIG. 1 — Smart Rescue System & IoT Server Network Architecture",
        caption:
          "System environment (100) showing mobile requester (101), network (102), central IoT server (103), geo-location system (104), navigation system (105), driver notification (106), and traffic microchip (107).",
        url: "https://patentimages.storage.googleapis.com/6e/1c/93/0433102ae5ddf5/US20230069173A1-20230302-D00001.png",
      },
      {
        title:
          "FIG. 2 — Automated Emergency Dispatch & Green Wave Traffic Routing Flow",
        caption:
          "Stepwise rescue workflow (FIG. 2a–2i) from patient location request to automatic ambulance selection, live GPS tracking, traffic light override, and hospital arrival.",
        url: "https://patentimages.storage.googleapis.com/f1/69/67/d8246a7c393104/US20230069173A1-20230302-D00002.png",
      },
      {
        title:
          "FIG. 3 — Traffic Light Microchip Override & Blue Auxiliary Indicator",
        caption:
          "Traffic light control mechanism showing microchip module (107) and blue auxiliary pop-up light (108) flashing dynamically based on ambulance distance.",
        url: "https://patentimages.storage.googleapis.com/bb/26/5a/98f261fdff35a1/US20230069173A1-20230302-D00003.png",
      },
      {
        title: "FIG. 4 — Hospital Selection & Emergency Medical Data Sync",
        caption:
          "Hospital routing workflow detailing patient condition evaluation by paramedics and real-time medical data synchronization with receiving emergency rooms.",
        url: "https://patentimages.storage.googleapis.com/25/9a/93/96570313b64da0/US20230069173A1-20230302-D00004.png",
      },
    ],
    summaryHighlights: [
      "IoT Server Proximity Dispatch: Automatically calculates geospatial distance (2–5 km) to dispatch the closest available ambulance upon receiving an emergency request.",
      "Green Wave Traffic Signal Preemption: Microchips (107) integrated in urban traffic signals receive signals from approaching ambulances, automatically turning signals green along the navigation route.",
      "Proximity-Controlled Blue Auxiliary Warning Light: Auxiliary blue light (108) at intersections flashes slowly when an ambulance is >0.5 km away and rapidly when <0.5 km away, informing waiting drivers of why signals are modified.",
      "Real-Time Paramedic ER Data Sync: Paramedics enter preliminary vitals into the mobile app en route, giving destination hospital emergency rooms advance notice to prepare specialized trauma bays.",
    ],
    referenceNumerals: [
      { num: "100", label: "Smart Rescue System Architecture" },
      { num: "101", label: "Mobile Requester / Driver Device" },
      { num: "102", label: "Cellular / Wireless Communication Network" },
      { num: "103", label: "Central IoT Emergency Rescue Server" },
      { num: "104", label: "Geospatial Location Tracking Module" },
      { num: "105", label: "Dynamic Navigation Routing System" },
      { num: "106", label: "Ambulance Driver Notification System" },
      { num: "107", label: "Traffic Light Wireless Microchip Module" },
      { num: "108", label: "Auxiliary Blue Flashing Traffic Signal" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A smart rescue system, the system comprising: a mobile device allowing a requester to request for ambulance services; a network; and a server communicatively coupled with the mobile device through network, wherein the requester provides details including patient's address; wherein the server comprises: a geo-location system to automatically determine the ambulance available in a geo-spatial vicinity of the patient's address; a notification system to notify a driver of the ambulance available in a geo-spatial vicinity of the requested address; a navigation system to navigate the driver to a nearest medical centre in a geo-spatial vicinity of the patient's address, and recognizes upcoming traffic lights upto a certain distance in advance; and a microchip technology communicating with the traffic lights controlled by the server.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The smart rescue system as claimed in claim 1, wherein the server turns upcoming traffic lights along the navigation route green within a distance range of up to 2 km to 5 km.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The smart rescue system as claimed in claim 1, wherein the traffic lights feature an auxiliary blue light that flashes slowly when an approaching ambulance is greater than 0.5 km away and flashes rapidly when less than 0.5 km away.",
      },
    ],
    legalEvents: [
      {
        date: "Sep 01, 2021",
        title: "Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "Mar 02, 2023",
        title: "Publication of US20230069173A1",
        type: "Publication",
      },
      {
        date: "Feb 04, 2025",
        title: "Patent Granted (US12211384B2)",
        type: "Grant",
      },
      {
        date: "Sep 01, 2041",
        title: "Anticipated Expiration",
        type: "Expiration",
      },
    ],
    descriptionSections: [
      {
        heading: "FIELD & BACKGROUND OF THE INVENTION",
        paragraphs: [
          "Emergency medical services (EMS) face severe delays caused by urban traffic congestion and red traffic signals. Delayed ambulance arrivals directly impact patient survival rates during critical medical emergencies like heart attacks or severe trauma.",
          "The present invention provides an intelligent IoT-based smart rescue system that coordinates ambulance dispatch, real-time navigation, traffic signal green-wave preemption, and public awareness signals.",
        ],
      },
      {
        heading: "SMART DISPATCH & GREEN WAVE NAVIGATION",
        paragraphs: [
          "When a user submits an emergency call or app request (101), the central IoT server (103) uses a geospatial location module (104) to identify the nearest free ambulance.",
          "As the ambulance travels along the optimal route, microchips (107) in traffic signals detect the vehicle's approach (up to 2–5 km away) and turn traffic lights green in advance.",
        ],
      },
      {
        heading: "AUXILIARY TRAFFIC LIGHT & HOSPITAL TELEMETRY",
        paragraphs: [
          "Intersections are equipped with an auxiliary blue light (108) that flashes to inform waiting drivers that signals are being held green for an incoming emergency vehicle.",
          "Simultaneously, paramedics update patient condition and vitals on an onboard app, transmitting live medical telemetry to the destination emergency room to prepare trauma teams in advance.",
        ],
      },
    ],
  },
  US20240144357A1: {
    id: "US20240144357A1",
    patentNo: "US20240144357A1",
    grantPublicationNo: "US12327279B2",
    title: "System for displaying selected clothes on a dummy human body",
    region: "US",
    status: "Granted",
    abstract:
      "A real-time virtual fitting and AR mannequin system for displaying selected apparel on a custom 3D human body model. The system comprises a mobile device, a 360-degree imaging camera, a 3D body scanner, and an intelligent display mirror capable of switching between standard reflection and augmented display modes. Upon receiving a user request to try on garments, the 3D scanner calculates user height, Body Mass Index (BMI), body circumference, and overall shape using volumetric camera feeds. The system renders a 3D digital mannequin tailored to the user's exact proportions, superimposes selected clothing items with realistic drape and texture physics, and optionally controls physical LED lighting arrays around smart store fitting mirrors to simulate depth, shadows, and natural ambient lighting.",
    inventors: ["Mirza Faizan", "Kimaya Rafiq Meherali"],
    filingDate: "Nov 23, 2022",
    publicationDate: "May 2, 2024",
    priorityDate: "Nov 1, 2022",
    applicationNumber: "US17/993,091",
    keywords: [
      "virtual fitting room",
      "3D body scanner mannequin",
      "augmented reality clothing try-on",
      "smart fitting mirror",
      "BMI body shape prediction",
      "digital garment superimposition",
      "LED lighting depth control",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/c5/24/47/67ed55e580503a/US20240144357A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20240144357A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/bd/42/70/f46ba98bc0a496/US20240144357A1-20240502-D00000.png",
    images: [
      {
        title: "FIG. 1 — Virtual Apparel Try-On System Architecture",
        caption:
          "System schematic (100) showing mobile device (102) with touch UI, wireless/wired connection link, and 3D body scanner (104).",
        url: "https://patentimages.storage.googleapis.com/bd/42/70/f46ba98bc0a496/US20240144357A1-20240502-D00000.png",
      },
      {
        title: "FIG. 2 — 360-Degree Camera Body Scan & 3D Volumetric Mesh",
        caption:
          "Body scanner (104) capturing user rotation via 360-degree imaging camera (202) to generate a 3D volumetric avatar of user (204).",
        url: "https://patentimages.storage.googleapis.com/4d/52/01/37e6e13f484182/US20240144357A1-20240502-D00001.png",
      },
      {
        title: "FIG. 3 — Body Scanner Measurement Modules Block Diagram",
        caption:
          "Functional architecture of body scanner (104), height calculator (302), BMI calculator (304), circumference calculator (306), and shape predictor (308).",
        url: "https://patentimages.storage.googleapis.com/28/e6/ce/80edfbcc37659b/US20240144357A1-20240502-D00002.png",
      },
      {
        title: "FIG. 4 — Dual-Mode Smart Mirror Fitting Room Display",
        caption:
          "Smart store mirror-display device (404) switching between reflective mirror mode and AR display mode with superimposed garment visualization.",
        url: "https://patentimages.storage.googleapis.com/cf/85/cf/d7dcd5aa26bfea/US20240144357A1-20240502-D00003.png",
      },
      {
        title: "FIG. 5 — LED Lighting & Shadow Depth Simulation Assembly",
        caption:
          "Physical mannequin system (200) with LED lighting arrays (504), controller (506), and projector (508) adding shadow depth and texture detail.",
        url: "https://patentimages.storage.googleapis.com/6c/fe/98/3e5b6f86684104/US20240144357A1-20240502-D00004.png",
      },
      {
        title: "FIG. 6 — Virtual Garment Rendering & Controller Architecture",
        caption:
          "Hardware controller block diagram illustrating imaging unit (602), body details unit (604), system processor (608), and wireless transceiver (610).",
        url: "https://patentimages.storage.googleapis.com/21/05/7b/2801d580fe7816/US20240144357A1-20240502-D00005.png",
      },
      {
        title: "FIG. 7 — AR Fitting Process Flowchart",
        caption:
          "Operational flowchart illustrating user trigger reception, 3D body scanning, personalized avatar creation, and virtual garment superimposition.",
        url: "https://patentimages.storage.googleapis.com/bb/5e/c9/64a9d1c8100f17/US20240144357A1-20240502-D00006.png",
      },
    ],
    summaryHighlights: [
      "Volumetric 3D Avatar Generation: Utilizes a 360-degree camera (202) and body scanner (104) to calculate height (302), BMI (304), chest/waist circumference (306), and body shape (308) to create a custom digital mannequin.",
      "AR Garment Superimposition: Real-time rendering engine drapes selected clothing items over the digital mannequin with accurate scale, texture depth, and fabric physics.",
      "Dual-Mode Smart Store Fitting Mirror: Flat TV mirror-display device (404) switches between live reflective mirror mode and augmented display mode for trying on unstocked inventory or alternative colorways.",
      "Dynamic LED Shadow & Lighting Control: Mannequin lighting controller (506) adjusts external LED arrays (504) and projector highlights (508) to eliminate display reflections and enhance garment depth.",
    ],
    referenceNumerals: [
      { num: "100", label: "Virtual Fitting & Mannequin Display System" },
      { num: "102", label: "Mobile Device / Touch UI" },
      { num: "104", label: "Volumetric 3D Body Scanner" },
      { num: "202", label: "360-Degree Imaging Camera" },
      { num: "204", label: "User / Shopper" },
      { num: "302", label: "Height Calculator Module" },
      { num: "304", label: "BMI Calculator Module" },
      { num: "306", label: "Body Circumference Calculator Module" },
      { num: "308", label: "3D Shape Predictor Module" },
      { num: "310", label: "Body Scanner Processor" },
      { num: "404", label: "Dual-Mode Smart Fitting Mirror Display" },
      { num: "502", label: "Physical / Digital Mannequin Dummy" },
      { num: "504", label: "Controlled LED Lighting Array" },
      { num: "506", label: "Lighting & Shadow Controller" },
      { num: "508", label: "Depth Projection Unit" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A system for displaying selected clothes on a dummy human body, the system comprising: an input unit configured to receive a choice of a cloth from a plurality of clothes available in a store; a body scanner configured to determine details of the user based on capturing an image or a video of the user; and a rendering unit configured to create a dummy user tailored to the details of the user and superimpose the selected cloth on the dummy user for display.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The system as claimed in claim 1, wherein the details of the user comprise height, Body Mass Index (BMI), circumference, and shape of the user.",
      },
      {
        num: 3,
        isIndependent: false,
        text: "The system as claimed in claim 1, wherein the body scanner comprises a 360-degree imaging camera configured to capture video of the user from multiple angles to generate a 3D volumetric model.",
      },
    ],
    legalEvents: [
      {
        date: "Nov 23, 2022",
        title: "Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "May 02, 2024",
        title: "Publication of US20240144357A1",
        type: "Publication",
      },
      {
        date: "Jun 10, 2025",
        title: "Patent Granted (US12327279B2)",
        type: "Grant",
      },
      {
        date: "Nov 23, 2042",
        title: "Anticipated Expiration",
        type: "Expiration",
      },
    ],
    descriptionSections: [
      {
        heading: "FIELD & BACKGROUND OF THE INVENTION",
        paragraphs: [
          "Online and in-store apparel shopping often suffers from high return rates because customers cannot accurately visualize how unstocked garments, different sizes, or alternate colorways will fit their specific body proportions.",
          "The present invention introduces an intelligent 3D body scanning and AR mannequin system that renders custom 3D avatars with superimposed apparel drape physics.",
        ],
      },
      {
        heading: "VOLUMETRIC 3D BODY SCANNING & AVATAR CREATION",
        paragraphs: [
          "The user interacts with a mobile app or store display (102). Upon selection of a garment, a 360-degree camera (202) feeds images to the body scanner (104).",
          "Dedicated modules calculate height (302), BMI (304), circumference (306), and body shape (308) to build a digital mannequin reflecting the user's exact measurements.",
        ],
      },
      {
        heading: "DUAL-MODE SMART MIRROR & DYNAMIC LED LIGHTING",
        paragraphs: [
          "In retail stores, the system powers a smart mirror-display device (404) that switches between standard reflection mode and AR display mode.",
          "Controlled LED arrays (504) and virtual light point controllers (506) adjust lighting temperature and shadows around the mirror to eliminate screen reflections and enhance garment depth.",
        ],
      },
    ],
  },
  US20220387639A1: {
    id: "US20220387639A1",
    patentNo: "US20220387639A1",
    grantPublicationNo: "US12415005B2",
    title: "Self sanitizing door handle with protective cover",
    region: "US",
    status: "Granted",
    abstract:
      "A self-sanitizing door handle assembly and kinetic power generation mechanism for sterilizing door surfaces between uses. The door handle comprises a hollow soft glass outer tube encasing a central support rod lined with high-efficiency UV-C LED arrays and mechanical interlocking shield connectors. When a user turns the door handle, an integrated spring, rail, and micro-turbine kinetic energy mechanism converts physical mechanical movement into electrical power, charging onboard lithium storage batteries. Upon release of the handle, the interlocking shield connectors enclose the UV-C LEDs during active sterilization cycles to prevent harmful ultraviolet exposure to humans. Tri-color LED indicators (Green/Yellow/Red) signal real-time sanitization progress, while an optional overhead camera captures user images for contact tracing.",
    inventors: [
      "Mirza Faizan",
      "Mirza Rizwan",
      "Maleeha Khan",
      "Imaan Moosa",
      "Inaya Sheikh",
      "Mahum Rana",
      "Laiba Mehmood",
      "Ayaan Mehmood",
      "Aamena Baig",
      "Ayesha Baig",
      "Deen Sheikh",
    ],
    filingDate: "Jun 4, 2021",
    publicationDate: "Dec 8, 2022",
    priorityDate: "Jun 4, 2021",
    applicationNumber: "US17/339,305",
    keywords: [
      "self sanitizing door handle",
      "UV-C LED sterilization",
      "soft glass hollow handle",
      "kinetic micro-turbine power generation",
      "interlocking UV protective shield",
      "tri-color LED status indicator",
      "contact tracing camera",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/e6/1d/34/14c49528d2319a/US20220387639A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20220387639A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/65/77/7b/f9791ae1348535/US20220387639A1-20221208-D00000.png",
    images: [
      {
        title: "FIG. 1 — Kinetic Power Generation Spring & Turbine Assembly",
        caption:
          "Self-powering kinetic mechanism showing spring (502), rail guide, micro-turbine (504), and energy harvesting generator.",
        url: "https://patentimages.storage.googleapis.com/65/77/7b/f9791ae1348535/US20220387639A1-20221208-D00000.png",
      },
      {
        title: "FIG. 2 — Self-Sanitizing Door Handle Component Overview",
        caption:
          "Exploded view of door handle assembly (100) detailing hollow soft glass tube (102), interlocking connectors (104), UV-C LEDs (106), central rod (108), and metallic base (110).",
        url: "https://patentimages.storage.googleapis.com/4d/2a/a0/db538c6efdce70/US20220387639A1-20221208-D00001.png",
      },
      {
        title: "FIG. 3 — Interlocking Shield Connector Detail",
        caption:
          "Detailed structural view of interlocking connector (200) contracting and expanding to shield human hands from UV-C radiation during active disinfection.",
        url: "https://patentimages.storage.googleapis.com/ba/f3/96/1e50bf2b61c650/US20220387639A1-20221208-D00002.png",
      },
      {
        title: "FIG. 4 — Central Support Rod & Multi-Sided UV-C LED Layout",
        caption:
          "Cross-section view (300) showing 4-sided UV-C LED placement along central core rod (108) inside hollow soft glass membrane (102).",
        url: "https://patentimages.storage.googleapis.com/da/25/13/ca97685f8ba4db/US20220387639A1-20221208-D00003.png",
      },
      {
        title: "FIG. 5 — Protective Cover Shield Mechanism in Active State",
        caption:
          "Active sanitization state diagram (400) showing protective cover connectors enclosing UV-C rays during closed circuit operation.",
        url: "https://patentimages.storage.googleapis.com/a3/86/b6/be91835d742650/US20220387639A1-20221208-D00004.png",
      },
      {
        title: "FIG. 6 — Self-Powered Spring & Rail Turbine Generator",
        caption:
          "Kinetic energy generation system (500) translating door handle depression into electrical power via spring compression (502) and turbine spin (504).",
        url: "https://patentimages.storage.googleapis.com/8e/23/b4/7f9a717e7950e1/US20220387639A1-20221208-D00005.png",
      },
      {
        title:
          "FIG. 7 — Tri-Color Status Indicator & Sanitization State Flowchart",
        caption:
          "Status light indicator (602) displaying Green (Sanitized/Ready), Yellow (In-Use Preparation), and Red (Disinfecting/Do Not Touch).",
        url: "https://patentimages.storage.googleapis.com/1a/00/a1/706155b500982c/US20220387639A1-20221208-D00006.png",
      },
    ],
    summaryHighlights: [
      "Hollow Soft Glass UV-C Core: Features an unbreakable soft glass membrane (102) housing UV-C LEDs (106) mounted along a central core rod (108) to eliminate bacteria and viruses.",
      "Kinetic Energy Micro-Turbine Generator: Harvests energy from physical door handle depression via a spring (502), rail guide, and micro-turbine (504), making the system 100% self-powered.",
      "Interlocking Protective Radiation Shield: Connectors (104) expand to enclose UV-C radiation inside a sealed protective cover during active sanitization, protecting human skin and eyes.",
      "Tri-Color Visual Status Indicator: Integrated LED indicator (602) communicates real-time state: Green (Sanitized & Ready), Yellow (Preparing/In-Use), and Red (Active Disinfection).",
    ],
    referenceNumerals: [
      { num: "100", label: "Self-Sanitizing Door Handle Assembly" },
      { num: "102", label: "Unbreakable Soft Glass Hollow Membrane" },
      { num: "104", label: "Interlocking Mechanical Protective Connectors" },
      { num: "106", label: "UV-C LED Germicidal Light Arrays" },
      { num: "108", label: "Central Aluminum / Core Support Rod" },
      { num: "110", label: "Metallic Mounting Base & Contact Tracing Camera" },
      { num: "200", label: "Interlocking Shield Mechanism Assembly" },
      { num: "300", label: "Multi-Sided UV-C Core Cross-Section" },
      { num: "400", label: "Sealed Sanitization Enclosure State" },
      { num: "500", label: "Kinetic Spring & Turbine Power Generator" },
      { num: "502", label: "Mechanical Compression Spring" },
      { num: "504", label: "Power Generating Micro-Turbine Unit" },
      { num: "602", label: "Tri-Color (Green/Yellow/Red) Status Indicator" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A self sanitizing door handle comprising: a soft glass hollow membrane; one or more connectors; a central rod; and a plurality of lights on said central rod inside said hollow membrane protectively covered by said one or more connectors in an active state of sanitization in said self sanitizing door handle.",
      },
      {
        num: 5,
        isIndependent: false,
        text: "The self sanitizing door handle as claimed in claim 1, further comprising a light indication unit configured to reflect a status of the plurality of lights inside said soft glass hollow membrane.",
      },
      {
        num: 6,
        isIndependent: false,
        text: "The self sanitizing door handle as claimed in claim 1, wherein said one or more connectors are interlocking connectors configured to act as a shield cover during a working state of said plurality of lights in said soft glass hollow membrane.",
      },
    ],
    legalEvents: [
      {
        date: "Jun 04, 2021",
        title: "Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "Dec 08, 2022",
        title: "Publication of US20220387639A1",
        type: "Publication",
      },
      {
        date: "Sep 16, 2025",
        title: "Patent Granted (US12415005B2)",
        type: "Grant",
      },
      {
        date: "Jun 04, 2041",
        title: "Anticipated Expiration",
        type: "Expiration",
      },
    ],
    descriptionSections: [
      {
        heading: "FIELD & BACKGROUND OF THE INVENTION",
        paragraphs: [
          "Door handles in public facilities (hospitals, schools, airports, office buildings) are high-touch surfaces that transmit pathogens rapidly between individuals.",
          "Conventional chemical wiping is labor-intensive and unsustainable. The present invention introduces a self-powered, UV-C germicidal door handle with a protective shield cover.",
        ],
      },
      {
        heading: "KINETIC ENERGY HARVESTING & UV-C DISINFECTION",
        paragraphs: [
          "Depressing the door handle compresses an internal spring (502) and drives a micro-turbine (504) along a precision rail, generating electricity stored in internal batteries.",
          "When released, the handle activates UV-C LED arrays (106) mounted on a central rod (108) inside an unbreakable soft glass membrane (102), destroying micro-organisms within seconds.",
        ],
      },
      {
        heading: "INTERLOCKING UV SHIELD & STATUS INDICATORS",
        paragraphs: [
          "Interlocking mechanical connectors (104) expand during sanitization to form an opaque shield cover over the glass handle, completely enclosing UV-C radiation to protect human skin.",
          "A tri-color LED status light (602) signals handle readiness: Green (safe to touch), Yellow (in transition), and Red (active UV-C sterilization cycle in progress).",
        ],
      },
    ],
  },
  US20230332468A1: {
    id: "US20230332468A1",
    patentNo: "US20230332468A1",
    grantPublicationNo: "US12404722B2",
    title: "Method and system for providing a smart ladder to a user",
    region: "US",
    status: "Granted",
    abstract:
      "An automated fall-prevention smart ladder system and self-rescue method for protecting climbers working at height. The smart ladder comprises step sensors embedded in ladder rungs/pedalboards, a micro-processor control unit, motorized articulation arms, and an extendable high-tensile safety net/trampoline mesh unit installed along the ladder frame. When a user steps above a predetermined height threshold (such as past the second rung), the processor automatically deploys the safety mesh unit, spreading outward like a folding hand fan around the ladder base to form a 360-degree protective landing net. If the climber slips or loses balance, the extended mesh catches the user and absorbs impact forces. Upon the user safely climbing back down past the height threshold, the system automatically retracts and folds the mesh neatly back against the ladder rails.",
    inventors: [
      "Mirza Faizan",
      "Shayaan Shaik",
      "Aqil Gudur",
      "Zashaan T. Shaik",
      "Gupil Mayari",
      "Omar Mohammed",
      "Suleman Khan Mohammed",
      "Mirza Rizwan",
      "Humna Fakeha Khan",
      "Zaynab Khan",
      "Mishaal Qureshi",
      "Abdullah Hasani",
    ],
    filingDate: "Apr 14, 2022",
    publicationDate: "Oct 19, 2023",
    priorityDate: "Apr 14, 2022",
    applicationNumber: "US17/720,606",
    keywords: [
      "smart safety ladder",
      "automated fall protection net",
      "extendable fan-mesh trampoline",
      "pedalboard rung step sensor",
      "height threshold safety deployment",
      "motorized arm frame deployment",
      "climber self-rescue system",
    ],
    pdfUrl:
      "https://patentimages.storage.googleapis.com/36/92/44/d79144f27fc2c6/US20230332468A1.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US20230332468A1",
    imageUrl:
      "https://patentimages.storage.googleapis.com/b5/b1/a3/6b8bb83354a360/US20230332468A1-20231019-D00000.png",
    images: [
      {
        title: "FIG. 1 — Smart Safety Net Deployment Mechanism",
        caption:
          "Fan-fold safety net mesh expanding radially outward like a hand fan from the ladder frame upon step detection.",
        url: "https://patentimages.storage.googleapis.com/b5/b1/a3/6b8bb83354a360/US20230332468A1-20231019-D00000.png",
      },
      {
        title: "FIG. 2 — Climber Hazard Environment Overview",
        caption:
          "Safety hazard environment (100) illustrating a user (102) climbing a ladder (104) and potential fall risks addressed by the smart ladder.",
        url: "https://patentimages.storage.googleapis.com/c9/6a/6c/36ccc7488fb755/US20230332468A1-20231019-D00001.png",
      },
      {
        title: "FIG. 3 — Smart Ladder System Hardware & Sensor Block Diagram",
        caption:
          "System block diagram (200) showing smart ladder (202), transceiver (204), processor (206), memory (208), and display unit (210).",
        url: "https://patentimages.storage.googleapis.com/62/5b/19/5e1ef57642a69b/US20230332468A1-20231019-D00002.png",
      },
      {
        title:
          "FIG. 4 — Automated Safety Mesh Activation & Retraction Process Flowchart",
        caption:
          "Operational flowchart (300) illustrating height threshold step detection, mesh fan deployment, fall protection, and automatic retraction.",
        url: "https://patentimages.storage.googleapis.com/75/47/7b/ae607b53e8bafb/US20230332468A1-20231019-D00003.png",
      },
    ],
    summaryHighlights: [
      "Automated Step Height Detection: Pressure and proximity sensors embedded in rungs detect when a climber ascends past a threshold height (e.g., step 2) to trigger safety mechanisms.",
      "Folding Fan Safety Net Deployment: Articulated motorized arm frames spread a high-strength trampoline or catch net radially outward like a folding hand fan around the ladder base.",
      "Impact Absorption & Self-Rescue: Provides a 360-degree impact-absorbing perimeter that catches falling workers, preventing ground collision and catastrophic injuries.",
      "Automatic Retraction & Stabilization: System automatically folds the mesh unit back against ladder rails when the user steps down, maintaining lateral ladder stability at all times.",
    ],
    referenceNumerals: [
      { num: "100", label: "Ladder Climbing Safety Environment" },
      { num: "102", label: "Climber / Worker" },
      { num: "104", label: "Standard / Smart Ladder Structure" },
      { num: "200", label: "Smart Rescue System Architecture" },
      { num: "202", label: "Smart Safety Ladder Assembly" },
      { num: "204", label: "Transceiver / Sensor Receiver Unit" },
      { num: "206", label: "System Micro-Processor Controller" },
      { num: "208", label: "Memory / Event Storage Module" },
      { num: "210", label: "Status Display & Alarm Unit" },
      { num: "300", label: "Safety Mesh Control Flowchart" },
      { num: "304", label: "Threshold Height Step Activation Step" },
      { num: "306", label: "Mesh Suspension / Release Step" },
      { num: "308", label: "Automatic Mesh Folding Step" },
    ],
    claims: [
      {
        num: 1,
        isIndependent: true,
        text: "A method for self-rescuing a user climbing a smart ladder, the method comprising: activating, by a processor, a mesh unit based on a detection of the user's step above a certain height from a pedalboard of the smart ladder, wherein the mesh unit is installed along at least one side of the smart ladder, and wherein the mesh unit is extended outwardly like a folding hand fan to form a secured circular net mesh configuration along the sides of the smart ladder; suspending, by the processor, the mesh unit based on a detection of the user's step at the pedalboard of the smart ladder; and folding, by the processor, the mesh unit back along the at least one side of the smart ladder.",
      },
      {
        num: 2,
        isIndependent: false,
        text: "The method as claimed in claim 1, wherein activating the mesh unit occurs when the user crosses at least a second step from the base of the smart ladder.",
      },
      {
        num: 7,
        isIndependent: true,
        text: "A system for self-rescuing a user climbing a smart ladder, the system comprising: a processor configured to: activate a mesh unit based on a detection of the user's step above a certain height from a pedalboard of the smart ladder, wherein the mesh unit is installed along at least one side of the ladder, and wherein the mesh unit is extended outwardly like a folding hand fan to form a secured circular net mesh configuration along the sides of the smart ladder.",
      },
    ],
    legalEvents: [
      {
        date: "Apr 14, 2022",
        title: "Application filed with USPTO",
        type: "Filing",
      },
      {
        date: "Oct 19, 2023",
        title: "Publication of US20230332468A1",
        type: "Publication",
      },
      {
        date: "Sep 02, 2025",
        title: "Patent Granted (US12404722B2)",
        type: "Grant",
      },
      {
        date: "Apr 14, 2042",
        title: "Anticipated Expiration",
        type: "Expiration",
      },
    ],
    descriptionSections: [
      {
        heading: "FIELD & BACKGROUND OF THE INVENTION",
        paragraphs: [
          "Ladders are widely used in construction, maintenance, and domestic settings, but working at heights presents severe risks of traumatic fall injuries, fractures, and spinal trauma.",
          "The present invention provides an intelligent smart ladder system equipped with automated sensor-triggered safety nets that deploy like a hand fan to catch falling workers.",
        ],
      },
      {
        heading: "STEP HEIGHT SENSING & FAN-FOLD NET DEPLOYMENT",
        paragraphs: [
          "As a worker climbs past a safety height threshold (e.g. crossing the second rung), sensors notify the central processor (206) to activate the mesh unit.",
          "Motorized arm frames expand a high-tensile circular catching net/trampoline mesh radially outward around the ladder perimeter, creating a cushioned landing zone.",
        ],
      },
      {
        heading: "AUTOMATIC RETraction & LATERAL STABILITY",
        paragraphs: [
          "When the climber descends safely back to the pedalboard base, the processor automatically retracts and folds the net mesh flush against the ladder side rails.",
          "The articulation arm geometry provides precise lateral stability to the ladder structure in both folded and fully expanded net configurations.",
        ],
      },
    ],
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
