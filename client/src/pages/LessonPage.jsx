import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { lessonService } from '../services/lessonService';

export default function LessonPage() {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    lessonService.getById(id).then(({ data }) => setLesson(data));
  }, [id]);

  if (!lesson) {
    return <div className="text-center py-16 text-gray-400">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <span className="text-sm font-bold text-primary">{lesson.hskLevel}</span>
        <h1 className="text-3xl font-extrabold mt-1">{lesson.title}</h1>
        <p className="text-xl text-gray-400 mt-1">{lesson.titleChinese}</p>
        <p className="text-gray-500 mt-3">{lesson.description}</p>
      </motion.div>

      {/* Content */}
      {lesson.content?.introduction && (
        <div className="mt-8 bg-white dark:bg-dark-card rounded-2xl p-6
                        border border-gray-100 dark:border-gray-700">
          <h2 className="font-bold text-lg mb-3">Introduction</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {lesson.content.introduction}
          </p>
        </div>
      )}

      {/* Key Vocabulary */}
      {lesson.vocabularyIds?.length > 0 && (
        <div className="mt-8">
          <h2 className="font-bold text-lg mb-4">Key Vocabulary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {lesson.vocabularyIds.map((v) => (
              <div key={v._id}
                className="bg-white dark:bg-dark-card rounded-xl p-4
                           border border-gray-100 dark:border-gray-700
                           hover:shadow-md transition">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold">{v.hanzi}</span>
                  <span className="text-primary text-sm">{v.pinyin}</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">{v.meaning}</p>
                {v.meaningVi && (
                  <p className="text-gray-400 text-xs">🇻🇳 {v.meaningVi}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dialogues */}
      {lesson.content?.dialogues?.length > 0 && (
        <div className="mt-8">
          <h2 className="font-bold text-lg mb-4">Dialogue</h2>
          <div className="space-y-3">
            {lesson.content.dialogues.map((d, i) => (
              <div key={i}
                className={`rounded-2xl p-4 max-w-[80%]
                  ${i % 2 === 0
                    ? 'bg-primary/10 mr-auto rounded-bl-sm'
                    : 'bg-secondary/10 ml-auto rounded-br-sm'
                  }`}>
                <p className="text-xs font-bold text-gray-400 mb-1">
                  {d.speaker}
                </p>
                <p className="text-lg font-bold">{d.chinese}</p>
                <p className="text-sm text-primary">{d.pinyin}</p>
                <p className="text-sm text-gray-500 mt-1">{d.english}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Start Exercise Button */}
      <div className="mt-10 text-center">
        <Link to={`/exercise/${lesson._id}`}
          className="inline-block bg-primary text-white px-10 py-4
                     rounded-2xl font-bold text-lg hover:bg-primary-dark
                     transition shadow-lg shadow-primary/30
                     transform hover:scale-105">
          Start Exercises →
        </Link>
      </div>
    </div>
  );
}