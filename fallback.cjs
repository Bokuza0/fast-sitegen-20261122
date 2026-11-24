'use strict';
const engine = require('./engine.node');
const inDir = process.env.MAKEFUN_INPUT_DIR || '/input';
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

function normalizeSlug(input) {
  const clean = input.normalize('NFKD').replace(/\p{M}/gu, '');
  let out = '';
  let dash = false;
  for (let idx = 0; idx < clean.length; idx++) {
    const code = clean.charCodeAt(idx);
    if (code >= 65 && code <= 90) {
      if (dash) { out += '-'; dash = false; }
      out += String.fromCharCode(code + 32);
    } else if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
      if (dash) { out += '-'; dash = false; }
      out += clean[idx];
    } else if (out.length > 0) {
      dash = true;
    }
  }
  const clipped = out.length > 64 ? out.slice(0, 64) : out;
  return clipped.replace(/-+$/, '') || 'untitled';
}

const code = engine.exec(`${inDir}/cases.json`, `${outDir}/answers.json`, normalizeSlug, 1);
process.exit(code === 0 ? 0 : 1);
