import fs from 'fs';
import https from 'https';

const agent = new https.Agent({ rejectUnauthorized: false });

const images = [
  {
    url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/images/hero/hero-water-treatment-plant.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/images/hero/hero-clarifier-plant.jpg'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { agent }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      } else {
        reject(new Error(`Status ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

for (const img of images) {
  try {
    await downloadFile(img.url, img.dest);
    const stat = fs.statSync(img.dest);
    console.log(`✓ Downloaded ${img.dest} (${stat.size} bytes)`);
  } catch (err) {
    console.error(`✗ ${img.dest}: ${err.message}`);
  }
}
