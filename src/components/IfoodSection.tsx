import React from 'react';
import { Language } from '../types/menu';
import { UtensilsCrossed, ExternalLink, ShieldCheck, Zap, ThermometerSnowflake, Clock, MapPin } from 'lucide-react';
import { VITTA_ASSETS } from '../data/assets';

interface IfoodSectionProps {
  currentLanguage: Language;
}

export const IfoodSection: React.FC<IfoodSectionProps> = ({ currentLanguage }) => {
  const handleOpenIfood = () => {
    window.open(VITTA_ASSETS.ifoodSearchUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="ifood-delivery" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50/40 via-white to-stone-50 border-t border-rose-100">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-rose-950 via-rose-900 to-emerald-950 rounded-3xl overflow-hidden shadow-2xl text-white border border-rose-800/40 grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT: Video Delivery Showcase */}
          <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[400px] flex flex-col justify-end p-6 sm:p-8 overflow-hidden bg-black/40">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-90 scale-105"
            >
              <source src={VITTA_ASSETS.ifoodVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950 via-rose-950/40 to-transparent" />

            <div className="relative z-10 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500 text-white shadow-lg">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Delivery Oficial iFood</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading leading-tight">
                Vitta Mix na Sua Porta ou na Praia!
              </h3>
              <p className="text-xs sm:text-sm text-rose-200">
                Receba seu açaí e sucos bem geladinhos sem sair do conforto da sua cadeira ou pousada.
              </p>
            </div>
          </div>

          {/* RIGHT: Ordering Details & Big CTA */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 text-xs font-bold mb-3">
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>Entregas Rápidas na Praia do Francês</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight mb-3">
                Peça no <span className="text-rose-400">iFood</span>
              </h2>

              <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed mb-6">
                Todos os nossos sucos especiais, mixes de açaí com superalimentos, pão de queijo quentinho e adicionais disponíveis no aplicativo mais amado do Brasil.
              </p>

              {/* Delivery Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/30 text-rose-300 flex items-center justify-center flex-shrink-0">
                    <ThermometerSnowflake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">Chega Trincando</h4>
                    <p className="text-[11px] text-rose-200/80">Embalagens térmicas vedadas.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">Entrega Ágil</h4>
                    <p className="text-[11px] text-rose-200/80">Preparo no capricho e saída rápida.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/30 text-amber-300 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">Na Areia ou Pousada</h4>
                    <p className="text-[11px] text-rose-200/80">Atendemos toda a orla do Francês.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/30 text-blue-300 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">100% Garantido</h4>
                    <p className="text-[11px] text-rose-200/80">Qualidade padrão Vitta Mix.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Big Action Button */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={handleOpenIfood}
                className="w-full py-4 px-6 rounded-2xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-black text-sm sm:text-base shadow-xl shadow-rose-600/40 flex items-center justify-center gap-3 transition-all transform active:scale-98"
              >
                <UtensilsCrossed className="w-5 h-5" />
                <span>Pedir Agora no iFood 🛵💨</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </button>
              <p className="text-[11px] text-center text-rose-200/70">
                Toque para abrir o Vitta Mix diretamente no app ou site do iFood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
