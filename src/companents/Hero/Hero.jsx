import React from 'react'
import './Hero.css'
import heroImg1 from './images/hero__1.png'
import heroImg2 from './images/hero__2.png'
import heroImg3 from './images/hero__3.png'
import heroImg4 from './images/hero__4.png'
import airpods from './images/hero__5.png'
import starsOne from './images/stars__1.png'
import starsTwo from './images/stars__2.png'
import person from './images/person.png'
const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="hero__container">
                <div className="hero__box">
                    <h1 className='hero__title'>Discover Our <br /> Latest  Products</h1>
                    <p className='hero__text'>Lorem ipsum is a placeholder text commonly used <br /> to demonstrate the visual form of a product</p>
                    <button className='hero__btn'>Buy Now</button>
                    <div className="hero__goo">
                        <img width={30} height={30} className='hero__img' src={heroImg1} alt="" />
                        <img width={30} height={30} className='hero__img' src={heroImg2} alt="" />
                        <img width={30} height={30} className='hero__img' src={heroImg3} alt="" />
                        <img width={30} height={30} className='hero__img' src={heroImg4} alt="" />
                        <b className='hero__subtitle'>15k Well <br /> Reviews</b>
                    </div>
                </div>
                <div className="hero__box__two">
                    <h1 className='hero__sutitle'>Read Beats MI9c2zm/a</h1>
                    <img width={150} height={150} className='hero__airpods' src={airpods} alt="" />
                    <p className='hero__sutext' >$50</p>
                    <img width={20} height={20} className='stars__one' src={starsOne} alt="" />
                    <img width={20} height={20} className='stars__two' src={starsTwo} alt="" />
                    <div className="her__play">
                        <img width={40} height={40} className='hero__person' src={person} alt="" />
                        <p className='hero__playtext' >Play Video</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero