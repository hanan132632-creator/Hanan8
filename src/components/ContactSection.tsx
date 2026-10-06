import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Calendar } from 'lucide-react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('bespoke_bridal');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#18181B] font-serif-luxury">
          {t.contactTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#18181B]/70 leading-relaxed font-light">
          {t.contactSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form Column (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 shadow-xl">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-[#18181B] font-serif-luxury mb-2">
                {language === 'ar' ? 'نموذج الاستفسار وحجز موعد VIP' : 'Private VIP Inquiry & Salon Reservation'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1">
                    {t.clientName} *
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'ar' ? 'سعادة الأستاذ / الأستاذة...' : 'e.g. Lord Alexander Sinclair'}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-[#D4AF37] focus:outline-none bg-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1">
                    {t.officialPhone} *
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+966 50 123 4567"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-[#D4AF37] focus:outline-none bg-[#FAF8F5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1">
                    {t.clientEmail} *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vip@royal-client.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-[#D4AF37] focus:outline-none bg-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1">
                    {language === 'ar' ? 'نوع الطلب أو المناسبة' : 'Inquiry Purpose'}
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-[#D4AF37] focus:outline-none bg-[#FAF8F5]"
                  >
                    <option value="bespoke_bridal">
                      {language === 'ar' ? 'تصميم طقم زفاف ملكي مخصص' : 'Bespoke Bridal Suite Commission'}
                    </option>
                    <option value="solitaire_diamond">
                      {language === 'ar' ? 'استشارة شراء خاتم سوليتير GIA' : 'Certified GIA Solitaire Advisory'}
                    </option>
                    <option value="bullion_investment">
                      {language === 'ar' ? 'شراء سبائك ذهب استثمارية 24k' : '24k Bullion Capital Allocation'}
                    </option>
                    <option value="salon_appointment">
                      {language === 'ar' ? 'حجز موعد زيارة المعرض الخاص' : 'Private Salon Visit Appointment'}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#18181B] mb-1">
                  {language === 'ar' ? 'تفاصيل الرسالة أو الاستفسار' : 'Message Details'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-[#D4AF37] focus:outline-none bg-[#FAF8F5]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#18181B] hover:bg-[#27272A] text-[#FAF8F5] font-semibold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/50"
              >
                <Send className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.sendInquiryBtn}</span>
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#18181B] font-serif-luxury">
                {language === 'ar' ? 'تم استلام استفساركم ببالغ التقدير' : 'Inquiry Received with Distinction'}
              </h3>
              <p className="text-xs sm:text-sm text-[#18181B]/70 max-w-md mx-auto">
                {t.inquirySuccess}
              </p>
            </div>
          )}
        </div>

        {/* Flagship Salons Information (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick VIP WhatsApp Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#18181B] to-[#27272A] text-white border border-[#D4AF37]/40 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase block">
                  {language === 'ar' ? 'المحادثة الفورية المباشرة' : 'Instant Direct Line'}
                </span>
                <h4 className="text-base font-bold font-serif-luxury">
                  {language === 'ar' ? 'مستشار كبار العملاء عبر واتساب' : 'VIP Concierge WhatsApp'}
                </h4>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              {language === 'ar'
                ? 'استجابة فورية على مدار الساعة لتزويدكم بصور حصرية للقطع وشهادات الفحص المخبري وترتيب مواعيد الزيارة.'
                : 'Round-the-clock bespoke assistance for high-resolution video viewings and confidential valuations.'}
            </p>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8902A] text-[#18181B] font-bold text-xs rounded-xl shadow-md hover:opacity-90 transition-opacity"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'بدء محادثة VIP (+966-50-000-0000)' : 'Chat on WhatsApp VIP'}</span>
            </a>
          </div>

          {/* Salons Location & Schedule */}
          <div className="p-6 rounded-3xl bg-white border border-[#D4AF37]/30 space-y-4 shadow-md">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#18181B] block font-serif-luxury">
                    {language === 'ar' ? 'معرض الرياض الرئيسي (المملكة العربية السعودية)' : 'Riyadh Flagship Salon (KSA)'}
                  </span>
                  <span className="text-[#18181B]/70">{t.riyadhFlagship}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#D4AF37]/15">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#18181B] block font-serif-luxury">
                    {language === 'ar' ? 'معرض دبي الخاص (الإمارات العربية المتحدة)' : 'Dubai Private Salon (UAE)'}
                  </span>
                  <span className="text-[#18181B]/70">{t.dubaiFlagship}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#D4AF37]/15">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#18181B] block font-serif-luxury">
                    {t.boutiqueHours}
                  </span>
                  <span className="text-[#18181B]/70 block">{t.saturdayToThursday}</span>
                  <span className="text-[#18181B]/70 block">{t.fridayHours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#D4AF37]/15">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#18181B] block font-serif-luxury">
                    {t.officialEmail}
                  </span>
                  <span className="text-[#B8902A] font-mono">concierge@royal-elite.jewels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
