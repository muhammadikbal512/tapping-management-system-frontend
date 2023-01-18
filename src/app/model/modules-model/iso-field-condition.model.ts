export class IsoFieldConditionModel {
    id!: number | undefined;

    constructor(id?: number) {
        if (id !== null) this.id = id;
      }
}
