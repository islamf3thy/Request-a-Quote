import React from 'react';
import { Check } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
  lang: Language;
}

export const StepProgress: React.FC<StepProgressProps> = ({
  currentStep,
  totalSteps = 4,
  onStepClick,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  const stepLabels = [
    { num: 1, label: t.steps.step1Short, full: t.steps.step1 },
    { num: 2, label: t.steps.step2Short, full: t.steps.step2 },
    { num: 3, label: t.steps.step3Short, full: t.steps.step3 },
    { num: 4, label: t.steps.step4Short, full: t.steps.step4 },
  ];

  return (
    <div className="w-full mb-8">
      {/* Mobile Step Badge and Summary */}
      <div className="flex sm:hidden items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <span className="text-xs font-semibold text-[#6842FF] bg-[#6842FF]/10 px-2.5 py-1 rounded-full">
          {t.steps.stepOf.replace('{current}', String(currentStep)).replace('{total}', String(totalSteps))}
        </span>
        <span className="text-xs font-bold text-gray-700">
          {stepLabels[currentStep - 1]?.full}
        </span>
      </div>

      {/* Stepper Container */}
      <div className="relative flex items-center justify-between" role="navigation" aria-label="Progress Stepper">
        {/* Background Connecting Line */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 start-4 end-4 h-0.5 bg-gray-200 z-0" 
          aria-hidden="true"
        />

        {/* Active Progress Fill Line */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 start-4 h-0.5 bg-gradient-to-r from-[#6842FF] to-[#8B5CF6] transition-all duration-300 ease-out z-0"
          style={{
            width: `${((currentStep - 1) / (totalSteps - 1)) * 92}%`,
          }}
          aria-hidden="true"
        />

        {/* Steps */}
        {stepLabels.map((step) => {
          const isCompleted = step.num < currentStep;
          const isCurrent = step.num === currentStep;
          const isUpcoming = step.num > currentStep;

          return (
            <button
              key={step.num}
              type="button"
              onClick={() => isCompleted && onStepClick(step.num)}
              disabled={isUpcoming}
              aria-current={isCurrent ? 'step' : undefined}
              className={`relative z-10 flex flex-col items-center group transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6842FF] focus-visible:ring-offset-2 rounded-xl p-1 ${
                isCompleted ? 'cursor-pointer' : isCurrent ? 'cursor-default' : 'cursor-not-allowed opacity-60'
              }`}
            >
              {/* Step Circle */}
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm ${
                  isCompleted
                    ? 'bg-[#16A34A] text-white ring-4 ring-emerald-50'
                    : isCurrent
                    ? 'bg-gradient-to-br from-[#6842FF] to-[#8B5CF6] text-white ring-4 ring-[#6842FF]/20 shadow-md shadow-[#6842FF]/30 scale-105'
                    : 'bg-white text-gray-400 border-2 border-gray-200 group-hover:border-gray-300'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                ) : (
                  <span>{step.num}</span>
                )}
              </div>

              {/* Step Label */}
              <span
                className={`mt-2 text-xs font-semibold tracking-tight transition-colors hidden sm:block ${
                  isCurrent
                    ? 'text-[#6842FF] font-bold'
                    : isCompleted
                    ? 'text-gray-700'
                    : 'text-gray-400'
                }`}
              >
                {step.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
