import { InstitutionModel } from "./institution.model";

export class TypeModel {
    id: number = 0;
    name: string = '';
    description: string = '';
    institution!: InstitutionModel
}
