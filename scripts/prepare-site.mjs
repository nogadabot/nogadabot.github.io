import assert from 'node:assert/strict';
import {copyFile,readFile,writeFile,readdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=fileURLToPath(new URL('../',import.meta.url));
const book=path.join(root,'_book');
async function files(directory) {
  const result=[];
  for(const item of await readdir(directory,{withFileTypes:true})) {
    const file=path.join(directory,item.name);
    if(item.isDirectory()) result.push(...await files(file));
    else result.push(file);
  }
  return result;
}
for(const file of await files(book)) {
  const name=path.basename(file);
  if(name==='favicon.ico') await copyFile(path.join(root,'brand/favicon.ico'),file);
  if(name==='apple-touch-icon-precomposed-152.png') await copyFile(path.join(root,'brand/apple-touch.png'),file);
  if(!file.endsWith('.html')) continue;
  const lang=path.relative(book,file).split(path.sep)[0];
  const labels={ko:['이전 페이지','다음 페이지'],en:['Previous page','Next page'],zh:['上一页','下一页']}[lang];
  if(!labels) continue;
  const html=await readFile(file,'utf8');
  await writeFile(file,html.replaceAll('aria-label="Previous page:','aria-label="'+labels[0]+':').replaceAll('aria-label="Next page:','aria-label="'+labels[1]+':'));
}
await copyFile(path.join(root,'brand/index.html'),path.join(book,'index.html'));
await copyFile(path.join(root,'brand/logo.png'),path.join(book,'logo.png'));
const fontFile=path.join(book,'gitbook/@honkit/honkit-plugin-fontsettings/fontsettings.js');
let font=await readFile(fontFile,'utf8');
for(const [property,en,ko,zh] of [
  ['label','Font Settings','글꼴 설정','字体设置'],
  ['text','White','밝게','浅色'],
  ['text','Sepia','세피아','护眼色'],
  ['text','Night','어둡게','深色'],
  ['text','Serif','명조체','衬线字体'],
  ['text','Sans','고딕체','无衬线字体'],
]) {
  const original=property+': '+JSON.stringify(en);
  assert.ok(font.includes(original),'pinned Honkit font label changed: '+en);
  const translated='(document.documentElement.lang.startsWith("ko")?'+JSON.stringify(ko)+':document.documentElement.lang.startsWith("zh")?'+JSON.stringify(zh)+':'+JSON.stringify(en)+')';
  font=font.replace(original,property+': '+translated);
}
await writeFile(fontFile,font);
console.log('Brand assets and KO/EN/Simplified-ZH navigation/font labels prepared.');
