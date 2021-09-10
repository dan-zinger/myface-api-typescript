import React from 'react';

export function CreateNewUser(){
    return <form method= "post" action = "http://localhost:3001/users/create">
        <label>
            Name:
            <input type="text" name="name" required/>
        </label>
        <label>
            Username:
        <input type="text" name="username" required/>
        </label><br/><br/>
        <label>
            Email:
            <input type="email" name="email" required/>
        </label><br/><br/>
        <label>
            ProfileImageUrl:
            <input type="text" name="profileImageUrl" required/>
        </label><br/><br/>
        <label>
            CoverImageUrl:
            <input type="text" name="coverImageUrl" required/>
        </label><br/><br/>
        <button type="submit">Submit</button>
    </form>
}