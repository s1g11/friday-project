import React from 'react';
import SuperInputText from "./SuperComponents/SuperInput/SuperInputText";
import SuperButton from "./SuperComponents/SuperButton/SuperButton";
import SuperCheckbox from "./SuperComponents/SuperCheckbox/SuperCheckbox";

export const Test = () => {
    return (
        <div>
            <SuperInputText />
            <SuperButton>bla</SuperButton>
            <SuperCheckbox/>
        </div>
    )
}