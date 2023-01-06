export class IsoConfigurationModel {
  id!: number;
  name: string = '';
  description: string = '';
  hasHeader: boolean = false;

  constructor(id?: number) {
    if (id !== undefined) this.id = id;
  }
}
