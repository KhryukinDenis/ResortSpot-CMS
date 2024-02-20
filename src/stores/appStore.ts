import { action, observable } from "mobx";
import { RootStore } from "./root";

export class AppStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable selectedCity: string | null = null;

  @action
  setSelectedCity = (city: string | null) => {
    this.selectedCity = city;
  }
}