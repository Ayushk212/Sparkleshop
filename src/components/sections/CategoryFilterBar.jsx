import { motion } from 'framer-motion';
import { CATEGORIES } from '../../data/categories';
import useFilterStore from '../../store/useFilterStore';

export default function CategoryFilterBar() {
  const { activeCategory, setCategory } = useFilterStore();

  return (
    <div className="category-filter-bar sticky top-[60px] z-[800] w-full shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6 w-full h-full">
        <div className="category-tab-container hide-scrollbar">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setCategory(category.id)}
                className={`category-tab-button ${isActive ? 'active' : ''}`}
                aria-pressed={isActive}
              >
                <span>{category.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryUnderline"
                    className="absolute bottom-0 left-[20px] right-[20px] h-[2px] bg-white"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}


