(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- FR / EN ---------- */
  var lang = 'fr';
  try { if (localStorage.getItem('en-lang') === 'en') lang = 'en'; } catch(e){}
  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-en]'));
  nodes.forEach(function(n){ n.dataset.fr = n.innerHTML; });
  var phs = Array.prototype.slice.call(document.querySelectorAll('[data-en-ph]'));
  phs.forEach(function(n){ n.dataset.frPh = n.placeholder; });
  var btn = document.getElementById('lang');
  function applyLang(){
    nodes.forEach(function(n){ n.innerHTML = lang === 'en' ? n.dataset.en : n.dataset.fr; });
    phs.forEach(function(n){ n.placeholder = lang === 'en' ? n.dataset.enPh : n.dataset.frPh; });
    document.documentElement.lang = lang;
    btn.innerHTML = lang === 'en' ? '<b>EN</b> <i>/ FR</i>' : '<b>FR</b> <i>/ EN</i>';
    btn.setAttribute('aria-label', lang === 'en' ? 'Passer en français' : 'Switch to English');
    splitHero();
  }
  btn.addEventListener('click', function(){
    lang = lang === 'fr' ? 'en' : 'fr';
    try { localStorage.setItem('en-lang', lang); } catch(e){}
    applyLang();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });

  /* ---------- Découpe du titre en lettres ---------- */
  function splitHero(){
    document.querySelectorAll('#heroTitle .ln').forEach(function(ln){
      var text = ln.textContent;
      ln.setAttribute('aria-label', text);
      ln.innerHTML = text.split('').map(function(c){
        return '<span class="ch" aria-hidden="true">' + (c === ' ' ? '&nbsp;' : c) + '</span>';
      }).join('');
    });
  }

  /* ---------- Copier l'email ---------- */
  var copyBtn = document.getElementById('copyMail');
  copyBtn.addEventListener('click', function(){
    var t = document.getElementById('mail').textContent;
    var done = function(){ var o = copyBtn.textContent; copyBtn.textContent = lang === 'en' ? 'COPIED' : 'COPIÉ'; setTimeout(function(){ copyBtn.textContent = o; }, 1600); };
    var fallback = function(){ var r = document.createRange(); r.selectNodeContents(document.getElementById('mail')); var s = getSelection(); s.removeAllRanges(); s.addRange(r); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, fallback); else fallback();
  });

  /* ---------- Formulaire (prototype) ---------- */
  document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('formNote').textContent = lang === 'en'
      ? 'Prototype: sending will be connected in the final version. Meanwhile, write to me on WhatsApp.'
      : "Prototype : l'envoi sera branché dans la version finale. En attendant, écrivez-moi sur WhatsApp.";
  });

  applyLang();

  /* ---------- Parallaxe souris sur les objets ---------- */
  if (!reduce && window.matchMedia('(pointer:fine)').matches){
    window.addEventListener('pointermove', function(e){
      var x = (e.clientX / innerWidth - .5) * 2, y = (e.clientY / innerHeight - .5) * 2;
      document.documentElement.style.setProperty('--mx', x.toFixed(3));
      document.documentElement.style.setProperty('--my', y.toFixed(3));
    }, { passive: true });
  }

  if (reduce || !window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Entrée du hero ---------- */
  var intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
  intro.from('#heroTitle .ch', { yPercent: 110, duration: 1.2, stagger: 0.035 })
       .from('.hero-photo', { y: 120, scale: .94, duration: 1.4 }, 0.3)
       .from('.hero-copy, .hero-cta', { y: 30, duration: 1 }, 0.7)
       .from('.hero .float', { scale: 0, duration: 1.2, stagger: 0.08, ease: 'back.out(1.7)' }, 0.6)
       .from('.top .wrap > *', { y: -20, duration: .9, stagger: .06 }, 0.2);

  /* Le hero s'éloigne quand on descend */
  var desktop = window.matchMedia('(min-width: 861px)').matches;
  if (desktop) gsap.to('.hero .wrap', { yPercent: 8, scale: .97, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 } });

  /* ---------- Titres qui se remplissent ---------- */
  gsap.utils.toArray('.fill-title').forEach(function(t){
    gsap.fromTo(t, { backgroundPosition: '100% 0' }, { backgroundPosition: '0% 0', ease: 'none',
      scrollTrigger: { trigger: t, start: 'top 88%', end: 'top 38%', scrub: 0.8 } });
  });

  /* ---------- Parallaxe des objets au scroll ---------- */
  gsap.utils.toArray('.float').forEach(function(el){
    var s = parseFloat(el.dataset.speed || 1);
    gsap.to(el, { y: -160 * s, rotate: 25 * s, ease: 'none',
      scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
  });

  /* ---------- Apparitions ---------- */
  gsap.from('.about-text, .chips li, .about .pill', { y: 40, duration: 1, ease: 'expo.out', stagger: .04,
    scrollTrigger: { trigger: '.about-text', start: 'top bottom', once: true } });
  gsap.from('.svc', { y: 50, duration: 1, ease: 'expo.out', stagger: .08,
    scrollTrigger: { trigger: '.svc-list', start: 'top bottom', once: true } });

  /* ---------- Cartes de projets empilées ---------- */
  var cards = desktop ? gsap.utils.toArray('.card') : [];
  cards.forEach(function(card, i){
    if (i === cards.length - 1) return;
    gsap.to(card.querySelector('.card-in'), {
      scale: 1 - (cards.length - i) * 0.025, filter: 'brightness(.55)', ease: 'none',
      scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top 30%', scrub: 0.8 }
    });
  });

  window.addEventListener('load', function(){ ScrollTrigger.refresh(); });
})();
