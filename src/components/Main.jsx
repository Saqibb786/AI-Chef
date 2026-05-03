import React, { useState } from 'react'
import AiRecipe from './AiRecipe'
import IngredientsList from './IngredientsList'

function Main() {    
    const [ingredientsList, setIngredientsList] = React.useState(["all the main spices", "water", "milk", "floor"])
    const [recipeShown, setRecipeShown] = useState(false)


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        
        !newIngredient && setIngredientsList(prevIngredients => [...prevIngredients, newIngredient])
        
    }

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }


  return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name='ingredient'
                />
                <button>Add ingredient</button>
            </form>

            {ingredientsList.length > 0 && 
                <IngredientsList 
                ingredientsList={ingredientsList}
                toggleRecipeShown={toggleRecipeShown} />
                }

            {recipeShown &&<AiRecipe recipeShown={recipeShown} />}
            
        </main>
  )
}

export default Main