import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Vaishali, Ghaziabad",
    rating: 5,
    date: "March 2025",
    review: "The quality of the pressure cooker I bought is outstanding. The staff was very helpful and guided me to the right product for my family size.",
    product: "Pressure Cooker",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Amit Goel",
    location: "Indirapuram, Ghaziabad",
    rating: 5,
    date: "February 2025",
    review: "Excellent collection of non-stick pans! They have all top brands and the store owners really know kitchenware. Highly recommended local shop.",
    product: "Granite Frypan Set",
    avatar: "AG",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    location: "Raj Nagar, Ghaziabad",
    rating: 4,
    date: "January 2025",
    review: "Bought a set of steel storage containers. They are completely airtight and very sturdy. Great price and friendly service.",
    product: "Stainless Steel Storage Set",
    avatar: "RK",
  },
  {
    id: 4,
    name: "Meenakshi Joshi",
    location: "Kavi Nagar, Ghaziabad",
    rating: 5,
    date: "December 2024",
    review: "I was looking for some aesthetic serveware for hosting dinner parties, and Sparkles of Kitchen did not disappoint. The designs are gorgeous!",
    product: "Ceramic Dinner Plates",
    avatar: "MJ",
  },
  {
    id: 5,
    name: "Sanjay Gupta",
    location: "Sanjay Nagar, Ghaziabad",
    rating: 5,
    date: "October 2024",
    review: "We buy all our kitchen items from here. Reliable quality and they always give honest advice on which brand has better build quality.",
    product: "Cast Iron Kadai",
    avatar: "SG",
  },
  {
    id: 6,
    name: "Neha Tyagi",
    location: "Vasundhara, Ghaziabad",
    rating: 4,
    date: "September 2024",
    review: "Best place in Ghaziabad for bakeware. Found great baking tins and silicone spatulas that are hard to get in normal markets.",
    product: "Loaf Pan & Whisk",
    avatar: "NT",
  },
];

export default function ReviewsPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-brand-white min-h-screen"
    >
      {/* Page Hero (Mini) */}
      <section className="relative h-[45vh] w-full flex items-center justify-center bg-brand-blue text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 px-6 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest font-body font-normal text-brand-orange mb-3"
          >
            Customer Voices
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            What Our Customers Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-base text-white/80 max-w-xl mx-auto"
          >
            Real stories, honest feedback, and reviews from home kitchens across Ghaziabad.
          </motion.p>
        </div>
      </section>

      {/* Reviews Grid Section */}
      <section className="bg-brand-white py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-dark">Shop Reviews</h2>
            <p className="font-body text-base text-brand-dark/60 mt-2">
              Based on recent purchases in our Ghaziabad showroom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((rev, index) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-brand-white border border-brand-grey p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  {/* Top Row: Avatar Initials + Name + Location */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-brand-orange text-white font-body font-medium flex items-center justify-center select-none text-sm">
                      {rev.avatar}
                    </div>
                    <div>
                      <h4 className="font-display text-base font-medium text-brand-dark leading-tight">
                        {rev.name}
                      </h4>
                      <p className="font-body text-xs text-brand-dark/50">
                        {rev.location}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating
                            ? 'text-brand-orange fill-brand-orange'
                            : 'text-brand-grey'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-body text-base text-brand-dark/80 leading-relaxed italic mb-6">
                    "{rev.review}"
                  </p>
                </div>

                {/* Bottom Metadata */}
                <div className="border-t border-brand-grey pt-4 mt-auto flex justify-between items-center text-[11px] text-brand-dark/40 font-body">
                  <span>Purchased: <strong className="text-brand-dark/60">{rev.product}</strong></span>
                  <span>{rev.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Store / Social Reviews Trust Strip */}
      <section className="bg-brand-blue py-12 text-white">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h3 className="font-display text-lg uppercase tracking-wider text-white/60 mb-6 font-semibold">
            Find Us On
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {/* Google Reviews */}
            <div className="bg-white/5 border border-white/10 px-5 py-2.5 flex items-center gap-2">
              <span className="font-body font-medium text-sm tracking-[0.15em] uppercase">Google Reviews</span>
              <span className="text-sm text-brand-orange font-body font-medium">4.8 ⭐ · 120+ reviews</span>
            </div>

            {/* JustDial */}
            <div className="bg-white/5 border border-white/10 px-5 py-2.5 flex items-center gap-2">
              <span className="font-body font-medium text-sm tracking-[0.15em] uppercase">JustDial</span>
              <span className="text-sm text-brand-orange font-body font-medium">4.7 ⭐ · 250+ reviews</span>
            </div>

            {/* Facebook */}
            <div className="bg-white/5 border border-white/10 px-5 py-2.5 flex items-center gap-2">
              <span className="font-body font-medium text-sm tracking-[0.15em] uppercase">Facebook</span>
              <span className="text-sm text-brand-orange font-body font-medium">4.9 ⭐ · 80+ votes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="bg-brand-white py-20 text-center border-t border-brand-grey">
        <div className="max-w-xl mx-auto px-6">
          <MessageSquare className="w-10 h-10 text-brand-orange mx-auto mb-4" />
          <h2 className="font-display text-3xl font-semibold text-brand-dark mb-4">
            Loved shopping with us?
          </h2>
          <p className="font-body text-base text-brand-dark/70 leading-relaxed mb-8">
            Share your experience and help other families in Ghaziabad find great kitchenware. Your feedback keeps our standards high.
          </p>
          <a
            href="https://g.page/r/fake-google-review-url/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-brand-orange hover:bg-brand-orange-dark text-white font-body uppercase tracking-[0.15em] text-sm font-medium transition-colors duration-200 cursor-pointer rounded-none"
          >
            Leave a Google Review
          </a>
        </div>
      </section>
    </motion.div>
  );
}
