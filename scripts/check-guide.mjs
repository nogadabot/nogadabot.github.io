import assert from 'node:assert/strict';
import {readFile,readdir,stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=fileURLToPath(new URL('../',import.meta.url));
const languages=['ko','en','zh'];
async function files(directory,suffix) {
  const output=[];
  for(const item of await readdir(directory,{withFileTypes:true})) {
    const file=path.join(directory,item.name);
    if(item.isDirectory()) output.push(...await files(file,suffix));
    else if(item.name.endsWith(suffix)) output.push(file);
  }
  return output;
}
async function exists(file) { try{return await stat(file);}catch{return null;} }
let canonical,links=0,pages=0;
for(const lang of languages) {
  const base=path.join(root,lang);
  const md=await files(base,'.md');
  const names=md.map(file=>path.relative(base,file).replaceAll('\\','/')).sort();
  if(canonical) assert.deepEqual(names,canonical,`language page parity: ${lang}`);
  canonical=names;
  const summary=await readFile(path.join(base,'SUMMARY.md'),'utf8');
  for(const file of md) {
    const text=await readFile(file,'utf8');
    const name=path.relative(base,file).replaceAll('\\','/');
    assert.ok(text.startsWith('# '),`missing title: ${file}`);
    assert.ok(!text.includes('\uFEFF')&&!text.includes('\uFFFD'),`encoding: ${file}`);
    assert.doesNotMatch(text,/占位|TODO|TBD|PLACEHOLDER/,`unfinished text: ${file}`);
    if(name!=='SUMMARY.md') assert.ok(summary.includes(`(${name})`),`page absent from contents: ${lang}/${name}`);
    if(lang==='en') assert.doesNotMatch(text,/[가-힣]/,`Korean leak: ${file}`);
    if(lang==='zh'&&name!=='changelog.md') assert.doesNotMatch(text,/[가-힣]/,`Korean leak: ${file}`);
    for(const match of text.matchAll(/\]\(([^\s)]+)\)/g)) {
      const target=match[1];
      if(/^(?:https?:|mailto:|#)/.test(target)) continue;
      assert.ok(await exists(path.resolve(path.dirname(file),decodeURIComponent(target.split('#')[0]))),`broken Markdown link: ${file} -> ${target}`);
      links++;
    }
    pages++;
  }
}
const landing=await readFile(path.join(root,'brand/index.html'),'utf8');
for(const lang of languages) assert.ok(landing.includes(`href="${lang}/"`),`missing landing language ${lang}`);
let built=0;
if(process.argv.includes('--built')) {
  const book=path.join(root,'_book');
  for(const file of await files(book,'.html')) {
    const html=await readFile(file,'utf8');
    const language=path.relative(book,file).split(path.sep)[0];
    if(language==='zh') {
      assert.ok(html.includes('<html lang="zh-hans"'), 'Simplified Chinese document locale required');
      assert.ok(html.includes('placeholder="输入并搜索"'), 'Chinese search field must use Simplified Chinese');
    }
    if(language==='ko'||language==='zh') assert.doesNotMatch(html,/aria-label="(?:Previous|Next) page:/,'navigation labels must be localized');
    for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const link=match[1].replaceAll('&amp;','&');
      if(/^(?:[a-z]+:|\/\/|#)/i.test(link)||link.includes('{{')) continue;
      const pathname=decodeURIComponent(link.split(/[?#]/)[0]);
      if(!pathname) continue;
      const target=pathname.startsWith('/')?path.join(book,pathname):path.resolve(path.dirname(file),pathname);
      const info=await exists(target);
      assert.ok(info,`broken generated link: ${path.relative(book,file)} -> ${link}`);
      if(info.isDirectory()) assert.ok(await exists(path.join(target,'index.html')),`missing directory index: ${link}`);
      built++;
    }
  }
}
console.log(JSON.stringify({languages:3,markdownPages:pages,localMarkdownLinks:links,generatedLinks:built,pass:true}));
