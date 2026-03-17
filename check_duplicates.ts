import fs from 'fs';
import { destinationsData } from './src/data/destinations.ts';

const images = new Map<string, string[]>();

for (const continent of destinationsData) {
  for (const country of continent.countries) {
    for (const attraction of country.attractions) {
      if (!images.has(attraction.image)) {
        images.set(attraction.image, []);
      }
      images.get(attraction.image)!.push(attraction.name);
    }
  }
}

for (const [url, names] of images.entries()) {
  if (names.length > 1) {
    console.log(`Duplicate URL: ${url}`);
    console.log(`  Used by: ${names.join(', ')}`);
  }
}
