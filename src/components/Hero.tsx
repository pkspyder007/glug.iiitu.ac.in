import {Link} from 'gatsby'
import React from 'react'
import '../assets/css/hero.css'

export const Hero = (): JSX.Element => {
  return (
    <div className="hero">
      <h1>Welcome to GLUG-IIITU</h1>
      <div className="info">
        <h3>About Us</h3>
        <p>
          GLUG-IIITU is a small community of hackers from IIIT Una who believe in the power of open source software.
          It is an open to all organisation which aims to promote use of and contribution to open source projects.
          <b>GLUG-IIITU</b> is a moniker for GNU/Linux User Group IIIT Una.
        </p>
      </div>
      <div className="info">
        <h3>Getting Started</h3>
        <p>
          This website contains multiple articles on just how to begin your journey into the world of open source but also how to sharpen your skills as a software developer leveraging FOSS.
          <br />
          You can begin by browing through out <Link to="/blog">articles</Link>.
        </p>
      </div>
      <div className="info">
        <h3>Contributing to GLUG-IIITU</h3>
        <p>
          This website is powered by Gatsby which uses React.js. You can find the code for this website on our github page.
          To contribute follow the instructions in the <a>README.md</a> on its github page.
          <br /> <br />
          Apart from this GLUG-IIITU holds multiple other FOSS projects on github. You can start by browsing through the <a>list of projects</a> on the github page.
        </p>
      </div>
    </div>
  )
}
