import { action, makeAutoObservable, observable } from "mobx";
import agent from "../agent/agent";
import { Nature } from "../model/nature";

export class NatureStore {
  constructor() {makeAutoObservable(this)}
  
  natureAgent = agent.NatureAgent;

  @observable natures: Nature[] = [];
  @observable nature: Nature | null = null;
  @observable canEdit: boolean = false;

  @action
  fetchAll = async (city_id: number) => {
    this.nature = null;
    await this.natureAgent.getAllNatures(city_id)
      .then((response) => (this.natures = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  fetchById = async (id: number, city_id: number) => {
    this.nature = null;
    await this.natureAgent.getOneNature(id, city_id)
      .then((response) => (this.nature = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  update = (nature: Nature, city_id: number): Promise<boolean> => {
    return this.natureAgent.updateNature(nature, city_id)
      .then(() => {
        console.log('Объект природы обновлен');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при обновлении объекта природы', error);
        return false;
      });
  };

  @action
  delete = (id: number, city_id: number): Promise<boolean> => {
    return this.natureAgent.deleteNature(id, city_id)
      .then(() => {
        console.log('Объект природы удален');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при удалении объекта природы', error);
        return false;
      });
  };

  @action 
  setNature = (nature: Nature | null) => {
    this.nature = nature;
  };

  @action
  createNew = () => {
    this.setCanEdit(false);
    this.setNature(new Nature({}));
  };

  @action
  setCanEdit = (canEdit: boolean) => {
    this.canEdit = canEdit ?? !this.canEdit;
  };
}