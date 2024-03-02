import { action, makeAutoObservable, observable } from "mobx";
import { City } from "../model/city";
import agent from "../agent/agent";

export class CityStore {
  constructor() {makeAutoObservable(this)}

  cityAgent = agent.CityAgent;

  @observable selectedCity: City | null = null;
  @observable cities: City[] = [];
  @observable city: City | null = null;

  @action 
  setSelectedCity = (city: City | null) => {
    this.selectedCity = city;
  };

  @action 
  fetchAll = () => {
    this.city = null;
    this.cityAgent.getAllCities()
      .then((response) => (this.cities = response.data))
      .catch((error) => console.log(error));
  };
}