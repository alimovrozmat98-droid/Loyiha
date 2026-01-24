import React from 'react'
import './Profile.css'
import profileimg1 from './images/profile-1.png'
import profileimg2 from './images/profile-2.png'

const Profile = () => {
  return (
    <div className="profile">
        <div className="container">
            <div className="profile__container">
                <div className="profile__box">
                    <img width={150} height={250} className='profile__img'  src={profileimg1} alt="" />
                    <img width={150} height={250} className='profile__img-two'  src={profileimg2} alt="" />
                </div>
                <div className="profile__box__two">
                    <h1 className='profile__title'>Airdrop 500 Anc</h1>
                    <p className='profile__text'>Lorem ipsum is a placeholder text commonly used to <br /> demonstrate the visual form of a product ... Read More</p>
                    <h4 className='profile__sutitle'>Price : $45 .99</h4>
                    <div className="profile__color">
                        <div className="profile__one"></div>
                        <div className="profile__two"></div>
                        <div className="profile__there"></div>
                    </div>
                    <div className="profile__btttn">
                        <button className='profile__btn'>Add to cart</button>
                        <button className='profile__btn'>Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile