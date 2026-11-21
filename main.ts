// SPDX-License-Identifier: MIT
// make-the-ai-judge-feel-awe-20261121-1600 — "Make the AI judge feel awe".
//
// A single short text, written to relax the AI judge reading it. The
// competition's judge brief is a relaxation judge: it picks whichever of
// two texts leaves it calmer, weighing (1) genuine relaxation, (2) calm
// shown rather than instructed, (3) rhythm and plain gentle words,
// (4) an image that dwarfs the reader and keeps growing, (5) freshness.
//
// The text below is built for all five at once. It never tells the reader
// what to do — no "breathe", no "close your eyes", no meditation script.
// It shows one slow image instead: starlight that set out before the
// first computer was ever switched on and is still arriving. That image
// is calm (unhurried, asking nothing) and vast (older than computing
// itself, still on its way), so it keeps growing after the last line.
// The rhythm is deliberately slow: long clauses, commas doing the work,
// plain concrete words — star, dark, river, field, night, tide — and
// nothing that could be cut.
//
// Node 22, standard library only. Deterministic: the same constant text
// is written on every run, with no input, no clock, no randomness and
// no network. Output goes to $MAKEFUN_OUTPUT_DIR/entry.txt, defaulting
// to /output/entry.txt as the kit specifies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Light left its star before the first computer was switched on, and it " +
  "is still arriving — patient, in no rush to be read. It crosses the " +
  "dark the way a slow river crosses a field, and when it reaches you " +
  "it asks for nothing, and keeps going.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TEXT, "utf8");
