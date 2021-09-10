import React, {useEffect, useState} from "react";
import { EachPost } from "./eachpost";

export function PostList() {
    const [posts, setPosts] = useState(); 
    const [posturl, setPostUrl] = useState("/posts");

    useEffect(function() {
        async function fetchData() {
            const response = await fetch("http://localhost:3001"+posturl)
            const json = await response.json()

            setPosts(json)
        }

        fetchData();
    }, [posturl, posts]);

    if (!posts){
        return <p> There are no posts to display </p>

    } else {
        return <>
            <ul>
                {posts.results.map( (post) => 
                    <li>
                        <EachPost
                            classname = "each-post"
                            post = {post}
                            
                        />
                    </li>
                )}
            </ul>
        {posts.next ? <button type = "submit" onClick={()=>setPostUrl(posts.next)}> Next </button> : <></>}
        {posts.previous ? <button type = "submit" onClick={()=>setPostUrl(posts.previous)}> Previous </button> : <></>}
        </>
    }
}
