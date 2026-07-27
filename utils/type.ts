export interface ProjectItem {
  id: string;
  title: string;
  image: string;
  height: { xs: number; sm?: number; md: number };
}

export interface RecognitionLogo {
  id: string;
  name: string;
  image: string;
}

export interface ExperienceItem {
  role: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  title: string;
  location: string;
  daysAgo: string;
  quote: string;
}

export interface PatentItem {
  id: string;
  patentNo: string;
  title: string;
  region: "US" | "South Africa" | "Pending";
  status: "Granted" | "Pending";
}

export interface AboutInfo {
  name: string;
  designation: string;
  paragraphs: string[];
}

export interface CounterItem {
  value: string;
  unit: string;
  label: string;
}

export interface HeroInfo {
  greeting: string;
  meetTitle: string;
  nameTitle: string;
  subtitle: string;
}

export interface PatentStatCard {
  num: string;
  label: string;
}

export interface PatentHeroInfo {
  title: string;
  subtitle: string;
  description: string;
  stats: PatentStatCard[];
}

export interface PatentSectionMetadata {
  id: "US" | "SA" | "PENDING";
  title: string;
  subtitle: string;
}

export interface SocialLinkItem {
  name: string;
  url: string;
  type: "facebook" | "x" | "instagram" | "linkedin" | "google" | "youtube";
}
