import { Link } from '@tanstack/react-router';
import { navLinks } from './_constants';

const Header = () => {
  return (
    <header className=" bg-dark-400">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl text-light-800">
          Logo
        </Link>
        <nav>
          {navLinks.map((e) => (
            <Link
              to={e.to}
              className="text-light-800 opacity-[0.5] ml-4 duration-500 hover:!opacity-[1] [&.active]:!opacity-[1]"
              key={e.label}
            >
              {e.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
