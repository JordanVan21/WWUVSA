import { GALLERY_PHOTOS } from "@/data/gallery";
import fs from "node:fs";
const missing: string[] = [];
const zero: string[] = [];
const ids = new Set<string>(); const dupIds: string[] = [];
const srcs = new Set<string>(); const dupSrc: string[] = [];
for (const p of GALLERY_PHOTOS) {
  const fp = "public" + decodeURIComponent(p.src);
  if (!fs.existsSync(fp)) missing.push(p.src);
  else if (fs.statSync(fp).size === 0) zero.push(p.src);
  if (ids.has(p.id)) dupIds.push(p.id); ids.add(p.id);
  if (srcs.has(p.src)) dupSrc.push(p.src); srcs.add(p.src);
}
console.log("total", GALLERY_PHOTOS.length, "missing", missing.length, "zero", zero.length, "dupIds", dupIds.length, "dupSrc", dupSrc.length);
console.log(missing.slice(0,50).join("\n"));
// registered vs disk
const disk = new Set<string>();
for (const cat of fs.readdirSync("public/images/gallery")) {
  const cd = `public/images/gallery/${cat}`;
  if (!fs.statSync(cd).isDirectory()) continue;
  for (const y of fs.readdirSync(cd)) {
    const yd = `${cd}/${y}`;
    if (!fs.statSync(yd).isDirectory()) continue;
    for (const f of fs.readdirSync(yd)) if (!f.startsWith(".")) disk.add(`${cat}/${y}/${f}`);
  }
}
const reg = new Set(GALLERY_PHOTOS.map(p => decodeURIComponent(p.src).replace("/images/gallery/","")));
const unreg = [...disk].filter(d => !reg.has(d));
console.log("disk", disk.size, "unregistered", unreg.length);
console.log(unreg.slice(0,60).join("\n"));
