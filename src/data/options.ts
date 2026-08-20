export interface CountryOption {
  code: string;
  nameEn: string;
  nameAr: string;
  dialCode: string;
  flag: string;
}

export const COUNTRIES: CountryOption[] = [
  { code: 'SA', nameEn: 'Saudi Arabia', nameAr: 'المملكة العربية السعودية', dialCode: '+966', flag: '🇸🇦' },
  { code: 'AE', nameEn: 'United Arab Emirates', nameAr: 'الإمارات العربية المتحدة', dialCode: '+971', flag: '🇦🇪' },
  { code: 'EG', nameEn: 'Egypt', nameAr: 'مصر', dialCode: '+20', flag: '🇪🇬' },
  { code: 'QA', nameEn: 'Qatar', nameAr: 'قطر', dialCode: '+974', flag: '🇶🇦' },
  { code: 'KW', nameEn: 'Kuwait', nameAr: 'الكويت', dialCode: '+965', flag: '🇰🇼' },
  { code: 'BH', nameEn: 'Bahrain', nameAr: 'البحرين', dialCode: '+973', flag: '🇧🇭' },
  { code: 'OM', nameEn: 'Oman', nameAr: 'عُمان', dialCode: '+968', flag: '🇴🇲' },
  { code: 'JO', nameEn: 'Jordan', nameAr: 'الأردن', dialCode: '+962', flag: '🇯🇴' },
  { code: 'GB', nameEn: 'United Kingdom', nameAr: 'المملكة المتحدة', dialCode: '+44', flag: '🇬🇧' },
  { code: 'US', nameEn: 'United States', nameAr: 'الولايات المتحدة', dialCode: '+1', flag: '🇺🇸' },
];

export const TIMELINES = [
  { id: 'immediate', labelEn: 'Immediate (< 1 Month)', labelAr: 'فوري (أقل من شهر)' },
  { id: '1-3-months', labelEn: '1 – 3 Months', labelAr: '1 – 3 أشهر' },
  { id: '3-6-months', labelEn: '3 – 6 Months', labelAr: '3 – 6 أشهر' },
  { id: 'flexible', labelEn: 'Flexible / Q3-Q4 Planning', labelAr: 'مرن / تخطيط مستقبلي' },
];

export const BUDGET_RANGES = [
  { id: 'under-25k', value: '< $25,000', labelEn: 'Under $25,000 (SAR ~95,000)', labelAr: 'أقل من 25,000 دولار (~95,000 ر.س)' },
  { id: '25k-50k', value: '$25,000 - $50,000', labelEn: '$25,000 - $50,000 (SAR ~190,000)', labelAr: '25,000 - 50,000 دولار (~190,000 ر.س)' },
  { id: '50k-150k', value: '$50,000 - $150,000', labelEn: '$50,000 - $150,000 (Enterprise Mid-tier)', labelAr: '50,000 - 150,000 دولار (مؤسسي متوسط)' },
  { id: '150k-500k', value: '$150,000 - $500,000', labelEn: '$150,000 - $500,000 (Major Transformation)', labelAr: '150,000 - 500,000 دولار (تحول رقمي شامل)' },
  { id: 'above-500k', value: '> $500,000', labelEn: '$500,000+ (Megaproject / Strategic)', labelAr: 'أكثر من 500,000 دولار (مشاريع استراتيجية كبرى)' },
  { id: 'undetermined', value: 'Undetermined', labelEn: 'To be determined based on technical proposal', labelAr: 'سيتم تحديده بناءً على العرض الفني' },
];
