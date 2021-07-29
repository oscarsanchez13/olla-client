import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CreateRecipe.css';

class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeName: '',
      coffeeImage: '',
      description: '',
      ingredients: '',
      instruction: ''      
    }
  }
  
  handleSubmit() {
    this.props.history.push('/discover')
  }
  
  render() {
    console.log(this.props.history)    
      return (
      <div className='create-recipe'>
        <header>
          <h1>Create recipe</h1>
        </header>
        <div>
          <form id="create-recipe" onSubmit={(e) => {
                  this.props.addRecipe(this.state);
                  this.handleSubmit(); 
                  e.preventDefault();
                  }}>
            <section className="form-section overview-section">
              <label htmlFor="coffee-name">Coffee Name</label>
              <input 
                type="text" 
                value={this.state.coffeeName} 
                onChange={(e) => this.setState({coffeeName: e.target.value})} 
                name="coffee-name" 
                placeholder="Waker Upper" required/>
            </section>
            <section className="form-section image-section">
              <label htmlFor="img">Coffee Image(<em>optional</em>)</label>
              <input 
                type="url" 
                value={this.state.coffeeImage} 
                onChange={(e) => this.setState({coffeeImage: e.target.value})} 
                name="url" 
                placeholder='Image URL'/>
            </section>
            <section className="form-section overview-section">
              <label htmlFor="coffee-description">Description</label>
              <textarea 
                value={this.state.description} 
                onChange={(e) => this.setState({description: e.target.value})}
                name="coffee-description" 
                rows="15" 
                placeholder='To the average Westerner, the thought of a cup of coffee mixed with any bit of egg might sound odd, and possibly unpleasant. But coffee with eggs is not uncommon in other cultures, as adding the protein-packed ingredient to coffee makes a rich and nutritious beverage, ideal for a pick-me-up and a flavorful boost of energy.'
                required />
            </section>
            <section className="form-section overview-section">
              <label htmlFor="ingredients">Ingredients</label>
              <textarea 
                value={this.state.ingredients} 
                onChange={(e) => this.setState({ingredients: e.target.value})}
                name="ingredients" 
                rows="15" 
                placeholder=' - 2 Large egg yolks
                - 1/2 cup sweetened condensed milk
                - 1 teaspoon of vanilla extract
                - 60 grams French roast coffee, finely ground
                - 4 1/8 cups water, hot
                - Cocoa powder' required/>
            </section>
            <section className="form-section overview-section">
              <label htmlFor="recipe">Recipe Intructions</label>
              <textarea 
                value={this.state.instruction} 
                onChange={(e) => this.setState({instruction: e.target.value})}
                name="recipe" 
                rows="15"
                placeholder=' 1. Combine the egg yolk, condensed milk, and vanilla in the bowl of a standing mixer. Beat with the wire whisker on high for about 10 minutes. The appearance should be similar to a cake batter, not especially frothy.
                2. To test for the right consistency, spoon a small amount of the foam on top of a glass of water. If it floats it has the right consistency. If not, whip it for a few more minutes.
                3. Brew the coffee according to your preferred method. Reserve about half a cup for later use.
                4. Gently spoon some of the whipped egg foam onto the top of each coffee, 1 to 2 tablespoons per cup.
                5. Pour a bit of the reserved coffee through the foam in each cup. Dust with cocoa powder is desired. Serve immediately.'
                required/>
            </section>                               
            <section className="button-section center">
              <button type="submit" >Submit</button>
            </section>
          </form>
        </div>
      </div>
    );
  }  
}

export default withRouter(CreateRecipe);