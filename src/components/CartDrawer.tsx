import React, { useState } from 'react';
import { CartItem, Currency, Language } from '../types/menu';
import { translations } from '../data/translations';
import { currencyConfigs } from '../data/menuData';
import { X, Trash2, ShoppingBag, Plus, Minus, MessageCircle, Copy, Check, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  currentLanguage: Language;
  currentCurrency: Currency;
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  currentLanguage,
  currentCurrency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const t = translations[currentLanguage];
  const currency = currencyConfigs[currentCurrency] || currencyConfigs.BRL;
  const [copiedToast, setCopiedToast] = useState(false);

  if (!isOpen) return null;

  const totalBRL = cartItems.reduce((acc, item) => acc + item.itemTotalBRL, 0);

  // Generate WhatsApp formatted message
  const generateOrderText = () => {
    let message = `🌿 *PEDIDO — VITTA MIX*\n`;
    message += `📅 Data: ${new Date().toLocaleDateString()}\n`;
    message += `--------------------------------\n`;

    cartItems.forEach((item, index) => {
      const name = item.menuItem.name[currentLanguage] || item.menuItem.name.pt;
      const sizeStr = item.size ? ` (${item.size.volumeOrLabel})` : '';
      message += `*${index + 1}. ${item.quantity}x ${name}${sizeStr}*\n`;

      if (item.condensedMilkChoice === 'yes') {
        message += `   • Leite condensado: Sim\n`;
      } else if (item.condensedMilkChoice === 'no') {
        message += `   • Leite condensado: Não (versão leve)\n`;
      }

      if (item.selectedAddons.length > 0) {
        const addonsNames = item.selectedAddons
          .map((a) => a.name[currentLanguage] || a.name.pt)
          .join(', ');
        message += `   • Adicionais: ${addonsNames}\n`;
      }

      if (item.customNotes) {
        message += `   • Obs: "${item.customNotes}"\n`;
      }

      message += `   • Subtotal: R$ ${item.itemTotalBRL.toFixed(2)}\n\n`;
    });

    message += `--------------------------------\n`;
    message += `*TOTAL ESTIMADO: R$ ${totalBRL.toFixed(2)}*\n`;
    if (currentCurrency !== 'BRL') {
      message += `(Aprox. ${currency.format(totalBRL, currency.rateFromBRL)})\n`;
    }
    message += `\nOlá Vitta Mix! Gostaria de confirmar a disponibilidade e o tempo estimado para este pedido.`;

    return message;
  };

  const handleCopyOrder = () => {
    const text = generateOrderText();
    navigator.clipboard.writeText(text);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2500);
  };

  const handleSendWhatsApp = () => {
    const text = generateOrderText();
    const encoded = encodeURIComponent(text);
    // WhatsApp direct URL (user can send to their local store or contact)
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-emerald-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-800 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-emerald-300" />
            </div>
            <div>
              <h2 className="font-extrabold text-base sm:text-lg font-heading leading-tight">
                {t.cart.title}
              </h2>
              <span className="text-xs text-emerald-300">
                {cartItems.length} {t.cart.itemsCount}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-emerald-900 text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body - Items List */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center text-stone-500">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-stone-800 text-base mb-1">
                {t.cart.emptyTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 max-w-xs mx-auto">
                {t.cart.emptySubtitle}
              </p>
            </div>
          ) : (
            cartItems.map((item) => {
              const name = item.menuItem.name[currentLanguage] || item.menuItem.name.pt;
              return (
                <div
                  key={item.cartItemId}
                  className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col gap-2 relative group hover:border-emerald-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm leading-snug">
                        {name}
                      </h4>
                      {item.size && (
                        <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md inline-block mt-0.5">
                          {item.size.name[currentLanguage] || item.size.name.pt} ({item.size.volumeOrLabel})
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.cartItemId)}
                      className="text-stone-400 hover:text-rose-600 p-1 rounded-md transition-colors"
                      title="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add-ons & condensed milk info */}
                  {item.selectedAddons.length > 0 && (
                    <div className="text-[11px] text-stone-600 bg-white p-2 rounded-xl border border-stone-100">
                      <span className="font-bold text-emerald-800 block mb-0.5">
                        {t.cart.addonsIncluded}
                      </span>
                      <ul className="list-disc list-inside space-y-0.5">
                        {item.selectedAddons.map((addon) => (
                          <li key={addon.id}>
                            {addon.name[currentLanguage] || addon.name.pt} (+{currency.format(addon.price, currency.rateFromBRL)})
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.condensedMilkChoice === 'yes' && (
                    <div className="text-[11px] text-amber-800 bg-amber-50 px-2 py-1 rounded-md font-medium">
                      🥛 Com leite condensado (+ cremoso)
                    </div>
                  )}
                  {item.condensedMilkChoice === 'no' && (
                    <div className="text-[11px] text-stone-600 bg-stone-100 px-2 py-1 rounded-md font-medium">
                      🍃 Sem leite condensado (leve)
                    </div>
                  )}

                  {item.customNotes && (
                    <div className="text-[11px] text-stone-500 italic bg-white px-2 py-1 rounded-md border border-stone-100">
                      "{item.customNotes}"
                    </div>
                  )}

                  {/* Quantity and Price */}
                  <div className="flex items-center justify-between pt-1 border-t border-stone-200/60 mt-1">
                    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-stone-200">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.cartItemId, -1)}
                        className="text-stone-600 hover:text-emerald-700 p-0.5"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-black text-xs min-w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.cartItemId, 1)}
                        className="text-stone-600 hover:text-emerald-700 p-0.5"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="font-black text-stone-900 text-sm">
                      {currency.format(item.itemTotalBRL, currency.rateFromBRL)}
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {cartItems.length > 0 && (
            <div className="text-right pt-2">
              <button
                type="button"
                onClick={onClearCart}
                className="text-xs text-rose-600 hover:text-rose-800 font-semibold underline underline-offset-2"
              >
                {t.cart.clearCart}
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer with Actions */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3">
            {/* Total display */}
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-bold text-stone-600 uppercase tracking-wide">
                {t.cart.subtotal}
              </span>
              <div className="text-right">
                <span className="text-2xl font-black text-emerald-950 font-heading">
                  {currency.format(totalBRL, currency.rateFromBRL)}
                </span>
                {currentCurrency !== 'BRL' && (
                  <div className="text-[11px] text-stone-400">
                    (R$ {totalBRL.toFixed(2)})
                  </div>
                )}
              </div>
            </div>

            {/* Delivery/Order notice */}
            <p className="text-[11px] text-stone-500 leading-tight">
              {t.cart.deliveryOrPickupNote}
            </p>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all transform active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-white fill-white" />
                <span>{t.cart.whatsappOrderButton}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyOrder}
                className="w-full py-2.5 px-4 rounded-2xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                {copiedToast ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-black">{t.cart.orderCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-stone-600" />
                    <span>{t.cart.copyOrderButton}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
