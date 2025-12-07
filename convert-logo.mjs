import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgPath = path.join(process.cwd(), 'logo.svg');
const pngPath = path.join(process.cwd(), 'logo.png');

sharp(svgPath)
  .png()
  .toFile(pngPath)
  .then(() => {
    console.log(`✓ logo.png created successfully`);
  })
  .catch(err => {
    console.error('Error converting SVG to PNG:', err);
    process.exit(1);
  });
