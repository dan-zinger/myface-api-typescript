import React from 'react';
import { isPropertySignature } from 'typescript';

export function UserCoverImage (props) {
    
    const coverImage = 
        <><p>cover Image component test</p>
        <img 
            className = "user-cover-image"
            src = {props.src}
            alt = "User Cover Image"
        />
        </>
    return coverImage
}
