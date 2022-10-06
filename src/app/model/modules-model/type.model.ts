import { UserModel } from "../user-model/user.model";

export class TypeModel {
    id!: number;
    typeName: string = '';
    users!: UserModel

    constructor(id?: number) {
        if (id !== undefined) this.id = id;
      }
}
