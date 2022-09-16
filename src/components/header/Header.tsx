import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {
    return (
        <div className={s.Header}>
            <NavLink className={s.navLink} to={''}>common</NavLink>
            <NavLink className={s.navLink} to={'login'}>log in</NavLink>
            <NavLink className={s.navLink} to={'reg'}>reg</NavLink>
            <NavLink className={s.navLink} to={'profile'}>profile</NavLink>
            <NavLink className={s.navLink} to={'reset_password'}>reset password</NavLink>
            <NavLink className={s.navLink} to={'change_password'}>change password</NavLink>
        </div>
    )
}