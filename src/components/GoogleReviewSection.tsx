import React, { useState } from 'react';
import { Language } from '../types/menu';
import { translations } from '../data/translations';
import { Star, ExternalLink, Copy, Check, MessageSquare, ThumbsUp, Heart, MapPin, Play } from 'lucide-react';
import { VITTA_ASSETS } from '../data/assets';

interface GoogleReviewSectionProps {
  currentLanguage: Language;
}

export const GoogleReviewSection: React.FC<GoogleReviewSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];
  const [selectedStars, setSelectedStars] = useState<number>(5);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyReview = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const handleOpenGoogle = () => {
    window.open(VITTA_ASSETS.location.googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="google-reviews" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 via-amber-50/30 to-white border-t border-amber-100">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl border border-amber-200/80 shadow-2xl shadow-amber-900/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT COLUMN: Colorful Beach Drinks Video Showcase */}
          <div className="lg:col-span-5 relative bg-emerald-950 min-h-[300px] lg:min-h-full flex flex-col justify-end p-6 text-white overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-85"
            >
              <source src={VITTA_ASSETS.googleReviewVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />

            <div className="relative z-10 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-emerald-950 shadow-md">
                <Star className="w-3.5 h-3.5 fill-emerald-950 text-emerald-950" />
                <span>Experiência Real Vitta Mix</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading leading-tight drop-shadow-sm">
                Sucos Coloridos & Gelados na Orla da Praia
              </h3>
              <p className="text-xs text-white/90 drop-shadow-xs">
                {VITTA_ASSETS.location.spot}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Review Actions & Templates */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  {t.googleReview.badge}
                </span>
                <div className="flex items-center gap-1 text-xs font-bold text-stone-500">
                  <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Google Maps & Avaliações</span>
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-heading mb-2">
                {t.googleReview.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                {t.googleReview.subtitle}
              </p>

              {/* Interactive 5-Star Interactive Rating bar */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 mb-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wide block mb-1">
                    {t.googleReview.starsLabel}
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setSelectedStars(star)}
                        className="p-1 hover:scale-125 transition-transform"
                        title={`${star} estrelas`}
                      >
                        <Star
                          className={`w-7 h-7 transition-colors ${
                            star <= selectedStars
                              ? 'fill-amber-400 text-amber-500 drop-shadow-xs'
                              : 'text-stone-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="font-black text-lg text-amber-950 ml-1.5">
                      {selectedStars}.0
                    </span>
                  </div>
                </div>

                {/* Direct Open Button */}
                <button
                  type="button"
                  onClick={handleOpenGoogle}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                >
                  <span>{t.googleReview.ctaButton}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Instruction detail */}
              <p className="text-xs text-stone-500 mb-5 flex items-start gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-700">💡 Dica:</span>
                <span>{t.googleReview.instruction}</span>
              </p>

              {/* Quick Templates */}
              <div>
                <div className="text-xs font-bold text-stone-800 uppercase tracking-wide mb-2.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.googleReview.quickTemplatesTitle}</span>
                </div>

                <div className="space-y-2">
                  {t.googleReview.sampleReviews.map((reviewText, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-stone-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 shadow-xs"
                    >
                      <p className="text-xs text-stone-700 leading-relaxed italic">
                        "{reviewText}"
                      </p>
                      <button
                        type="button"
                        onClick={() => handleCopyReview(reviewText, idx)}
                        className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-950 font-bold text-[11px] transition-colors"
                        title="Copiar texto de avaliação"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">{t.googleReview.copied}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>{t.googleReview.copyTemplate}</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
