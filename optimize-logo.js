import sharp from "sharp";
import fs from "fs";

const input = "public/logo/logo-mj.png";

if (!fs.existsSync(input)) {
    console.error("❌ Logo introuvable");
    process.exit(1);
}

async function run() {
    try {
        // 🔥 Logo principal (PAS de resize)
        await sharp(input)
            .webp({ quality: 95 })
            .toFile("public/logo/logo-mj.webp");

        console.log("✔ logo webp OK");

        // 🔥 favicon (seul resize autorisé)
        await sharp(input)
            .resize(32, 32)
            .png()
            .toFile("public/logo/favicon.png");

        console.log("✔ favicon OK");

        // 🔥 version mobile (optionnel mais propre)
        await sharp(input)
            .resize(192, 192)
            .png()
            .toFile("public/logo/logo-mj-192.png");

        console.log("✔ mobile icon OK");

    } catch (err) {
        console.error("❌ erreur :", err);
    }
}

run();