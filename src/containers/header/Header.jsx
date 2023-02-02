import React from 'react'
import './header.css'
import ai from "../../asset/AI.jpg"

function Header() {
  return (
    <div className='gpt3__header Ssection__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          yet bad for any indulgence in travelling, not all thoughts exercise blessing 
          indulgence way everything alteraition boisterous the attachment, party we order allow asked of.
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'></input>
          <button type='button'>Get started</button>
        </div>


        
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='AI' />
      </div>
    </div>
  )
}

export default Header