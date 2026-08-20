import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  Loader2, 
  ShieldCheck, 
  Sparkles,
  Info
} from 'lucide-react';
import { QuoteFormData, Language, ValidationErrorMap, SubmissionResponse } from './types';
import { TRANSLATIONS } from './translations';
import { LeftInfoPanel } from './components/LeftInfoPanel';
import { StepProgress } from './components/StepProgress';
import { Step1Contact } from './components/Step1Contact';
import { Step2Project } from './components/Step2Project';
import { Step3Services } from './components/Step3Services';
import { Step4Review } from './components/Step4Review';
import { SuccessView } from './components/SuccessView';
import { HeaderNav } from './components/HeaderNav';
import { BotbleCodeModal } from './components/BotbleCodeModal';

const INITIAL_FORM_DATA: QuoteFormData = {
  fullName: '',
  companyName: '',
  email: '',
  phoneCountryCode: '+966',
  phone: '',
  jobTitle: '',
  country: 'Saudi Arabia',
  city: '',
  timeline: '1-3-months',
  requirements: '',
  services: ['IT Infrastructure & Cloud Solutions', 'Cybersecurity & Information Protection'],
  budget: '$50,000 - $150,000',
  attachments: [],
  agreeToPrivacy: false,
};

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<ValidationErrorMap>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResponse | null>(null);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState<boolean>(false);

  const formTopRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  // Synchronize HTML dir & lang attributes on language switch
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const handleFieldChange = (field: keyof QuoteFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for that field if resolved
    if (errors[field as string]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as string];
        return next;
      });
    }
  };

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: ValidationErrorMap = {};

    if (stepNumber === 1) {
      if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
        newErrors.fullName = t.form.errors.fullNameRequired;
      }
      if (!formData.companyName.trim()) {
        newErrors.companyName = t.form.errors.companyRequired;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
        newErrors.email = t.form.errors.emailRequired;
      }
      if (!formData.phone.trim() || formData.phone.replace(/[^\d]/g, '').length < 7) {
        newErrors.phone = t.form.errors.phoneRequired;
      }
      if (!formData.jobTitle.trim()) {
        newErrors.jobTitle = t.form.errors.jobTitleRequired;
      }
    } else if (stepNumber === 2) {
      if (!formData.country.trim()) {
        newErrors.country = t.form.errors.countryRequired;
      }
      if (!formData.city.trim()) {
        newErrors.city = t.form.errors.cityRequired;
      }
      if (!formData.timeline.trim()) {
        newErrors.timeline = t.form.errors.timelineRequired;
      }
      if (!formData.requirements.trim() || formData.requirements.trim().length < 15) {
        newErrors.requirements = t.form.errors.requirementsRequired;
      }
    } else if (stepNumber === 3) {
      if (!formData.services || formData.services.length === 0) {
        newErrors.services = t.form.errors.servicesRequired;
      }
      if (!formData.budget.trim()) {
        newErrors.budget = t.form.errors.budgetRequired;
      }
    } else if (stepNumber === 4) {
      if (!formData.agreeToPrivacy) {
        newErrors.privacy = t.form.errors.privacyRequired;
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Focus on first invalid input
      const firstKey = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${firstKey}"], [aria-invalid="true"]`) as HTMLElement;
      if (el) el.focus();
      return false;
    }

    return true;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      scrollToFormTop();
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    scrollToFormTop();
  };

  const handleJumpToStep = (step: number) => {
    if (step < currentStep) {
      setCurrentStep(step);
      scrollToFormTop();
    } else if (validateStep(currentStep)) {
      setCurrentStep(step);
      scrollToFormTop();
    }
  };

  const scrollToFormTop = () => {
    if (formTopRef.current) {
      formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    // Simulate real server-side submission / API response
    setTimeout(() => {
      const year = new Date().getFullYear();
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const generatedRef = `RFQ-${year}-${randomNum}`;

      setSubmissionResult({
        referenceNumber: generatedRef,
        submittedAt: new Date().toISOString(),
        estimatedResponseHours: 24,
        contactEmail: formData.email,
      });

      setIsSubmitting(false);
      scrollToFormTop();
    }, 1200);
  };

  const handleAutoFill = () => {
    setFormData({
      fullName: lang === 'ar' ? 'م. عبدالعزيز بن فهد الراشد' : 'Eng. Abdulaziz Al-Rashed',
      companyName: lang === 'ar' ? 'شركة التحول الرقمي المتقدمة' : 'Advanced Digital Transformation Co.',
      email: 'a.alrashed@adt-solutions.sa',
      phoneCountryCode: '+966',
      phone: '54 892 4110',
      jobTitle: lang === 'ar' ? 'مدير عام تقنية المعلومات' : 'Chief Information Officer (CIO)',
      country: lang === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia',
      city: lang === 'ar' ? 'الرياض' : 'Riyadh',
      timeline: '1-3-months',
      requirements: lang === 'ar' 
        ? 'نحتاج إلى تحديث شامل للبنية التحتية السحابية الهجينة للمقر الرئيسي و 4 فروع إقليمية، مع تطبيق معمارية Zero-Trust للأمن السيبراني، وربط أنظمة إدارة المباني الذكية BMS بمركز العمليات SOC على مدار الساعة.'
        : 'Enterprise requirement for hybrid cloud infrastructure refresh across headquarters and 4 regional branches, integrated with zero-trust cybersecurity posture, IP surveillance, and 24/7 SLA managed operations.',
      services: [
        'IT Infrastructure & Cloud Solutions',
        'Cybersecurity & Information Protection',
        'Low Current & Smart Building Systems',
      ],
      budget: '$150,000 - $500,000',
      attachments: [
        {
          id: 'demo-file-1',
          name: 'Enterprise_Network_Topology_RFP_2026.pdf',
          size: 2450000,
          type: 'application/pdf',
          formattedSize: '2.3 MB',
        },
      ],
      agreeToPrivacy: true,
    });
    setErrors({});
  };

  const handleResetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setSubmissionResult(null);
    setCurrentStep(1);
    setErrors({});
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#F7F7FC] ${isRtl ? 'font-arabic' : 'font-sans'}`}>
      {/* Top Application Bar */}
      <HeaderNav
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))}
        onAutoFill={handleAutoFill}
        onReset={handleResetForm}
        onOpenCodeModal={() => setIsCodeModalOpen(true)}
      />

      {/* Main Container with 1200px max constraint */}
      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto" ref={formTopRef}>
          {/* Main Split Layout Card */}
          <div className="bg-white rounded-[22px] sm:rounded-[24px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-gray-200/80 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
              {/* Left Column: 5 Cols (approx 41%) - Tech Corporate Info & Trust */}
              <div className="lg:col-span-5 flex flex-col">
                <LeftInfoPanel lang={lang} />
              </div>

              {/* Right Column: 7 Cols (approx 59%) - Interactive Multi-Step Form */}
              <div className="lg:col-span-7 p-6 sm:p-9 lg:p-11 flex flex-col justify-between bg-white">
                {submissionResult ? (
                  /* Success Confirmation Screen */
                  <SuccessView
                    formData={formData}
                    submission={submissionResult}
                    onReset={handleResetForm}
                    lang={lang}
                  />
                ) : (
                  /* Multi-Step Wizard Flow */
                  <form onSubmit={handleSubmit} noValidate className="flex-1 flex flex-col justify-between space-y-6">
                    {/* Stepper Header (Contact → Project → Services → Review) */}
                    <div>
                      <StepProgress
                        currentStep={currentStep}
                        totalSteps={4}
                        onStepClick={handleJumpToStep}
                        lang={lang}
                      />

                      {/* Active Step Dynamic View */}
                      <div className="min-h-[380px]">
                        {currentStep === 1 && (
                          <Step1Contact
                            formData={formData}
                            onChange={handleFieldChange}
                            errors={errors}
                            lang={lang}
                          />
                        )}

                        {currentStep === 2 && (
                          <Step2Project
                            formData={formData}
                            onChange={handleFieldChange}
                            errors={errors}
                            lang={lang}
                          />
                        )}

                        {currentStep === 3 && (
                          <Step3Services
                            formData={formData}
                            onChange={handleFieldChange}
                            errors={errors}
                            lang={lang}
                          />
                        )}

                        {currentStep === 4 && (
                          <Step4Review
                            formData={formData}
                            onChange={handleFieldChange}
                            errors={errors}
                            onGoToStep={handleJumpToStep}
                            lang={lang}
                          />
                        )}
                      </div>
                    </div>

                    {/* Step Navigation Actions */}
                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-3">
                      {/* Back Button */}
                      {currentStep > 1 ? (
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[#6842FF]/20"
                        >
                          {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                          <span>{t.form.buttons.prev}</span>
                        </button>
                      ) : (
                        <div className="text-[11px] text-gray-400 flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <span>{t.form.requiredNotice}</span>
                        </div>
                      )}

                      {/* Next / Submit Button */}
                      {currentStep < 4 ? (
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="ms-auto inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#6842FF] to-[#8B5CF6] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6842FF]/25 hover:opacity-95 hover:shadow-lg hover:shadow-[#6842FF]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#6842FF] focus:ring-offset-2"
                        >
                          <span>{t.form.buttons.next}</span>
                          {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="ms-auto inline-flex items-center gap-2 px-7 sm:px-9 py-3 rounded-xl bg-gradient-to-r from-[#16A34A] to-emerald-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/25 hover:opacity-95 hover:shadow-lg hover:shadow-emerald-600/30 transition-all disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>{t.form.buttons.submitting}</span>
                            </>
                          ) : (
                            <>
                              <span>{t.form.buttons.submit}</span>
                              <Send className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Security Assurance & Botble notice */}
          <div className="mt-6 text-center text-xs text-gray-500 flex flex-wrap items-center justify-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-gray-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>TLS 1.3 256-bit Encrypted Enterprise Transmission</span>
            </span>
            <span className="text-gray-300">•</span>
            <button
              type="button"
              onClick={() => setIsCodeModalOpen(true)}
              className="text-[#6842FF] hover:underline font-semibold"
            >
              Export Botble CMS Blade Template & Controllers
            </button>
          </div>
        </div>
      </main>

      {/* Botble CMS & Laravel Code Inspector Modal */}
      <BotbleCodeModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
