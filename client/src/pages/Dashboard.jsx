import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchLessons } from '../store/lessonSlice';
import ProgressBar from '../components/ProgressBar';
import StreakFire from '../components/StreakFire';

const HSK_LEVELS = ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'];
const LEVEL_COLORS = {
  HSK1: 'from-green-400 to-green-600',
  HSK2: 'from-blue-400 to-blue-600',
  HSK3: 'from-purple-400 to-purple-600',
  HSK4: 'from-orange-400 to-orange-600',
  HSK5: 'from-red-400 to-red-600',
  HSK6: 'from-pink-400 to-pink-600',
};

export default function Dashboard() {
  const { user } = useSelector((s) => s.auth);
  const { items: lessons, isLoading } = useSelector((s) => s.lessons);
  const [selectedLevel, setSelectedLevel] = useState(
    user?.currentLevel || 'HSK1'
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLessons({ level: selectedLevel }));
  }, [selectedLevel, dispatch]);

  const completedCount = lessons.filter((l) => l.isCompleted).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Level" value={user?.currentLevel} icon="📊" />
        <StatCard label="Total XP" value={user?.xp} icon="⭐" />
        <StatCard label="Streak"
          value={<StreakFire streak={user?.streak || 0} />} />
        <StatCard label="Lessons Done"
          value={user?.completedLessons?.length || 0} icon="✅" />
      </div>

      {/* HSK Level Selector */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {HSK_LEVELS.map((lvl) => (
          <button key={lvl}
            onClick={() => setSelectedLevel(lvl)}
            className={`px-4 py-2 rounded-xl font-bold text-sm
              whitespace-nowrap transition
              ${selectedLevel === lvl
                ? 'bg-primary text-white shadow-md'
                : 'bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-300'
              }`}>
            {lvl}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-semibold">{selectedLevel} Progress</span>
          <span className="text-gray-500">
            {completedCount}/{lessons.length} lessons
          </span>
        </div>
        <ProgressBar current={completedCount} total={lessons.length} />
      </div>

      {/* Lesson Grid */}
      {isLoading ? (
        <div className="text-center py-12 text-gray-400">Loading lessons...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson, i) => (
            <motion.div key={lesson._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/lesson/${lesson._id}`}
                className={`block p-5 rounded-2xl border-2 transition
                  transform hover:scale-[1.02] hover:shadow-lg
                  ${lesson.isCompleted
                    ? 'border-primary/30 bg-primary/5'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-card'
                  }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold px-2 py-1
                    rounded-full bg-gradient-to-r text-white
                    ${LEVEL_COLORS[lesson.hskLevel]}`}>
                    {lesson.hskLevel}
                  </span>
                  {lesson.isCompleted && (
                    <span className="text-primary text-lg">✓</span>
                  )}
                </div>
                <h3 className="font-bold text-lg">{lesson.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {lesson.titleChinese}
                </p>
                <div className="flex items-center gap-3 mt-3 text-xs
                                text-gray-400">
                  <span>⏱ {lesson.estimatedMinutes}min</span>
                  <span>⭐ {lesson.xpReward} XP</span>
                  <span className="capitalize">{lesson.category}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl p-4
                    border border-gray-100 dark:border-gray-700">
      <p className="text-gray-400 text-xs font-semibold mb-1">{label}</p>
      <div className="flex items-center gap-2">
        {icon && <span className="text-lg">{icon}</span>}
        <span className="text-xl font-extrabold">{value}</span>
      </div>
    </div>
  );
}