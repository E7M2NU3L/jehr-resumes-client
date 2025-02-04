import { authReducer } from "@/features/authslice";
import { ResReducer } from "@/features/resumesidebarslice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem(_key: string, value: number) {
        return Promise.resolve(value);
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  };
  
  const storage =
    typeof window !== "undefined"
      ? createWebStorage("local")
      : createNoopStorage();
  
  const authPersistConfig = {
    key: "auth",
    storage: storage,
    whitelist: ["userData"],
  };
  
  const persistedReducer = persistReducer(authPersistConfig, authReducer);

  const resumePersisConfig = {
    key:'resume',
    storage: storage,
    whitelist: ["modify"],
  }

  const persistedResuemReducer = persistReducer(resumePersisConfig, ResReducer);
  
  const rootReducer = combineReducers({
    auth: persistedReducer,
    resume: persistedResuemReducer,
  });
  
  export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export const useAppDispatch = () => useDispatch<AppDispatch>();
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;