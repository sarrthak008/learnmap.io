import { Tube } from "ogl";
import { createContext, useContext, useEffect, useState } from "react";

const Store = createContext()

const StoreProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scklatonCount, setScklatonCount] = useState([1,2,3,4,2,3,4,6]);
    const [isRoadmapGanaratorOpen, setIsRoadmapGanaratorOpen] = useState(false);
    const [token,setToken] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("user")) || null
        if (data) {
            setUser(data)
            setIsLogin(true)
            // console.log(data)
            setToken(data.token)
        } else {
            setIsLogin(false)
        }
    }, [isLogin])


    return (
        <Store.Provider value={{isRoadmapGanaratorOpen,setIsRoadmapGanaratorOpen,isLogin,setIsLogin,user,isModalOpen,setIsModalOpen,scklatonCount,setScklatonCount,token}}>
            {children}
        </Store.Provider>
    )
}

const useStore = () => {
    return useContext(Store);
}

export { StoreProvider, useStore }
