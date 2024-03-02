import { action, makeAutoObservable, observable } from "mobx";
import agent from "../agent/agent";
import { Nature } from "../model/nature";

export class NatureStore {
  constructor() {makeAutoObservable(this)}
  
  natureAgent = agent.NatureAgent;

  @observable natures: Nature[] = [];
  @observable nature: Nature | null = null;

  @action
  fetchAll = () => {
    this.nature = null;
    this.natureAgent.getAllNatures()
      .then((response) => (this.natures = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  fetchById = (id: number) => {
    this.nature = null;
    this.natureAgent.getOneNature(id)
      .then((response) => (this.nature = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  update = (nature: Nature): Promise<boolean> => {
    return this.natureAgent.updateNature(nature)
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
  delete = (id: number): Promise<boolean> => {
    return this.natureAgent.deleteNature(id)
      .then(() => {
        console.log('Объект природы удален');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при удалении объекта природы', error);
        return false;
      });
  };
}