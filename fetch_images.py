import urllib.request
import re
import json
import time

products = [
    (1, "non stick wok pan"),
    (2, "pressure cooker"),
    (3, "cast iron skillet pan"),
    (4, "stainless steel saucepan"),
    (5, "deep frying pan cooking"),
    (6, "small milk pan pot"),
    (7, "airtight food storage container"),
    (8, "spice rack jars"),
    (9, "cereal dispenser jar"),
    (10, "fridge storage bins clear"),
    (11, "stainless steel lunch box tiffin"),
    (12, "bamboo wood bread box"),
    (13, "cake baking tin pan"),
    (14, "silicone muffin mould tray"),
    (15, "bread loaf pan baking"),
    (16, "metal baking sheet tray"),
    (17, "wire cooling rack baking"),
    (18, "springform cake pan"),
    (19, "ceramic dinner set plates"),
    (20, "stainless steel serving bowls"),
    (21, "wooden salad bowl with spoon"),
    (22, "casserole pot food"),
    (23, "stainless steel insulated box food"),
    (24, "ceramic soup bowl"),
    (25, "kitchen chefs knife sharp"),
    (26, "mandoline vegetable slicer"),
    (27, "stainless measuring cups spoons"),
    (28, "silicone cooking spatulas"),
    (29, "vegetable peeler tool"),
    (30, "stone mortar and pestle"),
    (31, "electric food chopper kitchen"),
    (32, "kitchen blender mixer"),
    (33, "electric water kettle"),
    (34, "sandwich maker toaster"),
    (35, "immersion hand blender"),
    (36, "pop up bread toaster"),
    (37, "microfiber cleaning cloth kitchen"),
    (38, "steel sponge scrubber dish"),
    (39, "bottle cleaning brush kitchen"),
    (40, "sink drain strainer"),
    (41, "dish soap liquid bottle"),
    (42, "dish cleaning brush soap")
]

results = {}

for pid, query in products:
    url = f"https://unsplash.com/s/photos/{urllib.parse.quote(query)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # Find image URLs like https://images.unsplash.com/photo-1234567890-abcdef
        matches = re.findall(r'https://images\.unsplash\.com/photo-[a-zA-Z0-9\-]+', html)
        if matches:
            # exclude some common profile/avatar photos if possible, usually they have different params, but the regex only gets the base url
            # Just take the first valid-looking photo
            valid_matches = [m for m in matches if len(m) > 40]
            if valid_matches:
                results[pid] = valid_matches[0] + "?q=80&w=800&auto=format&fit=crop"
                print(f"Found for {query}: {valid_matches[0]}")
            else:
                results[pid] = None
        else:
            results[pid] = None
    except Exception as e:
        print(f"Error for {query}: {e}")
    time.sleep(0.5)

with open('image_results.json', 'w') as f:
    json.dump(results, f, indent=2)
