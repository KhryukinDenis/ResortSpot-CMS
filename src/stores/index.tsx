import React from "react";
import { AppStore } from "./appStore";
import { CityStore } from "./cityStore";
import { CategoryStore } from "./categoryStore";
import { NatureStore } from "./natureStore";
import { CultureStore } from "./cultureStore";
import { EntertainmentStore } from "./entertainmentStore";
import { HotelStore } from "./hotelStore";
import { RoomStore } from "./roomStore";
import { RestStore } from "./restStore";
import { AuthStore } from "./authStore";

export const stores = Object.freeze({
  appStore: new AppStore(),
  cityStore: new CityStore(),
  categoryStore: new CategoryStore(),
  hotelStore: new HotelStore(),
  natureStore: new NatureStore(),
  cultureStore: new CultureStore(),
  entertainmentStore: new EntertainmentStore(),
  roomStore: new RoomStore(),
  restStore: new RestStore(),
  authStore: new AuthStore(),
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;

export const useStores = () => React.useContext(storesContext);
export const useStore = <T extends keyof typeof stores>(
  store: T
): typeof stores[T] => React.useContext(storesContext)[store];