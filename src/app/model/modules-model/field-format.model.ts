export class FieldFormatModel {
  id!: number;
  formatType: string = '';

  constructor(id?: number, formatType?: string) {
    if (id !== undefined) this.id = id;
    if (formatType !== undefined) this.formatType = formatType;
  }
}
