import PropTypes from 'prop-types';

const BADGE_STYLES = {
  Bestseller: 'bg-amber-700',
  New: 'bg-emerald-700',
  Sale: 'bg-red-800',
  Hot: 'bg-brand-accent',
};

export default function Badge({ label }) {
  if (!label) return null;
  return (
    <span className={`inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white rounded-[var(--radius-pill)] ${BADGE_STYLES[label] || 'bg-gray-500'}`}>
      {label}
    </span>
  );
}

Badge.propTypes = {
  label: PropTypes.string,
};
