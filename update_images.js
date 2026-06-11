import fs from 'fs';
import { PRODUCTS } from './src/data/products.js';

const queries = {
  1: 'Wok',
  2: 'Pressure_cooker',
  3: 'Tava',
  4: 'Saucepan',
  5: 'Frying_pan',
  6: 'Saucepan',
  7: 'Tupperware',
  8: 'Spice_rack',
  9: 'Breakfast_cereal',
  10: 'Refrigerator',
  11: 'Tiffin_carrier',
  12: 'Breadbox',
  13: 'Cake_pan',
  14: 'Muffin_tin',
  15: 'Bread_pan',
  16: 'Sheet_pan',
  17: 'Cooling_rack',
  18: 'Springform_pan',
  19: 'Plate_(dishware)',
  20: 'Bowl',
  21: 'Salad_bowl',
  22: 'Casserole',
  23: 'Tava',
  24: 'Soup_bowl',
  25: 'Chef%27s_knife',
  26: 'Mandoline',
  27: 'Measuring_cup',
  28: 'Spatula',
  29: 'Peeler',
  30: 'Mortar_and_pestle',
  31: 'Food_processor',
  32: 'Blender',
  33: 'Electric_water_boiler',
  34: 'Pie_iron',
  35: 'Immersion_blender',
  36: 'Toaster',
  37: 'Microfiber',
  38: 'Scouring_pad',
  39: 'Brush',
  40: 'Strainer',
  41: 'Dishwashing_liquid',
  42: 'Dish_brush' // will fallback
};

async function getWikiImage(title) {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&pithumbsize=800&titles=${title}`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'SparklesOfKitchen/1.0 (info@sparklesofkitchen.com)'
      }
    });
    const data = await res.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    if (pageId !== '-1' && pages[pageId].thumbnail) {
      return pages[pageId].thumbnail.source;
    }
  } catch (e) {
    console.error('Error fetching', title, e);
  }
  return null;
}

async function updateProducts() {
  const newProducts = [...PRODUCTS];
  for (let i = 0; i < newProducts.length; i++) {
    const p = newProducts[i];
    const query = queries[p.id];
    if (query) {
      const imgUrl = await getWikiImage(query);
      if (imgUrl) {
        console.log(`Found image for ${p.name}: ${imgUrl}`);
        p.image = imgUrl;
      } else {
        console.log(`NO IMAGE for ${p.name} (query: ${query})`);
        // fallback to a clean placeholder
        p.image = `https://placehold.co/800x800/F3F4F6/111827?text=${encodeURIComponent(p.name)}`;
      }
    }
  }

  // Generate the new file content
  const fileContent = `export const PRODUCTS = ${JSON.stringify(newProducts, null, 2)};\n`;
  fs.writeFileSync('./src/data/products.js', fileContent);
  console.log('Successfully updated src/data/products.js');
}

updateProducts();
