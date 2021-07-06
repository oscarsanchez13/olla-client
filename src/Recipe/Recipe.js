import React from 'react';

function Recipe(props) {
    let image = ""
    if (props.recipe.coffeeImage !== '') {
        image = props.recipe.coffeeImage
    }
    return(
        <section>
            <h2>{props.recipe.coffeeName}</h2>            
            <img src={image} alt=''/>
            <p>{props.recipe.description}</p>
            <p>{props.recipe.ingredients}</p>                        
            <p>{props.recipe.instruction}</p>
        </section>
    )
}

export default Recipe;