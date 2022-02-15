#!/usr/bin/env node

import resizer from 'node-image-resizer';
import fs from 'fs'

const setup = {
  all: {
    quality: 80,
    path: 'public/icons/'
  },
  versions: [{
    prefix: 'medium_',
    width: 512,
    height: 512
  }, {
    quality: 100,
    prefix: 'small_',
    width: 128,
    height: 128
  }, {
    quality: 100,
    prefix: 'favicon_',
    width: 32,
    height: 32
  }]
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  // create thumbnails
  const thumbs = await resizer('./public/profile_picture.png', setup);

  await sleep(2000) // resizer doesn't wait for the files to be saved to disk before returning the list

  thumbs.forEach(image => {
    if (image.includes('favicon')) {
      const newName = image.replace('_profile_picture', '')
      fs.renameSync(image, newName)
      console.log(`created: ${newName}`)
    } else {
      console.log(`created: ${image}`)
    }
  });
})();