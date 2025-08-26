import React, { createContext, useContext as useReactContext } from 'react';

export const Context = createContext(null);

export const ContextProvider = Context.Provider;

export const useAppContext = () => useReactContext(Context);
