import React from 'react';
import { isPropertySignature } from 'typescript';
import { UserCoverImage } from './coverimage';
import { UserInformation } from './userinformation';

export function UserProfileHeader(props) {
    
    return (
        <>
        <UserCoverImage 
            class = "cover-image"
            coverImageUrl = {props.coverImageUrl}
        />
        <UserInformation
            class = "user-information"
            profileImageUrl = {props.profileImageUrl}
            name = {props.name}
            userName = {props.userName}
            email = {props.email}
        />
        </>
    )
}

{/*<UserInformation 
class = "user-information"
name = {props.name}
userName = {props.userName}
email = {props.email}
profileImageUrl = {props.profileImageUrl}
/>*/}