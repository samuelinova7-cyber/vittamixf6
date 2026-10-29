import { Language } from '../types/menu';

export interface TranslationStrings {
  brandSubtitle: string;
  badgeNatural: string;
  badgeFresh: string;
  searchPlaceholder: string;
  allCategories: string;
  categories: {
    special_juices: string;
    acai_mix: string;
    addons: string;
    pulp_juices: string;
    drinks_snacks: string;
  };
  categoryDescriptions: {
    special_juices: string;
    acai_mix: string;
    addons: string;
    pulp_juices: string;
    drinks_snacks: string;
  };
  filters: {
    all: string;
    favorites: string;
    energy: string;
    detox: string;
    citrus: string;
    vegan: string;
  };
  customizer: {
    title: string;
    chooseSize: string;
    chooseAddons: string;
    condensedMilkPrompt: string;
    condensedMilkYes: string;
    condensedMilkNo: string;
    specialNotesPrompt: string;
    specialNotesPlaceholder: string;
    addToOrder: string;
    updateOrder: string;
    pricePerUnit: string;
    quantity: string;
  };
  cart: {
    title: string;
    emptyTitle: string;
    emptySubtitle: string;
    itemsCount: string;
    subtotal: string;
    estimatedConverted: string;
    whatsappOrderButton: string;
    copyOrderButton: string;
    orderCopied: string;
    clearCart: string;
    addonsIncluded: string;
    deliveryOrPickupNote: string;
  };
  fruitGuide: {
    title: string;
    badge: string;
    subtitle: string;
    clickToLearnMore: string;
    flavor: string;
    benefits: string;
    sweetness: string;
    tartness: string;
    close: string;
    origin: string;
  };
  googleReview: {
    title: string;
    badge: string;
    subtitle: string;
    instruction: string;
    ctaButton: string;
    quickTemplatesTitle: string;
    copyTemplate: string;
    copied: string;
    starsLabel: string;
    sampleReviews: string[];
  };
  instagram: {
    title: string;
    handle: string;
    subtitle: string;
    ctaFollow: string;
    tagUsNotice: string;
    highlights: string[];
  };
  footer: {
    motto: string;
    openingHours: string;
    hoursDetails: string;
    locationTitle: string;
    locationDesc: string;
    rights: string;
  };
  currencyModal: {
    label: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, TranslationStrings> = {
  pt: {
    brandSubtitle: 'Sucos Especiais, Açaí Funcional & Frutas Naturais',
    badgeNatural: '100% Natural & Artesanal',
    badgeFresh: 'Frutas Frescas Selecionadas',
    searchPlaceholder: 'Buscar sucos, açaí, polpas ou ingredientes...',
    allCategories: 'Cardápio Completo',
    categories: {
      special_juices: '1. Sucos Especiais',
      acai_mix: '2. Mix de Açaí — Funcionais',
      addons: '3. Adicionais & Boosters',
      pulp_juices: '4. Sucos de Polpa Tropical',
      drinks_snacks: '5. Bebidas & Lanches',
    },
    categoryDescriptions: {
      special_juices: 'Receitas exclusivas Vitta Mix pensadas para nutrir, revigorar e refrescar seu dia.',
      acai_mix: 'Mixes funcionais potencializados com superalimentos, sementes nobres e castanhas.',
      addons: 'Personalize seu açaí ou suco com proteínas e suplementos de alta qualidade.',
      pulp_juices: 'A riqueza e a biodiversidade das polpas de frutas brasileiras e regionais.',
      drinks_snacks: 'Águas puras, pão de queijo quentinho da Kidelícia, sanduíche natural e sorvetes.',
    },
    filters: {
      all: 'Todos',
      favorites: '⭐ Destaques',
      energy: '⚡ Energia & Foco',
      detox: '🍃 Detox & Leve',
      citrus: '🍊 Cítrico & Imunidade',
      vegan: '🌱 Vegano / Sem Lactose',
    },
    customizer: {
      title: 'Personalizar Item',
      chooseSize: 'Escolha o Tamanho / Porção',
      chooseAddons: 'Deseja turbinar com adicionais?',
      condensedMilkPrompt: 'Opção de Leite Condensado:',
      condensedMilkYes: 'Com leite condensado (+ cremoso)',
      condensedMilkNo: 'Sem leite condensado (versão leve)',
      specialNotesPrompt: 'Observações para o preparo:',
      specialNotesPlaceholder: 'Ex: Sem açúcar, bem gelado, levar colher...',
      addToOrder: 'Adicionar ao Pedido',
      updateOrder: 'Atualizar Item',
      pricePerUnit: 'Preço unitário',
      quantity: 'Quantidade',
    },
    cart: {
      title: 'Sua Sacola Vitta Mix',
      emptyTitle: 'Sua sacola está vazia',
      emptySubtitle: 'Explore nossos sucos especiais e mixes de açaí para começar!',
      itemsCount: 'itens',
      subtotal: 'Total Estimado',
      estimatedConverted: 'Aprox. em outra moeda:',
      whatsappOrderButton: 'Enviar Pedido pelo WhatsApp 💬',
      copyOrderButton: 'Copiar Detalhes do Pedido 📋',
      orderCopied: 'Pedido copiado para a área de transferência!',
      clearCart: 'Limpar Sacola',
      addonsIncluded: 'Adicionais:',
      deliveryOrPickupNote: 'Finalize diretamente enviando os itens para nosso atendimento.',
    },
    fruitGuide: {
      title: 'Guia de Frutas Brasileiras & Regionais',
      badge: 'Biodiversidade Tropical',
      subtitle: 'Conheça o sabor único, propriedades nutricionais e a história das nossas polpas.',
      clickToLearnMore: 'Toque para ver detalhes da fruta',
      flavor: 'Perfil de Sabor',
      benefits: 'Benefícios',
      sweetness: 'Doçura',
      tartness: 'Acidez / Cítrico',
      close: 'Fechar Guia',
      origin: 'Origem Bioma',
    },
    googleReview: {
      title: 'Avalie a Vitta Mix no Google',
      badge: 'Sua Opinião Faz a Diferença',
      subtitle: 'Ajude a Vitta Mix a crescer ainda mais! Deixe sua avaliação com 5 estrelas ⭐ e compartilhe sua experiência.',
      instruction: 'Basta pesquisar "Vitta Mix" no Google Maps ou clicar no botão abaixo para abrir diretamente a página de avaliação.',
      ctaButton: 'Abrir Google para Avaliar ⭐⭐⭐⭐⭐',
      quickTemplatesTitle: 'Sugestões rápidas de avaliação (clique para copiar):',
      copyTemplate: 'Copiar texto',
      copied: 'Copiado!',
      starsLabel: 'Nota de satisfação:',
      sampleReviews: [
        'Atendimento impecável e produtos super frescos! O suco Vitta Sunset e o Mix Power são os melhores que já provei. Recomendo demais! ⭐⭐⭐⭐⭐',
        'Melhor açaí da cidade! Cremoso na medida certa e os mixes funcionais dão uma energia incrível para o dia a dia. Ambiente agradável! ⭐⭐⭐⭐⭐',
        'Sucos naturais de verdade com frutas regionais maravilhosas como cupuaçu e graviola. O pão de queijo quentinho é uma delícia. 10/10! ⭐⭐⭐⭐⭐',
      ],
    },
    instagram: {
      title: 'Siga a Vitta Mix no Instagram',
      handle: '@vittamix.oficial',
      subtitle: 'Acompanhe novidades, combos do dia, bastidores das frutas frescas e promoções exclusivas!',
      ctaFollow: 'Seguir no Instagram @vittamix.oficial 📸',
      tagUsNotice: 'Marque a @vittamix.oficial nos seus stories para aparecer no nosso feed!',
      highlights: [
        'Receitas Exclusivas de Sucos & Detox',
        'Novos Combos Funcionais com Açaí',
        'Fotos e Momentos dos Nossos Clientes',
        'Dicas de Nutrição & Bem-estar',
      ],
    },
    footer: {
      motto: 'Alimentando sua melhor versão com o poder da natureza tropical.',
      openingHours: 'Horário de Funcionamento',
      hoursDetails: 'Segunda a Sábado: 08:00 às 20:00 | Domingo: 09:00 às 18:00',
      locationTitle: 'Vitta Mix — Sucos & Açaí',
      locationDesc: 'Visite nossa loja ou faça seu pedido para retirada e delivery.',
      rights: 'Todos os direitos reservados.',
    },
    currencyModal: {
      label: 'Moeda de exibição:',
      disclaimer: 'Valores em moedas estrangeiras são estimativas para sua conveniência.',
    },
  },
  en: {
    brandSubtitle: 'Special Juices, Functional Açaí & Tropical Fresh Fruits',
    badgeNatural: '100% Natural & Handcrafted',
    badgeFresh: 'Carefully Selected Fresh Fruits',
    searchPlaceholder: 'Search juices, açaí, pulp fruits or ingredients...',
    allCategories: 'Full Menu',
    categories: {
      special_juices: '1. Special Juices',
      acai_mix: '2. Açaí Mixes — Functional',
      addons: '3. Add-ons & Boosters',
      pulp_juices: '4. Tropical Fruit Pulp Juices',
      drinks_snacks: '5. Drinks & Snacks',
    },
    categoryDescriptions: {
      special_juices: 'Exclusive Vitta Mix signature recipes designed to nourish, revitalize and refresh.',
      acai_mix: 'Functional açaí bowls boosted with superfoods, wholesome grains, seeds and nuts.',
      addons: 'Supercharge your açaí bowl or juice with premium proteins and supplements.',
      pulp_juices: 'The exotic richness and biodiversity of Brazilian tropical native fruits.',
      drinks_snacks: 'Pure waters, warm Brazilian cheese bread (pão de queijo), natural sandwich and ice cream cones.',
    },
    filters: {
      all: 'All',
      favorites: '⭐ Popular',
      energy: '⚡ Energy & Focus',
      detox: '🍃 Detox & Light',
      citrus: '🍊 Citrus & Immunity',
      vegan: '🌱 Vegan / Dairy-Free',
    },
    customizer: {
      title: 'Customize Item',
      chooseSize: 'Choose Size / Portion',
      chooseAddons: 'Would you like extra boosters?',
      condensedMilkPrompt: 'Condensed Milk Preference:',
      condensedMilkYes: 'With condensed milk (creamy & sweet)',
      condensedMilkNo: 'Without condensed milk (light version)',
      specialNotesPrompt: 'Preparation Notes:',
      specialNotesPlaceholder: 'E.g.: No sugar, extra ice, include spoon...',
      addToOrder: 'Add to Order',
      updateOrder: 'Update Item',
      pricePerUnit: 'Unit Price',
      quantity: 'Quantity',
    },
    cart: {
      title: 'Your Vitta Mix Bag',
      emptyTitle: 'Your bag is empty',
      emptySubtitle: 'Explore our special juices and functional açaí bowls to get started!',
      itemsCount: 'items',
      subtotal: 'Estimated Total',
      estimatedConverted: 'Approx. in your currency:',
      whatsappOrderButton: 'Send Order via WhatsApp 💬',
      copyOrderButton: 'Copy Order Summary 📋',
      orderCopied: 'Order copied to clipboard!',
      clearCart: 'Clear Bag',
      addonsIncluded: 'Add-ons:',
      deliveryOrPickupNote: 'Directly send your selected items to our team for quick service.',
    },
    fruitGuide: {
      title: 'Guide to Brazilian Native Tropical Fruits',
      badge: 'Tropical Biodiversity',
      subtitle: 'Discover the unique flavor notes, nutritional power, and story of our fruit pulps.',
      clickToLearnMore: 'Tap to view fruit details',
      flavor: 'Flavor Profile',
      benefits: 'Health Benefits',
      sweetness: 'Sweetness',
      tartness: 'Tartness / Citrus',
      close: 'Close Guide',
      origin: 'Biome / Region',
    },
    googleReview: {
      title: 'Review Vitta Mix on Google',
      badge: 'Your Review Helps Us Grow',
      subtitle: 'Help Vitta Mix reach more healthy living lovers! Leave a 5-star review ⭐ and share your experience.',
      instruction: 'Search for "Vitta Mix" on Google Maps or click the button below to open the review page directly.',
      ctaButton: 'Open Google to Rate 5 Stars ⭐⭐⭐⭐⭐',
      quickTemplatesTitle: 'Quick review templates (click to copy):',
      copyTemplate: 'Copy review',
      copied: 'Copied!',
      starsLabel: 'Satisfaction rating:',
      sampleReviews: [
        'Incredible fresh juices and authentic Brazilian açaí! The Vitta Sunset and Mix Power are out of this world. Highly recommended! ⭐⭐⭐⭐⭐',
        'Best açaí bowl around! Perfectly creamy texture and the functional superfoods give a great natural energy boost. Beautiful vibe! ⭐⭐⭐⭐⭐',
        'Real natural juices with exotic native fruits like cupuaçu and graviola. The warm pão de queijo cheese bread is delicious! ⭐⭐⭐⭐⭐',
      ],
    },
    instagram: {
      title: 'Follow Vitta Mix on Instagram',
      handle: '@vittamix.oficial',
      subtitle: 'Check out daily specials, fresh fruit backstage, healthy living tips, and promotions!',
      ctaFollow: 'Follow on Instagram @vittamix.oficial 📸',
      tagUsNotice: 'Tag @vittamix.oficial in your stories to be featured on our page!',
      highlights: [
        'Exclusive Juice Recipes & Detox Insights',
        'New Functional Açaí Bowl Combos',
        'Guest Reposts & Community Moments',
        'Wellness & Nutrition Tips',
      ],
    },
    footer: {
      motto: 'Fueling your best version with the natural vitality of tropical superfoods.',
      openingHours: 'Opening Hours',
      hoursDetails: 'Monday to Saturday: 8:00 AM – 8:00 PM | Sunday: 9:00 AM – 6:00 PM',
      locationTitle: 'Vitta Mix — Juices & Açaí',
      locationDesc: 'Visit our bar or place an order for take-out and delivery.',
      rights: 'All rights reserved.',
    },
    currencyModal: {
      label: 'Display Currency:',
      disclaimer: 'Foreign currency prices are helpful estimates based on current rates.',
    },
  },
  es: {
    brandSubtitle: 'Zumos Especiales, Mezclas de Asaí Funcional & Frutas Tropicales',
    badgeNatural: '100% Natural y Artesanal',
    badgeFresh: 'Frutas Frescas Seleccionadas',
    searchPlaceholder: 'Buscar zumos, asaí, pulpas o ingredientes...',
    allCategories: 'Menú Completo',
    categories: {
      special_juices: '1. Zumos Especiales',
      acai_mix: '2. Mezclas de Asaí — Funcionales',
      addons: '3. Adicionales & Suplementos',
      pulp_juices: '4. Zumos de Pulpa Tropical',
      drinks_snacks: '5. Bebidas & Bocadillos',
    },
    categoryDescriptions: {
      special_juices: 'Recetas exclusivas de Vitta Mix diseñadas para nutrir, revitalizar y refrescar.',
      acai_mix: 'Boles de asaí funcional potenciados con superalimentos, semillas y frutos secos.',
      addons: 'Personaliza tu asaí o zumo con proteínas y suplementos de primera calidad.',
      pulp_juices: 'La riqueza y biodiversidad exótica de las frutas tropicales brasileñas.',
      drinks_snacks: 'Aguas puras, pão de queijo brasileño caliente, sándwich natural y helado.',
    },
    filters: {
      all: 'Todos',
      favorites: '⭐ Destacados',
      energy: '⚡ Energía & Vitalidad',
      detox: '🍃 Detox & Ligero',
      citrus: '🍊 Cítrico & Inmunidad',
      vegan: '🌱 Vegano / Sin Lácteos',
    },
    customizer: {
      title: 'Personalizar Producto',
      chooseSize: 'Elige el Tamaño / Porción',
      chooseAddons: '¿Deseas añadir suplementos?',
      condensedMilkPrompt: 'Opción de Leche Condensada:',
      condensedMilkYes: 'Con leche condensada (+ cremosa)',
      condensedMilkNo: 'Sin leche condensada (versión ligera)',
      specialNotesPrompt: 'Notas de preparación:',
      specialNotesPlaceholder: 'Ej: Sin azúcar, muy frío, con cuchara...',
      addToOrder: 'Añadir al Pedido',
      updateOrder: 'Actualizar Producto',
      pricePerUnit: 'Precio por unidad',
      quantity: 'Cantidad',
    },
    cart: {
      title: 'Tu Bolsa Vitta Mix',
      emptyTitle: 'Tu bolsa está vacía',
      emptySubtitle: '¡Explora nuestros zumos especiales y mezclas de asaí para empezar!',
      itemsCount: 'artículos',
      subtotal: 'Total Estimado',
      estimatedConverted: 'Aprox. en tu moneda:',
      whatsappOrderButton: 'Enviar Pedido por WhatsApp 💬',
      copyOrderButton: 'Copiar Resumen del Pedido 📋',
      orderCopied: '¡Pedido copiado al portapapeles!',
      clearCart: 'Vaciar Bolsa',
      addonsIncluded: 'Adicionales:',
      deliveryOrPickupNote: 'Envía directamente los artículos a nuestro equipo para atenderte.',
    },
    fruitGuide: {
      title: 'Guía de Frutas Tropicales de Brasil',
      badge: 'Biodiversidad Tropical',
      subtitle: 'Descubre los sabores únicos, beneficios para la salud y la historia de nuestras pulpas.',
      clickToLearnMore: 'Toca para ver detalles de la fruta',
      flavor: 'Perfil de Sabor',
      benefits: 'Beneficios Saludables',
      sweetness: 'Dulzura',
      tartness: 'Acidez / Cítrico',
      close: 'Cerrar Guía',
      origin: 'Origen / Región',
    },
    googleReview: {
      title: 'Valora a Vitta Mix en Google',
      badge: 'Tu Opinión es Muy Valiosa',
      subtitle: '¡Ayuda a Vitta Mix a crecer! Deja tu reseña con 5 estrellas ⭐ y comparte tu experiencia.',
      instruction: 'Busca "Vitta Mix" en Google Maps o haz clic en el botón de abajo para valorar.',
      ctaButton: 'Abrir Google para Calificar con 5 Estrellas ⭐⭐⭐⭐⭐',
      quickTemplatesTitle: 'Sugerencias de opinión (clic para copiar):',
      copyTemplate: 'Copiar opinión',
      copied: '¡Copiado!',
      starsLabel: 'Nivel de satisfacción:',
      sampleReviews: [
        '¡Zumos naturales espectaculares y el mejor açaí que he probado! El Vitta Sunset y el Mix Power son deliciosos. ⭐⭐⭐⭐⭐',
        'Excelente atención y fruta de calidad insuperable. Perfecto para recargar energía de forma saludable. ¡Recomendadísimo! ⭐⭐⭐⭐⭐',
        'Zumos de frutas exóticas brasileñas auténticas como graviola y cupuaçu. ¡El pão de queijo calentito es una delicia! ⭐⭐⭐⭐⭐',
      ],
    },
    instagram: {
      title: 'Sigue a Vitta Mix en Instagram',
      handle: '@vittamix.oficial',
      subtitle: '¡Descubre ofertas del día, consejos saludables y lo mejor de las frutas frescas!',
      ctaFollow: 'Seguir en Instagram @vittamix.oficial 📸',
      tagUsNotice: '¡Etiqueta a @vittamix.oficial en tus stories para aparecer en nuestra cuenta!',
      highlights: [
        'Recetas Exclusivas de Zumos & Detox',
        'Nuevas Combinaciones de Asaí Funcional',
        'Momentos y Fotos de Nuestros Clientes',
        'Consejos de Nutrición y Bienestar',
      ],
    },
    footer: {
      motto: 'Alimentando tu mejor versión con la vitalidad de la naturaleza tropical.',
      openingHours: 'Horario de Atención',
      hoursDetails: 'Lunes a Sábado: 08:00 a 20:00 | Domingo: 09:00 a 18:00',
      locationTitle: 'Vitta Mix — Zumos & Asaí',
      locationDesc: 'Visita nuestra tienda o solicita tu pedido para llevar o delivery.',
      rights: 'Todos los derechos reservados.',
    },
    currencyModal: {
      label: 'Moneda de visualización:',
      disclaimer: 'Los precios en moneda extranjera son estimados según el cambio actual.',
    },
  },
  fr: {
    brandSubtitle: 'Jus Spéciaux, Mix d’Açaï Fonctionnel & Fruits Tropicaux Frais',
    badgeNatural: '100% Naturel & Artisanal',
    badgeFresh: 'Fruits Frais Rigoureusement Sélectionnés',
    searchPlaceholder: 'Rechercher des jus, açaï, pulpes ou ingrédients...',
    allCategories: 'Menu Complet',
    categories: {
      special_juices: '1. Jus Spéciaux',
      acai_mix: '2. Mix d’Açaï — Fonctionnels',
      addons: '3. Suppléments & Boosters',
      pulp_juices: '4. Jus de Pulpe Tropicale',
      drinks_snacks: '5. Boissons & Snacks',
    },
    categoryDescriptions: {
      special_juices: 'Recettes signatures exclusives créées pour nourrir, régénérer et rafraîchir.',
      acai_mix: 'Bols d’açaï fonctionnels enrichis en superaliments, graines et noix de cajou.',
      addons: 'Personnalisez votre açaï ou jus avec des protéines et compléments de premier choix.',
      pulp_juices: 'Toute la biodiversité et les saveurs exotiques des fruits indigènes du Brésil.',
      drinks_snacks: 'Eaux pures, délicieux petits pains au fromage (pão de queijo), sandwich naturel et glaces.',
    },
    filters: {
      all: 'Tous',
      favorites: '⭐ Favoris',
      energy: '⚡ Énergie & Vitalité',
      detox: '🍃 Détox & Légèreté',
      citrus: '🍊 Agrumes & Immunité',
      vegan: '🌱 Végétalien / Sans Lactose',
    },
    customizer: {
      title: 'Personnaliser l’Article',
      chooseSize: 'Choisir la Taille / Portion',
      chooseAddons: 'Ajouter des suppléments ?',
      condensedMilkPrompt: 'Option Lait Condensé :',
      condensedMilkYes: 'Avec lait condensé (+ crémeux et gourmand)',
      condensedMilkNo: 'Sans lait condensé (version légère)',
      specialNotesPrompt: 'Instructions de préparation :',
      specialNotesPlaceholder: 'Ex : Sans sucre, très frais, avec cuillère...',
      addToOrder: 'Ajouter à la Commande',
      updateOrder: 'Mettre à Jour',
      pricePerUnit: 'Prix unitaire',
      quantity: 'Quantité',
    },
    cart: {
      title: 'Votre Panier Vitta Mix',
      emptyTitle: 'Votre panier est vide',
      emptySubtitle: 'Explorez nos jus spéciaux et nos bols d’açaï pour commencer !',
      itemsCount: 'articles',
      subtotal: 'Total Estimé',
      estimatedConverted: 'Soit environ dans votre devise :',
      whatsappOrderButton: 'Commander via WhatsApp 💬',
      copyOrderButton: 'Copier la Commande 📋',
      orderCopied: 'Commande copiée dans le presse-papier !',
      clearCart: 'Vider le Panier',
      addonsIncluded: 'Suppléments :',
      deliveryOrPickupNote: 'Transmettez votre sélection directement à notre équipe pour un service rapide.',
    },
    fruitGuide: {
      title: 'Guide des Fruits Tropicaux du Brésil',
      badge: 'Biodiversité Tropicale',
      subtitle: 'Explorez les arômes distinctifs, les vertus bienfaisantes et l’histoire de nos pulpes de fruits.',
      clickToLearnMore: 'Touchez pour découvrir les secrets du fruit',
      flavor: 'Profil Aromatique',
      benefits: 'Bienfaits Santé',
      sweetness: 'Douceur',
      tartness: 'Acidité / Agrume',
      close: 'Fermer le Guide',
      origin: 'Origine Géographique',
    },
    googleReview: {
      title: 'Donnez votre avis sur Google',
      badge: 'Votre Avis Compte Énormément',
      subtitle: 'Aidez Vitta Mix à rayonner ! Attribuez-nous 5 étoiles ⭐ et partagez vos impressions.',
      instruction: 'Recherchez « Vitta Mix » sur Google Maps ou cliquez ci-dessous pour accéder directement à la page d’avis.',
      ctaButton: 'Ouvrir Google pour Noter 5 Étoiles ⭐⭐⭐⭐⭐',
      quickTemplatesTitle: 'Exemples d’avis rapides (cliquez pour copier) :',
      copyTemplate: 'Copier l’avis',
      copied: 'Copié !',
      starsLabel: 'Note de satisfaction :',
      sampleReviews: [
        'Des jus frais à tomber par terre et un açaï onctueux à souhait ! Le Vitta Sunset et le Mix Power sont exceptionnels. ⭐⭐⭐⭐⭐',
        'Accueil chaleureux, cadre agréable et superaliments de qualité supérieure. Idéal pour faire le plein d’énergie ! ⭐⭐⭐⭐⭐',
        'Une superbe découverte des fruits brésiliens comme le cupuaçu et la graviola. Les pães de queijo sont un délice ! ⭐⭐⭐⭐⭐',
      ],
    },
    instagram: {
      title: 'Suivez Vitta Mix sur Instagram',
      handle: '@vittamix.oficial',
      subtitle: 'Retrouvez nos offres du jour, coulisses de nos fruits frais et conseils bien-être !',
      ctaFollow: 'Suivre sur Instagram @vittamix.oficial 📸',
      tagUsNotice: 'Identifiez @vittamix.oficial dans vos stories pour être republié sur notre page !',
      highlights: [
        'Recettes Exclusives de Jus Détox',
        'Nouveaux Bols d’Açaï Fonctionnels',
        'Partages et Moments de nos Clients',
        'Conseils Nutrition & Vitalité',
      ],
    },
    footer: {
      motto: 'Nourrir votre meilleure version avec l’énergie bienfaitrice de la nature tropicale.',
      openingHours: 'Heures d’Ouverture',
      hoursDetails: 'Lundi au Samedi : 08h00 – 20h00 | Dimanche : 09h00 – 18h00',
      locationTitle: 'Vitta Mix — Jus & Açaï',
      locationDesc: 'Rendez-vous dans notre bar ou passez commande à emporter et en livraison.',
      rights: 'Tous droits réservés.',
    },
    currencyModal: {
      label: 'Devise d’affichage :',
      disclaimer: 'Les montants en devises étrangères sont des estimations indicatives.',
    },
  },
  ja: {
    brandSubtitle: '特製ジュース・高機能アサイー・極上トロピカルフルーツ',
    badgeNatural: '100% 天然素材・手作り',
    badgeFresh: '厳選された採れたて完熟フルーツ',
    searchPlaceholder: 'ジュース、アサイー、フルーツ、素材を検索...',
    allCategories: '全メニュー一覧',
    categories: {
      special_juices: '1. スペシャルジュース',
      acai_mix: '2. 高機能アサイーミックス',
      addons: '3. トッピング＆ブースター',
      pulp_juices: '4. ブラジル産トロピカル果肉ジュース',
      drinks_snacks: '5. ドリンク＆スナック',
    },
    categoryDescriptions: {
      special_juices: '毎日の活力と爽快感のために調合された、Vitta Mixだけの特製ブレンド。',
      acai_mix: 'スーパーフード、厳選ナッツ、シード類をたっぷり配合した高機能アサイーボウル。',
      addons: 'プロテインやコラーゲンなど、お好みに合わせて栄養をカスタマイズ。',
      pulp_juices: 'ブラジル・アマゾンや北東部の大自然が育んだ希少なトロピカルフルーツ。',
      drinks_snacks: 'ミネラルウォーター、焼きたてポンデケージョ、ナチュラルサンドイッチ、アイスクリーム。',
    },
    filters: {
      all: 'すべて',
      favorites: '⭐ 人気おすすめ',
      energy: '⚡ エナジー＆集中',
      detox: '🍃 デトックス＆軽やか',
      citrus: '🍊 柑橘＆ビタミンC',
      vegan: '🌱 ヴィーガン / 乳製品不使用',
    },
    customizer: {
      title: '商品をカスタマイズ',
      chooseSize: 'サイズ・分量を選択',
      chooseAddons: '栄養トッピングを追加しますか？',
      condensedMilkPrompt: '練乳（コンデンスミルク）の有無：',
      condensedMilkYes: '練乳あり（まろやかで濃厚）',
      condensedMilkNo: '練乳なし（さっぱりヘルシー）',
      specialNotesPrompt: 'ご要望・メモ：',
      specialNotesPlaceholder: '例: 砂糖控えめ、氷多め、スプーン希望など...',
      addToOrder: 'バッグに追加する',
      updateOrder: '注文内容を更新',
      pricePerUnit: '単価',
      quantity: '数量',
    },
    cart: {
      title: 'ご注文バッグ',
      emptyTitle: 'バッグは空です',
      emptySubtitle: 'スペシャルジュースやアサイーミックスを選んでスタートしましょう！',
      itemsCount: '点',
      subtotal: '小計（概算）',
      estimatedConverted: '日本円換算の目安：',
      whatsappOrderButton: 'WhatsAppで注文送信 💬',
      copyOrderButton: '注文内容をコピー 📋',
      orderCopied: '注文内容をクリップボードにコピーしました！',
      clearCart: 'バッグを空にする',
      addonsIncluded: '追加トッピング:',
      deliveryOrPickupNote: '選択したメニューをスタッフに直接送信してご注文いただけます。',
    },
    fruitGuide: {
      title: 'ブラジル特有フルーツ・図鑑ガイド',
      badge: '南米トロピカルの恵み',
      subtitle: 'クプアスやアセロラなど、日本では珍しい希少な果物の味と栄養をご紹介。',
      clickToLearnMore: 'タップしてフルーツの詳細を見る',
      flavor: '風味の特徴',
      benefits: '健康効果・栄養',
      sweetness: '甘み',
      tartness: '酸味 / フルーティー度',
      close: '閉じる',
      origin: '原産地・バイオーム',
    },
    googleReview: {
      title: 'GoogleマップでVitta Mixを評価',
      badge: '皆様の評価が励みになります',
      subtitle: 'Vitta Mixを応援してください！星5つ ⭐ の評価と素敵なレビューをお待ちしております。',
      instruction: 'Googleマップで「Vitta Mix」を検索するか、下のボタンから直接評価ページを開くことができます。',
      ctaButton: 'Googleを開いて星5つで評価する ⭐⭐⭐⭐⭐',
      quickTemplatesTitle: 'レビューの例文（クリックでワンタップコピー）：',
      copyTemplate: '文章をコピー',
      copied: 'コピー完了！',
      starsLabel: '満足度：',
      sampleReviews: [
        '素材の味がしっかりしていて本当に美味しい！特にヴィッタ・サンセットとミックスパワーは格別でした。おすすめです！ ⭐⭐⭐⭐⭐',
        '濃厚でクリーミーな最高のアサイー！スーパーフードたっぷりで一日のエネルギーが湧いてきます。スタッフもとても親切！ ⭐⭐⭐⭐⭐',
        'クプアスなどブラジルならではの果物ジュースが飲めて感動しました。焼きたてのポンデケージョも最高です！ ⭐⭐⭐⭐⭐',
      ],
    },
    instagram: {
      title: 'Vitta Mix 公式Instagramをフォロー',
      handle: '@vittamix.oficial',
      subtitle: '日替わりメニュー、フレッシュフルーツの仕込み風景、お得なキャンペーンを配信中！',
      ctaFollow: 'Instagram @vittamix.oficial をフォロー 📸',
      tagUsNotice: 'ストーリーに @vittamix.oficial をタグ付けしていただければリポストいたします！',
      highlights: [
        '特製ジュース＆デトックスの秘密',
        '新作アサイーボウル＆コンボ紹介',
        'お客様の素敵な投稿シェア',
        '健康・ウェルネスのワンポイント',
      ],
    },
    footer: {
      motto: '南米トロピカルフルーツの生命力で、あなたの健やかな毎日をサポートします。',
      openingHours: '営業時間',
      hoursDetails: '月曜〜土曜: 08:00 – 20:00 | 日曜: 09:00 – 18:00',
      locationTitle: 'Vitta Mix — ジュース＆アサイー専門店',
      locationDesc: '店頭でのイートイン・テイクアウト、各種デリバリーに対応しております。',
      rights: 'All rights reserved.',
    },
    currencyModal: {
      label: '表示通貨：',
      disclaimer: '外貨表示は現在の為替レートに基づいた参考目安金額です。',
    },
  },
};
