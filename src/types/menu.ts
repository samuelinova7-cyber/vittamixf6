export type Language = 'pt' | 'en' | 'es' | 'fr' | 'ja';

export type Currency = 'BRL' | 'USD' | 'EUR' | 'JPY';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  rateFromBRL: number; // e.g. USD: 0.18, EUR: 0.16, JPY: 27.5
  format: (amountInBRL: number, rate: number) => string;
}

export type CategoryId = 
  | 'special_juices' 
  | 'acai_mix' 
  | 'addons' 
  | 'pulp_juices' 
  | 'drinks_snacks';

export interface LocalizedString {
  pt: string;
  en: string;
  es: string;
  fr: string;
  ja: string;
}

export interface MenuItemSize {
  name: LocalizedString;
  volumeOrLabel: string;
  priceDelta: number; // relative to base price or absolute
  isDefault?: boolean;
}

export interface AddonOption {
  id: string;
  name: LocalizedString;
  price: number;
  highlight?: LocalizedString;
}

export interface MenuItem {
  id: string;
  categoryId: CategoryId;
  name: LocalizedString;
  description: LocalizedString;
  ingredients: LocalizedString;
  basePrice: number;
  tags: string[]; // 'detox', 'energy', 'citrus', 'creamy', 'vegan', 'protein', 'special'
  imageGradient: string;
  sizes?: MenuItemSize[];
  popular?: boolean;
  notes?: LocalizedString;
  photoUrl?: string;
  slogan?: LocalizedString;
  qualityBadge?: LocalizedString;
  benefitsList?: LocalizedString[];
}

export interface PulpFruit {
  id: string;
  name: LocalizedString;
  scientificName?: string;
  flavorProfile: {
    pt: string;
    en: string;
    es: string;
    fr: string;
    ja: string;
  };
  benefits: LocalizedString;
  sweetness: number; // 1 to 5
  tartness: number; // 1 to 5
  color: string;
  origin: string;
}

export interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  size?: MenuItemSize;
  selectedAddons: AddonOption[];
  condensedMilkChoice?: 'yes' | 'no' | 'none';
  customNotes?: string;
  quantity: number;
  itemTotalBRL: number;
}
