import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const files = [
  { svg: 'public/images/logo.svg', png: 'public/images/logo.png' },
  { svg: 'public/images/banner-1.svg', png: 'public/images/banner-1.png' },
  { svg: 'public/images/banner-2.svg', png: 'public/images/banner-2.png' },
  { svg: 'public/images/banner-3.svg', png: 'public/images/banner-3.png' },
  { svg: 'public/images/banner-4.svg', png: 'public/images/banner-4.png' },
];

async function convertAll() {
  for (const file of files) {
    const svgPath = path.join(process.cwd(), file.svg);
    const pngPath = path.join(process.cwd(), file.png);
    
    try {
      await sharp(svgPath)
        .png()
        .toFile(pngPath);
      console.log(`✓ ${file.png} created successfully`);
    } catch (err) {
      console.error(`✗ Error converting ${file.svg}:`, err.message);
    }
  }
}

convertAll();
