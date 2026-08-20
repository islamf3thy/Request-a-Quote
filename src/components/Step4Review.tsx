import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  FileText, 
  Trash2, 
  AlertCircle, 
  Check, 
  Edit3, 
  FileCheck, 
  Building2, 
  User, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  DollarSign, 
  ExternalLink 
} from 'lucide-react';
import { QuoteFormData, Language, ValidationErrorMap, AttachedFile } from '../types';
import { TRANSLATIONS } from '../translations';

interface Step4ReviewProps {
  formData: QuoteFormData;
  onChange: (field: keyof QuoteFormData, value: any) => void;
  errors: ValidationErrorMap;
  onGoToStep: (step: number) => void;
  lang: Language;
}

export const Step4Review: React.FC<Step4ReviewProps> = ({
  formData,
  onChange,
  errors,
  onGoToStep,
  lang,
}) => {
  const t = TRANSLATIONS[lang];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
  const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.zip', '.dwg', '.rar', '.png', '.jpg', '.jpeg'];

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const processFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploadError(null);

    const currentFiles = [...formData.attachments];
    const newAttachments: AttachedFile[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const ext = '.' + file.name.split('.').pop()?.toLowerCase();

      // Check format
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        setUploadError(`${t.form.step4.invalidType}: ${file.name}`);
        continue;
      }

      // Check size
      if (file.size > MAX_FILE_SIZE_BYTES) {
        setUploadError(`${t.form.step4.fileTooBig}: ${file.name}`);
        continue;
      }

      // Check duplicates
      const isDuplicate = currentFiles.some(f => f.name === file.name && f.size === file.size);
      if (!isDuplicate) {
        newAttachments.push({
          id: `${Date.now()}-${i}-${Math.random().toString(36).substring(2, 7)}`,
          name: file.name,
          size: file.size,
          type: file.type || ext,
          formattedSize: formatFileSize(file.size),
        });
      }
    }

    onChange('attachments', [...currentFiles, ...newAttachments]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    processFiles(e.dataTransfer.files);
  };

  const handleRemoveFile = (fileId: string) => {
    onChange(
      'attachments',
      formData.attachments.filter((f) => f.id !== fileId)
    );
  };

  return (
    <div className="space-y-7 animate-fadeIn">
      {/* Header Info */}
      <div className="space-y-1">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
          {t.form.step4.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          {t.form.step4.subtitle}
        </p>
      </div>

      {/* Drag & Drop File Upload Area */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-gray-700">
          {t.form.step4.uploadHeading}
        </label>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative p-6 sm:p-7 border-2 border-dashed rounded-2xl text-center cursor-pointer transition-all duration-200 ${
            isDragOver
              ? 'border-[#6842FF] bg-[#6842FF]/5 ring-4 ring-[#6842FF]/10'
              : 'border-gray-200 hover:border-gray-300 bg-gray-50/50 hover:bg-gray-50'
          }`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              fileInputRef.current?.click();
            }
          }}
        >
          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => processFiles(e.target.files)}
            multiple
            accept=".pdf,.doc,.docx,.xls,.xlsx,.zip,.dwg,.rar,.png,.jpg,.jpeg"
            className="hidden"
            name="attachments[]"
          />

          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-[#6842FF]/10 text-[#6842FF] flex items-center justify-center">
              <UploadCloud className="w-6 h-6" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs sm:text-sm font-semibold text-gray-800">
                {t.form.step4.dragDropPrompt}
              </p>
              <p className="text-xs text-[#6842FF] font-medium underline">
                {t.form.step4.orBrowse}
              </p>
            </div>
            <p className="text-[11px] text-gray-400 max-w-sm pt-1">
              {t.form.step4.uploadRules}
            </p>
          </div>
        </div>

        {uploadError && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{uploadError}</span>
          </p>
        )}

        {/* Selected Files List */}
        {formData.attachments.length > 0 && (
          <div className="mt-3 space-y-2">
            <p className="text-xs font-semibold text-gray-700">
              {t.form.step4.filesAttached} ({formData.attachments.length}):
            </p>
            <div className="space-y-1.5">
              {formData.attachments.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-gray-200 text-xs shadow-2xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-[#6842FF] flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-800 truncate max-w-xs sm:max-w-md">
                        {file.name}
                      </p>
                      <p className="text-[10px] text-gray-400 font-mono">
                        {file.formattedSize}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFile(file.id);
                    }}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                    title={t.form.step4.removeFile}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Summary Review Card */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-[#6842FF]" />
            <h3 className="text-xs sm:text-sm font-bold text-gray-900">
              {t.form.step4.summaryHeading}
            </h3>
          </div>
          <span className="text-[11px] text-gray-500">
            {t.form.step4.reviewNotice}
          </span>
        </div>

        {/* Section 1: Contact Review */}
        <div className="flex items-start justify-between text-xs pt-1">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-gray-700">
              <User className="w-3.5 h-3.5 text-gray-400" />
              <span>{formData.fullName || '—'}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600 font-normal">{formData.jobTitle}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Building2 className="w-3.5 h-3.5 text-gray-400" />
              <span>{formData.companyName || '—'}</span>
              <span className="text-gray-400">|</span>
              <span className="font-mono text-[11px]">{formData.email || '—'}</span>
              <span className="text-gray-400">|</span>
              <span className="font-mono text-[11px]" dir="ltr">{formData.phoneCountryCode} {formData.phone}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onGoToStep(1)}
            className="text-[11px] font-semibold text-[#6842FF] hover:underline flex items-center gap-1 shrink-0 p-1"
          >
            <Edit3 className="w-3 h-3" />
            <span>{t.form.buttons.edit}</span>
          </button>
        </div>

        {/* Section 2: Project Info Review */}
        <div className="flex items-start justify-between text-xs pt-2 border-t border-gray-200/60">
          <div className="space-y-1 max-w-lg">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span>{formData.city ? `${formData.city}, ${formData.country}` : formData.country || '—'}</span>
              <span className="text-gray-400">•</span>
              <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span>{formData.timeline || '—'}</span>
            </div>
            <p className="text-gray-500 text-[11px] line-clamp-2 leading-relaxed italic">
              "{formData.requirements || '—'}"
            </p>
          </div>
          <button
            type="button"
            onClick={() => onGoToStep(2)}
            className="text-[11px] font-semibold text-[#6842FF] hover:underline flex items-center gap-1 shrink-0 p-1"
          >
            <Edit3 className="w-3 h-3" />
            <span>{t.form.buttons.edit}</span>
          </button>
        </div>

        {/* Section 3: Services & Budget Review */}
        <div className="flex items-start justify-between text-xs pt-2 border-t border-gray-200/60">
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-gray-700">
              <ShieldCheck className="w-3.5 h-3.5 text-gray-400" />
              <span>{formData.services.length} {t.form.step3.selectedCount}:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {formData.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-white border border-gray-200 text-[10px] font-medium text-gray-700 shadow-2xs"
                >
                  {srv}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-gray-600 text-[11px] pt-1">
              <DollarSign className="w-3 h-3 text-emerald-600" />
              <span className="font-semibold">{t.form.step3.budgetHeading}:</span>
              <span className="font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">{formData.budget || '—'}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onGoToStep(3)}
            className="text-[11px] font-semibold text-[#6842FF] hover:underline flex items-center gap-1 shrink-0 p-1"
          >
            <Edit3 className="w-3 h-3" />
            <span>{t.form.buttons.edit}</span>
          </button>
        </div>
      </div>

      {/* Privacy Agreement */}
      <div className="pt-1">
        <label 
          htmlFor="quote_privacy_agree" 
          className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 hover:border-gray-300 bg-white cursor-pointer transition-colors"
        >
          <div className="relative flex items-center justify-center shrink-0 mt-0.5">
            <input
              id="quote_privacy_agree"
              name="agree_privacy"
              type="checkbox"
              required
              checked={formData.agreeToPrivacy}
              onChange={(e) => onChange('agreeToPrivacy', e.target.checked)}
              aria-invalid={!!errors.privacy}
              aria-describedby={errors.privacy ? 'error_privacy' : undefined}
              className="w-4 h-4 text-[#6842FF] rounded border-gray-300 focus:ring-[#6842FF]"
            />
          </div>
          <div className="space-y-0.5 text-xs text-gray-600 leading-relaxed select-none">
            <span className="font-semibold text-gray-900 block mb-0.5">
              {t.form.step4.privacyTitle}
            </span>
            <span>
              {lang === 'ar' ? (
                <>
                  أقر بصحة البيانات المدخلة وأوافق على{' '}
                  <a href="#privacy" className="text-[#6842FF] font-semibold underline hover:text-[#522fd6] inline-flex items-center gap-0.5">
                    {t.form.step4.privacyPolicyLink} <ExternalLink className="w-2.5 h-2.5" />
                  </a>{' '}
                  وشروط معالجة البيانات التجارية الخاصة بالمشروع.
                </>
              ) : (
                <>
                  I confirm that the submitted details are accurate and agree to the{' '}
                  <a href="#privacy" className="text-[#6842FF] font-semibold underline hover:text-[#522fd6] inline-flex items-center gap-0.5">
                    {t.form.step4.privacyPolicyLink} <ExternalLink className="w-2.5 h-2.5" />
                  </a>{' '}
                  and commercial data processing terms.
                </>
              )}
            </span>
          </div>
        </label>
        {errors.privacy && (
          <p id="error_privacy" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.privacy}</span>
          </p>
        )}
      </div>
    </div>
  );
};
