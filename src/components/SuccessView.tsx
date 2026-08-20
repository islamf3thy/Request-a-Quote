import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Copy, 
  Check, 
  Clock, 
  Mail, 
  Printer, 
  RotateCcw, 
  ShieldCheck, 
  Building2, 
  User, 
  ArrowRight,
  FileCheck2
} from 'lucide-react';
import { QuoteFormData, Language, SubmissionResponse } from '../types';
import { TRANSLATIONS } from '../translations';

interface SuccessViewProps {
  formData: QuoteFormData;
  submission: SubmissionResponse;
  onReset: () => void;
  lang: Language;
}

export const SuccessView: React.FC<SuccessViewProps> = ({
  formData,
  submission,
  onReset,
  lang,
}) => {
  const t = TRANSLATIONS[lang];
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(submission.referenceNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 sm:space-y-7 animate-fadeIn">
      {/* Top Success Badge & Heading */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center ring-8 ring-emerald-50/50 shadow-md">
          <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.5]" />
        </div>

        <div className="space-y-1">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 tracking-wide">
            {t.form.success.badge}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-display">
            {t.form.success.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
            {t.form.success.description}
          </p>
        </div>
      </div>

      {/* Reference Card with Copy Action */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-[#111827] text-white shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="text-center sm:text-start">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              {t.form.success.rfqNumber}
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-[#8B5CF6]">
                {submission.referenceNumber}
              </span>
              <button
                type="button"
                onClick={handleCopyId}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                title="Copy Reference ID"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#6842FF]/20 border border-[#6842FF]/30 px-3.5 py-2 rounded-xl text-xs">
            <Clock className="w-4 h-4 text-[#8B5CF6] shrink-0" />
            <div>
              <span className="text-gray-300 block text-[10px] uppercase font-semibold">
                {t.form.success.expectedResponse}
              </span>
              <span className="font-bold text-white">
                {t.form.success.expectedTime}
              </span>
            </div>
          </div>
        </div>

        {/* Dispatch Confirmation */}
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <Mail className="w-4 h-4 text-[#8B5CF6] shrink-0" />
          <span>{t.form.success.sentTo}</span>
          <span className="font-mono text-white font-semibold underline">{formData.email}</span>
        </div>
      </div>

      {/* Next Steps Roadmap */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-3.5">
        <h3 className="text-xs sm:text-sm font-bold text-gray-900 flex items-center gap-2">
          <FileCheck2 className="w-4 h-4 text-[#6842FF]" />
          <span>{t.form.success.nextStepsTitle}</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {t.form.success.steps.map((stepText, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-gray-50 text-xs text-gray-700">
              <span className="w-5 h-5 rounded-full bg-[#6842FF]/10 text-[#6842FF] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="leading-snug">{stepText}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={handlePrint}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Printer className="w-4 h-4 text-gray-500" />
          <span>{t.form.success.btnPrint}</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#6842FF] to-[#8B5CF6] text-white text-xs font-bold shadow-md shadow-[#6842FF]/20 hover:opacity-95 transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{t.form.success.btnNew}</span>
        </button>
      </div>
    </div>
  );
};
