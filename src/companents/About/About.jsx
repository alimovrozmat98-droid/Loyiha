import React from 'react'
import './About.css'
import aboutimg1 from './images/about-1.png'
import aboutimg2 from './images/about-2.png'
import aboutimg3 from './images/about-3.png'
import aboutimg4 from './images/about-4.png'
import aboutimg5 from './images/about-5.png'

const About = () => {
  return (
    <div className="about">
        <div className="container">
            <h1 className='about__sutitle'>Top Sellers</h1>
            <div className="about__btttn">
                <button className='about__btntn'>Top Picks</button>
                <button className='about__btntn'>Watches</button>
            </div>
            <div className="about__container">
                <div className="about__box">
                    <ul className='about__list'>
                        <li className='about__item'>
                            <img width={150} height={150} className='about__img' src={aboutimg2} alt="" />
                            <img width={30} height={30} className='about__image' src={aboutimg1} alt="" />
                            <h3 className='about__title'>Boat Rockerz 333</h3>
                            <p className='about__text'>75 Reviews</p>
                            <b className='about__b'>$20</b>
                            <button className='about__btn'>Add to cart</button>
                        </li>
                        <li className='about__item-two'>
                            <img width={150} height={150} className='about__img' src={aboutimg3} alt="" />
                            <h3 className='about__title'>Boat kerz 234</h3>
                            <p className='about__text'>75 Reviews</p>
                            <b className='about__b'>$40</b>
                            <button className='about__btn'>Add to cart</button>
                        </li>
                        <li className='about__item-there'>
                            <img width={150} height={150} className='about__img' src={aboutimg4} alt="" />
                            <img width={30} height={30} className='about__image' src={aboutimg5} alt="" />
                            <h3 className='about__title'>Free Shipping</h3>
                            <p className='about__text'>75 Reviews</p>
                            <b className='about__b'>$30</b>
                            <button className='about__btn'>Add to cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About