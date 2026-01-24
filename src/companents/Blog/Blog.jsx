import React from 'react'
import './Blog.css'
import Blogimg1 from './images/blog-1.png'
import Blogimg2 from './images/blog-2.png'
import Blogimg3 from './images/blog-3.png'

const Blog = () => {
  return (
    <div className="blog">
        <div className="container">
            <div className="blog__container">
                <div className="blog__box">
                    <h1 className='blog__title'>Apple wireless Airpod</h1>
                    <div className="blog__img">
                        <img width={110} height={200} className='blog__image' src={Blogimg1} alt="" />
                        <img width={110} height={200} className='blog__image-two' src={Blogimg2} alt="" />
                        <img width={110} height={200} className='blog__image' src={Blogimg3} alt="" />
                    </div>
                    <h4 className='blog__sutitle'>Price : <span className='blog__span'>$45 .99</span></h4>
                </div>
                <div className="blog__box__two">
                    <h1 className='blog__subtitle'>Our Featured Products</h1>
                    <p className='blog__text'>Lorem ipsum is a placeholder text commonly <br /> used to demonstrate the visual form of a <br /> product</p>
                    <div className="blog__btttn">
                        <button className='blog__btn'>Add to cart</button>
                        <button className='blog__btn'>View more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog