import React from 'react'
import  "../Footer/Footer.css"
import  youtube from"../../assets/youtube_icon.png";
import twitter from "../../assets/twitter_icon.png";
import instagram from "../../assets/instagram_icon.png";
import facebook from "../../assets/facebook_icon.png";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
          <img src={facebook}  alt=""/>

      </div>

      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
              </ul>

              <p className='copyright-text'>&copy 1997-2003 Netflix, Inc.</p>
    </div>
  );
}

export default Footer
