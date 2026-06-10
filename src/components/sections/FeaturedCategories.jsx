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
    <section className="bg-brand-white py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-body font-normal text-brand-orange mb-2">
            Showcase
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-dark">
            Shop by Category
          </h2>
          <div className="flex justify-center mt-3">
            <div className="w-[40px] h-[2px] bg-brand-orange" />
          </div>
        </div>

        {/* Categories Grid (Scrollable Row on Mobile, 3x2 Grid on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_SHOWCASE.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => handleCategoryClick(cat.id)}
              className="relative aspect-square overflow-hidden group cursor-pointer border border-brand-grey bg-brand-grey"
            >
              {/* Category Image */}
              <img
                src={cat.image}
                alt={cat.alt || cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
              />

              {/* Dark Overlay (becomes darker on hover) */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Overlay Label at Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-center z-10">
                <span className="font-display text-xl md:text-2xl font-medium text-white leading-tight">
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
