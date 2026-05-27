// Cambel Tekstil — Çeviri Sistemi
const LANGS = {
  tr: {
    // NAV
    nav_shop: 'Mağaza',
    nav_brandkit: 'Brand Kit',
    nav_how: 'Nasıl Çalışır',
    nav_faq: 'SSS',
    nav_login: 'Giriş Yap / Üye Ol',
    nav_account: 'Hesabım',
    nav_logout: 'Çıkış Yap',

    // HERO
    hero_tag: 'Bebek Giyim · Toptan',
    hero_title1: 'Fabrikaya gerek yok,',
    hero_title2: 'markan bu hafta hazır.',
    hero_sub: 'White label toptan bebek kıyafeti. Kendi Brand Kit\'inle markalaştır, minimum sipariş adedi olmadan satışa başla.',
    hero_cta: 'Ürünleri İncele',
    hero_signup: 'Ücretsiz Üye Ol →',
    hero_stat1: 'Aktif Marka',
    hero_stat2: 'Min. Sipariş',
    hero_stat3: 'Kargo Süresi',
    hero_badge: 'Markan bu hafta hazır',
    hero_badge_sub: 'Blank ürün → Brand Kit → Satış',

    // HOW
    how_title1: '3 adımda',
    how_title2: 'kendi markan.',
    how_step1_title: 'Ürün Seç',
    how_step1_desc: '200+ white label bebek ürünü arasından seç. Body, müslin, pijama, tulum — hepsi etiketsiz, sana özel.',
    how_step2_title: 'Brand Kit Al',
    how_step2_desc: 'Ense baskısı ile logo ve marka adını ekle. Yıkama etiketi, sallantı kart, baskılı ambalaj — tam profesyonel.',
    how_step3_title: 'Sat',
    how_step3_desc: 'Instagram, Trendyol veya kendi e-ticaret siten — artık gerçek bir bebek giyim markan var.',

    // BRAND KIT
    bk_tag: 'Brand Kit',
    bk_title1: 'Ürünü senin',
    bk_title2: 'markanla çık.',
    bk_sub: 'Blank ürünü tamamen kendi markanıza dönüştürün.',
    bk_item1_title: 'Ense Baskısı',
    bk_item1_desc: 'DTF tabaka ile marka adın ve logon ürünün iç boynuna basılır. Yıkamaya dayanıklı.',
    bk_item2_title: 'Yıkama Talimatı Etiketi',
    bk_item2_desc: 'Profesyonel görünüm için markalı yıkama talimatı etiketi.',
    bk_item3_title: 'Sallantı Kart & Ambalaj',
    bk_item3_desc: 'Ürün hikayeni anlatan sallantı kart ve baskılı ambalajla unboxing deneyimi.',

    // PROOF
    proof_tag: 'Müşteri Hikayeleri',
    proof_title1: '500+ marka',
    proof_title2: 'Cambel ile başladı',
    stat1: 'Aktif Marka Ortağı',
    stat2: 'Kargo Süresi',
    stat3: 'Memnuniyet',
    stat4: 'Min. Sipariş',

    // CERTS
    cert_title: 'OEKO-TEX & GOTS Sertifikalı',
    cert_desc: 'Tüm ürünlerimiz OEKO-TEX Standard 100 ve GOTS sertifikalarına sahip, organik pamuktan üretilmektedir.',
    eu_title: 'Avrupa Birliği\'ne İhracat',
    eu_desc: 'Almanya, Fransa, Hollanda başta olmak üzere tüm AB ülkelerine ihracat yapıyoruz. Uluslararası kargo ve gümrük süreçlerinde tam destek sağlıyoruz.',
    eu_cta: 'WhatsApp\'tan ihracat bilgisi alın →',

    // CTA
    cta_title1: 'Markanı',
    cta_title2: 'bugün kur.',
    cta_sub: 'Ücretsiz üye ol, tüm fiyatları gör. Minimum sipariş adedi yok.',
    cta_btn: 'Ücretsiz Üye Ol →',
    cta_wa: 'WhatsApp\'tan Yaz',

    // FOOTER
    footer_copy: '© 2026 Cambel Tekstil · Bursa',

    // SHOP
    shop_all: 'Tüm Ürünler',
    shop_search: 'Ürün ara...',
    shop_filter_buybox: 'Sadece Buybox Ürünleri',
    shop_filter_drop: 'Dropshipping Uyumlu',
    shop_filter_oeko: 'OEKO-TEX Sertifikalı',
    shop_filter_gots: 'GOTS Sertifikalı',
    shop_add_cart: 'Sepete Ekle',
    shop_see_price: '🔒 Fiyatı Gör →',
    shop_cart_title: 'Sepetim',
    shop_cart_empty: 'Sepetiniz boş',
    shop_subtotal: 'Ara Toplam',
    shop_vat: 'KDV',
    shop_shipping: 'Kargo',
    shop_shipping_val: 'Alıcıya Ait',
    shop_checkout: 'Ödemeye Geç →',
    shop_total: 'Toplam',
    shop_confirm: '✅ Siparişi Onayla',
    shop_login_required: 'Fiyatları görmek için giriş yapın',

    // CHECKOUT
    co_title: 'Sipariş Bilgileri',
    co_name: 'Ad',
    co_surname: 'Soyad',
    co_email: 'E-posta',
    co_phone: 'Telefon',
    co_address: 'Adres',
    co_city: 'Şehir',
    co_district: 'İlçe',
    co_note: 'Sipariş Notu (opsiyonel)',
    co_payment_title: 'Ödeme',
    co_payment_desc: 'Siparişinizi onayladıktan sonra size WhatsApp veya e-posta ile güvenli ödeme linki göndereceğiz.',
    co_legal: 'okudum, kabul ediyorum.',

    // ACCOUNT
    acc_orders: 'Siparişlerim',
    acc_favorites: 'Favorilerim',
    acc_profile: 'Profilim',
    acc_login_title: 'Giriş Yap',
    acc_register_title: 'Üye Ol',
    acc_email: 'E-posta',
    acc_password: 'Şifre',
    acc_name: 'Ad Soyad',
    acc_brand: 'Marka Adı',
    acc_phone: 'Telefon',
    acc_login_btn: 'Giriş Yap',
    acc_register_btn: 'Üye Ol',
    acc_logout: 'Çıkış Yap',
    acc_no_orders: 'Henüz sipariş yok',
    acc_order_detail: 'Sipariş Detayı',
    acc_status_pending: 'Bekliyor',
    acc_status_confirmed: 'Onaylandı',
    acc_status_preparing: 'Hazırlanıyor',
    acc_status_shipped: 'Kargoda',
    acc_status_delivered: 'Teslim Edildi',
    acc_status_cancelled: 'İptal Edildi',
  },

  en: {
    nav_shop: 'Shop',
    nav_brandkit: 'Brand Kit',
    nav_how: 'How It Works',
    nav_faq: 'FAQ',
    nav_login: 'Login / Sign Up',
    nav_account: 'My Account',
    nav_logout: 'Logout',

    hero_tag: 'Baby Clothing · Wholesale',
    hero_title1: 'No factory needed,',
    hero_title2: 'your brand ready this week.',
    hero_sub: 'White label wholesale baby clothing. Brand it with your own Brand Kit, start selling with no minimum order.',
    hero_cta: 'Explore Products',
    hero_signup: 'Sign Up Free →',
    hero_stat1: 'Active Brands',
    hero_stat2: 'Min. Order',
    hero_stat3: 'Shipping Time',
    hero_badge: 'Your brand ready this week',
    hero_badge_sub: 'Blank product → Brand Kit → Sell',

    how_title1: '3 steps to',
    how_title2: 'your own brand.',
    how_step1_title: 'Choose Product',
    how_step1_desc: 'Choose from 200+ white label baby products. Bodysuit, muslin, pajamas, overalls — all unbranded, just for you.',
    how_step2_title: 'Get Brand Kit',
    how_step2_desc: 'Add your logo and brand name with neck print. Wash label, hang tag, printed packaging — fully professional.',
    how_step3_title: 'Sell',
    how_step3_desc: 'Instagram, Trendyol or your own e-commerce site — you now have a real baby clothing brand.',

    bk_tag: 'Brand Kit',
    bk_title1: 'Product with',
    bk_title2: 'your brand.',
    bk_sub: 'Transform blank products entirely into your own brand.',
    bk_item1_title: 'Neck Print',
    bk_item1_desc: 'Your brand name and logo printed inside the collar with DTF transfer. Wash resistant.',
    bk_item2_title: 'Wash Care Label',
    bk_item2_desc: 'Branded wash care label for a professional look.',
    bk_item3_title: 'Hang Tag & Packaging',
    bk_item3_desc: 'Hang tag telling your brand story and printed packaging for an unboxing experience.',

    proof_tag: 'Customer Stories',
    proof_title1: '500+ brands',
    proof_title2: 'started with Cambel',
    stat1: 'Active Brand Partners',
    stat2: 'Shipping Time',
    stat3: 'Satisfaction',
    stat4: 'Min. Order',

    cert_title: 'OEKO-TEX & GOTS Certified',
    cert_desc: 'All our products hold OEKO-TEX Standard 100 and GOTS certifications, made from organic cotton.',
    eu_title: 'Export to European Union',
    eu_desc: 'We export to all EU countries including Germany, France, Netherlands. Full support for international shipping and customs.',
    eu_cta: 'Contact us for export info →',

    cta_title1: 'Build your',
    cta_title2: 'brand today.',
    cta_sub: 'Sign up free, see all prices. No minimum order quantity.',
    cta_btn: 'Sign Up Free →',
    cta_wa: 'Write on WhatsApp',

    footer_copy: '© 2026 Cambel Tekstil · Bursa, Turkey',

    shop_all: 'All Products',
    shop_search: 'Search products...',
    shop_filter_buybox: 'Buybox Products Only',
    shop_filter_drop: 'Dropshipping Compatible',
    shop_filter_oeko: 'OEKO-TEX Certified',
    shop_filter_gots: 'GOTS Certified',
    shop_add_cart: 'Add to Cart',
    shop_see_price: '🔒 See Price →',
    shop_cart_title: 'My Cart',
    shop_cart_empty: 'Your cart is empty',
    shop_subtotal: 'Subtotal',
    shop_vat: 'VAT',
    shop_shipping: 'Shipping',
    shop_shipping_val: 'Paid by Buyer',
    shop_checkout: 'Proceed to Checkout →',
    shop_total: 'Total',
    shop_confirm: '✅ Confirm Order',
    shop_login_required: 'Log in to see prices',

    co_title: 'Order Information',
    co_name: 'First Name',
    co_surname: 'Last Name',
    co_email: 'Email',
    co_phone: 'Phone',
    co_address: 'Address',
    co_city: 'City',
    co_district: 'District',
    co_note: 'Order Note (optional)',
    co_payment_title: 'Payment',
    co_payment_desc: 'After confirming your order, we will send you a secure payment link via WhatsApp or email.',
    co_legal: 'I have read and agree.',

    acc_orders: 'My Orders',
    acc_favorites: 'Favorites',
    acc_profile: 'Profile',
    acc_login_title: 'Login',
    acc_register_title: 'Sign Up',
    acc_email: 'Email',
    acc_password: 'Password',
    acc_name: 'Full Name',
    acc_brand: 'Brand Name',
    acc_phone: 'Phone',
    acc_login_btn: 'Login',
    acc_register_btn: 'Sign Up',
    acc_logout: 'Logout',
    acc_no_orders: 'No orders yet',
    acc_order_detail: 'Order Detail',
    acc_status_pending: 'Pending',
    acc_status_confirmed: 'Confirmed',
    acc_status_preparing: 'Preparing',
    acc_status_shipped: 'Shipped',
    acc_status_delivered: 'Delivered',
    acc_status_cancelled: 'Cancelled',
  },

  de: {
    nav_shop: 'Shop',
    nav_brandkit: 'Brand Kit',
    nav_how: 'Wie es funktioniert',
    nav_faq: 'FAQ',
    nav_login: 'Anmelden / Registrieren',
    nav_account: 'Mein Konto',
    nav_logout: 'Abmelden',

    hero_tag: 'Babybekleidung · Großhandel',
    hero_title1: 'Keine Fabrik nötig,',
    hero_title2: 'deine Marke diese Woche fertig.',
    hero_sub: 'White-Label-Großhandel für Babybekleidung. Brande es mit deinem Brand Kit, starte ohne Mindestbestellmenge.',
    hero_cta: 'Produkte entdecken',
    hero_signup: 'Kostenlos registrieren →',
    hero_stat1: 'Aktive Marken',
    hero_stat2: 'Mindestbestellung',
    hero_stat3: 'Versandzeit',
    hero_badge: 'Deine Marke diese Woche fertig',
    hero_badge_sub: 'Blank-Produkt → Brand Kit → Verkauf',

    how_title1: 'In 3 Schritten',
    how_title2: 'zu deiner eigenen Marke.',
    how_step1_title: 'Produkt wählen',
    how_step1_desc: 'Wähle aus 200+ White-Label-Babyprodukten. Body, Musselin, Schlafanzug, Overall — alle ohne Etikett, nur für dich.',
    how_step2_title: 'Brand Kit holen',
    how_step2_desc: 'Logo und Markenname mit Nackendruck hinzufügen. Pflegeetikett, Hangtag, Verpackung — vollständig professionell.',
    how_step3_title: 'Verkaufen',
    how_step3_desc: 'Instagram, Trendyol oder dein eigener Online-Shop — du hast jetzt eine echte Babybekleidungsmarke.',

    bk_tag: 'Brand Kit',
    bk_title1: 'Produkt mit',
    bk_title2: 'deiner Marke.',
    bk_sub: 'Verwandle Blank-Produkte vollständig in deine eigene Marke.',
    bk_item1_title: 'Nackendruck',
    bk_item1_desc: 'Dein Markenname und Logo wird mit DTF-Transfer in den Kragen gedruckt. Waschbeständig.',
    bk_item2_title: 'Pflegeetikett',
    bk_item2_desc: 'Marken-Pflegeetikett für ein professionelles Erscheinungsbild.',
    bk_item3_title: 'Hangtag & Verpackung',
    bk_item3_desc: 'Hangtag mit deiner Markenstory und bedruckte Verpackung für ein Unboxing-Erlebnis.',

    proof_tag: 'Kundenstories',
    proof_title1: '500+ Marken',
    proof_title2: 'starteten mit Cambel',
    stat1: 'Aktive Markenpartner',
    stat2: 'Versandzeit',
    stat3: 'Zufriedenheit',
    stat4: 'Mindestbestellung',

    cert_title: 'OEKO-TEX & GOTS Zertifiziert',
    cert_desc: 'Alle unsere Produkte besitzen OEKO-TEX Standard 100 und GOTS Zertifizierungen, hergestellt aus Bio-Baumwolle.',
    eu_title: 'Export in die Europäische Union',
    eu_desc: 'Wir exportieren in alle EU-Länder, darunter Deutschland, Frankreich, Niederlande. Volle Unterstützung bei internationalem Versand und Zoll.',
    eu_cta: 'Kontaktieren Sie uns für Exportinfos →',

    cta_title1: 'Baue deine',
    cta_title2: 'Marke heute.',
    cta_sub: 'Kostenlos registrieren, alle Preise sehen. Keine Mindestbestellmenge.',
    cta_btn: 'Kostenlos registrieren →',
    cta_wa: 'WhatsApp schreiben',

    footer_copy: '© 2026 Cambel Tekstil · Bursa, Türkei',

    shop_all: 'Alle Produkte',
    shop_search: 'Produkte suchen...',
    shop_filter_buybox: 'Nur Buybox-Produkte',
    shop_filter_drop: 'Dropshipping-kompatibel',
    shop_filter_oeko: 'OEKO-TEX zertifiziert',
    shop_filter_gots: 'GOTS zertifiziert',
    shop_add_cart: 'In den Warenkorb',
    shop_see_price: '🔒 Preis sehen →',
    shop_cart_title: 'Mein Warenkorb',
    shop_cart_empty: 'Ihr Warenkorb ist leer',
    shop_subtotal: 'Zwischensumme',
    shop_vat: 'MwSt.',
    shop_shipping: 'Versand',
    shop_shipping_val: 'Vom Käufer bezahlt',
    shop_checkout: 'Zur Kasse →',
    shop_total: 'Gesamt',
    shop_confirm: '✅ Bestellung bestätigen',
    shop_login_required: 'Anmelden um Preise zu sehen',

    co_title: 'Bestellinformationen',
    co_name: 'Vorname',
    co_surname: 'Nachname',
    co_email: 'E-Mail',
    co_phone: 'Telefon',
    co_address: 'Adresse',
    co_city: 'Stadt',
    co_district: 'Bezirk',
    co_note: 'Bestellnotiz (optional)',
    co_payment_title: 'Zahlung',
    co_payment_desc: 'Nach Bestätigung Ihrer Bestellung senden wir Ihnen einen sicheren Zahlungslink per WhatsApp oder E-Mail.',
    co_legal: 'Ich habe gelesen und stimme zu.',

    acc_orders: 'Meine Bestellungen',
    acc_favorites: 'Favoriten',
    acc_profile: 'Profil',
    acc_login_title: 'Anmelden',
    acc_register_title: 'Registrieren',
    acc_email: 'E-Mail',
    acc_password: 'Passwort',
    acc_name: 'Vollständiger Name',
    acc_brand: 'Markenname',
    acc_phone: 'Telefon',
    acc_login_btn: 'Anmelden',
    acc_register_btn: 'Registrieren',
    acc_logout: 'Abmelden',
    acc_no_orders: 'Noch keine Bestellungen',
    acc_order_detail: 'Bestelldetails',
    acc_status_pending: 'Ausstehend',
    acc_status_confirmed: 'Bestätigt',
    acc_status_preparing: 'In Vorbereitung',
    acc_status_shipped: 'Versandt',
    acc_status_delivered: 'Geliefert',
    acc_status_cancelled: 'Storniert',
  }
};

// Aktif dil
let currentLang = localStorage.getItem('cambel_lang') || 'tr';

// Çeviri fonksiyonu
function t(key) {
  return LANGS[currentLang]?.[key] || LANGS['tr']?.[key] || key;
}

// Dil değiştir
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('cambel_lang', lang);
  applyTranslations();
  // Aktif butonu güncelle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// data-i18n attribute'lu elementleri güncelle
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  // HTML lang attribute
  document.documentElement.lang = currentLang;
}

// Sayfa yüklenince uygula
window.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
});

export { t, setLang, currentLang, applyTranslations, LANGS };
