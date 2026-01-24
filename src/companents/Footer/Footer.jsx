import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer__box">
                <h1 className='footer__sutitle'>Ready to get started?</h1>
                <button className='footer__btn'>Get started</button>
            </div>
            <div className="footer__container">
                <ul className='footer__list'>
                    <li className='footer__item'>
                        <h4 className='footer__subtitle'>Subscribe to our <br />Website</h4>
                       <input className='footer__inp' type="email" name="" id="" placeholder='Email address' /> 
                    </li>
                    <li className='footer__item'>
                        <h4 className='footer__title'>Services</h4>
                        <a className='footer__lik' href="#">About Us</a>
                       <a className='footer__lik' href="#">News</a>
                       <a className='footer__lik' href="#">Our trusted partner</a> 
                       <a className='footer__lik' href="#">New users FAQ</a> 
                    </li>
                    <li className='footer__item'>
                        <h4 className='footer__title'>About</h4>
                        <a className='footer__lik' href="#">Help center</a>
                       <a className='footer__lik' href="#">Feedbcak</a>
                       <a className='footer__lik' href="#">Contact us</a>
                       <a className='footer__lik' href="#">Terms conditins</a> 
                    </li>
                    <li className='footer__item'>
                        <h4 className='footer__title'>Help</h4>
                        <a className='footer__lik' href="#">Download app</a>
                       <a className='footer__lik' href="#">Blog</a>
                       <a className='footer__lik' href="#">What’s new</a>
                       <a className='footer__lik' href="#">Sitemap</a> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer