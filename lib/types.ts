export type ProductCategory =
  | "All"
  | "Water Purifiers"
  | "Water Dispensers"
  | "Water Coolers"
  | "RO Treatment Plants"
  | "Water Treatment Plants"
  | "STP / ETP Plants"
  | "Commercial RO"
  | "Industrial Treatment"
  | "Filtration"
  | "Water Softening"
  | "Other Solutions";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  fullDescription: string;
  image: string;
  images?: string[];
  featured?: boolean;
  idealFor: string[];
  features: string[];
  specifications: Record<string, string>;
  whatsAppMessage?: string;
  badge?: string;
  editionBadge?: string;
  bulletSpecs?: string[];
}

export interface SolutionCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  targetApplications: string[];
  keyChallenges: string[];
  treatmentMethods: string[];
  recommendedSystems: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  fullName: string;
  mobileNumber: string;
  email?: string;
  companyName?: string;
  productOrSolution: string;
  enquiryType: string;
  location?: string;
  message: string;
}
