import React, { useState, useEffect } from 'react';
import { UserCoverImage } from './coverimage';
import { UserProfileHeader } from './userprofileheader';

export function UserViewPage(props) {
    const [contentFromUser, setContent] = useState();


    useEffect(function() {
        async function fetchData() {
            const response = await fetch(`http://localhost:3001/users/5`);
            const json = await response.json();

            setContent(json);
        }

        fetchData();
    }, [props.userId]);

    if (!contentFromUser){
        return <p>Content is loading...</p>
    } else {
        return (
            <>
            <section>
                <UserCoverImage
                    src = {contentFromUser.coverImageUrl}
                />
            </section>
            <section>
            Test
                <UserProfileHeader
                    name = {contentFromUser.name}
                    userName = {contentFromUser.username}
                    email = {contentFromUser.email}
                    coverImageUrl = {contentFromUser.coverImageUrl}
                    profileImageUrl = {contentFromUser.profileImageUrl}
                />
            </section>
            </>
        )
    }
}
