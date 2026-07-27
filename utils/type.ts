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
