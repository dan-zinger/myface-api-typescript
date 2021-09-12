import React from 'react';

export function Navbar() {
    return (
        <header>
        <a href = "/" > MrFace</a>
        <a href = "http://localhost:3000/">Home</a>
        <a href = "http://localhost:3000/posts">Posts</a>
        <a href = "http://localhost:3000/users">Users</a>
        <a href = "http://localhost:3000/posts/create">+ New Post</a>
        </header>
    )
}