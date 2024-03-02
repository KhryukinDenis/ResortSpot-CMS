export class Category {
  id: number;
  name: string;
  name_rus: string;

  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
    this.name_rus = source.name_rus;
  }

  static mapToDto = (model?: Category): any => {
    return {
      id: model?.id,
      name: model?.name,
      name_rus: model?.name_rus,
    }
  }
}