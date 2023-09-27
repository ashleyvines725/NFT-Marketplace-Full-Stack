import React from 'react'
//internal import
import {HeroSection} from '../components/componentindex'
import Style from '../styles/index.module.css'

function Home() {
  return (
    
    <div className={Style.homePage}>
      <HeroSection/>
    </div>

  )
}

export default Home