import { createContext, useContext } from "react";

const Store = createContext()

const StoreProvider = ({ children }) => {


    return (
        <Store.Provider value={{}}>
            {children}
        </Store.Provider>
    )
}

const useStore = ()=>{
     return useContext(Store);
}

export {StoreProvider,useStore}
