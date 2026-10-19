import sharp from 'sharp';

async function cropPlants() {
  const input = 'public/images/flyers/amra-stp-etp-ro-overview.jpg';
  
  // STP photo (left)
  await sharp(input)
    .extract({ left: 14, top: 430, width: 212, height: 175 })
    .toFile('public/images/solutions/stp-plant.jpg');

  // ETP photo (center)
  await sharp(input)
    .extract({ left: 235, top: 430, width: 212, height: 175 })
    .toFile('public/images/solutions/etp-plant.jpg');

  // RO plant photo (right)
  await sharp(input)
    .extract({ left: 456, top: 430, width: 212, height: 175 })
    .toFile('public/images/products/industrial-ro.jpg');

  console.log('Successfully extracted STP, ETP, and RO plant photos from the flyer!');
}

cropPlants();
