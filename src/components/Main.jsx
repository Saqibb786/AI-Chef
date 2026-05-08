import React, { useState } from 'react'
import AiRecipe from './AiRecipe'
import IngredientsList from './IngredientsList'
import TextForm from './TextForm'
import { getRecipeFromMistral, getRecipeFromGroq } from '../../ai'

function Main() {    
    const [ingredientsList, setIngredientsList] = React.useState([])
    const [context, setContext] = React.useState("")
    const [recipe, setRecipe] = useState("")

    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if(recipe !== "" & recipeSection.current !== null) {
            recipeSection.current.scrollIntoView()
        }
    }, [recipe])


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        
        newIngredient && setIngredientsList(prevIngredients => [...prevIngredients, newIngredient])
        
    }
    function addContext(formData) {
        const newContext = formData.get("context")
        
        newContext && setContext(newContext)
        
    }

    async function getRecipe() {
        // const recipeMarkdown = await getRecipeFromMistral(ingredientsList)
        const recipeMarkdown = await getRecipeFromGroq(ingredientsList, context)
        setRecipe((recipeMarkdown))
    }


  return (
        <main>
            <TextForm
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
                buttonText="Add ingredient"
                addIngredient={addIngredient}

            />
            <TextForm
                type="text"
                placeholder="e.g. Prefer local Pakistani Recipes "
                aria-label="Add context (Optional)"
                name="context"
                buttonText="Add context"
                addIngredient={addContext}
            />


            {ingredientsList.length > 0 && 
                <IngredientsList 
                ref={recipeSection}
                ingredientsList={ingredientsList}
                context={context}
                getRecipe={getRecipe} />
                }

            {recipe && <AiRecipe recipe={recipe} />}
            
        </main>
  )
}

export default Main