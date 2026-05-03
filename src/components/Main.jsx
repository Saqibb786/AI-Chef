import React from 'react'

function Main() {
    const [ingredientsList, setIngredientsList] = React.useState([])
    
    const ingredientsListItems = ingredientsList.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        
        setIngredientsList(prevIngredients => [...prevIngredients, newIngredient])
        
    }

  return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name='ingredient'
                />
                <button>Add ingredient</button>
            </form>

            {ingredientsListItems}
        </main>
  )
}

export default Main