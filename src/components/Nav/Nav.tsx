import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Nav.module.css";

export const Nav = () => {
    return (
        <div className={s.Nav}>
            <NavLink className={s.navLink} to={'login'}>log in</NavLink>
            <NavLink className={s.navLink} to={'reg'}>reg</NavLink>
            <NavLink className={s.navLink} to={'profile'}>profile</NavLink>
            <NavLink className={s.navLink} to={'404'}>404</NavLink>
            <NavLink className={s.navLink} to={'reset_password'}>reset password</NavLink>
            <NavLink className={s.navLink} to={'change_password'}>change password</NavLink>
            <NavLink className={s.navLink} to={'test'}>test</NavLink>
        </div>
    )
}