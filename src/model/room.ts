export class Room {
  id: number;
  name: string;
  area: number;
  count_people: number;
  description: string;
  price: number;
  images: string[];
  isBooked: boolean;
  
  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
    this.area = source.area;
    this.count_people = source.count_people;
    this.description = source.description;
    this.price = source.price;
    this.images = source.images;
    this.isBooked = source.isBooked;
  }

  static mapToDto = (model?: Room): any => {
    return {
      id: model?.id,
      name: model?.name,
      area: model?.area,
      count_people: model?.count_people,
      description: model?.description,
      price: model?.price,
      images: model?.images,
      isBooked: model?.isBooked,
    }
  }
}