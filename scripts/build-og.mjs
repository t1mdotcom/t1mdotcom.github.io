import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="grid" width="28" height="24" patternUnits="userSpaceOnUse">
      <path d="M 28 0 L 0 0 0 24" fill="none" stroke="rgba(121,255,180,0.06)" stroke-width="1"/>
    </pattern>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#050706"/>
      <stop offset="100%" stop-color="#0a0d0c"/>
    </linearGradient>
    <linearGradient id="panelGlow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(121,255,180,0.10)"/>
      <stop offset="40%" stop-color="rgba(16,21,20,0)"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- terminal panel -->
  <g transform="translate(80,90)">
    <rect width="1040" height="450" fill="#101514" stroke="rgba(122,255,189,0.36)" stroke-width="1"/>
    <rect width="1040" height="450" fill="url(#panelGlow)"/>

    <!-- title bar -->
    <rect width="1040" height="44" fill="rgba(5,7,6,0.86)" stroke="rgba(122,255,189,0.16)" stroke-width="1"/>
    <circle cx="24" cy="22" r="6" fill="#ff4fd8"/>
    <circle cx="46" cy="22" r="6" fill="#61d9ff"/>
    <circle cx="68" cy="22" r="6" fill="#79ffb4"/>
    <text x="92" y="28" font-family="ui-monospace, Menlo, Monaco, Consolas, monospace" font-size="16" fill="#6f8179">profile.sh</text>

    <!-- body -->
    <g transform="translate(40,100)">
      <text font-family="ui-monospace, Menlo, Monaco, Consolas, monospace" font-size="22" fill="#6f8179">
        <tspan fill="#79ffb4">$</tspan> whoami
      </text>
      <text y="80" font-family="ui-monospace, Menlo, Monaco, Consolas, monospace" font-size="72" font-weight="700" fill="#d8e5df">Tim Heinemann</text>
      <text y="130" font-family="ui-monospace, Menlo, Monaco, Consolas, monospace" font-size="28" fill="#79ffb4">AI-Augmented Software Engineer</text>

      <text y="200" font-family="ui-monospace, Menlo, Monaco, Consolas, monospace" font-size="22" fill="#6f8179">
        <tspan fill="#79ffb4">$</tspan> cat focus.txt
      </text>
      <text y="240" font-family="ui-monospace, Menlo, Monaco, Consolas, monospace" font-size="22" fill="#a9b8b2">Full-stack web · DevOps · Linux · CLI-first AI workflows</text>
    </g>
  </g>

  <!-- footer -->
  <text x="80" y="585" font-family="ui-monospace, Menlo, Monaco, Consolas, monospace" font-size="20" fill="#6f8179">~/</text>
  <text x="108" y="585" font-family="ui-monospace, Menlo, Monaco, Consolas, monospace" font-size="20" fill="#a9b8b2">heinemann.foo</text>
</svg>`;

const out = new URL('../public/assets/img/og.png', import.meta.url);
const png = await sharp(Buffer.from(svg), { density: 144 })
  .resize(1200, 630)
  .png()
  .toBuffer();

writeFileSync(out, png);
console.log(`wrote ${out.pathname} (${png.length} bytes)`);
