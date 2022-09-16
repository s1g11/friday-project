import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Common} from "../../components/pages/common/Common";
import {Profile} from "../../components/pages/profile/Profile";
import {PageNotFound} from "../../components/pages/404/404";
import {ResetPassword} from "../../components/pages/reset-password/ResetPassword";
import {ChangePassword} from "../../components/pages/change-password/ChangePassword";
import {Reg} from "../../components/pages/reg/Reg";
import {Login} from "../../components/pages/login/Login";

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Common/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/reg"} element={<Reg/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/reset_password"} element={<ResetPassword/>}/>
                <Route path={"/change_password"} element={<ChangePassword/>}/>

                <Route path={'/*'} element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}