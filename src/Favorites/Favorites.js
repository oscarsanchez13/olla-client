import React from 'react';
import './Favorites.css';

function Favorites() {
  return (
    <div className='Favorites'>
      <header role="banner">
        <h1>Favorite Masterpieces</h1>
      </header>
      <section>
        <form className="search">
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit"><i className="fa fa-search"></i></button>
          <button type="submit">+ Submit Recipe</button>
        </form>
      </section>
      <section>
        <header>
            <h2>Cafe de OLLA</h2>
            <span className="favorite-heart-character">&#10084;</span>
            <img src="../images/cafe-de-olla.jpg" alt="cafe-de-olla"/>
            <p>Simmered with a cinnamon stick, traditional Mexican coffee uses piloncillo (unrefined cane sugar) and is served in a clay mug, which locals believe brings out coffee's flavors.</p>
        </header>
        <blockquote>[<em>Insert Recipe Here</em>]</blockquote>
      </section>
      <section>
        <header>
            <h2>Frappe</h2>
            <span className="favorite-heart-character">&#10084;</span>
            <p>Invented by a Nescafé representative in 1957, the frappé is a popular summer beverage in Greece, consisting of iced instant coffee
            drowned in milk foam.</p>
        </header>
      </section>
      <section>
        <header>
            <h2>Turk Kahvesi</h2>
            <span className="favorite-heart-character">&#10084;</span>
            <p>Finely ground coffee beans are simmered in a special copper or brass pot called a cezve. Turkish coffee is special in that it is prepared unfiltered, and so the grounds settle to the bottom. Yes, that means you drink it with the grounds.</p>
        </header>
      </section>
    </div>
  );
}

export default Favorites;