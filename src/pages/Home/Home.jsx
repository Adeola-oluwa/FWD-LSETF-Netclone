import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_title from '../../assets/hero_title.png'


const Home = () => {
  return (
    <div className="home">
    <Navbar/>
    <div className='hero'>
      <img src='/hero_banner.jpg' alt="" className='banner-img' />
      <div className="hero-caption">
        <img src={hero_title} alt="" className='caption-img' />
        <p>Discovering his ties to secret ancient irder, a young man living in modern Istanbul embarks on quest to save the city from an importal enemy.</p>
      </div>
    </div>
    </div>
  )
}

export default Home