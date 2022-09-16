import React from 'react';
import SuperInputText from "../../super-components/input/SuperInputText";
import SuperButton from "../../super-components/button/SuperButton";
import SuperCheckbox from "../../super-components/checkbox/SuperCheckbox";

export const Common = () => {
    return (
        <div>
            <SuperInputText />
            <SuperButton>bla</SuperButton>
            <SuperCheckbox>test checkbox</SuperCheckbox>
        </div>
    )
}