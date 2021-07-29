import React from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import LandingPage from './LandingPage/LandingPage';
import CoffeeCatalog from './CoffeeCatalog/CoffeeCatalog';
import Footer from './Footer/Footer';
import CreateRecipe from './CreateRecipe/CreateRecipe';

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
          <header >
            <div className='group'>
              <div className='item'>
                <Link to='/'>
                  <span className='logo'>OLLA</span>
                  <br></br>
                  <span><i>Brew it into existance</i></span>
                </Link>              
              </div>
              <div className='item-double'>
                <Nav/>
              </div>
            </div>            
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