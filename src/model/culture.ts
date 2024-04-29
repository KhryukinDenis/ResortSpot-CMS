export class Culture {
  id: number;
  name: string;
  address: string;
  description: string;
  description_min: string;
  images: string[];

  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
    this.address = source.address;
    this.description = source.description;
    this.description_min = source.description_min;
    this.images = source.images;
  }

  static mapToDto = (model?: Culture): any => {
    return {
      id: model?.id,
      name: model?.name,
      address: model?.address,
      description: model?.description,
      description_min: model?.description_min,
      images: model?.images,
    }
  }
}