import React from "react";
import {initialStateType} from "./App";


export const Profile = ({posts}:{posts: initialStateType}) => {
    const titleView = posts.map(post => <li>{post.title}</li>)
    const textView = posts.map(post => <li>{post.text}</li>)
    return <ul>
        {titleView}
        {textView}

    </ul>
}