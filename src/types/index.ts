export interface Service {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroSubtitle: string;
  intro: string;
  benefits: string[];
  processSteps: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedServices: string[];
}

export interface Location {
  area: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  landmarks: string[];
  nearbyAreas: string[];
  services: string[];
  testimonial: { quote: string; name: string; area: string };
}

export interface Testimonial {
  quote: string;
  name: string;
  area: string;
  rating: number;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceArea: string;
  serviceNeeded: string;
  description: string;
  hearAboutUs?: string;
}
