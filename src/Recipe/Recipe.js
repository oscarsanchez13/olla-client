import React from 'react';

function Recipe(props) {
    let image = "../../images/no-image.jpg"
    if (props.recipe.coffeeImage !== '') {
        image = props.recipe.coffeeImage
    }
    let ingredients = props.recipe.ingredients.split('\n').map((ingridient, idx) => {
        return (<li key={idx}>{ingridient}</li>)
    })

    let instructions = props.recipe.instruction.split('\n').map((instruction,idx) => {
        return (<li key={idx}>{instruction}</li>)
    })
    
    return(
        <section className='form-section'>
            <div className='group'>
                <div className='item'>
                    <img src={image} alt=''/>
                </div>
                <div className='item-double'>
                    <h2 className='center'>{props.recipe.coffeeName}</h2>
                    <p>{props.recipe.description}</p>
                </div>
            </div>
            <div className='item'>
                <h2>Ingredients</h2>
                <ul>{ingredients}</ul>
            </div>
            <div className='item'>
                <h2>Instructions</h2>
                <ol>{instructions}</ol>
            </div>
            <br></br>            
        </section>
    )
}

export default Recipe;