import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className='LandingPage'>
      <header role="banner">
        <h1>OLLA</h1>
        <h2>Brew it into existance</h2>
      </header>
      <section>
        <header>
            <h3>About OLLA</h3>
        </header>
        <p>[<em>placeholder for screenshot of OLLA UI</em>]</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>
      <section>
        <header>
            <h3>Discover Brews</h3>
        </header>
        <p>[<em>placeholder for screenshot of coffee recipes</em>]</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>
      <section>
        <header>
            <h3>Share Your Creations!</h3>
        </header>
        <p>[<em>placeholder for screenshot of Submiting Coffee interface</em>]</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>
    </div>
  );
}

export default LandingPage;