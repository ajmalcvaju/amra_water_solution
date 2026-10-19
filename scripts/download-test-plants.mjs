import fs from 'fs';
import https from 'https';

const agent = new https.Agent({ rejectUnauthorized: false });

const testUrls = [
  { name: 'test-plant-1.jpg', url: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1920&q=80' },
  { name: 'test-plant-2.jpg', url: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=1920&q=80' },
  { name: 'test-plant-3.jpg', url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1920&q=80' },
  { name: 'test-plant-4.jpg', url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1920&q=80' },
];

for (const t of testUrls) {
  https.get(t.url, { agent }, res => {
    if (res.statusCode === 200) {
      res.pipe(fs.createWriteStream(`public/images/hero/${t.name}`)).on('finish', () => console.log('Saved', t.name));
    }
  });
}
