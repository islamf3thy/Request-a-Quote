import React from 'react';
import { User, Building2, Mail, Phone, Briefcase, AlertCircle, CheckCircle2 } from 'lucide-react';
import { QuoteFormData, Language, ValidationErrorMap } from '../types';
import { TRANSLATIONS } from '../translations';
import { COUNTRIES } from '../data/options';

interface Step1ContactProps {
  formData: QuoteFormData;
  onChange: (field: keyof QuoteFormData, value: any) => void;
  errors: ValidationErrorMap;
  lang: Language;
}

export const Step1Contact: React.FC<Step1ContactProps> = ({
  formData,
  onChange,
  errors,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Info */}
      <div className="space-y-1">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
          {t.form.step1.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          {t.form.step1.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="sm:col-span-1">
          <label 
            htmlFor="quote_full_name" 
            className="block text-xs font-semibold text-gray-700 mb-1.5"
          >
            {t.form.step1.fullName} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-gray-400">
              <User className="w-4 h-4" />
            </div>
            <input
              id="quote_full_name"
              name="name"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => onChange('fullName', e.target.value)}
              placeholder={t.form.step1.fullNamePlaceholder}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? 'error_full_name' : undefined}
              className={`w-full ps-10 pe-4 py-2.5 sm:py-3 bg-white text-sm text-gray-900 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/20'
                  : formData.fullName.length >= 3
                  ? 'border-gray-300 focus:border-[#6842FF] focus:ring-[#6842FF]/20 hover:border-gray-400'
                  : 'border-gray-200 focus:border-[#6842FF] focus:ring-[#6842FF]/20 hover:border-gray-300'
              }`}
            />
            {formData.fullName.length >= 3 && !errors.fullName && (
              <div className="absolute inset-y-0 end-0 pe-3 flex items-center pointer-events-none text-emerald-500">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            )}
          </div>
          {errors.fullName && (
            <p id="error_full_name" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Company Name */}
        <div className="sm:col-span-1">
          <label 
            htmlFor="quote_company_name" 
            className="block text-xs font-semibold text-gray-700 mb-1.5"
          >
            {t.form.step1.companyName} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-gray-400">
              <Building2 className="w-4 h-4" />
            </div>
            <input
              id="quote_company_name"
              name="company"
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => onChange('companyName', e.target.value)}
              placeholder={t.form.step1.companyNamePlaceholder}
              aria-invalid={!!errors.companyName}
              aria-describedby={errors.companyName ? 'error_company_name' : undefined}
              className={`w-full ps-10 pe-4 py-2.5 sm:py-3 bg-white text-sm text-gray-900 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 ${
                errors.companyName
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/20'
                  : 'border-gray-200 focus:border-[#6842FF] focus:ring-[#6842FF]/20 hover:border-gray-300'
              }`}
            />
          </div>
          {errors.companyName && (
            <p id="error_company_name" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.companyName}</span>
            </p>
          )}
        </div>

        {/* Business Email */}
        <div className="sm:col-span-2">
          <label 
            htmlFor="quote_email" 
            className="block text-xs font-semibold text-gray-700 mb-1.5"
          >
            {t.form.step1.email} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-gray-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              id="quote_email"
              name="email"
              type="email"
              required
              dir="ltr"
              value={formData.email}
              onChange={(e) => onChange('email', e.target.value)}
              placeholder={t.form.step1.emailPlaceholder}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'error_email' : 'help_email'}
              className={`w-full ps-10 pe-4 py-2.5 sm:py-3 bg-white text-sm text-gray-900 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/20'
                  : 'border-gray-200 focus:border-[#6842FF] focus:ring-[#6842FF]/20 hover:border-gray-300'
              }`}
            />
          </div>
          {errors.email ? (
            <p id="error_email" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          ) : (
            <p id="help_email" className="mt-1 text-[11px] text-gray-400">
              {t.form.step1.emailHelp}
            </p>
          )}
        </div>

        {/* Phone with Country Code Select */}
        <div className="sm:col-span-1">
          <label 
            htmlFor="quote_phone" 
            className="block text-xs font-semibold text-gray-700 mb-1.5"
          >
            {t.form.step1.phone} <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            {/* Country Dial Code Selector */}
            <div className="relative shrink-0 w-28 sm:w-32">
              <select
                id="quote_phone_code"
                name="phone_country_code"
                value={formData.phoneCountryCode}
                onChange={(e) => onChange('phoneCountryCode', e.target.value)}
                className="w-full h-full py-2.5 px-2.5 bg-gray-50 border border-gray-200 text-xs sm:text-sm font-mono text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6842FF]/20 focus:border-[#6842FF] cursor-pointer"
                dir="ltr"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.dialCode}>
                    {c.flag} {c.dialCode}
                  </option>
                ))}
              </select>
            </div>

            {/* Phone Number Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none text-gray-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                id="quote_phone"
                name="phone"
                type="tel"
                required
                dir="ltr"
                value={formData.phone}
                onChange={(e) => onChange('phone', e.target.value.replace(/[^\d\s-]/g, ''))}
                placeholder={t.form.step1.phonePlaceholder}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'error_phone' : undefined}
                className={`w-full ps-9 pe-3 py-2.5 sm:py-3 bg-white text-sm font-mono text-gray-900 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/20'
                    : 'border-gray-200 focus:border-[#6842FF] focus:ring-[#6842FF]/20 hover:border-gray-300'
                }`}
              />
            </div>
          </div>
          {errors.phone && (
            <p id="error_phone" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Job Title */}
        <div className="sm:col-span-1">
          <label 
            htmlFor="quote_job_title" 
            className="block text-xs font-semibold text-gray-700 mb-1.5"
          >
            {t.form.step1.jobTitle} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-gray-400">
              <Briefcase className="w-4 h-4" />
            </div>
            <input
              id="quote_job_title"
              name="job_title"
              type="text"
              required
              value={formData.jobTitle}
              onChange={(e) => onChange('jobTitle', e.target.value)}
              placeholder={t.form.step1.jobTitlePlaceholder}
              aria-invalid={!!errors.jobTitle}
              aria-describedby={errors.jobTitle ? 'error_job_title' : undefined}
              className={`w-full ps-10 pe-4 py-2.5 sm:py-3 bg-white text-sm text-gray-900 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 ${
                errors.jobTitle
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/20'
                  : 'border-gray-200 focus:border-[#6842FF] focus:ring-[#6842FF]/20 hover:border-gray-300'
              }`}
            />
          </div>
          {errors.jobTitle && (
            <p id="error_job_title" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.jobTitle}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
