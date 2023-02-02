import React from 'react'
import { Feature } from '../../Components'
import './features.css'


const featuresData = [
  {
    title: "Improving end distrust totally" ,
    text: "From the fine and that cost him nothing so if you think i am here to thank you you should think twice thank you"
  },
  {
    title: "Become the tended active" ,
    text: "From the fine and that cost him nothing so if you think i am here to thank you you should think twice thank you"
  },
  {
    title: "Message or am nothing" ,
    text: "From the fine and that cost him nothing so if you think i am here to thank you you should think twice thank you"
  },
  {
    title: "Dont take this project." ,
    text: "From the fine and that cost him nothing so if you think i am here to thank you you should think twice thank you"
  }
]





function Features() {
  return (
    <div className="gpt3__features section__padding" id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text" >The Future is Now and You Just Need To Realize It. Step into Future Today & Make It Happen. </h1>
        <p>Request Early Access to Get Started.</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title= {item.title} text={item.text} key={item.title + index}/>
        ) )}
      </div>
    </div>
  )
}

export default Features