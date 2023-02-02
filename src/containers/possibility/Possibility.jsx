import React from 'react'
import possibilityimage from "../../asset/grenade-box.jpg"
import './possibility.css'

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityimage} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access To Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>The birth of google brought about different oppurtunities that a lot of people took advantage of to better themselves, the birth of AI is to take those oppurtunities a notch higher it might not be noticed rn but it for sure will breed endless possibilities AI is the future</p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  )
}
export default Possibility