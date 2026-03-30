import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../store/authSlice';
import toast from 'react-hot-toast';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((s) => s.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser(form));
    if (loginUser.fulfilled.match(result)) {
      toast.success('Welcome back!');
      navigate('/dashboard');
    } else {
      toast.error(result.payload || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-dark-card
                      rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <input type="password" required
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
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-500">
          No account?{' '}
          <Link to="/register" className="text-primary font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}