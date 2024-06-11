import { navLinks } from './_constants';
import { Link } from '@tanstack/react-router';

export const Navbar = () => {
  return (
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
  );
};
