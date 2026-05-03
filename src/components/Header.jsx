import React from 'react'
import AiChefIcon from "../assets/ai-chef-icon.png"

function Header() {
  return (
    <header className='header'>
        <img src={AiChefIcon} className='header-logo' alt="ai-chef icon" />
        <h1 className='header-title'>AI Chef</h1>
    </header>
  )
}

export default Header