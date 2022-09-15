import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Common} from "./Common/Common";
import {Login} from "./Login/Login";
import {Reg} from "./Reg/Reg";
import {Profile} from "./Profile/Profile";
import {PageNotFound} from "./PageNotFound/PageNotFound";
import {ResetPassword} from "./ResetPassword/ResetPassword";
import {ChangePassword} from "./ChangePassword/ChangePassword";
import {Test} from "./Test/Test";

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Common/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/reg"} element={<Reg/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/404"} element={<PageNotFound/>}/>
                <Route path={"/reset_password"} element={<ResetPassword/>}/>
                <Route path={"/change_password"} element={<ChangePassword/>}/>
                <Route path={"/test"} element={<Test/>}/>


                <Route path={'/*'} element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}