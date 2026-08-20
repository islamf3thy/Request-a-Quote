import React, { useState } from 'react';
import { X, Copy, Check, Code2, FileCode, CheckCircle, Download } from 'lucide-react';
import { Language } from '../types';

interface BotbleCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const BotbleCodeModal: React.FC<BotbleCodeModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'blade' | 'css' | 'js' | 'controller' | 'lang'>('blade');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const files = {
    blade: {
      name: 'resources/views/public/form.blade.php',
      badge: 'Blade Template',
      code: `{{-- 
  Platform: Botble CMS & Laravel
  File: platform/themes/[your-theme]/views/plugins/request-quote/form.blade.php
  Description: Premium Split Layout Multi-Step Quote Request Form
--}}

<section class="quote-section py-5 bg-[#F7F7FC]">
    <div class="container custom-quote-container" style="max-width: 1200px;">
        <div class="card quote-card border-0 shadow-lg overflow-hidden" style="border-radius: 24px;">
            <div class="row g-0">
                <!-- Left Column: Corporate Brand & Trust Panel -->
                <div class="col-lg-5 quote-info-panel d-none d-lg-flex flex-column justify-content-between p-5 text-white bg-[#111827]">
                    <div class="info-content position-relative z-1">
                        <div class="badge-tag mb-3 d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill" style="background: rgba(104,66,255,0.15); border: 1px solid rgba(104,66,255,0.3); color: #8B5CF6; font-size: 12px;">
                            <i class="fas fa-award"></i>
                            <span>{{ __('Enterprise Proposal Request') }}</span>
                        </div>

                        <h2 class="display-6 fw-bold mb-3 text-white">
                            {{ __('Let’s build something exceptional') }}
                        </h2>
                        <p class="lead opacity-75 mb-4 text-white-50" style="font-size: 15px; line-height: 1.6;">
                            {{ __('Tell us about your project and our solutions team will prepare a tailored technical and commercial proposal.') }}
                        </p>

                        <!-- Features List with Translation and Icons -->
                        <div class="features-list d-flex flex-column gap-3 mb-4">
                            <div class="feature-item d-flex align-items-start gap-3 p-3 rounded-3" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);">
                                <span class="icon-box rounded-2 p-2" style="background: rgba(104,66,255,0.2); color: #8B5CF6;">
                                    <i class="far fa-clock fa-fw"></i>
                                </span>
                                <div>
                                    <h6 class="mb-0 text-white fw-bold" style="font-size: 13px;">{{ __('Response within one business day') }}</h6>
                                    <small class="text-white-50" style="font-size: 11px;">{{ __('Direct consultation with certified architects within 24 hours.') }}</small>
                                </div>
                            </div>

                            <div class="feature-item d-flex align-items-start gap-3 p-3 rounded-3" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);">
                                <span class="icon-box rounded-2 p-2" style="background: rgba(104,66,255,0.2); color: #8B5CF6;">
                                    <i class="fas fa-shield-alt fa-fw"></i>
                                </span>
                                <div>
                                    <h6 class="mb-0 text-white fw-bold" style="font-size: 13px;">{{ __('Secure and confidential project information') }}</h6>
                                    <small class="text-white-50" style="font-size: 11px;">{{ __('Strict non-disclosure compliance and enterprise-grade data encryption.') }}</small>
                                </div>
                            </div>

                            <div class="feature-item d-flex align-items-start gap-3 p-3 rounded-3" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);">
                                <span class="icon-box rounded-2 p-2" style="background: rgba(104,66,255,0.2); color: #8B5CF6;">
                                    <i class="far fa-file-alt fa-fw"></i>
                                </span>
                                <div>
                                    <h6 class="mb-0 text-white fw-bold" style="font-size: 13px;">{{ __('Tailored technical and commercial proposal') }}</h6>
                                    <small class="text-white-50" style="font-size: 11px;">{{ __('Granular BoQ, architectural blueprints, timeline & ROI breakdown.') }}</small>
                                </div>
                            </div>

                            <div class="feature-item d-flex align-items-start gap-3 p-3 rounded-3" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);">
                                <span class="icon-box rounded-2 p-2" style="background: rgba(104,66,255,0.2); color: #8B5CF6;">
                                    <i class="fas fa-video fa-fw"></i>
                                </span>
                                <div>
                                    <h6 class="mb-0 text-white fw-bold" style="font-size: 13px;">{{ __('Optional consultation meeting') }}</h6>
                                    <small class="text-white-50" style="font-size: 11px;">{{ __('Dedicated technical discovery session via Microsoft Teams or on-site.') }}</small>
                                </div>
                            </div>
                        </div>

                        <!-- Trust Certifications -->
                        <div class="trust-meta pt-3 border-top border-secondary border-opacity-25">
                            <small class="text-white-50 d-flex align-items-center gap-2 mb-1">
                                <i class="fas fa-check-circle text-success"></i> {{ __('ISO 27001 & 9001 Certified Enterprise Provider') }}
                            </small>
                            <small class="text-white-50 d-flex align-items-center gap-2">
                                <i class="fas fa-check-circle text-success"></i> {{ __('Tier-1 Cisco, Microsoft & Fortinet Authorized Partner') }}
                            </small>
                        </div>
                    </div>

                    <!-- Direct Contact from Botble Theme Options -->
                    <div class="contact-quick-info border-top border-secondary border-opacity-25 pt-4 mt-4 position-relative z-1">
                        <small class="text-uppercase text-white-50 fw-semibold d-block mb-2" style="font-size: 10px; letter-spacing: 0.5px;">{{ __('Direct Corporate Inquiries') }}</small>
                        @if(theme_option('email'))
                        <div class="d-flex align-items-center gap-2 mb-2 text-white-50 small">
                            <i class="fas fa-envelope text-primary"></i> <a href="mailto:{{ theme_option('email') }}" class="text-white text-decoration-none">{{ theme_option('email') }}</a>
                        </div>
                        @endif
                        @if(theme_option('phone'))
                        <div class="d-flex align-items-center gap-2 mb-2 text-white-50 small" dir="ltr">
                            <i class="fas fa-phone-alt text-primary"></i> <a href="tel:{{ theme_option('phone') }}" class="text-white text-decoration-none font-monospace">{{ theme_option('phone') }}</a>
                        </div>
                        @endif
                    </div>
                </div>

                <!-- Right Column: Interactive Multi-Step Form -->
                <div class="col-lg-7 bg-white p-4 p-md-5">
                    <!-- Stepper Progress Header -->
                    <div class="quote-stepper mb-5">
                        <div class="stepper-track d-flex justify-content-between position-relative">
                            <div class="step-node active" data-step="1">
                                <span class="step-bubble">1</span>
                                <label class="step-title">{{ __('Contact') }}</label>
                            </div>
                            <div class="step-node" data-step="2">
                                <span class="step-bubble">2</span>
                                <label class="step-title">{{ __('Project') }}</label>
                            </div>
                            <div class="step-node" data-step="3">
                                <span class="step-bubble">3</span>
                                <label class="step-title">{{ __('Services') }}</label>
                            </div>
                            <div class="step-node" data-step="4">
                                <span class="step-bubble">4</span>
                                <label class="step-title">{{ __('Review') }}</label>
                            </div>
                        </div>
                    </div>

                    {{-- Botble Form Helper Open with CSRF & Multipart --}}
                    {!! Form::open(['route' => 'public.request-quote.store', 'method' => 'POST', 'files' => true, 'id' => 'botbleQuoteForm', 'class' => 'quote-ajax-form']) !!}
                        @csrf

                        <!-- Step 1: Contact Details -->
                        <div class="form-step-pane active" id="stepPane1">
                            <div class="step-heading mb-4">
                                <h4 class="fw-bold mb-1">{{ __('Step 1: Primary Contact Information') }}</h4>
                                <p class="text-muted small">{{ __('Provide the authorized liaison details for commercial & technical communication.') }}</p>
                            </div>

                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label small fw-semibold" for="full_name">{{ __('Full Name') }} <span class="text-danger">*</span></label>
                                    <div class="input-icon-group">
                                        <i class="far fa-user input-icon"></i>
                                        <input type="text" name="name" id="full_name" class="form-control form-control-lg @error('name') is-invalid @enderror" value="{{ old('name') }}" placeholder="{{ __('e.g. Eng. Khalid Al-Mansoor') }}" required>
                                    </div>
                                    @error('name') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label small fw-semibold" for="company_name">{{ __('Company Name') }} <span class="text-danger">*</span></label>
                                    <div class="input-icon-group">
                                        <i class="far fa-building input-icon"></i>
                                        <input type="text" name="company" id="company_name" class="form-control form-control-lg @error('company') is-invalid @enderror" value="{{ old('company') }}" placeholder="{{ __('e.g. Saudi Advanced Industries Corp.') }}" required>
                                    </div>
                                    @error('company') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror
                                </div>

                                <div class="col-12">
                                    <label class="form-label small fw-semibold" for="business_email">{{ __('Business Email') }} <span class="text-danger">*</span></label>
                                    <div class="input-icon-group">
                                        <i class="far fa-envelope input-icon"></i>
                                        <input type="email" name="email" id="business_email" dir="ltr" class="form-control form-control-lg @error('email') is-invalid @enderror" value="{{ old('email') }}" placeholder="name@company.com" required>
                                    </div>
                                    @error('email') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror
                                    <small class="text-muted d-block mt-1">{{ __('Please use your corporate work email address for faster verification.') }}</small>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label small fw-semibold" for="phone_number">{{ __('Phone Number') }} <span class="text-danger">*</span></label>
                                    <div class="d-flex gap-2">
                                        <select name="phone_country_code" class="form-select form-select-lg w-auto font-monospace" dir="ltr">
                                            <option value="+966">🇸🇦 +966</option>
                                            <option value="+971">🇦🇪 +971</option>
                                            <option value="+20">🇪🇬 +20</option>
                                            <option value="+974">🇶🇦 +974</option>
                                            <option value="+965">🇰🇼 +965</option>
                                            <option value="+1">🇺🇸 +1</option>
                                            <option value="+44">🇬🇧 +44</option>
                                        </select>
                                        <div class="input-icon-group flex-grow-1">
                                            <i class="fas fa-phone-alt input-icon"></i>
                                            <input type="tel" name="phone" id="phone_number" dir="ltr" class="form-control form-control-lg @error('phone') is-invalid @enderror" value="{{ old('phone') }}" placeholder="50 123 4567" required>
                                        </div>
                                    </div>
                                    @error('phone') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label small fw-semibold" for="job_title">{{ __('Job Title') }} <span class="text-danger">*</span></label>
                                    <div class="input-icon-group">
                                        <i class="fas fa-briefcase input-icon"></i>
                                        <input type="text" name="job_title" id="job_title" class="form-control form-control-lg @error('job_title') is-invalid @enderror" value="{{ old('job_title') }}" placeholder="{{ __('e.g. Head of IT / CIO') }}" required>
                                    </div>
                                    @error('job_title') <div class="invalid-feedback d-block">{{ $message }}</div> @enderror
                                </div>
                            </div>

                            <div class="d-flex justify-content-end mt-4 pt-3">
                                <button type="button" class="btn btn-primary btn-lg px-4 next-step-btn">
                                    <span>{{ __('Continue to Next Step') }}</span>
                                    <i class="fas fa-arrow-right ms-2 rtl-flip"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Step 2: Project Information -->
                        <div class="form-step-pane d-none" id="stepPane2">
                            <div class="step-heading mb-4">
                                <h4 class="fw-bold mb-1">{{ __('Step 2: Project Scope & Location') }}</h4>
                                <p class="text-muted small">{{ __('Specify the physical location and delivery timeline for the proposed scope.') }}</p>
                            </div>

                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label small fw-semibold" for="project_country">{{ __('Country') }} <span class="text-danger">*</span></label>
                                    <select name="country" id="project_country" class="form-select form-select-lg @error('country') is-invalid @enderror" required>
                                        <option value="">{{ __('Select Target Country') }}</option>
                                        <option value="Saudi Arabia" {{ old('country') == 'Saudi Arabia' ? 'selected' : '' }}>🇸🇦 {{ __('Saudi Arabia') }}</option>
                                        <option value="United Arab Emirates" {{ old('country') == 'United Arab Emirates' ? 'selected' : '' }}>🇦🇪 {{ __('United Arab Emirates') }}</option>
                                        <option value="Egypt" {{ old('country') == 'Egypt' ? 'selected' : '' }}>🇪🇬 {{ __('Egypt') }}</option>
                                        <option value="Qatar" {{ old('country') == 'Qatar' ? 'selected' : '' }}>🇶🇦 {{ __('Qatar') }}</option>
                                        <option value="Kuwait" {{ old('country') == 'Kuwait' ? 'selected' : '' }}>🇰🇼 {{ __('Kuwait') }}</option>
                                    </select>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label small fw-semibold" for="project_city">{{ __('City / Region') }} <span class="text-danger">*</span></label>
                                    <input type="text" name="city" id="project_city" class="form-control form-control-lg @error('city') is-invalid @enderror" value="{{ old('city') }}" placeholder="{{ __('e.g. Riyadh, Dubai, Cairo') }}" required>
                                </div>

                                <div class="col-12">
                                    <label class="form-label small fw-semibold">{{ __('Expected Timeline') }} <span class="text-danger">*</span></label>
                                    <div class="row g-2 timeline-selector">
                                        @foreach(['immediate' => __('Immediate (< 1 Month)'), '1-3-months' => __('1 – 3 Months'), '3-6-months' => __('3 – 6 Months'), 'flexible' => __('Flexible / Q3-Q4')] as $timeKey => $timeVal)
                                        <div class="col-6 col-md-3">
                                            <label class="timeline-card w-100 p-2 text-center border rounded-3 cursor-pointer">
                                                <input type="radio" name="timeline" value="{{ $timeKey }}" class="d-none" {{ old('timeline', 'immediate') == $timeKey ? 'checked' : '' }} required>
                                                <span class="small fw-semibold d-block py-1">{{ $timeVal }}</span>
                                            </label>
                                        </div>
                                        @endforeach
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="d-flex justify-content-between align-items-center mb-1">
                                        <label class="form-label small fw-semibold mb-0" for="project_requirements">{{ __('Project Requirements') }} <span class="text-danger">*</span></label>
                                        <small class="text-muted font-monospace"><span id="charCounter">0</span>/1000</small>
                                    </div>
                                    <textarea name="requirements" id="project_requirements" rows="4" maxlength="1000" class="form-control @error('requirements') is-invalid @enderror" placeholder="{{ __('Describe key requirements, current infrastructure challenges, or compliance needs...') }}" required>{{ old('requirements') }}</textarea>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between mt-4 pt-3">
                                <button type="button" class="btn btn-outline-secondary btn-lg px-4 prev-step-btn">{{ __('Previous') }}</button>
                                <button type="button" class="btn btn-primary btn-lg px-4 next-step-btn">{{ __('Continue to Next Step') }}</button>
                            </div>
                        </div>

                        <!-- Step 3: Services & Budget -->
                        <div class="form-step-pane d-none" id="stepPane3">
                            <div class="step-heading mb-4">
                                <h4 class="fw-bold mb-1">{{ __('Step 3: Required Solutions & Budget Scope') }}</h4>
                                <p class="text-muted small">{{ __('Select one or multiple technology domains required for this initiative.') }}</p>
                            </div>

                            <!-- Interactive Service Cards -->
                            <div class="row g-3 service-cards-grid mb-4">
                                @php
                                    $availableServices = [
                                        ['db' => 'IT Infrastructure & Cloud Solutions', 'icon' => 'fa-server', 'title' => __('IT Infrastructure & Cloud Solutions'), 'desc' => __('Enterprise hybrid cloud, server virtualization, scalable storage & disaster recovery.')],
                                        ['db' => 'Cybersecurity & Information Protection', 'icon' => 'fa-shield-alt', 'title' => __('Cybersecurity & Information Protection'), 'desc' => __('Zero-trust architecture, SOC operations, vulnerability assessment & compliance.')],
                                        ['db' => 'Low Current & Smart Building Systems', 'icon' => 'fa-microchip', 'title' => __('Low Current & Smart Building Systems'), 'desc' => __('Integrated BMS, IP surveillance, access control, smart lighting & IoT automation.')],
                                        ['db' => 'Networking & Data Center Technologies', 'icon' => 'fa-network-wired', 'title' => __('Networking & Data Center Technologies'), 'desc' => __('High-density cabling, SD-WAN, core switching, edge routing & DC builds.')],
                                        ['db' => 'Managed Services & IT Operations', 'icon' => 'fa-headset', 'title' => __('Managed Services & IT Operations'), 'desc' => __('24/7/365 proactive monitoring, SLA-backed NOC helpdesk & maintenance.')],
                                        ['db' => 'Digital PMO Setup, Governance & Transformation Enablement', 'icon' => 'fa-layer-group', 'title' => __('Digital PMO Setup, Governance & Transformation Enablement'), 'desc' => __('Strategic PMO framework, IT governance (COBIT/ITIL) & KPI dashboards.')],
                                    ];
                                @endphp

                                @foreach($availableServices as $srv)
                                <div class="col-md-6">
                                    <label class="service-selectable-card d-flex align-items-start p-3 border rounded-3 h-100 position-relative cursor-pointer">
                                        <input type="checkbox" name="services[]" value="{{ $srv['db'] }}" class="service-checkbox d-none" {{ is_array(old('services')) && in_array($srv['db'], old('services')) ? 'checked' : '' }}>
                                        <div class="srv-icon-box me-3 p-2 rounded-2 bg-light text-primary">
                                            <i class="fas {{ $srv['icon'] }} fa-lg"></i>
                                        </div>
                                        <div class="srv-content flex-grow-1 pe-3">
                                            <h6 class="srv-title mb-1 fw-bold">{{ $srv['title'] }}</h6>
                                            <p class="srv-desc text-muted mb-0 small">{{ $srv['desc'] }}</p>
                                        </div>
                                        <div class="srv-check-indicator position-absolute top-0 end-0 m-3 text-primary">
                                            <i class="far fa-circle uncheck-icon"></i>
                                            <i class="fas fa-check-circle check-icon d-none"></i>
                                        </div>
                                    </label>
                                </div>
                                @endforeach
                            </div>

                            <!-- Budget Range Select -->
                            <div class="mb-3">
                                <label class="form-label small fw-semibold" for="project_budget">{{ __('Estimated Project Budget') }} <span class="text-danger">*</span></label>
                                <select name="budget" id="project_budget" class="form-select form-select-lg @error('budget') is-invalid @enderror" required>
                                    <option value="">{{ __('Select budget range (USD / SAR equivalent)') }}</option>
                                    <option value="< $25,000">Under $25,000 (SAR ~95,000)</option>
                                    <option value="$25,000 - $50,000">$25,000 - $50,000 (SAR ~190,000)</option>
                                    <option value="$50,000 - $150,000">$50,000 - $150,000 (Enterprise Mid-tier)</option>
                                    <option value="$150,000 - $500,000">$150,000 - $500,000 (Major Transformation)</option>
                                    <option value="> $500,000">$500,000+ (Megaproject / Strategic)</option>
                                </select>
                            </div>

                            <div class="d-flex justify-content-between mt-4 pt-3">
                                <button type="button" class="btn btn-outline-secondary btn-lg px-4 prev-step-btn">{{ __('Previous') }}</button>
                                <button type="button" class="btn btn-primary btn-lg px-4 next-step-btn">{{ __('Continue to Next Step') }}</button>
                            </div>
                        </div>

                        <!-- Step 4: Attachments & Review -->
                        <div class="form-step-pane d-none" id="stepPane4">
                            <div class="step-heading mb-4">
                                <h4 class="fw-bold mb-1">{{ __('Step 4: Supporting Documentation & Verification') }}</h4>
                                <p class="text-muted small">{{ __('Upload relevant RFP documents, network topology, or BoQ files, then review your submission.') }}</p>
                            </div>

                            <!-- Drag & Drop File Upload Area -->
                            <div class="upload-dropzone p-4 border border-2 border-dashed rounded-3 text-center mb-4 cursor-pointer" id="quoteDropzone">
                                <i class="fas fa-cloud-upload-alt fa-3x text-primary mb-2"></i>
                                <h6 class="fw-bold mb-1">{{ __('Drag and drop project briefs, BoQs, or RFPs here') }}</h6>
                                <p class="text-muted small mb-2">{{ __('or click to browse files from your device') }}</p>
                                <small class="text-muted d-block">{{ __('Supported formats: PDF, DOCX, XLSX, DWG, ZIP (Max 10MB per file)') }}</small>
                                <input type="file" name="attachments[]" id="fileUploadInput" multiple class="d-none">
                                <div id="selectedFilesList" class="mt-3 text-start"></div>
                            </div>

                            <!-- Summary Card for Review -->
                            <div class="review-summary-card p-3 rounded-3 bg-light border mb-4">
                                <h6 class="fw-bold mb-2 text-dark"><i class="fas fa-clipboard-check text-primary me-2"></i>{{ __('Submission Summary Review') }}</h6>
                                <div class="row g-2 small text-muted">
                                    <div class="col-sm-6"><strong>{{ __('Contact') }}:</strong> <span id="revContact">—</span></div>
                                    <div class="col-sm-6"><strong>{{ __('Email') }}:</strong> <span id="revEmail">—</span></div>
                                    <div class="col-sm-6"><strong>{{ __('Location') }}:</strong> <span id="revLocation">—</span></div>
                                    <div class="col-sm-6"><strong>{{ __('Budget') }}:</strong> <span id="revBudget">—</span></div>
                                </div>
                            </div>

                            <!-- Privacy Policy Checkbox -->
                            <div class="form-check mb-4">
                                <input class="form-check-input" type="checkbox" name="agree_privacy" id="agreePrivacy" required>
                                <label class="form-check-label small" for="agreePrivacy">
                                    {!! __('I confirm that the submitted details are accurate and agree to the :privacy_policy and commercial data processing terms.', ['privacy_policy' => '<a href="/privacy-policy" target="_blank" class="text-primary fw-bold">'.__('Privacy Policy').'</a>']) !!}
                                </label>
                            </div>

                            <div class="d-flex justify-content-between mt-4 pt-3">
                                <button type="button" class="btn btn-outline-secondary btn-lg px-4 prev-step-btn">{{ __('Previous') }}</button>
                                <button type="submit" class="btn btn-success btn-lg px-5" id="quoteSubmitBtn">
                                    <span class="normal-state">{{ __('Submit Proposal Request') }} <i class="fas fa-paper-plane ms-2"></i></span>
                                    <span class="loading-state d-none"><i class="fas fa-spinner fa-spin me-2"></i> {{ __('Processing...') }}</span>
                                </button>
                            </div>
                        </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
</section>`,
    },
    css: {
      name: 'resources/assets/sass/quote-corporate.scss',
      badge: 'SCSS / CSS (Logical Properties)',
      code: `// =========================================================================
// Botble CMS / Theme SCSS Stylesheet: Tech Corporate Quote Form
// Compatible with Bootstrap 5, RTL/LTR Native Support via Logical Properties
// =========================================================================

:root {
    --quote-primary: #6842FF;
    --quote-primary-hover: #5531e8;
    --quote-secondary: #8B5CF6;
    --quote-navy: #111827;
    --quote-bg: #F7F7FC;
    --quote-border: #E5E7EB;
    --quote-success: #16A34A;
    --quote-radius: 24px;
}

.custom-quote-container {
    max-width: 1200px;
    margin-inline: auto;
}

.quote-card {
    border-radius: var(--quote-radius) !important;
    background: #ffffff;
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.07);
}

// Left Info Panel Tech Aesthetics
.quote-info-panel {
    background-color: var(--quote-navy) !important;
    position: relative;
    border-start-start-radius: var(--quote-radius);
    border-end-start-radius: var(--quote-radius);
    background-image: 
        radial-gradient(circle at 100% 0%, rgba(104, 66, 255, 0.22) 0%, transparent 60%),
        radial-gradient(circle at 0% 100%, rgba(139, 92, 246, 0.15) 0%, transparent 60%);

    .feature-item {
        transition: transform 0.2s ease, background-color 0.2s ease;
        &:hover {
            transform: translateX(4px);
            background-color: rgba(255, 255, 255, 0.06) !important;
        }
    }
}

// Stepper UI
.quote-stepper {
    .stepper-track {
        &::before {
            content: '';
            position: absolute;
            top: 18px;
            inset-inline-start: 10%;
            inset-inline-end: 10%;
            height: 2px;
            background: var(--quote-border);
            z-index: 1;
        }
    }

    .step-node {
        position: relative;
        z-index: 2;
        text-align: center;
        flex: 1;

        .step-bubble {
            width: 36px;
            height: 36px;
            background: #ffffff;
            border: 2px solid var(--quote-border);
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 13px;
            color: #6B7280;
            transition: all 0.3s ease;
            margin-bottom: 6px;
        }

        .step-title {
            display: block;
            font-size: 12px;
            font-weight: 600;
            color: #6B7280;
            transition: color 0.3s ease;
        }

        &.active .step-bubble {
            background: var(--quote-primary);
            border-color: var(--quote-primary);
            color: #ffffff;
            box-shadow: 0 0 0 4px rgba(104, 66, 255, 0.2);
        }
        &.active .step-title {
            color: var(--quote-primary);
            font-weight: 700;
        }

        &.completed .step-bubble {
            background: var(--quote-success);
            border-color: var(--quote-success);
            color: #ffffff;
        }
    }
}

// Input Group with Icon
.input-icon-group {
    position: relative;
    .input-icon {
        position: absolute;
        inset-inline-start: 16px;
        top: 50%;
        transform: translateY(-50%);
        color: #9CA3AF;
        pointer-events: none;
    }
    .form-control {
        padding-inline-start: 44px;
        border-radius: 12px;
        border-color: var(--quote-border);
        font-size: 14px;
        &:focus {
            border-color: var(--quote-primary);
            box-shadow: 0 0 0 3px rgba(104, 66, 255, 0.15);
        }
    }
}

// Interactive Service Cards
.service-selectable-card {
    border: 2px solid var(--quote-border) !important;
    border-radius: 16px !important;
    transition: all 0.2s ease-in-out;
    background: #ffffff;

    &:hover {
        border-color: #CBD5E1 !important;
        background-color: #F8FAFC;
    }

    &.selected {
        border-color: var(--quote-primary) !important;
        background-color: rgba(104, 66, 255, 0.04) !important;

        .srv-icon-box {
            background-color: var(--quote-primary) !important;
            color: #ffffff !important;
        }
        .uncheck-icon { display: none !important; }
        .check-icon { display: inline-block !important; }
    }
}

// Drag & Drop Zone
.upload-dropzone {
    border-color: var(--quote-border) !important;
    background-color: #FAFAFD;
    transition: all 0.2s ease;
    &:hover, &.drag-over {
        border-color: var(--quote-primary) !important;
        background-color: rgba(104, 66, 255, 0.03);
    }
}

// Responsive RTL flipping
[dir="rtl"] {
    .quote-info-panel {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
        border-start-end-radius: var(--quote-radius);
        border-end-end-radius: var(--quote-radius);
    }
    .rtl-flip {
        transform: scaleX(-1);
    }
}`,
    },
    js: {
      name: 'resources/assets/js/quote-wizard.js',
      badge: 'Vanilla JS (Zero Heavy Dependencies)',
      code: `/**
 * Botble CMS Request a Quote Multi-Step Controller
 * Handles client-side navigation, character counter, drag & drop, and AJAX validation.
 */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('botbleQuoteForm');
    if (!form) return;

    const stepPanes = document.querySelectorAll('.form-step-pane');
    const stepNodes = document.querySelectorAll('.step-node');
    const nextBtns = document.querySelectorAll('.next-step-btn');
    const prevBtns = document.querySelectorAll('.prev-step-btn');
    let currentStep = 1;
    const totalSteps = stepPanes.length;

    // Switch step handler
    function showStep(stepNumber) {
        stepPanes.forEach((pane, index) => {
            if (index + 1 === stepNumber) {
                pane.classList.remove('d-none');
                pane.classList.add('active');
            } else {
                pane.classList.add('d-none');
                pane.classList.remove('active');
            }
        });

        stepNodes.forEach((node, index) => {
            const stepVal = index + 1;
            node.classList.remove('active', 'completed');
            if (stepVal === stepNumber) {
                node.classList.add('active');
            } else if (stepVal < stepNumber) {
                node.classList.add('completed');
            }
        });

        currentStep = stepNumber;
        updateSummaryReview();
    }

    // Step Validation before progressing
    function validateCurrentStep() {
        const currentPane = document.getElementById('stepPane' + currentStep);
        const requiredInputs = currentPane.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;

        requiredInputs.forEach(input => {
            if (!input.checkValidity()) {
                input.reportValidity();
                isValid = false;
            }
        });

        // Custom validation for step 3 (Service selection)
        if (currentStep === 3) {
            const checkedServices = currentPane.querySelectorAll('.service-checkbox:checked');
            if (checkedServices.length === 0) {
                alert('Please select at least one technology service domain.');
                isValid = false;
            }
        }

        return isValid;
    }

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (validateCurrentStep() && currentStep < totalSteps) {
                showStep(currentStep + 1);
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 1) {
                showStep(currentStep - 1);
            }
        });
    });

    // Interactive Service Card Checkbox Toggle
    const serviceCards = document.querySelectorAll('.service-selectable-card');
    serviceCards.forEach(card => {
        const checkbox = card.querySelector('.service-checkbox');
        
        // Initial state sync
        if (checkbox.checked) card.classList.add('selected');

        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'INPUT') {
                checkbox.checked = !checkbox.checked;
            }
            card.classList.toggle('selected', checkbox.checked);
        });
    });

    // Character Counter for Requirements
    const reqTextarea = document.getElementById('project_requirements');
    const charCounter = document.getElementById('charCounter');
    if (reqTextarea && charCounter) {
        reqTextarea.addEventListener('input', () => {
            charCounter.textContent = reqTextarea.value.length;
        });
    }

    // Drag & Drop Upload Zone
    const dropzone = document.getElementById('quoteDropzone');
    const fileInput = document.getElementById('fileUploadInput');
    const fileListDisplay = document.getElementById('selectedFilesList');

    if (dropzone && fileInput) {
        dropzone.addEventListener('click', () => fileInput.click());

        ['dragenter', 'dragover'].forEach(eventName => {
            dropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                dropzone.classList.add('drag-over');
            });
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                dropzone.classList.remove('drag-over');
            });
        });

        dropzone.addEventListener('drop', (e) => {
            fileInput.files = e.dataTransfer.files;
            renderFileList(fileInput.files);
        });

        fileInput.addEventListener('change', () => {
            renderFileList(fileInput.files);
        });
    }

    function renderFileList(files) {
        if (!fileListDisplay) return;
        fileListDisplay.innerHTML = '';
        Array.from(files).forEach((file, idx) => {
            const item = document.createElement('div');
            item.className = 'badge bg-white text-dark border p-2 me-1 mb-1 d-inline-flex align-items-center gap-2';
            item.innerHTML = '<i class="far fa-file-alt text-primary"></i> ' + file.name + ' <small class="text-muted">(' + (file.size/1024/1024).toFixed(1) + ' MB)</small>';
            fileListDisplay.appendChild(item);
        });
    }

    // Live Summary Review Sync
    function updateSummaryReview() {
        const name = document.getElementById('full_name')?.value || '—';
        const company = document.getElementById('company_name')?.value || '';
        const email = document.getElementById('business_email')?.value || '—';
        const city = document.getElementById('project_city')?.value || '';
        const country = document.getElementById('project_country')?.value || '—';
        const budget = document.getElementById('project_budget')?.value || '—';

        if (document.getElementById('revContact')) {
            document.getElementById('revContact').textContent = name + (company ? ' (' + company + ')' : '');
        }
        if (document.getElementById('revEmail')) {
            document.getElementById('revEmail').textContent = email;
        }
        if (document.getElementById('revLocation')) {
            document.getElementById('revLocation').textContent = (city ? city + ', ' : '') + country;
        }
        if (document.getElementById('revBudget')) {
            document.getElementById('revBudget').textContent = budget;
        }
    }
});`,
    },
    controller: {
      name: 'app/Http/Controllers/PublicController.php',
      badge: 'Laravel Controller & Validation',
      code: `<?php

namespace Botble\\RequestQuote\\Http\\Controllers;

use Botble\\Base\\Http\\Controllers\\BaseController;
use Botble\\Base\\Http\\Responses\\BaseHttpResponse;
use Botble\\RequestQuote\\Http\\Requests\\QuoteRequest;
use Botble\\RequestQuote\\Models\\Quote;
use Illuminate\\Support\\Facades\\Mail;
use Illuminate\\Support\\Str;

class RequestQuoteController extends BaseController
{
    /**
     * Store incoming Request for Quote with secure file uploads and email notifications.
     */
    public function store(QuoteRequest $request, BaseHttpResponse $response)
    {
        try {
            $data = $request->validated();
            
            // Generate Unique Tracking Reference ID
            $data['reference_id'] = 'RFQ-' . date('Y') . '-' . strtoupper(Str::random(6));
            
            // Handle Multiple File Uploads securely
            $attachedFilePaths = [];
            if ($request->hasFile('attachments')) {
                foreach ($request->file('attachments') as $file) {
                    if ($file->isValid()) {
                        $storedPath = $file->store('quote-attachments/' . date('Y/m'), 'local');
                        $attachedFilePaths[] = [
                            'original_name' => $file->getClientOriginalName(),
                            'path' => $storedPath,
                            'size' => $file->getSize(),
                            'mime' => $file->getMimeType(),
                        ];
                    }
                }
            }
            $data['attachments'] = json_encode($attachedFilePaths);

            // Persist to Database via Model
            $quote = Quote::create($data);

            // Trigger Email Dispatch to Solutions Architect & Confirmation to Customer
            // Mail::to(theme_option('admin_email'))->send(new NewQuoteAdminNotification($quote));
            // Mail::to($quote->email)->send(new QuoteCustomerConfirmation($quote));

            return $response
                ->setData([
                    'reference_id' => $data['reference_id'],
                    'message' => __('Your quote request has been securely submitted.'),
                ])
                ->setMessage(__('Thank you! Our enterprise solution architects will contact you within 1 business day.'));

        } catch (\\Exception $ex) {
            return $response
                ->setError()
                ->setMessage(__('Failed to process request. Please try again or contact us directly: :error', ['error' => $ex->getMessage()]));
        }
    }
}`,
    },
    lang: {
      name: 'resources/lang/ar/quote.php',
      badge: 'Arabic & English Translation Dictionaries',
      code: `<?php

return [
    'Enterprise Proposal Request' => 'طلب عرض سعر فني وتجاري',
    'Let’s build something exceptional' => 'دعنا نبني معاً حلولاً تقنية استثنائية',
    'Tell us about your project and our solutions team will prepare a tailored technical and commercial proposal.' => 'أخبرنا عن متطلبات مشروعك، وسيقوم فريق استشاريي الحلول التقنية لدينا بإعداد مقترح فني ومالي مخصص ومفصل.',
    'Response within one business day' => 'الرد خلال يوم عمل واحد',
    'Secure and confidential project information' => 'حماية وسرية تامة لمعلومات المشروع',
    'Tailored technical and commercial proposal' => 'مقترح فني وتجاري مصمم لاحتياجاتك',
    'Optional consultation meeting' => 'جلسة استشارية فنية اختيارية',
    'Contact' => 'الاتصال',
    'Project' => 'المشروع',
    'Services' => 'الخدمات',
    'Review' => 'المراجعة',
    'Full Name' => 'الاسم الكامل',
    'Company Name' => 'اسم الشركة / المنشأة',
    'Business Email' => 'البريد الإلكتروني للعمل',
    'Phone Number' => 'رقم الهاتف / الجوال',
    'Job Title' => 'المسمى الوظيفي',
    'Country' => 'الدولة',
    'City / Region' => 'المدينة / المنطقة',
    'Expected Timeline' => 'الإطار الزمني المتوقع للتنفيذ',
    'Project Requirements' => 'متطلبات المشروع ونطاق العمل',
    'Required Solutions & Budget Scope' => 'الخدمات المطلوبة والميزانية التقديرية',
    'Estimated Project Budget' => 'الميزانية التقديرية للمشروع',
    'Drag and drop project briefs, BoQs, or RFPs here' => 'اسحب وأفلت كراسات الشروط، جداول الكميات (BoQ) أو المخططات هنا',
    'Submit Proposal Request' => 'إرسال طلب عرض السعر',
    'Privacy Policy' => 'سياسة الخصوصية',
];`,
    },
  };

  const currentFile = files[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#111827] text-white w-full max-w-5xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Topbar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0B0F19]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#6842FF]/20 text-[#8B5CF6] flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>Botble CMS & Laravel Code Integration</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#6842FF]/30 text-[#8B5CF6]">
                  Production Ready
                </span>
              </h3>
              <p className="text-xs text-gray-400">
                {currentFile.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Code'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-4 py-2 bg-[#161F30] border-b border-white/10 overflow-x-auto">
          {[
            { key: 'blade', label: '1. Blade View (form.blade.php)' },
            { key: 'css', label: '2. SCSS/CSS (RTL Logical)' },
            { key: 'js', label: '3. Vanilla JS Controller' },
            { key: 'controller', label: '4. Laravel Controller' },
            { key: 'lang', label: '5. Translation Dictionary' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.key
                  ? 'bg-[#6842FF] text-white shadow-xs'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code View Area */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-gray-200 bg-[#0B0F19] leading-relaxed">
          <pre className="whitespace-pre overflow-x-auto p-3 rounded-xl bg-[#070A10] border border-white/5 selection:bg-[#6842FF]/30">
            <code>{currentFile.code}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-white/10 bg-[#0B0F19] text-xs text-gray-400">
          <span>✨ 100% Backwards compatible with Botble CMS & standard Laravel routes.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
