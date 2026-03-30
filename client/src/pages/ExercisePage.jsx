import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { lessonService } from '../services/lessonService';
import { updateUserXp } from '../store/authSlice';
import ProgressBar from '../components/ProgressBar';
import toast from 'react-hot-toast';

export default function ExercisePage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [exercises, setExercises] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [startTime, setStartTime] = useState(Date.now());
  const [fillAnswer, setFillAnswer] = useState('');
  const [reorderSelected, setReorderSelected] = useState([]);

  useEffect(() => {
    lessonService.getExercises(lessonId).then(({ data }) => {
      setExercises(data);
    });
  }, [lessonId]);

  const current = exercises[currentIdx];

  const handleSelect = (option) => {
    if (isCorrect !== null) return; // already answered
    setSelected(option.text);
    const correct = option.isCorrect;
    setIsCorrect(correct);

    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    setAnswers((prev) => [...prev, {
      exerciseId: current._id,
      userAnswer: option.text,
      timeSpent,
    }]);

    if (correct) {
      toast.success('Correct! 🎉', { duration: 1000 });
    } else {
      toast.error('Not quite! 😅', { duration: 1000 });
    }
  };

  const handleNext = async () => {
    if (currentIdx < exercises.length - 1) {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setIsCorrect(null);
      setFillAnswer('');
      setReorderSelected([]);
      setStartTime(Date.now());
    } else {
      // Submit all answers
      try {
        const { data } = await lessonService.submitExercise({
          lessonId,
          answers,
        });
        setResultData(data);
        setShowResult(true);
        dispatch(updateUserXp({
          xp: data.newXpTotal,
          level: data.newLevel,
          streak: data.streak,
        }));
      } catch (err) {
        toast.error('Failed to submit');
      }
    }
  };

  // Result screen
  if (showResult && resultData) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="text-6xl mb-4">
            {resultData.isPassed ? '🏆' : '💪'}
          </div>
          <h2 className="text-3xl font-extrabold mb-2">
            {resultData.isPassed ? 'Lesson Complete!' : 'Keep Practicing!'}
          </h2>
          <p className="text-gray-500 mb-6">
            Score: {resultData.result.score}%
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white dark:bg-dark-card rounded-xl p-4">
              <p className="text-2xl font-bold text-primary">
                +{resultData.xpEarned}
              </p>
              <p className="text-xs text-gray-400">XP Earned</p>
            </div>
            <div className="bg-white dark:bg-dark-card rounded-xl p-4">
              <p className="text-2xl font-bold">
                {resultData.result.correctAnswers}/
                {resultData.result.totalQuestions}
              </p>
              <p className="text-xs text-gray-400">Correct</p>
            </div>
            <div className="bg-white dark:bg-dark-card rounded-xl p-4">
              <p className="text-2xl font-bold text-accent">
                🔥 {resultData.streak}
              </p>
              <p className="text-xs text-gray-400">Streak</p>
            </div>
          </div>

          {resultData.newBadges?.length > 0 && (
            <div className="mb-6 p-4 bg-accent/10 rounded-xl">
              <p className="font-bold mb-2">New Badges!</p>
              {resultData.newBadges.map((b, i) => (
                <span key={i} className="text-lg mr-2">
                  {b.icon} {b.name}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-3 justify-center">
            <button onClick={() => navigate('/dashboard')}
              className="px-6 py-3 rounded-xl border-2 border-gray-300
                         font-bold hover:border-primary transition">
              Dashboard
            </button>
            <button onClick={() => {
              setCurrentIdx(0); setSelected(null);
              setIsCorrect(null); setAnswers([]);
              setShowResult(false); setStartTime(Date.now());
              setReorderSelected([]);
            }}
              className="px-6 py-3 rounded-xl bg-primary text-white
                         font-bold hover:bg-primary-dark transition">
              Try Again
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="text-center py-16 text-gray-400">
        Loading exercises...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Progress */}
      <div className="mb-6">
        <ProgressBar current={currentIdx + 1} total={exercises.length} />
        <p className="text-sm text-gray-400 mt-1 text-center">
          {currentIdx + 1} / {exercises.length}
        </p>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div key={currentIdx}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white dark:bg-dark-card rounded-2xl
                     p-8 shadow-lg border border-gray-100
                     dark:border-gray-700"
        >
          <p className="text-sm text-gray-400 uppercase font-bold mb-2">
            {current.type.replace('_', ' ')}
          </p>

          {/* Chinese character big display */}
          {current.question.chinese && (
            <p className="text-5xl font-bold text-center my-6">
              {current.question.chinese}
            </p>
          )}
          {current.question.pinyin && (
            <p className="text-center text-gray-400 mb-4">
              {current.question.pinyin}
            </p>
          )}
          <p className="text-lg font-semibold mb-6 text-center">
            {current.question.text}
          </p>

          {/* Options / Fill Blank / Reorder */}
          {current.type === 'fill_blank' ? (
            <div className="space-y-3">
              <input
                type="text"
                value={fillAnswer}
                onChange={(e) => setFillAnswer(e.target.value)}
                placeholder="Type your answer"
                className="w-full px-4 py-3 rounded-xl border-2
                           border-gray-200 dark:border-gray-600
                           dark:bg-dark-bg focus:border-primary
                           outline-none transition"
              />
              <button
                onClick={() => {
                  if (isCorrect !== null) return;

                  const correctOpt = current.options?.find((o) => o.isCorrect);
                  const userText = fillAnswer.trim();

                  if (!userText) {
                    toast.error('Please enter your answer first.');
                    return;
                  }

                  const correct = correctOpt
                    ? userText.toLowerCase() === correctOpt.text.toLowerCase()
                    : false;

                  setSelected(userText);
                  setIsCorrect(correct);

                  const timeSpent = Math.round((Date.now() - startTime) / 1000);
                  setAnswers((prev) => [
                    ...prev,
                    {
                      exerciseId: current._id,
                      userAnswer: userText,
                      timeSpent,
                    },
                  ]);

                  if (correct) {
                    toast.success('Correct! 🎉', { duration: 1000 });
                  } else {
                    toast.error('Not quite! 😅', { duration: 1000 });
                  }
                }}
                className="w-full text-left px-5 py-4 rounded-xl
                           border-2 font-semibold transition bg-white
                           dark:bg-dark-card border-gray-200 dark:border-gray-600
                           hover:border-primary/50"
                disabled={isCorrect !== null}
              >
                Submit Answer
              </button>
            </div>
          ) : current.type === 'reorder' ? (
            <div className="space-y-4">
              {/* Selected order display */}
              <div className="bg-gray-50 dark:bg-dark-bg rounded-xl p-4 min-h-16 flex flex-wrap gap-2 items-center">
                {reorderSelected.length > 0 ? (
                  reorderSelected.map((word, i) => (
                    <motion.div key={i}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="bg-primary text-white px-3 py-1 rounded-lg font-semibold text-sm flex items-center gap-2 group"
                    >
                      {i + 1}. {word}
                      <button
                        onClick={() => {
                          setReorderSelected(reorderSelected.filter((_, idx) => idx !== i));
                        }}
                        className="opacity-0 group-hover:opacity-100 transition text-lg cursor-pointer"
                      >
                        ✕
                      </button>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-gray-400">Click words to arrange them →</p>
                )}
              </div>

              {/* Scrambled words */}
              <div className="flex flex-wrap gap-2">
                {current.scrambledWords?.map((word, i) => {
                  const isSelected = reorderSelected.includes(word);
                  return (
                    <motion.button key={i}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        if (isCorrect !== null) return;
                        if (isSelected) {
                          setReorderSelected(reorderSelected.filter(w => w !== word));
                        } else {
                          setReorderSelected([...reorderSelected, word]);
                        }
                      }}
                      className={`px-4 py-2 rounded-xl font-semibold transition ${
                        isSelected
                          ? 'bg-primary/30 border-2 border-primary text-primary'
                          : 'bg-gray-100 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-primary'
                      }`}
                      disabled={isCorrect !== null}
                    >
                      {word}
                    </motion.button>
                  );
                })}
              </div>

              {/* Submit button */}
              <button
                onClick={() => {
                  if (isCorrect !== null) return;
                  if (reorderSelected.length === 0) {
                    toast.error('Please select all words in order');
                    return;
                  }

                  const correct = JSON.stringify(reorderSelected) === JSON.stringify(current.correctOrder);
                  setIsCorrect(correct);

                  const timeSpent = Math.round((Date.now() - startTime) / 1000);
                  setAnswers((prev) => [
                    ...prev,
                    {
                      exerciseId: current._id,
                      userAnswer: reorderSelected.join(' '),
                      timeSpent,
                    },
                  ]);

                  if (correct) {
                    toast.success('Correct order! 🎉', { duration: 1000 });
                  } else {
                    toast.error('Wrong order! 😅', { duration: 1000 });
                  }
                }}
                disabled={isCorrect !== null || reorderSelected.length === 0}
                className="w-full py-3 rounded-xl bg-primary text-white
                           font-bold hover:bg-primary-dark transition disabled:opacity-50"
              >
                Check Order
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {current.options?.map((opt, i) => {
                let btnClass = `w-full text-left px-5 py-4 rounded-xl
                  border-2 font-semibold transition `;

                if (selected === opt.text) {
                  btnClass += isCorrect
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-danger bg-danger/10 text-danger';
                } else if (isCorrect !== null && opt.isCorrect) {
                  btnClass += 'border-primary bg-primary/10 text-primary';
                } else {
                  btnClass += `border-gray-200 dark:border-gray-600
                    hover:border-primary/50`;
                }

                return (
                  <motion.button key={i}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelect(opt)}
                    className={btnClass}
                    disabled={isCorrect !== null}
                  >
                    {opt.text}
                  </motion.button>
                );
              })}
            </div>
          )}

          {/* Explanation + Next */}
          {isCorrect !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              {current.explanation && (
                <p className="text-sm text-gray-500 bg-gray-50
                              dark:bg-dark-bg rounded-xl p-3 mb-4">
                  💡 {current.explanation}
                </p>
              )}
              <button onClick={handleNext}
                className="w-full py-3 rounded-xl bg-primary text-white
                           font-bold hover:bg-primary-dark transition">
                {currentIdx < exercises.length - 1 ? 'Next' : 'See Results'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}