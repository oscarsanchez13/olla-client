import React from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import LandingPage from './LandingPage/LandingPage';
import CoffeeCatalog from './CoffeeCatalog/CoffeeCatalog';
import Footer from './Footer/Footer';
import CreateRecipe from './CreateRecipe/CreateRecipe';

export default class App extends React.Component {
  state = {
    recipes: [
      {
        id: 1,
        coffeeName: 'Cafe De Olla',
        coffeeImage: './images/cafe-de-olla.jpg',
        description: 'Simmered with a cinnamon stick, traditional Mexican coffee uses piloncillo (unrefined cane sugar) and is served in a clay mug, which locals believe brings out coffee\'s flavors.',
        ingredients: '',
        instructions: '',
      },
      {
        id: 2,
        coffeeName: 'Frappe',
        coffeeImage: '',
        description: 'Simmered with a cinnamon stick, traditional Mexican coffee uses piloncillo (unrefined cane sugar) and is served in a clay mug, which locals believe brings out coffee\'s flavors.',
        ingredients: '',
        instructions: '',
      }
    ]
  }

  componentDidMount() {
    // get recipes from backend
  }

  addRecipe = (recipe) => {
    console.log(recipe)
    const newRecipes = this.state.recipes;
    newRecipes.push(recipe);
    console.log(newRecipes)
    this.setState({
      recipes: newRecipes
    })
    // add endpoint
  }

  render() {
    return (
      <div>
        <main>
          <header>
            <h1 className="logo">
              <Link to='/'>OLLA</Link>
            </h1>          
            <Nav/>
          </header>   
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/discover'>
            <CoffeeCatalog recipes={this.state.recipes}/>
          </Route>
          <Route path='/create' render={
            () => <CreateRecipe addRecipe={this.addRecipe}/>
          }/>                        
        </main>
        <Footer/>        
      </div>
    );
  }  
}