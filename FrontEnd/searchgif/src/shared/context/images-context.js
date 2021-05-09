import { createContext } from 'react';

export const ImagesContext = createContext({
    images:null,
    search:"",
    scroll:false,
    offset:null,
    loading:false,
    setSearchHandler:()=>{},
    setOffsetHandler:()=>{}
});