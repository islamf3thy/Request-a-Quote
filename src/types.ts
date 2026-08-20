export type Language = 'en' | 'ar';

export interface ServiceItem {
  id: string;
  dbValue: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  iconName: 'Server' | 'ShieldCheck' | 'Cpu' | 'Network' | 'Headphones' | 'Layers';
  categoryEn: string;
  categoryAr: string;
  popular?: boolean;
}

export interface AttachedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  formattedSize: string;
}

export interface QuoteFormData {
  // Step 1: Contact Details
  fullName: string;
  companyName: string;
  email: string;
  phoneCountryCode: string;
  phone: string;
  jobTitle: string;

  // Step 2: Project Information
  country: string;
  city: string;
  timeline: string;
  requirements: string;

  // Step 3: Services & Budget
  services: string[]; // List of dbValues
  budget: string;

  // Step 4: Attachments & Review
  attachments: AttachedFile[];
  agreeToPrivacy: boolean;
}

export interface ValidationErrorMap {
  [key: string]: string;
}

export interface SubmissionResponse {
  referenceNumber: string;
  submittedAt: string;
  estimatedResponseHours: number;
  contactEmail: string;
}
