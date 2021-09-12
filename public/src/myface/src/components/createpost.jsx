import React from "react";

export function CreateNewPost() {
    return (
    <form method = "post" action = "http://localhost:3001/posts/create">
        <label>
            User ID:
            <input type="text" name="userId" required/>
        </label> 
        <label>
            Image URL:
            <input type="text" name="imageUrl" required/>
        </label>
        <label>
            Message:
            <input type="text" name="message" required/>
        </label><br/><br/>
        <button type="submit">Submit</button>
    </form>)
}