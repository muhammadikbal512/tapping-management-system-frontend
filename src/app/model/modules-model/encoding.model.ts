export class EncodingModel {
  id!: number;
  encodingType: string = '';

  constructor(id?: number, encodingType?: string) {
    if (id !== undefined) this.id = id;
    if (encodingType !== undefined) this.encodingType = encodingType;
  }
}
