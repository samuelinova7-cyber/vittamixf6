import React from 'react';
import { Language } from '../types/menu';
import { Bike, Sparkles, MapPin, ExternalLink, MessageCircle, ShieldCheck, Clock, Zap } from 'lucide-react';
import { VITTA_ASSETS } from '../data/assets';

interface DeliverySectionProps {
  currentLanguage: Language;
}

export const DeliverySection: React.FC<DeliverySectionProps> = ({ currentLanguage }) => {
  const isPt = currentLanguage === 'pt';

  const handleOpenIfood = () => {
    window.open('https://www.ifood.com.br/delivery/busca?q=Vitta%20Mix', '_blank', 'noopener,noreferrer');
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá Vitta Mix! Gostaria de fazer um pedido para entrega / delivery na Praia do Francês.'
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="ifood-delivery" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 via-red-50/20 to-white border-t border-red-100/80">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-stone-800">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-600 text-white shadow-md shadow-red-600/30">
                  <Bike className="w-3.5 h-3.5" />
                  <span>Delivery & iFood</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Praia do Francês e Região</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight">
                Receba o melhor da{' '}
                <span className="bg-gradient-to-r from-red-400 via-amber-300 to-emerald-300 bg-clip-text text-transparent">
                  Vitta Mix
                </span>{' '}
                onde você estiver!
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-xl">
                {isPt
                  ? 'Sucos naturais bem geladinhos, mixes de açaí cremosos e pão de queijo quentinho entregues direto na sua casa, pousada ou na praia com agilidade e embalagens térmicas exclusivas.'
                  : 'Fresh ice-cold juices, velvety açaí bowls and warm cheese bread delivered directly to your home, inn, or beach spot with speed and thermal packaging.'}
              </p>

              {/* Delivery highlights pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs">Entrega Rápida</div>
                    <div className="text-[10px] text-stone-400">Na orla e pousadas</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs">100% Geladinho</div>
                    <div className="text-[10px] text-stone-400">Embalagem térmica</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs">Feito na Hora</div>
                    <div className="text-[10px] text-stone-400">Frutas selecionadas</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleOpenIfood}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-sm sm:text-base shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                >
                  <Bike className="w-4 h-4" />
                  <span>Pedir no iFood</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </button>

                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir no WhatsApp Delivery</span>
                </button>
              </div>
            </div>

            {/* Right Video Mockup Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-2 border-stone-700/80 bg-black aspect-[9/14]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={VITTA_ASSETS.ifoodVideo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Floating micro badges inside video */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-bold backdrop-blur-xs flex items-center gap-1 shadow-md">
                    <Bike className="w-3 h-3" />
                    <span>iFood Delivery</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-medium backdrop-blur-xs">
                    Vitta Mix
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-xs text-white/90 font-semibold drop-shadow-md">
                    🏍️ O sabor da Vitta Mix voando até você!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
