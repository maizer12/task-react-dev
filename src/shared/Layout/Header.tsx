import { Link } from '@tanstack/react-router';
import { Navbar } from './Navbar';
import { useAuth } from '../../features/auth/hooks/useAuth';

const Header = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <header className=" bg-dark-400">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl text-light-800">
          Logo
        </Link>
        {isAuthenticated ? <p>{user?.email}</p> : <Navbar />}
      </div>
    </header>
  );
};

export default Header;
