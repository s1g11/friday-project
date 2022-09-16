const InitialState = 1

export const loginReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

//actions
export const loginAC = () => {
    return {
        type: "ACTION"
    } as const
}

//types
type InitialStateType = any
type ActionsType =
    | ActionType
type ActionType = ReturnType<typeof loginAC>