import React from 'react';
import { 
  Server, 
  ShieldCheck, 
  Cpu, 
  Network, 
  Headphones, 
  Layers, 
  Check, 
  DollarSign, 
  AlertCircle, 
  Sparkles 
} from 'lucide-react';
import { QuoteFormData, Language, ValidationErrorMap, ServiceItem } from '../types';
import { TRANSLATIONS } from '../translations';
import { SERVICES_LIST } from '../data/services';
import { BUDGET_RANGES } from '../data/options';

interface Step3ServicesProps {
  formData: QuoteFormData;
  onChange: (field: keyof QuoteFormData, value: any) => void;
  errors: ValidationErrorMap;
  lang: Language;
}

export const Step3Services: React.FC<Step3ServicesProps> = ({
  formData,
  onChange,
  errors,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  const getServiceIcon = (iconName: ServiceItem['iconName']) => {
    const props = { className: 'w-5 h-5 transition-transform duration-200 group-hover:scale-110' };
    switch (iconName) {
      case 'Server':
        return <Server {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Network':
        return <Network {...props} />;
      case 'Headphones':
        return <Headphones {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      default:
        return <Server {...props} />;
    }
  };

  const handleToggleService = (dbValue: string) => {
    const current = formData.services || [];
    const exists = current.includes(dbValue);
    if (exists) {
      onChange('services', current.filter((item) => item !== dbValue));
    } else {
      onChange('services', [...current, dbValue]);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Info */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            {t.form.step3.title}
          </h2>
          {formData.services.length > 0 && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#6842FF]/10 text-[#6842FF]">
              {formData.services.length} {t.form.step3.selectedCount}
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-gray-500">
          {t.form.step3.subtitle}
        </p>
      </div>

      {/* Services Selection Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-semibold text-gray-700">
            {t.form.step3.servicesHeading} <span className="text-red-500">*</span>
          </label>
          <span className="text-[11px] text-gray-400">
            {t.form.step3.servicesHint}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5" role="group" aria-label="Services Selection">
          {SERVICES_LIST.map((service) => {
            const isSelected = formData.services.includes(service.dbValue);
            const serviceName = lang === 'ar' ? service.nameAr : service.nameEn;
            const serviceDesc = lang === 'ar' ? service.descAr : service.descEn;

            return (
              <div
                key={service.id}
                onClick={() => handleToggleService(service.dbValue)}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    handleToggleService(service.dbValue);
                  }
                }}
                tabIndex={0}
                role="checkbox"
                aria-checked={isSelected}
                className={`group relative p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6842FF] ${
                  isSelected
                    ? 'border-[#6842FF] bg-[#6842FF]/[0.04] shadow-sm shadow-[#6842FF]/10'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50'
                }`}
              >
                {/* Real hidden checkbox for native accessibility and fallback form submission */}
                <input
                  type="checkbox"
                  name="services[]"
                  value={service.dbValue}
                  checked={isSelected}
                  onChange={() => {}}
                  className="sr-only"
                  aria-hidden="true"
                  tabIndex={-1}
                />

                <div className="flex items-start gap-3.5">
                  {/* Icon Box */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#6842FF] text-white shadow-xs'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-[#6842FF]/10 group-hover:text-[#6842FF]'
                    }`}
                  >
                    {getServiceIcon(service.iconName)}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1 flex-1 min-w-0 pe-6">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className={`text-xs sm:text-sm font-bold leading-snug transition-colors ${
                        isSelected ? 'text-[#6842FF]' : 'text-gray-900 group-hover:text-gray-900'
                      }`}>
                        {serviceName}
                      </h3>
                      {service.popular && (
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-800 shrink-0">
                          <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                          {lang === 'ar' ? 'الأكثر طلباً' : 'Popular'}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2">
                      {serviceDesc}
                    </p>
                  </div>
                </div>

                {/* Top-end Checkbox Indicator */}
                <div
                  className={`absolute top-4 end-4 w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                    isSelected
                      ? 'bg-[#6842FF] border-[#6842FF] text-white shadow-xs'
                      : 'border-gray-300 bg-white group-hover:border-gray-400'
                  }`}
                  aria-hidden="true"
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>
            );
          })}
        </div>

        {errors.services && (
          <p id="error_services" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.services}</span>
          </p>
        )}
      </div>

      {/* Estimated Budget Selector */}
      <div className="pt-2 border-t border-gray-100">
        <label 
          htmlFor="quote_budget" 
          className="block text-xs font-semibold text-gray-700 mb-1.5"
        >
          {t.form.step3.budgetHeading} <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-gray-400">
            <DollarSign className="w-4 h-4" />
          </div>
          <select
            id="quote_budget"
            name="budget"
            required
            value={formData.budget}
            onChange={(e) => onChange('budget', e.target.value)}
            aria-invalid={!!errors.budget}
            aria-describedby={errors.budget ? 'error_budget' : 'help_budget'}
            className={`w-full ps-10 pe-4 py-2.5 sm:py-3 bg-white text-sm text-gray-900 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 cursor-pointer ${
              errors.budget
                ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/20'
                : 'border-gray-200 focus:border-[#6842FF] focus:ring-[#6842FF]/20 hover:border-gray-300'
            }`}
          >
            <option value="">{t.form.step3.selectBudget}</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b.id} value={b.value}>
                {lang === 'ar' ? b.labelAr : b.labelEn}
              </option>
            ))}
          </select>
        </div>
        {errors.budget ? (
          <p id="error_budget" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.budget}</span>
          </p>
        ) : (
          <p id="help_budget" className="mt-1 text-[11px] text-gray-400">
            {t.form.step3.budgetHelp}
          </p>
        )}
      </div>
    </div>
  );
};
