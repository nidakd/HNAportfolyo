# Hasibe Nida Akdoğan Portföyü - Türkçe Dokümantasyon

## İçindekiler
1. [Proje Hakkında](#proje-hakkında)
2. [Hızlı Başlangıç](#hızlı-başlangıç)
3. [Proje Yapısı](#proje-yapısı)
4. [Teknolojiler](#teknolojiler)
5. [Komponentlerin Detaylı Açıklaması](#komponentlerin-detaylı-açıklaması)
6. [Stil Sistemi ve Tasarım](#stil-sistemi-ve-tasarım)
7. [Değişiklik Rehberi](#değişiklik-rehberi)
8. [Sık Sorulan Sorular](#sık-sorulan-sorular)
9. [Dağıtım (Deployment)](#dağıtım-deployment)

---

## Proje Hakkında

Bu proje, Hasibe Nida Akdoğan'ın profesyonel portföy web sitesidir. Modern web teknolojileri kullanarak, ileri matematiksel modelleme ve veri uzmanlaşması alanındaki deneyimini sergileyen, yüksek performanslı ve kullanıcı dostu bir uygulamadır.

### Ana Özellikler
-  Hareketli animasyonlar (Framer Motion & GSAP)
-  Tamamen responsive tasarım (mobil, tablet, masaüstü)
-  Özel tema sistemi ve renk paletleri
-  Erişilebilirlik (Accessibility) desteği
-  SEO optimizasyonu
-  Vite ile hızlı geliştirme ve derlemeSE

---

## Hızlı Başlangıç

### 1. Gereksinimler
- **Node.js**: v16 veya üstü (v18+ önerilir)
- **npm** veya **yarn**: paket yöneticisi
- **Git**: versiyon kontrolü (isteğe bağlı)

### 2. Projeyi İndirme ve Kurulum

```bash
# Proje klasörüne gir
cd C:\Users\samdo\Documents\HNAportfolyo

# Bağımlılıkları yükle
npm install
```

### 3. Geliştirme Sunucusunu Başlatma

```bash
npm run dev
```

Komut çalıştıktan sonra, genellikle `http://localhost:5173` adresinde açılacaktır.

### 4. Üretim İçin Derleme

```bash
npm run build
```

Bu komut, optimize edilmiş dosyaları `dist/` klasöründe oluşturur.

### 5. Derlenen Versiyonu Önizleme

```bash
npm run preview
```

---

## Proje Yapısı

```
HNAportfolyo/
├── src/                          # Kaynak kodlar
│   ├── components/               # React bileşenleri
│   │   ├── Home.jsx             # Ana sayfa bileşeni (hero section)
│   │   ├── Navbar.jsx           # Navigasyon çubuğu
│   │   ├── About.jsx            # Hakkında bölümü
│   │   ├── Skills.jsx           # Yetenekler bölümü
│   │   ├── SkillMarquee.jsx    # Kaydırılan yetenekler bandı
│   │   ├── Projects.jsx         # Projeler bölümü
│   │   ├── Experience.jsx       # İş deneyimi bölümü
│   │   ├── Testimonials.jsx     # Referanslar/Öneriler
│   │   ├── Contact.jsx          # İletişim formu (bento layout)
│   │   ├── StaggeredMenu.jsx   # Mobil menü (sallanan animasyon)
│   │   ├── Footer.jsx           # Alt bilgi
│   │   └── ScrollToTop.jsx      # Yukarı kaydırma butonu
│   │
│   ├── App.jsx                   # Ana uygulama bileşeni
│   ├── main.jsx                  # Giriş noktası
│   └── index.css                 # Global stiller (Tailwind + tema)
│
├── public/                        # Statik dosyalar
│   ├── img/                      # Görseller
│   │   └── hero.png             # Ana sayfa arka plan görseli
│   ├── favicon.svg               # Site simgesi
│   ├── robots.txt                # SEO robot kuralları
│   └── sitemap.xml               # Site haritası (SEO)
│
├── index.html                     # HTML giriş dosyası (SEO meta etiketleri)
├── package.json                   # Proje konfigürasyonu ve bağımlılıklar
├── vite.config.js                # Vite derleme konfigürasyonu
├── .oxlintrc.json                # Kod linter kuralları
├── .gitignore                     # Git'ten hariç tutulacak dosyalar
└── dist/                          # Derlenmiş dosyalar (production)
```

---

## Teknolojiler

### Temel Kütüphaneler

| Teknoloji | Versiyon | Kullanım Amacı |
|-----------|----------|----------------|
| **React** | 19.2.8 | UI bileşenleri ve state yönetimi |
| **Vite** | 8.2.2 | Hızlı derleme ve geliştirme sunucusu |
| **Tailwind CSS** | 4.3.3 | Utility-first CSS kütüphanesi |
| **Framer Motion** | 13.2.0 | React animasyonları |
| **GSAP** | 3.15.0 | Gelişmiş animasyonlar |
| **Lucide React** | 1.40.0 | İkon kütüphanesi |
| **React Icons** | 5.7.0 | Ek ikonlar |

### Geliştirme Araçları

| Araç | Amacı |
|------|-------|
| **Oxlint** | Kod kalitesi ve linting |
| **Autoprefixer** | CSS tarayıcı uyumluluğu |
| **PostCSS** | CSS işlemleri |

---

## Komponentlerin Detaylı Açıklaması

### 1. **App.jsx** - Ana Uygulama
**Dosya Konumu**: `src/App.jsx`

```jsx
// Tüm komponentleri bir araya getiren ana bileşen
function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-white">
      <Navbar />
      <main>
        <Home />
        <SkillMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
```

**Ne yapar**: Sayfanın genel yapısını tanımlar.

---

### 2. **Navbar.jsx** - Navigasyon Çubuğu
**Dosya Konumu**: `src/components/Navbar.jsx`

**Özellikler**:
- Desktop: Sabit, yuvarlatılmış "pill" stil navigasyon
- Mobil: Sallanan animasyonlu menu (StaggeredMenu)
- Aktif bölümü vurgulayan sarı highlight
- Sayfa kaydığında arka plan blur ve koyu renk alır

**Bölümler**: Home, About, Skills, Projects, Experience, Testimonials (Comments olarak gösterilir), Contact

**İçinde Kullanılan**:
- Framer Motion: Animasyon (nav-pill transition)
- StaggeredMenu: Mobil menu

---

### 3. **Home.jsx** - Ana Sayfa (Hero Section)
**Dosya Konumu**: `src/components/Home.jsx`

**Özellikler**:
- **DecryptText**: Yazı şifreli görünürken şifresi çözülerek yazan özel bileşen
- **Büyük başlık**: "Data-Driven Software Engineering"
- **Arka plan görseli**: Kişinin fotoğrafı ortada gösterilir
- **CTA Butonu**: "See my works" → Projects bölümüne link

**Özelleştirme Noktaları**:
- Metni değiştirmek: `DecryptText text="Yeni metin"` değerlerini güncelle
- Arka plan görselini değiştirmek: `public/img/hero.png` dosyasını değiştir
- Fonksiyonel açıklamayı güncelle: 70. satırdaki `<p>` etiketi içindeki metni düzenle

---

### 4. **SkillMarquee.jsx** - Yetenekler Bandı
**Dosya Konumu**: `src/components/SkillMarquee.jsx`

**Özellikler**:
- Yatay kaydırılan, sonsuz loop yapan teknoloji adları
- Masaüstünde görülür, mobilde gizli
- Animasyon otomatik ve çok sayıda teknoloji gösterebilir

**Özelleştirme**:
```jsx
// Teknoloji adlarını güncellemek için bu kısımı düzenle:
const skills = ['React', 'Python', 'TensorFlow', /* ... */];
```

---

### 5. **About.jsx** - Hakkında Bölümü
**Dosya Konumu**: `src/components/About.jsx`

**İçerik**:
- Profesyonel özgeçmiş/biyografi
- Görsel (opsiyonel)
- Temel yetenekler özeti

**Özelleştirme**:
Metni doğrudan bileşen içinde düzenleme yaparak güncelleyebilirsiniz.

---

### 6. **Skills.jsx** - Yetenekler Bölümü
**Dosya Konumu**: `src/components/Skills.jsx`

**Özellikler**:
- Kategorilere ayrılmış yetenekler
- Grid layout (responsive)
- Kart tasarımı (card design)

**Kategoriler**: Programming, Data Science, Tools, vb.

---

### 7. **Projects.jsx** - Projeler Bölümü
**Dosya Konumu**: `src/components/Projects.jsx`

**Özellikler**:
- Proje kartları ızgara düzeni
- Her proje: başlık, açıklama, teknolojiler, linkler
- Hover efektleri

**Projeleri Ekleme/Düzenleme**:
```jsx
const projects = [
  {
    id: 1,
    title: "Proje Adı",
    description: "Açıklama",
    technologies: ["React", "Node.js"],
    image: "/img/project1.png",
    link: "https://...",
    github: "https://..."
  },
  // Yeni proje eklemek için yukarıdakini kopyala
];
```

---

### 8. **Experience.jsx** - İş Deneyimi
**Dosya Konumu**: `src/components/Experience.jsx`

**Özellikler**:
- Timeline/kronolojik görünüm
- Şirket, pozisyon, tarih, açıklama

**Deneyim Ekleme**:
```jsx
const experiences = [
  {
    company: "Şirket Adı",
    position: "Pozisyon",
    date: "2023 - Günümüz",
    description: "Ne yaptığınız"
  }
];
```

---

### 9. **Testimonials.jsx** - Öneriler/Referanslar
**Dosya Konumu**: `src/components/Testimonials.jsx`

**Özellikler**:
- Kişilerden referans/yorum
- Avatar, isim, pozisyon, şirket
- Carousel veya grid görünüm

---

### 10. **Contact.jsx** - İletişim Bölümü
**Dosya Konumu**: `src/components/Contact.jsx`

**Özellikler**:
- Bento grid layout
- Sosyal medya linkleri
- İletişim kutuları (Email, LinkedIn, GitHub, Twitter, vb.)

**Sosyal Linkleri Güncelleme**:
```jsx
const contactItems = [
  { icon: Mail, label: "Email", value: "email@example.com", link: "mailto:email@example.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/...", link: "https://..." },
  // ... diğer sosyal medya
];
```

---

### 11. **StaggeredMenu.jsx** - Mobil Menü
**Dosya Konumu**: `src/components/StaggeredMenu.jsx`

**Özellikler**:
- Hamburger ikonu
- Sallanan açılır-kapanır animasyon (stagger effect)
- Mobil cihazlar için optimize edilmiş
- Sayılı liste (1. Home, 2. About, vb.)

---

### 12. **Footer.jsx** - Alt Bilgi
**Dosya Konumu**: `src/components/Footer.jsx`

**İçerik**:
- Telif hakkı (© 2024 Hasibe Nida Akdoğan)
- İletişim bilgileri
- Sosyal medya linkleri

---

### 13. **ScrollToTop.jsx** - Yukarı Kaydırma Butonu
**Dosya Konumu**: `src/components/ScrollToTop.jsx`

**Özellikler**:
- Sayfanın aşağısından görülür
- "Scroll to top" işlevselliği
- Smooth scroll animasyonu

---

## Stil Sistemi ve Tasarım

### Renk Paleti
`src/index.css` dosyasında tanımlanmış custom CSS değişkenleri:

```css
@theme {
  --color-primary: #151515;                /* Birincil arka plan */
  --color-brand-yellow: #DFFF00;           /* Ana vurgu rengi (sarı) */
  --color-accent: #DFFF00;                 /* Aksent rengi */
  --color-accent-light: #E9FF4D;           /* Daha açık sarı */
  --color-dark-bg: #151515;                /* Koyu arka plan */
  --color-darker-bg: #101010;              /* Daha koyu arka plan */
  --color-card-bg: #1A1A1A;                /* Kart arka planı */
  --color-card-hover-bg: #222222;          /* Kart hover durumu */
  --color-text-light: #A3A3A3;             /* Açık metin */
  --color-text-lighter: #E5E5E5;           /* Çok açık metin */
  --color-border-color: #2A2A2A;           /* Kenar rengi */
}
```

### Renkleri Değiştirme

Örnek: Sarı rengi turuncu yapmak
```css
--color-accent: #FF8C00;        /* Eski: #DFFF00 (sarı) */
--color-accent-light: #FFB347;  /* Eski: #E9FF4D */
```

### Tailwind CSS Utilities

Proje **Tailwind CSS v4** kullanır. Hızlı stil ekleme örnekleri:

```jsx
// Padding
className="p-4"           // padding: 1rem
className="px-6 py-3"     // horizontal padding + vertical padding

// Margin
className="m-4"           // margin: 1rem
className="mb-8"          // margin-bottom

// Display & Layout
className="flex items-center justify-between"
className="grid grid-cols-3 gap-4"
className="hidden md:block"  // Mobilde gizli, tablet+da görünür

// Background & Text
className="bg-dark-bg text-white"
className="bg-[var(--color-accent)]"  // Custom renk kullanma

// Animasyonlar
className="transition-colors duration-300"
className="hover:opacity-80"  // Hover durumu

// Responsive
className="text-sm md:text-lg lg:text-xl"  // Ekran boyutuna göre metin büyüklüğü
className="w-full md:w-1/2"    // Genişlik
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### Framer Motion Animasyonları

```jsx
import { motion } from 'framer-motion';

// Basit fade in animasyonu
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  İçerik
</motion.div>

// Kaydırma animasyonu
<motion.div
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  İçerik
</motion.div>

// Döngü animasyonu
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
>
  Dönen içerik
</motion.div>
```

---

## Değişiklik Rehberi

### 1. Kişi Bilgilerini Güncelleme

#### Adı ve Başlığı Değiştirme
**Dosya**: `index.html` (satır 7, 10, 20, 28)
```html
<!-- Eski -->
<title>Hasibe Nida Akdoğan | Software Engineer & Data Specialist</title>

<!-- Yeni -->
<title>Adınız | Pozisyonunuz</title>
```

**Dosya**: `src/components/Home.jsx` (satır 96, 104)
```jsx
<!-- Eski -->
<h2>Hasibe Nida</h2>

<!-- Yeni -->
<h2>Adınız Soyadınız</h2>
```

---

### 2. Sosyal Medya Linklerini Güncelleme

**Dosya**: `src/components/Contact.jsx`
```jsx
// Kontakta linkler bul ve güncelle
{
  icon: Github,
  label: "GitHub",
  link: "https://github.com/yeni-kullanıcı-adı"  // BURASI
}
```

---

### 3. Görselleri Değiştirme

#### Ana Sayfa Arka Plan Görseli
1. `public/img/` klasörüne yeni görseli `hero.png` adıyla koy
2. Veya dosya adını değiştirir ve `Home.jsx` dosyasında kodu güncelle

**Dosya**: `src/components/Home.jsx` (satır 88)
```jsx
<!-- Eski -->
<img src="/img/hero.png" alt="Hasibe Nida Akdoğan" />

<!-- Yeni dosya adına (örn: profile.jpg) -->
<img src="/img/profile.jpg" alt="Adınız Soyadınız" />
```

---

### 4. Yetenekleri (Skills) Ekleme/Düzenleme

**Dosya**: `src/components/Skills.jsx`

Eğer bileşen içinde `const skills` varsa:
```jsx
const skills = {
  "Programming": ["JavaScript", "Python", "React", "Node.js"],
  "Data Science": ["Machine Learning", "TensorFlow", "Pandas"],
  "Tools": ["Git", "Docker", "AWS"]
};
```

Yeni yetenek eklemek:
```jsx
const skills = {
  "Programming": ["JavaScript", "Python", "React", "Node.js", "TypeScript"], // YENİ
  "Data Science": ["Machine Learning", "TensorFlow", "Pandas", "Scikit-learn"], // YENİ
  // ... devamı
};
```

---

### 5. Proje Ekleme/Güncelleme

**Dosya**: `src/components/Projects.jsx`

```jsx
const projects = [
  {
    id: 1,
    title: "Proje 1",
    description: "Açıklama",
    technologies: ["React", "Tailwind"],
    image: "/img/project1.png",
    link: "https://project1.com",
    github: "https://github.com/user/project1"
  },
  // YENİ PROJE EKLEMEK
  {
    id: 2,
    title: "Yeni Proje",
    description: "Yeni proje açıklaması",
    technologies: ["Next.js", "TypeScript"],
    image: "/img/project2.png",
    link: "https://project2.com",
    github: "https://github.com/user/project2"
  }
];
```

**Yeni projenin görselini ekle**:
1. `public/img/` klasörüne `project2.png` adıyla koy
2. Kod içinde referans ver

---

### 6. İş Deneyimi Ekleme

**Dosya**: `src/components/Experience.jsx`

```jsx
const experiences = [
  {
    company: "ABC Şirket",
    position: "Senior Developer",
    date: "2023 - Günümüz",
    description: "Proje yönetimi ve geliştirme"
  },
  // YENİ DENEYIM
  {
    company: "XYZ Girişim",
    position: "Junior Developer",
    date: "2020 - 2023",
    description: "Frontend geliştirme ve UI tasarımı"
  }
];
```

---

### 7. Referans/Yorum Ekleme

**Dosya**: `src/components/Testimonials.jsx`

```jsx
const testimonials = [
  {
    name: "Kişi Adı",
    role: "Pozisyon",
    company: "Şirket",
    text: "Tavsiye metni",
    avatar: "/img/avatar1.jpg"
  },
  // YENİ YORUM
  {
    name: "Yeni Kişi",
    role: "CEO",
    company: "Yeni Şirket",
    text: "İyi bir geliştiricidir...",
    avatar: "/img/avatar2.jpg"
  }
];
```

---

### 8. Tema Renkleri Değiştirme

**Dosya**: `src/index.css`

```css
@theme {
  --color-accent: #DFFF00;      /* Sarı → diğer renk */
  --color-dark-bg: #151515;     /* Arka plan rengi */
  --color-darker-bg: #101010;   /* Daha koyu arka plan */
  /* ... diğer renkler */
}
```

Örnek: Dark blue tema
```css
@theme {
  --color-accent: #00A9FF;           /* Açık mavi */
  --color-dark-bg: #0A1128;          /* Koyu mavi */
  --color-darker-bg: #050D1A;        /* Çok koyu mavi */
  --color-card-bg: #0F1E3A;          /* Kart mavi */
  /* ... diğerleri */
}
```

---

### 9. Meta Etiketlerini (SEO) Güncelleme

**Dosya**: `index.html` (satır 10-31)

```html
<meta name="title" content="Adınız | Pozisyonunuz" />
<meta name="description" content="Özgeçmiş açıklaması" />
<meta name="keywords" content="python, react, veri bilimi" />
<meta name="author" content="Adınız Soyadınız" />

<!-- Open Graph (Facebook/LinkedIn) -->
<meta property="og:title" content="Adınız | Pozisyonunuz" />
<meta property="og:description" content="Özgeçmiş açıklaması" />
<meta property="og:image" content="https://yoursite.com/img/hero.png" />
<meta property="og:url" content="https://yoursite.com" />
```

---

### 10. Navigation Linklerini Özelleştirme

**Dosya**: `src/components/Navbar.jsx` (satır 5)

```jsx
const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Comments', 'Contact'];
// 'Comments' → 'Testimonials' olarak gösterilir

// Yeni bir bölüm eklemek
const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Comments', 'Blog', 'Contact'];
```

**Not**: Her yeni sektion için ilgili bileşen ID'sini de oluşturmalısın. Örn:
```jsx
<section id="Blog">
  {/* Blog içeriği */}
</section>
```

---

## Sık Sorulan Sorular

### S: Bağımlılıkları güncellemek istiyorum?
**C**: 
```bash
npm update
# Veya belirli bir paket
npm install framer-motion@latest
```

### S: Hata ayıklama için console.log görmek istiyorum?
**C**: Tarayıcı geliştirici araçlarını açın (F12) → Console sekmesi

### S: Mobil cihazda test etmek istiyorum?
**C**: 
```bash
npm run dev
```
Sunucu çalışır duruma gelince, bilgisayarınızın IP adresini kullanarak diğer cihazlardan erişin:
```
http://192.168.x.x:5173
```

### S: Yapı başarısız oluyor? (Build error)
**C**: 
```bash
# Bağımlılıkları temizle ve yeniden yükle
rm -r node_modules
npm install
npm run build
```

### S: Lint hataları alıyorum?
**C**: 
```bash
npm run lint
# Veya oxlint doğrudan çalıştır
npx oxlint
```

### S: Görsel yüklenmiyor?
**C**: 
1. Dosya yolu doğru mu? (`public/img/hero.png`)
2. Dosya gerçekten var mı?
3. Dosya adında büyük/küçük harf farkı var mı?

### S: Animasyon çok hızlı/yavaş?
**C**: Framer Motion içindeki `duration` veya `transition` değerlerini değiştir:
```jsx
transition={{ duration: 0.6 }}  // Saniye olarak
```

### S: Dark mod eklemek istiyorum?
**C**: Tailwind dark mode'u kullan:
```jsx
className="bg-white dark:bg-black"
```

---

## Dağıtım (Deployment)

### Vercel'e Dağıtım (Önerilir)

**Adım 1**: Vercel hesabı oluştur
```
https://vercel.com
```

**Adım 2**: Git repository'nizi Vercel'e bağlayın
```
https://vercel.com/import
```

**Adım 3**: Kurguyu otomatik algılar ve dağıtır

### GitHub Pages'e Dağıtım

**Adım 1**: `vite.config.js` güncelle
```js
export default {
  base: '/HNAportfolyo/',  // Repository adı
  plugins: [react(), tailwindcss()],
}
```

**Adım 2**: Derleme ve dağıtım
```bash
npm run build
# dist klasörünü GitHub Pages'e yükle
```

### Netlify'ye Dağıtım

**Adım 1**: Netlify hesabı oluştur
```
https://netlify.com
```

**Adım 2**: GitHub repository'nizi bağlayın

**Adım 3**: Build ayarları:
- Build command: `npm run build`
- Publish directory: `dist`

---

## Kod Standartları

### Bileşen Yazma Standardı

```jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const MyComponent = () => {
  const [state, setState] = useState(false);

  return (
    <motion.section 
      id="MyComponent"
      className="min-h-screen bg-dark-bg text-white"
    >
      <h1>Başlık</h1>
      <p>İçerik</p>
    </motion.section>
  );
};

export default MyComponent;
```

### Dosya İsimlendirme
- Bileşenler: PascalCase (`Home.jsx`, `Navbar.jsx`)
- Fontlar/Yardımcılar: camelCase (`utils.js`)
- Stil dosyaları: kebab-case (`global-styles.css`)

---

## Güvenlik & Best Practices

1. **Gizli bilgiler**: `public/` klasörüne asla şifre, API anahtarı vb. koyma
2. **Çevresel değişkenler**: `.env.local` dosyası kullan (örn: API URL'leri)
3. **Harici linklerin güvenliği**: `rel="noopener noreferrer"` ekle
4. **Resimler**: Optimize et (WebP formatı tercih et)

---

## İletişim & Destek

Herhangi bir sorunuz olursa:
- **E-posta**: samdotmc@gmail.com
- **GitHub**: Proje dosyalarındaki kod yorumlarını kontrol et
- **Node.js Docs**: https://nodejs.org
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Vite Docs**: https://vite.dev

---

## Versiyon Tarihi

| Versiyon | Tarih | Değişiklikler |
|----------|-------|---------------|
| 1.0 | 2024-09 | İlk sürüm - SEO, animasyonlar, responsive tasarım |

---

**Son Güncelleme**: 17 Eylül 2026

*Bu dokümantasyon projenin temel özelliklerini ve değişiklik yapmanın yollarını açıklar. Teknoloji güncellemeleri veya yeni özellikler eklenirse, bu dosyayı güncelleyin.*
