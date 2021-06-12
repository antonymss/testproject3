import React from "react";
import { NavLink } from "react-router-dom";
import {initialStateType} from "./App";


export const Profile = ({posts}: { posts: initialStateType }) => {
    const titleView = posts.map(post => <NavLink to={'/post/' + post.id}>{post.title} {post.text}</NavLink>)
    return <ul>
        {titleView}
    </ul>
}