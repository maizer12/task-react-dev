import { ReactNode } from '@tanstack/react-router';
import Header from './Header';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);
