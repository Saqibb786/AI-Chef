import React from 'react'
import ContextText from './ContextText'

function IngredientsList(props) {

        const ingredientsListItems = props.ingredientsList.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
  return (
            <section>
                <h2 className='ingredients-title'>Ingredients on hand:</h2>
                <ul className="ingredients-list"
                aria-live="polite">{ingredientsListItems}</ul>
                {props.context.length > 0 && <ContextText context={props.context} />}
                {props.ingredientsList.length > 3 && <div className="get-recipe-container">
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>
                        Get a recipe
                    </button>
                </div>}
            </section>
  )
}

export default IngredientsList