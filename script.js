(function(){
  var burger = document.getElementById('burger');
  if (burger){
    var setMenu = function(open){ document.documentElement.classList.toggle('menu-open', open); burger.setAttribute('aria-expanded', open ? 'true' : 'false'); burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu'); };
    burger.addEventListener('click', function(){ setMenu(!document.documentElement.classList.contains('menu-open')); });
    document.querySelectorAll('#menu a').forEach(function(a){ a.addEventListener('click', function(){ setMenu(false); }); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') setMenu(false); });
  }

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
    btn.innerHTML = lang === 'en' ? 'EN <i>/ FR</i>' : 'FR <i>/ EN</i>';
    btn.setAttribute('aria-label', lang === 'en' ? 'Passer en français' : 'Switch to English');
  }
  btn.addEventListener('click', function(){
    lang = lang === 'fr' ? 'en' : 'fr';
    try { localStorage.setItem('en-lang', lang); } catch(e){}
    applyLang();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
  applyLang();

  /* ---------- Copier l'email ---------- */
  var copyBtn = document.getElementById('copyMail');
  copyBtn.addEventListener('click', function(){
    var el = document.getElementById('mail');
    var done = function(){ var o = copyBtn.textContent; copyBtn.textContent = lang === 'en' ? 'COPIED' : 'COPIÉ'; setTimeout(function(){ copyBtn.textContent = o; }, 1600); };
    var fallback = function(){ var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(el.textContent).then(done, fallback); else fallback();
  });

  /* ---------- Formulaire : ouvre WhatsApp avec le message ---------- */
  document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    var n = document.getElementById('f-name').value.trim();
    var c = document.getElementById('f-contact').value.trim();
    var m = document.getElementById('f-msg').value.trim();
    var note = document.getElementById('note');
    if (!n || !m){ note.textContent = lang === 'en' ? 'Add your name and a few words about your project.' : 'Indiquez votre nom et quelques mots sur votre projet.'; return; }
    var text = (lang === 'en' ? 'Hello Ephraïm, I am ' : 'Bonjour Ephraïm, je suis ') + n + (c ? ' (' + c + ')' : '') + '.\n\n' + m;
    window.open('https://wa.me/22892978659?text=' + encodeURIComponent(text), '_blank', 'noopener');
    note.textContent = lang === 'en' ? 'WhatsApp opens with your message, just press send.' : 'WhatsApp s\'ouvre avec votre message : il ne reste qu\'à appuyer sur envoyer.';
  });

  /* ---------- Aperçu des projets qui suit la souris ---------- */
  var peek = document.getElementById('peek');
  var rows = Array.prototype.slice.call(document.querySelectorAll('.project'));
  rows.forEach(function(row, i){
    var t = row.querySelector('.thumb');
    if (!t) return;
    var c = t.cloneNode(true);
    c.classList.remove('thumb');
    c.dataset.i = i;
    peek.appendChild(c);
  });
  var shots = Array.prototype.slice.call(peek.children);
  if (window.matchMedia('(pointer:fine)').matches && !reduce){
    var x = 0, y = 0, px = 0, py = 0, raf = null;
    var loop = function(){ px += (x - px) * .18; py += (y - py) * .18; peek.style.left = px + 'px'; peek.style.top = py + 'px'; raf = requestAnimationFrame(loop); };
    rows.forEach(function(row, i){
      row.addEventListener('mouseenter', function(e){
        shots.forEach(function(s){ s.classList.toggle('on', +s.dataset.i === i); });
        if (!raf){ px = x = e.clientX; py = y = e.clientY; loop(); }
        peek.classList.add('on');
      });
      row.addEventListener('mouseleave', function(){ peek.classList.remove('on'); });
    });
    window.addEventListener('mousemove', function(e){ x = e.clientX + 170; y = e.clientY; }, { passive: true });
  }

  if (reduce || !window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Entrée de la couverture ---------- */
  var tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.from('.name .row > span', { yPercent: 105, duration: 1.3, stagger: .12 })
    .from('.portrait .block', { scaleY: 0, duration: 1.1, ease: 'power4.out' }, .25)
    .from('.portrait img', { yPercent: 12, duration: 1.4 }, .4)
    .from('.intro > *', { y: 24, duration: 1, stagger: .08 }, .6)
    .from('.nav .wrap > *', { y: -14, duration: .8, stagger: .05, clearProps: 'transform' }, .2);

  /* Le portrait monte un peu plus lentement que la page */
  gsap.to('.portrait img', { yPercent: -6, ease: 'none',
    scrollTrigger: { trigger: '.cover', start: 'top top', end: 'bottom top', scrub: .6 } });

  /* ---------- Apparitions douces ---------- */
  gsap.utils.toArray('.reveal').forEach(function(el){
    gsap.from(el, { y: 36, duration: 1.1, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top bottom', once: true } });
  });
  gsap.utils.toArray('.project').forEach(function(el){
    gsap.from(el, { y: 40, duration: 1.1, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top bottom', once: true } });
  });

  window.addEventListener('load', function(){ ScrollTrigger.refresh(); });
})();
