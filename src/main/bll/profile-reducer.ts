const InitialState = 1

export const profileReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

//actions
export const profileAC = () => {
    return {
        type: "ACTION"
    } as const
}

//types
type InitialStateType = any
type ActionsType =
    | ActionType
type ActionType = ReturnType<typeof profileAC>