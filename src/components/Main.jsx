import React, { useState } from 'react'
import AiRecipe from './AiRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromMistral } from '../../ai'

function Main() {    
    const [ingredientsList, setIngredientsList] = React.useState(["all the main spices", "water", "milk", "floor"])
    const [recipe, setRecipe] = useState("")


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        
        !newIngredient && setIngredientsList(prevIngredients => [...prevIngredients, newIngredient])
        
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredientsList)
        console.log(recipeMarkdown)
        setRecipe((recipeMarkdown))
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
                getRecipe={getRecipe} />
                }

            {recipe && <AiRecipe recipe={recipe} />}
            
        </main>
  )
}

export default Main