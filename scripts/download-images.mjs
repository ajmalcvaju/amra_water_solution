import fs from 'fs';
import path from 'path';
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false
});

const downloads = [
  // Hero slides
  {
    url: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/images/hero/hero-water-pour.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/images/hero/hero-industrial-tech.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/images/hero/hero-commercial-plant.jpg',
  },
  // Products
  {
    url: 'https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/domestic-ro.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/commercial-ro.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/industrial-ro.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/water-softener.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/uv-purifier.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/water-cooler.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/iron-filter.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/multimedia-filter.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/carbon-filter.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/uf-plant.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/accessories.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/custom-solutions.jpg',
  },
  // Solutions
  {
    url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/solutions/residential.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/solutions/commercial.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/solutions/industrial.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/solutions/softening.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/solutions/stp-plant.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/solutions/etp-plant.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/solutions/water-testing.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    dest: 'public/images/solutions/pcb-consulting.jpg',
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
      file.on('finish', () => {
        file.close(resolve);
      });
    });
    req.on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  console.log(`Starting download of ${downloads.length} assets...`);
  for (const item of downloads) {
    const targetDir = path.dirname(item.dest);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    try {
      await downloadFile(item.url, item.dest);
      console.log(`✓ Downloaded ${item.dest}`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.dest}:`, err.message);
    }
  }
  console.log('All downloads finished!');
}

main();
