import React, {useReducer} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {Header} from "./Header/Header";
import {Profile} from './Profile';
import {CreatePost, IFormInput} from "./CreatePost";
import {Post} from "./Post";
import {Page404} from './Page404/Page404';

const initialState: Array<IFormInput> = []
export type initialStateType = typeof initialState

const reducer = (state: initialStateType = initialState, action: any) => {
    switch (action.type) {
        case 'createPost':
            return {...state, newPost: state.push()};

        default:
            return state
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' render={() => <Profile/>}/>
                <Route path='/createPost' render={() => <CreatePost/>}/>
                <Route path='/post' render={() => <Post/>}/>
                <Route path={'/404'} render={() => <Page404/>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    );
}

export default App;
