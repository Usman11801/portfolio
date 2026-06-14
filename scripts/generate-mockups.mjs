// Generates a clean dashboard-style SVG mockup for every project that does NOT
// have a real local screenshot, so every card shows a picture.
import { projects } from "../src/data.js";
import { writeFileSync, mkdirSync } from "node:fs";

mkdirSync(new URL("../public/shots/", import.meta.url), { recursive: true });

// Projects that already have a good, real screenshot (public/shots/<slug>.png)
const REAL_SHOTS = new Set([
  "chatbot-ai", "deftgpt", "chex-ai", "yourteacher-ai", "scale-mediation",
  "veriport", "optevo", "inventhub", "brandbassador", "capa",
]);

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const initials = (name) =>
  name.split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

function mockup({ name, field, accent }) {
  const ini = initials(name);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 820" width="1280" height="820" role="img" aria-label="${name} mockup">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0c0c14"/>
      <stop offset="1" stop-color="#11111c"/>
    </linearGradient>
    <linearGradient id="ac" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${accent}"/>
      <stop offset="1" stop-color="${accent}88"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="820" fill="url(#bg)"/>
  <!-- window -->
  <rect x="72" y="66" width="1136" height="688" rx="20" fill="#15151f" stroke="#262633" stroke-width="2"/>
  <!-- title bar -->
  <path d="M72 86 a20 20 0 0 1 20 -20 h1096 a20 20 0 0 1 20 20 v40 h-1136 z" fill="#1b1b28"/>
  <circle cx="104" cy="86" r="7" fill="#ff5f57"/>
  <circle cx="128" cy="86" r="7" fill="#febc2e"/>
  <circle cx="152" cy="86" r="7" fill="#28c840"/>
  <rect x="196" y="74" width="600" height="24" rx="12" fill="#0e0e16"/>
  <text x="216" y="91" font-family="Inter,Arial,sans-serif" font-size="14" fill="#8b8b9e">${field}</text>
  <!-- sidebar -->
  <rect x="72" y="126" width="250" height="628" fill="#12121b"/>
  <rect x="100" y="158" width="44" height="44" rx="12" fill="url(#ac)"/>
  <rect x="156" y="170" width="120" height="18" rx="9" fill="#2a2a38"/>
  ${[0,1,2,3,4,5].map((i)=>`<rect x="100" y="${238+i*46}" width="${150-(i%3)*18}" height="14" rx="7" fill="#22222f"/>`).join("\n  ")}
  <!-- main header -->
  <rect x="356" y="160" width="300" height="26" rx="13" fill="#2f2f3d"/>
  <rect x="356" y="198" width="180" height="16" rx="8" fill="#22222f"/>
  <rect x="1036" y="158" width="140" height="40" rx="10" fill="url(#ac)"/>
  <!-- stat cards -->
  ${[0,1,2].map((i)=>`<g>
    <rect x="${356+i*276}" y="252" width="252" height="120" rx="14" fill="#181824" stroke="#262633"/>
    <rect x="${380+i*276}" y="276" width="80" height="12" rx="6" fill="#2a2a38"/>
    <rect x="${380+i*276}" y="300" width="130" height="26" rx="8" fill="url(#ac)" opacity="0.85"/>
    <rect x="${380+i*276}" y="340" width="180" height="10" rx="5" fill="#22222f"/>
  </g>`).join("\n  ")}
  <!-- chart -->
  <rect x="356" y="396" width="528" height="320" rx="14" fill="#181824" stroke="#262633"/>
  <rect x="380" y="420" width="120" height="14" rx="7" fill="#2a2a38"/>
  ${[0,1,2,3,4,5,6,7].map((i)=>{const h=60+((i*53)%190);return `<rect x="${392+i*60}" y="${690-h}" width="34" height="${h}" rx="6" fill="url(#ac)" opacity="${0.45+(i%4)*0.16}"/>`;}).join("\n  ")}
  <!-- side panel -->
  <rect x="908" y="396" width="268" height="320" rx="14" fill="#181824" stroke="#262633"/>
  ${[0,1,2,3].map((i)=>`<g>
    <circle cx="940" cy="${440+i*68}" r="16" fill="url(#ac)" opacity="0.8"/>
    <rect x="968" y="${430+i*68}" width="150" height="12" rx="6" fill="#2a2a38"/>
    <rect x="968" y="${450+i*68}" width="100" height="10" rx="5" fill="#22222f"/>
  </g>`).join("\n  ")}
  <!-- watermark -->
  <text x="640" y="790" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="20" font-weight="700" fill="${accent}" opacity="0.9">${name}</text>
  <text x="1150" y="208" text-anchor="end" font-family="Inter,Arial,sans-serif" font-size="120" font-weight="800" fill="${accent}" opacity="0.06">${ini}</text>
</svg>`;
}

let n = 0;
for (const p of projects) {
  const slug = slugify(p.name);
  if (REAL_SHOTS.has(slug)) continue;
  writeFileSync(new URL(`../public/shots/${slug}.svg`, import.meta.url), mockup(p));
  n++;
}
console.log(`Generated ${n} mockups.`);
