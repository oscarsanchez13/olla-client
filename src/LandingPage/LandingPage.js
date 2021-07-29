import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className='LandingPage'>
      <section className='form-section'>
        <header>
            <h3>About OLLA</h3>
        </header>        
        <p>OLLA provides a place where coffee aficionados can save their favorite coffee recipes, learn more about such drinks, find out whether they would like them, and submit their own recipes for others to try!  and will allow users to submit recipes by filling out a easy to follow form.</p>
      </section>
      <section className='form-section'>
        <header>
            <h3>Discover Brews</h3>
        </header>        
        {/*<video width='320' height='240' className='center' autoPlay loop>
          <source src='./img/screen-discover.webm' type='video/webm'></source>
        </video>*/}
        <div className='center'>
          <iframe width="420" height="315" src="https://www.youtube.com/embed/AK2_Ftrj0SE?autoplay=1&loop=1&controls=0" title='screen record'></iframe>
        </div>
        <p>Find new coffees to try! You can broaden your knowledge of other cultures' caffeinated beverages or maybe what's in your neighbors' wacky drink.</p>
      </section>
      <section>
        <header>
            <h3>Share Your Creations!</h3>
        </header>
        {/* <div className='center'>
          <img src='./img/share-screen.PNG' alt='share screen'></img>
        </div> */}
        <p>Be part of the community by submitting your favorite creation for others to try!</p>
      </section>
    </div>
  );
}

export default LandingPage;