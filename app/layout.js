import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export default function layout({children}) {
  return (
    <div>
      <Navbar/>
        {children}
      <Footer/>
    </div>
  )
}

export const metadata = {
  title: "SBShop | NextJS",
  description: "Generated by create next app",
};
