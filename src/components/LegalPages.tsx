import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle, Scale, Lock, Eye } from 'lucide-react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface LegalPagesProps {
  language: Language;
  initialTab?: 'privacy' | 'terms';
}

export const LegalPages: React.FC<LegalPagesProps> = ({ language, initialTab = 'privacy' }) => {
  const t = TRANSLATIONS[language];
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Tab Switcher */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveTab('privacy')}
          className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'privacy'
              ? 'bg-[#18181B] text-[#FAF8F5] shadow-md border border-[#D4AF37]/50'
              : 'bg-white text-[#18181B]/80 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Lock className="w-4 h-4 text-[#D4AF37]" />
          <span>{t.privacyTitle}</span>
        </button>

        <button
          onClick={() => setActiveTab('terms')}
          className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'terms'
              ? 'bg-[#18181B] text-[#FAF8F5] shadow-md border border-[#D4AF37]/50'
              : 'bg-white text-[#18181B]/80 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Scale className="w-4 h-4 text-[#D4AF37]" />
          <span>{t.termsTitle}</span>
        </button>
      </div>

      {activeTab === 'privacy' ? (
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#D4AF37]/30 shadow-xl space-y-8 text-xs sm:text-sm text-[#18181B]/80 leading-relaxed font-light">
          <div className="border-b border-[#D4AF37]/20 pb-6">
            <span className="text-xs font-semibold text-[#B8902A] tracking-wider uppercase block">
              {language === 'ar' ? 'الامتثال القانوني والشفافية الرقمية' : 'Legal Compliance & Data Governance'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#18181B] font-serif-luxury mt-1">
              {t.privacyTitle}
            </h1>
            <span className="text-[11px] text-[#8C7A5B] block mt-1">
              {language === 'ar' ? 'تاريخ التحديث الأخير: أكتوبر 2026' : 'Last Updated: October 2026'}
            </span>
          </div>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#18181B] font-serif-luxury">
              {language === 'ar' ? '1. الالتزام بسياسات Google AdSense وملفات تعريف الارتباط (Cookies)' : '1. Google AdSense & Third-Party Advertising Cookies'}
            </h2>
            <p>
              {language === 'ar'
                ? 'يستخدم موقع «بوتيك مجوهرات النخبة الملكية» خدمات إعلانية وتحليلية مقدمة من Google Inc. ومنها Google AdSense. تستخدم هذه الخدمات ملفات تعريف الارتباط (مثل ملف تعريف الارتباط DoubleClick DART) لخدمة الإعلانات للمستخدمين استناداً إلى زيارتهم لهذا الموقع أو مواقع ويب أخرى على شبكة الإنترنت.'
                : 'Royal Elite High Jewelry uses Google AdSense and affiliated services to deliver contextual advertising. Google utilizes cookies (such as the DoubleClick DART cookie) to serve ads based on your visit to this and other internet locations.'}
            </p>
            <p>
              {language === 'ar'
                ? 'يحق للمستخدمين في أي وقت إلغاء الاشتراك في استخدام ملف تعريف الارتباط DART لخدمة الإعلانات القائمة على الاهتمامات من خلال زيارة سياسة خصوصية شبكة Google الإعلانية وشبكة المحتوى على الرابط: https://policies.google.com/technologies/ads'
                : 'Users may opt out of personalized advertising by visiting Google Ad Settings at https://policies.google.com/technologies/ads or adjusting browser settings.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#18181B] font-serif-luxury">
              {language === 'ar' ? '2. الامتثال للائحة العامة لحماية البيانات (GDPR) وقوانين الخصوصية' : '2. GDPR & CCPA Compliance Protocol'}
            </h2>
            <p>
              {language === 'ar'
                ? 'نحن لا نبيع أو نؤجر أو نتاجر بالبيانات الشخصية لعملائنا النخبويين مطلقاً. البيانات التي نجمعها (مثل الاسم، رقم الهاتف، والبريد الإلكتروني) تُستخدم فقط لغرض تنسيق الشحن المصفح، استخراج وثائق الفحص المخبري للألماس، وإصدار الفواتير الرسمية.'
                : 'We strictly maintain client confidentiality. Personal identifiers (name, phone, delivery address) are collected solely for armored courier delivery logistics, diamond dossier registration, and official proof of purchase.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#18181B] font-serif-luxury">
              {language === 'ar' ? '3. أمن البيانات والتشفير البنكي المتقدم' : '3. Data Security & Financial Safeguards'}
            </h2>
            <p>
              {language === 'ar'
                ? 'تخضع جميع الاتصالات على موقعنا لبروتوكول التشفير الآمن SSL/TLS بمعيار 256-bit، مما يضمن سرية تامة لكافة الاستفسارات وتفاصيل الطلبات وحسابات الأسعار.'
                : 'All web transactions are protected via 256-bit SSL/TLS cryptographic protocols ensuring comprehensive integrity for valuations, inquiries, and checkout details.'}
            </p>
          </section>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#D4AF37]/30 shadow-xl space-y-8 text-xs sm:text-sm text-[#18181B]/80 leading-relaxed font-light">
          <div className="border-b border-[#D4AF37]/20 pb-6">
            <span className="text-xs font-semibold text-[#B8902A] tracking-wider uppercase block">
              {language === 'ar' ? 'حقوق العميل والضمانات السيادية' : 'Sovereign Guarantees & Terms'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#18181B] font-serif-luxury mt-1">
              {t.termsTitle}
            </h1>
            <span className="text-[11px] text-[#8C7A5B] block mt-1">
              {language === 'ar' ? 'تاريخ التحديث الأخير: أكتوبر 2026' : 'Last Updated: October 2026'}
            </span>
          </div>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#18181B] font-serif-luxury">
              {language === 'ar' ? '1. ضمان أصالة الألماس والشهادات المخبرية GIA' : '1. Immutable Authenticity Guarantee'}
            </h2>
            <p>
              {language === 'ar'
                ? 'تضمن دار مجوهرات النخبة الملكية أصالة كافة قطع المجوهرات المعروضة بنسبة 100%. كل حجر ألماس طبيعي يتجاوز 0.50 قيراط يأتي مصحوباً بتقرير فحص رسمي من معهد الأحجار الكريمة الأمريكي (GIA) أو المعهد الدولي للأحجار الكريمة (IGI)، مع رقم فحص مطابق محفور بالليزر على حافة الألماسة.'
                : 'Royal Elite unconditionally guarantees the absolute authenticity of all high jewelry. Every diamond exceeding 0.50 carats is accompanied by an independent grading report from GIA or IGI featuring matching laser inscription.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#18181B] font-serif-luxury">
              {language === 'ar' ? '2. سياسة الاسترجاع والاستبدال (14 يوماً)' : '2. Exchange & Return Policy (14 Days)'}
            </h2>
            <p>
              {language === 'ar'
                ? 'يحق للعميل استبدال أو استرجاع قطع المجوهرات الجاهزة خلال 14 يوماً من تاريخ الاستلام، شريطة أن تكون القطعة بحالتها الأصلية غير المستخدمة، مع كامل عبواتها المخملية وبطاقات الفحص المخبري المرفقة. تُستثنى من ذلك القطع المصممة خصيصاً بالطلب (Bespoke) أو المنقوش عليها أحرف شخصية.'
                : 'Clients retain the privilege to exchange or return ready-to-wear pieces within 14 calendar days of delivery, provided items remain in pristine unblemished condition with accompanying certifications intact. Custom-commissioned bespoke jewels are exempt.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#18181B] font-serif-luxury">
              {language === 'ar' ? '3. الشحن المصفح والتأمين الشامل' : '3. Armored Transit & Full Transit Insurance'}
            </h2>
            <p>
              {language === 'ar'
                ? 'يتم شحن كافة الطلبات داخل المملكة ودول مجلس التعاون عبر سيارات مصفحة وكوادر أمنية مؤهلة، مع وثيقة تأمين شاملة تغطي كامل قيمة الشحنة حتى لحظة توقيع العميل على إشعار الاستلام الشخصي.'
                : 'All shipments across Saudi Arabia and the GCC are dispatched via specialized armored transport under full fidelity transit insurance until signature handover.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#18181B] font-serif-luxury">
              {language === 'ar' ? '4. الصيانة الدورية والتنظيف الفائق مدى الحياة' : '4. Lifetime Ultrasonic Cleaning & Inspection'}
            </h2>
            <p>
              {language === 'ar'
                ? 'يحصل مقتنو مجوهرات النخبة الملكية على خدمة مجانية مدى الحياة لفحص مخالب الترصيع (Prong tightening)، والتنظيف بالموجات فوق الصوتية، وإعادة صقل الروديوم في أي من معارضنا المعتمدة.'
                : 'Patrons enjoy complimentary lifetime ultrasonic cleansing, prong stability verification, and rhodium replating across our regional ateliers.'}
            </p>
          </section>
        </div>
      )}
    </div>
  );
};
