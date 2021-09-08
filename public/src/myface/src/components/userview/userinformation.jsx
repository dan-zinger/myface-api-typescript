import React from 'react';
import { isPropertySignature } from 'typescript';

export function UserInformation(props) {
    let profileImage = 
        <img 
            class = "profile-image"
            src = {props.profileImageUrl}
            alt = "Profile Image"
        />

    let userInfo = 
        <div>
            <p>{props.name}</p>
            <p>{props.userName}</p>
            <p>{props.email}</p>
        </div>
        
    let fullProfileInfo = 
        <div>
            {profileImage}
            {userInfo}
        </div>
    return fullProfileInfo
}