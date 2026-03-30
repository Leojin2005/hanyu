import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-extrabold mb-4">
          <span className="text-primary">汉字</span>Hero
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Master Chinese from HSK1 to HSK6 with interactive lessons,
          gamified exercises, and AI-powered learning.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/register"
            className="bg-primary text-white px-8 py-4 rounded-2xl
                       font-bold text-lg hover:bg-primary-dark
                       transition transform hover:scale-105
                       shadow-lg shadow-primary/30">
            Start Learning Free
          </Link>
          <Link to="/login"
            className="border-2 border-gray-300 dark:border-gray-600
                       px-8 py-4 rounded-2xl font-bold text-lg
                       hover:border-primary transition">
            I Have an Account
          </Link>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: '📚', title: 'HSK1 → HSK6',
              desc: 'Complete curriculum following official HSK standards' },
            { icon: '🎮', title: 'Gamified',
              desc: 'XP, streaks, badges and leaderboards keep you motivated' },
            { icon: '🤖', title: 'AI Powered',
              desc: 'Practice conversations with AI chatbot' },
          ].map((f, i) => (
            <div key={i}
              className="bg-white dark:bg-dark-card rounded-2xl p-6
                         shadow-md border border-gray-100
                         dark:border-gray-700"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-lg mb-1">{f.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}