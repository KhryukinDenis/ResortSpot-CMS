import { action, makeAutoObservable, observable } from "mobx";
import agent from "../agent/agent";
import { Culture } from "../model/culture";

export class CultureStore {
  constructor() {makeAutoObservable(this)}
  
  cultureAgent = agent.CultureAgent;

  @observable cultures: Culture[] = [];
  @observable culture: Culture | null = null;

  @action
  fetchAll = () => {
    this.culture = null;
    this.cultureAgent.getAllCultures()
      .then((response) => (this.cultures = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  fetchById = (id: number) => {
    this.culture = null;
    this.cultureAgent.getOneCulture(id)
      .then((response) => (this.culture = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  update = (culture: Culture): Promise<boolean> => {
    return this.cultureAgent.updateCulture(culture)
      .then(() => {
        console.log('Объект культуры обновлен');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при обновлении объекта культуры', error);
        return false;
      });
  };

  @action
  delete = (id: number): Promise<boolean> => {
    return this.cultureAgent.deleteCulture(id)
      .then(() => {
        console.log('Объект культуры удален');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при удалении объект культуры', error);
        return false;
      });
  };
}