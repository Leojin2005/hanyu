import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import StreakFire from './StreakFire';

export default function Navbar() {
  const { user } = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-dark-card
                    border-b border-gray-200 dark:border-gray-700 h-16">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <Link to={user ? '/dashboard' : '/'} className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-primary">
            汉字Hero
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/vocabulary"
                className="text-sm font-semibold text-gray-600
                           dark:text-gray-300 hover:text-primary transition">
                Vocabulary
              </Link>
              <Link to="/leaderboard"
                className="text-sm font-semibold text-gray-600
                           dark:text-gray-300 hover:text-primary transition">
                Leaderboard
              </Link>
              <StreakFire streak={user.streak} />
              <div className="bg-accent text-white text-xs font-bold
                              px-2 py-1 rounded-full">
                {user.xp} XP
              </div>
              <button onClick={handleLogout}
                className="text-sm text-gray-500 hover:text-danger transition">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login"
                className="text-sm font-semibold text-gray-600
                           hover:text-primary transition">
                Login
              </Link>
              <Link to="/register"
                className="bg-primary text-white px-4 py-2
                           rounded-xl font-bold text-sm
                           hover:bg-primary-dark transition">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}