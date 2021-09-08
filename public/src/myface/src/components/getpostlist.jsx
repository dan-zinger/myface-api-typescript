import React, {useEffect, useState} from "react";
import { EachPost } from "./eachpost";

export function Postlist(props) {
    const [posts, setPosts] = useState([]); 

    useEffect(function() {
        async function fetchData() {
            const response = await fetch("http://localhost:3001/posts")
            const json = await response.json()

            setPosts(json.results)
        }

        fetchData();
    }, []);

    if (!posts){
        return <p> There are no posts to display </p>
    } else {
        return  <ul>
            {posts.map( (post) => 
                <li>
                    <EachPost
                        classname = "each-post"
                        src = {post.imageUrl}
                        alt = "Post Image"
                        message = {post.message}
                    />
                </li>
            )}
        </ul>
    }
}

/*
if (!posts){
    return <p> There are no posts to display </p>
} else {
    return  <ul>
        {posts.map( (post) => 
        
            <li 
            className = "each-post">
                <img 
                    className = "post-image"
                    src = {post.imageUrl}
                    alt = "Post Image"
                />
                <p className = "post-message">
                    {post.message}
                </p>
                <p classname = "posted-by">
                    {/*post.posted*/ /*}
                </p>
            </li>
        )}
    </ul>
}
}
*/