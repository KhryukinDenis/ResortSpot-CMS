import { action, makeAutoObservable, observable } from "mobx";
import agent from "../agent/agent";
import { Entertainment } from "../model/entertainment";

export class EntertainmentStore {
  constructor() {makeAutoObservable(this)}
  
  entertainmentAgent = agent.EntertainmentAgent;

  @observable entertainments: Entertainment[] = [];
  @observable entertainment: Entertainment | null = null;

  @action
  fetchAll = () => {
    this.entertainment = null;
    this.entertainmentAgent.getAllEntertainments()
      .then((response) => (this.entertainments = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  fetchById = (id: number) => {
    this.entertainment = null;
    this.entertainmentAgent.getOneEntertainment(id)
      .then((response) => (this.entertainment = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  update = (entertainment: Entertainment): Promise<boolean> => {
    return this.entertainmentAgent.updateEntertainment(entertainment)
      .then(() => {
        console.log('Достопримечательность обновлена');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при обновлении достопримечательности', error);
        return false;
      });
  };

  @action
  delete = (id: number): Promise<boolean> => {
    return this.entertainmentAgent.deleteEntertainment(id)
      .then(() => {
        console.log('Достопримечательность удалена');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при удалении достопримечательности', error);
        return false;
      });
  };
}