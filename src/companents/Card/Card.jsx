import React from 'react'
import './Card.css'
import cardimg1 from './images/card-1.png'
import cardimg2 from './images/card-2.png'
import cardimg3 from './images/card-3.png'
import cardimg4 from './images/card-4.png'
import cardimg5 from './images/card-5.png'

const Card = () => {
  return (
    <div className="card">
        <div className="container">
            <h1 className='card__sutitle'>Trending Earphones</h1>
            <div className="card__btttn">
                <button className='card__btntn'>Earbuds</button>
                <button className='card__btntn'>Wireless</button>
                <button className='card__btntn'>Wired</button>
            </div>
            <div className="card__container">
                <div className="card__box">
                    <ul className='card__list'>
                        <li className='card__item'>
                            <img width={150} height={150} className='card__img' src={cardimg1} alt="" />
                            <img  width={30} height={30} className='card__image' src={cardimg2} alt="" />
                            <h3 className='card__title'>Boat Rockerz 333</h3>
                            <p className='card__text'>75 Reviews</p>
                            <b className='card__b'>$20</b>
                            <button className='card__btn'>Add to cart</button>
                        </li>
                        <li className='card__item-two'>
                            <img width={150} height={150} className='card__img' src={cardimg3} alt="" />
                            <h3 className='card__title'>Boat kerz 234</h3>
                            <p className='card__text'>75 Reviews</p>
                            <b className='card__b'>$40</b>
                            <button className='card__btn'>Add to cart</button>
                        </li>
                        <li className='card__item-there'>
                            <img width={150} height={150} className='card__img' src={cardimg4} alt="" />
                            <img  width={30} height={30} className='card__image' src={cardimg5} alt="" />
                            <h3 className='card__title'>Boat Rockerz 323</h3>
                            <p className='card__text'>75 Reviews</p>
                            <b className='card__b'>$30</b>
                            <button className='card__btn'>Add to cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card