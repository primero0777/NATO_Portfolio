/* ═══════════════════════════════════════════════════
   NATO KOMI EPHRAIM — Portfolio Script
   ═══════════════════════════════════════════════════ */

'use strict';

/* ── TRANSLATIONS ─────────────────────────────────── */
const i18n = {
  fr: {
    'nav.about':       'À propos',
    'nav.skills':      'Compétences',
    'nav.projects':    'Projets',
    'nav.services':    'Services',
    'nav.experience':  'Expérience',
    'nav.blog':        'Blog',
    'nav.contact':     'Contact',
    'nav.hire':        'Me contacter',

    'hero.badge':      'Disponible pour des projets',
    'hero.greeting':   'Bonjour, je suis',
    'hero.tagline':    'Je conçois des applications web modernes, performantes et sécurisées.',
    'hero.cta1':       'Voir mes projets',
    'hero.cta2':       'Me contacter',

    'about.label':     'À propos de moi',
    'about.title':     'Passionné par le code<br/>et le design.',
    'about.p1':        "Je suis NATO Komi Ephraim, développeur fullstack basé au Togo. Je crée des expériences numériques élégantes, performantes et centrées sur l'utilisateur — du concept au déploiement.",
    'about.p2':        "Mon objectif est de travailler avec des startups et entreprises ambitieuses, aussi bien localement qu'à l'international, pour transformer leurs idées en produits digitaux impactants.",
    'about.p3':        "Je m'inspire des meilleures pratiques de la Silicon Valley : code propre, design moderne, et livraison rapide.",
    'about.stat1':     'Clients',
    'about.stat2':     'Projets',
    'about.stat3':     'Ans XP',
    'about.cv':        'Télécharger CV',
    'about.card1.title': '3+ ans',
    'about.card1.sub':   "d'expérience",
    'about.card2.title': '6 projets',
    'about.card2.sub':   'livrés',

    'skills.label':    'Compétences',
    'skills.title':    'Technologies<br/>maîtrisées.',
    'skills.desc':     'Des outils modernes pour créer des produits de qualité.',
    'skills.notions':  'Notions',
    'skills.tools':    'Outils & Environnements',

    'projects.label':  'Projets',
    'projects.title':  'Réalisations<br/>récentes.',
    'projects.desc':   'Des projets réels, livrés, utilisés.',
    'projects.code':   'Code',
    'projects.demo':   'Démo',
    'projects.p1.title': 'Générateur de CV',
    'projects.p1.desc':  "Application web permettant de créer un CV professionnel automatiquement avec export PDF.",
    'projects.p2.title': 'FINEX Pro',
    'projects.p2.desc':  "Site d'impression professionnelle avec catalogue produits, devis en ligne et gestion des commandes.",
    'projects.p3.title': 'ALA Group',
    'projects.p3.desc':  "Site vitrine pour une entreprise d'architecture intérieure et extérieure avec galerie de réalisations.",
    'projects.p4.title': 'AFRICA Wine Food',
    'projects.p4.desc':  "Plateforme e-commerce spécialisée dans la vente de vins et spiritueux avec panier et paiement en ligne.",
    'projects.p5.title': 'AD Wessome Temple',
    'projects.p5.desc':  "Site vitrine pour l'église Maranatha avec agenda, événements et formulaire de contact.",
    'projects.p6.title': 'MiabeTrans',
    'projects.p6.desc':  "Plateforme de transport interurbain avec réservation de billets, suivi des voyages et paiement mobile.",

    'services.label':  'Services',
    'services.title':  'Ce que je<br/>peux faire.',
    'services.popular': 'Populaire',
    'services.s1.title': 'Sites Web',
    'services.s1.desc':  "Création de sites vitrines, landing pages et e-commerce modernes, rapides et optimisés SEO.",
    'services.s1.f1':    'Design sur-mesure',
    'services.s1.f2':    '100% responsive',
    'services.s1.f3':    'Optimisation SEO',
    'services.s2.title': 'Applications Web',
    'services.s2.desc':  "Développement d'applications web complexes avec base de données, authentification et tableau de bord.",
    'services.s2.f1':    'Frontend + Backend',
    'services.s2.f2':    'Base de données',
    'services.s2.f3':    'API & intégrations',
    'services.s3.title': 'UI/UX Design',
    'services.s3.desc':  "Conception d'interfaces élégantes et intuitives centrées sur l'expérience utilisateur.",
    'services.s3.f1':    'Maquettes Figma',
    'services.s3.f2':    'Prototypage interactif',
    'services.s3.f3':    'Design system',

    'exp.label':  'Parcours',
    'exp.title':  'Mon évolution.',
    'exp.e1.date':    '2024 — Présent',
    'exp.e1.title':   'Développeur Fullstack Freelance',
    'exp.e1.company': 'Indépendant · Togo & International',
    'exp.e1.desc':    "Conception et développement de solutions web complètes pour clients locaux et internationaux. Gestion de projets de A à Z, du design au déploiement.",
    'exp.e2.date':    '2023',
    'exp.e2.title':   'Développeur Web Junior',
    'exp.e2.company': 'Projets personnels & associatifs',
    'exp.e2.desc':    "Développement de mes premiers projets professionnels : sites vitrine, e-commerce et applications métier. Apprentissage approfondi de JavaScript et MySQL.",
    'exp.e3.date':    '2022',
    'exp.e3.title':   'Formation Développement Web',
    'exp.e3.company': 'Auto-formation · Togo',
    'exp.e3.desc':    "Maîtrise des fondamentaux : HTML5, CSS3, JavaScript ES6+. Construction des premières applications web et découverte du design responsive.",
    'exp.e4.date':    '2021',
    'exp.e4.title':   'Début du Voyage',
    'exp.e4.company': 'Curiosité & passion',
    'exp.e4.desc':    "Première ligne de code écrite. Découverte de la programmation web, de l'algorithmique et de la logique informatique. Une passion instantanée.",

    'blog.label':  'Blog',
    'blog.title':  'Mes derniers<br/>articles.',
    'blog.desc':   'Réflexions sur le développement web, le design et la tech.',
    'blog.cat.css':  'CSS',
    'blog.cat.perf': 'Performance',
    'blog.cat.free': 'Freelance',
    'blog.date1': '15 Mars 2025',
    'blog.date2': '28 Fév 2025',
    'blog.date3': '20 Jan 2025',
    'blog.b1.title': 'CSS Grid vs Flexbox : Quand utiliser quoi ?',
    'blog.b1.desc':  "Un guide pratique pour choisir entre Grid et Flexbox selon vos besoins de mise en page.",
    'blog.b2.title': '10 astuces pour booster la performance de votre site',
    'blog.b2.desc':  "Des techniques concrètes pour accélérer le chargement et améliorer le score Lighthouse.",
    'blog.b3.title': 'Trouver ses premiers clients freelance en Afrique',
    'blog.b3.desc':  "Mon expérience et mes conseils pour démarrer une activité freelance dans le domaine tech.",
    'blog.read':   "Lire l'article",

    'testi.label': 'Témoignages',
    'testi.title': 'Ce que disent<br/>mes clients.',
    'testi.t1.text': '"NATO a livré notre site e-commerce en temps record, avec un design qui a dépassé toutes nos attentes. Son sens du détail et sa réactivité sont remarquables."',
    'testi.t1.name': 'Ama Kofi',
    'testi.t1.role': 'Directrice, AFRICA Wine Food',
    'testi.t2.text': '"Excellent travail sur notre plateforme de transport. La solution est robuste, intuitive et nos utilisateurs adorent l\'interface. Je recommande NATO sans hésitation."',
    'testi.t2.name': 'Koffi Bérenger',
    'testi.t2.role': 'CEO, MiabeTrans',
    'testi.t3.text': '"Notre site d\'architecture reflète parfaitement l\'identité de notre marque. NATO comprend les enjeux business au-delà du code. Un vrai partenaire de confiance."',
    'testi.t3.name': 'Lamine Adjoa',
    'testi.t3.role': 'Fondateur, ALA Group',

    'contact.label': 'Contact',
    'contact.title': 'Travaillons<br/>ensemble.',
    'contact.desc':  "Un projet en tête ? Je réponds sous 24h.",
    'contact.email.label': 'Email',
    'contact.phone.label': 'WhatsApp',
    'contact.form.name':    'Nom complet',
    'contact.form.email':   'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send':    'Envoyer le message',
    'contact.form.success': 'Message envoyé avec succès !',

    'footer.tagline': 'Développeur Fullstack passionné,<br/>basé au Togo.',
    'footer.nav':     'Navigation',
    'footer.contact': 'Contact',
    'footer.rights':  'Tous droits réservés.',
    'footer.made':    'Conçu & développé avec passion.',
  },

  en: {
    'nav.about':       'About',
    'nav.skills':      'Skills',
    'nav.projects':    'Projects',
    'nav.services':    'Services',
    'nav.experience':  'Experience',
    'nav.blog':        'Blog',
    'nav.contact':     'Contact',
    'nav.hire':        'Hire me',

    'hero.badge':      'Available for projects',
    'hero.greeting':   "Hi, I'm",
    'hero.tagline':    'I build modern, fast and secure web applications.',
    'hero.cta1':       'View my work',
    'hero.cta2':       'Get in touch',

    'about.label':     'About me',
    'about.title':     'Passionate about code<br/>and design.',
    'about.p1':        "I'm NATO Komi Ephraim, a fullstack developer based in Togo. I create elegant, high-performance digital experiences centered on the user — from concept to deployment.",
    'about.p2':        "My goal is to work with ambitious startups and companies, both locally and internationally, to transform their ideas into impactful digital products.",
    'about.p3':        "I draw inspiration from the best Silicon Valley practices: clean code, modern design, and fast delivery.",
    'about.stat1':     'Clients',
    'about.stat2':     'Projects',
    'about.stat3':     'Yrs XP',
    'about.cv':        'Download CV',
    'about.card1.title': '3+ years',
    'about.card1.sub':   'of experience',
    'about.card2.title': '6 projects',
    'about.card2.sub':   'delivered',

    'skills.label':    'Skills',
    'skills.title':    'Technologies<br/>I master.',
    'skills.desc':     'Modern tools to build quality products.',
    'skills.notions':  'Basics',
    'skills.tools':    'Tools & Environments',

    'projects.label':  'Projects',
    'projects.title':  'Recent<br/>work.',
    'projects.desc':   'Real projects, delivered, used.',
    'projects.code':   'Code',
    'projects.demo':   'Demo',
    'projects.p1.title': 'CV Generator',
    'projects.p1.desc':  "Web app to create a professional CV automatically with PDF export.",
    'projects.p2.title': 'FINEX Pro',
    'projects.p2.desc':  "Professional printing website with product catalog, online quotes and order management.",
    'projects.p3.title': 'ALA Group',
    'projects.p3.desc':  "Showcase site for an interior and exterior architecture firm with a project gallery.",
    'projects.p4.title': 'AFRICA Wine Food',
    'projects.p4.desc':  "E-commerce platform specializing in the sale of wines and spirits with cart and online payment.",
    'projects.p5.title': 'AD Wessome Temple',
    'projects.p5.desc':  "Showcase site for the Maranatha Church with schedule, events and contact form.",
    'projects.p6.title': 'MiabeTrans',
    'projects.p6.desc':  "Intercity transport platform with ticket booking, trip tracking and mobile payment.",

    'services.label':  'Services',
    'services.title':  "What I<br/>can do.",
    'services.popular': 'Popular',
    'services.s1.title': 'Websites',
    'services.s1.desc':  "Creation of modern, fast and SEO-optimized showcase sites, landing pages and e-commerce.",
    'services.s1.f1':    'Custom design',
    'services.s1.f2':    '100% responsive',
    'services.s1.f3':    'SEO optimization',
    'services.s2.title': 'Web Applications',
    'services.s2.desc':  "Development of complex web apps with database, authentication and admin dashboard.",
    'services.s2.f1':    'Frontend + Backend',
    'services.s2.f2':    'Database',
    'services.s2.f3':    'API & integrations',
    'services.s3.title': 'UI/UX Design',
    'services.s3.desc':  "Design of elegant and intuitive interfaces centered on user experience.",
    'services.s3.f1':    'Figma mockups',
    'services.s3.f2':    'Interactive prototyping',
    'services.s3.f3':    'Design system',

    'exp.label':  'Journey',
    'exp.title':  'My evolution.',
    'exp.e1.date':    '2024 — Present',
    'exp.e1.title':   'Freelance Fullstack Developer',
    'exp.e1.company': 'Self-employed · Togo & International',
    'exp.e1.desc':    "Design and development of complete web solutions for local and international clients. Full project management from design to deployment.",
    'exp.e2.date':    '2023',
    'exp.e2.title':   'Junior Web Developer',
    'exp.e2.company': 'Personal & community projects',
    'exp.e2.desc':    "Development of my first professional projects: showcase sites, e-commerce and business apps. Deep dive into JavaScript and MySQL.",
    'exp.e3.date':    '2022',
    'exp.e3.title':   'Web Development Training',
    'exp.e3.company': 'Self-learning · Togo',
    'exp.e3.desc':    "Mastered fundamentals: HTML5, CSS3, JavaScript ES6+. Built first web applications and discovered responsive design.",
    'exp.e4.date':    '2021',
    'exp.e4.title':   'The Beginning',
    'exp.e4.company': 'Curiosity & passion',
    'exp.e4.desc':    "First line of code written. Discovering web programming, algorithms and computer logic. An instant passion.",

    'blog.label':  'Blog',
    'blog.title':  'My latest<br/>articles.',
    'blog.desc':   'Thoughts on web development, design and tech.',
    'blog.cat.css':  'CSS',
    'blog.cat.perf': 'Performance',
    'blog.cat.free': 'Freelance',
    'blog.date1': 'March 15, 2025',
    'blog.date2': 'Feb 28, 2025',
    'blog.date3': 'Jan 20, 2025',
    'blog.b1.title': 'CSS Grid vs Flexbox: When to use which?',
    'blog.b1.desc':  "A practical guide to choosing between Grid and Flexbox based on your layout needs.",
    'blog.b2.title': '10 tips to boost your website performance',
    'blog.b2.desc':  "Concrete techniques to speed up loading and improve your Lighthouse score.",
    'blog.b3.title': 'Finding your first freelance clients in Africa',
    'blog.b3.desc':  "My experience and advice for starting a freelance business in the tech field.",
    'blog.read':   "Read article",

    'testi.label': 'Testimonials',
    'testi.title': "What my<br/>clients say.",
    'testi.t1.text': '"NATO delivered our e-commerce site in record time, with a design that exceeded all our expectations. His attention to detail and responsiveness are remarkable."',
    'testi.t1.name': 'Ama Kofi',
    'testi.t1.role': 'Director, AFRICA Wine Food',
    'testi.t2.text': '"Excellent work on our transport platform. The solution is robust, intuitive and our users love the interface. I recommend NATO without hesitation."',
    'testi.t2.name': 'Koffi Bérenger',
    'testi.t2.role': 'CEO, MiabeTrans',
    'testi.t3.text': '"Our architecture site perfectly reflects our brand identity. NATO understands business challenges beyond code. A truly trustworthy partner."',
    'testi.t3.name': 'Lamine Adjoa',
    'testi.t3.role': 'Founder, ALA Group',

    'contact.label': 'Contact',
    'contact.title': "Let's work<br/>together.",
    'contact.desc':  "Have a project in mind? I reply within 24h.",
    'contact.email.label': 'Email',
    'contact.phone.label': 'WhatsApp',
    'contact.form.name':    'Full name',
    'contact.form.email':   'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send':    'Send message',
    'contact.form.success': 'Message sent successfully!',

    'footer.tagline': 'Passionate Fullstack Developer,<br/>based in Togo.',
    'footer.nav':     'Navigation',
    'footer.contact': 'Contact',
    'footer.rights':  'All rights reserved.',
    'footer.made':    'Designed & developed with passion.',
  }
};

/* ── TYPEWRITER ───────────────────────────────────── */
const typewriterPhrases = {
  fr: [
    'Développeur Fullstack',
    'Créateur d\'Expériences Web',
    'Expert UI/UX',
    'Développeur Web & Mobile',
  ],
  en: [
    'Fullstack Developer',
    'Web Experience Creator',
    'UI/UX Expert',
    'Web & Mobile Developer',
  ]
};

class Typewriter {
  constructor(el, phrases) {
    this.el = el;
    this.phrases = phrases;
    this.idx = 0;
    this.charIdx = 0;
    this.deleting = false;
    this.tick();
  }
  tick() {
    const phrase = this.phrases[this.idx];
    if (!this.deleting) {
      this.el.textContent = phrase.slice(0, ++this.charIdx);
      if (this.charIdx === phrase.length) {
        this.deleting = true;
        setTimeout(() => this.tick(), 2000);
        return;
      }
      setTimeout(() => this.tick(), 80);
    } else {
      this.el.textContent = phrase.slice(0, --this.charIdx);
      if (this.charIdx === 0) {
        this.deleting = false;
        this.idx = (this.idx + 1) % this.phrases.length;
      }
      setTimeout(() => this.tick(), this.charIdx === 0 ? 400 : 40);
    }
  }
  update(phrases) {
    this.phrases = phrases;
    this.charIdx = 0;
    this.deleting = false;
    this.el.textContent = '';
  }
}

/* ── APP ──────────────────────────────────────────── */
const App = {
  lang: 'fr',
  theme: 'light',
  tw: null,

  init() {
    this.initTheme();
    this.initLang();
    this.initLoader();
    this.initNavbar();
    this.initMobileMenu();
    this.initReveal();
    this.initSkillBars();
    this.initCounters();
    this.initForm();
    this.initBackToTop();
    this.initFooterYear();
    document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());
    document.getElementById('lang-toggle').addEventListener('click', () => this.toggleLang());
  },

  /* ── THEME ── */
  initTheme() {
    const stored = localStorage.getItem('theme');
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    this.theme = stored || preferred;
    document.documentElement.setAttribute('data-theme', this.theme);
  },
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
  },

  /* ── LANGUAGE ── */
  initLang() {
    const stored = localStorage.getItem('lang');
    this.lang = stored || 'fr';
    document.documentElement.setAttribute('lang', this.lang);
    this.applyTranslations();
  },
  toggleLang() {
    this.lang = this.lang === 'fr' ? 'en' : 'fr';
    document.documentElement.setAttribute('lang', this.lang);
    localStorage.setItem('lang', this.lang);
    document.getElementById('lang-label').textContent = this.lang === 'fr' ? 'EN' : 'FR';
    this.applyTranslations();
    if (this.tw) this.tw.update(typewriterPhrases[this.lang]);
  },
  applyTranslations() {
    const dict = i18n[this.lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
    document.getElementById('lang-label').textContent = this.lang === 'fr' ? 'EN' : 'FR';
  },

  /* ── LOADER ── */
  initLoader() {
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        loader.setAttribute('aria-hidden', 'true');
        this.tw = new Typewriter(
          document.getElementById('typewriter'),
          typewriterPhrases[this.lang]
        );
      }, 1800);
    });
  },

  /* ── NAVBAR ── */
  initNavbar() {
    const navbar = document.getElementById('navbar');
    const links  = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const onScroll = () => {
      if (window.scrollY > 20) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');

      /* Active link */
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      links.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + current);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* Smooth close mobile menu on link click */
    links.forEach(l => l.addEventListener('click', () => this.closeMobileMenu()));
  },

  /* ── MOBILE MENU ── */
  initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const menu   = document.getElementById('mobile-menu');

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.contains('open');
      if (isOpen) {
        this.closeMobileMenu();
      } else {
        menu.classList.add('open');
        menu.style.display = 'block';
        menu.setAttribute('aria-hidden', 'false');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.classList.add('open');
      }
    });

    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => this.closeMobileMenu()));

    document.addEventListener('click', e => {
      if (!e.target.closest('#navbar')) this.closeMobileMenu();
    });
  },
  closeMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const menu   = document.getElementById('mobile-menu');
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.classList.remove('open');
    /* Keep display:block for CSS transitions then hide */
    setTimeout(() => { if (!menu.classList.contains('open')) menu.style.display = ''; }, 300);
  },

  /* ── INTERSECTION OBSERVER / REVEAL ── */
  initReveal() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
  },

  /* ── SKILL BARS ── */
  initSkillBars() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skill-fill').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
          });
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });

    const section = document.getElementById('skills');
    if (section) obs.observe(section);
  },

  /* ── COUNTERS ── */
  initCounters() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll('.stat-num').forEach(el => {
          const target = +el.dataset.count;
          const duration = 1200;
          const step = target / (duration / 16);
          let val = 0;
          const timer = setInterval(() => {
            val = Math.min(val + step, target);
            el.textContent = Math.floor(val);
            if (val >= target) clearInterval(timer);
          }, 16);
        });
        obs.unobserve(e.target);
      });
    }, { threshold: 0.5 });

    const about = document.getElementById('about');
    if (about) obs.observe(about);
  },

  /* ── CONTACT FORM ── */
  initForm() {
    const form    = document.getElementById('contact-form');
    const btn     = document.getElementById('submit-btn');
    const success = document.getElementById('form-success');
    if (!form) return;

    const validate = (el) => {
      const err = el.closest('.form-group')?.querySelector('.form-error');
      let msg = '';
      if (!el.value.trim()) {
        msg = this.lang === 'fr' ? 'Ce champ est requis.' : 'This field is required.';
      } else if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) {
        msg = this.lang === 'fr' ? 'Email invalide.' : 'Invalid email.';
      }
      el.classList.toggle('invalid', !!msg);
      if (err) err.textContent = msg;
      return !msg;
    };

    form.querySelectorAll('input, textarea').forEach(el => {
      el.addEventListener('blur', () => validate(el));
      el.addEventListener('input', () => {
        if (el.classList.contains('invalid')) validate(el);
      });
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const fields = [...form.querySelectorAll('input, textarea')];
      const valid  = fields.map(validate).every(Boolean);
      if (!valid) {
        const firstInvalid = form.querySelector('.invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      /* Simulate send */
      const span = btn.querySelector('span');
      span.textContent = this.lang === 'fr' ? 'Envoi...' : 'Sending...';
      btn.disabled = true;
      btn.style.opacity = '.7';

      setTimeout(() => {
        form.reset();
        success.hidden = false;
        btn.disabled = false;
        btn.style.opacity = '';
        span.textContent = i18n[this.lang]['contact.form.send'];
        setTimeout(() => { success.hidden = true; }, 5000);
      }, 1500);
    });
  },

  /* ── BACK TO TOP ── */
  initBackToTop() {
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      btn.hidden = window.scrollY < 400;
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  },

  /* ── FOOTER YEAR ── */
  initFooterYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
