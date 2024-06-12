import { ReactNode } from '@tanstack/react-router';
import Header from './Header';

export const Layout = ({ children }: { children: ReactNode }) => {
  const date = new Date();

  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className="bg-dark-400 py-1">
        <p className="container text-light-700">Copyright ©{date.getFullYear()}</p>
      </footer>
    </>
  );
};
