import { createContext } from "react";
import { AppStore } from "./appStore";

export class RootStore {
  appStore = new AppStore(this);
}

export const RootStoreInitialized = new RootStore();
export const RootStoreContext = createContext(RootStoreInitialized);