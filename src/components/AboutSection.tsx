import React from 'react';
import { Award, ShieldCheck, Gem, Users, Sparkles } from 'lucide-react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import heroImg from '../assets/images/hero_luxury_jewelry_1791298014265.jpg';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Lead Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B8902A] tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.aboutBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#18181B] font-serif-luxury leading-tight [text-wrap:balance]">
            {t.aboutTitle}
          </h2>

          <p className="text-sm sm:text-base text-[#18181B]/80 leading-relaxed font-light">
            {t.aboutParagraph1}
          </p>

          <p className="text-sm sm:text-base text-[#18181B]/80 leading-relaxed font-light">
            {t.aboutParagraph2}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#D4AF37]/25">
            <div>
              <span className="text-2xl sm:text-3xl font-bold text-[#18181B] font-mono block">
                {t.aboutMetric1}
              </span>
              <span className="text-xs text-[#8C7A5B] block mt-0.5">{t.aboutMetric1Label}</span>
            </div>

            <div>
              <span className="text-2xl sm:text-3xl font-bold text-[#18181B] font-mono block">
                {t.aboutMetric2}
              </span>
              <span className="text-xs text-[#8C7A5B] block mt-0.5">{t.aboutMetric2Label}</span>
            </div>

            <div>
              <span className="text-2xl sm:text-3xl font-bold text-[#18181B] font-mono block">
                {t.aboutMetric3}
              </span>
              <span className="text-xs text-[#8C7A5B] block mt-0.5">{t.aboutMetric3Label}</span>
            </div>
          </div>
        </div>

        {/* Visual Showcase Frame */}
        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/40 relative bg-[#FAF8F5]">
            <img
              src={heroImg}
              alt="Atelier Royal Elite Craftsmanship"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#18181B] text-[#FAF8F5] p-5 rounded-2xl border border-[#D4AF37]/50 shadow-2xl max-w-xs">
            <div className="flex items-center gap-2 mb-1.5 text-[#D4AF37]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold font-serif-luxury">
                {language === 'ar' ? 'التزام كيمبرلي الدولي 100%' : '100% Kimberley Process Certified'}
              </span>
            </div>
            <p className="text-[11px] text-white/70 leading-relaxed">
              {language === 'ar'
                ? 'نضمن مصادر ألماس مستخرجة بنزاهة تامة وخالية من النزاعات ومطابقة للمواصفات الدولية.'
                : 'Guaranteed conflict-free diamonds ethically extracted under international labor protections.'}
            </p>
          </div>
        </div>
      </div>

      {/* Ethical Standards & Lab Credentials Grid */}
      <div className="mt-24 pt-12 border-t border-[#D4AF37]/25 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl bg-white border border-[#D4AF37]/25 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
            <Gem className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#18181B] font-serif-luxury">
            {language === 'ar' ? 'الاعتماد المخبري الثلاثي' : 'Triple Laboratory Accreditation'}
          </h3>
          <p className="text-xs text-[#18181B]/70 leading-relaxed">
            {language === 'ar'
              ? 'تخضع كافة ألماساتنا لفحص مستقل من معاهد GIA و IGI و HRD لتوثيق النقاء واللون وقطع بريليانت بأعلى دقة علمية.'
              : 'Independent verification via GIA, IGI, and HRD Antwerp ensuring immutable grading integrity.'}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#D4AF37]/25 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#18181B] font-serif-luxury">
            {language === 'ar' ? 'معايير الصياغة السيادية' : 'Sovereign Goldsmithing Standards'}
          </h3>
          <p className="text-xs text-[#18181B]/70 leading-relaxed">
            {language === 'ar'
              ? 'صياغة يدوية مجهرية بالذهب عيار 18k و 21k والبلاتين 950 مع ترصيع بافيه دقيق وضمان صيانة مدى الحياة في ورشنا.'
              : 'Precision micro-pavé mounting in 18k/21k gold and platinum 950 with lifetime atelier servicing.'}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#D4AF37]/25 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#18181B] font-serif-luxury">
            {language === 'ar' ? 'خدمة الاستشارات الملكية VIP' : 'Private Salon Concierge'}
          </h3>
          <p className="text-xs text-[#18181B]/70 leading-relaxed">
            {language === 'ar'
              ? 'جلسات تصميم مخصصة (Bespoke High Jewelry) مع كبار المصممين لتحويل أحلامك إلى قطع إرث عائلية فريدة.'
              : 'Bespoke one-on-one salon viewings with master gemologists to commission signature family heirlooms.'}
          </p>
        </div>
      </div>
    </section>
  );
};
