import { useEffect, useState } from 'react';
import '../css/ProfileCard.css';

function ProfileCard(props) {
    const { user } = props;

    
    
    return (
        
        <div className="profile-container">
            <div className="info-user">
            <img src={user.avatar_url ? user.avatar_url : 'not foud'} alt={user.login ? user.login : 'not found'} />
                <h2>{user.login ? user.login : 'user not found'}</h2>
                <h3>{user.bio ? user.bio : "user's bio not found"}</h3>
                <span>
                    <h4>{user.followers ? user.followers: 0} followers</h4>
                    <h4>{user.following ? user.following : 0} following</h4>
                </span>
                <p>{user.public_repos ? user.public_repos : 0} repositories</p>
            </div>
        </div>
    )
};

export default ProfileCard;
