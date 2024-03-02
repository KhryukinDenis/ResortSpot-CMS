export class Nature {
  id: number;
  name: string;
  description: string;
  description_min: string;

  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
    this.description = source.description;
    this.description_min = source.description_min;
  }

  static mapToDto = (model?: Nature): any => {
    return {
      id: model?.id,
      name: model?.name,
      description: model?.description,
      description_min: model?.description_min,  
    }
  }
}