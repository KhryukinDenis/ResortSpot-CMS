import React from "react";
import { AppStore } from "./appStore";

export const stores = Object.freeze({
  appStore: new AppStore(),
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;

export const useStores = () => React.useContext(storesContext);
export const useStore = <T extends keyof typeof stores>(
  store: T
): typeof stores[T] => React.useContext(storesContext)[store];