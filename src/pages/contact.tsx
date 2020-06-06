import React from 'react';
import '../assets/css/contact.css';
import Layout from '../components/Layout';

const Contact = (): JSX.Element => {
  return (
    <Layout>
      <form name="contact-iiitu-glug" className="contact-form" method="POST" data-netlify="true">
        <h2>Get In Touch</h2>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required placeholder="Enter your name" />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required placeholder="Enter your email" />
        </div>
        <div className="input">
          <label htmlFor="name">Message</label>
          <textarea name="message" required placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default Contact;
