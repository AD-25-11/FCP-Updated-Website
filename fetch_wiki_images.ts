const landmarks = [
  "Mount Fuji", "Shibuya Crossing", "Kinkaku-ji", "Osaka Castle", "Arashiyama",
  "Eiffel Tower", "Louvre", "Mont Saint-Michel", "Palace of Versailles", "French Riviera"
];

async function getWikiImageUrl(title: string) {
  try {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=800`);
    const data = await res.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    if (pages[pageId].thumbnail) {
      return pages[pageId].thumbnail.source;
    }
  } catch (e) {}
  return null;
}

async function run() {
  for (const l of landmarks) {
    const url = await getWikiImageUrl(l);
    console.log(`${l}: ${url}`);
  }
}
run();
