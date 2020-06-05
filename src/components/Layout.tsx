import React from 'react';
import '../assets/css/layout.css';
import Footer from './Footer';
import Header from './Header';

export default function Layout({children}: any) {
  return (
    <>
      <Header />
      <div className="layout">
        {children}
        <Footer />
      </div>
    </>
  );
}
