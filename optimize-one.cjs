const sharp = require("sharp");
const path = require("path");

const inputFile = "public/img/projets/escape-quest2d.png";
const outputFile = "public/img/projets/optimized/escape-quest2d.webp";

async function optimize() {
    await sharp(inputFile)
        .resize(1600, 900, {
            fit: "cover",
            position: "center",
        })
        .webp({ quality: 82 })
        .toFile(outputFile);

    console.log("✅ Image optimisée :", outputFile);
}

optimize().catch((err) => {
    console.error("❌ Erreur :", err);
});