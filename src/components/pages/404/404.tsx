import React from 'react';
import s from './404.module.css'

export const PageNotFound = () => {
    return (
        <div className={s.pageNotFound}>
            <p className={s.errorText}>error:</p>
            <h1 className={s.errorCode}>404</h1>
            <p className={s.errorText}>Page not found</p>
        </div>
    )
}