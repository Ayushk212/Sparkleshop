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
      className="bg-white min-h-screen"
    >
      {/* Section 1: Hero Banner (40vh) */}
      <section className="relative h-[40vh] w-full flex items-center justify-center bg-[#111827] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
          alt="Customer reviews showcase"
          className="absolute inset-0 w-full h-full object-cover opacity-60 select-none"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Customer reviews
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base md:text-lg font-normal text-white/90 leading-relaxed"
          >
            Stories and feedback from home kitchens across Ghaziabad.
          </motion.p>
        </div>
      </section>

      {/* Reviews Grid Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-left mb-16">
            <h2 className="font-display text-3xl md:text-[36px] font-bold text-[#111827]">Shop reviews</h2>
            <p className="font-body text-[15px] text-gray-500 mt-2">
              Based on recent purchases in our Ghaziabad showroom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((rev, index) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-gray-200 p-8 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  {/* Top Row: Avatar Initials + Name + Location */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F97316] font-body font-bold flex items-center justify-center select-none text-sm">
                      {rev.avatar}
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-[#111827] leading-tight">
                        {rev.name}
                      </h4>
                      <p className="font-body text-xs text-gray-500">
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
                            ? 'text-[#F97316] fill-[#F97316]'
                            : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-body text-[15px] text-gray-600 leading-relaxed italic mb-6">
                    "{rev.review}"
                  </p>
                </div>

                {/* Bottom Metadata */}
                <div className="border-t border-gray-100 pt-4 mt-auto flex justify-between items-center text-xs text-gray-400 font-body">
                  <span>Purchased: <strong className="text-gray-700 font-medium">{rev.product}</strong></span>
                  <span>{rev.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-gray-50 py-12 border-t border-b border-gray-100 text-gray-800">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h3 className="font-display text-sm uppercase tracking-wider text-gray-500 mb-6 font-bold">
            Find us on
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {/* Google Reviews */}
            <div className="bg-white border border-gray-200 px-6 py-3 flex items-center gap-3">
              <span className="font-body font-bold text-sm text-[#111827]">Google Reviews</span>
              <span className="text-sm text-[#F97316] font-body font-medium">4.8 rating · 120+ reviews</span>
            </div>

            {/* JustDial */}
            <div className="bg-white border border-gray-200 px-6 py-3 flex items-center gap-3">
              <span className="font-body font-bold text-sm text-[#111827]">JustDial</span>
              <span className="text-sm text-[#F97316] font-body font-medium">4.7 rating · 250+ reviews</span>
            </div>

            {/* Facebook */}
            <div className="bg-white border border-gray-200 px-6 py-3 flex items-center gap-3">
              <span className="font-body font-bold text-sm text-[#111827]">Facebook</span>
              <span className="text-sm text-[#F97316] font-body font-medium">4.9 rating · 80+ votes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <MessageSquare className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-[#111827] mb-4">
            Loved shopping with us?
          </h2>
          <p className="font-body text-[15px] text-gray-600 leading-relaxed mb-8">
            Share your experience and help other families in Ghaziabad find great kitchenware. Your feedback keeps our standards high.
          </p>
          <a
            href="https://g.page/r/fake-google-review-url/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-[#F97316] hover:bg-[#EA6C0A] text-white font-body tracking-wide text-sm font-medium transition-colors duration-200 cursor-pointer rounded-full"
          >
            Leave a Google review
          </a>
        </div>
      </section>
    </motion.div>
  );
}
