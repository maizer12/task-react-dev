import { Link } from '@tanstack/react-router';
import { Navbar } from './Navbar';
import { useAuth } from '../../features/auth/hooks/useAuth';
import UserProfile from './UserProfile';
import LoadingSpinner from '../components/LoadingSpinner';
import { container } from 'tsyringe';
import { AuthService } from '../../core/services/authService';

const Header = () => {
  const authService = container.resolve(AuthService);
  const { user, loading } = useAuth();

  const handleLogout = () => {
    authService.logout();
  };

  const renderUserProfile = () => {
    if (loading || !user) {
      return <LoadingSpinner />;
    }
    return <UserProfile user={user} onLogout={handleLogout} />;
  };

  return (
    <header className="bg-dark-400 min-h-[72px] flex items-center">
      <div className="container py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl text-light-800">
          Logo
        </Link>
        {user || loading ? renderUserProfile() : <Navbar />}
      </div>
    </header>
  );
};

export default Header;
