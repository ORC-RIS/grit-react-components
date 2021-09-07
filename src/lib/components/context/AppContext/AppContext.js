import React, { createContext, useReducer } from "react";

const AppContext = createContext();

const initialState = { isLoading: false };

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return { ...state, ...action.payload };
        case "RESET":
            return { ...initialState };
        default:
            return state;
    }
};

const AppContextProvider = (props) => {
    const defaultAppContext = initialState;

    const [appContext, updateAppContext] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider
            value={{ appContext, updateAppContext, defaultAppContext }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider };

export default AppContext;
