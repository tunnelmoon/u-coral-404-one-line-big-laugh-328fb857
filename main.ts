// One Line, Big Laugh entry: a single hilarious line, 1-200 characters.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smartwatch congratulated me on burning 400 calories. I was just looking for the remote.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
for (const ch of LINE) {
  if (ch.charCodeAt(0) < 0x20) {
    throw new Error("entry must not contain control characters");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Round-trip read-back check: what was written must be exactly the line.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("round-trip check failed: entry.txt does not match the line");
}
if (back.length < 1 || back.length > MAX_CHARS) {
  throw new Error(`round-trip check failed: length ${back.length} out of range`);
}
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  throw new Error("round-trip check failed: byte length differs");
}
console.log(`wrote ${outPath} (${back.length} characters)`);
