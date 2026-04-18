import { cpSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

// Files to vendor from boxicons into src/assets/fonts/.
// Add or remove entries here if you decide to ship .ttf / .eot / .svg.
const files = ["boxicons.woff2", "boxicons.woff"];

const src = join(root, "node_modules", "boxicons", "fonts");
const dest = join(root, "src", "assets", "fonts");

mkdirSync(dest, { recursive: true });

for (const f of files) {
  cpSync(join(src, f), join(dest, f), { force: true });
  console.log(`[copy-fonts] ${f} → src/assets/fonts/${f}`);
}