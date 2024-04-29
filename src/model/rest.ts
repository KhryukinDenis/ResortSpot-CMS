export class Rest {
  id: number;
  name: string;
  description: string;
  images: string[];
  isClosed: boolean;

  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
    this.description = source.description;
    this.images = source.images;
    this.isClosed = source.isClosed;
  }

  static mapToDto = (model?: Rest): any => {
    return {
      id: model?.id,
      name: model?.name,
      description: model?.description,
      images: model?.images,
      isClosed: model?.isClosed,
    }
  }
}