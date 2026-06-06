import { Star } from 'lucide-react';
import PropTypes from 'prop-types';

export default function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        <span className="text-sm font-medium text-text-primary">{rating.toFixed(1)}</span>
      </div>
      {count != null && (
        <span className="text-xs text-text-muted">({count})</span>
      )}
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  count: PropTypes.number,
};
