import React from 'react'
import BGHero from '../../public/images/bg-hero.svg'
import WebDevImage from '../../public/images/undraw_web_developer_p3e5.svg'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-images">
        <img src={BGHero} alt="bg hero" className="bg-hero" />
        <img
          src={WebDevImage}
          alt="web developer image"
          className="hero-image"
        />
      </div>
      <div className="hero-text">
        <h1>Hi there</h1>
        <h2>
          I'm Nice and I'm a <br /> Software Engineer Student
        </h2>
        <a className="btn" href="#contact">
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default Hero
