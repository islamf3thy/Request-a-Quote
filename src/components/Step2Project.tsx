import React from 'react';
import { Globe, MapPin, Calendar, FileCode, AlertCircle } from 'lucide-react';
import { QuoteFormData, Language, ValidationErrorMap } from '../types';
import { TRANSLATIONS } from '../translations';
import { COUNTRIES, TIMELINES } from '../data/options';

interface Step2ProjectProps {
  formData: QuoteFormData;
  onChange: (field: keyof QuoteFormData, value: any) => void;
  errors: ValidationErrorMap;
  lang: Language;
}

export const Step2Project: React.FC<Step2ProjectProps> = ({
  formData,
  onChange,
  errors,
  lang,
}) => {
  const t = TRANSLATIONS[lang];
  const maxReqLength = 1000;
  const currentReqLength = formData.requirements.length;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Info */}
      <div className="space-y-1">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
          {t.form.step2.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          {t.form.step2.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Country */}
        <div className="sm:col-span-1">
          <label 
            htmlFor="quote_country" 
            className="block text-xs font-semibold text-gray-700 mb-1.5"
          >
            {t.form.step2.country} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-gray-400">
              <Globe className="w-4 h-4" />
            </div>
            <select
              id="quote_country"
              name="country"
              required
              value={formData.country}
              onChange={(e) => onChange('country', e.target.value)}
              aria-invalid={!!errors.country}
              aria-describedby={errors.country ? 'error_country' : undefined}
              className={`w-full ps-10 pe-4 py-2.5 sm:py-3 bg-white text-sm text-gray-900 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 cursor-pointer ${
                errors.country
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/20'
                  : 'border-gray-200 focus:border-[#6842FF] focus:ring-[#6842FF]/20 hover:border-gray-300'
              }`}
            >
              <option value="">{t.form.step2.selectCountry}</option>
              {COUNTRIES.map((c) => (
                <option key={c.code} value={lang === 'ar' ? c.nameAr : c.nameEn}>
                  {c.flag} {lang === 'ar' ? c.nameAr : c.nameEn}
                </option>
              ))}
            </select>
          </div>
          {errors.country && (
            <p id="error_country" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.country}</span>
            </p>
          )}
        </div>

        {/* City */}
        <div className="sm:col-span-1">
          <label 
            htmlFor="quote_city" 
            className="block text-xs font-semibold text-gray-700 mb-1.5"
          >
            {t.form.step2.city} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-gray-400">
              <MapPin className="w-4 h-4" />
            </div>
            <input
              id="quote_city"
              name="city"
              type="text"
              required
              value={formData.city}
              onChange={(e) => onChange('city', e.target.value)}
              placeholder={t.form.step2.cityPlaceholder}
              aria-invalid={!!errors.city}
              aria-describedby={errors.city ? 'error_city' : undefined}
              className={`w-full ps-10 pe-4 py-2.5 sm:py-3 bg-white text-sm text-gray-900 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 ${
                errors.city
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/20'
                  : 'border-gray-200 focus:border-[#6842FF] focus:ring-[#6842FF]/20 hover:border-gray-300'
              }`}
            />
          </div>
          {errors.city && (
            <p id="error_city" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.city}</span>
            </p>
          )}
        </div>

        {/* Expected Timeline */}
        <div className="sm:col-span-2">
          <label 
            htmlFor="quote_timeline" 
            className="block text-xs font-semibold text-gray-700 mb-2"
          >
            {t.form.step2.timeline} <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {TIMELINES.map((timeOption) => {
              const isSelected = formData.timeline === timeOption.id;
              return (
                <button
                  key={timeOption.id}
                  type="button"
                  onClick={() => onChange('timeline', timeOption.id)}
                  className={`p-3 rounded-xl border text-xs font-semibold transition-all duration-200 text-center flex flex-col items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#6842FF]/20 ${
                    isSelected
                      ? 'border-[#6842FF] bg-[#6842FF]/5 text-[#6842FF] ring-2 ring-[#6842FF]/20 shadow-xs'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50/50'
                  }`}
                >
                  <Calendar className={`w-3.5 h-3.5 ${isSelected ? 'text-[#6842FF]' : 'text-gray-400'}`} />
                  <span>{lang === 'ar' ? timeOption.labelAr : timeOption.labelEn}</span>
                </button>
              );
            })}
          </div>
          {/* Hidden input for standard form submission fallback */}
          <input type="hidden" name="timeline" value={formData.timeline} />
          {errors.timeline && (
            <p id="error_timeline" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.timeline}</span>
            </p>
          )}
        </div>

        {/* Project Requirements Textarea */}
        <div className="sm:col-span-2">
          <div className="flex items-center justify-between mb-1.5">
            <label 
              htmlFor="quote_requirements" 
              className="block text-xs font-semibold text-gray-700"
            >
              {t.form.step2.requirements} <span className="text-red-500">*</span>
            </label>
            <span className={`text-[11px] font-mono font-medium ${
              currentReqLength > maxReqLength - 50 ? 'text-amber-600' : 'text-gray-400'
            }`}>
              {currentReqLength} / {maxReqLength} {t.form.step2.charCount}
            </span>
          </div>

          <div className="relative">
            <textarea
              id="quote_requirements"
              name="requirements"
              rows={4}
              maxLength={maxReqLength}
              required
              value={formData.requirements}
              onChange={(e) => onChange('requirements', e.target.value)}
              placeholder={t.form.step2.requirementsPlaceholder}
              aria-invalid={!!errors.requirements}
              aria-describedby={errors.requirements ? 'error_requirements' : 'help_requirements'}
              className={`w-full p-3.5 bg-white text-sm text-gray-900 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 resize-y min-h-[110px] leading-relaxed ${
                errors.requirements
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/20'
                  : 'border-gray-200 focus:border-[#6842FF] focus:ring-[#6842FF]/20 hover:border-gray-300'
              }`}
            />
          </div>

          {errors.requirements ? (
            <p id="error_requirements" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.requirements}</span>
            </p>
          ) : (
            <p id="help_requirements" className="mt-1 text-[11px] text-gray-400">
              {t.form.step2.requirementsHelp}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
