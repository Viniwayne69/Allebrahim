import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const out = path.resolve("public/images");
fs.mkdirSync(out, { recursive: true });

const src = {
  hero: "C:/Users/Viniciusriber/.codex/generated_images/01a112d5-9671-73a2-b899-9d252ccb95a6/call_sw6Qn3nOTXaVJWH4sQibeuNC.png",
  meeting: "C:/Users/Viniciusriber/.codex/generated_images/01a112d5-9671-73a2-b899-9d252ccb95a6/call_zxEU95f9J7B15AR3ipGGVUd3.png",
  stage: "C:/Users/Viniciusriber/.codex/generated_images/01a112d5-9671-73a2-b899-9d252ccb95a6/call_GIvfGlcAgHZJWOnf9X1ORJPr.png",
  room: "C:/Users/Viniciusriber/.codex/generated_images/01a112d5-9671-73a2-b899-9d252ccb95a6/call_KLl8UciQVDd0epU88BkQFt5B.png",
  heads: "C:/Users/Viniciusriber/.codex/generated_images/01a112d5-9671-73a2-b899-9d252ccb95a6/call_fUJE70LZcLGkqrXC8mQkAHgO.png",
};

async function webp(input, name, width, height, fit = "cover") {
  await sharp(input)
    .resize(width, height, { fit, position: "center" })
    .webp({ quality: 84 })
    .toFile(path.join(out, name));
}

async function main() {
  await webp(src.hero, "hero-alle.webp", 1200, 1500);
  await webp(src.hero, "cta-alle.webp", 1000, 1250);
  await webp(src.stage, "treinamento-workshop.webp", 800, 500);
  await webp(src.room, "treinamento-incompany.webp", 800, 500);
  await webp(src.room, "treinamento-turma360.webp", 800, 500);
  await webp(src.stage, "treinamento-imersao.webp", 800, 500);
  await webp(src.stage, "proxima-turma.webp", 700, 700);
  await webp(src.meeting, "consultoria-reuniao.webp", 1200, 900);
  await webp(src.stage, "galeria-1.webp", 900, 600);
  await webp(src.room, "galeria-2.webp", 900, 600);
  await webp(src.meeting, "galeria-3.webp", 900, 600);
  await webp(src.stage, "galeria-4.webp", 900, 600);
  await webp(src.stage, "sobre-alle.webp", 900, 700);

  const meta = await sharp(src.heads).metadata();
  const width = meta.width ?? 1792;
  const height = meta.height ?? 1024;
  const half = Math.floor(width / 2);

  await sharp(src.heads)
    .extract({ left: 0, top: 0, width: half - 8, height })
    .resize(200, 200, { fit: "cover" })
    .webp({ quality: 84 })
    .toFile(path.join(out, "depoimento-1.webp"));

  await sharp(src.heads)
    .extract({ left: half + 8, top: 0, width: half - 8, height })
    .resize(200, 200, { fit: "cover" })
    .webp({ quality: 84 })
    .toFile(path.join(out, "depoimento-2.webp"));

  const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#1d0d08"/><stop offset="1" stop-color="#2B1810"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/><ellipse cx="940" cy="145" rx="210" ry="95" fill="#F28C28" opacity="0.9" transform="rotate(-18 940 145)"/><text x="86" y="275" fill="#F6EBDD" font-family="Georgia, serif" font-size="82" font-weight="700">Allê Ebrahim</text><text x="90" y="355" fill="#F28C28" font-family="Arial, sans-serif" font-size="34" font-weight="700">Vender com verdade e constância.</text></svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(path.join(out, "og-image.jpg"));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
