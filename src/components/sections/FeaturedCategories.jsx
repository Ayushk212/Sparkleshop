import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useFilterStore from '../../store/useFilterStore';

const CATEGORIES_SHOWCASE = [
  {
    id: 'cookware',
    label: 'Cookware',
    image: '/images/categories/cookware.jpg',
    alt: 'Premium non-stick cookware pot boiling pasta with water being poured from an electric kettle',
  },
  {
    id: 'bakeware',
    label: 'Bakeware',
    image: '/images/categories/bakeware.png',
    alt: 'Assorted baking pans with freshly baked bread loaves, muffins, and donuts',
  },
  {
    id: 'storage',
    label: 'Storage',
    image: '/images/categories/storage.png',
    alt: 'Stackable clear airtight plastic food storage containers filled with fresh ingredients on a metal kitchen counter',
  },
  {
    id: 'tools',
    label: 'Kitchen Tools',
    image: '/images/categories/tools.png',
    alt: 'Collection of kitchen tools including wooden spoons, spatula, chef knife, whisk, and cast iron skillet on a cutting board',
  },
  {
    id: 'dining',
    label: 'Dining & Serveware',
    image: '/images/categories/dining.png',
    alt: 'Elegant dining table setting with plates, bowls, glassware, and cutlery ready for a meal',
  },
  {
    id: 'appliances',
    label: 'Small Appliances',
    image: '/images/categories/appliances.png',
    alt: 'Modern small kitchen appliances including an air fryer, coffee makers, and a blender lined up on a kitchen counter',
  },
];

export default function FeaturedCategories() {
  const navigate = useNavigate();
  const setCategory = useFilterStore((s) => s.setCategory);

  const handleCategoryClick = (id) => {
    setCategory(id);
    navigate('/products');
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header — left-aligned */}
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-[#111827]">
            Shop By Category
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_SHOWCASE.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => handleCategoryClick(cat.id)}
              className="relative aspect-square overflow-hidden group cursor-pointer border border-[#F9FAFB] bg-[#F9FAFB] rounded-none"
            >
              {/* Category Image */}
              <img
                src={cat.image}
                alt={cat.alt || cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
              />

              {/* Gradient overlay fading to bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/35 transition-all duration-300" />

              {/* Overlay Label at Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-center z-10">
                <span className="font-display text-xl md:text-2xl font-bold text-white leading-tight">
                  {cat.label}
                </span>
                <span className="text-white transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-lg md:text-xl font-bold">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
