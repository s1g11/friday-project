const InitialState = 1

export const changePasswordReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

//actions
export const changePasswordAC = () => {
    return {
        type: "ACTION"
    } as const
}

//types
type InitialStateType = any
type ActionsType =
    | ActionType
type ActionType = ReturnType<typeof changePasswordAC>