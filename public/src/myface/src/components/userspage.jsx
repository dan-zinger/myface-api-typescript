import React, {useEffect, useState} from "react";

export function UsersPage() {
    const [users, setContent] = useState();

    useEffect(function() {
        async function fetchData() {
            const response = await fetch(`http://localhost:3001/users`);
            const json = await response.json();

            setContent(json);
        }

        fetchData();
    }, );

    if (!users){
        return <p>Content is loading...</p>

    } else {
        return(
            <>
            <h2> User Profiles</h2>
            <section>
                <ol>
                    {users.results.map( (user) => 
                        <a href = {"http://localhost:3000/users/"+ user.id}>
                        <li> 
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                            <img 
                                src = {user.profileImageUrl}
                                alt = "Profile Picture"
                            />
                        </li>
                        </a>
                    )}
                

                </ol>
            </section>
            </>
        )
    }
}
