import { createContext , useContext, useReducer} from "react";
const CommonContext = createContext()
import { InitailState, reducers } from "./reducer";

function CommonStateProvider ({children}) {
    const [state,dispatch] = useReducer(reducers,InitailState)
    return (
        <CommonContext.Provider value={{state,dispatch}}>
            {children}
        </CommonContext.Provider>
    )
}   

const useCommonStateProvider = () => useContext(CommonContext)
export {CommonStateProvider,useCommonStateProvider}