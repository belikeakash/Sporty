import React from 'react'
import '../styles/Companies.css'

export default function Companies({icon, description, userImg, userName, userPos}) {
  return (
    <div className='company-container'>
        <div className="company-inner-container">
        <div className="company-icon" >{icon}</div>
        <div className="description">{description}</div>
        <div className="user">
            <img className="user-img" src={userImg} />
            <div className="user-name">{userName}, {userPos}</div>
        </div>
        </div>
    </div>
  )
}
