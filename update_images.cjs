const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'products.js');
let content = fs.readFileSync(filePath, 'utf-8');

const images = {
  "cookware": [
    "https://images.unsplash.com/photo-1584990347449-a6efa1a5b820?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616422285623-149b8061e8c0?q=80&w=800&auto=format&fit=crop",
  ],
  "storage": [
    "https://images.unsplash.com/photo-1592398679093-3d07e6616035?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506606401543-2e73709ce972?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593361483861-55823e20ec42?q=80&w=800&auto=format&fit=crop",
  ],
  "bakeware": [
    "https://images.unsplash.com/photo-1585292451310-85f2f5348873?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556910110-a5a63dfd393c?q=80&w=800&auto=format&fit=crop",
  ],
  "dining": [
    "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?q=80&w=800&auto=format&fit=crop",
  ],
  "tools": [
    "https://images.unsplash.com/photo-1593006526971-8f4df8ebdfd3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589148011242-70b1cb3b584a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596647895311-6677f2d0f507?q=80&w=800&auto=format&fit=crop",
  ],
  "appliances": [
    "https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558227091-a1d2e1b1d1cb?q=80&w=800&auto=format&fit=crop",
  ],
  "cleaning": [
    "https://images.unsplash.com/photo-1584820927498-cafe6c15cfbc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=800&auto=format&fit=crop",
  ],
  "default": "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=800&auto=format&fit=crop"
};

let match;
const regex = /category:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g;

content = content.replace(regex, (match, category, oldImage) => {
  let arr = images[category] || [images["default"]];
  let randomImage = arr[Math.floor(Math.random() * arr.length)];
  return match.replace(oldImage, randomImage);
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Images updated successfully!');
