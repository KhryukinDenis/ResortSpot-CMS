import { action, makeAutoObservable, observable } from "mobx";
import agent from "../agent/agent";
import { Entertainment } from "../model/entertainment";

export class EntertainmentStore {
  constructor() {makeAutoObservable(this)}
  
  entertainmentAgent = agent.EntertainmentAgent;

  @observable entertainments: Entertainment[] = [];
  @observable entertainment: Entertainment | null = null;
  @observable canEdit: boolean = false;

  @action
  setCanEdit = (canEdit: boolean) => {
    this.canEdit = canEdit ?? !this.canEdit;
  };

  @action
  fetchAll = async (city_id: number) => {
    this.entertainment = null;
    await this.entertainmentAgent.getAllEntertainments(city_id)
      .then((response) => (this.entertainments = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  fetchById = async (id: number, city_id: number) => {
    this.entertainment = null;
    await this.entertainmentAgent.getOneEntertainment(id, city_id)
      .then((response) => (this.entertainment = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  update = (entertainment: Entertainment, city_id: number): Promise<boolean> => {
    return this.entertainmentAgent.updateEntertainment(entertainment, city_id)
      .then(() => {
        this.setCanEdit(false);
        console.log('Достопримечательность обновлена');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при обновлении достопримечательности', error);
        return false;
      });
  };

  @action
  delete = (id: number, city_id: number): Promise<boolean> => {
    return this.entertainmentAgent.deleteEntertainment(id, city_id)
      .then(() => {
        console.log('Достопримечательность удалена');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при удалении достопримечательности', error);
        return false;
      });
  };

  @action 
  setEntertainment = (entertainment: Entertainment | null) => {
    this.entertainment = entertainment;
  };

  @action
  createNew = () => {
    this.setCanEdit(false);
    this.setEntertainment(new Entertainment({}));
  };
}