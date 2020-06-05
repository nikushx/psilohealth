import React from 'react'
// import InstagramFeed from './InstagramFeed'
import './Footer.css'
import LandingPageContactForm from './LandingPageContactForm'

export default () => (
  <div>
    {/* <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2> */}
    {/* <br /> */}
    {/* <InstagramFeed count="8" /> */}
    <footer className="footer">
      <div className="container taCenter">
        <LandingPageContactForm name="Landing Page Contant Us" />

        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://nikushx.com/">Nikush Dalia</a>.
        </span>
      </div>
    </footer>
  </div>
)
