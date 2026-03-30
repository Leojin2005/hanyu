import { motion } from 'framer-motion';

export default function XpBadge({ xp, gained }) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-accent text-white font-bold px-3 py-1
                      rounded-full text-sm">
        {xp} XP
      </div>
      {gained > 0 && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-bold text-sm"
        >
          +{gained}
        </motion.span>
      )}
    </div>
  );
}