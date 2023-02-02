import React from 'react'
import { Feature } from '../../Components'
import './whatGPT3.css'

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text='Why do i feel the need to always put something meaningful into the textarea 
        when all i havee to do is lie an awful lot of paragraphs to the face of my readers and myself too sha but anyhow we move'/> 
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imaginations</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title='Chatbots' text='we as people our opinions dont matter unless we make them matter.'/>
        <Feature title='Knowledgebase' text='instead of me to use Lorem Ipsum i dey try use my brain sha anyhow sha we move again'/>
        <Feature title='Education' text='How can i possibly write a short note on education we literally spend the better part of our lives being educated be it formal or informal, and the fun part of it is that it is always never enough because in the end we know nothing.'/>
      </div> 
    </div>
  )
}

export default WhatGPT3