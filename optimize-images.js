const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "public/img/projets";
const outputDir = "public/img/projets/optimized";

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach((file) => {
    if (file.endsWith(".webp")) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file);

        sharp(inputPath)
            .resize(1600, 900)
            .webp({ quality: 80 })
            .toFile(outputPath)
            .then(() => console.log("✔ Optimized:", file))
            .catch((err) => console.error("❌ Error:", file, err));
    }
});