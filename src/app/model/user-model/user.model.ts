import { RolesModel } from '../modules-model/roles.model';

export class UserModel {
  id: number = 0;
  userId: string = '';
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  email: string = '';
  logInDateDisplay!: Date;
  joinDate!: Date;
  profileImageUrl?: string = '';
  active: boolean = false;
  notLocked: boolean = false;
  role: string = '';
  // role!: RolesModel;
  authorities!: string[];
}
