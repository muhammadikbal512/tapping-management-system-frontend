export class FieldFormatModel {
    id!: number;
    formatType: string = '';

    constructor(id?: number) {
        if (id !== undefined) this.id = id;
      }
}
