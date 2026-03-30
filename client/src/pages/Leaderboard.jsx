import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import api from '../services/api';

export default function Leaderboard() {
  const { user } = useSelector((s) => s.auth);
  const [board, setBoard] = useState([]);
  const [myRank, setMyRank] = useState(0);
  const [type, setType] = useState('xp');

  useEffect(() => {
    api.get('/leaderboard', { params: { type } }).then(({ data }) => {
      setBoard(data.leaderboard);
      setMyRank(data.currentUserRank);
    });
  }, [type]);

  const medals = ['🥇', '🥈', '🥉'];

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <h1 className="text-2xl font-extrabold text-center mb-2">
        Leaderboard
      </h1>
      <p className="text-center text-gray-400 mb-6">
        Your rank: #{myRank}
      </p>

      {/* Toggle */}
      <div className="flex justify-center gap-2 mb-6">
        {['xp', 'streak'].map((t) => (
          <button key={t} onClick={() => setType(t)}
            className={`px-4 py-2 rounded-xl font-bold text-sm
              capitalize transition
              ${type === t
                ? 'bg-accent text-white'
                : 'bg-gray-100 dark:bg-dark-card'}`}>
            {t === 'xp' ? '⭐ XP' : '🔥 Streak'}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-2">
        {board.map((u, i) => (
          <motion.div key={u._id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.03 }}
            className={`flex items-center gap-4 p-4 rounded-xl
              transition border
              ${u._id === user?._id
                ? 'bg-primary/10 border-primary/30'
                : 'bg-white dark:bg-dark-card border-gray-100 dark:border-gray-700'
              }`}
          >
            <span className="text-lg font-bold w-8 text-center">
              {u.rank <= 3 ? medals[u.rank - 1] : u.rank}
            </span>
            <div className="w-10 h-10 rounded-full bg-gray-200
                            overflow-hidden flex-shrink-0">
              <img src={u.avatar} alt="" className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold truncate">{u.username}</p>
              <p className="text-xs text-gray-400">{u.currentLevel}</p>
            </div>
            <div className="text-right">
              <p className="font-extrabold text-accent">
                {type === 'xp' ? u.xp : u.streak}
              </p>
              <p className="text-xs text-gray-400">
                {type === 'xp' ? 'XP' : 'days'}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}