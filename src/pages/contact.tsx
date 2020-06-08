import React from 'react';
import '../assets/css/contact.css';
import Layout from '../components/Layout';

const Contact = (): JSX.Element => {
  return (
    <Layout>
      <div className="contact">
        <h2>Join Us On Discord</h2>
        <iframe src="https://discordapp.com/widget?id=716979242897899541&theme=dark" />
        <p>Other Handles will be added soon...</p>
      </div>
    </Layout>
  );
};

export default Contact;
