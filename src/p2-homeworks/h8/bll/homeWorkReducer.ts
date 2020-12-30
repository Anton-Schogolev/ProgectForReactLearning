import {HumanType} from "../HW8";

export type ActionsType = ReturnType<typeof sortAC>
    | ReturnType<typeof checkAC>

export const sortAC = (payload: "up" | "down") => ({type: "sort", payload: payload} as const)
export const checkAC = (payload: number) => ({type: "check", payload: payload} as const)

export const homeWorkReducer = (state: HumanType[], action: ActionsType): any => {
    switch (action.type) {
        case "sort": {
            const newState = [...state]
            newState.sort((a, b) => {
                if (action.payload === "up")
                    return a.name > b.name ? 1 : -1
                else
                    return a.name > b.name ? -1 : 1
            })
            return newState
        }
        case "check": {
            return state.filter(a => a.age >= action.payload)
        }
        default:
            return state
    }
};