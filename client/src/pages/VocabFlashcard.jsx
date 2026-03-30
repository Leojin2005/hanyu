import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchVocab } from '../store/vocabSlice';
import { vocabService } from '../services/vocabService';
import toast from 'react-hot-toast';

export default function VocabFlashcard() {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((s) => s.vocab);
  const [level, setLevel] = useState('HSK1');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [favSet, setFavSet] = useState(new Set());

  useEffect(() => {
    dispatch(fetchVocab({ level }));
  }, [level, dispatch]);

  // Load favorites
  useEffect(() => {
    vocabService.getFavorites().then(({ data }) => {
      setFavSet(new Set(data.map((f) => f.vocabularyId?._id)));
    });
  }, []);

  const card = items[currentIdx];

  const handleFavorite = async () => {
    if (!card) return;
    const { data } = await vocabService.toggleFavorite(card._id);
    if (data.action === 'added') {
      setFavSet((s) => new Set(s).add(card._id));
      toast.success('Added to favorites!');
    } else {
      setFavSet((s) => { const n = new Set(s); n.delete(card._id); return n; });
      toast.success('Removed from favorites');
    }
  };

  const next = () => {
    setIsFlipped(false);
    setCurrentIdx((i) => (i + 1) % items.length);
  };

  const prev = () => {
    setIsFlipped(false);
    setCurrentIdx((i) => (i - 1 + items.length) % items.length);
  };

  // TTS: speak Chinese
  const speak = (text) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = 0.8;
    speechSynthesis.speak(u);
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <h1 className="text-2xl font-extrabold text-center mb-6">
        Vocabulary Flashcards
      </h1>

      {/* Level selector */}
      <div className="flex gap-2 justify-center mb-8 flex-wrap">
        {['HSK1','HSK2','HSK3','HSK4','HSK5','HSK6'].map((l) => (
          <button key={l} onClick={() => { setLevel(l); setCurrentIdx(0); }}
            className={`px-3 py-1 rounded-lg text-sm font-bold transition
              ${level === l
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-dark-card'}`}>
            {l}
          </button>
        ))}
      </div>

      {isLoading || !card ? (
        <div className="text-center text-gray-400 py-16">Loading...</div>
      ) : (
        <>
          <div className="perspective-1000 mb-6"
            onClick={() => setIsFlipped(!isFlipped)}>
            <AnimatePresence mode="wait">
              <motion.div key={`${currentIdx}-${isFlipped}`}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-dark-card rounded-3xl
                           p-10 shadow-xl border border-gray-100
                           dark:border-gray-700 min-h-[280px]
                           flex flex-col items-center justify-center
                           cursor-pointer select-none"
              >
                {!isFlipped ? (
                  <>
                    <p className="text-6xl font-bold mb-4">{card.hanzi}</p>
                    <p className="text-primary text-xl">{card.pinyin}</p>
                    <p className="text-gray-400 text-sm mt-4">
                      Tap to reveal meaning
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-3xl font-bold mb-2">{card.meaning}</p>
                    {card.meaningVi && (
                      <p className="text-lg text-gray-400">🇻🇳 {card.meaningVi}</p>
                    )}
                    {card.examples?.[0] && (
                      <div className="mt-4 text-center">
                        <p className="text-lg">{card.examples[0].chinese}</p>
                        <p className="text-sm text-primary">
                          {card.examples[0].pinyin}
                        </p>
                        <p className="text-sm text-gray-400">
                          {card.examples[0].english}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button onClick={prev}
              className="w-12 h-12 rounded-full bg-gray-100
                         dark:bg-dark-card flex items-center justify-center
                         text-xl hover:bg-gray-200 transition">
              ←
            </button>
            <button onClick={() => speak(card.hanzi)}
              className="w-12 h-12 rounded-full bg-secondary/20
                         flex items-center justify-center text-xl
                         hover:bg-secondary/30 transition"
              title="Listen">
              🔊
            </button>
            <button onClick={handleFavorite}
              className={`w-12 h-12 rounded-full flex items-center
                justify-center text-xl transition
                ${favSet.has(card._id)
                  ? 'bg-danger/20 text-danger'
                  : 'bg-gray-100 dark:bg-dark-card'}`}>
              {favSet.has(card._id) ? '❤️' : '🤍'}
            </button>
            <button onClick={next}
              className="w-12 h-12 rounded-full bg-gray-100
                         dark:bg-dark-card flex items-center justify-center
                         text-xl hover:bg-gray-200 transition">
              →
            </button>
          </div>

          <p className="text-center text-gray-400 text-sm mt-4">
            {currentIdx + 1} / {items.length}
          </p>
        </>
      )}
    </div>
  );
}