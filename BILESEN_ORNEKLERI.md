# Bileşen Örnekleri ve Kod Şablonları

## 1. Skills (Yetenekler) Bileşeni Örneği

### Basit Yetenek Listesi
```jsx
// src/components/Skills.jsx

const skillsData = {
  "Programlama Dilleri": ["JavaScript", "Python", "Java", "C++"],
  "Frontend": ["React", "Vue.js", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Node.js", "Express", "FastAPI", "Django"],
  "Veri Bilimi": ["TensorFlow", "Pandas", "NumPy", "Scikit-learn"],
  "Araçlar": ["Git", "Docker", "AWS", "Visual Studio Code"]
};

const Skills = () => {
  return (
    <section id="Skills" className="min-h-screen bg-dark-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Yetenekler</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-card-bg border border-border-color rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">{category}</h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-text-light">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
```

---

## 2. Projects (Projeler) Bileşeni Örneği

### Proje Kartları
```jsx
// src/components/Projects.jsx

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Tam özellikli e-ticaret sitesi, React ve Node.js kullanarak geliştirildi.",
    image: "/img/project1.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://example-ecommerce.com",
    github: "https://github.com/user/ecommerce"
  },
  {
    id: 2,
    title: "Makine Öğrenmesi Model",
    description: "Pazarındaki ürün tavsiye sistemi, TensorFlow kullanılarak eğitildi.",
    image: "/img/project2.png",
    technologies: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
    link: "https://ml-recommender.example.com",
    github: "https://github.com/user/ml-model"
  },
  {
    id: 3,
    title: "Real-time Chat Uygulaması",
    description: "WebSocket ve Socket.io ile canlı sohbet uygulaması.",
    image: "/img/project3.png",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    link: "https://chat-app.example.com",
    github: "https://github.com/user/chat-app"
  }
];

const Projects = () => {
  return (
    <section id="Projects" className="min-h-screen bg-darker-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Projeler</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-card-bg border border-border-color rounded-lg overflow-hidden hover:border-accent transition-colors"
            >
              {/* Proje Görseli */}
              <div className="relative overflow-hidden h-48 bg-card-hover-bg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Proje Bilgisi */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-text-light text-sm mb-4">{project.description}</p>
                
                {/* Teknolojiler */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs bg-card-hover-bg text-accent px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Linkler */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ziyaret Et
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Kod
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

---

## 3. Experience (Deneyim) Bileşeni Örneği

### Timeline Görünümü
```jsx
// src/components/Experience.jsx

import { motion } from 'framer-motion';

const experienceData = [
  {
    id: 1,
    company: "Tech Startup Inc.",
    position: "Senior Frontend Developer",
    date: "2023 - Günümüz",
    duration: "1+ yıl",
    description: "React ve Next.js ile ölçeklenebilir web uygulamaları geliştirdim. 5+ kişilik bir ekibi yönetim altında çalıştırdım.",
    achievements: [
      "Sayfa yükleme süresini %40 azalttım",
      "3 büyük özelliği başarıyla teslim ettim",
      "Ekip kodlama standartlarını belirledi"
    ]
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    date: "2021 - 2023",
    duration: "2 yıl",
    description: "Ön uç ve arka uç geliştirme, veritabanı yönetimi. API tasarımı ve entegrasyonu.",
    achievements: [
      "10+ API endpoint geliştirdi",
      "Müşteri projeleri başarıyla teslim",
      "Kod gözden geçirme prosesini iyileştirdim"
    ]
  },
  {
    id: 3,
    company: "Learning Academy",
    position: "Junior Developer",
    date: "2020 - 2021",
    duration: "1 yıl",
    description: "Kişisel öğrenme ve temel web geliştirme becerilerinin kazanılması.",
    achievements: [
      "HTML, CSS, JavaScript öğrendim",
      "İlk portföyü oluşturdum",
      "Versiyon kontrolü (Git) öğrendim"
    ]
  }
];

const Experience = () => {
  return (
    <section id="Experience" className="min-h-screen bg-dark-bg text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">İş Deneyimi</h2>
        
        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-l-4 border-accent pl-6 pb-8 last:pb-0"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.position}</h3>
                  <p className="text-accent text-lg">{exp.company}</p>
                </div>
              </div>
              
              <p className="text-text-light text-sm mb-3">
                {exp.date} • {exp.duration}
              </p>
              
              <p className="text-text-lighter mb-4">{exp.description}</p>
              
              <div className="bg-card-bg rounded-lg p-4">
                <p className="text-accent font-semibold mb-2">Başarılar:</p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-text-light text-sm">
                      ✓ {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
```

---

## 4. Contact (İletişim) Bileşeni Örneği

### Bento Grid Layout
```jsx
// src/components/Contact.jsx

import { Mail, Linkedin, Github, Twitter, Phone, MessageSquare } from 'lucide-react';

const contactData = [
  {
    icon: Mail,
    label: "E-posta",
    value: "name@example.com",
    link: "mailto:name@example.com"
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 555 123 4567",
    link: "tel:+905551234567"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourname",
    link: "https://linkedin.com/in/yourname"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/yourname",
    link: "https://github.com/yourname"
  },
  {
    icon: Twitter,
    label: "Twitter/X",
    value: "@yourhandle",
    link: "https://twitter.com/yourhandle"
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "Direkt Mesaj",
    link: "https://wa.me/905551234567"
  }
];

const Contact = () => {
  return (
    <section id="Contact" className="min-h-screen bg-darker-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Bize Ulaşın</h2>
        <p className="text-text-light mb-12 max-w-2xl">
          Sorularınız, önerileriniz veya iş ortaklığı teklifleri için aşağıdaki yollardan bize ulaşabilirsiniz.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactData.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card-bg border border-border-color rounded-lg p-6 hover:border-accent transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-card-hover-bg rounded-lg group-hover:bg-accent group-hover:text-black transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-1">{contact.label}</h3>
                    <p className="text-text-light text-sm truncate group-hover:text-accent transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        
        {/* İletişim Formu (İsteğe Bağlı) */}
        <div className="mt-16 bg-card-bg border border-border-color rounded-lg p-8 max-w-2xl">
          <h3 className="text-2xl font-semibold mb-6">Doğrudan Mesaj Gönder</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Adınız"
              className="w-full bg-darker-bg border border-border-color rounded-lg px-4 py-2 text-white placeholder-text-light focus:outline-none focus:border-accent"
            />
            <input
              type="email"
              placeholder="E-posta Adresiniz"
              className="w-full bg-darker-bg border border-border-color rounded-lg px-4 py-2 text-white placeholder-text-light focus:outline-none focus:border-accent"
            />
            <textarea
              placeholder="Mesajınız"
              rows="4"
              className="w-full bg-darker-bg border border-border-color rounded-lg px-4 py-2 text-white placeholder-text-light focus:outline-none focus:border-accent resize-none"
            />
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-light text-black font-semibold py-2 rounded-lg transition-colors duration-300"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

---

## 5. Testimonials (Öneriler) Bileşeni Örneği

### Referans Kartları
```jsx
// src/components/Testimonials.jsx

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "CTO",
    company: "Tech Startup Inc.",
    text: "Nida ile çalışmak büyük bir onurdu. React ve performans optimizasyonu konusunda çok bilgili. Takımımızda önemli bir katkı sağladı.",
    avatar: "/img/avatar1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Ayşe Demir",
    role: "Product Manager",
    company: "Digital Solutions Ltd.",
    text: "Veri analizi konusunda dikkat çekici yetenekleri var. Projelerini zaman çizelgesinde ve bütçe dahilinde teslim eden güvenilir bir geliştiricidir.",
    avatar: "/img/avatar2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    role: "Frontend Lead",
    company: "Creative Agency",
    text: "Kullanıcı deneyimine odaklanmış, temiz kod yazıyor. Ekip ortamında iyi iletişim kuruyor ve yeni teknolojilere hızlı adapte oluyor.",
    avatar: "/img/avatar3.jpg",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section id="Comments" className="min-h-screen bg-dark-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Referanslar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card-bg border border-border-color rounded-lg p-8"
            >
              {/* Yıldızlar */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Metin */}
              <p className="text-text-lighter mb-6 italic">"{testimonial.text}"</p>
              
              {/* Kişi Bilgisi */}
              <div className="flex items-center gap-4 pt-6 border-t border-border-color">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-text-light text-sm">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
```

---

## 6. About (Hakkında) Bileşeni Örneği

### İşletme Sayfası
```jsx
// src/components/About.jsx

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="About" className="min-h-screen bg-darker-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Hakkında</h2>
          <div className="w-20 h-1 bg-accent"></div>
        </motion.div>

        {/* İçerik */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Metin */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-text-lighter text-lg leading-relaxed">
              Merhaba! Ben Nida, veri-odaklı bir yazılım mühendisiyim. Gelişmiş matematiksel modelleme ve modern web teknolojileri arasındaki boşluğu kapatarak ölçeklenebilir çözümler oluşturmayı seviyorum.
            </p>

            <p className="text-text-lighter text-lg leading-relaxed">
              Lisans eğitimimi İstanbul Teknik Üniversitesi'nde matematik mühendisliği alanında tamamladım. Yazılım geliştirme yolculuğumda, frontend ve backend geliştirme, veri analizi ve makine öğrenmesi alanlarında deneyim kazandım.
            </p>

            <p className="text-text-lighter text-lg leading-relaxed">
              Şu anda, React, Python ve TensorFlow gibi modern teknolojilerle ölçeklenebilir uygulamalar geliştirerek, iş sorunlarını veri ve kod aracılığıyla çözmekte çalışıyorum.
            </p>

            {/* İstatistikler */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-3xl font-bold text-accent">5+</p>
                <p className="text-text-light text-sm">Yıl Deneyim</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">30+</p>
                <p className="text-text-light text-sm">Tamamlanan Proje</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">15+</p>
                <p className="text-text-light text-sm">Memnun İstemci</p>
              </div>
            </div>
          </motion.div>

          {/* Görsel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-4 border-accent">
              <img
                src="/img/about.jpg"
                alt="Profil Fotoğrafı"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
```

---

## 7. Custom Hook Örneği - useScrollPosition

```jsx
// src/hooks/useScrollPosition.js

import { useState, useEffect } from 'react';

export const useScrollPosition = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};

// Kullanım:
// const isScrolled = useScrollPosition(100);
```

---

## 8. Animasyon Varyasyonları

```jsx
// Farklı animasyon kombinasyonları

// 1. Bounce Effect
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 1, repeat: Infinity }}
>
  Zıplayan İçerik
</motion.div>

// 2. Glow Effect
<motion.div
  animate={{ 
    boxShadow: [
      "0 0 0 rgba(223,255,0,0.4)",
      "0 0 20px rgba(223,255,0,0.4)",
      "0 0 0 rgba(223,255,0,0.4)"
    ]
  }}
  transition={{ duration: 2, repeat: Infinity }}
  className="p-4 bg-accent text-black rounded-lg"
>
  Parlayan İçerik
</motion.div>

// 3. Slide In on Scroll
<motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.5 }}
>
  Kaydırılarak Gelen İçerik
</motion.div>

// 4. Stagger Container (Çocuklara göre)
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }}
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

---

## 9. Tailwind Responsive Grid Örnekleri

```jsx
// 1 sütun mobil, 2 sütun tablet, 3 sütun masaüstü
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 1 sütun mobil, 4 sütun masaüstü
<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

// Dinamik grid (auto-fit)
<div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">

// Asimetrik grid
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="md:col-span-2">Büyük Alan</div>
  <div>Küçük Alan</div>
</div>
```

---

## 10. Form Input Bileşeni

```jsx
// Yeniden kullanılabilir input bileşeni

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = ""
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`
        w-full px-4 py-2 rounded-lg
        bg-card-bg border border-border-color
        text-white placeholder-text-light
        focus:outline-none focus:border-accent
        transition-colors duration-300
        ${className}
      `}
    />
  );
};

// Kullanım:
<Input 
  type="email" 
  placeholder="Email girin" 
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

---

**Bu şablonları kopyalayarak ve kendi verilerinizle doldurup özelleştirebilirsiniz! 🎨**
