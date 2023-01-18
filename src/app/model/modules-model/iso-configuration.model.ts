export class IsoConfigurationModel {
  id!: number;
  name: string = '';
  description: string = '';
  hasHeader!: boolean;

  constructor(id?: number) {
    if (id !== undefined) this.id = id;
  }
}
