import React from 'react';
import { isPropertySignature } from 'typescript';
import { UserCoverImage } from './coverimage';

export function UserProfileHeader(props) {
    
    return (
        <><p>This is a test</p>
        <UserCoverImage 
            coverImageUrl = {props.coverImageUrl}
        />
        </>
    )
}