// One-Line Laugh-Off — entry program.
// Writes one original joke to /output/entry.txt: a driver asks the GPS
// life's biggest question, and the GPS answers the way it answers everything.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked my GPS for the meaning of life. It said 'recalculating' — and honestly, same.";

// Gate self-check: 1-200 characters, not whitespace-only. Trim stray
// whitespace first so a stray space can never push the line over the gate.
const LINE = JOKE.trim();
const len = [...LINE].length;
if (len < 1 || len > 200 || LINE.length === 0) {
  throw new Error(`joke fails gate: ${len} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
