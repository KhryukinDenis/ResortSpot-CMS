export class Hotel {
  id: number;
  name: string;
  star: number;
  address: string;
  distanse_sea: number;
  price: number;
  description: string;

  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
    this.star = source.star;
    this.address = source.address;
    this.distanse_sea = source.distanse_sea;
    this.price = source.price;
    this.description = source.description;
  }

  static mapToDto = (model?: Hotel): any => {
    return {
      id: model?.id,
      name: model?.name,
      star: model?.star,
      address: model?.address,
      distance_sea: model?.distanse_sea,
      price: model?.price,
      description: model?.description,
    }
  }
}