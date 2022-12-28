import { RolesModel } from './roles.model';

export class AuthoritiesModel {
  id!: number;
  authorityName: string = '';

  constructor(id?: number) {
    if (id !== undefined) this.id = id;
  }
}
