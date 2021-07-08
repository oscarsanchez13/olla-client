import React from 'react';
import './CoffeeCatalog.css';
import Recipe from '../Recipe/Recipe';

function CoffeeCatalog(props) {
  return (
    <div className='main'>
      <header role="banner">
        <h1>Coffee Masterpieces</h1>
      </header>
      <section>
        <form className="search" onSubmit={
          (e) => {
            e.preventDefault();
            props.setSearchTerm(e.target.childNodes[0].value)
          } 
        }>
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </section>
      {props.recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe}/>)}
    </div>
  );
}

export default CoffeeCatalog;