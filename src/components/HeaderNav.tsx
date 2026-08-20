import React from 'react';
import { 
  Languages, 
  Code2, 
  Sparkles, 
  RotateCcw, 
  Layers, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface HeaderNavProps {
  lang: Language;
  onToggleLang: () => void;
  onAutoFill: () => void;
  onReset: () => void;
  onOpenCodeModal: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  lang,
  onToggleLang,
  onAutoFill,
  onReset,
  onOpenCodeModal,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200/80 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Brand Logo & Portal Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6842FF] to-[#8B5CF6] text-white flex items-center justify-center shadow-md shadow-[#6842FF]/20">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm sm:text-base text-gray-900 tracking-tight font-display">
                {t.meta.siteName}
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#6842FF]/10 text-[#6842FF]">
                Botble CMS
              </span>
            </div>
            <p className="text-[11px] text-gray-500 hidden sm:block">
              {t.meta.portalTitle}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Auto-fill demo button for testing */}
          <button
            type="button"
            onClick={onAutoFill}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#6842FF] bg-[#6842FF]/10 hover:bg-[#6842FF]/15 transition-colors"
            title="Auto-fill with sample RFP data"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#6842FF]" />
            <span className="hidden md:inline">{t.form.buttons.autoFill}</span>
            <span className="md:hidden">Demo</span>
          </button>

          {/* Botble & Laravel Code Modal Trigger */}
          <button
            type="button"
            onClick={onOpenCodeModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
            title="View & Export Botble CMS Blade, SCSS & Laravel Code"
          >
            <Code2 className="w-3.5 h-3.5 text-gray-600" />
            <span className="hidden sm:inline">{t.form.buttons.codeExport}</span>
          </button>

          {/* Language Toggle (EN / AR) */}
          <button
            type="button"
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-gray-900 bg-white border border-gray-300 hover:border-gray-400 shadow-2xs transition-all"
            aria-label="Toggle Language and Direction"
          >
            <Languages className="w-3.5 h-3.5 text-[#6842FF]" />
            <span>{t.meta.switchLang}</span>
          </button>

          {/* Reset form button */}
          <button
            type="button"
            onClick={onReset}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            title={t.form.buttons.reset}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
