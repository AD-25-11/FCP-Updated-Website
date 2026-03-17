const fs = require('fs');

const headers = {
  "User-Agent": "AIStudioBot/1.0 (adrianhidalgo132005@gmail.com)"
};

async function test() {
  const query = "Tokyo Shibuya Crossing";
  const searchRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&srlimit=1`, { headers });
  const searchData = await searchRes.json();
  console.log("Search:", searchData);
  
  if (searchData.query && searchData.query.search && searchData.query.search.length > 0) {
    const title = searchData.query.search[0].title;
    console.log("Title:", title);
    
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1000`, { headers });
    const data = await res.json();
    console.log("Image Data:", JSON.stringify(data, null, 2));
  }
}

test();
