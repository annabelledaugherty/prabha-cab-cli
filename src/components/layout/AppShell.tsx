import { ReactNode } from 'react';
import TopHeader from './TopHeader';
import BottomNav from './BottomNav';
import Footer from './Footer';
import FloatingActionButton from '../ui/FloatingActionButton';

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-dark-50">
      <TopHeader />
      <main className="pt-16 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <BottomNav />
      <FloatingActionButton />
    </div>
  );
}
