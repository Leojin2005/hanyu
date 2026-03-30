import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../store/authSlice';
import toast from 'react-hot-toast';

export default function Register() {
  const [form, setForm] = useState({
    username: '', email: '', password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((s) => s.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser(form));
    if (registerUser.fulfilled.match(result)) {
      toast.success('Account created! Let\'s start learning!');
      navigate('/dashboard');
    } else {
      toast.error(result.payload || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-dark-card
                      rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Username</label>
            <input type="text" required
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2
                         border-gray-200 dark:border-gray-600
                         dark:bg-dark-bg focus:border-primary
                         outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input type="email" required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2
                         border-gray-200 dark:border-gray-600
                         dark:bg-dark-bg focus:border-primary
                         outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input type="password" required minLength={6}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2
                         border-gray-200 dark:border-gray-600
                         dark:bg-dark-bg focus:border-primary
                         outline-none transition" />
          </div>
          <button type="submit" disabled={isLoading}
            className="w-full bg-primary text-white py-3 rounded-xl
                       font-bold text-lg hover:bg-primary-dark
                       transition disabled:opacity-50">
            {isLoading ? 'Creating...' : 'Create Account'}
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}