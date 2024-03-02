export class Rest {
  id: number;
  name: string;
  description: string;
  isClosed: boolean;

  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
    this.description = source.description;
    this.isClosed = source.isClosed;
  }

  static mapToDto = (model?: Rest): any => {
    return {
      id: model?.id,
      name: model?.name,
      description: model?.description,
      isClosed: model?.isClosed,
    }
  }
}