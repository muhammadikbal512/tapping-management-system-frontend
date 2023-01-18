export class EncodingModel {
  id!: number;
  encodingType: string = '';

  constructor(id?: number) {
    if (id !== undefined) this.id = id;
  }
}
