export class City {
  id: number;
  name: string;
  name_rus: string;
  description?: string;

  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
    this.name_rus = source.name_rus;
    this.description = source.description;
  }

  static mapToDto = (model?: City): any => {
    return {
      id: model?.id,
      name: model?.name,
      name_rus: model?.name_rus,
      description: model?.description,
    }
  }
} 