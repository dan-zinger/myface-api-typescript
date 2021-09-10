import React, {useEffect, useState} from "react";


export function UsersPage() {
    const [users, setContent] = useState();
    const [pageUrl, setPageUrl] = useState("/users")
    const [listStart, setListStart] = useState(1)

    useEffect(function() {
        async function fetchData() {
            const response = await fetch(`http://localhost:3001`+pageUrl);
            const json = await response.json();

            setContent(json);
        }

        fetchData();
    }, [pageUrl]);

    function changePage (dir) {
        if (dir === "next") {
            
            setListStart(listStart + 10)
            setPageUrl(users.next)
        } else {
            
            setListStart(listStart - 10)
            setPageUrl(users.previous)
        }
    }

    if (!users){
        return <p>Content is loading...</p>

    } else {
        return(
            <>
            <h2> User Profiles</h2>
            <section>
                <ol start = {listStart} >
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
            <p>http://localhost:3001/{users.next}</p>
            <p>{users.next}</p>
            <footer> 
                {(users.previous) ?  <button type="submit" onClick={() => changePage("previous")}> Previous</button> : <></>} 
                {(users.next) ?  <button type="submit" onClick={() => changePage("next")}> Next</button> : <></>} 

            </footer>
            </>
        )
    }
}

