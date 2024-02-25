import { action, makeAutoObservable, observable } from "mobx";

export class AppStore {
  constructor() {makeAutoObservable(this)}

  @observable selectedCity: string | null = null;

  @action setSelectedCity = (city: string | null) => {
    this.selectedCity = city;
  }
}