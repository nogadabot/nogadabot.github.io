// Builds the guide site into ../_site from ko/, en/ and zh/. Run: npm install && node build.cjs
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, '_site');
const LANGS = ['en', 'ko', 'zh'];
const LANG_NAMES = { en: 'EN', ko: '한국어', zh: '中文' };
const BUY_URL = 'https://whop.com/nogada/products/nadaga-bot/';

const TEXT = {
  en: {
    title: 'Nogada Guide', sub: 'How to set up and use the app, from the first launch to your first mint.',
    search: 'Search the guide', noResults: 'Nothing found', prev: 'Previous', next: 'Next', onPage: 'On this page', menu: 'Menu', buy: 'Get a license',
    stepsTitle: 'New here? Follow these four', allTitle: 'Everything in the guide',
  },
  ko: {
    title: 'Nogada 가이드', sub: '첫 실행부터 첫 민팅까지, 앱을 설정하고 쓰는 법을 정리했습니다.',
    search: '가이드 검색', noResults: '찾은 내용이 없습니다', prev: '이전', next: '다음', onPage: '이 페이지', menu: '메뉴', buy: '라이선스 받기',
    stepsTitle: '처음이면 이 네 가지부터', allTitle: '가이드 전체',
  },
  zh: {
    title: 'Nogada 指南', sub: '从首次启动到第一次铸造，这里说明如何设置和使用应用。',
    search: '搜索指南', noResults: '没有找到内容', prev: '上一页', next: '下一页', onPage: '本页内容', menu: '菜单', buy: '获取许可证',
    stepsTitle: '第一次使用？先看这四篇', allTitle: '全部内容',
  },
};
const STEPS = ['getting-started/install.md', 'getting-started/license.md', 'getting-started/first-setup.md', 'tasks/smart-mint.md'];

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = html => html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const routeOf = (lang, rel) => {
  const clean = rel.replace(/\\/g, '/').replace(/^\.\//, '');
  if (clean === 'README.md') return `/${lang}/overview/`;
  return `/${lang}/${clean.replace(/\.md$/, '')}/`;
};

function readMenu(lang) {
  const lines = fs.readFileSync(path.join(ROOT, lang, 'SUMMARY.md'), 'utf-8').split(/\r?\n/);
  const groups = [];
  let cur = { title: '', items: [] };
  groups.push(cur);
  for (const line of lines) {
    const head = line.match(/^##\s+(.+)/);
    if (head) { cur = { title: head[1].trim(), items: [] }; groups.push(cur); continue; }
    const item = line.match(/^\*\s+\[(.+?)\]\((.+?)\)/);
    if (item) cur.items.push({ title: item[1], file: item[2] });
  }
  return groups.filter(g => g.items.length);
}

function slugger() {
  const seen = new Map();
  return text => {
    const base = text.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '') || 'section';
    const n = seen.get(base) || 0;
    seen.set(base, n + 1);
    return n ? `${base}-${n}` : base;
  };
}

function shell({ lang, title, description, body, route, menu, toc, home }) {
  const t = TEXT[lang];
  const switcher = LANGS.map(l => `<a href="${route.replace(`/${lang}/`, `/${l}/`)}"${l === lang ? ' class="on"' : ''} lang="${l}">${LANG_NAMES[l]}</a>`).join('');
  const nav = menu.map(g => `<div class="nav-group">${g.title ? `<div class="nav-title">${esc(g.title)}</div>` : ''}${g.items.map(i => {
    const r = routeOf(lang, i.file);
    return `<a href="${r}"${r === route ? ' class="on" aria-current="page"' : ''}>${esc(i.title)}</a>`;
  }).join('')}</div>`).join('');
  const tocHtml = toc && toc.length > 1 ? `<aside class="toc"><div class="toc-title">${t.onPage}</div>${toc.map(h => `<a href="#${h.id}" class="d${h.depth}">${esc(h.text)}</a>`).join('')}</aside>` : '';
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description || t.sub)}">
<link rel="icon" href="/assets/icon.png">
<link rel="stylesheet" href="/assets/site.css">
</head>
<body class="${home ? 'is-home' : 'is-page'}" data-lang="${lang}" data-no-results="${esc(t.noResults)}">
<div class="phone-bar">
  <button id="nav-toggle" aria-label="${t.menu}"><span></span><span></span><span></span></button>
  <a href="/${lang}/"><img src="/assets/logo.png" alt="Nogada" class="logo"></a>
</div>
<aside class="rail" id="rail">
  <a class="brand" href="/${lang}/"><img src="/assets/logo.png" alt="Nogada" class="logo"></a>
  <button class="search-open" data-search-open><span>${t.search}</span><kbd>Ctrl K</kbd></button>
  <nav class="nav">${nav}</nav>
  <div class="rail-foot">
    <a class="buy" href="${BUY_URL}" target="_blank" rel="noopener">${t.buy}</a>
    <div class="langs">${switcher}</div>
  </div>
</aside>
<div class="stage">
${body}
${tocHtml}
</div>
<div class="search-box" id="search-box" hidden>
  <div class="search-panel">
    <input id="search-input" type="search" placeholder="${t.search}" autocomplete="off">
    <div id="search-results"></div>
  </div>
</div>
<script src="/assets/site.js"></script>
</body>
</html>
`;
}

async function main() {
  const { Marked } = await import('marked');
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });
  for (const f of fs.readdirSync(path.join(__dirname, 'assets'))) fs.copyFileSync(path.join(__dirname, 'assets', f), path.join(OUT, 'assets', f));

  for (const lang of LANGS) {
    const t = TEXT[lang];
    const menu = readMenu(lang);
    const flat = menu.flatMap(g => g.items.map(i => ({ ...i, group: g.title })));
    const index = [];
    const titles = new Map(flat.map(i => [i.file, i.title]));
    fs.cpSync(path.join(ROOT, lang, 'images'), path.join(OUT, lang, 'images'), { recursive: true });

    flat.forEach((item, at) => {
      const src = path.join(ROOT, lang, item.file);
      const md = fs.readFileSync(src, 'utf-8').replace(/^---[\s\S]*?---\s*/, '');
      const dir = path.posix.dirname(item.file);
      const slug = slugger();
      const toc = [];
      const instance = new Marked({
        gfm: true,
        renderer: {
          heading(token) {
            const html = this.parser.parseInline(token.tokens);
            const text = plain(html);
            const id = slug(text);
            if (token.depth === 2 || token.depth === 3) toc.push({ id, text, depth: token.depth });
            return `<h${token.depth} id="${id}">${html}</h${token.depth}>\n`;
          },
          link(token) {
            const inner = this.parser.parseInline(token.tokens);
            let href = token.href;
            if (/^https?:/.test(href)) return `<a href="${esc(href)}" target="_blank" rel="noopener">${inner}</a>`;
            const m = href.match(/^([^#]*\.md)(#.*)?$/);
            if (m) href = routeOf(lang, path.posix.normalize(path.posix.join(dir, m[1]))) + (m[2] || '');
            return `<a href="${esc(href)}">${inner}</a>`;
          },
          image(token) {
            const href = /^https?:/.test(token.href) ? token.href : `/${lang}/${path.posix.normalize(path.posix.join(dir, token.href))}`;
            return `<img src="${esc(href)}" alt="${esc(token.text || '')}" loading="lazy">`;
          },
        },
      });
      let html = instance.parse(md);
      html = html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>');
      const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || item.title;
      const route = routeOf(lang, item.file);
      const prev = flat[at - 1], next = flat[at + 1];
      const pager = `<nav class="pager">${prev ? `<a href="${routeOf(lang, prev.file)}"><small>${t.prev}</small>${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="next" href="${routeOf(lang, next.file)}"><small>${t.next}</small>${esc(next.title)}</a>` : '<span></span>'}</nav>`;
      const crumb = item.group ? `<div class="crumb">${esc(item.group)}</div>` : '';
      const body = `<main class="page">${crumb}<article>${html}</article>${pager}</main>`;
      const lead = (html.replace(/<h1[\s\S]*?<\/h1>/, '').match(/<p>([\s\S]*?)<\/p>/) || [])[1] || '';
      const out = path.join(OUT, route);
      fs.mkdirSync(out, { recursive: true });
      fs.writeFileSync(path.join(out, 'index.html'), shell({ lang, title: `${plain(h1)} · Nogada`, description: plain(lead).slice(0, 160), body, route, menu, toc }));
      index.push({ t: plain(h1), u: route, h: toc.map(h => [h.text, h.id]), b: plain(html).slice(0, 4000) });
    });

    const steps = STEPS.map((file, i) => `<a class="step" href="${routeOf(lang, file)}"><i>${i + 1}</i>${esc(titles.get(file) || file)}</a>`).join('');
    const all = menu.filter(g => g.title).map(g => `<div class="index-group"><h3>${esc(g.title)}</h3>${g.items.map(i => `<a href="${routeOf(lang, i.file)}">${esc(i.title)}</a>`).join('')}</div>`).join('');
    const body = `<main class="home">
  <h1>${esc(t.title)}</h1>
  <p class="home-sub">${esc(t.sub)}</p>
  <button class="home-search" data-search-open><span>${t.search}</span><kbd>Ctrl K</kbd></button>
  <h2>${t.stepsTitle}</h2>
  <div class="steps">${steps}</div>
  <img class="home-shot" src="/${lang}/images/tasks.png" alt="">
  <h2>${t.allTitle}</h2>
  <div class="index">${all}</div>
</main>`;
    fs.mkdirSync(path.join(OUT, lang), { recursive: true });
    fs.writeFileSync(path.join(OUT, lang, 'index.html'), shell({ lang, title: t.title, body, route: `/${lang}/`, menu, home: true }));
    fs.writeFileSync(path.join(OUT, lang, 'search.json'), JSON.stringify(index));
    console.log(lang, flat.length, 'pages');
  }

  // The app opens the site root: send people to their language.
  fs.writeFileSync(path.join(OUT, 'index.html'), `<!doctype html><html><head><meta charset="utf-8"><title>Nogada</title><link rel="icon" href="/assets/icon.png"><script>
var n=(navigator.language||'en').toLowerCase();location.replace(n.indexOf('ko')===0?'/ko/':n.indexOf('zh')===0?'/zh/':'/en/');
</script><noscript><meta http-equiv="refresh" content="0;url=/en/"></noscript></head><body style="background:#0f0f12"></body></html>`);
  fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
}
main().catch(e => { console.error(e); process.exit(1); });
