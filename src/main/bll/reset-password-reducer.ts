const InitialState = 1

export const resetPasswordReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

//actions
export const resetPasswordAC = () => {
    return {
        type: "ACTION"
    } as const
}

//types 
type InitialStateType = any
type ActionsType =
    | ActionType
type ActionType = ReturnType<typeof resetPasswordAC>