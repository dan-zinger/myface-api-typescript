import React from 'react';
import { isPropertySignature } from 'typescript';


export function UserCoverImage(props) {
    const coverImage = 
        <img
            src = {props.coverImageUrl}
        />
    return coverImage
}