import React from 'react'
import ReactMarkdown from 'react-markdown'

function AiRecipe(props) {


    return (
        <section className='suggested-recipe-container '>
            <h1 className='recipe-section-title'>Chef <span >Groq</span> Recommends:</h1>
            <hr/>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        
        </section>
    )

}

export default AiRecipe