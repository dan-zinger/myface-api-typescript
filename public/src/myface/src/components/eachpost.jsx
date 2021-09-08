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

    const messageAndCreated=  
        <div>
            <p className = "post-message">
                {props.message}
            </p>
            <p className = "post-message">
                {props.createdAt}
            </p>
        </div>

    const message = 
    <div>
        <p className = "post-message">
            {props.message}
        </p>
    </div>
    
    if (props.createdAt) {
        return (
            <div>
            {image}
            {messageAndCreated}
            </div>
        )
    } else {
        return (
            <div>
            {image}
            {message}
            </div>
        )
    }
}
