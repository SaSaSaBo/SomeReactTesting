import React from 'react'
import './UserProfile.css'
import changbin from '../Assets/changbin.jpg'

const UserProfile = () => {
    return (
        <div className='upc'>
            <div className="gradiant"></div>
            <div className="profile-down">
                <img src={changbin} alt="" />
                <div className="profile-title">Seo Changbin</div>
                <div className="profile-description">
                    I am a singer, rapper, dancer, producer, and writer. I am currently a member od StrayKids. I known for my powerful rapping skills, impressive songwriting, and deep voice. I'm in part of Stray Kids' "3RACHA" subunit, alongside fellow members Bang Chan and Han.
                </div> 
                <div className="profile-button"><a href = "mailto:spearB99@example.com">Contact me</a></div>
            </div>
        </div>
    )
}

export default UserProfile
