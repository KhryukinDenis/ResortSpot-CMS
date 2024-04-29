export class Entertainment {
  id: number;
  name: string;
  description: string;
  description_min: string;
  time: string;
  count_people: number;
  price: number;
  images: string[];

  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
    this.description = source.description;
    this.description_min = source.description_min;
    this.time = source.time;
    this.count_people = source.count_people;
    this.price = source.price;
    this.images = source.images;
  }

  static mapToDto = (model?: Entertainment): any => {
    return {
      id: model?.id,
      name: model?.name,
      description: model?.description,
      description_min: model?.description_min,
      time: model?.time,
      count_people: model?.count_people,
      price: model?.price,
      images: model?.images,
    }
  }
}