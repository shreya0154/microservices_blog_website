
import React, { type FC } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='bg-black min-h-screen flex flex-col'>

      <Navbar />
      <main className='flex-grow text-white p-6 pt-20'>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
