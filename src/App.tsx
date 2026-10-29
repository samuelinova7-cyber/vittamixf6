import React, { useState, useEffect, useMemo } from 'react';
import {
  AddonOption,
  CartItem,
  CategoryId,
  Currency,
  Language,
  MenuItem,
  MenuItemSize,
} from './types/menu';
import {
  allMenuItems,
  specialJuices,
  acaiMixes,
  addonItems,
  pulpJuiceItems,
  drinksAndSnacks,
  currencyConfigs,
} from './data/menuData';
import { translations } from './data/translations';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { MenuItemCard } from './components/MenuItemCard';
import { ItemCustomizerModal } from './components/ItemCustomizerModal';
import { CartDrawer } from './components/CartDrawer';
import { FruitGuideModal } from './components/FruitGuideModal';
import { GoogleReviewSection } from './components/GoogleReviewSection';
import { IfoodSection } from './components/IfoodSection';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import {
  Sparkles,
  ShoppingBag,
  Heart,
  BookOpen,
  Filter,
  CheckCircle2,
  ArrowRight,
  Flame,
} from 'lucide-react';

export default function App() {
  // Persistence for language & currency
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('vittamix_lang');
    return (saved as Language) || 'pt';
  });

  const [currentCurrency, setCurrentCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem('vittamix_curr');
    return (saved as Currency) || 'BRL';
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('vittamix_favs');
      return saved ? JSON.parse(saved) : ['vitta_sunset', 'mix_power', 'pao_de_queijo'];
    } catch {
      return ['vitta_sunset', 'mix_power'];
    }
  });

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('vittamix_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Filters & Search
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Modals state
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [customizingSize, setCustomizingSize] = useState<MenuItemSize | undefined>(undefined);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFruitGuideOpen, setIsFruitGuideOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('vittamix_lang', currentLanguage);
  }, [currentLanguage]);

  useEffect(() => {
    localStorage.setItem('vittamix_curr', currentCurrency);
  }, [currentCurrency]);

  useEffect(() => {
    localStorage.setItem('vittamix_favs', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('vittamix_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const t = translations[currentLanguage];
  const currency = currencyConfigs[currentCurrency] || currencyConfigs.BRL;

  // Toggle favorite
  const handleToggleFavorite = (itemId: string) => {
    setFavorites((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  // Open customizer
  const handleOpenCustomize = (item: MenuItem, preselectedSize?: MenuItemSize) => {
    setCustomizingItem(item);
    setCustomizingSize(preselectedSize);
    setIsCustomizerOpen(true);
  };

  // Add to cart from customizer
  const handleAddToCart = (
    item: MenuItem,
    size: MenuItemSize | undefined,
    selectedAddons: AddonOption[],
    condensedMilkChoice: 'yes' | 'no' | 'none',
    customNotes: string,
    quantity: number,
    itemTotalBRL: number
  ) => {
    const newItem: CartItem = {
      cartItemId: `${item.id}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      menuItem: item,
      size,
      selectedAddons,
      condensedMilkChoice,
      customNotes,
      quantity,
      itemTotalBRL,
    };
    setCartItems((prev) => [newItem, ...prev]);
  };

  // Update cart quantities
  const handleUpdateCartQuantity = (cartItemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            const singleUnitPrice = item.itemTotalBRL / item.quantity;
            return {
              ...item,
              quantity: newQty,
              itemTotalBRL: singleUnitPrice * newQty,
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove single cart item
  const handleRemoveCartItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Scroll smoothly to category section
  const handleScrollToCategory = (categoryId: string) => {
    const el = document.getElementById(categoryId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to review section
  const handleScrollToReviews = () => {
    const el = document.getElementById('google-reviews');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to iFood delivery section
  const handleScrollToIfood = () => {
    const el = document.getElementById('ifood-delivery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter helper
  const filterItem = (item: MenuItem) => {
    // Search match
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const name = (item.name[currentLanguage] || item.name.pt).toLowerCase();
      const origName = item.name.pt.toLowerCase();
      const desc = (item.description[currentLanguage] || item.description.pt).toLowerCase();
      const ingr = (item.ingredients[currentLanguage] || item.ingredients.pt).toLowerCase();
      const matchesSearch =
        name.includes(q) || origName.includes(q) || desc.includes(q) || ingr.includes(q);
      if (!matchesSearch) return false;
    }

    // Active filter pill
    if (activeFilter === 'all') return true;
    if (activeFilter === 'popular') return item.popular || favorites.includes(item.id);
    if (activeFilter === 'energy') return item.tags.includes('energy');
    if (activeFilter === 'detox') return item.tags.includes('detox');
    if (activeFilter === 'citrus') return item.tags.includes('citrus');
    if (activeFilter === 'vegan') return item.tags.includes('vegan');

    return true;
  };

  // Filtered lists for each section
  const filteredSpecialJuices = useMemo(
    () => specialJuices.filter(filterItem),
    [specialJuices, searchTerm, activeFilter, currentLanguage, favorites]
  );

  const filteredAcaiMixes = useMemo(
    () => acaiMixes.filter(filterItem),
    [acaiMixes, searchTerm, activeFilter, currentLanguage, favorites]
  );

  const filteredAddonItems = useMemo(
    () => addonItems.filter(filterItem),
    [addonItems, searchTerm, activeFilter, currentLanguage, favorites]
  );

  const filteredPulpJuiceItems = useMemo(
    () => pulpJuiceItems.filter(filterItem),
    [pulpJuiceItems, searchTerm, activeFilter, currentLanguage, favorites]
  );

  const filteredDrinksAndSnacks = useMemo(
    () => drinksAndSnacks.filter(filterItem),
    [drinksAndSnacks, searchTerm, activeFilter, currentLanguage, favorites]
  );

  const totalMatchesCount =
    filteredSpecialJuices.length +
    filteredAcaiMixes.length +
    filteredAddonItems.length +
    filteredPulpJuiceItems.length +
    filteredDrinksAndSnacks.length;

  const cartTotalBRL = cartItems.reduce((acc, curr) => acc + curr.itemTotalBRL, 0);
  const cartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Header */}
      <Header
        currentLanguage={currentLanguage}
        onSelectLanguage={setCurrentLanguage}
        currentCurrency={currentCurrency}
        onSelectCurrency={setCurrentCurrency}
        cartItemCount={cartCount}
        cartTotalBRL={cartTotalBRL}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFruitGuide={() => setIsFruitGuideOpen(true)}
        onOpenReviews={handleScrollToReviews}
        onScrollToIfood={handleScrollToIfood}
      />

      {/* Hero Banner with Filters and Search */}
      <HeroBanner
        currentLanguage={currentLanguage}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        onScrollToCategory={handleScrollToCategory}
        onOpenFruitGuide={() => setIsFruitGuideOpen(true)}
        onScrollToIfood={handleScrollToIfood}
      />

      {/* Main Menu Sections Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Active search or filter feedback indicator */}
        {(searchTerm || activeFilter !== 'all') && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-950 font-semibold">
              <Filter className="w-4 h-4 text-emerald-700" />
              <span>
                Exibindo resultados filtrados: <strong>{totalMatchesCount} itens encontrados</strong>
                {searchTerm && ` para "${searchTerm}"`}
              </span>
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
              className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* SECTION 1: SUCOS ESPECIAIS */}
        {filteredSpecialJuices.length > 0 && (
          <section id="special_juices" className="scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 border-b border-emerald-100 pb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-black text-xs">
                    1
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Assinatura Vitta Mix
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-heading">
                  {t.categories.special_juices}
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                  {t.categoryDescriptions.special_juices}
                </p>
              </div>
              <span className="text-xs font-semibold text-stone-400">
                {filteredSpecialJuices.length} receitas
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSpecialJuices.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  currentLanguage={currentLanguage}
                  currentCurrency={currentCurrency}
                  onCustomize={handleOpenCustomize}
                  isFavorite={favorites.includes(item.id)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: MIX DE AÇAÍ */}
        {filteredAcaiMixes.length > 0 && (
          <section id="acai_mix" className="scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 border-b border-purple-100 pb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-7 h-7 rounded-lg bg-purple-900 text-white flex items-center justify-center font-black text-xs">
                    2
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-800">
                    Superalimentos & Vitalidade
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-heading">
                  {t.categories.acai_mix}
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                  {t.categoryDescriptions.acai_mix}
                </p>
              </div>
              <span className="text-xs font-semibold text-stone-400">
                {filteredAcaiMixes.length} blends
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredAcaiMixes.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  currentLanguage={currentLanguage}
                  currentCurrency={currentCurrency}
                  onCustomize={handleOpenCustomize}
                  isFavorite={favorites.includes(item.id)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: ADICIONAIS */}
        {filteredAddonItems.length > 0 && (
          <section id="addons" className="scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 border-b border-stone-200 pb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-7 h-7 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-black text-xs">
                    3
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Boosters Nutricionais
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-heading">
                  {t.categories.addons}
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                  {t.categoryDescriptions.addons}
                </p>
              </div>
              <span className="text-xs font-semibold text-stone-400">
                {filteredAddonItems.length} opções
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredAddonItems.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  currentLanguage={currentLanguage}
                  currentCurrency={currentCurrency}
                  onCustomize={handleOpenCustomize}
                  isFavorite={favorites.includes(item.id)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          </section>
        )}

        {/* SECTION 4: SUCOS DE POLPA & BANNER DO GUIA DE FRUTAS */}
        {filteredPulpJuiceItems.length > 0 && (
          <section id="pulp_juices" className="scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 border-b border-amber-100 pb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center font-black text-xs">
                    4
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Biodiversidade Brasileira
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-heading">
                  {t.categories.pulp_juices}
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                  {t.categoryDescriptions.pulp_juices}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsFruitGuideOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300 transition-colors shadow-xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>Explorar Guia das Frutas</span>
              </button>
            </div>

            {/* Special Callout Card for Brazilian Tropical Pulps */}
            <div className="mb-6 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg border border-emerald-800">
              <div className="space-y-1 text-center md:text-left">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-emerald-950 text-[10px] font-black uppercase tracking-wider">
                  Destaque Cultural
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-heading">
                  Descubra os sabores do Nordeste e da Amazônia
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200/90 max-w-xl">
                  Cupuaçu, Jenipapo, Cajá, Umbu-cajá, Ciriguela, Mangaba e Graviola. Veja o perfil sensorial e benefícios de cada fruta em nosso guia interativo!
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsFruitGuideOpen(true)}
                className="flex-shrink-0 px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
              >
                <span>Abrir Guia Ilustrado</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPulpJuiceItems.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  currentLanguage={currentLanguage}
                  currentCurrency={currentCurrency}
                  onCustomize={handleOpenCustomize}
                  isFavorite={favorites.includes(item.id)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          </section>
        )}

        {/* SECTION 5: BEBIDAS & LANCHES */}
        {filteredDrinksAndSnacks.length > 0 && (
          <section id="drinks_snacks" className="scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 border-b border-stone-200 pb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-7 h-7 rounded-lg bg-stone-800 text-white flex items-center justify-center font-black text-xs">
                    5
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Acompanhamentos Perfeitos
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-heading">
                  {t.categories.drinks_snacks}
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                  {t.categoryDescriptions.drinks_snacks}
                </p>
              </div>
              <span className="text-xs font-semibold text-stone-400">
                {filteredDrinksAndSnacks.length} itens
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDrinksAndSnacks.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  currentLanguage={currentLanguage}
                  currentCurrency={currentCurrency}
                  onCustomize={handleOpenCustomize}
                  isFavorite={favorites.includes(item.id)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          </section>
        )}

        {/* Empty state when search yields no result */}
        {totalMatchesCount === 0 && (
          <div className="py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-3 text-2xl">
              🔍
            </div>
            <h3 className="text-lg font-bold text-stone-800 mb-1">
              Nenhum item encontrado
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mb-4">
              Tente buscar por outro ingrediente, fruta ou limpe os filtros selecionados.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
              className="px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800"
            >
              Ver Cardápio Completo
            </button>
          </div>
        )}
      </main>

      {/* iFood Delivery Section */}
      <IfoodSection currentLanguage={currentLanguage} />

      {/* Google Review Section */}
      <GoogleReviewSection currentLanguage={currentLanguage} />

      {/* Instagram Section */}
      <InstagramSection currentLanguage={currentLanguage} />

      {/* Footer */}
      <Footer
        currentLanguage={currentLanguage}
        onSelectLanguage={setCurrentLanguage}
        onOpenReviews={handleScrollToReviews}
        onOpenFruitGuide={() => setIsFruitGuideOpen(true)}
        onScrollToIfood={handleScrollToIfood}
      />

      {/* Floating Bottom Bar for Mobile when items are in cart */}
      {cartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white font-black text-sm shadow-2xl shadow-emerald-900/40 flex items-center justify-between border border-emerald-400/30 animate-in slide-in-from-bottom duration-200"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-emerald-950 text-xs font-black flex items-center justify-center">
                {cartCount}
              </span>
              <span>Ver Pedido</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold font-heading">
                {currency.format(cartTotalBRL, currency.rateFromBRL)}
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      )}

      {/* Item Customizer Modal */}
      <ItemCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        item={customizingItem}
        preselectedSize={customizingSize}
        currentLanguage={currentLanguage}
        currentCurrency={currentCurrency}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        currentLanguage={currentLanguage}
        currentCurrency={currentCurrency}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Fruit Guide Modal */}
      <FruitGuideModal
        isOpen={isFruitGuideOpen}
        onClose={() => setIsFruitGuideOpen(false)}
        currentLanguage={currentLanguage}
        onSelectFruitJuice={(fruitPt) => {
          setSearchTerm(fruitPt);
          handleScrollToCategory('pulp_juices');
        }}
      />
    </div>
  );
}
