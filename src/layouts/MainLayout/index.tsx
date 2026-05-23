import React from 'react';
import { Sidebar } from '../Sidebar'; // Bir qadam tepaga chiqib Sidebar'ni oladi

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex bg-[#080b11] min-h-screen text-white">
      {/* Chap tomondagi doimiy Sidebar */}
      <Sidebar />
      
      {/* O'ng tomondagi asosiy sahifalar kontenti */}
      <main className="flex-1 h-screen overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
};