import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import LessonPage from './pages/LessonPage';
import ExercisePage from './pages/ExercisePage';
import VocabFlashcard from './pages/VocabFlashcard';
import Leaderboard from './pages/Leaderboard';
import { restoreSession } from './store/authSlice';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/lesson/:id" element={<LessonPage />} />
            <Route path="/exercise/:lessonId" element={<ExercisePage />} />
            <Route path="/vocabulary" element={<VocabFlashcard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}