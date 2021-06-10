import React from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <NavLink to='/' style={{color: 'white', paddingRight: '20px',  fontSize: '20px'}}>Главная </NavLink>
                    <NavLink to='/createPost' style={{color: 'white', fontSize: '20px'}}>Создать пост </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    )
}