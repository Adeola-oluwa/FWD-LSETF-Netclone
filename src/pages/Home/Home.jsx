import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'



const Home = () => {
  return (
    <div className="home">

    <Navbar/>
    <div className='hero'>
      <img src='/hero_banner.jpg' alt="" className='banner-img' />
      <div className="hero-caption">
        <img src={hero_title} alt="" className='caption-img' />
        <p>Discovering his ties to secret ancient irder, a young man living in modern Istanbul embarks on quest to save the city from an importal enemy.</p>
        <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt="" />Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt="" /> More Info</button>
        </div>
        <TitleCards/> 
      </div>
    </div>
    <div className="more-cards">
    <TitleCards title= {"Blockbuster Movies"} category={"top_rated"}/> 
    <TitleCards title= {"Only on Neflix"} category={"popular"}/> 
    <TitleCards title= {"Upcoming"} category={"upcoming"}/> 
    <TitleCards title= {"Top Pics for You"} category={"now_playing"}/> 
    </div>
    </div>
  )
}

export default Home