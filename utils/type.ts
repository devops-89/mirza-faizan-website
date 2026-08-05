import { StaticImageData } from "next/image";

export interface ProjectItem {
  id: string;
  patentId?: string;
  patentNo?: string;
  title: string;
  image?: StaticImageData;
  height?: { xs: number; sm?: number; md: number };
  category?: string;
  description?: string;
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
  region: "US" | "South Africa" | "Pending" | "International";
  status: "Granted" | "Pending";
  description?: string;
  image?: StaticImageData | string;
}

export interface PatentImage {
  title: string;
  caption: string;
  url: string;
}

export interface PatentClaim {
  num: number;
  isIndependent: boolean;
  text: string;
}

export interface PatentClassification {
  code: string;
  description: string;
}

export interface PatentLegalEvent {
  date: string;
  title: string;
  type: string;
}

export interface PatentReferenceNumeral {
  num: string;
  label: string;
}

export interface PatentDescriptionSection {
  heading: string;
  paragraphs: string[];
}

export interface PatentDetailData extends PatentItem {
  abstract: string;
  inventors: string[];
  filingDate: string;
  publicationDate: string;
  priorityDate?: string;
  applicationNumber?: string;
  grantPublicationNo?: string;
  keywords?: string[];
  pdfUrl?: string;
  googlePatentsUrl?: string;
  imageUrl?: string;
  images?: PatentImage[];
  claims?: PatentClaim[];
  classifications?: PatentClassification[];
  legalEvents?: PatentLegalEvent[];
  referenceNumerals?: PatentReferenceNumeral[];
  descriptionSections?: PatentDescriptionSection[];
  summaryHighlights?: string[];
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

export interface HeaderLinkItem {
  label: string;
  url: string;
}
