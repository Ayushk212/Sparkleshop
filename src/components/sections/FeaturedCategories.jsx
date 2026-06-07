import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useFilterStore from '../../store/useFilterStore';

const CATEGORIES_SHOWCASE = [
  {
    id: 'cookware',
    label: 'Cookware',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'bakeware',
    label: 'Bakeware',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'storage',
    label: 'Storage',
    image: 'https://images.unsplash.com/photo-1595348020949-87cdfcd44174?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'tools',
    label: 'Kitchen Tools',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'dining',
    label: 'Dining & Serveware',
    image: 'https://images.unsplash.com/photo-1536304997881-a372c179924b?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'appliances',
    label: 'Small Appliances',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=600&auto=format&fit=crop',
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
                alt={cat.label}
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
