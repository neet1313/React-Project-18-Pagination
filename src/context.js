import React, { createContext, useContext } from 'react';
import { useFetch } from './useFetch'

const AppContext = createContext();
// const { loading, data } = useFetch();

const context = ({ children }) => {
    return (
        <AppContext.Provider value=""> {children}</AppContext.Provider >
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export default { context, AppContext }