import { action, makeAutoObservable, observable } from "mobx";
import agent from "../agent/agent";
import { Culture } from "../model/culture";

export class CultureStore {
  constructor() {makeAutoObservable(this)}
  
  cultureAgent = agent.CultureAgent;

  @observable cultures: Culture[] = [];
  @observable culture: Culture | null = null;
  @observable canEdit: boolean = false;

  @action
  setCanEdit = (canEdit: boolean) => {
    this.canEdit = canEdit ?? !this.canEdit;
  };

  @action
  fetchAll = async (city_id: number) => {
    this.culture = null;
    await this.cultureAgent.getAllCultures(city_id)
      .then((response) => (this.cultures = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  fetchById = async (id: number, city_id: number) => {
    this.culture = null;
    await this.cultureAgent.getOneCulture(id, city_id)
      .then((response) => (this.culture = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  update = (culture: Culture, city_id: number): Promise<boolean> => {
    return this.cultureAgent.updateCulture(culture, city_id)
      .then(() => {
        this.setCanEdit(false);
        console.log('Объект культуры обновлен');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при обновлении объекта культуры', error);
        return false;
      });
  };

  @action
  delete = (id: number, city_id: number): Promise<boolean> => {
    return this.cultureAgent.deleteCulture(id, city_id)
      .then(() => {
        console.log('Объект культуры удален');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при удалении объект культуры', error);
        return false;
      });
  };

  @action 
  setCulture = (culture: Culture | null) => {
    this.culture = culture;
  };

  @action
  createNew = () => {
    this.setCanEdit(false);
    this.setCulture(new Culture({}));
  };
}