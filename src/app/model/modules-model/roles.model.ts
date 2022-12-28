import { UserModel } from '../user-model/user.model';
import { AuthoritiesModel } from './authorities.model';

export class RolesModel {
  id: number = 0;
  roleName: string = '';
  authorities!: AuthoritiesModel;
  user!: UserModel;

  constructor(id?: number) {
    if (id !== undefined) this.id = id;
  }
}
