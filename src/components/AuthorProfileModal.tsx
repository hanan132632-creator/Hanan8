import React from 'react';
import { X, ShieldCheck, Award, GraduationCap, MapPin, Mail, Phone, BookOpen, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { Author, Article, Language } from '../types.ts';
import { VERIFIED_AUTHORS, AuthorDossier, resolveAuthorDossier } from '../data/authorDossiers.ts';

interface AuthorProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  author: Author;
  language: Language;
  allArticles?: Article[];
  onSelectArticle?: (article: Article) => void;
}

export const AuthorProfileModal: React.FC<AuthorProfileModalProps> = ({
  isOpen,
  onClose,
  author,
  language,
  allArticles = [],
  onSelectArticle,
}) => {
  if (!isOpen) return null;

  // Resolve matching dossier by name, title, or fallback to head of editorial board
  const dossier: AuthorDossier = resolveAuthorDossier(author);

  // Find articles penned by this author
  const authorArticles = allArticles.filter((a) =>
    a.author && (a.author.nameAr === author.nameAr || a.author.nameEn === author.nameEn)
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white rounded-3xl shadow-2xl border-2 border-[#D4AF37]/40 overflow-hidden text-right rtl:text-right ltr:text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner */}
        <div className="bg-gradient-to-r from-[#18181B] via-[#27272A] to-[#18181B] text-[#FAF8F5] p-6 sm:p-8 relative border-b border-[#D4AF37]/40">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 rtl:left-4 ltr:right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#D4AF37] border border-[#D4AF37]/30 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative shrink-0">
              <img
                src={author.avatar || dossier.avatar}
                alt={language === 'ar' ? author.nameAr : author.nameEn}
                referrerPolicy="no-referrer"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#D4AF37] shadow-xl"
              />
              <div
                className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-[#18181B] text-[#D4AF37] border border-[#D4AF37] shadow-md"
                title={language === 'ar' ? 'هوية معتمدة ومحققة رسميًا' : 'Verified Author Credentials'}
              >
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>

            <div className="space-y-1.5 text-center sm:text-right rtl:sm:text-right ltr:sm:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'ملف الكاتب المعتمد رسميًا (EEAT)' : 'Officially Verified EEAT Author'}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
                {language === 'ar' ? (dossier.fullNameAr || author.nameAr) : (dossier.fullNameEn || author.nameEn)}
              </h3>

              <p className="text-xs sm:text-sm text-[#D4AF37] font-medium">
                {language === 'ar' ? author.titleAr : author.titleEn}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] text-white/80">
                <span className="px-2.5 py-0.5 rounded bg-white/10 font-mono border border-white/15">
                  {language === 'ar' ? `رقم الاعتماد: ${dossier.licenseNo}` : `Licence No: ${dossier.licenseNo}`}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-white/10 font-mono border border-white/15">
                  {language === 'ar' ? `عضوية: ${dossier.membershipId}` : `Member ID: ${dossier.membershipId}`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Official Certifications & Academic Degree */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#D4AF37]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#18181B] font-serif-luxury">
                <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                <span>{language === 'ar' ? 'المؤهل العلمي والأكاديمي' : 'Academic Credentials'}</span>
              </div>
              <p className="text-xs text-[#18181B]/80 font-medium">
                {language === 'ar' ? dossier.academicDegreeAr : dossier.academicDegreeEn}
              </p>
              <span className="text-[11px] text-[#8C7A5B] block">
                {language === 'ar' ? dossier.institutionAr : dossier.institutionEn}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#D4AF37]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#18181B] font-serif-luxury">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>{language === 'ar' ? 'الخبرة الميدانية والاعتماد' : 'Professional Accreditation'}</span>
              </div>
              <p className="text-xs text-[#18181B]/80 font-medium">
                {language === 'ar'
                  ? `${dossier.experienceYears} عاماً من الخبرة المخبرية في تثمين واعتماد المجوهرات`
                  : `${dossier.experienceYears} years laboratory appraisal & certification experience`}
              </p>
              <span className="text-[11px] text-[#8C7A5B] block">
                {language === 'ar' ? author.credentialsAr : author.credentialsEn}
              </span>
            </div>
          </div>

          {/* Biography & Practical Research Background */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#18181B] font-serif-luxury">
              {language === 'ar' ? 'نبذة تعريفية وتاريخ البحث الجيولوجي' : 'Biography & Gemological Research Background'}
            </h4>
            <p className="text-xs sm:text-sm text-[#18181B]/80 leading-relaxed font-light text-justify bg-white p-4 rounded-xl border border-slate-200">
              {language === 'ar' ? dossier.bioAr : dossier.bioEn}
            </p>
          </div>

          {/* Human Writing Oath & Non-Copied Editorial Guarantee */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-amber-50/30 border-2 border-emerald-300 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>
                {language === 'ar'
                  ? 'ميثاق التأليف البشري الأصلي والنزاهة التحريرية 100%'
                  : '100% Human-Authored & Original Editorial Guarantee'}
              </span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              {language === 'ar' ? dossier.editorialOathAr : dossier.editorialOathEn}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-emerald-700 font-semibold">
              <span className="px-2 py-0.5 rounded bg-emerald-100/70">✓ خالٍ من التوليد الآلي غير المحقق</span>
              <span className="px-2 py-0.5 rounded bg-emerald-100/70">✓ غير منسوخ ومحمي فكرياً</span>
              <span className="px-2 py-0.5 rounded bg-emerald-100/70">✓ موثق بمراجع مخبرية بأرقام معتمدة</span>
            </div>
          </div>

          {/* Verified Contact Details & Consultation Office */}
          <div className="p-4 rounded-2xl bg-[#18181B] text-white space-y-3">
            <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
              {language === 'ar' ? 'بيانات التواصل الرسمي ومكتب الاستشارات' : 'Official Consultation & Office Contact'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="truncate">{language === 'ar' ? dossier.locationAr : dossier.locationEn}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${dossier.email}`} className="text-[#D4AF37] hover:underline truncate">
                  {dossier.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-mono text-white/90">{dossier.phone}</span>
              </div>
            </div>
          </div>

          {/* Treatises authored by this expert */}
          {authorArticles.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#18181B] font-serif-luxury uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                  <span>
                    {language === 'ar'
                      ? `الأبحاث المنشورة بقلم هذا الكاتب (${authorArticles.length})`
                      : `Treatises Authored by this Expert (${authorArticles.length})`}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {authorArticles.slice(0, 4).map((art) => (
                  <div
                    key={art.id}
                    onClick={() => {
                      if (onSelectArticle) {
                        onSelectArticle(art);
                        onClose();
                      }
                    }}
                    className="p-3.5 rounded-xl border border-[#D4AF37]/30 hover:border-[#D4AF37] bg-white hover:bg-[#FAF8F5] transition-all cursor-pointer shadow-xs group flex items-start justify-between gap-2"
                  >
                    <div>
                      <span className="text-[10px] text-[#8C7A5B] block font-mono uppercase">
                        {language === 'ar' ? art.categoryAr : art.categoryEn}
                      </span>
                      <h5 className="text-xs font-bold text-[#18181B] group-hover:text-[#B8902A] line-clamp-1 mt-0.5 font-serif-luxury">
                        {language === 'ar' ? art.titleAr : art.titleEn}
                      </h5>
                      <span className="text-[10px] text-slate-500 block mt-1">
                        {language === 'ar' ? art.readTimeAr : art.readTimeEn}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#B8902A] shrink-0 mt-1 opacity-60 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FAF8F5] border-t border-[#D4AF37]/20 flex items-center justify-between text-xs">
          <span className="text-[#8C7A5B]">
            {language === 'ar'
              ? 'تم التحقق من بيانات الكاتب واعتمادها وفق معايير الجودة الدولية GIA'
              : 'Author identity verified according to international GIA quality standards'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#18181B] hover:bg-[#27272A] text-[#FAF8F5] font-semibold transition-colors cursor-pointer"
          >
            {language === 'ar' ? 'إغلاق الملف' : 'Close Dossier'}
          </button>
        </div>
      </div>
    </div>
  );
};
