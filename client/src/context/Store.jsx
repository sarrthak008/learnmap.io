import { Tube } from "ogl";
import { createContext, useContext, useEffect, useState } from "react";

const Store = createContext()

const StoreProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scklatonCount, setScklatonCount] = useState([1,2,3,4]);


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("user")) || null
        if (data) {
            setUser(data)
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    }, [isLogin])


    return (
        <Store.Provider value={{isLogin,setIsLogin,user,isModalOpen,setIsModalOpen,scklatonCount,setScklatonCount}}>
            {children}
        </Store.Provider>
    )
}

const useStore = () => {
    return useContext(Store);
}

export { StoreProvider, useStore }
