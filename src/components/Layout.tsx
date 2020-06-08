import React from 'react';
import '../assets/css/layout.css';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props: {children: HTMLDivElement | any}): JSX.Element {
  const {children} = props;
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
