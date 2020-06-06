import React from 'react';
import '../assets/css/layout.css';
import Footer from './Footer';
import Header from './Header';

export default function Layout({children}: any): JSX.Element {
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
