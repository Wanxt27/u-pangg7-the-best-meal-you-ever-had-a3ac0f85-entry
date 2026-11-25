// The Best Meal You Ever Had — make.fun entry (u-pangg7).
// Writes one sentence about the best meal ever eaten to /output/entry.txt.
// Node 22, stdlib only. The sentence is a single fixed memory: rendang at
// grandmother's house in Padang, eaten standing in the kitchen doorway.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Rendang nenek di Padang lumer di lidah sebelum sempat kukunyah, kuah santannya masih hangat di atas nasi yang kumakan berdiri di ambang pintu dapur tengah malam, tanpa sendok.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;
const MAX_CHARS = 200;

// The gate seals entry.txt at 1–200 characters; refuse to write an
// over-long sentence rather than submit an invalid entry.
if ([...SENTENCE].length < 1 || [...SENTENCE].length > MAX_CHARS) {
  throw new Error(
    `sentence is ${[...SENTENCE].length} characters, must be 1–${MAX_CHARS}`,
  );
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, SENTENCE + "\n", "utf8");
console.log(`wrote ${[...SENTENCE].length} characters to ${OUT_FILE}`);
