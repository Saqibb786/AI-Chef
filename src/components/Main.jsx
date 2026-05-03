import React from 'react'

function Main() {
    const [ingredientsList, setIngredientsList] = React.useState([])
    
    const ingredientsListItems = ingredientsList.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        
        setIngredientsList(prevIngredients => [...prevIngredients, newIngredient])
        
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

            {ingredientsList.length > 0 ? 
                <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section> : null}
        </main>
  )
}

export default Main