import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import {changePasswordReducer} from "./change-password-reducer";
import {loginReducer} from "./login-reducer";
import {profileReducer} from "./profile-reducer";
import {regReducer} from "./reg-reducer";
import {resetPasswordReducer} from "./reset-password-reducer";

const rootReducer = combineReducers({
    changePassword: changePasswordReducer,
    login: loginReducer,
    profile: profileReducer,
    reg: regReducer,
    resPassword: resetPasswordReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootState = ReturnType<typeof rootReducer>