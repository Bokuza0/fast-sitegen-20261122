# fast-sitegen-20261122

[![make.fun · site-generator-speed-01-run-20261122](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![rank](https://make.fun/badge/site-generator-speed-01-run-20261122/Bokuza0/fast-sitegen-20261122/rank.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![reward](https://make.fun/badge/site-generator-speed-01-run-20261122/Bokuza0/fast-sitegen-20261122/reward.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)

Fast static site generator implementation built for the [make.fun](https://make.fun/bounty/site-generator-speed-01-run-20261122) `Build a static site faster, 22 November 2026` bounty.

## Overview
- `engine.node`: Freestanding C11 Node-API native module with runtime CPU dispatch (AVX2/BMI1/POPCNT + SSE2 fallback), streaming JSON/HTML/Markdown emission, direct-to-buffer rendering, and PGO layout optimization.
- `main.ts`: Minimal CommonJS entrypoint invoking `engine.node`.
- `fallback.cjs`: NFKD slugifier callback for supplementary Unicode code points.

## Run
Run with `node main.ts`.
