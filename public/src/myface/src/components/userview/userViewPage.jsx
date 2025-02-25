import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { classicNameResolver } from 'typescript';
import { UserCoverImage } from './coverimage';
import { UserProfileHeader } from './userprofileheader';
import { EachPost } from '../eachpost';

export function UserViewPage() {
    const [contentFromUser, setContent] = useState();
    const {userId} = useParams();

    useEffect(function() {
        async function fetchData() {
            const response = await fetch(`http://localhost:3001/users/${userId}`);
            const json = await response.json();

            setContent(json);
        }

        fetchData();
    }, [userId]);

    if (!contentFromUser){
        return <p>Content is loading...</p>
    } else {
        return (
            <>
            <section>
                <UserCoverImage
                    src = {contentFromUser.coverImageUrl}
                    alt = "This is the test cover"
                />
            </section>
            <section className = "postlist">
                <UserProfileHeader
                    name = {contentFromUser.name}
                    userName = {contentFromUser.username}
                    email = {contentFromUser.email}
                    coverImageUrl = {contentFromUser.coverImageUrl}
                    profileImageUrl = {contentFromUser.profileImageUrl}
                />
            </section>
            <section classnam = "postlist">
                <h2 className = "post-heading">
                    {contentFromUser.name}'s Posts
                </h2>
                <div>
                    <ul>
                        {contentFromUser.posts.map( (post) => 
                            <li>
                                <EachPost
                                    classname = "each-user-post"
                                    post = {post}
                                />
                            </li>
                )}
                    </ul>
                </div>
            </section>
            <section classname = "postlist">
                <h2 className = "post-heading">
                    Posts Liked By {contentFromUser.name}
                </h2>
                <div>
                    <ul>
                        {contentFromUser.likes.map( (post) => 
                            <li>
                                <EachPost
                                    classname = "each-user-post"
                                    /*src = {post.imageUrl}
                                    alt = "Post Image"
                                    message = {post.message}
                                    createdAt = {post.createdAt}*/
                                    post = {post}
                                />
                            </li>
                )}
                    </ul>
                </div>
            </section>
            <section classname = "postlist">
                <h2 className = "post-heading">
                    Posts Disiked By {contentFromUser.name}
                </h2>
                <div>
                    <ul>
                        {contentFromUser.dislikes.map( (post) => 
                            <li>
                                <EachPost
                                    classname = "each-user-post"
                                     /*src = {post.imageUrl}
                                    alt = "Post Image"
                                    message = {post.message}
                                    createdAt = {post.createdAt}*/
                                    post = {post}
                                />
                            </li>
                )}
                    </ul>
                </div>
            </section>
            </>
        )
    }
}
