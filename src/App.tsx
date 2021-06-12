import React, {useReducer} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {Header} from "./Header/Header";
import {Profile} from './Profile';
import {CreatePost} from "./CreatePost";
import {Post} from "./Post";
import {Page404} from './Page404/Page404';
import {v1} from "uuid";

type postType = {
    id: string
    title: string
    text: string
}
const initialState: Array<postType> = []
export type initialStateType = typeof initialState
export type ActionType = addPostActionType

const reducer = (state: initialStateType, action: ActionType): initialStateType  => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: action.id,
                title: action.title,
                text: action.text
            }
            return [...state, newPost];
        default:
            return state;
    }
}

type addPostActionType = {
    type: 'ADD-POST'
    id: string
    title: string
    text: string
}
export const addPostAC = (title: string, text: string):addPostActionType =>{
    return {
        type: 'ADD-POST',
        id: v1(),
        title,
        text
    }
}

function App() {
    const [posts, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' render={() => <Profile posts={posts}/>}/>
                <Route path='/createPost' render={() => <CreatePost dispatch={dispatch}/>}/>
                <Route path='/post' render={() => <Post/>}/>
                <Route path={'/404'} render={() => <Page404/>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    );
}

export default App;
