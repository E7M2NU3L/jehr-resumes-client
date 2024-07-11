"use client";

import { store } from "@/store/store";
import { ReactNode } from "react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux"; 

persistStore(store);

interface ChildrenProps {
    children: ReactNode;
}

const ReduxProvider = ({children}: ChildrenProps) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default ReduxProvider;