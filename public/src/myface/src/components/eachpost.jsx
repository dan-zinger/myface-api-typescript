import React from "react";
import { Postlist } from "./getpostlist";

export function EachPost(props) {
    const image = 
        <div>
            <img 
            className = "post-image"
            src = {props.src}
            alt = "Post Image"
            />
        </div>
    const message = 
        <div>
            <p className = "post-message">
                {props.message}
            </p>
        </div>
    
    const postCard =
        <div>
        {image}
        {message}
        </div>
    return (
        postCard
)}
