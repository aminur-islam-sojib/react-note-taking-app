import { useContext, createContext } from 'react';
export const Context = createContext();

export const ContextProvider = Context.Provider;

export const useContext = () => createContext(ContextProvider);
