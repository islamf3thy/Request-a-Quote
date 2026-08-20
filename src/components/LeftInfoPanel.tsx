import React from 'react';
import { 
  Clock, 
  ShieldCheck, 
  FileText, 
  Video, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Lock 
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface LeftInfoPanelProps {
  lang: Language;
}

export const LeftInfoPanel: React.FC<LeftInfoPanelProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const featureIcons = [
    <Clock className="w-5 h-5 text-[#8B5CF6] shrink-0" key="clock" />,
    <Lock className="w-5 h-5 text-[#8B5CF6] shrink-0" key="lock" />,
    <FileText className="w-5 h-5 text-[#8B5CF6] shrink-0" key="file" />,
    <Video className="w-5 h-5 text-[#8B5CF6] shrink-0" key="video" />,
  ];

  return (
    <div className="relative flex flex-col justify-between p-7 sm:p-9 lg:p-11 bg-[#111827] text-white overflow-hidden rounded-t-[22px] lg:rounded-t-none lg:rounded-s-[22px]">
      {/* Background Decorative Tech Gradients */}
      <div 
        className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#6842FF]/20 blur-[90px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#8B5CF6]/15 blur-[90px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 bg-[radial-gradient(#6842FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Content */}
      <div className="relative z-10 space-y-7">
        {/* Brand / Category Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6842FF]/15 border border-[#6842FF]/30 text-xs font-semibold text-[#8B5CF6] tracking-wide">
          <Award className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span>{t.hero.tag}</span>
        </div>

        {/* Heading & Subtitle */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight font-display">
            {t.hero.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed max-w-lg">
            {t.hero.description}
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-4 pt-2">
          {t.hero.features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-[#6842FF]/20 border border-[#6842FF]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                {featureIcons[idx % featureIcons.length]}
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-semibold text-white tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-400 leading-normal">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Trust Badges */}
        <div className="pt-2 border-t border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.hero.trustBadges.iso}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.hero.trustBadges.partners}</span>
          </div>
        </div>
      </div>

      {/* Footer / Quick Contact Information (Synced with theme_option) */}
      <div className="relative z-10 mt-8 pt-6 border-t border-white/10 space-y-2.5 text-xs text-gray-400">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
          {t.hero.quickContact.title}
        </p>

        <a 
          href={`mailto:${t.hero.quickContact.email}`}
          className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors group"
        >
          <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#6842FF]/30 transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#8B5CF6]" />
          </div>
          <span className="truncate">{t.hero.quickContact.email}</span>
        </a>

        <a 
          href={`tel:${t.hero.quickContact.phone.replace(/\s+/g, '')}`}
          className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors group"
          dir="ltr"
        >
          <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#6842FF]/30 transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#8B5CF6]" />
          </div>
          <span className="font-mono">{t.hero.quickContact.phone}</span>
        </a>

        <div className="flex items-start gap-2.5 text-gray-400">
          <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
          </div>
          <span className="leading-tight">{t.hero.quickContact.location}</span>
        </div>
      </div>
    </div>
  );
};
