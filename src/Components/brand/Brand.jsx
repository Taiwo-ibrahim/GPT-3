import React from 'react'
import './brand.css'
import { google, shopify, dropbox, slack} from "./imports" ;

function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} width={30} height={30} alt="google" />
      </div>
      <div>
        <img src={shopify} width={30} height={30} alt="shopify" />
      </div>
      <div>
        <img src={dropbox} width={30} height={30} alt="dropbox" />
      </div>
      <div>
        <img src={slack} width={30} height={30} alt="slack" />
      </div>
    </div>
  )
}

export default Brand