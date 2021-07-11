import React from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import LandingPage from './LandingPage/LandingPage';
import CoffeeCatalog from './CoffeeCatalog/CoffeeCatalog';
import Footer from './Footer/Footer';
import CreateRecipe from './CreateRecipe/CreateRecipe';
import { set } from 'date-fns';

export default class App extends React.Component {
  state = {
    recipes: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:8000/recipes')
    .then(res => res.json())
    .then(res => this.setState({recipes:res}))  
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

  search = () => {
    return this.state.recipes.filter((recipe) => recipe.coffeeName.toLowerCase().includes(this.state.searchTerm))
  }

  setSearchTerm = (term) => {
    this.setState({searchTerm: term})
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
            <CoffeeCatalog setSearchTerm={this.setSearchTerm} recipes={this.search()}/>
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