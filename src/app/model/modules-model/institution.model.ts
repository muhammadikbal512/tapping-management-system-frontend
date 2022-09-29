import { UserModel } from "../user-model/user.model";

export class InstitutionModel {
    id: number = 0;
    institutionName: string = '';
    description: string = '';
    user!: UserModel
}
