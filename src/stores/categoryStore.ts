import { action, makeAutoObservable, observable } from "mobx";
import { Category } from "../model/category";
import agent from "../agent/agent";

export class CategoryStore {
  constructor() {makeAutoObservable(this)}

  categoryAgent = agent.CategoryAgent;

  @observable selectedCategory: Category | null = null;
  @observable categories: Category[] =[];
  @observable category: Category | null = null;

  @action
  setSelectedCategory = (category: Category | null) => {
    this.selectedCategory = category;
  };

  @action
  fetchAll = () => {
    this.category = null;
    this.categoryAgent.getAllCategories()
      .then((response) => (this.categories = response.data))
      .catch((error) => console.log(error));
  };
}