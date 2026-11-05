(function () {
  var body = document.body;
  var lang = body.getAttribute('data-lang');
  var toggle = document.getElementById('nav-toggle');
  if (toggle) toggle.addEventListener('click', function () { body.classList.toggle('nav-open'); });

  // Keep the current page in view in the side menu.
  var current = document.querySelector('.nav a.on');
  var nav = document.querySelector('.nav');
  if (current && nav) nav.scrollTop = current.offsetTop - nav.offsetTop - nav.clientHeight / 2;

  // Mark the section being read.
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        tocLinks.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + entry.target.id); });
      });
    }, { rootMargin: '-15% 0px -75% 0px' });
    document.querySelectorAll('article h2, article h3').forEach(function (h) { observer.observe(h); });
  }

  var box = document.getElementById('search-box');
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var data = null;
  var picked = 0;

  function open() {
    box.hidden = false;
    input.value = '';
    results.innerHTML = '';
    input.focus();
    if (!data) fetch('/' + lang + '/search.json').then(function (r) { return r.json(); }).then(function (d) { data = d; });
  }
  function close() { box.hidden = true; }
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function search(q) {
    q = q.trim().toLowerCase();
    if (!q || !data) { results.innerHTML = ''; return; }
    var hits = [];
    data.forEach(function (page) {
      var title = page.t.toLowerCase();
      if (title.indexOf(q) >= 0) hits.push({ score: 3, t: page.t, u: page.u, s: page.b.slice(0, 90) });
      page.h.forEach(function (h) {
        if (h[0].toLowerCase().indexOf(q) >= 0) hits.push({ score: 2, t: page.t + ' / ' + h[0], u: page.u + '#' + h[1], s: '' });
      });
      var at = page.b.toLowerCase().indexOf(q);
      if (at >= 0 && title.indexOf(q) < 0) hits.push({ score: 1, t: page.t, u: page.u, s: page.b.slice(Math.max(0, at - 30), at + 70) });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    picked = 0;
    results.innerHTML = hits.length
      ? hits.slice(0, 12).map(function (h, i) { return '<a href="' + h.u + '"' + (i === 0 ? ' class="on"' : '') + '><b>' + esc(h.t) + '</b>' + (h.s ? '<span>' + esc(h.s) + '</span>' : '') + '</a>'; }).join('')
      : '<p>' + esc(body.getAttribute('data-no-results')) + '</p>';
  }

  document.querySelectorAll('[data-search-open]').forEach(function (button) { button.addEventListener('click', open); });
  input.addEventListener('input', function () { search(input.value); });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open(); return; }
    if (box.hidden) return;
    var links = results.querySelectorAll('a');
    if (e.key === 'Escape') close();
    else if (e.key === 'Enter' && links[picked]) location.href = links[picked].getAttribute('href');
    else if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && links.length) {
      e.preventDefault();
      links[picked].classList.remove('on');
      picked = (picked + (e.key === 'ArrowDown' ? 1 : links.length - 1)) % links.length;
      links[picked].classList.add('on');
      links[picked].scrollIntoView({ block: 'nearest' });
    }
  });
})();
