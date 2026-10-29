import React from 'react';
import { Language } from '../types/menu';
import { translations } from '../data/translations';
import { Instagram, ExternalLink, Camera, Sparkles, Heart } from 'lucide-react';

interface InstagramSectionProps {
  currentLanguage: Language;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  const instagramPosts = [
    {
      title: 'Vitta Sunset 🍊🍓',
      desc: 'Camada de laranja pura + frozen cremoso de morango',
      gradient: 'from-amber-400 via-orange-500 to-rose-500',
      tag: '#SucosEspeciais',
    },
    {
      title: 'Mix Power Açaí ⚡',
      desc: 'Ginseng, guaraná da Amazônia, castanha de caju & leite em pó',
      gradient: 'from-purple-950 via-purple-900 to-indigo-950',
      tag: '#AcaiFuncional',
    },
    {
      title: 'Frutas Nativas Raras 🥭',
      desc: 'Cupuaçu, Jenipapo, Cajá, Umbu e Ciriguela frescas todos os dias',
      gradient: 'from-emerald-600 via-teal-600 to-lime-600',
      tag: '#FrutasBrasileiras',
    },
    {
      title: 'Pão de Queijo Kidelícia 🥖',
      desc: 'Quentinho saindo do forno a toda hora para acompanhar seu suco',
      gradient: 'from-amber-300 via-yellow-500 to-amber-600',
      tag: '#LancheNatural',
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-pink-50/20 to-stone-50 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pink-100 text-pink-800 border border-pink-200">
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>Instagram Oficial</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-stone-900 font-heading">
              {t.instagram.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 max-w-xl mt-1">
              {t.instagram.subtitle}
            </p>
          </div>

          <a
            href="https://www.instagram.com/vittamix.oficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:from-pink-700 hover:to-rose-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-pink-500/25 transition-all transform active:scale-95"
          >
            <Instagram className="w-4 h-4" />
            <span>{t.instagram.ctaFollow}</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>
        </div>

        {/* Visual Instagram Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {instagramPosts.map((post, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/vittamix.oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden p-6 text-white flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-95 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-xs border border-white/20">
                  {post.tag}
                </span>
                <Heart className="w-4 h-4 text-white/80 group-hover:text-white group-hover:fill-white transition-colors" />
              </div>

              <div className="relative z-10">
                <h3 className="font-black text-lg font-heading leading-tight mb-1 text-white">
                  {post.title}
                </h3>
                <p className="text-xs text-white/90 leading-snug">
                  {post.desc}
                </p>
                <div className="mt-3 text-[11px] font-bold text-amber-200 group-hover:underline flex items-center gap-1">
                  <span>Ver foto no Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Tag Notice */}
        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs text-center text-xs sm:text-sm text-stone-600 flex items-center justify-center gap-2">
          <Camera className="w-4 h-4 text-pink-600" />
          <span>{t.instagram.tagUsNotice}</span>
        </div>
      </div>
    </section>
  );
};
