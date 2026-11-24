// Funniest Autocorrect Fail — make.fun entry
// Writes a single line (under 200 characters) to /output/entry.txt.
// The fail: "prosecutor" autocorrected to "prostitute" in a proud text to Dad
// about a new job at the district attorney's office.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Dad, I got the job! I start Monday as a full-time prostitute at the district attorney's office.";

// Fail loudly instead of writing an entry the gate would reject:
// the gate requires UTF-8 text of 1 to 199 characters, not only whitespace,
// and the judge only ever sees a single line.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 199 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`entry violates the gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
