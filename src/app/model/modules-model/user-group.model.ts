import { UserModel } from "../user-model/user.model";

export class UserGroupModel {
    id: number = 0;
    groupName: string = '';
    users!: UserModel

    constructor(id?: number) {
        if (id !== undefined) this.id = id;
      }
}
