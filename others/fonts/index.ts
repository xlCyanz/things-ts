import * as fs from "fs";
import * as fontkit from "fontkit";

async function getUnicodeAndNamesFromTTF(filePath: string): Promise<any> {
  try {
    const ttfBuffer = fs.readFileSync(filePath);
    const font = fontkit.create(ttfBuffer);

    const numGlyphs = font.numGlyphs;
    const unicodeAndNames = [];

    for (let i = 0; i < numGlyphs; i++) {
      const glyph = font.getGlyph(i);
      console.log(glyph.codePoints);
      const unicode = glyph.codePoints[0].toString(16);
      const name = glyph.name || "Unknown";

      unicodeAndNames.push({ unicode, name });
    }

    return unicodeAndNames;
  } catch (error) {
    console.error("Error al leer el archivo TTF:", error);
    return null;
  }
}

async function main() {
  const ttfFilePath = "./font.ttf"; // Reemplaza con la ruta de tu archivo TTF
  const result = await getUnicodeAndNamesFromTTF(ttfFilePath);

  if (result) {
    const outputFilePath = "fonts.json";
    fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 2));
    console.log("Códigos Unicode y nombres guardados en", outputFilePath);
  }
}

main();
