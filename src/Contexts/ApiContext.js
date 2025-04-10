import { createContext, useContext, useEffect, useState } from "react";
import { myAxios } from "../Axios/axios";

const ApiContext = createContext();

export const ApiProvider = ({children}) =>{
    const [tesztekLista, setTesztekLista] = useState([]);
    const [kategoria, setKategoria] = useState([]);


    const getAdat = async(vegpont) => {
        try {
            const adat = await myAxios.get(vegpont);
            setTesztekLista(adat.data);    
            console.log(adat)
        } catch (error) {
            console.log(error);
        }
        
    }

    const getKategoria = async(vegpont) => {
        try {
            const adat = await myAxios.get(vegpont)
            setKategoria(adat.data); 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAdat("/api/tesztek");
        getKategoria("/api/kategoria");
    }, []);

    return(
        <ApiContext.Provider value={{ tesztekLista, kategoria, getKategoria, getAdat }}>
            {children}
        </ApiContext.Provider>
    )
}

export default function useApiContext(){
    return useContext(ApiContext);
}