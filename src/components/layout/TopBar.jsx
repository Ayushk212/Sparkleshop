import { MapPin, Sparkles, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-brand-dark text-white text-[13px] h-9 flex justify-center items-center border-b border-white/10 overflow-hidden">
      <div className="max-w-[1280px] px-6 w-full flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3 h-3" />
          <span>Serving Republik, Ghaziabad</span>
        </div>
        <div className="hidden md:flex items-center gap-1.5">
          <Sparkles className="w-3 h-3" />
          <span>Free delivery on orders above ₹999</span>
        </div>
        <div className="hidden lg:flex items-center gap-1.5">
          <Phone className="w-3 h-3" />
          <span>+91 98765 43210</span>
        </div>
      </div>
    </div>
  );
}
