import { action, makeAutoObservable, observable } from "mobx";
import { City } from "../model/city";
import { Category } from "../model/category";

export class AppStore {
  constructor() {makeAutoObservable(this)}

  @observable selectedCity: City | null = null;
  @observable selectedCategory: Category | null = null;

  @action 
  setSelectedCity = (city: City | null) => {
    this.selectedCity = city;
  };

  @action
  setSelectedCategory = (category: Category | null) => {
    this.selectedCategory = category;
  };
}