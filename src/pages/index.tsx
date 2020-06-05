import React from 'react';
import '../assets/css/index.css';
import {Hero} from '../components/Hero';
import Layout from '../components/Layout';

const Index = (): JSX.Element => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Index;
