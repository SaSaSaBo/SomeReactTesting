import React from 'react'
import './UserProfile.css'
import seungmin from '../Assets/seungmin.jpg'

const UserProfile2 = () => {
    return (
        <div className='upc'>
            <div className="gradiant2"></div>
            <div className="profile-down">
                <img src={seungmin} alt="" />
                <div className="profile-title">Kim Seungmin</div>
                <div className="profile-description">
                    I am a singer, rapper, dancer and writer. I am currently a member od StrayKids. I known for my powerful vocal skills, impressive songwriting. I'm in part of Stray Kids' "VocalRACHA" subunit, alongside fellow member I.N.
                </div> 
                <div className="profile-button2"><a href = "mailto:minimnmoung@example.com">Contact me</a></div>
            </div>
        </div>
    )
}

export default UserProfile2
