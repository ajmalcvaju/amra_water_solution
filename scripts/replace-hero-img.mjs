import fs from 'fs';
import https from 'https';

const agent = new https.Agent({ rejectUnauthorized: false });

const candidates = [
  'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1920&q=80', // Industrial water treatment machinery / large filters
  'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1920&q=80', // Plant equipment & automated piping
  'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1920&q=80', // Stainless steel high-tech systems
];

function tryDownload(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { agent }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        tryDownload(res.headers.location, dest).then(resolve).catch(reject);
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

async function main() {
  for (const url of candidates) {
    try {
      console.log(`Trying ${url}...`);
      await tryDownload(url, 'public/images/hero/hero-industrial-tech.jpg');
      const stat = fs.statSync('public/images/hero/hero-industrial-tech.jpg');
      console.log(`✓ Downloaded successfully! Size: ${stat.size} bytes`);
      return;
    } catch (e) {
      console.log(`Failed: ${e.message}`);
    }
  }
}

main();
