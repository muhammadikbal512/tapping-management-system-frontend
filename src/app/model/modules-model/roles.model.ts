import { UserModel } from '../user-model/user.model';

export class RolesModel {
  id: number = 0;
  roleName: string = '';
  user!: UserModel;

  constructor(id?: number) {
    if (id !== undefined) this.id = id;
  }
}
