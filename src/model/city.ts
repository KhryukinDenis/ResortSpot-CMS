export class City {
  id: number;
  name: string;
  name_rus: string;
  description?: string;
  images: string[];

  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
    this.name_rus = source.name_rus;
    this.description = source.description;
    this.images = source.images;
  }

  static mapToDto = (model?: City): any => {
    return {
      id: model?.id,
      name: model?.name,
      name_rus: model?.name_rus,
      description: model?.description,
      images: model?.images,
    }
  }
} 