import fs from 'fs';
import https from 'https';

const agent = new https.Agent({ rejectUnauthorized: false });

const fixes = [
  {
    url: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/images/hero/hero-water-pour.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/images/hero/hero-industrial-tech.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/solutions/etp-plant.jpg',
  },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(url, { agent }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    });
    req.on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

for (const item of fixes) {
  try {
    await downloadFile(item.url, item.dest);
    console.log(`✓ Fixed ${item.dest}`);
  } catch (err) {
    console.error(`✗ Error on ${item.dest}:`, err.message);
  }
}
