// ============================================================
// CAMBEL TEKSTİL — Firebase Configuration
// ============================================================
// 1. Firebase Console'a git: https://console.firebase.google.com
// 2. Yeni proje oluştur → Web uygulaması ekle
// 3. Aşağıdaki firebaseConfig değerlerini kendi değerlerinle değiştir
// 4. Firebase Console'da şunları etkinleştir:
//    - Authentication → Email/Password
//    - Firestore Database → Production mode
//    - Storage → Başlat
// ============================================================

const FIREBASE_CONFIG = {
  apiKey: "BURAYA_API_KEY",
  authDomain: "BURAYA_AUTH_DOMAIN",
  projectId: "BURAYA_PROJECT_ID",
  storageBucket: "BURAYA_STORAGE_BUCKET",
  messagingSenderId: "BURAYA_SENDER_ID",
  appId: "BURAYA_APP_ID"
};

// ============================================================
// iyzico Configuration
// ============================================================
// PayTR/iyzico entegrasyonu BACKEND gerektirir.
// Aşağıdaki URL'yi kendi backend endpoint'inle değiştir.
// Basit bir Node.js/PHP backend örneği için README'ye bak.
// ============================================================

const IYZICO_CONFIG = {
  // Bu endpoint'i kendi sunucunda çalışan iyzico backend'ine yönlendir
  paymentEndpoint: "https://YOUR_BACKEND/api/payment/create",
  callbackUrl: "https://YOUR_DOMAIN/payment/callback",
  currency: "TRY",
  locale: "tr"
};

// ============================================================
// Admin Email — Bu email ile Firebase Auth'da kullanıcı oluştur
// ============================================================
const ADMIN_EMAIL = "admin@cambeltekstil.com";

// ============================================================
// Kategori Yapısı — Firestore'a ilk kurulumda yazılır
// ============================================================
const DEFAULT_CATEGORIES = [
  {
    id: "bebek",
    name: "Bebek",
    slug: "bebek",
    order: 1,
    subcategories: [
      { id: "hastane-cikisi", name: "Hastane Çıkışı", slug: "hastane-cikisi" },
      { id: "takimlar", name: "Takımlar", slug: "takimlar" },
      { id: "patik-corap", name: "Patik & Çorap", slug: "patik-corap" },
      { id: "tulum-salopet", name: "Tulum & Salopet", slug: "tulum-salopet" },
      { id: "battaniye", name: "Battaniye", slug: "battaniye" },
      { id: "body-zibin", name: "Body & Zıbın", slug: "body-zibin" },
      { id: "aksesuar", name: "Aksesuar", slug: "aksesuar" },
      { id: "elbise", name: "Elbise", slug: "elbise" }
    ]
  },
  {
    id: "kiz-cocuk",
    name: "Kız Çocuk",
    slug: "kiz-cocuk",
    order: 2,
    subcategories: [
      { id: "kiz-elbise", name: "Elbise", slug: "kiz-elbise" },
      { id: "kiz-takim", name: "Takım", slug: "kiz-takim" },
      { id: "kiz-dis-giyim", name: "Dış Giyim", slug: "kiz-dis-giyim" },
      { id: "kiz-aksesuar", name: "Aksesuar", slug: "kiz-aksesuar" }
    ]
  },
  {
    id: "erkek-cocuk",
    name: "Erkek Çocuk",
    slug: "erkek-cocuk",
    order: 3,
    subcategories: [
      { id: "erkek-takim", name: "Takım", slug: "erkek-takim" },
      { id: "erkek-tulum", name: "Tulum", slug: "erkek-tulum" },
      { id: "erkek-dis-giyim", name: "Dış Giyim", slug: "erkek-dis-giyim" },
      { id: "erkek-aksesuar", name: "Aksesuar", slug: "erkek-aksesuar" }
    ]
  }
];

// Firestore Security Rules (Firebase Console → Firestore → Rules):
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Products: public read, admin write
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == "admin@cambeltekstil.com";
    }
    // Categories: public read, admin write
    match /categories/{categoryId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == "admin@cambeltekstil.com";
    }
    // Orders: authenticated write, admin read
    match /orders/{orderId} {
      allow create: if true;
      allow read, update: if request.auth != null && request.auth.token.email == "admin@cambeltekstil.com";
    }
    // Settings: admin only
    match /settings/{doc} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == "admin@cambeltekstil.com";
    }
  }
}
*/

// Storage Rules (Firebase Console → Storage → Rules):
/*
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /products/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == "admin@cambeltekstil.com";
    }
  }
}
*/
