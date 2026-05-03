import React from 'react'

function TextForm(props) {
  return (
    <form className="add-ingredient-form" action={props.addIngredient}>
    <input 
        type={props.type}
        placeholder={props.placeholder}
        aria-label={`Add ${props['aria-label']}`}
        name={props.name}
    />
    <button>{props.buttonText}</button>
    </form>
  )
}

export default TextForm