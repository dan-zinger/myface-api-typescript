import React, { useState, useEffect } from "react";
import { PostList } from "./getpostlist";
import moment from "moment";

export function EachPost(props) {
    const image = 
        <div>
            <img 
            className = "post-image"
            src = {props.post.imageUrl}
            alt = "Post Image"
            width ="300"
            />
        </div>

    const messageAndCreated=  
        <div>
            <p className = "post-message">
                {props.post.message}
            </p>
            <p className = "post-message">
                {moment(props.post.createdAt).format('DD/MM/YYYY')}
            </p>
        </div>
        
    if (props.classname === "each-post") {
        return (
            <div>
                {messageAndCreated}
                {image}
                <LikesAndDislikes postId ={props.post.id} likedBy = {props.post.likedBy} dislikedBy = {props.post.dislikedBy}/>
            </div>
        )
    } else {
        return (
            <div>
            {image}
            {messageAndCreated}
            </div>
        )
    }
}

export function LikesAndDislikes (props) {
    const [postId, setPostId] = useState();
   
    function handleSubmitlike(event){
        event.preventDefault();
        return fetch(`http://localhost:3001/posts/${postId}/like`,{
            method: 'POST',
        })
    }

    function handleSubmitdislike(event){
        event.preventDefault();
        return fetch(`http://localhost:3001/posts/${postId}/dislike`,{
            method: 'POST',
        })
    }
   
    return <div>
        <p> 
            <form onSubmit ={(e)=>{handleSubmitlike(e)}}>
                <button type="submit" onClick = {()=>{setPostId(props.postId)}}> 👍 </button> {props.likedBy.length}
            </form>
            <form onSubmit ={(e)=>{handleSubmitdislike(e)}}>
                <button type="submit" onClick = {()=>{setPostId(props.postId)}}>👎 </button> {props.dislikedBy.length}
            </form>
        </p>
    </div>

    

}