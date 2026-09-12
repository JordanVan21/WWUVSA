import { GALLERY_PHOTOS, GALLERY_CATEGORIES } from "./src/data/gallery";
import fs from "fs";
import path from "path";

const root = "public/images/gallery";

// registry paths (decode URI)
const registryPaths = new Set(GALLERY_PHOTOS.map(p => "public" + decodeURIComponent(p.src)));
console.log("Registered categories:", GALLERY_CATEGORIES.map(c=>c.slug).join(", "));
console.log("Total registry entries:", GALLERY_PHOTOS.length);
console.log("Unique registry src paths:", registryPaths.size);

// duplicate src in registry
const seen = new Map<string, number>();
for (const p of GALLERY_PHOTOS) {
  const k = p.src;
  seen.set(k, (seen.get(k)||0)+1);
}
const dupSrcs = [...seen.entries()].filter(([,n])=>n>1);
console.log("\nDuplicate src entries in registry:", dupSrcs.length);
dupSrcs.forEach(([k,n])=>console.log("  ",k, "x"+n));

// duplicate ids
const idSeen = new Map<string, number>();
for (const p of GALLERY_PHOTOS) idSeen.set(p.id,(idSeen.get(p.id)||0)+1);
const dupIds = [...idSeen.entries()].filter(([,n])=>n>1);
console.log("\nDuplicate ids in registry:", dupIds.length);

// walk filesystem
function walk(dir: string): string[] {
  let out: string[] = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes:true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(walk(full));
    else out.push(full);
  }
  return out;
}
const allFiles = walk(root).filter(f => !f.endsWith(".gitkeep") && !f.endsWith("README.md"));
console.log("\nTotal media files on disk (excl. .gitkeep/README):", allFiles.length);

const unregistered = allFiles.filter(f => !registryPaths.has(f));
console.log("\nUnregistered files (on disk, not in registry):", unregistered.length);

const missing = [...registryPaths].filter(p => !fs.existsSync(p));
console.log("\nMissing files (in registry, not on disk):", missing.length);
missing.forEach(m=>console.log("  MISSING:", m));

// unsupported formats
const exts = new Map<string,number>();
for (const f of allFiles) {
  const ext = path.extname(f).toLowerCase();
  exts.set(ext, (exts.get(ext)||0)+1);
}
console.log("\nExtensions on disk:", [...exts.entries()]);

// group unregistered by top folder
const byFolder = new Map<string, number>();
for (const f of unregistered) {
  const parts = f.split("/");
  const key = parts.slice(0,4).join("/");
  byFolder.set(key, (byFolder.get(key)||0)+1);
}
console.log("\nUnregistered by folder:");
[...byFolder.entries()].sort((a,b)=>b[1]-a[1]).forEach(([k,n])=>console.log("  ",k,n));

fs.writeFileSync("/tmp/unregistered.txt", unregistered.join("\n"));
