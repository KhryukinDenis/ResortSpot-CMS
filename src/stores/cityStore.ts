import { action, makeAutoObservable, observable } from "mobx";
import { City } from "../model/city";
import agent from "../agent/agent";

export class CityStore {
  constructor() {makeAutoObservable(this)}

  cityAgent = agent.CityAgent;

  @observable selectedCity: City | null = null;
  @observable cities: City[] = [];
  @observable city: City | null = null;
  @observable canEdit: boolean = false;

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

  @action
  fetchOne = async (id: number) => {
    this.city = null;
    await this.cityAgent.getOneCity(id)
      .then((response) => (this.city = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  update = (city: City): Promise<boolean> => {
    return this.cityAgent.updateCity(city)
      .then(() => {
        console.log('Город обновлен');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при обновлении города', error);
        return false;
      });
  };

  @action
  setCanEdit = (canEdit: boolean) => {
    this.canEdit = canEdit ?? !this.canEdit;
  };
}
