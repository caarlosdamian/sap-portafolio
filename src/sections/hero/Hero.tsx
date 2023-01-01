import React from 'react'
import AvatarImg from '../../assets/images/image-profile-mobile.webp'
import './Hero.scss'

export const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={AvatarImg} alt="AvatarImg"  className='hero-img'/>
    </div>
  )
}
